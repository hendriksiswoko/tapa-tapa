import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline-light";
  className?: string;
  target?: string;
  rel?: string;
};

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-dark focus-visible:bg-accent-dark",
  secondary:
    "bg-transparent text-foreground border border-border-subtle hover:border-charcoal-900",
  "outline-light":
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
