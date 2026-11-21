import { useState } from 'react';
import { ChevronDown, Cpu } from 'lucide-react';
import type { TranslationContent } from '../data/translations';

interface CourseModulesProps {
  modules: TranslationContent['modules'];
}

export function CourseModules({ modules }: CourseModulesProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const allExpanded = openIndices.length === modules.list.length;

  const toggleModule = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  const toggleAll = () => {
    if (allExpanded) {
      setOpenIndices([]);
    } else {
      setOpenIndices(modules.list.map((_, idx) => idx));
    }
  };

  return (
    <section id="modul" className="py-16 lg:py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-wide text-amber-400 mb-2">
              {modules.subtitle}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              {modules.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={toggleAll}
            className="no-print self-start sm:self-auto px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400"
          >
            {allExpanded ? modules.collapseAll : modules.expandAll}
          </button>
        </div>

        <div className="space-y-3">
          {modules.list.map((mod, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={mod.number}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? 'bg-slate-900 border-amber-400/50'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleModule(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-400 rounded-xl"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className={`font-mono text-lg sm:text-xl font-bold tabular-nums shrink-0 ${
                        isOpen ? 'text-amber-400' : 'text-slate-500'
                      }`}
                    >
                      {mod.number}
                    </span>
                    <span className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                      {mod.title}
                    </span>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div className={`${isOpen ? 'block' : 'hidden'} print-expand px-6 pb-6 pt-1`}>
                  <div className="pl-10 sm:pl-12 border-t border-slate-800 pt-4 space-y-4">
                    <ul className="space-y-2.5">
                      {mod.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm sm:text-base text-slate-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-slate-950/80 border border-slate-800 rounded-lg px-4 py-3 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                        <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{modules.aiTag}:</span>
                      </span>
                      <span className="text-sm font-medium text-white">{mod.aiHighlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2-Day Course Schedule from Official Brochure */}
        <div className="mt-14 pt-12 border-t border-slate-800">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
            {modules.scheduleTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Day 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="px-6 py-4 bg-slate-900 border-b border-slate-800">
                <p className="font-mono text-xs font-semibold text-amber-400 tracking-wide">
                  {modules.day1Label}
                </p>
              </div>
              <div className="divide-y divide-slate-800/80">
                {modules.day1Items.map((slot) => (
                  <div
                    key={slot.time}
                    className={`px-6 py-3.5 flex flex-col gap-1 ${
                      slot.isBreak ? 'bg-amber-400/10' : ''
                    }`}
                  >
                    <span className="font-mono text-xs font-medium text-amber-300 tabular-nums">
                      {slot.time}
                    </span>
                    <span
                      className={`text-sm ${
                        slot.isBreak ? 'text-amber-200 font-medium' : 'text-slate-100 font-medium'
                      }`}
                    >
                      {slot.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="px-6 py-4 bg-slate-900 border-b border-slate-800">
                <p className="font-mono text-xs font-semibold text-amber-400 tracking-wide">
                  {modules.day2Label}
                </p>
              </div>
              <div className="divide-y divide-slate-800/80">
                {modules.day2Items.map((slot) => (
                  <div
                    key={slot.time}
                    className={`px-6 py-3.5 flex flex-col gap-1 ${
                      slot.isBreak ? 'bg-amber-400/10' : ''
                    }`}
                  >
                    <span className="font-mono text-xs font-medium text-amber-300 tabular-nums">
                      {slot.time}
                    </span>
                    <span
                      className={`text-sm ${
                        slot.isBreak ? 'text-amber-200 font-medium' : 'text-slate-100 font-medium'
                      }`}
                    >
                      {slot.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
