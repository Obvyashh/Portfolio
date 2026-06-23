"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Loader2, Send, Sparkles } from "lucide-react";

import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Reveal } from "../components/sections/Reveal";
import {
  ambientPulse,
  interactiveCard,
  sectionReveal,
  sectionStagger,
} from "../lib/motion";

type ChatRole = "assistant" | "user";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    role: "assistant",
    content: "Hi, I’m Yash AI. Ask me about projects, backend systems, or AI interfaces.",
  },
];

const SUGGESTIONS = [
  "Tell me about your projects",
  "What technologies do you use?",
  "How do you approach backend architecture?",
  "What is your AI portfolio system about?",
] as const;

export function AIChatSection() {
  const [messages, setMessages] = React.useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const endRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (messages.length > INITIAL_MESSAGES.length) {
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages]);

  const sendMessage = React.useCallback(
    async (prompt?: string) => {
      const text = (prompt ?? input).trim();
      if (!text || loading) return;

      const nextMessages: ChatMessage[] = [
        ...messages,
        { role: "user", content: text },
      ];

      setMessages(nextMessages);
      setInput("");
      setLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: nextMessages.map((message) => ({
              role: message.role,
              content: message.content,
            })),
          }),
        });

        const data: { reply?: string; error?: string } = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Unable to contact the assistant.");
        }

        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content:
              data.reply ??
              "I’m online, but I didn’t receive a response from the assistant.",
          },
        ]);
      } catch (error: unknown) {
        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content:
              error instanceof Error
                ? error.message
                : "Something went wrong while contacting the assistant.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [input, loading, messages]
  );

  return (
    <section
      id="chat"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <motion.div
        variants={ambientPulse}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute inset-0 opacity-30"
      >
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
        >
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-200/80">
                  AI Assistant
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                A live assistant for portfolio conversations.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-[1.95] text-white/60 sm:text-lg">
                This chat interface is powered by the OpenAI-backed `/api/chat`
                route and designed to answer recruiter questions about backend
                systems, AI interfaces, and full-stack work.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
                {SUGGESTIONS.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-500/[0.08] hover:text-white"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex items-center gap-3 text-sm text-white/50">
                <Bot className="h-4 w-4 text-cyan-300" />
                <span>Ask about architecture, stack choices, project scope, or experience.</span>
              </div>
            </Reveal>
          </div>

          <Reveal className="relative">
            <motion.div variants={interactiveCard} initial="rest" whileHover="hover">
              <Card className="relative overflow-hidden border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl sm:p-6">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] via-transparent to-transparent" />

                <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-white/40">
                      Chat Runtime
                    </div>
                    <div className="mt-2 text-lg font-medium text-white">
                      Yash AI Assistant
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-cyan-200">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    Online
                  </div>
                </div>

                <div className="relative z-10 mt-5 h-[28rem] overflow-hidden rounded-3xl border border-white/10 bg-black/20">
                  <div className="flex h-full flex-col">
                    <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-5">
                      {messages.map((message, index) => (
                        <div
                          key={`${message.role}-${index}-${message.content.slice(0, 20)}`}
                          className={`flex ${
                            message.role === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-7 ${
                              message.role === "user"
                                ? "bg-cyan-500/15 text-white border border-cyan-400/20"
                                : "bg-white/[0.05] text-white/80 border border-white/10"
                            }`}
                          >
                            {message.content}
                          </div>
                        </div>
                      ))}

                      {loading ? (
                        <div className="flex justify-start">
                          <div className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/70">
                            <Loader2 className="h-4 w-4 animate-spin text-cyan-300" />
                            Thinking...
                          </div>
                        </div>
                      ) : null}

                      <div ref={endRef} />
                    </div>

                    <form
                      className="border-t border-white/10 p-4 sm:p-5"
                      onSubmit={(e) => {
                        e.preventDefault();
                        void sendMessage();
                      }}
                    >
                      <div className="flex gap-3">
                        <input
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Ask about systems, AI, projects..."
                          className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-cyan-400/40"
                        />

                        <Button
                          type="submit"
                          size="sm"
                          className="shrink-0 bg-cyan-500/90 text-black hover:bg-cyan-400"
                          disabled={loading}
                        >
                          <Send className="h-4 w-4" />
                          Send
                        </Button>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-white/35">
                        <span>OpenAI-powered</span>
                        <a
                          href="#projects"
                          className="inline-flex items-center gap-1 text-cyan-200 transition-colors hover:text-cyan-100"
                        >
                          Explore projects
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}
