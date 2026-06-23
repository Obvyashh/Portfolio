"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { navItems, profile } from "../../data/portfolioData";
import { cn } from "../../utils/classNames";

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = React.useState(sectionIds[0] ?? "");

  React.useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const active = useActiveSection(navItems.map((item) => item.href.replace("#", "")));

  React.useEffect(() => {
    queueMicrotask(() => setOpen(false));
  }, [active]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10 lg:px-14 xl:px-20">
        <Link href="#top" className="group" onClick={() => setOpen(false)}>
          <div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
            {profile.name}
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
          </div>
          <div className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-white/45">
            AI Engineer / Full Stack Developer
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-2 text-xs font-medium transition",
                  isActive ? "text-cyan-200" : "text-white/78 hover:text-cyan-100"
                )}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <Link
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-950/20 px-5 py-2.5 text-xs font-medium text-white shadow-[0_0_28px_rgba(34,211,238,0.12)] transition hover:border-cyan-200/60 hover:bg-cyan-400/10 md:inline-flex"
        >
          Let&apos;s Talk
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
        </Link>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/30 p-2 text-white/90 backdrop-blur md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mx-6 border border-white/10 bg-black/80 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-2 text-sm text-white/75"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
