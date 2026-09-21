// app/soporte/page.tsx
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/soporte/FaqAccordion";
import { Icons } from "@/components/ui/icons";
import { getWhatsappLink } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Soporte",
  description:
    "Encuentra respuestas a las preguntas más frecuentes sobre Edoma y comunícate con soporte técnico por WhatsApp.",
  path: "/soporte",
});

export default function SoportePage() {
  return (
       <section className="pt-10 pb-24">
      <Container className="max-w-3xl">
<span className="inline-flex items-center rounded-full bg-brand-support/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
  Soporte
</span>        <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-brand-ink sm:text-5xl">
          Preguntas frecuentes
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-brand-ink/70">
          Resolvemos las dudas más comunes sobre Edoma. Si necesitas ayuda
          adicional, nuestro canal de soporte técnico es WhatsApp.
        </p>

        <div className="mt-10">
          <FaqAccordion />
        </div>

<div className="mt-10 flex flex-col items-start gap-5 rounded-[1.75rem] bg-[#1E88E5] px-8 py-8 sm:flex-row sm:items-center sm:justify-between">          <div>
            <p className="font-display text-lg font-medium text-white">
              ¿No encontraste lo que buscabas?
            </p>
            <p className="mt-1 text-sm text-white/60">
              Escríbenos por WhatsApp y te ayudamos directamente.
            </p>
          </div>
          <a
            href={getWhatsappLink("Hola, tengo una pregunta de soporte sobre Edoma.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#25D366] px-6 py-3 font-display text-sm font-medium text-white"
          >
            <span className="inline-flex h-4 w-4 shrink-0">
              <Icons.whatsapp />
            </span>
            Contactar soporte
          </a>
        </div>
      </Container>
    </section>
  );
}
