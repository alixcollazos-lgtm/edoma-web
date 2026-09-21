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
    <section className="relative overflow-hidden pb-24 pt-10">
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-support/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-10 right-0 h-64 w-64 rounded-full bg-brand-support/5 blur-3xl" />

      <Container className="max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Información de contacto */}
          <div>
            <ContactHero />
            <ContactFeatures />
          </div>

          {/* Simulación de WhatsApp */}
          <PhoneMockup />
        </div>
      </Container>
    </section>
  );
}