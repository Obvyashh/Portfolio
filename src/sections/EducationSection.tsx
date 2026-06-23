"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";

import { education } from "../data/education";

import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/sections/Reveal";
import { Card } from "../components/ui/Card";

import {
  sectionReveal,
  sectionStagger,
  interactiveCard,
  ambientPulse,
} from "../motion/motionSystem";

export function EducationSection() {
  return (
    <motion.section
      id="education"
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
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <Reveal>
            <SectionTitle
              eyebrow="Education"
              title="Academic foundation & technical growth."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 text-base leading-[1.9] text-white/60 sm:text-lg">
              My academic journey shaped the foundation for systems thinking,
              backend engineering, scalable architecture, and modern application
              development.
            </p>
          </Reveal>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mt-16"
        >
          {/* Vertical line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-6">
            {education.map((item, idx) => (
              <Reveal key={item.institution} delay={0.05 * idx}>
                <div className="relative md:pl-14">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-cyan-400/20 bg-black/60 backdrop-blur-xl md:flex">
                    <GraduationCap className="h-4 w-4 text-cyan-300/80" />
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
                      {/* glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative z-10">
                        {/* Top */}
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                          {/* Left */}
                          <div>
                            <div className="text-xl font-semibold tracking-tight text-white/95">
                              {item.degree}
                            </div>

                            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/55">
                              <div className="flex items-center gap-2">
                                <GraduationCap className="h-4 w-4 text-cyan-300/70" />
                                <span>{item.institution}</span>
                              </div>

                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-cyan-300/70" />
                                <span>{item.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Right */}
                          <div className="flex flex-col items-start gap-2 text-sm lg:items-end">
                            <div className="flex items-center gap-2 text-white/50">
                              <CalendarDays className="h-4 w-4 text-cyan-300/70" />
                              <span>{item.duration}</span>
                            </div>

                            <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs tracking-wide text-white/70">
                              CGPA · {item.cgpa}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mt-6 text-sm leading-[1.9] text-white/58 sm:text-[15px]">
                          {item.details}
                        </p>
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