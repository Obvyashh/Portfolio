"use client";

import * as React from "react";
import { ArrowDownToLine, ArrowUpRight, Bot } from "lucide-react";

import { AIAvatarProvider, useAIController } from "../components/ai/AIAvatarSystem";
import { AvatarFrame } from "../components/ai/AvatarFrame";
import { Reveal } from "../components/sections/Reveal";
import { Button } from "../components/ui/Button";
import { TypewriterText } from "../components/ui/TypewriterText";

function PromptAndHoverWiring() {
  useAIController();

  return null;
}

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#020713] text-white">
      <AIAvatarProvider>
        <HeroBackground />

        <div className="relative mx-auto grid min-h-screen max-w-[1600px] items-center gap-8 px-6 pb-16 pt-32 sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-14 xl:px-20">
          <LeftSide />
          <RightSide />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 mx-auto hidden max-w-[1600px] items-end justify-between px-6 pb-9 text-[11px] text-white/40 sm:flex sm:px-10 lg:px-14 xl:px-20">
          <span>© 2025 Yash Sen. All rights reserved.</span>
          <div className="flex flex-col items-center gap-2">
            <span className="uppercase tracking-[0.22em]">Scroll to explore</span>
            <span className="h-9 w-5 rounded-full border border-cyan-200/25 shadow-[0_0_18px_rgba(34,211,238,0.16)]">
              <span className="mx-auto mt-2 block h-1.5 w-1.5 rounded-full bg-cyan-300" />
            </span>
          </div>
          <span className="w-[170px]" />
        </div>

        <PromptAndHoverWiring />
      </AIAvatarProvider>
    </section>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_42%,rgba(0,153,255,0.26),transparent_34%),radial-gradient(circle_at_18%_76%,rgba(0,117,255,0.18),transparent_30%),linear-gradient(110deg,#020713_0%,#030916_38%,#04111f_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,rgba(56,189,248,0.78)_0_1px,transparent_2px)] [background-size:62px_62px]" />
      <div className="absolute inset-0 opacity-22 [background-image:linear-gradient(115deg,transparent_0_47%,rgba(56,189,248,0.28)_48%,transparent_50%)] [background-size:260px_180px]" />
      <div className="absolute bottom-0 left-0 h-48 w-[62%] bg-[radial-gradient(ellipse_at_bottom,rgba(0,149,255,0.32),transparent_68%)] blur-xl" />
      <div className="absolute bottom-10 left-0 h-24 w-[62%] bg-[linear-gradient(12deg,transparent,rgba(0,191,255,0.58),transparent)] opacity-45 blur-sm" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,7,19,0.94)_0%,rgba(2,7,19,0.68)_35%,rgba(2,7,19,0.08)_72%,rgba(2,7,19,0.54)_100%)]" />
    </div>
  );
}

function LeftSide() {
  const ai = useAIController();

  const triggerPrompt = React.useCallback(
    (prompt: string) => {
      ai.startConversation({ prompt });
    },
    [ai]
  );

  return (
    <div className="relative z-20 max-w-[620px]">
      <Reveal>
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/14 bg-cyan-400/7 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-50/78 shadow-[0_0_24px_rgba(34,211,238,0.1)] backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
          Yash AI Assistant / Online
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h1 className="text-[clamp(3.2rem,6.4vw,5.7rem)] font-semibold leading-[0.96] tracking-tight text-white">
          <TypewriterText text="Building Intelligent" delay={0.45} speed={0.02} />
          <br />
          <TypewriterText text="Digital Experiences" className="text-cyan-400" delay={1.1} speed={0.02} />
        </h1>
      </Reveal>

      <Reveal delay={0.14}>
        <p className="mt-7 max-w-[560px] text-base leading-8 text-slate-300 sm:text-lg">
          <TypewriterText
            text="I build AI systems, automation tools, scalable APIs, and modern web applications that solve real-world problems."
            delay={1.85}
            speed={0.012}
          />
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            href="#projects"
            variant="primary"
            className="group relative overflow-hidden rounded-xl bg-cyan-500 text-white shadow-[0_0_32px_rgba(0,153,255,0.45)]"
            onMouseEnter={() => triggerPrompt("Tell me about your projects")}
          >
            Explore Projects
            <ArrowUpRight className="h-4 w-4" />
          </Button>

          <Button
            href="/Yash_Sen_Resume.pdf"
            variant="ghost"
            className="rounded-xl bg-black/20"
            target="_blank"
            rel="noopener noreferrer"
            download
            onMouseEnter={() => triggerPrompt("Tell me about your backend experience")}
          >
            Resume
            <ArrowDownToLine className="h-4 w-4 text-cyan-300" />
          </Button>

          <Button
            href="#top"
            variant="ghost"
            className="rounded-xl bg-black/20"
            onMouseEnter={() => triggerPrompt("Awaiting your command.")}
            onClick={() => triggerPrompt("Hi Yash AI, introduce yourself.")}
          >
            Talk To AI
            <Bot className="h-4 w-4 text-cyan-300" />
          </Button>
        </div>
      </Reveal>
    </div>
  );
}

function RightSide() {
  const ai = useAIController();

  return (
    <Reveal className="relative z-10 -ml-20 hidden min-h-[720px] items-center justify-end lg:flex">
      <AvatarFrame aiState={ai.aiState} />
    </Reveal>
  );
}
