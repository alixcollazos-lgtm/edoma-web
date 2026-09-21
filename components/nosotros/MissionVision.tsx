import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card, IconFrame } from "@/components/ui/Card";
import { Icons } from "@/components/ui/icons";
import { ABOUT } from "@/lib/constants";

export function MissionVision() {
  return (
    <>
      {/* =====================================================
          HISTORIA
      ====================================================== */}
      <section className="relative overflow-hidden bg-brand-mist pt-6 pb-8 sm:pt-8 sm:pb-9">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

            {/* =================================================
                TEXTO
            ================================================== */}
            <div className="max-w-2xl">

              <span className="inline-flex items-center rounded-full bg-brand-support/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
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
                <div className="relative overflow-hidden rounded-2xl border border-brand-primary/10 bg-white px-4 py-4 shadow-[0_6px_20px_rgba(15,42,61,0.06)] transition-all duration-300 hover:-translate-y-1">

                  <div className="absolute left-0 top-0 h-1 w-full bg-brand-primary" />

                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-2xl font-semibold text-brand-primary">
                      01
                    </span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                      <Icons.checkCircle />
                    </span>
                  </div>

                  <p className="mt-3 font-display text-sm font-medium text-brand-ink sm:text-base">
                    Escuchamos
                  </p>

                  <div className="mt-2 h-1 w-8 rounded-full bg-brand-primary/20" />
                </div>

                {/* 02 */}
                <div className="relative overflow-hidden rounded-2xl border border-brand-support/10 bg-white px-4 py-4 shadow-[0_6px_20px_rgba(15,42,61,0.06)] transition-all duration-300 hover:-translate-y-1">

                  <div className="absolute left-0 top-0 h-1 w-full bg-brand-support" />

                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-2xl font-semibold text-brand-support">
                      02
                    </span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-support/10 text-brand-support">
                      <Icons.arrowRight />
                    </span>
                  </div>

                  <p className="mt-3 font-display text-sm font-medium text-brand-ink sm:text-base">
                    Conectamos
                  </p>

                  <div className="mt-2 h-1 w-8 rounded-full bg-brand-support/20" />
                </div>

                {/* 03 */}
                <div className="relative overflow-hidden rounded-2xl border border-brand-ink/10 bg-white px-4 py-4 shadow-[0_6px_20px_rgba(15,42,61,0.06)] transition-all duration-300 hover:-translate-y-1">

                  <div className="absolute left-0 top-0 h-1 w-full bg-brand-ink" />

                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-2xl font-semibold text-brand-ink">
                      03
                    </span>

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-ink/10 text-brand-ink">
                      <Icons.arrowRight />
                    </span>
                  </div>

                  <p className="mt-3 font-display text-sm font-medium text-brand-ink sm:text-base">
                    Transformamos
                  </p>

                  <div className="mt-2 h-1 w-8 rounded-full bg-brand-ink/20" />
                </div>

              </div>
            </div>
{/* =================================================
    ILUSTRACIÓN — TRABAJO EN EQUIPO
================================================== */}
<div className="flex items-center justify-center">

  <div className="relative flex w-full max-w-[560px] justify-center">

    <Image
  src="/images/trabajo-equipo.png"
  alt="Trabajo en equipo"
  width={1728}
  height={910}
  className="relative z-10 mt-8 -mb-8 w-[120%] max-w-none translate-x-[8%] object-contain drop-shadow-sm"
/>
  </div>

</div>

          </div>
        </Container>
      </section>

      {/* =====================================================
          MISIÓN Y PROPÓSITO
      ====================================================== */}
      <section className="py-9 sm:py-12">
        <Container>

          <div className="max-w-2xl">

            <span className="inline-flex items-center rounded-full bg-brand-primary/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
              Lo que nos mueve
            </span>

            <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-brand-ink sm:text-4xl">
              Nuestra misión y propósito
            </h2>

          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">

            <Card>

              <IconFrame>
                <Icons.checkCircle />
              </IconFrame>

              <h3 className="mt-4 font-display text-xl font-medium text-brand-ink">
                {ABOUT.mission.title}
              </h3>

              <p className="mt-2 text-[0.95rem] leading-7 text-brand-ink/65">
                {ABOUT.mission.body}
              </p>

            </Card>

            <Card>

              <IconFrame tone="coral">
                <Icons.arrowRight />
              </IconFrame>

              <h3 className="mt-4 font-display text-xl font-medium text-brand-ink">
                {ABOUT.purpose.title}
              </h3>

              <p className="mt-2 text-[0.95rem] leading-7 text-brand-ink/65">
                {ABOUT.purpose.body}
              </p>

            </Card>

          </div>

        </Container>
      </section>

      
    </>
  );
}