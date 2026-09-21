// components/home/CtaSection.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icons } from "@/components/ui/icons";
import { getWhatsappLink } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="bg-white px-4 pb-24 pt-14 sm:px-6 sm:pt-16">
      <Container>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-[#1E88E5]/15 bg-[#1E88E5]/10 px-7 py-9 shadow-[0_18px_45px_-30px_rgba(30,136,229,0.3)] sm:px-10 sm:py-11 lg:px-12">

          {/* Decoración suave */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#1E88E5]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#1E88E5]/5 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Texto */}
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/15 bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#1E88E5]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1E88E5]" />
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

            {/* Botones */}
            <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">

              <Link
                href="/nosotros"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-coral px-6 py-3.5 font-display text-[0.95rem] font-medium text-white shadow-[0_10px_25px_-12px_rgba(255,112,67,0.65)] transition-all hover:-translate-y-0.5 hover:bg-[#F0642E]"
              >
                Conocer más
                <span className="h-4 w-4">
                  <Icons.arrowRight />
                </span>
              </Link>

              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#1E88E5]/15 bg-white/85 px-6 py-3.5 font-display text-[0.95rem] font-medium text-brand-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1E88E5]/30 hover:text-[#1E88E5]"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* Detalle inferior */}
          <div className="relative mt-7 flex items-center gap-2 border-t border-[#1E88E5]/10 pt-4 text-xs text-brand-ink/45">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E88E5]" />
            Una solución pensada para simplificar la gestión académica
          </div>
        </div>
      </Container>
    </section>
  );
}