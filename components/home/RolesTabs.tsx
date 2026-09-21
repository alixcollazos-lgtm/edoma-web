// components/home/RolesTabs.tsx
"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icons, type IconName } from "@/components/ui/icons";
import { ROLES } from "@/lib/constants";

export function RolesTabs() {
  const [activeId, setActiveId] = useState(ROLES[0].id);
  const activeRole = ROLES.find((role) => role.id === activeId) ?? ROLES[0];
  const ActiveIcon = Icons[activeRole.icon as IconName];

  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Pensado para cada rol"
          title="Una misma plataforma, útil para todos los que hacen parte del colegio"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.55fr_1fr]">
          <div className="flex gap-2.5 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
            {ROLES.map((role) => {
              const RoleIcon = Icons[role.icon as IconName];
              const isActive = role.id === activeId;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setActiveId(role.id)}
                  className={`flex shrink-0 items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-all lg:shrink ${
                    isActive
                      ? "border-brand-support bg-brand-support text-white shadow-[0_8px_18px_-10px_rgba(30,136,229,0.45)]"
                      : "border-brand-line bg-white text-brand-ink/70 hover:border-brand-support/30 hover:bg-brand-mist"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                      isActive ? "bg-white/15 text-white" : "bg-brand-mist text-brand-ink/55"
                    }`}
                  >
                    <span className="h-5 w-5">
                      <RoleIcon />
                    </span>
                  </span>
                  <span className="font-display text-[0.95rem] font-medium">{role.label}</span>
                  {isActive && (
                    <span className="ml-auto hidden h-2 w-2 shrink-0 rounded-full bg-white lg:block" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-line/70 bg-white p-8 shadow-[0_30px_60px_-35px_rgba(15,42,61,0.18)] sm:p-10">
            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-mist text-brand-ink/70 ring-1 ring-inset ring-black/[0.03]">
              <span className="h-6 w-6">
                <ActiveIcon />
              </span>
            </span>
            <h3 className="relative mt-6 font-display text-2xl font-medium text-brand-ink">
              {activeRole.headline}
            </h3>
            <ul className="relative mt-6 space-y-4">
              {activeRole.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-success/10 text-brand-success">
                    <span className="h-3 w-3">
                      <Icons.checkCircle />
                    </span>
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-brand-ink/70">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}