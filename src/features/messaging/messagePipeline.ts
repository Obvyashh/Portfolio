"use client";

export type MessageKind = "hover" | "prompt" | "voice" | "idle" | "system";

export type QueueMessage<T extends string = string> = {
  id: string;
  type: MessageKind;
  priority: number; // higher = more important
  kind: T; // semantic sub-type (e.g. "START_CONVERSATION")
  payload?: unknown;
  createdAt: number;
};

export type PipelineInterruptPolicy = {
  // If true, new message will cancel any "in flight" message of lower/equal priority.
  cancelOnNewHigherOrEqual: boolean;
  // If true, "hover" will never interrupt non-hover messages (unless higher priority explicitly).
  hoverNeverInterrupt: boolean;
};

export type PipelineCooldown = {
  // Minimum time between "start" messages (helps prevent hover spam).
  minStartMs: number;
};

type PipelineState<TKind extends string> = {
  inFlight: QueueMessage<TKind> | null;
  lastStartAt: number;
};

export type PipelineQueueOptions<TKind extends string> = {
  interrupt: PipelineInterruptPolicy;
  cooldown: PipelineCooldown;
  // A guard to decide whether a queued message should be considered a "start conversation"
  // (used for cooldown checks).
  isStartLike: (msg: QueueMessage<TKind>) => boolean;
};

function nowMs() {
  return typeof performance !== "undefined" ? performance.now() : Date.now();
}

function makeId() {
  return `${Math.random().toString(16).slice(2)}-${nowMs().toFixed(0)}`;
}

export class MessagePipeline<TKind extends string> {
  private queue: Array<QueueMessage<TKind>> = [];
  private state: PipelineState<TKind> = { inFlight: null, lastStartAt: 0 };

  private options: PipelineQueueOptions<TKind>;
  private subscribers = new Set<(msg: QueueMessage<TKind> | null) => void>();

  constructor(options: PipelineQueueOptions<TKind>) {
    this.options = options;
  }

  subscribe(fn: (msg: QueueMessage<TKind> | null) => void) {
    this.subscribers.add(fn);
    fn(this.state.inFlight);
    return () => {
      this.subscribers.delete(fn);
    };
  }

  private emit() {
    for (const fn of this.subscribers) fn(this.state.inFlight);
  }

  enqueue(params: {
    type: MessageKind;
    kind: TKind;
    payload?: unknown;
    priority: number;
  }): QueueMessage<TKind> {
    const msg: QueueMessage<TKind> = {
      id: makeId(),
      type: params.type,
      kind: params.kind,
      payload: params.payload,
      priority: params.priority,
      createdAt: nowMs(),
    };

    // Interrupt rules: decide whether to replace inFlight.
    const inflight = this.state.inFlight;
    if (inflight) {
      const isHover = msg.type === "hover";
      const shouldNotInterrupt =
        this.options.interrupt.hoverNeverInterrupt &&
        isHover &&
        inflight.type !== "hover";

      if (shouldNotInterrupt) {
        return msg;
      }

      const shouldCancel =
        this.options.interrupt.cancelOnNewHigherOrEqual &&
        msg.priority >= inflight.priority;

      if (shouldCancel) {
        this.state.inFlight = msg;
        this.emit();
        return msg;
      }
    }

    // Cooldown only applies to "start-like" messages.
    const startLike = this.options.isStartLike(msg);
    if (startLike) {
      const t = nowMs();
      const elapsed = t - this.state.lastStartAt;
      if (elapsed < this.options.cooldown.minStartMs) {
        // Replace any queued start-like messages with this one (prevents spam growth).
        this.queue = this.queue.filter((q) => !(this.options.isStartLike(q)));
        this.queue.push(msg);
        this.sortQueue();
        return msg;
      }
    }

    this.queue.push(msg);
    this.sortQueue();
    this.maybePromoteNext();
    return msg;
  }

  // Call when consumer finishes processing inFlight.
  // If more messages are queued, the next message will be promoted.
  completeInFlight() {
    this.state.inFlight = null;
    this.maybePromoteNext();
    this.emit();
  }

  cancelAll(reasonMessageKind?: MessageKind) {
    const removed = this.queue.length;
    this.queue = [];
    if (this.state.inFlight && reasonMessageKind) {
      // keep inFlight unless explicitly canceled by consumer.
      void removed;
    }
    this.state.inFlight = null;
    this.emit();
  }

  getInFlight() {
    return this.state.inFlight;
  }

  private sortQueue() {
    // Priority desc, then oldest first.
    this.queue.sort((a, b) => {
      if (b.priority !== a.priority) return b.priority - a.priority;
      return a.createdAt - b.createdAt;
    });
  }

  private maybePromoteNext() {
    if (this.state.inFlight) return;
    const next = this.queue.shift();
    if (!next) return;

    // Apply cooldown on promotion for start-like messages.
    if (this.options.isStartLike(next)) {
      this.state.lastStartAt = nowMs();
    }

    this.state.inFlight = next;
    this.emit();
  }
}

// A small singleton factory hook-friendly initializer
export function createDefaultPipeline() {
  return new MessagePipeline<"START" | "HOVER_PREVIEW" | "VOICE_START" | "USER_IDLE">(
    {
      interrupt: {
        cancelOnNewHigherOrEqual: true,
        hoverNeverInterrupt: true,
      },
      cooldown: {
        minStartMs: 650,
      },
      isStartLike: (msg) => msg.kind === "START" || msg.kind === "VOICE_START",
    }
  );
}
