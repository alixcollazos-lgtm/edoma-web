// components/home/ComparisonTable.tsx
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icons } from "@/components/ui/icons";
import {
  COMPARISON_NOTE,
  COMPARISON_ROWS,
  type ComparisonValue,
} from "@/lib/constants";

const labels: Record<ComparisonValue, string> = {
  yes: "Sí",
  no: "No",
  partial: "Parcial",
  unspecified: "No especifica",
};

function Cell({
  value,
  highlight,
}: {
  value: ComparisonValue;
  highlight?: boolean;
}) {
  if (value === "yes") {
    return (
      <span
        className={`inline-flex items-center gap-2 text-sm font-medium ${
          highlight ? "text-[#1E88E5]" : "text-[#159A68]"
        }`}
      >
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-full ${
            highlight ? "bg-[#1E88E5]/10" : "bg-[#159A68]/10"
          }`}
        >
          <span className="h-3.5 w-3.5">
            <Icons.checkCircle />
          </span>
        </span>

        {labels.yes}
      </span>
    );
  }

  if (value === "partial") {
    return (
      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#7956B8]">
        <span className="h-2 w-2 rounded-full bg-[#7956B8]" />
        {labels.partial}
      </span>
    );
  }

  if (value === "no") {
    return (
      <span className="inline-flex items-center gap-2 text-sm text-brand-ink/40">
        <span className="h-2 w-2 rounded-full bg-brand-ink/20" />
        {labels.no}
      </span>
    );
  }

  return (
    <span className="text-sm text-brand-ink/40">
      {labels[value]}
    </span>
  );
}

const alternatives = [
  {
    key: "edoma",
    label: "Edoma",
    highlight: true,
  },
  {
    key: "altA",
    label: "Alternativa A",
    highlight: false,
  },
  {
    key: "altB",
    label: "Alternativa B",
    highlight: false,
  },
  {
    key: "altC",
    label: "Alternativa C",
    highlight: false,
  },
] as const;

const accentColors = [
  {
    border: "border-[#1E88E5]/30",
    bg: "bg-[#1E88E5]/10",
    text: "text-[#1E88E5]",
    icon: "bg-[#1E88E5]/10",
  },
  {
    border: "border-[#159A68]/20",
    bg: "bg-[#F1FAF6]",
    text: "text-[#159A68]",
    icon: "bg-[#159A68]/10",
  },
  {
    border: "border-[#7956B8]/20",
    bg: "bg-[#F7F3FC]",
    text: "text-[#7956B8]",
    icon: "bg-[#7956B8]/10",
  },
  {
    border: "border-[#E6A817]/25",
    bg: "bg-[#FFF9F0]",
    text: "text-[#A87400]",
    icon: "bg-[#E6A817]/10",
  },
] as const;

export function ComparisonTable() {
  return (
    <section className="relative overflow-hidden bg-[#F3F8FC] py-24">
      {/* Decoraciones */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#1E88E5]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#7956B8]/5 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center rounded-full bg-brand-support/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
            Comparativa
          </span>

          <h2 className="font-display text-3xl font-medium leading-[1.15] text-brand-ink sm:text-4xl">
            Edoma frente a otras alternativas del mercado
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-brand-ink/70">
            Comparación por funcionalidad, sin nombrar proveedores específicos.
          </p>
        </div>

        {/* Desktop */}
        <div className="mt-12 hidden overflow-hidden rounded-[1.75rem] border border-brand-line/70 bg-white shadow-[0_25px_60px_-35px_rgba(15,42,61,0.22)] md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-brand-line/70 bg-[#F8FBFD]">
                  <th className="px-7 py-5 font-display text-xs font-semibold uppercase tracking-wide text-brand-ink/55">
                    Funcionalidad
                  </th>

                  <th className="relative bg-[#1E88E5]/10 px-7 py-5 font-display text-sm font-semibold text-[#1E88E5]">
                    <span className="absolute inset-x-0 top-0 h-0.5 bg-[#1E88E5]" />

                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1E88E5]/10">
                        <span className="h-4 w-4">
                          <Icons.checkCircle />
                        </span>
                      </span>

                      Edoma
                    </div>
                  </th>

                  <th className="px-7 py-5 font-display text-xs font-semibold uppercase tracking-wide text-brand-ink/45">
                    Alternativa A
                  </th>

                  <th className="px-7 py-5 font-display text-xs font-semibold uppercase tracking-wide text-brand-ink/45">
                    Alternativa B
                  </th>

                  <th className="px-7 py-5 font-display text-xs font-semibold uppercase tracking-wide text-brand-ink/45">
                    Alternativa C
                  </th>
                </tr>
              </thead>

              <tbody>
                {COMPARISON_ROWS.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`group transition-colors hover:bg-[#F8FBFD] ${
                      index !== COMPARISON_ROWS.length - 1
                        ? "border-b border-brand-line/60"
                        : ""
                    }`}
                  >
                    <td className="px-7 py-5">
                      <span className="text-sm font-medium leading-relaxed text-brand-ink/75">
                        {row.feature}
                      </span>
                    </td>

                    <td className="bg-[#1E88E5]/[0.045] px-7 py-5 transition-colors group-hover:bg-[#1E88E5]/[0.08]">
                      <Cell value={row.edoma} highlight />
                    </td>

                    <td className="px-7 py-5">
                      <Cell value={row.altA} />
                    </td>

                    <td className="px-7 py-5">
                      <Cell value={row.altB} />
                    </td>

                    <td className="px-7 py-5">
                      <Cell value={row.altC} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-8 space-y-4 md:hidden">
          {alternatives.map((alternative, alternativeIndex) => {
            const accent = accentColors[alternativeIndex];

            return (
              <article
                key={alternative.key}
                className={`overflow-hidden rounded-[1.35rem] border bg-white shadow-[0_15px_35px_-26px_rgba(15,42,61,0.35)] transition-all duration-200 ${
                  alternative.highlight
                    ? accent.border
                    : "border-brand-line/70"
                }`}
              >
                {/* Encabezado */}
                <div
                  className={`relative flex items-center gap-3 px-5 py-4 ${
                    alternative.highlight ? accent.bg : "bg-[#F8FBFD]"
                  }`}
                >
                  {alternative.highlight && (
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${accent.icon} ${accent.text}`}
                    >
                      <span className="h-4 w-4">
                        <Icons.checkCircle />
                      </span>
                    </span>
                  )}

                  <h3
                    className={`font-display text-base font-semibold ${
                      alternative.highlight
                        ? accent.text
                        : "text-brand-ink"
                    }`}
                  >
                    {alternative.label}
                  </h3>

                  {alternative.highlight && (
                    <span className="ml-auto rounded-full bg-white/70 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-[#1E88E5]">
                      Edoma
                    </span>
                  )}
                </div>

                {/* Funcionalidades */}
                <div className="divide-y divide-brand-line/50">
                  {COMPARISON_ROWS.map((row) => {
                    const value =
                      alternative.key === "edoma"
                        ? row.edoma
                        : alternative.key === "altA"
                          ? row.altA
                          : alternative.key === "altB"
                            ? row.altB
                            : row.altC;

                    return (
                      <div
                        key={row.feature}
                        className="flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-[#F8FBFD]"
                      >
                        <span className="min-w-0 text-sm leading-snug text-brand-ink/70">
                          {row.feature}
                        </span>

                        <span className="shrink-0">
                          <Cell
                            value={value}
                            highlight={alternative.highlight}
                          />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-brand-ink/45">
          {COMPARISON_NOTE}
        </p>
      </Container>
    </section>
  );
}