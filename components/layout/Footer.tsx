// components/layout/Footer.tsx

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Icons } from "@/components/ui/icons";

import {
  LEGAL_NOTICE,
  NAV_LINKS,
  SITE,
  getWhatsappLink,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-[#F3F8FC] pb-24 sm:pb-10">
      <Container className="py-10 sm:py-12">
        {/* =====================================================
            CONTENIDO PRINCIPAL
        ====================================================== */}
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_1fr_1fr] lg:gap-10">
          {/* =====================================================
              1. MARCA
          ====================================================== */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              {/* Logo */}
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-brand-line shadow-[0_2px_8px_rgba(15,42,61,0.06)]">
                <Image
                  src="/images/logo.png"
                  alt="Edoma"
                  width={42}
                  height={42}
                  className="h-10 w-10 object-contain"
                />
              </span>

              {/* Nombre */}
              <span className="font-display text-xl font-semibold tracking-[-0.01em] text-brand-ink">
                {SITE.name}
              </span>
            </Link>

            {/* Descripción */}
            <p className="mt-3 max-w-sm text-[0.95rem] leading-6 text-brand-ink/75">
              {SITE.tagline}. Sistema de seguimiento académico en tiempo real
              para instituciones educativas.
            </p>
          </div>

          {/* =====================================================
              2. NAVEGACIÓN
          ====================================================== */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.06em] text-brand-ink/45">
              Sitio
            </p>

            <nav className="mt-4 flex flex-col items-start gap-2.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-brand-ink/60 transition-colors duration-200 hover:text-brand-support"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* =====================================================
              3. CONTACTO Y SOPORTE
          ====================================================== */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.06em] text-brand-ink/45">
              Contacto
            </p>

            <div className="mt-4 space-y-3">
              {/* WhatsApp */}
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-sm text-brand-ink/65 transition-colors duration-200 hover:text-brand-support"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#159A68]/10 text-[#159A68] transition-colors duration-200 group-hover:bg-[#159A68]/15">
                  <span className="h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
                    <Icons.whatsapp />
                  </span>
                </span>

                <span>WhatsApp</span>
              </a>

              {/* Centro de soporte */}
              <Link
                href="/soporte"
                className="group flex items-center gap-2.5 text-sm text-brand-ink/65 transition-colors duration-200 hover:text-brand-support"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5] transition-colors duration-200 group-hover:bg-[#1E88E5]/15">
                  <span className="h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
                    <Icons.checkCircle />
                  </span>
                </span>

                <span>Centro de soporte</span>
              </Link>
            </div>
          </div>

          {/* =====================================================
              4. INFORMACIÓN LEGAL
          ====================================================== */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.06em] text-brand-ink/45">
              Información
            </p>

            <div className="mt-4 space-y-3">
              {/* Aviso legal */}
              <p className="max-w-xs text-xs leading-5 text-brand-ink/45">
                {LEGAL_NOTICE}
              </p>

              {/* Copyright */}
              <p className="text-[0.7rem] leading-relaxed text-brand-ink/40">
                © {new Date().getFullYear()} {SITE.name}. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            LÍNEA INFERIOR
        ====================================================== */}
        <div className="mt-12 border-t border-brand-line pt-7">
          <p className="text-[0.7rem] leading-relaxed text-brand-ink/40">
            Plataforma educativa pensada para simplificar la gestión
            académica.
          </p>
        </div>
      </Container>
    </footer>
  );
}