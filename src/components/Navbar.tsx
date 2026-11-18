
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type NavbarProps = {
  backLink?: boolean;
};

export default function Navbar({ backLink = false }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#09090d]/85 backdrop-blur-xl">
      <nav className="section-container flex min-h-[76px] items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="contor dev home"
          className="shrink-0 font-heading text-[22px] font-bold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          contor<span className="text-accent">{"//"}</span>dev
        </Link>

        {backLink ? (
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs text-[#a5a1ad] transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            All work
          </Link>
        ) : (
          <>
            <div className="hidden items-center gap-5 sm:flex lg:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`text-xs transition-colors hover:text-[#a78bfa] lg:text-[13px] ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-[#a5a1ad]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden shrink-0 items-center gap-2 rounded-full border border-[#a78bfa]/40 px-4 py-2.5 text-xs text-white transition-colors hover:bg-[#a78bfa] hover:text-[#09090d] sm:flex"
              >
                Let&apos;s talk
                <ArrowUpRight size={14} />
              </Link>

              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMenuOpen((open) => !open)}
                className="flex size-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#a78bfa]/50 hover:text-[#a78bfa] sm:hidden"
              >
                {menuOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </>
        )}
      </nav>

      {!backLink && menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/[0.06] bg-[#09090d] px-6 py-5 sm:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-white/[0.06] py-4 text-sm transition-colors hover:text-[#a78bfa] ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-[#a5a1ad]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-[#a78bfa]/40 px-4 py-3 text-sm text-white transition-colors hover:bg-[#a78bfa] hover:text-[#09090d]"
            >
              Let&apos;s talk
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
