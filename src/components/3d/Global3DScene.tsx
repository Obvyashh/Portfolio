"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Generate points in a sphere
function generateSpherePoints(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function ParticleField() {
  const ref = React.useRef<THREE.Points>(null!);
  const [positions] = React.useState(() => generateSpherePoints(4000, 6));

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    // Base continuous rotation
    ref.current.rotation.x -= delta * 0.03;
    ref.current.rotation.y -= delta * 0.05;

    // Smoothly shift towards mouse position
    const targetX = state.pointer.y * 0.3;
    const targetY = state.pointer.x * 0.3;
    
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.05;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.05;
    
    // Add scroll interaction (move camera slightly based on scroll)
    const scrollY = window.scrollY;
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, -scrollY * 0.001, 0.05);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
      {/* Add a secondary point layer with purple color */}
      <Points positions={generateSpherePoints(1500, 4)} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#a78bfa"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
}

export function Global3DScene() {
  return (
    <div className="fixed inset-0 -z-50 bg-[#05070d]">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <fog attach="fog" args={["#05070d", 2, 7]} />
        <ParticleField />
      </Canvas>
      {/* Global Vignette/Glow over the 3D scene */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#05070d_100%)]" />
    </div>
  );
}
