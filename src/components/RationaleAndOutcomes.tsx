import { Scale, ShieldAlert } from 'lucide-react';
import type { TranslationContent } from '../data/translations';

interface RationaleAndOutcomesProps {
  rationale: TranslationContent['rationale'];
  objectives: TranslationContent['objectives'];
}

export function RationaleAndOutcomes({ rationale, objectives }: RationaleAndOutcomesProps) {
  return (
    <>
      {/* SECTION 1: RASIONAL KURSUS */}
      <section id="rasional" className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Editorial Anchor */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wide text-amber-700 mb-3">
                <Scale className="w-4 h-4" aria-hidden="true" />
                <span>{rationale.kicker}</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                {rationale.title}
              </h2>

              <div className="bg-slate-900 text-slate-100 rounded-xl p-6 sm:p-7 border border-slate-800">
                <div className="flex items-center gap-2.5 text-amber-400 text-sm font-semibold mb-3">
                  <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{rationale.principleTitle}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {rationale.p3}
                </p>
              </div>
            </div>

            {/* Right Prose Column */}
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-prose">
              <p>{rationale.p1}</p>
              <p>
                {rationale.p2Prefix}
                <strong className="font-semibold text-slate-900">{rationale.p2Highlight}</strong>
                {rationale.p2Suffix}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OBJEKTIF & HASIL PEMBELAJARAN */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Course Objective Statement */}
          <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-10 lg:p-12 border border-slate-800 mb-14">
            <p className="text-xs font-semibold tracking-wide text-amber-400 mb-3">
              {objectives.objTitle}
            </p>
            <p className="font-display text-xl sm:text-2xl font-medium leading-relaxed text-slate-200 max-w-4xl">
              {objectives.objDescPrefix}
              <span className="text-white font-semibold underline decoration-amber-400 decoration-2 underline-offset-4">
                {objectives.objDescEmphasis}
              </span>
            </p>
          </div>

          {/* Learning Outcomes */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
                {objectives.outcomesTitle}
              </h2>
              <p className="text-slate-600 mt-2">{objectives.outcomesSubtitle}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {objectives.outcomes.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-xl p-6 border border-slate-200 flex items-start gap-5"
              >
                <span className="font-mono text-sm font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 rounded-lg px-2.5 py-1 tabular-nums shrink-0">
                  {item.number}
                </span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {item.text}
                  {item.emphasis && (
                    <strong className="font-semibold text-slate-900">{item.emphasis}</strong>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
