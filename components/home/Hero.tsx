// components/home/Hero.tsx
import { Container } from "@/components/ui/Container";
import { Icons } from "@/components/ui/icons";
import { getWhatsappLink } from "@/lib/constants";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-mist pb-1 pt-8 sm:pt-12">
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="mb-3 inline-flex items-center rounded-full bg-brand-support/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
            Inicio
          </span>

          <p className="mb-5 font-display text-sm font-medium text-brand-support">
            Seguimiento académico en tiempo real
          </p>

          <h1 className="font-display text-[2.6rem] font-medium leading-[1.08] tracking-tight text-brand-ink sm:text-6xl">
            Toda tu institución ordenada en un solo lugar
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-ink/70">
            Notas, asistencia y observador del estudiante actualizados al
            instante. Docentes, coordinación y padres de familia, siempre con
            la misma información al día — incluso sin conexión a internet.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-brand-coral px-7 py-3.5 font-display text-[0.95rem] font-medium text-white transition-colors hover:bg-[#F0642E]"
            >
              Conocer más

              <span className="h-4 w-4">
                <Icons.arrowRight />
              </span>
            </Link>

            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-7 py-3.5 font-display text-[0.95rem] font-medium text-brand-ink transition-colors hover:border-brand-support hover:text-brand-support"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              { icon: "shield", label: "Ley 1581 de 2012" },
              { icon: "offline", label: "Modo offline" },
              { icon: "mobile", label: "Diseño mobile first" },
              { icon: "building", label: "Subdominio por institución" },
            ].map((item) => {
              const Icon = Icons[item.icon as keyof typeof Icons];

              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-2"
                >
                  <span className="h-4 w-4 text-brand-support">
                    <Icon />
                  </span>

                  <span className="text-sm text-brand-ink/70">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          {/* Mockup tipo laptop moderna */}
          <div className="animate-idle">
            {/* Pantalla */}
            <div className="rounded-t-2xl rounded-b-md border border-b-0 border-brand-ink/15 bg-gradient-to-b from-[#1c2b38] to-[#0f1c26] p-2 shadow-[0_45px_80px_-35px_rgba(15,42,61,0.45)] sm:p-2.5">
              {/* Cámara */}
              <div className="flex items-center justify-center pb-2">
                <span className="h-1 w-1 rounded-full bg-white/20" />
              </div>

              {/* Contenido de la pantalla */}
              <div className="overflow-hidden rounded-lg bg-white p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-capsule bg-brand-primary/15 text-brand-support">
                      <span className="h-5 w-5">
                        <Icons.checkCircle />
                      </span>
                    </div>

                    <div>
                      <p className="font-display text-sm font-medium text-brand-ink">
                        Panel de hoy
                      </p>

                      <p className="text-xs text-brand-ink/55">
                        Sede principal
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    En vivo
                  </span>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between rounded-2xl bg-brand-mist px-4 py-3">
                    <span className="text-sm text-brand-ink/70">
                      Asistencia hoy
                    </span>

                    <span className="font-display text-sm font-medium text-brand-support">
                      98%
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-brand-mist px-4 py-3">
                    <span className="text-sm text-brand-ink/70">
                      Boletines generados
                    </span>

                    <span className="font-display text-sm font-medium text-brand-support">
                      Al día
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-brand-primary/10 px-4 py-3">
                    <span className="text-sm text-brand-ink/70">
                      Estudiantes en riesgo
                    </span>

                    <span className="font-display text-sm font-medium text-brand-coral">
                      3 detectados
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Base de la laptop (teclado) */}
            <div className="overflow-hidden rounded-b-xl">
              <div className="h-2 bg-gradient-to-b from-[#2a3c4a] to-[#17242e] shadow-[0_10px_20px_-12px_rgba(15,42,61,0.4)]" />

              <div className="flex justify-center bg-gradient-to-b from-[#121e27] to-[#0a141c] py-0.5">
                <span className="h-[3px] w-16 rounded-full bg-black/30" />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-capsule bg-brand-primary/20 blur-2xl" />

          <div className="absolute -right-4 -top-6 h-20 w-20 rounded-capsule bg-brand-coral/15 blur-2xl" />
        </div>
      </Container>
    </section>
  );
}