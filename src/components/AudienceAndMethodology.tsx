import { Cpu, Users } from 'lucide-react';
import type { TranslationContent } from '../data/translations';

interface AudienceAndMethodologyProps {
  audience: TranslationContent['audience'];
  methodology: TranslationContent['methodology'];
}

export function AudienceAndMethodology({
  audience,
  methodology,
}: AudienceAndMethodologyProps) {
  const coreMethods = methodology.items.filter((item) => item.category === 'core');
  const aiMethods = methodology.items.filter((item) => item.category === 'ai');

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Target Audience */}
        <div>
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-amber-700 mb-2">
              <Users className="w-4 h-4" aria-hidden="true" />
              <span>{audience.title}</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight mb-3">
              {audience.title}
            </h2>
            <p className="text-slate-600">{audience.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audience.roles.map((role) => (
              <div
                key={role.number}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums block mb-4">
                    {role.number}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900 leading-snug mb-2">
                    {role.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{role.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Asymmetric Bento */}
        <div className="pt-12 border-t border-slate-200">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight mb-3">
              {methodology.title}
            </h2>
            <p className="text-slate-600">{methodology.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Core DI Methods */}
            <div className="lg:col-span-8 bg-slate-50 rounded-xl p-6 sm:p-8 border border-slate-200">
              <p className="text-xs font-semibold tracking-wide text-slate-500 mb-5">
                {methodology.coreLabel}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {coreMethods.map((item, idx) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-lg p-4 border border-slate-200 flex items-center gap-3"
                  >
                    <span className="font-mono text-xs text-slate-400 tabular-nums">
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Practice Lab */}
            <div className="lg:col-span-4 bg-slate-950 text-white rounded-xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-amber-400 mb-5">
                  <Cpu className="w-4 h-4" aria-hidden="true" />
                  <span>{methodology.aiLabel}</span>
                </div>
                <div className="space-y-3">
                  {aiMethods.map((item, idx) => (
                    <div
                      key={item.name}
                      className="bg-slate-900 border border-slate-800 rounded-lg p-4 flex items-center justify-between gap-3"
                    >
                      <span className="text-sm font-semibold text-white">{item.name}</span>
                      <span className="font-mono text-xs text-amber-400 tabular-nums">
                        AI-0{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
