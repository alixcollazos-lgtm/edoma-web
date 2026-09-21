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
          highlight ? "text-[#1E88E5]" : "text-[#16B364]"
        }`}
      >
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-full ${
            highlight ? "bg-[#1E88E5]/10" : "bg-[#16B364]/10"
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
      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#1E88E5]">
        <span className="h-2 w-2 rounded-full bg-[#1E88E5]" />
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

export function ComparisonTable() {
  return (
    <section className="bg-brand-mistdark py-24">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Comparativa"
          title="Edoma frente a otras alternativas del mercado"
          description="Comparación por funcionalidad, sin nombrar proveedores específicos."
        />

        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-brand-line/70 bg-white shadow-[0_20px_50px_-30px_rgba(15,42,61,0.25)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-brand-line/70 bg-[#F5F9FC]">
                  <th className="px-7 py-5 font-display text-xs font-semibold uppercase tracking-wide text-brand-ink/55">
                    Funcionalidad
                  </th>

                  <th className="bg-[#1E88E5]/10 px-7 py-5 font-display text-sm font-semibold text-[#1E88E5]">
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
                    className={`group transition-colors hover:bg-[#F5F9FC] ${
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

                    <td className="bg-[#1E88E5]/[0.045] px-7 py-5 group-hover:bg-[#1E88E5]/[0.08]">
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

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-brand-ink/45">
          {COMPARISON_NOTE}
        </p>
      </Container>
    </section>
  );
}