// components/contacto/ContactHero.tsx
import { Icons } from "@/components/ui/icons";
import { getWhatsappLink } from "@/lib/constants";

export function ContactHero() {
  return (
    <div className="relative text-center lg:text-left">
      <span className="inline-flex items-center rounded-full bg-brand-support/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
        Contacto
      </span>

      <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] tracking-tight text-brand-ink sm:text-6xl">
        Hablemos por
        <br />
        <span className="text-brand-support">WhatsApp</span>
      </h1>

      <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-brand-ink/60 lg:mx-0">
        Por ahora, la vía de contacto directa con Edoma es WhatsApp.
        Escríbenos y te contamos cómo funciona la plataforma para tu
        institución.
      </p>

      <a
        href={getWhatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-display text-base font-medium text-white shadow-lg shadow-[#25D366]/25 transition-transform hover:scale-[1.02]"
      >
        <span className="inline-flex h-5 w-5 shrink-0">
          <Icons.whatsapp />
        </span>

        Escribir por WhatsApp

        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}