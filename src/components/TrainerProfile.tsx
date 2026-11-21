import { useState } from 'react';
import { Award, UserCheck } from 'lucide-react';
import type { TranslationContent } from '../data/translations';

interface TrainerProfileProps {
  trainer: TranslationContent['trainer'];
}

export function TrainerProfile({ trainer }: TrainerProfileProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="pengajar" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-wide text-amber-700 mb-2">
            {trainer.badge}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {trainer.title}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Identity & Portrait Column */}
          <div className="lg:col-span-4 bg-slate-950 text-white p-8 flex flex-col justify-between">
            <div>
              <div className="aspect-[3/4] w-full max-w-[260px] mx-auto lg:max-w-none rounded-xl overflow-hidden border border-slate-800 bg-slate-900 mb-6">
                {!imgError ? (
                  <img
                    src="/src/assets/images/trainer_portrait_fauzi_1795230589427.jpg"
                    alt={trainer.name}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-center">
                    <UserCheck className="w-12 h-12 text-amber-400 mb-3" aria-hidden="true" />
                    <span className="font-display text-sm font-bold text-white">{trainer.name}</span>
                  </div>
                )}
              </div>

              <h3 className="font-display text-2xl font-bold text-amber-400 tracking-tight mb-4">
                {trainer.name}
              </h3>

              <ul className="space-y-2.5 text-sm text-slate-300 border-t border-slate-800 pt-5">
                {trainer.credentials.map((cred) => (
                  <li key={cred} className="leading-snug">
                    {cred}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-800 flex items-center gap-2.5 text-xs font-semibold text-slate-200">
              <Award className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <span>{trainer.badge}</span>
            </div>
          </div>

          {/* Right Full Biography Column */}
          <div className="lg:col-span-8 p-8 sm:p-10 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {trainer.bio.map((paragraph, idx) => {
              const isLast = idx === trainer.bio.length - 1;
              return (
                <p
                  key={idx}
                  className={
                    isLast
                      ? 'pt-4 border-t border-slate-200 font-semibold text-slate-900'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
