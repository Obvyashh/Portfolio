"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Card } from "../ui/Card";
import { hoverLift } from "../../lib/motion";

type SkillCardValue = {
  name: string;
  description?: string;
};

export function SkillCard({ skill }: { skill: SkillCardValue }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={hoverLift}
      className="group relative h-full"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10 bg-cyan-500/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative h-full overflow-hidden rounded-3xl p-[1px]">
        {/* Rotating border gradient - visible only on hover */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,#22d3ee_180deg,transparent_210deg,transparent_360deg)]"
          />
        </div>

        <Card 
          className="relative h-full p-5 sm:p-6 border-white/10 bg-[#0a0a0a] backdrop-blur-sm transition-all duration-300 group-hover:border-transparent group-hover:bg-[#0f0f0f]"
        >
          <div className="text-white/90 font-semibold group-hover:text-cyan-300 transition-colors duration-300">
            {skill.name}
          </div>
          <div className="mt-3 text-xs text-white/55 leading-relaxed">
            {skill.description ?? "Built for speed, clarity & delightful motion."}
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
