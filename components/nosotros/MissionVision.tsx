import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icons } from "@/components/ui/icons";
import { ABOUT } from "@/lib/constants";

export function MissionVision() {
  return (
    <>
      {/* =====================================================
          HISTORIA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#F3F8FC] pt-6 pb-8 sm:pt-8 sm:pb-9">

        {/* Decoraciones suaves */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#1E88E5]/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#7956B8]/5 blur-3xl" />

        <Container>
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

            {/* =================================================
                TEXTO
            ================================================== */}
            <div className="max-w-2xl">

              <span className="mb-3 inline-flex items-center rounded-full bg-brand-support/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
                Nosotros
              </span>

              <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-brand-ink sm:text-5xl">
                {ABOUT.history.title}
              </h1>

              <p className="mt-3 max-w-xl text-base leading-7 text-brand-ink/70 sm:text-lg">
                {ABOUT.history.body}
              </p>

              {/* =================================================
                  PASOS
              ================================================== */}
              <div className="mt-7 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">

                {/* 01 */}
                <div className="group relative overflow-hidden rounded-2xl border border-[#1E88E5]/15 bg-white px-4 py-4 shadow-[0_6px_20px_rgba(15,42,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(30,136,229,0.10)]">

                  <div className="absolute left-0 top-0 h-1 w-full bg-[#1E88E5]" />

                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-2xl font-semibold text-[#1E88E5]">
                      01
                    </span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1E88E5]/10 text-[#1E88E5]">
                      <Icons.checkCircle />
                    </span>
                  </div>

                  <p className="mt-3 font-display text-sm font-medium text-brand-ink sm:text-base">
                    Escuchamos
                  </p>

                  <div className="mt-2 h-1 w-8 rounded-full bg-[#1E88E5]/20" />
                </div>

                {/* 02 */}
                <div className="group relative overflow-hidden rounded-2xl border border-[#159A68]/15 bg-white px-4 py-4 shadow-[0_6px_20px_rgba(15,42,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(21,154,104,0.10)]">

                  <div className="absolute left-0 top-0 h-1 w-full bg-[#159A68]" />

                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-2xl font-semibold text-[#159A68]">
                      02
                    </span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#159A68]/10 text-[#159A68]">
                      <Icons.arrowRight />
                    </span>
                  </div>

                  <p className="mt-3 font-display text-sm font-medium text-brand-ink sm:text-base">
                    Conectamos
                  </p>

                  <div className="mt-2 h-1 w-8 rounded-full bg-[#159A68]/20" />
                </div>

                {/* 03 */}
                <div className="group relative overflow-hidden rounded-2xl border border-[#7956B8]/15 bg-white px-4 py-4 shadow-[0_6px_20px_rgba(15,42,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(121,86,184,0.10)]">

                  <div className="absolute left-0 top-0 h-1 w-full bg-[#7956B8]" />

                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-2xl font-semibold text-[#7956B8]">
                      03
                    </span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7956B8]/10 text-[#7956B8]">
                      <Icons.arrowRight />
                    </span>
                  </div>

                  <p className="mt-3 font-display text-sm font-medium text-brand-ink sm:text-base">
                    Transformamos
                  </p>

                  <div className="mt-2 h-1 w-8 rounded-full bg-[#7956B8]/20" />
                </div>

              </div>
            </div>

            {/* =================================================
                ILUSTRACIÓN — TRABAJO EN EQUIPO
            ================================================== */}
            <div className="flex items-center justify-center">
              <div className="relative flex w-full max-w-[560px] items-center justify-center px-4 sm:px-0">
                <Image
                  src="/images/trabajo-equipo.png"
                  alt="Trabajo en equipo"
                  width={1728}
                  height={910}
                  className="relative z-10 mt-6 w-full max-w-[500px] object-contain drop-shadow-sm sm:mt-8 sm:max-w-[540px]"
                />
              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}