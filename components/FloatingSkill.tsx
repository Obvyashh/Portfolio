"use client";

import { motion } from "framer-motion";
import { Braces, Code2, FileCode2, GitBranch, Github, Layers3, Palette, Server } from "lucide-react";

type FloatingSkillProps = {
  label: string;
  detail: string;
  icon: "react" | "typescript" | "nextjs" | "nodejs" | "tailwind" | "github";
  className?: string;
};

const iconMap = {
  react: Layers3,
  typescript: FileCode2,
  nextjs: Braces,
  nodejs: Server,
  tailwind: Palette,
  github: Github,
} as const;

export function FloatingSkill({ label, detail, icon, className = "" }: FloatingSkillProps) {
  const Icon = iconMap[icon] ?? Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`absolute hidden min-w-[180px] items-center gap-4 rounded-2xl border border-[#1587ff]/40 bg-[rgba(7,18,38,0.72)] px-4 py-4 shadow-[0_0_28px_rgba(0,153,255,0.18)] backdrop-blur-xl lg:flex ${className}`}
    >
      <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-[#1587ff]/35 bg-[#08162e] text-[#25b6ff]">
        <Icon className="size-6" />
      </div>
      <div className="min-w-0">
        <p className="truncate text-lg font-semibold text-white">{label}</p>
        <p className="truncate text-sm text-slate-400">{detail}</p>
      </div>
      {icon === "github" ? <GitBranch className="ml-auto size-4 text-slate-500" /> : null}
    </motion.div>
  );
}
