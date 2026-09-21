// components/home/BenefitsGrid.tsx
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icons, type IconName } from "@/components/ui/icons";
import { ADDITIONAL_BENEFIT, BENEFIT_AXES } from "@/lib/constants";
import { BenefitCard } from "./BenefitCard";

export function BenefitsGrid() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Por qué Edoma"
          title="Todo lo que tu institución necesita, en tres frentes"
          description="Cumplimiento legal, automatización y visibilidad en tiempo real, trabajando juntos para que nadie tenga que perseguir información."
        />

        <div className="mt-16 space-y-20">
          {BENEFIT_AXES.map((axis) => (
            <div key={axis.id}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-3.5 py-1.5 font-display text-xs font-semibold uppercase tracking-wide text-brand-support">
                  {axis.eyebrow}
                </span>
                <h3 className="font-display text-xl font-medium text-brand-ink sm:text-2xl">
                  {axis.title}
                </h3>
              </div>
              <div className="mt-6 h-px w-full bg-brand-line/60" />
              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {axis.benefits.map((benefit) => (
                  <BenefitCard key={benefit.id} benefit={benefit} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[1.75rem] bg-brand-support px-8 py-10 sm:px-10">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
          <div className="relative flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-start gap-6 sm:flex-row">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-inset ring-white/10">
                <span className="h-6 w-6 text-white">
                  <Icons.building />
                </span>
              </div>
              <div>
                <span className="inline-flex items-center rounded-full bg-white/15 px-3.5 py-1.5 font-display text-xs font-semibold uppercase tracking-wide text-white">
                  {ADDITIONAL_BENEFIT.eyebrow}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium text-white">
                  {ADDITIONAL_BENEFIT.title}
                </h3>
                <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-white/70">
                  {ADDITIONAL_BENEFIT.description}
                </p>
              </div>
            </div>

            {/* Mockup de navegador: ejemplo de subdominio institucional */}
            <div className="w-full shrink-0 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-[0_20px_40px_-24px_rgba(15,42,61,0.35)] sm:w-72">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
              </div>
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2.5">
                <span className="h-3.5 w-3.5 shrink-0 text-brand-support">
                  <Icons.security />
                </span>
                <span className="font-display text-[0.8rem] text-brand-ink">
                  colegioabc.edoma.com
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/75">
                Cada colegio, con su propia dirección institucional.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}