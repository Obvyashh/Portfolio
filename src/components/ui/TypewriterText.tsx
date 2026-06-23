"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function TypewriterText({
  text,
  delay = 0,
  speed = 0.02,
  className,
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}) {
  const characters = text.split("");

  return (
    <motion.span
      className={className ? `${className} whitespace-pre-wrap` : "whitespace-pre-wrap"}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: speed,
            delayChildren: delay,
          },
        },
      }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
