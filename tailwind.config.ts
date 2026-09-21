import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#47B3E4", // acentos, bullets, botones (fijo)
          support: "#1E88E5", // subtítulos, enlaces (fijo)
          // El resto de tonos se definen libremente a partir de estos dos.
          ink: "#0F2A3D", // texto principal / headers
          mist: "#F7FAFC", // fondo base
          mistdark: "#EAF3FA", // fondo alterno para franjas de sección
          coral: "#FF7A45", // único acento cálido, reservado para CTA primario
          success: "#16A34A", // check de la tabla comparativa
          line: "#D9E6F0", // bordes / divisores sutiles
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        capsule: "2.5rem",
      },
      maxWidth: {
        container: "1180px",
      },
      keyframes: {
        idle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        idle: "idle 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
