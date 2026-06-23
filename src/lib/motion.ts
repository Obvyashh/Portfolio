import type { Transition, Variants } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                                Motion Tokens                               */
/* -------------------------------------------------------------------------- */

export const motionEasing = {
  smooth: [0.25, 0.1, 0.25, 1],
  cinematic: [0.16, 1, 0.3, 1],
  assistant: [0.22, 1, 0.36, 1],
  ambient: "linear",
} as const;

export const motionDuration = {
  fast: 0.28,
  normal: 0.55,
  slow: 0.8,
  cinematic: 1.2,
  ambient: 6,
} as const;

/* -------------------------------------------------------------------------- */
/*                              Shared Transitions                            */
/* -------------------------------------------------------------------------- */

export const interactionTransition: Transition = {
  duration: motionDuration.normal,
  ease: motionEasing.smooth,
};

const cinematicTransition: Transition = {
  duration: motionDuration.cinematic,
  ease: motionEasing.cinematic,
};

const assistantTransition: Transition = {
  duration: 0.65,
  ease: motionEasing.assistant,
};

/* -------------------------------------------------------------------------- */
/*                              Legacy Motion Aliases                         */
/* -------------------------------------------------------------------------- */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: interactionTransition,
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: interactionTransition,
  },
};

export const swipeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 120,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: motionEasing.cinematic,
    },
  },
};

export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: interactionTransition,
  },
};

export const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: interactionTransition,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: motionEasing.smooth,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const hoverLift: Variants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 20,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Section Motion                                */
/* -------------------------------------------------------------------------- */

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: cinematicTransition,
  },
};

export const sectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               Hero Motion                                  */
/* -------------------------------------------------------------------------- */

export const heroReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...cinematicTransition,
      duration: 1.1,
    },
  },
};

export const heroTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: motionEasing.cinematic,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                             Assistant Motion                               */
/* -------------------------------------------------------------------------- */

export const assistantWake: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: assistantTransition,
  },
};

export const assistantThinking: Variants = {
  idle: {
    opacity: 0.7,
    scale: 1,
    y: 0,
  },
  thinking: {
    opacity: 1,
    scale: 1.015,
    y: -2,
    transition: {
      duration: 1.4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                             Ambient Motion                                 */
/* -------------------------------------------------------------------------- */

export const ambientFloat: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-4, 4, -4],
    transition: {
      duration: motionDuration.ambient,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const ambientPulse: Variants = {
  initial: {
    opacity: 0.4,
    scale: 1,
  },
  animate: {
    opacity: [0.4, 0.55, 0.4],
    scale: [1, 1.015, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Card Interaction                              */
/* -------------------------------------------------------------------------- */

export const interactiveCard: Variants = {
  rest: {
    y: 0,
    scale: 1,
    rotateX: 0,
    rotateY: 0,
  },
  hover: {
    y: -6,
    scale: 1.015,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
};

export const projectFocus: Variants = {
  rest: {
    opacity: 0.88,
    scale: 1,
  },
  hover: {
    opacity: 1,
    scale: 1.02,
    transition: {
      duration: motionDuration.fast,
      ease: motionEasing.smooth,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              Scroll Reveal                                 */
/* -------------------------------------------------------------------------- */

export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: motionEasing.smooth,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               Navigation                                   */
/* -------------------------------------------------------------------------- */

export const navReveal: Variants = {
  hidden: {
    opacity: 0,
    y: -14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: motionEasing.assistant,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                             Modal / Overlay                                */
/* -------------------------------------------------------------------------- */

export const cinematicOverlay: Variants = {
  hidden: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    backdropFilter: "blur(14px)",
    transition: {
      duration: 0.55,
      ease: motionEasing.smooth,
    },
  },
};
