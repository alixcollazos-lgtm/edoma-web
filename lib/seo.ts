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