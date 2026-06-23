"use client";

import * as React from "react";
import { MessagePipeline, createDefaultPipeline } from "../messaging/messagePipeline";
import { publishAIEvent } from "../events/aiEventBus";

export type AiState = "Idle" | "Listening" | "Processing" | "Speaking" | "Thinking";

export type StartConversationPayload = {
  prompt?: string;
};

type AIReply = {
  state: AiState;
  caption: string;
};

type ConversationResult = {
  aiState: AiState;
  listening: boolean;
  selectedPrompt: string | null;

  captionFull: string;
  captionText: string;
  typingSpeed: number;

  startConversation: (payload?: StartConversationPayload) => void;
  hoverPreview: (payload?: StartConversationPayload) => void;
  // For event-driven future updates (AI_THINKING, interruption, etc.)
  setAiState: React.Dispatch<React.SetStateAction<AiState>>;
  setListening: React.Dispatch<React.SetStateAction<boolean>>;
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

type PipelineKind = "START" | "HOVER_PREVIEW" | "VOICE_START" | "USER_IDLE";

function useConversationPipeline() {
  const pipelineRef = React.useRef<MessagePipeline<PipelineKind> | null>(null);
  if (!pipelineRef.current) pipelineRef.current = createDefaultPipeline();
  return pipelineRef.current;
}

export function useConversation(): ConversationResult {
  const pipeline = useConversationPipeline();

  const [aiState, setAiState] = React.useState<AiState>("Idle");
  const [listening, setListening] = React.useState<boolean>(false);
  const [selectedPrompt, setSelectedPrompt] = React.useState<string | null>(null);

  // Full caption text and typed caption (for smooth typing without layout shift)
  const [captionFull, setCaptionFull] = React.useState<string>("");
  const [captionText, setCaptionText] = React.useState<string>("");

  // For a premium “typing intelligence” effect
  const [typingSpeed, setTypingSpeed] = React.useState<number>(10);

  // timers refs so we can cancel cleanly during rapid interactions
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

  // Observe pipeline in a single place: prevents overlapping conversation flows.
  React.useEffect(() => {
    return pipeline.subscribe((inFlight) => {
      if (!inFlight) return;

      // We only currently consume start-like messages in this domain.
      if (inFlight.kind !== "START" && inFlight.kind !== "VOICE_START" && inFlight.kind !== "HOVER_PREVIEW") return;

      publishAIEvent("AI_IDLE", {});

      const payload = (inFlight.payload ?? {}) as StartConversationPayload;
      const prompt = payload.prompt ?? "Awaiting your command.";

      clearAllTimers();

      setSelectedPrompt(payload.prompt ?? null);
      setListening(true);
      setAiState("Listening");
      publishAIEvent("AI_LISTENING", {});

      setCaptionFull("");
      setCaptionText("");

      // Listening -> Thinking
      timeoutsRef.current.push(
        window.setTimeout(() => {
          setAiState("Thinking");
          publishAIEvent("AI_THINKING", {});
          const thinking = "Analyzing your intent…";
          setCaptionFull(thinking);
          setTypingSpeed(9);
        }, 650)
      );

      // Thinking -> Speaking (real reply)
      timeoutsRef.current.push(
        window.setTimeout(async () => {
          let textToType = "Awaiting your command.";
          let finalState: AiState = "Speaking";

          try {
            const foundAuto = SUGGESTION_REPLIES.find((x) => x.match(prompt));
            if (foundAuto) {
              textToType = foundAuto.reply.caption;
              finalState = foundAuto.reply.state;
            } else {
              const p = prompt === "Awaiting your command." ? "Hello, how can you help me?" : prompt;
              const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  messages: [{ role: "user", content: p }],
                }),
              });

              if (response.ok) {
                const data = await response.json();
                if (data.reply) {
                  textToType = data.reply;
                } else {
                  textToType = "I'm having trouble connecting to my neural network.";
                }
              } else {
                textToType = "I encountered an error reaching the AI server.";
              }
            }
          } catch (e) {
            textToType = "Network error while connecting to the assistant.";
          }

          setCaptionFull(textToType);
          setAiState(finalState);
          publishAIEvent("AI_SPEAKING", {});
          setTypingSpeed(14);

          // Calculate approximate reading/typing time before returning to idle
          const readTime = Math.max(3000, textToType.length * 60);

          timeoutsRef.current.push(
            window.setTimeout(() => {
              setListening(false);
              setAiState("Idle");
              publishAIEvent("AI_IDLE", {});
              pipeline.completeInFlight();
            }, readTime)
          );
        }, 1250) // initial thinking time
      );
    });
  }, [clearAllTimers, pipeline]);

  // Typing engine: progressive reveal with punctuation pauses.
  React.useEffect(() => {
    if (!captionFull) return;

    clearAllTimers();

    const baseSpeed =
      aiState === "Speaking"
        ? typingSpeed
        : aiState === "Thinking"
          ? Math.max(7, typingSpeed - 2)
          : typingSpeed;

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
      publishAIEvent("AI_SPEAKING", {});
      setListening(false);
      setCaptionFull("Hello.\nI'm Yash.\nPortfolio systems online.");
      setTypingSpeed(14);
      setCaptionText("");

      window.setTimeout(() => {
        setAiState("Idle");
        publishAIEvent("AI_IDLE", {});
      }, 3200);
    }, 220);

    return () => window.clearTimeout(id);
  }, []);

  const startConversation = React.useCallback(
    (payload: StartConversationPayload = {}) => {
      // Enqueue start-like message. Pipeline will cancel/serialize as configured.
      pipeline.enqueue({
        type: "prompt",
        kind: "START",
        payload,
        priority: 3,
      });
    },
    [pipeline]
  );

  const hoverPreview = React.useCallback(
    (payload: StartConversationPayload = {}) => {
      pipeline.enqueue({
        type: "hover",
        kind: "HOVER_PREVIEW",
        payload,
        priority: 1,
      });
    },
    [pipeline]
  );

  return {
    aiState,
    listening,
    selectedPrompt,
    captionFull,
    captionText,
    typingSpeed,
    startConversation,
    hoverPreview,
    setAiState,
    setListening,
  };
}
