// components/layout/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icons } from "@/components/ui/icons";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line/70 bg-brand-mist/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Edoma"
            width={36}
            height={36}
            className="h-9 w-9 rounded-capsule"
            priority
          />
          <span className="font-display text-lg font-medium text-brand-ink">Edoma</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-[0.95rem] transition-colors ${
                  active ? "text-brand-support" : "text-brand-ink/75 hover:text-brand-support"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-brand-coral px-5 py-2.5 font-display text-[0.9rem] font-medium text-white transition-colors hover:bg-[#F0642E]"
          >
            Contáctanos
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-10 w-10 items-center justify-center rounded-full text-brand-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-5 w-5">{open ? <Icons.close /> : <Icons.menu />}</span>
        </button>
      </Container>

      {open && (
        <div className="border-t border-brand-line/70 bg-brand-mist md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 font-display text-[0.95rem] text-brand-ink/80 hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}