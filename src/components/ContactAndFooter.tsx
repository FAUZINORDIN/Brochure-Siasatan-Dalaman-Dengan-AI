import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import type { TranslationContent } from '../data/translations';

interface ContactAndFooterProps {
  contact: TranslationContent['contact'];
}

export function ContactAndFooter({ contact }: ContactAndFooterProps) {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wide text-amber-400 mb-2">
              {contact.title}
            </p>
            <h2 className="font-display text-2xl font-bold text-white mb-2">
              {contact.orgName}
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {contact.addressLine1}, {contact.addressLine2}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-300">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-start gap-3.5">
              <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-white font-medium">{contact.addressLine1}</p>
                <p className="text-slate-400">{contact.addressLine2}</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-start gap-3.5">
              <Phone className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs text-slate-400 mb-0.5">{contact.telLabel}</p>
                <p className="text-white font-medium tabular-nums">019-397 0002 / 03-4280 0398</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-start gap-3.5">
              <Mail className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs text-slate-400 mb-0.5">{contact.emailLabel}</p>
                <a
                  href="mailto:fauzinordin@hrconsultant.my"
                  className="text-amber-400 hover:text-amber-300 font-medium break-all"
                >
                  fauzinordin@hrconsultant.my
                </a>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex items-start gap-3.5">
              <Globe className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs text-slate-400 mb-0.5">{contact.webLabel}</p>
                <a
                  href="https://www.hrconsultant.my"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-medium"
                >
                  www.hrconsultant.my
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 py-6 px-4 text-center">
        <p className="text-xs text-slate-500">{contact.footerLine}</p>
      </div>
    </footer>
  );
}
