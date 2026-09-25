// components/home/CtaSection.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icons } from "@/components/ui/icons";
import { getWhatsappLink } from "@/lib/constants";

export function CtaSection() {
  return (
<section className="relative overflow-hidden bg-white py-12">      {/* =====================================================
          Decoraciones
      ====================================================== */}
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#159A68]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#7956B8]/5 blur-3xl" />

      <Container className="relative">
         <div className="relative w-full overflow-hidden rounded-[2rem] border border-brand-line/70 bg-gradient-to-br from-[#F3F8FC] via-white to-[#F7F3FC] px-7 py-9 shadow-[0_25px_60px_-35px_rgba(15,42,61,0.22)] sm:px-10 sm:py-11 lg:px-12">
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#1E88E5] via-[#159A68] to-[#7956B8]" />

          {/* Decoraciones internas */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#1E88E5]/6 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#7956B8]/6 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* =====================================================
                Texto
            ====================================================== */}
            <div className="max-w-xl">
              <span className="mb-3 inline-flex items-center rounded-full bg-brand-support/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
  Conoce Edoma
</span>
              <h2 className="mt-4 font-display text-2xl font-medium leading-tight text-brand-ink sm:text-3xl">
                Lleva a tu institución a un seguimiento académico real
              </h2>

              <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-brand-ink/60">
                Cuéntanos cómo trabaja tu colegio hoy y te mostramos cómo Edoma
                se adapta a las necesidades de tu institución.
              </p>
            </div>

            {/* =====================================================
                Botones
            ====================================================== */}
            <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">

              <Link
                href="/nosotros"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-coral px-6 py-3.5 font-display text-[0.95rem] font-medium text-white shadow-[0_10px_25px_-12px_rgba(255,112,67,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F0642E] hover:shadow-[0_14px_30px_-12px_rgba(255,112,67,0.7)]"
              >
                Conocer más

                <span className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5">
                  <Icons.arrowRight />
                </span>
              </Link>

              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#159A68]/20 bg-white/90 px-6 py-3.5 font-display text-[0.95rem] font-medium text-brand-ink shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#159A68]/30 hover:text-[#159A68] hover:shadow-md"
              >
                <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center text-[#159A68] [&>svg]:h-4 [&>svg]:w-4">
                  <Icons.whatsapp />
                </span>

                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* =====================================================
              Detalle inferior
          ====================================================== */}
          <div className="relative mt-7 flex items-center gap-2 border-t border-brand-line/70 pt-4 text-xs text-brand-ink/45">
            <span className="h-1.5 w-1.5 rounded-full bg-[#159A68]" />

            <span>
              Una solución pensada para simplificar la gestión académica
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}