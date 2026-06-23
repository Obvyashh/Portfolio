"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";

import { fadeUp } from "../../animations/variants";

export function Reveal({
  children,
  className,
  delay = 0,
  variant = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variants;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={variant}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
