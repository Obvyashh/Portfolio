import Link from "next/link";
import * as React from "react";
import { cn } from "../../utils/classNames";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
} & (
  | (Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
      as?: "button";
      href?: undefined;
    })
  | (Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
      as?: "a";
      href: string;
    })
);

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-400/30 via-fuchsia-400/30 to-indigo-400/30 border border-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_30px_-15px_rgba(99,102,241,0.35)] hover:from-cyan-400/40 hover:via-fuchsia-400/40 hover:to-indigo-400/40",
  secondary:
    "bg-white/5 border border-white/10 text-white hover:bg-white/10",
  ghost:
    "bg-transparent border border-white/10 text-white hover:bg-white/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm rounded-xl",
  md: "h-12 px-5 text-sm rounded-2xl",
  lg: "h-14 px-6 text-base rounded-2xl",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40 focus-visible:ring-offset-0 disabled:opacity-60 disabled:pointer-events-none backdrop-blur";

  const cls = cn(base, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <Link href={href} className={cls} target={target} rel={rel} {...(props as any)}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={cls} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />
  );
}

export interface ContactButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const ContactButton = ({
  label = 'Contact Me',
  href = '#contact',
  onClick,
  className = '',
}: ContactButtonProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white whitespace-nowrap transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  );
};
