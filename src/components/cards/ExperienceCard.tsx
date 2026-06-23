"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { Card } from "../ui/Card";

import type { Experience } from "../../data/experience";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative"
    >
      <div className="flex items-start gap-4">
        <div className="relative z-10 mt-1 flex h-8 w-8 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="h-2 w-2 rounded-full bg-cyan-300/90 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
        </div>

        <Card className="flex-1 p-5 sm:p-6 rounded-3xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-white/95 font-semibold">{experience.company}</div>
              <div className="mt-1 text-sm text-white/70">{experience.role}</div>
            </div>
            <div className="text-xs text-white/50 sm:text-right">
              {experience.duration}
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-white/65">
            {experience.description}
          </p>
        </Card>
      </div>
    </motion.div>
  );
}

