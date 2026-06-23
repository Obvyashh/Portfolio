"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, Environment } from "@react-three/drei";
import type { Group } from "three";

import { Reveal } from "../components/sections/Reveal";
import { Card } from "../components/ui/Card";
import {
  ambientPulse,
  interactiveCard,
  sectionReveal,
  sectionStagger,
} from "../lib/motion";

function OrbitalSphere() {
  const groupRef = React.useRef<Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.35;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.18;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1.1} floatIntensity={0.9}>
        <Sphere args={[1.35, 64, 64]}>
          <meshStandardMaterial
            color="#22d3ee"
            wireframe
            emissive="#22d3ee"
            emissiveIntensity={0.2}
            metalness={0.2}
            roughness={0.25}
          />
        </Sphere>
      </Float>
    </group>
  );
}

export function Scene3DSection() {
  return (
    <section id="scene" className="relative overflow-hidden py-24 sm:py-28">
      <motion.div
        variants={ambientPulse}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute inset-0 opacity-30"
      >
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        >
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-200/80">
                  3D Scene
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Cinematic 3D motion for visual depth.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-[1.95] text-white/60 sm:text-lg">
                A lightweight Three.js scene adds spatial energy to the portfolio
                without getting in the way of the product story.
              </p>
            </Reveal>
          </div>

          <Reveal className="relative">
            <motion.div variants={interactiveCard} initial="rest" whileHover="hover">
              <Card className="relative overflow-hidden border-white/10 bg-white/[0.03] p-4 backdrop-blur-2xl sm:p-6">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-transparent" />

                <div className="relative h-[22rem] overflow-hidden rounded-[28px] border border-white/10 bg-black/30 sm:h-[28rem]">
                  <Canvas
                    camera={{ position: [0, 0, 4.2], fov: 50 }}
                    className="h-full w-full"
                  >
                    <ambientLight intensity={1.2} />
                    <directionalLight position={[4, 4, 4]} intensity={1.6} />
                    <pointLight position={[-4, -2, 2]} intensity={0.8} color="#22d3ee" />
                    <pointLight position={[3, 2, -2]} intensity={0.5} color="#a78bfa" />
                    <Environment preset="city" />
                    <OrbitalSphere />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.4} />
                  </Canvas>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4 sm:p-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/65 backdrop-blur-xl">
                      Live wireframe orbit
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}
