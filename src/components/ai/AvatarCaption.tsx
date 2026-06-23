"use client";

import * as React from "react";
import { cn } from "../../utils/classNames";
import type { AiState } from "../../features/conversation/useConversation";

type Props = {
  aiState: AiState;
  captionText: string;
  captionFull: string;
  author: string;
};

export function AvatarCaption({ aiState, captionText, author }: Props) {
  return (
    <div className="relative w-full">
      {/* Shared shimmer layer */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] opacity-70 [background:radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.20),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(217,70,239,0.15),transparent_45%)]" />

      <div
        className={cn(
          "relative rounded-[22px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_70px_-45px_rgba(0,0,0,0.85)] overflow-hidden",
          "min-h-[92px]"
        )}
      >
        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-semibold text-cyan-200/90">
                {author}
              </span>

              <span className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">
                {aiState === "Listening"
                  ? "Listening…"
                  : aiState === "Thinking"
                    ? "Thinking…"
                    : aiState === "Speaking"
                      ? "Speaking…"
                      : aiState === "Processing"
                        ? "Processing…"
                        : "Ready"}
              </span>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span
                className={cn(
                  "h-2 w-2 rounded-full",
                  aiState === "Speaking" || aiState === "Listening"
                    ? "bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.75)]"
                    : aiState === "Thinking" || aiState === "Processing"
                      ? "bg-purple-300/80 shadow-[0_0_18px_rgba(217,70,239,0.55)]"
                      : "bg-white/20"
                )}
              />
              <span className="text-xs text-white/55">Live</span>
            </span>
          </div>

          <div className="mt-3 text-sm leading-relaxed text-white/80">
            <span className={cn("whitespace-pre-wrap", aiState === "Idle" ? "opacity-80" : "opacity-100")}>
              {captionText.length ? captionText : aiState === "Listening" ? "Heard you…" : ""}
            </span>
          </div>

          <div className="mt-3 h-[2px] w-full opacity-80 [background:linear-gradient(to_right,transparent,rgba(34,211,238,0.55),transparent)]" />
        </div>
      </div>
    </div>
  );
}
