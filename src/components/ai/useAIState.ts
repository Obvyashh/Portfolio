"use client";

import * as React from "react";

export type AiState = "Idle" | "Listening" | "Processing" | "Speaking" | "Thinking";

export type StartConversationPayload = {
  prompt?: string;
};

type AIReply = {
  state: AiState;
  caption: string;
};

const SUGGESTION_REPLIES: Array<{ match: (p: string) => boolean; reply: AIReply }> = [
  {
    match: (p) => p === "Tell me about your projects",
    reply: {
      state: "Speaking",
      caption:
        "I can walk you through my featured projects. I focus on scalable full-stack delivery, clean APIs, and performance.",
    },
  },
  {
    match: (p) => p === "What technologies do you use?",
    reply: {
      state: "Speaking",
      caption:
        "I build with Next.js, TypeScript, REST APIs, and production-grade architecture—plus thoughtful UI systems that stay fast.",
    },
  },
  {
    match: (p) => p === "What was your role in Bhoj website?",
    reply: {
      state: "Speaking",
      caption:
        "I handled scalable backend systems and clean, secure API architecture for the Bhoj website—so the platform stays reliable under load.",
    },
  },
  {
    match: (p) => p === "Tell me about your backend experience",
    reply: {
      state: "Speaking",
      caption:
        "I specialize in backend engineering: secure authentication, optimized databases, and REST APIs designed for maintainability.",
    },
  },
];

function getAutoReply(prompt: string): AIReply {
  const found = SUGGESTION_REPLIES.find((x) => x.match(prompt));
  if (found) return found.reply;
  return {
    state: "Speaking",
    caption: "Awaiting your command. Tell me what you want to explore next.",
  };
}

export function useAIState() {
  const [aiState, setAiState] = React.useState<AiState>("Idle");
  const [listening, setListening] = React.useState<boolean>(false);

  const [selectedPrompt, setSelectedPrompt] = React.useState<string | null>(null);

  // Full caption text and typed caption (for smooth typing without layout shift)
  const [captionFull, setCaptionFull] = React.useState<string>("");
  const [captionText, setCaptionText] = React.useState<string>("");

  // For a premium “typing intelligence” effect
  const [typingSpeed, setTypingSpeed] = React.useState<number>(10);

  // Keep timers refs so we can cancel cleanly during rapid interactions
  const typingIntervalRef = React.useRef<number | null>(null);
  const timeoutsRef = React.useRef<number[]>([]);

  const clearAllTimers = React.useCallback(() => {
    if (typingIntervalRef.current) {
      window.clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
    timeoutsRef.current.forEach((id) => window.clearTimeout(id));
    timeoutsRef.current = [];
  }, []);

  React.useEffect(() => {
    return () => clearAllTimers();
  }, [clearAllTimers]);

  const startConversation = React.useCallback(
    (payload: StartConversationPayload = {}) => {
      clearAllTimers();

      const prompt = payload.prompt ?? "Awaiting your command.";
      setSelectedPrompt(payload.prompt ?? null);

      setListening(true);
      setAiState("Listening");

      setCaptionFull("");
      setCaptionText("");

      // Listening -> Thinking
      timeoutsRef.current.push(
        window.setTimeout(() => {
          setAiState("Thinking");
          const thinking = "Analyzing your intent…";
          setCaptionFull(thinking);
          setTypingSpeed(9);
        }, 650)
      );

      // Thinking -> Speaking (real reply)
      timeoutsRef.current.push(
        window.setTimeout(() => {
          const reply = getAutoReply(prompt);
          setAiState(reply.state);
          setCaptionFull(reply.caption);
          setTypingSpeed(14);
        }, 1250)
      );

      // return to idle
      timeoutsRef.current.push(
        window.setTimeout(() => {
          setListening(false);
          setAiState("Idle");
        }, 5600)
      );
    },
    [clearAllTimers]
  );

  // Typing engine: progressive reveal with punctuation pauses.
  React.useEffect(() => {
    if (!captionFull) return;

    clearAllTimers();

    // Determine speed dynamically per state
    const baseSpeed =
      aiState === "Speaking" ? typingSpeed : aiState === "Thinking" ? Math.max(7, typingSpeed - 2) : typingSpeed;

    let i = 0;
    setCaptionText("");

    const tick = () => {
      i += 1;
      const next = captionFull.slice(0, i);
      setCaptionText(next);

      if (i >= captionFull.length) {
        if (typingIntervalRef.current) window.clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      } else {
        // punctuation-aware pauses
        const ch = captionFull[i - 1];
        const pause =
          ch === "." || ch === "!" || ch === "?"
            ? 120
            : ch === ","
              ? 75
              : ch === "—" || ch === "–"
                ? 95
                : 0;

        if (pause) {
          if (typingIntervalRef.current) window.clearInterval(typingIntervalRef.current);
          typingIntervalRef.current = null;

          timeoutsRef.current.push(
            window.setTimeout(() => {
              if (!typingIntervalRef.current) {
                typingIntervalRef.current = window.setInterval(tick, baseSpeed);
              }
            }, pause)
          );
        }
      }
    };

    typingIntervalRef.current = window.setInterval(tick, baseSpeed);

    return () => {
      if (typingIntervalRef.current) {
        window.clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
    };
  }, [captionFull, aiState, typingSpeed, clearAllTimers]);

  // On initial mount: onboarding dialogue
  React.useEffect(() => {
    const id = window.setTimeout(() => {
      setAiState("Speaking");
      setListening(false);
      setCaptionFull("Hello.\nI'm Yash.\nPortfolio systems online.");
      setTypingSpeed(14);
      setCaptionText("");
      window.setTimeout(() => setAiState("Idle"), 3200);
    }, 220);

    return () => window.clearTimeout(id);
  }, []);

  return {
    aiState,
    listening,
    selectedPrompt,
    captionText,
    captionFull,
    startConversation,
    setAiState,
    setListening,
  };
}
