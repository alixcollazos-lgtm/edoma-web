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
    <section className="relative overflow-hidden bg-[#F3F8FC] pb-16 pt-8 sm:pb-20 sm:pt-10">
      {/* =====================================================
          DECORACIONES
      ====================================================== */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#1E88E5]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-56 h-80 w-80 rounded-full bg-[#7956B8]/5 blur-3xl" />

<Container className="relative w-full max-w-none px-4 sm:px-6 lg:px-8">        {/* =====================================================
            ENCABEZADO
        ====================================================== */}
        <div className="max-w-4xl">
          <span className="mb-3 inline-flex items-center rounded-full bg-brand-support/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
  Soporte
</span>

          <h1 className="mt-4 font-display text-4xl font-medium leading-tight text-brand-ink sm:text-5xl">
            Preguntas frecuentes
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-brand-ink/65 sm:text-lg">
            Resolvemos las dudas más comunes sobre Edoma. Si necesitas ayuda
            adicional, nuestro canal de soporte técnico es WhatsApp.
          </p>
        </div>

        {/* =====================================================
            PREGUNTAS FRECUENTES
        ====================================================== */}
        <div className="relative mt-8 rounded-[2rem] border border-brand-line/70 bg-white p-5 shadow-[0_18px_45px_-30px_rgba(15,42,61,0.22)] sm:mt-10 sm:p-7 lg:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
              <Icons.checkCircle />
            </div>

            <div>
              <h2 className="font-display text-lg font-medium text-brand-ink">
                Respuestas rápidas
              </h2>

              <p className="mt-0.5 text-sm text-brand-ink/50">
                Consulta las preguntas más frecuentes sobre Edoma.
              </p>
            </div>
          </div>

          <FaqAccordion />
        </div>

        {/* =====================================================
            CONTACTO DE SOPORTE
        ====================================================== */}
        <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-[#1E88E5]/10 bg-gradient-to-br from-white via-[#F3F8FC] to-[#F7F3FC] px-6 py-7 shadow-[0_20px_50px_-32px_rgba(15,42,61,0.24)] sm:mt-10 sm:px-8 sm:py-8 lg:px-10">
          {/* Línea superior */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#1E88E5] via-[#159A68] to-[#7956B8]" />

          {/* Decoraciones */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#1E88E5]/5 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#7956B8]/5 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Texto */}
            <div className="max-w-2xl">
<span className="mb-3 inline-flex items-center rounded-full bg-brand-support/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
                Atención directa
              </span>

              <h2 className="mt-3 font-display text-xl font-medium text-brand-ink sm:text-2xl">
                ¿No encontraste lo que buscabas?
              </h2>

              <p className="mt-2 text-sm leading-6 text-brand-ink/60 sm:text-[0.95rem]">
                Escríbenos por WhatsApp y te ayudamos directamente con tus
                dudas sobre Edoma.
              </p>
            </div>

            {/* Botón */}
            <a
              href={getWhatsappLink(
                "Hola, tengo una pregunta de soporte sobre Edoma."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#159A68] px-6 py-3.5 font-display text-sm font-medium text-white shadow-[0_10px_25px_-14px_rgba(21,154,104,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#128457] hover:shadow-[0_14px_30px_-14px_rgba(21,154,104,0.7)]"
            >
              <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
                <Icons.whatsapp />
              </span>

              Contactar soporte

              <span className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5">
                <Icons.arrowRight />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}