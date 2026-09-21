# Edoma — Sitio Web Institucional

Sitio de presentación (marketing) de **Edoma**, un sistema de seguimiento
académico en tiempo real. Este sitio **no** es la aplicación: su objetivo es
dar a conocer Edoma, sus funcionalidades y sus ventajas frente a otras
soluciones del mercado, y generar contacto con instituciones interesadas.

## Stack técnico

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** para estilos, con la paleta de marca fija de Edoma
- Arquitectura basada en componentes reutilizables (sin lógica duplicada)
- SEO completo: metadata por página, `sitemap.xml` y `robots.txt`
  autogenerados, datos estructurados (JSON-LD), Open Graph
- Fuentes auto-alojadas (`next/font/local`, Inter + Space Grotesk) para no
  depender de la red en tiempo de build

## Requisitos

- Node.js 18.18 o superior
- npm

## Instalación y desarrollo local

```bash
npm install
npm run dev
```

El sitio queda disponible en `http://localhost:3000`.

## Build de producción

```bash
npm run build
npm run start
```

## Estructura del proyecto

```
app/                    # Rutas y páginas (App Router)
  layout.tsx            # Layout raíz: fuentes, Header, Footer, WhatsApp, JSON-LD
  page.tsx              # Página de Inicio
  nosotros/page.tsx
  contacto/page.tsx
  soporte/page.tsx
  sitemap.ts            # Generación automática de sitemap.xml
  robots.ts             # Generación automática de robots.txt
  fonts/                # Archivos woff2 auto-alojados

components/
  layout/                # Header, Footer, WhatsappButton (transversales)
  home/                  # Componentes exclusivos de Inicio
  nosotros/              # Componentes exclusivos de Nosotros
  soporte/               # Componentes exclusivos de Soporte
  ui/                    # Piezas atómicas reutilizables (Button, Card, Container, icons.tsx, ...)

lib/
  constants.ts           # Fuente única de contenido: textos, links, datos
  seo.ts                 # Helper de metadata por página

public/
  images/                # Logo y assets estáticos
```

## Convenciones de código

- Nombres de variables, funciones, componentes, props y archivos: **inglés**
  (ej. `BenefitCard.tsx`, `isLoading`).
- Contenido visible en pantalla y metadatos SEO: **español**.

## Configuración necesaria antes de publicar

- **Número de WhatsApp**: reemplazar el valor de `whatsappNumber` en
  `lib/constants.ts` por el número real de contacto de Edoma.
- **Imagen de Open Graph**: agregar `public/images/og-cover.png` (1200×630)
  para la previsualización al compartir el sitio en redes sociales.

## Despliegue

El despliegue se hace de forma estándar (por ejemplo, en
[Vercel](https://vercel.com)):

1. Conectar este repositorio de GitHub a Vercel (o la plataforma elegida).
2. Desplegar; Vercel detecta automáticamente que es un proyecto Next.js.
3. Compartir el link de la vista previa/despliegue con el equipo de Edoma
   para su revisión.

La conexión del dominio final `edoma.com` (incluyendo la configuración de
DNS/wildcard `*.edoma.com` para la app) la realiza el equipo de Edoma
internamente; no es responsabilidad de quien despliega este sitio.

## Control de versiones

Todo el desarrollo se trabaja en este repositorio de GitHub, con commits
regulares. **El código nunca se comparte por WhatsApp, correo ni ningún otro
canal informal.** Para dar acceso a revisión, se agrega a la persona como
colaborador del repositorio.
