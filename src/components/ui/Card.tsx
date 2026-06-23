import * as React from "react";
import { cn } from "../../utils/classNames";

export type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_25px_60px_-35px_rgba(56,189,248,0.35)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

