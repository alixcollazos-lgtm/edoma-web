// components/nosotros/TeamGrid.tsx

import { Container } from "@/components/ui/Container";
import { Icons } from "@/components/ui/icons";
import { ABOUT } from "@/lib/constants";

export function TeamGrid() {
  return (
    <section className="bg-white pb-10 pt-0 sm:pb-12">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* =====================================================
              MISIÓN — AZUL
          ====================================================== */}
          <div className="group relative overflow-hidden rounded-[1.5rem] border border-[#1E88E5]/15 bg-[#F3F8FC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1E88E5]/25 hover:shadow-[0_14px_35px_-20px_rgba(30,136,229,0.35)]">

            <div className="absolute left-0 top-0 h-1 w-full bg-[#1E88E5]" />

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#1E88E5] shadow-sm">
              <Icons.checkCircle />
            </div>

            <h3 className="mt-5 font-display text-xl font-medium text-brand-ink">
              {ABOUT.mission.title}
            </h3>

            <p className="mt-2 text-[0.95rem] leading-7 text-brand-ink/65">
              {ABOUT.mission.body}
            </p>
          </div>

          {/* =====================================================
              PROPÓSITO — MORADO
          ====================================================== */}
          <div className="group relative overflow-hidden rounded-[1.5rem] border border-[#7956B8]/15 bg-[#F7F3FC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7956B8]/25 hover:shadow-[0_14px_35px_-20px_rgba(121,86,184,0.35)]">

            <div className="absolute left-0 top-0 h-1 w-full bg-[#7956B8]" />

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#7956B8] shadow-sm">
              <Icons.arrowRight />
            </div>

            <h3 className="mt-5 font-display text-xl font-medium text-brand-ink">
              {ABOUT.purpose.title}
            </h3>

            <p className="mt-2 text-[0.95rem] leading-7 text-brand-ink/65">
              {ABOUT.purpose.body}
            </p>
          </div>

          {/* =====================================================
              PROTECCIÓN DE DATOS — VERDE
          ====================================================== */}
          <div className="group relative overflow-hidden rounded-[1.5rem] border border-[#159A68]/15 bg-[#F1FAF6] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#159A68]/25 hover:shadow-[0_14px_35px_-20px_rgba(21,154,104,0.35)]">

            <div className="absolute left-0 top-0 h-1 w-full bg-[#159A68]" />

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#159A68] shadow-sm">
              <Icons.security />
            </div>

            <h3 className="mt-5 font-display text-xl font-medium text-brand-ink">
              Protección de datos
            </h3>

            <p className="mt-2 text-[0.95rem] leading-7 text-brand-ink/65">
              {ABOUT.dataProtection.body}
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}