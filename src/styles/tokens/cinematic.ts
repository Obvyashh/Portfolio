export const glow = {
  cyan: {
    base: "rgba(34,211,238,1)",
    rgba: "rgba(34,211,238,1)",
    soft: "rgba(34,211,238,0.12)",
    medium: "rgba(34,211,238,0.22)",
    strong: "rgba(34,211,238,0.72)",
    bar: "rgba(34,211,238,0.95)",
    border: "rgba(34,211,238,0.18)",
    shadow: "rgba(34,211,238,0.38)",
    shadowStrong: "rgba(34,211,238,0.62)",
    gradient:
      "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(34,211,238,0))",
    radial:
      "radial-gradient(circle at center, rgba(34,211,238,0.22), transparent 72%)",
  },

  purple: {
    base: "rgba(217,70,239,1)",
    rgba: "rgba(217,70,239,1)",
    soft: "rgba(217,70,239,0.10)",
    medium: "rgba(217,70,239,0.22)",
    strong: "rgba(217,70,239,0.60)",
    bar: "rgba(217,70,239,0.92)",
    border: "rgba(217,70,239,0.18)",
    shadow: "rgba(217,70,239,0.30)",
    shadowStrong: "rgba(217,70,239,0.52)",
    gradient:
      "linear-gradient(135deg, rgba(217,70,239,0.16), rgba(217,70,239,0))",
    radial:
      "radial-gradient(circle at center, rgba(217,70,239,0.20), transparent 72%)",
  },

  white: {
    soft: "rgba(255,255,255,0.05)",
    medium: "rgba(255,255,255,0.10)",
    border: "rgba(255,255,255,0.12)",
  },
} as const;

export const timing = {
  // AI conversation pacing
  thinkingDelayMs: 650,
  processingDelayMs: 1250,
  returnToIdleMs: 5600,

  // legacy aliases
  typingThinkingMs: 650,
  typingToSpeakingMs: 1250,
  typingReturnToIdleMs: 5600,

  // animation system
  fast: 0.18,
  normal: 0.32,
  slow: 0.55,

  // hover interactions
  hoverEnterMs: 180,
  hoverExitMs: 240,

  // cinematic stagger
  staggerFast: 0.04,
  staggerNormal: 0.08,
  staggerSlow: 0.14,

  // typing engine
  typingFastMs: 10,
  typingNormalMs: 14,
  typingSlowMs: 22,
} as const;

export const blurLevels = {
  xs: "blur(4px)",
  sm: "blur(8px)",
  md: "blur(14px)",
  lg: "blur(20px)",
  xl: "blur(32px)",
  hero: "blur(80px)",
  backdrop: "blur(20px)",
} as const;

export const spacing = {
  sectionGap: 120,
  cardGap: 24,
  avatarCaptionGap: 24,
  avatarDockGap: 18,
  containerX: 24,
  containerDesktopX: 32,
  cardPadding: 24,
  cardPaddingLg: 32,
} as const;

export const radius = {
  sm: "12px",
  md: "18px",
  lg: "24px",
  xl: "32px",
  full: "9999px",
} as const;

export const zIndex = {
  background: 0,
  content: 10,
  overlay: 20,
  modal: 50,
  cinematicFx: 5,
  aiAvatar: 15,
} as const;

export const motion = {
  spring: {
    type: "spring",
    stiffness: 280,
    damping: 24,
  },

  smoothSpring: {
    type: "spring",
    stiffness: 180,
    damping: 26,
  },

  cinematic: {
    type: "spring",
    stiffness: 120,
    damping: 20,
    mass: 1.1,
  },
} as const;

export const typography = {
  trackingHero: "-0.04em",
  trackingSection: "-0.02em",
  trackingLabel: "0.24em",
  maxReadingWidth: "68ch",
} as const;
