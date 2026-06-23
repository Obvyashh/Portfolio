export type AIEventType =
  | "USER_PROMPT_CLICKED"
  | "USER_HOVERED_SECTION"
  | "VOICE_STARTED"
  | "VOICE_ENGAGED"
  | "USER_IDLE_TICK"
  | "SECTION_VISIBLE"
  | "AI_SPEAKING"
  | "AI_LISTENING"
  | "AI_THINKING"
  | "AI_PROCESSING"
  | "AI_IDLE";

export type AIEventPayloadMap = {
  USER_PROMPT_CLICKED: { prompt: string };
  USER_HOVERED_SECTION: { sectionId: string };
  VOICE_STARTED: { prompt?: string };
  VOICE_ENGAGED: {};
  USER_IDLE_TICK: { idleMs: number };
  SECTION_VISIBLE: { sectionId: string };
  AI_SPEAKING: {};
  AI_LISTENING: {};
  AI_THINKING: {};
  AI_PROCESSING: {};
  AI_IDLE: {};
};

export type AIEvent = {
  [K in AIEventType]: K extends keyof AIEventPayloadMap
    ? { type: K; payload: AIEventPayloadMap[K] }
    : never;
}[AIEventType];

type Listener = (event: AIEvent) => void;

const listeners = new Set<Listener>();

export function subscribeAIEvents(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function dispatchAIEvent<E extends AIEventType>(
  type: E,
  payload: AIEventPayloadMap[E]
) {
  const event = { type, payload } as AIEvent;
  listeners.forEach((l) => l(event));
}
