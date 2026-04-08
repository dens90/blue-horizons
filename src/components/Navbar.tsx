"use client";

import Link from "next/link";
import { useState } from "react";

// TODO: allineare href alle pagine reali quando esistono
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#tour", label: "Tour" },
  { href: "/#contatti", label: "Contatti" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/90 bg-white/95 shadow-sm shadow-sky-900/5 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1920px] items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-sky-950"
          onClick={closeMenu}
        >
          {/* TODO: sostituire con logo / nome attività */}
          Waterbike Tours
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigazione principale"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-sky-800/80 transition-colors hover:text-sky-600"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sky-900 hover:bg-sky-50 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-sky-100 bg-white md:hidden"
        >
          <nav
            className="mx-auto max-w-[1920px] space-y-1 px-4 py-4 sm:px-6 lg:px-10"
            aria-label="Navigazione mobile"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block rounded-md px-3 py-2 text-base font-medium text-sky-950 hover:bg-sky-50"
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
