// components/ui/Button.tsx
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  icon?: ReactNode;
};

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-coral text-white hover:bg-[#F0642E] focus-visible:outline-brand-coral",
  secondary:
    "bg-brand-ink text-white hover:bg-[#173851] focus-visible:outline-brand-ink",
  ghost:
    "bg-white text-brand-ink border border-brand-line hover:border-brand-support hover:text-brand-support focus-visible:outline-brand-support",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  icon,
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-[0.95rem] font-medium tracking-tight transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
