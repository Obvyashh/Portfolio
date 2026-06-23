"use client";

import * as React from "react";
import { useInView } from "framer-motion";

export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true });
  return { ref, isInView };
}

