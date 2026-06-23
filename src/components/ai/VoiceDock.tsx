"use client";

import * as React from "react";
import { Mic, Waves, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../utils/classNames";
import type { AiState } from "../../features/conversation/useConversation";

type Props = {
  aiState: AiState;
  listening: boolean;
  selectedPrompt: string | null;
  onEngage: (prompt?: string) => void;
};

const STATUS_LABEL: Record<AiState, string> = {
  Idle: "Idle",
  Listening: "Listening",
  Thinking: "Thinking",
  Speaking: "Speaking",
  Processing: "Processing",
};

export function VoiceDock({ aiState, listening, selectedPrompt, onEngage }: Props) {
  const reduceMotion = useReducedMotion();
  const [inputValue, setInputValue] = React.useState("");

  const waveformBars = 22;
  const bars = React.useMemo(() => Array.from({ length: waveformBars }), []);

  return (
    <div className="relative w-full flex items-center justify-center px-2">
      <div
        className={cn(
          "pointer-events-auto w-full max-w-[760px]",
          "rounded-[26px] bg-white/5 backdrop-blur-xl",
          "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_25px_90px_-40px_rgba(0,0,0,0.8)]"
        )}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
          {/* Left status */}
          <div className="min-w-0 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
              <Waves className="h-5 w-5 text-cyan-200/80" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-semibold text-white/85">AI Console</p>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">
                  <span
                    className={cn(
                      "inline-block h-1.5 w-1.5 rounded-full",
                      listening ? "bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.75)]" : "bg-white/20"
                    )}
                  />
                  {listening ? "Listening" : STATUS_LABEL[aiState]}
                </span>
              </div>

              <div className="mt-1 h-5 flex items-center">
                {listening ? (
                  <p className="truncate text-xs text-white/55">
                    {selectedPrompt ? `“${selectedPrompt}”` : "Analyzing your intent…"}
                  </p>
                ) : (
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && inputValue.trim()) {
                        onEngage(inputValue.trim());
                        setInputValue("");
                      }
                    }}
                    placeholder="Type to chat with AI..."
                    className="w-full truncate text-xs text-white/70 bg-transparent outline-none placeholder:text-white/30"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Waveform */}
          <div className="hidden flex-1 items-center justify-center md:flex px-2">
            <div className="relative h-12 w-full max-w-[320px] rounded-2xl border border-white/10 bg-black/20 px-4 py-3 overflow-hidden">
              <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.18),transparent_55%)]" />
              <div className="relative flex h-full items-end justify-center gap-[4px]">
                {bars.map((_, i) => {
                  const base = 18 + ((i * 7) % 10);
                  const boost = 18 + ((i * 11) % 18);
                  const height = listening ? boost : base;

                  return (
                    <motion.span
                      key={i}
                      className="w-[6px] rounded-full bg-cyan-200/80 shadow-[0_0_20px_rgba(34,211,238,0.55)]"
                      style={{ height }}
                      animate={
                        listening && !reduceMotion
                          ? {
                              height: [base, height, base],
                              opacity: [0.65, 1, 0.7],
                            }
                          : undefined
                      }
                      transition={
                        listening && !reduceMotion
                          ? {
                              duration: 0.95 + (i % 4) * 0.12,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.03,
                            }
                          : undefined
                      }
                    />
                  );
                })}
              </div>

              <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent opacity-60" />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                onEngage(inputValue.trim() ? inputValue.trim() : undefined);
                setInputValue("");
              }}
              className={cn(
                "relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/20 backdrop-blur",
                "transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/10",
                listening && "border-cyan-300/35 shadow-[0_0_0_1px_rgba(34,211,238,0.25),0_0_38px_rgba(34,211,238,0.22)]"
              )}
              aria-label="Engage AI"
            >
              <span
                className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300",
                  listening ? "opacity-100" : "group-hover:opacity-100",
                  "bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.35),transparent_60%)]"
                )}
              />
              <Mic className={cn("relative h-5 w-5 transition-transform duration-300", listening ? "animate-[micSpin_1.1s_ease-in-out_infinite]" : "")} />
            </button>

            <button
              type="button"
              onClick={() => {
                onEngage(inputValue.trim() ? inputValue.trim() : undefined);
                setInputValue("");
              }}
              className={cn(
                "hidden sm:inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur",
                "transition-all duration-300 hover:bg-white/10 hover:border-cyan-300/30"
              )}
              aria-label="Engage"
            >
              <span className={cn("inline-flex items-center justify-center rounded-full p-1 border border-white/10 bg-black/20")}>
                <Sparkles className="h-4 w-4 text-cyan-200/80" />
              </span>
              Engage
            </button>
          </div>
        </div>
      </div>

      {/* Local keyframes */}
      <style jsx>{`
        @keyframes micSpin {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(-8deg) scale(1.03);
          }
          100% {
            transform: rotate(0deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
