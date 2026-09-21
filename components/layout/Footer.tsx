// components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icons } from "@/components/ui/icons";
import { LEGAL_NOTICE, NAV_LINKS, SITE, getWhatsappLink } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-white">
      <Container className="py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
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
            <p className="mt-4 text-sm leading-relaxed text-brand-ink/60">
              {SITE.tagline}. Sistema de seguimiento académico en tiempo real para
              instituciones educativas.
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <p className="font-display text-sm font-medium text-brand-ink">Sitio</p>
              <ul className="mt-4 space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-ink/60 hover:text-brand-support"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display text-sm font-medium text-brand-ink">Contacto</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={getWhatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-brand-ink/60 hover:text-brand-support"
                  >
                    <span className="inline-flex h-4 w-4 shrink-0">
                      <Icons.whatsapp />
                    </span>
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand-line pt-6 text-xs text-brand-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
          </p>
          <p>{LEGAL_NOTICE}</p>
        </div>
      </Container>
    </footer>
  );
}
