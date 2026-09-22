// components/home/ProductShowcase.tsx
// Representación estilizada e interactiva de un panel de rendimiento.
// Los datos son ejemplos y no corresponden a una captura real de la plataforma.

"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icons } from "@/components/ui/icons";

type StudentStatus = "Al día" | "En seguimiento" | "Requiere apoyo";

type Filter = "Todos" | StudentStatus;

type Student = {
  name: string;
  area: string;
  grade: number;
  status: StudentStatus;
};

const rows: Student[] = [
  {
    name: "Estudiante A · 9°A",
    area: "Matemáticas",
    grade: 4.6,
    status: "Al día",
  },
  {
    name: "Estudiante B · 9°A",
    area: "Ciencias naturales",
    grade: 3.1,
    status: "En seguimiento",
  },
  {
    name: "Estudiante C · 10°B",
    area: "Lengua castellana",
    grade: 4.8,
    status: "Al día",
  },
  {
    name: "Estudiante D · 10°B",
    area: "Sociales",
    grade: 2.9,
    status: "Requiere apoyo",
  },
];

const statusStyles: Record<
  StudentStatus,
  {
    badge: string;
    bar: string;
    avatar: string;
    text: string;
  }
> = {
  "Al día": {
    badge: "bg-[#159A68]/10 text-[#159A68]",
    bar: "bg-[#159A68]",
    avatar: "bg-[#159A68]/10 text-[#159A68]",
    text: "text-[#159A68]",
  },

  "En seguimiento": {
    badge: "bg-[#7956B8]/10 text-[#7956B8]",
    bar: "bg-[#7956B8]",
    avatar: "bg-[#7956B8]/10 text-[#7956B8]",
    text: "text-[#7956B8]",
  },

  "Requiere apoyo": {
    badge: "bg-[#E6A817]/15 text-[#A87400]",
    bar: "bg-[#E6A817]",
    avatar: "bg-[#E6A817]/15 text-[#A87400]",
    text: "text-[#A87400]",
  },
};

const filters: Filter[] = [
  "Todos",
  "Al día",
  "En seguimiento",
  "Requiere apoyo",
];

const highlights = [
  "Notas, asistencia y observador en un solo panel",
  "Alertas automáticas cuando un estudiante requiere apoyo",
  "Visible al instante para docentes, coordinación y padres",
];

export function ProductShowcase() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");

  const filteredRows = useMemo(() => {
    if (activeFilter === "Todos") {
      return rows;
    }

    return rows.filter((row) => row.status === activeFilter);
  }, [activeFilter]);

  const average =
    filteredRows.length > 0
      ? filteredRows.reduce((sum, row) => sum + row.grade, 0) /
        filteredRows.length
      : 0;

  const supportCount = rows.filter(
    (row) => row.status === "Requiere apoyo"
  ).length;

  return (
<section className="relative overflow-hidden bg-[#F7FAFC] pb-10 pt-0">      {/* Decoración morada */}
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#7956B8]/8 blur-3xl" />

      <Container className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* =====================================================
            INFORMACIÓN
        ====================================================== */}
        <div className="min-w-0">
          <SectionTitle
            eyebrow="El producto"
            title="Un panel de rendimiento que se actualiza solo"
            description="Cada nota, cada ausencia y cada observación queda visible al instante para quien la necesita, sin depender de que alguien genere un reporte manualmente."
          />

          <ul className="mt-8 space-y-3.5">
            {highlights.map((item, index) => {
              const accent =
                index === 0
                  ? "bg-[#1E88E5]/10 text-[#1E88E5]"
                  : index === 1
                    ? "bg-[#E6A817]/15 text-[#A87400]"
                    : "bg-[#7956B8]/10 text-[#7956B8]";

              return (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${accent}`}
                  >
                    <span className="h-3 w-3">
                      <Icons.checkCircle />
                    </span>
                  </span>

                  <span className="text-[0.95rem] leading-relaxed text-brand-ink/70">
                    {item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* =====================================================
            PANEL DE RENDIMIENTO
        ====================================================== */}
        <div className="min-w-0 rounded-[1.75rem] border border-[#DCE8F0] bg-white p-4 shadow-[0_35px_70px_-35px_rgba(15,42,61,0.35)] sm:p-6 lg:p-8">
          {/* =================================================
              ENCABEZADO
          ================================================== */}
          <div className="flex flex-col gap-3 border-b border-[#DCE8F0] pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="font-display text-sm font-medium text-brand-ink">
                Panel de rendimiento
              </p>

              <p className="mt-0.5 text-xs text-brand-ink/50">
                Vista de demostración · datos de ejemplo
              </p>
            </div>

            <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-[#159A68]/10 px-3 py-1.5 text-xs font-medium text-[#159A68]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#159A68]" />
              En vivo
            </span>
          </div>

          {/* =================================================
              INDICADORES
          ================================================== */}
          <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
            <div className="rounded-xl border border-[#1E88E5]/10 bg-[#F3F8FC] px-3 py-3">
              <p className="text-[0.68rem] text-brand-ink/50">
                Mostrados
              </p>

              <p className="mt-1 font-display text-lg font-semibold text-[#1E88E5]">
                {filteredRows.length}
              </p>
            </div>

            <div className="rounded-xl border border-[#159A68]/10 bg-[#F1FAF6] px-3 py-3">
              <p className="text-[0.68rem] text-brand-ink/50">
                Promedio
              </p>

              <p className="mt-1 font-display text-lg font-semibold text-[#159A68]">
                {average.toFixed(1)}
              </p>
            </div>

            <div className="rounded-xl border border-[#E6A817]/15 bg-[#FFF9F0] px-3 py-3">
              <p className="text-[0.68rem] text-brand-ink/50">
                Alertas
              </p>

              <p className="mt-1 font-display text-lg font-semibold text-[#A87400]">
                {supportCount}
              </p>
            </div>
          </div>

          {/* =================================================
              FILTROS
          ================================================== */}
          <div className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            {filters.map((filter) => {
              const isActive = filter === activeFilter;

              const activeStyle =
                filter === "Al día"
                  ? "border-[#159A68] bg-[#159A68] text-white"
                  : filter === "En seguimiento"
                    ? "border-[#7956B8] bg-[#7956B8] text-white"
                    : filter === "Requiere apoyo"
                      ? "border-[#E6A817] bg-[#E6A817] text-white"
                      : "border-[#1E88E5] bg-[#1E88E5] text-white";

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-10 rounded-full border px-3 py-2 font-display text-xs font-medium transition-all sm:px-4 ${
                    isActive
                      ? `${activeStyle} shadow-sm`
                      : "border-[#DCE8F0] bg-white text-brand-ink/60 hover:border-[#1E88E5]/30 hover:bg-[#F3F8FC]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* =================================================
              ESTUDIANTES
          ================================================== */}
          <div
            key={activeFilter}
            className="mt-5 space-y-3 animate-[fadeIn_220ms_ease-out]"
          >
            {filteredRows.length > 0 ? (
              filteredRows.map((row) => {
                const initial = row.name
                  .replace("Estudiante ", "")
                  .charAt(0);

                const style = statusStyles[row.status];

                return (
                  <div
                    key={row.name}
                    className="group relative overflow-hidden rounded-2xl border border-[#DCE8F0]/70 bg-[#F8FBFD] px-4 py-3.5 pl-5 transition-all hover:-translate-y-0.5 hover:border-[#1E88E5]/20 hover:bg-white hover:shadow-sm"
                  >
                    {/* Indicador de estado */}
                    <span
                      className={`absolute left-0 top-0 h-full w-1 ${style.bar}`}
                    />

                    {/* =================================================
                        ESCRITORIO
                    ================================================== */}
                    <div className="hidden items-center justify-between gap-4 md:flex">
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-medium ${style.avatar}`}
                        >
                          {initial}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-brand-ink">
                            {row.name}
                          </p>

                          <p className="text-xs text-brand-ink/55">
                            {row.area}
                          </p>
                        </div>
                      </div>

                      <div className="flex shrink-0 items-center gap-3">
                        <span className="font-display text-sm font-medium text-brand-ink/80">
                          {row.grade.toFixed(1)}
                        </span>

                        <span
                          className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${style.badge}`}
                        >
                          {row.status}
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                        MÓVIL
                    ================================================== */}
                    <div className="flex items-center gap-3 md:hidden">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-medium ${style.avatar}`}
                      >
                        {initial}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex min-w-0 items-center justify-between gap-3">
                          <p className="truncate text-sm font-medium text-brand-ink">
                            {row.name}
                          </p>

                          <span
                            className={`shrink-0 font-display text-sm font-semibold ${style.text}`}
                          >
                            {row.grade.toFixed(1)}
                          </span>
                        </div>

                        <div className="mt-1 flex min-w-0 items-center justify-between gap-3">
                          <p className="truncate text-xs text-brand-ink/55">
                            {row.area}
                          </p>

                          <span
                            className={`shrink-0 rounded-full px-2 py-1 text-[0.68rem] font-medium ${style.badge}`}
                          >
                            {row.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="rounded-2xl bg-[#F3F8FC] px-5 py-8 text-center">
                <p className="text-sm text-brand-ink/55">
                  No hay datos para este filtro.
                </p>
              </div>
            )}
          </div>

          {/* =================================================
              SINCRONIZACIÓN
          ================================================== */}
          <div className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-brand-ink/45">
            <span className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1E88E5]">
              <Icons.offline />
            </span>

            <span>
              Última sincronización: hace 2 minutos (registrado sin conexión)
            </span>
          </div>
        </div>
      </Container>

      {/* Animación local */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}