import * as React from "react";

export function Loader({ className }: { className?: string }) {
  return (
    <div
      className={
        className ??
        "h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-cyan-300/60"
      }
      aria-label="Loading"
    />
  );
}

