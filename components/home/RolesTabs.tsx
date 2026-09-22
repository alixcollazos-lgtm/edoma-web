// components/home/RolesTabs.tsx
"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icons, type IconName } from "@/components/ui/icons";
import { ROLES } from "@/lib/constants";

const roleColors = [
  {
    active: "bg-[#1E88E5] border-[#1E88E5]",
    icon: "bg-[#1E88E5]/10 text-[#1E88E5]",
    soft: "bg-[#F3F8FC]",
    ring: "ring-[#1E88E5]/10",
  },
  {
    active: "bg-[#159A68] border-[#159A68]",
    icon: "bg-[#159A68]/10 text-[#159A68]",
    soft: "bg-[#F1FAF6]",
    ring: "ring-[#159A68]/10",
  },
  {
    active: "bg-[#7956B8] border-[#7956B8]",
    icon: "bg-[#7956B8]/10 text-[#7956B8]",
    soft: "bg-[#F7F3FC]",
    ring: "ring-[#7956B8]/10",
  },
];

export function RolesTabs() {
  const [activeId, setActiveId] = useState(ROLES[0].id);

  const activeRole =
    ROLES.find((role) => role.id === activeId) ?? ROLES[0];

  const activeIndex = Math.max(
    0,
    ROLES.findIndex((role) => role.id === activeId)
  );

  const activeColor =
    roleColors[activeIndex % roleColors.length];

  const ActiveIcon =
    Icons[activeRole.icon as IconName];

  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-8">
      {/* Decoraciones suaves */}
      <div className="pointer-events-none absolute -left-28 top-20 h-64 w-64 rounded-full bg-[#1E88E5]/6 blur-3xl" />

      <div className="pointer-events-none absolute -right-28 bottom-10 h-64 w-64 rounded-full bg-[#7956B8]/6 blur-3xl" />

      <Container className="relative">
        <div className="max-w-3xl text-left">
  <span className="mb-3 inline-flex items-center rounded-full bg-brand-support/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
    Pensado para cada rol
  </span>

  <h2 className="font-display text-3xl font-medium leading-[1.15] text-brand-ink sm:text-4xl">
    Una misma plataforma, útil para todos los que hacen parte del colegio
  </h2>
</div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.55fr_1fr]">

          {/* =====================================================
              SELECTOR DE ROLES
          ====================================================== */}
          <div className="grid grid-cols-3 gap-2.5 lg:flex lg:flex-col">
            {ROLES.map((role, index) => {
              const RoleIcon =
                Icons[role.icon as IconName];

              const isActive =
                role.id === activeId;

              const color =
                roleColors[index % roleColors.length];

              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() =>
                    setActiveId(role.id)
                  }
                  className={`group flex min-w-0 flex-col items-center justify-center gap-2 rounded-2xl border px-2 py-3 text-center transition-all duration-200 sm:flex-row sm:gap-3 sm:px-4 sm:py-3.5 sm:text-left lg:justify-start lg:px-5 lg:py-4 ${
                    isActive
                      ? `${color.active} text-white shadow-[0_12px_24px_-14px_rgba(15,42,61,0.45)]`
                      : "border-brand-line bg-white text-brand-ink/70 hover:-translate-y-0.5 hover:border-brand-line hover:bg-brand-mist hover:shadow-sm"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors sm:h-9 sm:w-9 ${
                      isActive
                        ? "bg-white/15 text-white"
                        : `${color.icon} group-hover:bg-white`
                    }`}
                  >
                    <span className="h-4 w-4 sm:h-5 sm:w-5">
                      <RoleIcon />
                    </span>
                  </span>

                  <span className="min-w-0 font-display text-[0.72rem] font-medium leading-tight sm:text-[0.9rem] lg:text-[0.95rem]">
                    {role.label}
                  </span>

                  {isActive && (
                    <span className="ml-auto hidden h-2 w-2 shrink-0 rounded-full bg-white lg:block" />
                  )}
                </button>
              );
            })}
          </div>

          {/* =====================================================
              INFORMACIÓN DEL ROL
          ====================================================== */}
          <div
            key={activeRole.id}
            className={`relative min-w-0 overflow-hidden rounded-[1.75rem] border border-brand-line/70 ${activeColor.soft} p-6 shadow-[0_30px_60px_-35px_rgba(15,42,61,0.18)] sm:p-8 lg:p-10 animate-[roleFade_220ms_ease-out]`}
          >
            {/* Línea decorativa */}
            <span
              className={`absolute left-0 top-0 h-full w-1 ${
                activeIndex === 0
                  ? "bg-[#1E88E5]"
                  : activeIndex === 1
                    ? "bg-[#159A68]"
                    : "bg-[#7956B8]"
              }`}
            />

            {/* ICONO PRINCIPAL */}
            <span
              className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${activeColor.icon} ring-1 ring-inset ${activeColor.ring}`}
            >
              <span className="h-6 w-6">
                <ActiveIcon />
              </span>
            </span>

            <h3 className="relative mt-5 font-display text-xl font-medium leading-tight text-brand-ink sm:mt-6 sm:text-2xl">
              {activeRole.headline}
            </h3>

            <ul className="relative mt-5 space-y-4 sm:mt-6">
              {activeRole.points.map(
                (point, index) => (
                  <li
                    key={point}
                    className="flex items-start gap-3"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        index % 2 === 0
                          ? "bg-[#159A68]/10 text-[#159A68]"
                          : "bg-[#1E88E5]/10 text-[#1E88E5]"
                      }`}
                    >
                      <span className="h-3 w-3">
                        <Icons.checkCircle />
                      </span>
                    </span>

                    <span className="min-w-0 text-[0.9rem] leading-relaxed text-brand-ink/70 sm:text-[0.95rem]">
                      {point}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes roleFade {
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