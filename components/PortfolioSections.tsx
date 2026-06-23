"use client";

import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  FileCode2,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  Palette,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.65, ease: "easeOut" },
} as const;

const skillIcons = {
  javascript: Code2,
  typescript: FileCode2,
  react: Layers3,
  html5: Code2,
  css3: Palette,
  bootstrap: Sparkles,
  tailwind: Palette,
  python: Terminal,
  nodejs: Server,
  csharp: Code2,
} as const;

const projectIcons = {
  briefcase: BriefcaseBusiness,
  sparkles: Sparkles,
  shield: ShieldCheck,
  terminal: Terminal,
} as const;

const stackIcons = {
  React: Layers3,
  TypeScript: FileCode2,
  JWT: ShieldCheck,
  Postman: Sparkles,
  GitHub: Github,
} as const;

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1dc5ff]">
      {text}
    </p>
  );
}

function SkillOrbit() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[860px] overflow-hidden rounded-[32px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(18,117,216,0.18),transparent_58%)]" />
      <div className="absolute inset-[11%] rounded-full border border-[#1d5da1]/40" />
      <div className="absolute inset-[21%] rounded-full border border-[#284a8a]/35" />
      <div className="absolute inset-[31%] rounded-full border border-[#2b3f74]/35" />
      <div className="absolute left-1/2 top-1/2 h-[128px] w-[128px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-[#25c5ff]/35 bg-[linear-gradient(180deg,rgba(20,151,255,0.32),rgba(7,20,39,0.9))] shadow-[0_0_42px_rgba(0,153,255,0.26)] backdrop-blur-xl" />
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-4xl font-black text-white">
        {portfolio.skillsSection.orbitCenterLabel}
      </div>

      {portfolio.skillsSection.orbitSkills.map((skill, index) => {
        const Icon = skillIcons[skill.icon];
        return (
          <motion.div
            key={`${skill.label}-${index}`}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
            whileHover={{ scale: 1.04, y: -2 }}
            className={`absolute ${skill.position} rounded-2xl border border-white/12 bg-[rgba(8,18,35,0.88)] px-4 py-3 shadow-[0_0_18px_rgba(0,153,255,0.12)] backdrop-blur-xl`}
          >
            <div className="flex items-center gap-3">
              <div className="grid size-8 place-items-center rounded-lg border border-[#1496ff]/30 bg-[#0b1730] text-[#25c5ff]">
                <Icon className="size-4" />
              </div>
              <span className="text-sm font-medium text-white">{skill.label}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function PortfolioSections() {
  return (
    <div className="relative overflow-hidden border-t border-white/6 bg-[#030914] px-5 pb-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,59,129,0.12),transparent_28%),radial-gradient(circle_at_80%_65%,rgba(13,99,212,0.09),transparent_30%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <section id="about" className="scroll-mt-28 border-b border-white/6 py-24">
          <motion.div {...reveal} className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="max-w-[340px]">
              <SectionLabel text={portfolio.about.eyebrow} />
              <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
                {portfolio.about.title}
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-9 text-slate-300">{portfolio.about.body}</p>
              <div className="flex flex-wrap gap-3">
                {portfolio.about.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-2xl border border-[#1496ff]/28 bg-[#081325]/75 px-4 py-3 text-sm font-medium text-slate-100 shadow-[0_0_16px_rgba(0,153,255,0.08)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="scroll-mt-28 border-b border-white/6 py-24">
          <div className="grid gap-14 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
            <motion.div {...reveal} className="max-w-[350px]">
              <SectionLabel text={portfolio.skillsSection.eyebrow} />
              <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
                {portfolio.skillsSection.title}
              </h2>
              <p className="mt-6 text-lg leading-9 text-slate-300">
                {portfolio.skillsSection.description}
              </p>
              <a
                href={portfolio.skillsSection.cta.href}
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-2xl border border-[#1496ff]/30 bg-[#071325] px-5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-[#25c5ff]"
              >
                {portfolio.skillsSection.cta.label}
                <ArrowRight className="size-4" />
              </a>
            </motion.div>

            <motion.div {...reveal}>
              <SkillOrbit />
            </motion.div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 border-b border-white/6 py-24">
          <motion.div {...reveal} className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel text={portfolio.projectsSection.eyebrow} />
              <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
                {portfolio.projectsSection.title}
              </h2>
            </div>
            <a
              href={portfolio.projectsSection.cta.href}
              className="inline-flex h-12 items-center gap-2 rounded-2xl border border-[#1496ff]/30 bg-[#071325] px-5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-[#25c5ff]"
            >
              {portfolio.projectsSection.cta.label}
              <ArrowRight className="size-4" />
            </a>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {portfolio.projectsSection.items.map((project, index) => {
              const Icon = projectIcons[project.icon];
              return (
                <motion.article
                  key={project.title}
                  {...reveal}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(8,18,35,0.86)] shadow-[0_0_24px_rgba(0,153,255,0.08)] backdrop-blur-xl"
                >
                  <div className={`project-visual project-visual-${project.accent} relative h-52 border-b border-white/10 p-4`}>
                    <div className="absolute inset-4 rounded-[22px] border border-white/8 bg-[rgba(4,12,24,0.76)]" />
                    <div className="absolute left-6 top-6 z-10 grid size-11 place-items-center rounded-xl border border-[#1496ff]/30 bg-[#0b1730] text-[#25c5ff]">
                      <Icon className="size-5" />
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 h-16 rounded-2xl border border-white/6 bg-[linear-gradient(180deg,rgba(10,26,48,0.8),rgba(4,10,18,0.4))]" />
                    <div className="absolute bottom-12 left-12 right-12 h-1 rounded-full bg-[linear-gradient(90deg,transparent,#1ed8ff,transparent)] opacity-80" />
                    <div className="absolute inset-x-10 top-16 h-24 rounded-[24px] border border-[#1c4e87]/35 bg-[rgba(6,17,31,0.6)]" />
                  </div>
                  <div className="space-y-4 p-6">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="text-[15px] leading-7 text-slate-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#1496ff]/22 bg-[#091528] px-3 py-1.5 text-xs font-medium text-[#73d7ff]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 py-24">
          <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr] lg:items-start">
            <motion.div {...reveal} className="max-w-[300px]">
              <SectionLabel text={portfolio.experience.eyebrow} />
              <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
                {portfolio.experience.title}
              </h2>
            </motion.div>

            <motion.div
              {...reveal}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[rgba(8,18,35,0.86)] p-8 shadow-[0_0_28px_rgba(0,153,255,0.08)] backdrop-blur-xl"
            >
              <div className="absolute left-6 top-8 h-3 w-3 rounded-full bg-[#25c5ff] shadow-[0_0_14px_rgba(37,197,255,0.9)]" />
              <div className="absolute left-[31px] top-11 h-[calc(100%-5rem)] w-px bg-[linear-gradient(180deg,rgba(37,197,255,0.55),transparent)]" />
              <div className="grid gap-8 lg:grid-cols-[1fr_220px]">
                <div className="pl-8">
                  <p className="text-sm text-slate-400">{portfolio.experience.period}</p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">{portfolio.experience.role}</h3>
                  <p className="mt-2 text-xl text-slate-200">{portfolio.experience.company}</p>
                  <p className="mt-5 max-w-3xl text-[15px] leading-8 text-slate-300">
                    {portfolio.experience.body}
                  </p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-[rgba(8,19,37,0.7)] p-5">
                  <div className="grid grid-cols-3 gap-3">
                    {portfolio.experience.stack.map((item) => {
                      const Icon = stackIcons[item];
                      return (
                        <div
                          key={item}
                          className="grid aspect-square place-items-center rounded-2xl border border-[#1496ff]/20 bg-[#0a1730] text-[#25c5ff]"
                          title={item}
                        >
                          <Icon className="size-5" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="education" className="scroll-mt-28 border-t border-white/6 py-20">
          <motion.div {...reveal} className="grid gap-6 rounded-[28px] border border-white/10 bg-[rgba(8,18,35,0.82)] p-8 shadow-[0_0_24px_rgba(0,153,255,0.08)] md:grid-cols-[84px_1fr]">
            <div className="grid size-16 place-items-center rounded-2xl border border-[#1496ff]/28 bg-[#0a1730] text-[#25c5ff]">
              <GraduationCap className="size-8" />
            </div>
            <div>
              <SectionLabel text={portfolio.education.eyebrow} />
              <h3 className="mt-3 text-3xl font-semibold text-white">{portfolio.education.degree}</h3>
              <p className="mt-4 text-[15px] leading-8 text-slate-300">{portfolio.education.body}</p>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="scroll-mt-28 border-t border-white/6 py-20">
          <motion.div {...reveal} className="mb-10 max-w-3xl">
            <SectionLabel text={portfolio.contact.eyebrow} />
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">{portfolio.contact.title}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">{portfolio.contact.description}</p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-2">
            <a
              href={`mailto:${portfolio.contact.email}`}
              className="rounded-[28px] border border-white/10 bg-[rgba(8,18,35,0.86)] p-8 shadow-[0_0_24px_rgba(0,153,255,0.08)] transition hover:-translate-y-1 hover:border-[#1496ff]/32"
            >
              <Mail className="size-7 text-[#25c5ff]" />
              <p className="mt-5 text-sm uppercase tracking-[0.22em] text-slate-400">Email</p>
              <p className="mt-3 text-2xl font-semibold text-white">{portfolio.contact.email}</p>
            </a>
            <a
              href={portfolio.contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-[28px] border border-white/10 bg-[rgba(8,18,35,0.86)] p-8 shadow-[0_0_24px_rgba(0,153,255,0.08)] transition hover:-translate-y-1 hover:border-[#1496ff]/32"
            >
              <Github className="size-7 text-[#25c5ff]" />
              <p className="mt-5 text-sm uppercase tracking-[0.22em] text-slate-400">GitHub</p>
              <p className="mt-3 text-2xl font-semibold text-white">
                {portfolio.contact.github.replace("https://", "")}
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
