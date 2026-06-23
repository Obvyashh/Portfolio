"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Sparkles,
  Shield,
  Database,
  LayoutDashboard,
} from "lucide-react";

import {
  sectionReveal,
  sectionStagger,
  interactiveCard,
  ambientPulse,
} from "../motion/motionSystem";

export default function FeaturedProject() {
  return (
    <motion.section
      id="featured-project"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative overflow-hidden py-28 sm:py-32"
    >
      <motion.div
        variants={ambientPulse}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute inset-0 opacity-30"
      >
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <motion.div
            variants={sectionReveal}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-4
              py-1.5
              text-[11px]
              uppercase
              tracking-[0.32em]
              text-cyan-300/80
            "
          >
            <Sparkles className="h-3.5 w-3.5" />
            Featured Project
          </motion.div>

          <motion.h2
            variants={sectionReveal}
            className="
              mt-6
              text-4xl
              font-semibold
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            University Management System
          </motion.h2>

          <motion.p
            variants={sectionReveal}
            className="
              mt-6
              max-w-3xl
              text-base
              leading-[1.95]
              text-white/58
              sm:text-lg
            "
          >
            A scalable full-stack university management platform focused on
            secure authentication, student onboarding, CMS administration,
            role-based access control, analytics dashboards, and backend-driven
            workflows.
          </motion.p>
        </motion.div>

        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mt-16
            grid
            gap-12
            lg:grid-cols-[1fr_1.1fr]
            lg:items-center
          "
        >
          <motion.div
            variants={interactiveCard}
            initial="rest"
            whileHover="hover"
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "REST APIs",
              ].map((tech) => (
                <div
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-2
                    text-xs
                    tracking-wide
                    text-white/70
                    transition-all
                    duration-300
                    hover:border-cyan-400/20
                    hover:bg-cyan-500/[0.06]
                    hover:text-white
                  "
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="space-y-5 text-sm leading-[1.95] text-white/58 sm:text-[15px]">
              <p>
                Built scalable modules for student registration, onboarding
                workflows, authentication systems, and administrative CMS
                controls with a strong focus on maintainability and performance.
              </p>

              <p>
                Designed reusable frontend architecture with responsive layouts,
                dynamic API-driven interfaces, and optimized backend data
                handling for large-scale operational workflows.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard
                icon={<Shield className="h-4 w-4" />}
                title="Secure Authentication"
                description="Role-based access control and protected backend workflows."
              />

              <FeatureCard
                icon={<Database className="h-4 w-4" />}
                title="Scalable APIs"
                description="Modular REST architecture designed for growth and maintainability."
              />

              <FeatureCard
                icon={<LayoutDashboard className="h-4 w-4" />}
                title="Analytics Dashboard"
                description="Backend-powered admin insights and operational visibility."
              />

              <FeatureCard
                icon={<Sparkles className="h-4 w-4" />}
                title="Modern UI System"
                description="Responsive interface architecture with reusable components."
              />
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <motion.a
                whileTap={{ scale: 0.985 }}
                href="#"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/15
                "
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.985 }}
                href="#"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white/80
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                <Github className="h-4 w-4" />
                GitHub
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            variants={interactiveCard}
            initial="rest"
            whileHover="hover"
            className="relative"
          >
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-3
                backdrop-blur-2xl
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-[24px]">
                <Image
                  src="/projects/university-management.png"
                  alt="University Management System"
                  width={1200}
                  height={800}
                  priority
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    ease-out
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/40
                  px-4
                  py-3
                  backdrop-blur-xl
                "
              >
                <div className="text-[10px] uppercase tracking-[0.28em] text-cyan-300/70">
                  System Focus
                </div>

                <div className="mt-1 text-sm font-medium text-white/90">
                  Backend Architecture
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-4
        transition-all
        duration-300
        hover:border-cyan-400/20
        hover:bg-white/[0.05]
      "
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
        {icon}
      </div>

      <div className="mt-4 text-sm font-medium text-white/90">
        {title}
      </div>

      <p className="mt-2 text-xs leading-[1.8] text-white/55">
        {description}
      </p>
    </div>
  );
}
