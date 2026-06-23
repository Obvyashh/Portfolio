import * as React from "react";
import { cn } from "../../utils/classNames";

export function SectionTitle({
  eyebrow,
  title,
  className,
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {eyebrow ? (
        <div className="text-xs tracking-[0.25em] uppercase text-cyan-200/70">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
        {title}
      </h2>
    </div>
  );
}

