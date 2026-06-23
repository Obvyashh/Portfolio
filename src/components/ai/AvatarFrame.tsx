"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import type { AiState } from "../../features/conversation/useConversation";

type Props = {
  aiState: AiState;
};

const techLabels = [
  ["React", "left-[6%] top-[18%]"],
  ["TypeScript", "left-[4%] top-[36%]"],
  ["Next.js", "left-[10%] top-[58%]"],
  ["Tailwind CSS", "right-[4%] top-[21%]"],
  ["AI Agents", "right-[8%] top-[40%]"],
  ["Vector Databases", "right-[3%] top-[61%]"],
  ["REST APIs", "left-[22%] bottom-[13%]"],
  ["Authentication", "right-[21%] bottom-[15%]"],
] as const;

export function AvatarFrame({ aiState }: Props) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * 200);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * 200);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative h-[min(78vh,820px)] min-h-[650px] w-full max-w-[1040px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[20%] top-[10%] h-[68%] w-[58%] rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="absolute bottom-[9%] right-[12%] h-48 w-48 rounded-full border border-cyan-200/15 bg-[radial-gradient(circle,rgba(34,211,238,0.16),transparent_64%)]" />
        <div className="absolute left-[2%] top-[18%] h-px w-[84%] rotate-[14deg] bg-gradient-to-r from-transparent via-cyan-200/24 to-transparent" />
        <div className="absolute left-[8%] top-[55%] h-px w-[78%] -rotate-[10deg] bg-gradient-to-r from-transparent via-cyan-200/18 to-transparent" />
        <div className="absolute left-[16%] bottom-[18%] h-px w-[62%] rotate-[5deg] bg-gradient-to-r from-transparent via-cyan-200/22 to-transparent" />
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200/75 shadow-[0_0_18px_rgba(103,232,249,0.9)]"
            style={{
              left: `${8 + ((index * 19) % 84)}%`,
              top: `${10 + ((index * 31) % 78)}%`,
              opacity: index % 3 === 0 ? 0.8 : 0.42,
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute inset-0"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={reduceMotion ? undefined : { y: [0, -10, 0], scale: [1, 1.012, 1] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-y-0 left-[12%] right-[4%]">
          <Image
            src="/images/hero-ai-engineer-v2.png"
            alt="Yash AI Assistant, futuristic AI engineer"
            fill
            priority
            sizes="(min-width: 1280px) 980px, 58vw"
            className="object-contain object-center drop-shadow-[0_54px_140px_rgba(0,153,255,0.32)]"
            style={{
              transform: "translateZ(44px) scale(1.12)",
              filter: "contrast(1.08) saturate(1.08)",
            }}
          />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {techLabels.map(([label, className]) => (
          <span
            key={label}
            className={`absolute font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-100/38 drop-shadow-[0_0_16px_rgba(103,232,249,0.5)] ${className}`}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-[11%] right-[18%] font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-100/45">
        Yash AI / {aiState}
      </div>
    </motion.div>
  );
}
