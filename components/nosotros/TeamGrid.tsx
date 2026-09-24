// components/nosotros/TeamGrid.tsx

import { Container } from "@/components/ui/Container";
import { Card, IconFrame } from "@/components/ui/Card";
import { Icons } from "@/components/ui/icons";
import { TONE_STYLES } from "@/components/ui/toneStyles";
import { ABOUT } from "@/lib/constants";

export function TeamGrid() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* =====================================================
              Mision
          ====================================================== */}
          <Card
            className={`group relative h-full overflow-hidden pl-8 transition-all duration-300 ease-out ${TONE_STYLES.blue.card}`}
          >
            <div
              className={`absolute bottom-0 left-0 top-0 w-1 ${TONE_STYLES.blue.line}`}
            />

            <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
              <IconFrame
                className={`transition-all duration-300 ${TONE_STYLES.blue.icon}`}
              >
                <Icons.checkCircle />
              </IconFrame>
            </div>

            <h3
              className={`mt-5 font-display text-lg font-medium leading-snug text-brand-ink transition-colors duration-300 ${TONE_STYLES.blue.title}`}
            >
              Nuestra misión
            </h3>

            <p className="mt-2.5 text-[0.95rem] leading-relaxed text-brand-ink/65">
              {ABOUT.mission.body}
            </p>
          </Card>

          {/* =====================================================
              Proposito
          ====================================================== */}
          <Card
            className={`group relative h-full overflow-hidden pl-8 transition-all duration-300 ease-out ${TONE_STYLES.green.card}`}
          >
            <div
              className={`absolute bottom-0 left-0 top-0 w-1 ${TONE_STYLES.green.line}`}
            />

            <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
              <IconFrame
                className={`transition-all duration-300 ${TONE_STYLES.green.icon}`}
              >
                <Icons.arrowRight />
              </IconFrame>
            </div>

            <h3
              className={`mt-5 font-display text-lg font-medium leading-snug text-brand-ink transition-colors duration-300 ${TONE_STYLES.green.title}`}
            >
              Nuestro propósito
            </h3>

            <p className="mt-2.5 text-[0.95rem] leading-relaxed text-brand-ink/65">
              {ABOUT.purpose.body}
            </p>
          </Card>

          {/* =====================================================
              Proteccion de datos
          ====================================================== */}
          <Card
            className={`group relative h-full overflow-hidden pl-8 transition-all duration-300 ease-out ${TONE_STYLES.purple.card}`}
          >
            <div
              className={`absolute bottom-0 left-0 top-0 w-1 ${TONE_STYLES.purple.line}`}
            />

            <div className="transition-transform duration-300 group-hover:-translate-y-0.5">
              <IconFrame
                className={`transition-all duration-300 ${TONE_STYLES.purple.icon}`}
              >
                <Icons.security />
              </IconFrame>
            </div>

            <h3
              className={`mt-5 font-display text-lg font-medium leading-snug text-brand-ink transition-colors duration-300 ${TONE_STYLES.purple.title}`}
            >
              Protección de datos
            </h3>

            <p className="mt-2.5 text-[0.95rem] leading-relaxed text-brand-ink/65">
              En Edoma protegemos la información académica de estudiantes,
              docentes y padres de familia conforme a la Ley Estatutaria 1581
              de 2012 de protección de datos personales en Colombia.
            </p>
          </Card>

        </div>
      </Container>
    </section>
  );
}