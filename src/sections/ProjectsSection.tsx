"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

import { projects } from "../data/projects";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Reveal } from "../components/sections/Reveal";
import { SectionTitle } from "../components/ui/SectionTitle";

import {
  sectionReveal,
  sectionStagger,
  interactiveCard,
  ambientPulse,
} from "../motion/motionSystem";

import { swipeUp } from "../animations/variants";

export function ProjectsSection() {
  const visibleProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
      "
    >
      <motion.div
        variants={ambientPulse}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-cyan-500/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[160px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-3xl"
        >
          <motion.div variants={sectionReveal}>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/10
                px-4
                py-2
                backdrop-blur-xl
              "
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />

              <span
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.24em]
                  text-cyan-200/80
                "
              >
                Selected Work
              </span>
            </div>
          </motion.div>

          <motion.div variants={sectionReveal} className="mt-6">
            <SectionTitle
              eyebrow="Projects"
              title="Products and platforms I’ve built."
            />
          </motion.div>

          <motion.p
            variants={sectionReveal}
            className="
              mt-6
              max-w-2xl
              text-base
              leading-[1.95]
              text-white/60
              sm:text-lg
            "
          >
            A mix of cinematic frontend systems and backend-heavy platforms,
            spanning AI-native UI, enterprise workflows, secure APIs, and
            responsive product experiences.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.id} delay={0.05 * index} variant={swipeUp}>
              <motion.div
                variants={interactiveCard}
                initial="rest"
                whileHover="hover"
              >
                <Card className="group relative overflow-hidden border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div
                          className="
                            text-xs
                            uppercase
                            tracking-[0.26em]
                            text-white/45
                          "
                        >
                          {project.featuredTag ?? "Project"}
                        </div>

                        <h3 className="mt-2 text-2xl font-semibold text-white">
                          {project.title}
                        </h3>
                      </div>

                      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-cyan-300">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-[1.9] text-white/60">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-3
                            py-1.5
                            text-xs
                            text-white/75
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.github ? (
                        <Button
                          href={project.github}
                          variant="secondary"
                          size="sm"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </Button>
                      ) : null}

                      {project.live ? (
                        <Button href={project.live} variant="ghost" size="sm">
                          <ArrowUpRight className="h-4 w-4" />
                          Live Demo
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
