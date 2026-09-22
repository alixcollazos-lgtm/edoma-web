// components/ui/Card.tsx
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`group rounded-[1.5rem] border border-brand-line/70 bg-white p-7 shadow-[0_1px_3px_rgba(15,42,61,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-[0_24px_44px_-28px_rgba(15,42,61,0.22)] ${className}`}
    >
      {children}
    </div>
  );
}

type IconFrameProps = {
  children: ReactNode;
  tone?: "primary" | "support" | "coral";
  className?: string;
};

const toneStyles: Record<NonNullable<IconFrameProps["tone"]>, string> = {
  primary:
    "bg-gradient-to-br from-brand-primary/18 to-brand-primary/5 text-brand-support",
  support:
    "bg-gradient-to-br from-brand-support/18 to-brand-support/5 text-brand-support",
  coral:
    "bg-gradient-to-br from-brand-coral/18 to-brand-coral/5 text-brand-coral",
};

// Contenedor de ícono: cuadrado redondeado con leve degradado y anillo
// interior, para dar profundidad sin salirse del estilo minimalista.
export function IconFrame({
  children,
  tone = "primary",
  className = "",
}: IconFrameProps) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ring-inset ring-black/[0.03] transition-transform duration-300 group-hover:scale-105 ${toneStyles[tone]} ${className}`}
    >
      <span className="h-6 w-6">{children}</span>
    </div>
  );
}