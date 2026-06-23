"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

import {
  navItems,
  portfolioProfile,
  socials,
} from "../data/portfolioData";

import { Button } from "../components/ui/Button";

import {
  sectionReveal,
  sectionStagger,
  interactiveCard,
  ambientPulse,
} from "../motion/motionSystem";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative overflow-hidden border-t border-white/10 py-20"
    >
      <motion.div
        variants={ambientPulse}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute inset-0 opacity-30"
      >
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            flex
            flex-col
            gap-14
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-2xl">
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
                text-cyan-300/75
              "
            >
              <Sparkles className="h-3.5 w-3.5" />
              Portfolio System Online
            </motion.div>

            <motion.h3
              variants={sectionReveal}
              className="
                mt-6
                text-3xl
                font-semibold
                tracking-tight
                text-white
                sm:text-4xl
              "
            >
              Building intelligent digital experiences.
            </motion.h3>

            <motion.p
              variants={sectionReveal}
              className="
                mt-5
                max-w-xl
                text-sm
                leading-[1.95]
                text-white/55
                sm:text-base
              "
            >
              Focused on scalable backend systems, cinematic interfaces,
              and AI-native interaction design with modern web technologies.
            </motion.p>

            <motion.div
              variants={sectionReveal}
              className="
                mt-8
                flex
                flex-wrap
                gap-x-6
                gap-y-3
                text-sm
              "
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    text-white/45
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={interactiveCard}
            initial="rest"
            whileHover="hover"
            className="w-full max-w-md"
          >
            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-2xl
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                      Contact
                    </div>

                    <div className="mt-2 text-lg font-medium text-white/92">
                      {portfolioProfile.name}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-cyan-300">
                    <Mail className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {socials.map((social) => {
                    const Icon =
                      social.name.toLowerCase().includes("github")
                        ? Github
                        : social.name.toLowerCase().includes("linkedin")
                          ? Linkedin
                          : ArrowUpRight;

                    return (
                      <Link
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.04]
                          px-4
                          py-3
                          text-sm
                          text-white/70
                          transition-all
                          duration-300
                          hover:border-cyan-400/20
                          hover:bg-cyan-500/[0.08]
                          hover:text-white
                        "
                      >
                        <Icon className="h-4 w-4" />
                        {social.name}
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    variant="secondary"
                    href="#contact"
                    className="
                      border-cyan-400/20
                      bg-cyan-500/10
                      hover:bg-cyan-500/15
                    "
                  >
                    Let’s Talk
                  </Button>

                  <motion.div whileTap={{ scale: 0.985 }}>
                    <Button variant="ghost" href="#top" className="group">
                      Back to top

                      <ArrowUpRight
                        className="
                          ml-2
                          h-4
                          w-4
                          transition-transform
                          duration-300
                          group-hover:-translate-y-[2px]
                          group-hover:translate-x-[2px]
                        "
                      />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={sectionReveal}
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            text-xs
            text-white/35
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            © {year} {portfolioProfile.name}.{" "}
            {portfolioProfile.footerTagline}
          </div>

          <div className="tracking-[0.2em] uppercase text-white/25">
            AI-Native Portfolio Experience
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
