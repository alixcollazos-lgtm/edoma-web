// components/home/SuccessStory.tsx
import { Container } from "@/components/ui/Container";
import { Icons } from "@/components/ui/icons";
import { SUCCESS_STORY } from "@/lib/constants";

export function SuccessStory() {
  const initial = SUCCESS_STORY.role.charAt(0);

  return (
<section className="relative overflow-hidden bg-white pb-16 pt-4">      {/* =====================================================
          DECORACIONES
      ====================================================== */}
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-[#159A68]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#7956B8]/5 blur-3xl" />

      <Container className="relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-line/70 bg-gradient-to-br from-[#F3F8FC] via-white to-[#F7F3FC] px-7 py-10 shadow-[0_25px_60px_-35px_rgba(15,42,61,0.22)] sm:px-10 sm:py-12 lg:px-14 lg:py-14">

          {/* Línea superior decorativa */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#1E88E5] via-[#159A68] to-[#7956B8]" />

          {/* Decoraciones internas */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#1E88E5]/7 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-[#7956B8]/7 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-14">

            {/* =====================================================
                CONTENIDO PRINCIPAL
            ====================================================== */}
            <div>
              <span className="mb-3 inline-flex items-center rounded-full bg-brand-support/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
  Caso de éxito
</span>

              <div className="relative mt-7">
                {/* Comilla decorativa */}
                <span className="pointer-events-none absolute -left-3 -top-8 select-none font-display text-7xl leading-none text-[#1E88E5]/12">
                  &ldquo;
                </span>

                <blockquote className="relative max-w-3xl font-display text-2xl font-medium leading-[1.25] text-brand-ink sm:text-3xl lg:text-[2.05rem]">
                  {SUCCESS_STORY.quote}
                </blockquote>
              </div>

              {/* =====================================================
                  AUTOR
              ====================================================== */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#1E88E5]/15 bg-white font-display text-sm font-semibold text-[#1E88E5] shadow-sm">
                  {initial}
                </div>

                <div>
                  <p className="text-sm font-medium text-brand-ink">
                    {SUCCESS_STORY.role}
                  </p>

                  <p className="mt-0.5 text-xs text-brand-ink/55">
                    {SUCCESS_STORY.institution}
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                TARJETA DE ESTADÍSTICA
            ====================================================== */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/80 p-6 shadow-[0_20px_40px_-28px_rgba(15,42,61,0.3)] backdrop-blur-md transition-transform duration-200 hover:-translate-y-1 sm:p-7">

                {/* Acento lateral */}
                <div className="absolute left-0 top-0 h-full w-1 bg-[#159A68]" />

                {/* Icono */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#159A68]/10 text-[#159A68]">
                  <span className="h-5 w-5">
                    <Icons.clock />
                  </span>
                </div>

                <p className="mt-6 font-display text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                  {SUCCESS_STORY.stat.value}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-brand-ink/60">
                  {SUCCESS_STORY.stat.label}
                </p>

                <div className="mt-7 h-px w-full bg-brand-line/70" />

                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-brand-ink/60">
                  <span className="h-2 w-2 rounded-full bg-[#159A68]" />
                  Seguimiento académico en tiempo real
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}