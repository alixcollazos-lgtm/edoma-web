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

  const menuLinks = NAV_LINKS.filter((link) => link.label !== "Contacto");

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line/70 bg-brand-mist/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt="Edoma"
            width={36}
            height={36}
            className="h-9 w-9 rounded-capsule"
            priority
          />

          <span className="font-display text-lg font-medium text-brand-ink">
            Edoma
          </span>
        </Link>

        {/* Navegación desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {menuLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-[0.95rem] transition-colors ${
                  active
                    ? "text-brand-support"
                    : "text-brand-ink/75 hover:text-brand-support"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Botón desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-brand-coral px-5 py-2.5 font-display text-[0.9rem] font-medium text-white transition-colors hover:bg-[#F0642E]"
          >
            Contáctanos
          </Link>
        </div>

        {/* Botón hamburguesa mobile */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-brand-ink transition-colors hover:bg-white/70 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-5 w-5">
            {open ? <Icons.close /> : <Icons.menu />}
          </span>
        </button>
      </Container>

      {/* Menú mobile */}
      <div
        className={`grid transition-all duration-300 ease-out md:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-brand-line/70 bg-brand-mist">
            <Container className="flex justify-end py-4">
<nav className="grid w-full grid-cols-3 gap-2">                {menuLinks.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
className={`rounded-lg px-3 py-3 text-center font-display text-[0.9rem] transition-all duration-200 ${                        active
                          ? "bg-white text-brand-support"
                          : "text-brand-ink/80 hover:bg-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                {/* Único acceso a Contacto */}
                <Link
                  href="/contacto"
                  onClick={() => setOpen(false)}
className="col-span-3 mt-2 w-full rounded-full bg-brand-coral px-4 py-2.5 text-center font-display text-[0.95rem] font-medium text-white transition-colors hover:bg-[#F0642E]"                >
                  Contáctanos
                </Link>
              </nav>
            </Container>
          </div>
        </div>
      </div>
    </header>
  );
}