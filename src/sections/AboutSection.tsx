"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { aboutCards, aboutMetaCards } from "../data/portfolioData";
import { Card } from "../components/ui/Card";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/sections/Reveal";
import {
  ambientPulse,
  interactiveCard,
  sectionReveal,
  sectionStagger,
} from "../lib/motion";

export function AboutSection() {
  return (
    <motion.section
      id="about"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Ambient Background */}
      <motion.div
        variants={ambientPulse}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute inset-0 opacity-30"
      >
        <div className="absolute left-1/3 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          {/* LEFT SIDE */}
          <motion.div
            variants={sectionStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Reveal>
              <SectionTitle
                eyebrow="Identity"
                title="Designing intelligent digital experiences."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-base leading-[1.9] text-white/68 sm:text-lg">
                I’m Yash Sen — a backend-focused full stack developer building
                scalable systems, cinematic interfaces, and AI-native web
                experiences that balance performance, clarity, and emotional
                interaction design.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-xl text-sm leading-[1.9] text-white/45 sm:text-[15px]">
                My work focuses on secure architecture, interaction systems,
                motion-driven storytelling, and thoughtful user experiences that
                feel calm, responsive, and intelligently crafted.
              </p>
            </Reveal>

            {/* META GRID */}
            <motion.div
              variants={sectionStagger}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              {aboutMetaCards.map((item) => (
                <Reveal key={item.label}>
                  <motion.div
                    variants={interactiveCard}
                    initial="rest"
                    whileHover="hover"
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-5
                      backdrop-blur-xl
                      transition-colors
                      duration-500
                      hover:border-cyan-400/20
                      hover:bg-white/[0.05]
                    "
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="text-[10px] uppercase tracking-[0.32em] text-white/38">
                        {item.label}
                      </div>

                      <div className="mt-3 text-sm font-medium text-white/92 sm:text-[15px]">
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={sectionStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {aboutCards.map((card) => (
              <Reveal key={card.title}>
                <motion.div
                  variants={interactiveCard}
                  initial="rest"
                  whileHover="hover"
                  className="h-full"
                >
                  <Card
                    className="
                      group
                      relative
                      h-full
                      overflow-hidden
                      border-white/10
                      bg-white/[0.03]
                      p-6
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      hover:border-cyan-400/20
                      hover:bg-white/[0.045]
                    "
                  >
                    {/* subtle glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="text-base font-semibold tracking-tight text-white/92">
                        {card.title}
                      </div>

                      <p className="mt-3 text-sm leading-[1.9] text-white/58">
                        {card.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
