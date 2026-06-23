"use client";

import * as React from "react";
import { motion } from "framer-motion";

import {
  Sparkles,
  Cpu,
  Database,
  Server,
  BrainCircuit,
  Code2,
  Globe,
  Workflow,
} from "lucide-react";

import { skills } from "../data/skills";
import { skillTechIcons } from "../data/skillTechIcons";

import { Card } from "../components/ui/Card";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Reveal } from "../components/sections/Reveal";

import {
  sectionReveal,
  sectionStagger,
  interactiveCard,
  ambientPulse,
} from "../motion/motionSystem";

const iconForKey = (key: string) => {
  switch (key) {
    case "react":
      return <Sparkles className="h-5 w-5" />;

    case "next":
      return <Cpu className="h-5 w-5" />;

    case "tailwind":
      return <Code2 className="h-5 w-5" />;

    case "node":
      return <Server className="h-5 w-5" />;

    case "database":
      return <Database className="h-5 w-5" />;

    case "api":
      return <Workflow className="h-5 w-5" />;

    case "ai":
      return <BrainCircuit className="h-5 w-5" />;

    default:
      return <Globe className="h-5 w-5" />;
  }
};

const categoryAccent = (category: string) => {
  switch (category.toLowerCase()) {
    case "frontend":
      return "from-cyan-500/10 to-transparent";

    case "backend":
      return "from-blue-500/10 to-transparent";

    case "database":
      return "from-violet-500/10 to-transparent";

    default:
      return "from-white/5 to-transparent";
  }
};

export function SkillsSection() {
  return (
    <section
      id="skills"
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
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[420px]
            w-[780px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/5
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[360px]
            w-[420px]
            rounded-full
            bg-blue-500/5
            blur-[120px]
          "
        />
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
                Engineering Stack
              </span>
            </div>
          </motion.div>

          <motion.div variants={sectionReveal} className="mt-6">
            <SectionTitle
              eyebrow="Skills"
              title="Technologies powering scalable systems."
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
            Focused on backend architecture, scalable APIs, modern frontend
            engineering, database systems, and AI-native interaction
            experiences built with performance and maintainability in mind.
          </motion.p>
        </motion.div>

        <div
          className="
            mt-16
            grid
            gap-8
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-start
          "
        >
          <motion.div
            variants={sectionStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5"
          >
            {skills.map((skillGroup, idx) => (
              <Reveal key={skillGroup.category} delay={0.05 * idx}>
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
                      border-white/10
                      bg-white/[0.03]
                      p-6
                      backdrop-blur-2xl
                    "
                  >
                    <div
                      className={`
                        absolute
                        inset-0
                        bg-gradient-to-br
                        ${categoryAccent(skillGroup.category)}
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      `}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div>
                          <div
                            className="
                              text-xs
                              uppercase
                              tracking-[0.26em]
                              text-white/45
                            "
                          >
                            Category
                          </div>

                          <div
                            className="
                              mt-2
                              text-xl
                              font-semibold
                              text-white/92
                            "
                          >
                            {skillGroup.category}
                          </div>
                        </div>

                        <div
                          className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-black/20
                            p-3
                            text-cyan-300
                          "
                        >
                          {skillGroup.category === "Frontend" ? (
                            <Code2 className="h-5 w-5" />
                          ) : skillGroup.category === "Backend" ? (
                            <Server className="h-5 w-5" />
                          ) : (
                            <Database className="h-5 w-5" />
                          )}
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {skillGroup.items.map((skill) => (
                          <motion.div
                            key={skill}
                            whileHover={{
                              scale: 1.03,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                            className="
                              rounded-2xl
                              border
                              border-white/10
                              bg-white/[0.04]
                              px-4
                              py-2
                              text-sm
                              text-white/75
                              transition-all
                              duration-300
                              hover:border-cyan-400/20
                              hover:bg-cyan-500/[0.08]
                              hover:text-white
                            "
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Reveal>
            ))}
          </motion.div>

          <motion.div
            variants={sectionStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Reveal>
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
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-2xl
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-cyan-500/10
                      via-transparent
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

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
                          Technology Matrix
                        </div>

                        <div
                          className="
                            mt-2
                            text-2xl
                            font-semibold
                            text-white
                          "
                        >
                          Core Stack
                        </div>
                      </div>

                      <div
                        className="
                          rounded-2xl
                          border
                          border-cyan-400/20
                          bg-cyan-500/10
                          p-3
                          text-cyan-300
                        "
                      >
                        <Cpu className="h-5 w-5" />
                      </div>
                    </div>

                    <p
                      className="
                        mt-5
                        text-sm
                        leading-[1.9]
                        text-white/60
                      "
                    >
                      Lightweight visual identity system designed to support
                      scalable engineering narratives without overwhelming the
                      cinematic portfolio experience.
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {skillTechIcons.map((tech) => (
                        <motion.div
                          key={tech.key}
                          whileHover={{
                            y: -4,
                            scale: 1.02,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                          }}
                          className="
                            group/item
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-4
                            backdrop-blur-xl
                          "
                        >
                          <div
                            className="
                              absolute
                              inset-0
                              opacity-0
                              transition-opacity
                              duration-300
                              group-hover/item:opacity-100
                              bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.12),transparent_70%)]
                            "
                          />

                          <div className="relative z-10">
                            <div
                              className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-2xl
                                border
                                border-white/10
                                bg-black/20
                                text-cyan-300
                              "
                            >
                              {iconForKey(tech.key)}
                            </div>

                            <div
                              className="
                                mt-4
                                text-sm
                                font-semibold
                                text-white/85
                              "
                            >
                              {tech.name}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div
                      className="
                        mt-8
                        rounded-3xl
                        border
                        border-white/10
                        bg-black/20
                        p-5
                      "
                    >
                      <div
                        className="
                          text-xs
                          uppercase
                          tracking-[0.24em]
                          text-white/45
                        "
                      >
                        Engineering Philosophy
                      </div>

                      <p
                        className="
                          mt-3
                          text-sm
                          leading-[1.9]
                          text-white/60
                        "
                      >
                        Build systems that feel intelligent, scale cleanly,
                        and remain maintainable long after the first release.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
