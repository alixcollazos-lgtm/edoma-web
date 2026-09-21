// components/home/ProductShowcase.tsx
// Representación estilizada del panel de rendimiento/notas, con datos
// neutrales de ejemplo. No corresponde a una captura real de la plataforma.
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icons } from "@/components/ui/icons";

const rows = [
  { name: "Estudiante A · 9°A", area: "Matemáticas", grade: "4.6", status: "Al día" },
  { name: "Estudiante B · 9°A", area: "Ciencias naturales", grade: "3.1", status: "En seguimiento" },
  { name: "Estudiante C · 10°B", area: "Lengua castellana", grade: "4.8", status: "Al día" },
  { name: "Estudiante D · 10°B", area: "Sociales", grade: "2.9", status: "Requiere apoyo" },
];

const statusStyles: Record<string, { badge: string; bar: string }> = {
  "Al día": { badge: "bg-brand-success/10 text-brand-success", bar: "bg-brand-success" },
  "En seguimiento": { badge: "bg-brand-primary/10 text-brand-support", bar: "bg-brand-support" },
  "Requiere apoyo": { badge: "bg-brand-coral/10 text-brand-coral", bar: "bg-brand-coral" },
};

const highlights = [
  "Notas, asistencia y observador en un solo panel",
  "Alertas automáticas cuando un estudiante requiere apoyo",
  "Visible al instante para docentes, coordinación y padres",
];

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-brand-mistdark py-24">
      <div className="absolute left-0 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-3xl" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            eyebrow="El producto"
            title="Un panel de rendimiento que se actualiza solo"
            description="Cada nota, cada ausencia y cada observación queda visible al instante para quien la necesita, sin depender de que alguien genere un reporte manualmente."
          />
          <ul className="mt-8 space-y-3.5">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 text-brand-support">
                  <span className="h-3 w-3">
                    <Icons.checkCircle />
                  </span>
                </span>
                <span className="text-[0.95rem] leading-relaxed text-brand-ink/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-[1.75rem] border border-brand-line/70 bg-white p-6 shadow-[0_35px_70px_-35px_rgba(15,42,61,0.35)] sm:p-8">
          <div className="flex items-center justify-between border-b border-brand-line pb-4">
            <div>
              <p className="font-display text-sm font-medium text-brand-ink">
                Panel de rendimiento
              </p>
              <p className="text-xs text-brand-ink/50">Datos de ejemplo, período actual</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-brand-success/10 px-3 py-1.5 text-xs font-medium text-brand-success">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-success" />
              En vivo
            </span>
          </div>

          <div className="mt-5 space-y-3">
            {rows.map((row) => {
              const initial = row.name.replace("Estudiante ", "").charAt(0);
              return (
                <div
                  key={row.name}
                  className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl bg-brand-mist px-4 py-3 pl-5 transition-colors hover:bg-brand-primary/5"
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-1 ${statusStyles[row.status].bar}`}
                  />
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary/15 font-display text-sm font-medium text-brand-support">
                      {initial}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-brand-ink">{row.name}</p>
                      <p className="text-xs text-brand-ink/55">{row.area}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-medium text-brand-ink/80">
                      {row.grade}
                    </span>
                    <span
                      className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[row.status].badge}`}
                    >
                      {row.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs text-brand-ink/45">
            <span className="h-3.5 w-3.5">
              <Icons.offline />
            </span>
            Última sincronización: hace 2 minutos (registrado sin conexión)
          </div>
        </div>
      </Container>
    </section>
  );
}