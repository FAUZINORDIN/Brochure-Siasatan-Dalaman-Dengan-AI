import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { TranslationContent } from '../data/translations';

interface NavbarProps {
  t: TranslationContent['nav'];
}

export function Navbar({ t }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#rasional', label: t.overview },
    { href: '#modul', label: t.modules },
    { href: '#pengajar', label: t.trainer },
    { href: '#maklumat', label: t.details },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-display text-base md:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 rounded-sm"
        >
          Strategic HRM Solutions
        </a>

        {/* Zone 2: 4 single-line text nav links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white underline-offset-4 hover:underline transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#pendaftaran"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          >
            {t.register}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 text-slate-200 hover:text-white rounded-lg border border-slate-800 focus-visible:outline-2 focus-visible:outline-amber-400"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 px-3 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-900 rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pendaftaran"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center mt-2 py-2.5 px-4 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg"
          >
            {t.register}
          </a>
        </div>
      )}
    </header>
  );
}
