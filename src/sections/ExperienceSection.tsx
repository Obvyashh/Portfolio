"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

import { experience } from "../data/experience";

import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/sections/Reveal";
import { Card } from "../components/ui/Card";

import {
  sectionReveal,
  sectionStagger,
  interactiveCard,
  ambientPulse,
} from "../motion/motionSystem";

export function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <motion.div
        variants={ambientPulse}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute inset-0 opacity-30"
      >
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <Reveal>
            <SectionTitle
              eyebrow="Experience"
              title="Building scalable systems & modern digital products."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 text-base leading-[1.9] text-white/60 sm:text-lg">
              My experience focuses on backend systems, scalable APIs,
              performance-driven architecture, and crafting intelligent
              user experiences with modern frontend technologies.
            </p>
          </Reveal>
        </motion.div>

        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mt-16"
        >
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-6">
            {experience.map((item, idx) => (
              <Reveal key={item.company} delay={0.05 * idx}>
                <div className="relative md:pl-14">
                  <div className="absolute left-0 top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-black/60 backdrop-blur-xl md:flex">
                    <BriefcaseBusiness className="h-4 w-4 text-cyan-300/80" />
                  </div>

                  <motion.div
                    variants={interactiveCard}
                    initial="rest"
                    whileHover="hover"
                  >
                    <Card
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[30px]
                        border-white/10
                        bg-white/[0.03]
                        p-6
                        backdrop-blur-2xl
                        transition-all
                        duration-500
                        hover:border-cyan-400/20
                        hover:bg-white/[0.045]
                        sm:p-7
                      "
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative z-10">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-semibold tracking-tight text-white/95">
                                {item.role}
                              </h3>

                              <ArrowUpRight className="h-4 w-4 text-cyan-300/70 opacity-0 transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:opacity-100" />
                            </div>

                            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/55">
                              <div className="flex items-center gap-2">
                                <BriefcaseBusiness className="h-4 w-4 text-cyan-300/70" />
                                <span>{item.company}</span>
                              </div>

                              {item.location ? (
                                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs tracking-wide text-white/65">
                                  {item.location}
                                </div>
                              ) : null}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-white/50">
                            <CalendarDays className="h-4 w-4 text-cyan-300/70" />
                            <span>{item.duration}</span>
                          </div>
                        </div>

                        <p className="mt-6 text-sm leading-[1.95] text-white/58 sm:text-[15px]">
                          {item.description}
                        </p>

                        {item.highlights && item.highlights.length > 0 ? (
                          <div className="mt-6 flex flex-wrap gap-2">
                            {item.highlights.map((highlight) => (
                              <div
                                key={highlight}
                                className="
                                  rounded-full
                                  border
                                  border-white/10
                                  bg-white/[0.04]
                                  px-3
                                  py-1.5
                                  text-[11px]
                                  tracking-wide
                                  text-white/65
                                  transition-colors
                                  duration-300
                                  hover:border-cyan-400/20
                                  hover:text-white/80
                                "
                              >
                                {highlight}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
