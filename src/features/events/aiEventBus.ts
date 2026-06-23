"use client";

import { dispatchAIEvent, subscribeAIEvents, type AIEvent, type AIEventType, type AIEventPayloadMap } from "../../events/aiEvents";

export type AIBusUnsubscribe = () => void;

export function useAIBus(listener: (event: AIEvent) => void): AIBusUnsubscribe {
  // React hook isn’t required here (we keep this as a thin wrapper for later domain hooks),
  // but we return an unsubscribe function so callers can manage lifecycle.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const unsubscribeRef = { current: (() => {}) as AIBusUnsubscribe };

  // Subscribe immediately; caller should call unsubscribeRef.current in effect cleanup.
  unsubscribeRef.current = subscribeAIEvents(listener);

  return () => unsubscribeRef.current();
}

export function publishAIEvent<E extends AIEventType>(type: E, payload: AIEventPayloadMap[E]) {
  dispatchAIEvent(type, payload);
}
