"use client";

import { motion } from "framer-motion";

import {
  slideLeft,
  slideRight,
} from "../../lib/motion";
type Props = {
  children: React.ReactNode;

  direction?: "left" | "right";

  className?: string;
};

export default function MotionSlide({
  children,
  direction = "left",
  className,
}: Props) {
  return (
    <motion.div
      variants={
        direction === "left"
          ? slideLeft
          : slideRight
      }
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}