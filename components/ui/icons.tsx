// components/ui/icons.tsx
// Cada ícono es un componente SVG propio (sin librería externa como
// lucide-react). Se controla 100% desde aquí: color vía currentColor,
// trazo y tamaño vía props. Registro centralizado: cualquier componente
// del sitio importa `Icons` y renderiza `<Icons.security />`.

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (children: React.ReactNode, viewBox = "0 0 24 24") =>
  function Icon(props: IconProps) {
    return (
      <svg
        viewBox={viewBox}
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {children}
      </svg>
    );
  };

// Algunos íconos (como el de WhatsApp) son glifos SÓLIDOS: su path está
// diseñado para rellenarse, no para dibujarse con trazo. Si se renderizan
// con `fill="none" stroke="currentColor"` se ve el contorno doble/deforme.
const baseFilled = (children: React.ReactNode, viewBox = "0 0 24 24") =>
  function Icon(props: IconProps) {
    return (
      <svg
        viewBox={viewBox}
        width="24"
        height="24"
        fill="currentColor"
        stroke="none"
        aria-hidden="true"
        focusable="false"
        {...props}
      >
        {children}
      </svg>
    );
  };

export const Icons = {
  security: base(
    <>
      <path d="M12 3.5 5 6.3v5.4c0 4.2 3 6.9 7 8.3 4-1.4 7-4.1 7-8.3V6.3L12 3.5Z" />
      <path d="M9.3 12.1 11.4 14l3.3-4" />
    </>
  ),

  shield: base(
    <>
      <path d="M12 3.5 5 6.3v5.4c0 4.2 3 6.9 7 8.3 4-1.4 7-4.1 7-8.3V6.3L12 3.5Z" />
      <path d="M12 8v4.3" />
      <path d="M12 15.2h.01" />
    </>
  ),

  checkCircle: base(
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.7 12.3l2.1 2.1 4.5-4.9" />
    </>
  ),

  schedules: base(
    <>
      <rect x="4" y="5.5" width="16" height="14" rx="2.5" />
      <path d="M4 9.5h16" />
      <path d="M8.3 3.5v3M15.7 3.5v3" />
      <path d="M8 13h2M8 16h2M14 13h2M14 16h2" />
    </>
  ),

  report: base(
    <>
      <path d="M7 3.5h7l3 3v13.5a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z" />
      <path d="M14 3.5V7h3" />
      <path d="M8.3 12.5h7.4M8.3 15.6h7.4M8.3 9.4h4" />
    </>
  ),

  userSwitch: base(
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M4 20c0-3 2.5-5 5-5s5 2 5 5" />
      <path d="M16 7.5h4.2M18.6 5.3l1.8 2.2-1.8 2.2" />
      <path d="M20 15.5h-4.2M17.4 13.3l-1.8 2.2 1.8 2.2" />
    </>
  ),

  offline: base(
    <>
      <path d="M4.5 9.2a11 11 0 0 1 15 0" />
      <path d="M7.3 12.4a7 7 0 0 1 9.4 0" />
      <path d="M10.1 15.6a3.3 3.3 0 0 1 3.8 0" />
      <path d="M3 4l18 17" />
    </>
  ),

  clock: base(
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </>
  ),

  alert: base(
    <>
      <path d="M12 4 3 19.5h18L12 4Z" />
      <path d="M12 10.3v3.6M12 16.8h.01" />
    </>
  ),

  mobile: base(
    <>
      <rect x="6.5" y="3" width="11" height="18" rx="2.3" />
      <path d="M10.3 18.2h3.4" />
    </>
  ),

  building: base(
    <>
      <path d="M5 20V6.5L12 3l7 3.5V20" />
      <path d="M9 20v-4.5h6V20" />
      <path d="M9 10.5h.01M12 10.5h.01M15 10.5h.01M9 7.3h.01M12 7.3h.01M15 7.3h.01" />
    </>
  ),

  teacher: base(
    <>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
      <path d="M8.5 20v-2.4M15.5 20v-2.4" />
    </>
  ),

  student: base(
    <>
      <path d="M3 8.5 12 5l9 3.5-9 3.5-9-3.5Z" />
      <path d="M7 10.4v4.3c0 1.6 2.2 2.9 5 2.9s5-1.3 5-2.9v-4.3" />
    </>
  ),

  coordinator: base(
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="16.5" cy="9.5" r="2.2" />
      <path d="M4 20c0-3 2.2-5.2 5-5.2s5 2.2 5 5.2" />
      <path d="M14.3 15.2c2.2.3 3.7 2.1 3.7 4.4" />
    </>
  ),

  parent: base(
    <>
      <circle cx="8.5" cy="7.5" r="2.6" />
      <circle cx="15.7" cy="6.7" r="1.8" />
      <path d="M3.5 20c0-3.2 2.3-5.3 5-5.3s5 2.1 5 5.3" />
      <path d="M14 15.3c2 .5 3.2 2.4 3.2 4.7" />
    </>
  ),

  whatsapp: baseFilled(
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  ),

  chevronDown: base(
    <path d="M6 9l6 6 6-6" />
  ),

  arrowRight: base(
    <path d="M4 12h15.5M13.5 5.5 20 12l-6.5 6.5" />
  ),

  menu: base(
    <path d="M4 6.5h16M4 12h16M4 17.5h16" />
  ),

  close: base(
    <path d="M5.5 5.5 18.5 18.5M18.5 5.5 5.5 18.5" />
  ),
} as const;

export type IconName = keyof typeof Icons;