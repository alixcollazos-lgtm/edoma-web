// components/home/BenefitsGrid.tsx

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icons } from "@/components/ui/icons";
import { ADDITIONAL_BENEFIT, BENEFIT_AXES } from "@/lib/constants";
import { BenefitCard } from "./BenefitCard";

const AXIS_STYLES = [
  {
    number: "01",
    wrapper:
      "border-[#C9E3F7] bg-gradient-to-br from-[#F1F8FE] via-white to-[#EAF5FD]",
    badge: "bg-[#DCEFFD] text-[#1E88E5]",
    numberColor: "text-[#1E88E5]",
    numberBg: "bg-[#E8F4FD]",
    line: "bg-[#1E88E5]/25",
    accent: "bg-[#1E88E5]",
    dot: "bg-[#1E88E5]/15",
  },
  {
    number: "02",
    wrapper:
      "border-[#CDE9DD] bg-gradient-to-br from-[#F0FAF5] via-white to-[#EAF8F1]",
    badge: "bg-[#DDF4E8] text-[#159A68]",
    numberColor: "text-[#159A68]",
    numberBg: "bg-[#E7F7EF]",
    line: "bg-[#159A68]/25",
    accent: "bg-[#159A68]",
    dot: "bg-[#159A68]/15",
  },
  {
    number: "03",
    wrapper:
      "border-[#DED5F0] bg-gradient-to-br from-[#F7F4FC] via-white to-[#F3EFFA]",
    badge: "bg-[#ECE6F8] text-[#7956B8]",
    numberColor: "text-[#7956B8]",
    numberBg: "bg-[#F0EBFA]",
    line: "bg-[#7956B8]/25",
    accent: "bg-[#7956B8]",
    dot: "bg-[#7956B8]/15",
  },
];

export function BenefitsGrid() {
  return (
    <section className="overflow-hidden py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Por qué Edoma"
          title="Todo lo que tu institución necesita, en tres frentes"
          description="Cumplimiento legal, automatización y visibilidad en tiempo real, trabajando juntos para que nadie tenga que perseguir información."
        />

        <div className="mt-14 space-y-7 sm:mt-16 sm:space-y-8">
          {BENEFIT_AXES.map((axis, index) => {
            const style = AXIS_STYLES[index] ?? AXIS_STYLES[0];

            const tone =
              index === 0
                ? "blue"
                : index === 1
                  ? "green"
                  : "purple";

            return (
              <div
                key={axis.id}
                className={`relative overflow-hidden rounded-[1.75rem] border p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-30px_rgba(15,42,61,0.35)] sm:p-8 ${style.wrapper}`}
              >
                {/* Decoración sutil */}
                <div
                  className={`absolute -right-14 -top-14 h-40 w-40 rounded-full blur-3xl ${style.dot}`}
                />

                <div
                  className={`absolute bottom-0 left-0 top-0 w-1 rounded-r-full ${style.accent}`}
                />

                {/* Encabezado del eje */}
                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm ring-1 ring-black/5 ${style.numberBg} ${style.numberColor}`}
                    >
                      <span className="font-display text-sm font-semibold">
                        {style.number}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <span
                        className={`inline-flex items-center rounded-full px-3.5 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.08em] ${style.badge}`}
                      >
                        {axis.eyebrow}
                      </span>

                      <h3 className="mt-2 font-display text-xl font-medium leading-tight text-brand-ink sm:text-2xl">
                        {axis.title}
                      </h3>
                    </div>
                  </div>

                  {/* Separador visual */}
                  <div
                    className={`hidden h-px flex-1 sm:ml-8 sm:block ${style.line}`}
                  />
                </div>

                {/* Beneficios */}
                <div className="relative mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {axis.benefits.map((benefit) => (
                    <BenefitCard
                      key={benefit.id}
                      benefit={benefit}
                      tone={tone}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Beneficio adicional */}
        <div className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-[#D6E8F2] bg-gradient-to-br from-[#EAF7FC] via-[#F5FBFD] to-white px-6 py-8 sm:px-10 sm:py-10">
          {/* Decoración */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#47B3E4]/15 blur-3xl" />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#47B3E4]/15 text-[#1E88E5] ring-1 ring-[#47B3E4]/20">
                <span className="h-6 w-6">
                  <Icons.building />
                </span>
              </div>

              <div>
                <span className="inline-flex items-center rounded-full bg-[#DDF3FB] px-3.5 py-1.5 font-display text-xs font-semibold uppercase tracking-wide text-[#1E88E5]">
                  {ADDITIONAL_BENEFIT.eyebrow}
                </span>

                <h3 className="mt-3 font-display text-xl font-medium text-brand-ink">
                  {ADDITIONAL_BENEFIT.title}
                </h3>

                <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-slate-600">
                  {ADDITIONAL_BENEFIT.description}
                </p>
              </div>
            </div>

            {/* Mockup de navegador */}
            <div className="w-full shrink-0 rounded-2xl border border-[#BFE2F1] bg-white/80 p-4 shadow-[0_20px_40px_-24px_rgba(15,42,61,0.3)] sm:w-72">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#47B3E4]/40" />
                <span className="h-2 w-2 rounded-full bg-[#47B3E4]/40" />
                <span className="h-2 w-2 rounded-full bg-[#47B3E4]/40" />
              </div>

              <div className="mt-3 flex items-center gap-2 rounded-lg border border-[#DCEEF5] bg-[#F7FCFE] px-3 py-2.5">
                <span className="h-3.5 w-3.5 shrink-0 text-[#1E88E5]">
                  <Icons.security />
                </span>

                <span className="truncate font-display text-[0.8rem] text-brand-ink">
                  colegioabc.edoma.com
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-500">
                Cada colegio, con su propia dirección institucional.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}