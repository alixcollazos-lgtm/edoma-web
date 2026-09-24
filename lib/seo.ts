// lib/seo.ts
// Genera la metadata común de las páginas.

import type { Metadata } from "next";
import { SITE } from "./constants";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({
  title,
  description,
  path,
}: PageSeo): Metadata {
  const url = `${SITE.url}${path}`;

  // El layout agrega "| Edoma" al título de las páginas mediante
  // title.template. Open Graph y Twitter necesitan el título completo.
  const socialTitle = path === "/" ? title : `${title} | ${SITE.name}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE.name,
      locale: "es_CO",
      type: "website",
      images: [
        {
          url: `${SITE.url}/images/og-cover.png`,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${title}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

// ---------------------------------------------------------------------------
// Datos estructurados (JSON-LD)
// ---------------------------------------------------------------------------

type FaqItem = {
  question: string;
  answer: string;
};

// Construye el JSON-LD tipo FAQPage a partir de las preguntas frecuentes.
// Se alimenta de FAQS (lib/constants.ts), la misma fuente que usa
// FaqAccordion, así el marcado siempre coincide con lo que ve el usuario.
export function buildFaqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}