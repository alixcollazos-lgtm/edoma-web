// app/contacto/page.tsx

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactFeatures } from "@/components/contacto/ContactFeatures";
import { ContactHero } from "@/components/contacto/ContactHero";
import { PhoneMockup } from "@/components/contacto/PhoneMockup";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Escríbenos por WhatsApp para conocer cómo Edoma puede ayudar a tu institución educativa con el seguimiento académico en tiempo real.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden pb-16 pt-10">
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-support/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-10 right-0 h-64 w-64 rounded-full bg-brand-support/5 blur-3xl" />

      <Container className="w-full max-w-none px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid min-h-[calc(100vh-150px)] items-center gap-10 lg:grid-cols-[1fr_0.85fr] xl:gap-16">
          
          {/* Información de contacto */}
          <div className="min-w-0 lg:pl-4">
            <ContactHero />

            <div className="mt-10 max-w-3xl">
              <ContactFeatures />
            </div>
          </div>

          {/* Simulación de WhatsApp */}
          <div className="flex items-center justify-center lg:justify-center">
            <PhoneMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}