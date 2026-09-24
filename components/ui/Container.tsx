// components/ui/Container.tsx
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

// Ancho máximo del sitio: usa el valor `container` (1180px) definido en
// tailwind.config.ts y centra el contenido en pantallas grandes.
// Si quien lo usa define su propio ancho máximo (por ejemplo `max-w-none`
// en Contacto y Soporte), se respeta y no se aplica el ancho por defecto.
const DEFAULT_WIDTH = "mx-auto max-w-container";
const HAS_CUSTOM_MAX_WIDTH = /(^|\s)(\S+:)*max-w-/;

export function Container({ children, className = "" }: ContainerProps) {
  const widthClasses = HAS_CUSTOM_MAX_WIDTH.test(className)
    ? ""
    : DEFAULT_WIDTH;

  const classes = ["w-full", widthClasses, "px-6 sm:px-8 lg:px-10", className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
