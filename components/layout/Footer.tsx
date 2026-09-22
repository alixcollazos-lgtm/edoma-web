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
    <footer className="border-t border-brand-line bg-[#F3F8FC]">
      <Container className="py-6 sm:py-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Marca */}
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="Edoma"
                width={36}
                height={36}
                className="h-9 w-9 rounded-capsule"
              />

              <span className="font-display text-lg font-medium text-brand-ink">
                {SITE.name}
              </span>
            </Link>

            <p className="mt-2 text-sm leading-relaxed text-brand-ink/60">
              {SITE.tagline}. Sistema de seguimiento académico en tiempo real
              para instituciones educativas.
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="font-display text-sm font-medium text-brand-ink">
              Sitio
            </p>

            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-brand-ink/60 transition-colors hover:text-brand-support"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* WhatsApp */}
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-brand-ink/60 transition-colors hover:text-brand-support"
            >
              <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center [&>svg]:h-4 [&>svg]:w-4">
                <Icons.whatsapp />
              </span>

              WhatsApp
            </a>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-6 flex flex-col gap-2 border-t border-brand-line pt-4 text-xs text-brand-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </p>

          <p>{LEGAL_NOTICE}</p>
        </div>
      </Container>
    </footer>
  );
}