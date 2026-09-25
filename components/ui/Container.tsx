// components/ui/Container.tsx
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

// En pantallas estándar el contenido aprovecha el ancho disponible.
// Desde 1920px se limita y centra para evitar que se estire demasiado.
const DEFAULT_WIDTH =
  "min-[1920px]:mx-auto min-[1920px]:max-w-container";

const HAS_CUSTOM_MAX_WIDTH = /(^|\s)(\S+:)*max-w-/;

export function Container({ children, className = "" }: ContainerProps) {
  const widthClasses = HAS_CUSTOM_MAX_WIDTH.test(className)
    ? ""
    : DEFAULT_WIDTH;

  const classes = [
    "w-full",
    widthClasses,
    "px-6 sm:px-8 lg:px-10",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}