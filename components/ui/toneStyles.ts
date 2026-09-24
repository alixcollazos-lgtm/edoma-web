// components/ui/toneStyles.ts

//   card  → borde y sombra al pasar el mouse sobre la tarjeta
//   icon  → fondo y color del ícono al pasar el mouse
//   title → color del título al pasar el mouse
//   line  → línea de acento lateral de la tarjeta

export const TONE_STYLES = {
  blue: {
    card:
      "hover:border-[#1E88E5]/35 hover:shadow-[0_14px_35px_-18px_rgba(30,136,229,0.45)]",
    icon: "group-hover:bg-[#E3F2FD] group-hover:text-[#1E88E5]",
    title: "group-hover:text-[#1E88E5]",
    line: "bg-[#1E88E5]",
  },
  green: {
    card:
      "hover:border-[#159A68]/35 hover:shadow-[0_14px_35px_-18px_rgba(21,154,104,0.45)]",
    icon: "group-hover:bg-[#E4F7EE] group-hover:text-[#159A68]",
    title: "group-hover:text-[#159A68]",
    line: "bg-[#159A68]",
  },
  purple: {
    card:
      "hover:border-[#7956B8]/35 hover:shadow-[0_14px_35px_-18px_rgba(121,86,184,0.45)]",
    icon: "group-hover:bg-[#F0EBFA] group-hover:text-[#7956B8]",
    title: "group-hover:text-[#7956B8]",
    line: "bg-[#7956B8]",
  },
};

export type ToneName = keyof typeof TONE_STYLES;