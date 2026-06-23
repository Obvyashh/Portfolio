"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDown, BrainCircuit, Cpu, Rocket } from "lucide-react";

import { Reveal } from "../components/sections/Reveal";
import AnimatedText from "../components/ui/AnimatedText";
import { Card } from "../components/ui/Card";
import {
  ambientPulse,
  interactiveCard,
  sectionReveal,
  sectionStagger,
} from "../lib/motion";

const STORY_POINTS = [
  {
    icon: Cpu,
    title: "I build backend systems.",
    description:
      "Scalable APIs, authentication layers, and operational workflows designed for real production load.",
    accent: "text-cyan-300",
  },
  {
    icon: BrainCircuit,
    title: "I design AI interfaces.",
    description:
      "Human-centered interactions that make assistant experiences feel responsive, useful, and alive.",
    accent: "text-fuchsia-300",
  },
  {
    icon: Rocket,
    title: "I ship production apps.",
    description:
      "Not just polished UI — complete systems that can be deployed, extended, and maintained.",
    accent: "text-emerald-300",
  },
] as const;

export function StoryScrollSection() {
  return (
    <section
      id="story"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <motion.div
        variants={ambientPulse}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute inset-0 opacity-30"
      >
        <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="max-w-3xl"
        >
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 backdrop-blur-xl">
              <ArrowDown className="h-4 w-4 text-cyan-300" />
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-200/80">
                Scroll Storytelling
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A portfolio narrative that unfolds as you scroll.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <AnimatedText 
              text="Each section reinforces the same signal: backend systems, AI interfaces, and production-ready delivery working together as one product story."
              className="mt-6 max-w-2xl text-base leading-[1.95] text-white/60 sm:text-lg"
            />
          </Reveal>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {STORY_POINTS.map((point, index) => {
            const Icon = point.icon;

            return (
              <Reveal key={point.title} delay={0.08 * index}>
                <motion.div
                  variants={interactiveCard}
                  initial="rest"
                  whileHover="hover"
                  className="h-full"
                >
                  <Card className="group relative h-full overflow-hidden border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 ${point.accent}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                        {point.title}
                      </h3>

                      <p className="mt-4 text-sm leading-[1.9] text-white/60">
                        {point.description}
                      </p>

                      <div className="mt-6 h-px w-full bg-white/10" />

                      <div className="mt-4 text-xs uppercase tracking-[0.28em] text-white/35">
                        {index + 1} / 3
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
