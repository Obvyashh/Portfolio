"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

import type { Project } from "../../data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
    >
      <Card className="overflow-hidden">
        <div className="p-5 sm:p-6">
          <div className="relative h-44 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.35),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(217,70,239,0.25),transparent_55%)]" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
            {project.featured ? (
              <div className="absolute left-4 top-4 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
                Featured
              </div>
            ) : null}
          </div>

          <div className="mt-5">
            <div className="text-white/95 font-semibold text-lg">{project.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{project.description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3">
              {project.github ? (
                <Button href={project.github} variant="secondary" className="flex-1">
                  <GitBranch className="h-4 w-4" />
                  GitHub
                </Button>
              ) : null}
              {project.live && (
                <Button href={project.live} variant="ghost" className="flex-1">
                  <ExternalLink className="h-4 w-4" />
                  Live
                </Button>
              )}
            </div>

            <div className="hidden sm:block text-xs text-white/45">
              {project.featuredTag ?? (index === 0 ? "Featured build" : "Curated UI demo")}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

