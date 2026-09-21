// components/home/SuccessStory.tsx
import { Container } from "@/components/ui/Container";
import { Icons } from "@/components/ui/icons";
import { SUCCESS_STORY } from "@/lib/constants";

export function SuccessStory() {
  const initial = SUCCESS_STORY.role.charAt(0);

  return (
    <section className="pt-4 pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#1E88E5]/15 bg-[#1E88E5]/10 px-8 py-12 shadow-[0_20px_50px_-30px_rgba(30,136,229,0.25)] sm:px-12 sm:py-16 lg:px-14 lg:py-14">

          {/* Decoración suave */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#1E88E5]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#1E88E5]/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">

            {/* Contenido principal */}
            <div>
              <span className="inline-flex items-center rounded-full border border-[#1E88E5]/20 bg-[#1E88E5]/10 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.08em] text-[#1E88E5]">
                Caso de éxito
              </span>

              <div className="relative mt-7">
                <span className="pointer-events-none absolute -left-3 -top-8 select-none font-display text-7xl leading-none text-[#1E88E5]/15">
                  &ldquo;
                </span>

                <blockquote className="relative max-w-3xl font-display text-2xl font-medium leading-[1.25] text-brand-ink sm:text-3xl lg:text-[2.1rem]">
                  {SUCCESS_STORY.quote}
                </blockquote>
              </div>

              {/* Autor */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#1E88E5]/15 bg-[#1E88E5]/10 font-display text-sm font-semibold text-[#1E88E5]">
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

            {/* Tarjeta de estadística */}
            <div className="relative">
              <div className="rounded-[1.5rem] border border-[#1E88E5]/15 bg-white/60 p-7 shadow-[0_15px_35px_-25px_rgba(30,136,229,0.3)] backdrop-blur-md sm:p-8">

                {/* Icono */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1E88E5]/10 text-[#1E88E5]">
                  <span className="h-5 w-5">
                    <Icons.clock />
                  </span>
                </div>

                <p className="mt-7 font-display text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                  {SUCCESS_STORY.stat.value}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-brand-ink/60">
                  {SUCCESS_STORY.stat.label}
                </p>

                <div className="mt-7 h-px w-full bg-[#1E88E5]/10" />

                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-brand-ink/60">
                  <span className="h-2 w-2 rounded-full bg-[#1E88E5]" />
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