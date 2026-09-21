// components/nosotros/TeamGrid.tsx

import { Container } from "@/components/ui/Container";
import { Icons } from "@/components/ui/icons";
import { ABOUT } from "@/lib/constants";

export function TeamGrid() {
  return (
    <section className="bg-white">
      <Container>

        <div className="py-10 lg:py-12">

          <div className="rounded-[22px] border border-brand-support/15 bg-[#f1f8fd] px-6 py-7 sm:px-8">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">

              {/* ICONO */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-support shadow-sm">
                <Icons.security />
              </div>


              {/* CONTENIDO */}
              <div>

                <h2 className="font-display text-lg font-semibold text-brand-ink">
                  Protección de datos
                </h2>

                <p className="mt-2 max-w-4xl text-sm leading-relaxed text-brand-ink/60">
                  {ABOUT.dataProtection.body}
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}