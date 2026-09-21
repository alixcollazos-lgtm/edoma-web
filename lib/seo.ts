// lib/seo.ts
// Helper para generar metadata consistente (title, description, Open Graph)
// en cada página. El contenido visible/SEO está en español.

import type { Metadata } from "next";
import { SITE } from "./constants";

type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({ title, description, path }: PageSeo): Metadata {
  const url = `${SITE.url}${path}`;
  // El layout raíz define title.template ("%s | Edoma") para toda ruta que
  // no sea la raíz, así que el campo `title` de cada página solo lleva su
  // propio texto (el template agrega el sufijo automáticamente).
  // Open Graph / Twitter no usan ese template, así que ahí sí se construye
  // el título completo a mano.
  const socialTitle = path === "/" ? title : `${title} | ${SITE.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
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
