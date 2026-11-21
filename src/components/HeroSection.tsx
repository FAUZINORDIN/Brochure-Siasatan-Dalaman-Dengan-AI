import { useState } from 'react';
import { ArrowRight, FileDown, Globe, ShieldCheck } from 'lucide-react';
import type { LanguageCode, TranslationContent } from '../data/translations';
import { downloadOfficialPdf } from './PdfBrochureModal';

interface HeroSectionProps {
  t: TranslationContent['hero'];
  language: LanguageCode;
  onChangeLanguage: (lang: LanguageCode) => void;
  onOpenPdfModal: () => void;
}

const LANGUAGES: Array<{ code: LanguageCode; label: string }> = [
  { code: 'ms', label: 'Bahasa Melayu' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'ta', label: 'தமிழ்' },
];

export function HeroSection({
  t,
  language,
  onChangeLanguage,
  onOpenPdfModal,
}: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  const handleDownloadBrochure = () => {
    void downloadOfficialPdf();
    onOpenPdfModal();
  };

  return (
    <section className="bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 lg:pt-8 lg:pb-16">
        {/* Language Switcher Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800/90 no-print">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Globe className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
            <span>Bahasa / Language</span>
          </div>
          <div
            role="group"
            aria-label="Language selection"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg"
          >
            {LANGUAGES.map((item) => {
              const active = language === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => onChangeLanguage(item.code)}
                  aria-pressed={active}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400 ${
                    active
                      ? 'bg-amber-400 text-slate-950 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed Metadata Line */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tracking-wide text-amber-300 mb-5">
              <span>{t.metaClaimable}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{t.metaAi}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{t.metaModules}</span>
            </div>

            <h1
              className="font-display font-bold tracking-tight text-white leading-[1.12] mb-6"
              style={{
                fontSize: 'clamp(2.15rem, 3.8vw, 3.5rem)',
                textWrap: 'balance',
              }}
            >
              {t.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 no-print">
              <a
                href="#pendaftaran"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                <span>{t.ctaRegister}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={handleDownloadBrochure}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                <FileDown className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>{t.ctaPdf}</span>
              </button>
            </div>
          </div>

          {/* Right Media Column */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[260px] lg:min-h-[360px] rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
              {!imgError ? (
                <img
                  src="/src/assets/images/hero_boardroom_inquiry_1795230589519.jpg"
                  alt="Bilik mesyuarat eksekutif untuk prosiding Siasatan Dalaman"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full lg:h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-center">
                  <ShieldCheck className="w-12 h-12 text-amber-400 mb-3" aria-hidden="true" />
                  <p className="text-sm font-medium text-slate-200">{t.photoCaption}</p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="text-xs font-medium text-slate-200 tracking-wide">
                  {t.photoCaption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Program Facts Strip */}
        <div className="mt-10 pt-8 border-t border-slate-800/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
            <p className="text-xs font-medium text-slate-400 mb-1.5">{t.facts.dateLabel}</p>
            <p className="font-display text-lg font-bold text-white tabular-nums">{t.facts.dateValue}</p>
            <p className="text-xs text-amber-300 mt-1 tabular-nums">{t.facts.timeValue}</p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
            <p className="text-xs font-medium text-slate-400 mb-1.5">{t.facts.venueLabel}</p>
            <p className="font-display text-lg font-bold text-white">{t.facts.venueValue}</p>
            <p className="text-xs text-slate-300 mt-1">{t.facts.cityValue}</p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
            <p className="text-xs font-medium text-slate-400 mb-1.5">{t.facts.feeLabel}</p>
            <p className="font-display text-lg font-bold text-amber-400 tabular-nums">
              {t.facts.feeValue}{' '}
              <span className="text-xs font-normal text-slate-300">{t.facts.feePer}</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">HRD Corp / Direct</p>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5">
            <p className="text-xs font-medium text-slate-400 mb-1.5">{t.facts.claimLabel}</p>
            <p className="font-display text-lg font-bold text-white tabular-nums">{t.facts.claimValue}</p>
            <p className="text-xs text-slate-300 mt-1">{t.facts.claimSub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
