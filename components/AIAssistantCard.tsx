"use client";

import { portfolio } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";

const bars = [18, 34, 22, 48, 28, 56, 26, 42, 20, 32, 16];

export function AIAssistantCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
      className="relative mx-auto mt-2 w-full max-w-[420px] rounded-[28px] border border-[#1a8fff]/30 bg-[linear-gradient(135deg,rgba(5,17,37,0.9),rgba(7,24,50,0.72))] p-4 shadow-[0_0_40px_rgba(0,153,255,0.18)] backdrop-blur-2xl sm:mt-4 lg:absolute lg:-bottom-10 lg:left-1/2 lg:mx-0 lg:w-[70%] lg:-translate-x-1/2"
    >
      <div className="flex items-center gap-4">
        <div className="relative size-16 overflow-hidden rounded-2xl border border-[#1a8fff]/40 bg-[#081325] shadow-[0_0_22px_rgba(0,153,255,0.18)]">
          <Image src={portfolio.avatarPath} alt={portfolio.name} fill className="object-cover object-top" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/95">
            {portfolio.assistant.title}
          </p>
          <p className="mt-1 text-sm text-slate-300">{portfolio.assistant.subtitle}</p>
          <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2ef58a]">
            <span className="size-2 rounded-full bg-[#2ef58a] shadow-[0_0_10px_rgba(46,245,138,0.85)]" />
            {portfolio.assistant.status}
          </div>
        </div>

        <div className="hidden h-14 items-end gap-1.5 sm:flex">
          {bars.map((height, index) => (
            <motion.span
              key={`${height}-${index}`}
              animate={{ height: [height, height + 16, height] }}
              transition={{ duration: 1.6, delay: index * 0.08, repeat: Infinity, ease: "easeInOut" }}
              className="block w-1.5 rounded-full bg-[linear-gradient(180deg,#37d6ff,#0077ff)] shadow-[0_0_10px_rgba(0,153,255,0.6)]"
              style={{ height }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
