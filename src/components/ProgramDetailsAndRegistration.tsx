import { useState, type FormEvent } from 'react';
import {
  Building2,
  CalendarDays,
  Check,
  Copy,
  Mail,
  MapPin,
  MessageSquare,
  Plus,
  Tag,
  Trash2,
} from 'lucide-react';
import type { TranslationContent } from '../data/translations';

interface ProgramDetailsAndRegistrationProps {
  programInfo: TranslationContent['programInfo'];
  formT: TranslationContent['form'];
}

interface Participant {
  name: string;
  ic: string;
  posPhone: string;
  email: string;
}

const EMPTY_PARTICIPANT: Participant = {
  name: '',
  ic: '',
  posPhone: '',
  email: '',
};

export function ProgramDetailsAndRegistration({
  programInfo,
  formT,
}: ProgramDetailsAndRegistrationProps) {
  const [venueImgError, setVenueImgError] = useState(false);

  // Form state
  const [regName, setRegName] = useState('');
  const [regPos, setRegPos] = useState('');
  const [regCompany, setRegCompany] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regAddress, setRegAddress] = useState('');
  const [participants, setParticipants] = useState<Participant[]>([{ ...EMPTY_PARTICIPANT }]);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const updateParticipant = (index: number, field: keyof Participant, value: string) => {
    setParticipants((prev) =>
      prev.map((p, idx) => (idx === index ? { ...p, [field]: value } : p))
    );
  };

  const addParticipant = () => {
    if (participants.length < 3) {
      setParticipants((prev) => [...prev, { ...EMPTY_PARTICIPANT }]);
    }
  };

  const removeParticipant = (index: number) => {
    if (participants.length > 1) {
      setParticipants((prev) => prev.filter((_, idx) => idx !== index));
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setErrorMsg(null);

    if (
      !regName.trim() ||
      !regPos.trim() ||
      !regCompany.trim() ||
      !regPhone.trim() ||
      !regEmail.trim() ||
      !regAddress.trim()
    ) {
      setErrorMsg(formT.errRequired);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(regEmail.trim())) {
      setErrorMsg(formT.errEmail);
      return;
    }

    const digitsOnly = regPhone.replace(/\D/g, '');
    if (digitsOnly.length < 8) {
      setErrorMsg(formT.errPhone);
      return;
    }

    for (const participant of participants) {
      if (
        !participant.name.trim() ||
        !participant.ic.trim() ||
        !participant.posPhone.trim() ||
        !participant.email.trim()
      ) {
        setErrorMsg(formT.errRequired);
        return;
      }
      if (!emailRegex.test(participant.email.trim())) {
        setErrorMsg(formT.errEmail);
        return;
      }
    }

    const participantBlocks = participants
      .map(
        (p, idx) =>
          `[ MAKLUMAT PESERTA ${idx + 1} ]\n` +
          `Nama: ${p.name.trim()}\n` +
          `No. MyKad / Pasport: ${p.ic.trim()}\n` +
          `Jawatan / No. Tel: ${p.posPhone.trim()}\n` +
          `E-mel: ${p.email.trim()}`
      )
      .join('\n\n');

    const compiled =
      `Pendaftaran Kursus Siasatan Dalaman Dengan A.I.\n\n` +
      `[ MAKLUMAT PENDAFTAR ]\n` +
      `Nama: ${regName.trim()}\n` +
      `Jawatan: ${regPos.trim()}\n` +
      `Syarikat: ${regCompany.trim()}\n` +
      `No. Telefon: ${regPhone.trim()}\n` +
      `E-mel: ${regEmail.trim()}\n` +
      `Alamat: ${regAddress.trim()}\n\n` +
      participantBlocks;

    setSubmittedMessage(compiled);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!submittedMessage) return;
    try {
      await navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const mailtoHref = submittedMessage
    ? `mailto:fauzinordin@hrconsultant.my?subject=${encodeURIComponent(
        'Pendaftaran Kursus Siasatan Dalaman'
      )}&body=${encodeURIComponent(submittedMessage)}`
    : '#';

  const whatsappHref = submittedMessage
    ? `https://wa.me/60193970002?text=${encodeURIComponent(submittedMessage)}`
    : '#';

  return (
    <>
      {/* SECTION 6: MAKLUMAT PROGRAM */}
      <section id="maklumat" className="py-16 lg:py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              {programInfo.title}
            </h2>
            <p className="text-slate-300">{programInfo.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Venue Photo */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 relative min-h-[260px]">
              {!venueImgError ? (
                <img
                  src="/src/assets/images/venue_terengganu_hotel_1795230590520.jpg"
                  alt="Tanjong Vista Hotel, Kuala Terengganu"
                  referrerPolicy="no-referrer"
                  onError={() => setVenueImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-900 text-center">
                  <Building2 className="w-10 h-10 text-amber-400 mb-3" aria-hidden="true" />
                  <p className="font-display font-bold text-white">{programInfo.venueVal}</p>
                  <p className="text-sm text-slate-400">{programInfo.venueCity}</p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="font-display text-lg font-bold text-white">{programInfo.venueVal}</p>
                <p className="text-sm text-amber-300">{programInfo.venueCity}</p>
              </div>
            </div>

            {/* 3 Details Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-amber-400 mb-4">
                  <CalendarDays className="w-4 h-4" aria-hidden="true" />
                  <span>{programInfo.dateTitle}</span>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-white tabular-nums">
                    {programInfo.dateVal}
                  </p>
                  <p className="text-sm text-slate-300 mt-1 tabular-nums">{programInfo.timeVal}</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-amber-400 mb-4">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>{programInfo.venueTitle}</span>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-white">
                    {programInfo.venueVal}
                  </p>
                  <p className="text-sm text-slate-300 mt-1">{programInfo.venueCity}</p>
                </div>
              </div>

              <div className="sm:col-span-2 bg-slate-900 border border-amber-400/40 rounded-xl p-6 sm:p-7">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-amber-400 mb-3">
                  <Tag className="w-4 h-4" aria-hidden="true" />
                  <span>{programInfo.feeTitle}</span>
                </div>
                <div className="flex flex-wrap items-baseline gap-2 mb-3">
                  <span className="font-display text-3xl font-bold text-white tabular-nums">
                    {programInfo.feeVal}
                  </span>
                  <span className="text-sm text-slate-300">{programInfo.feePax}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{programInfo.feeInc}</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <p className="text-xs font-semibold text-amber-400 mb-2">{programInfo.hrdTitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-2">{programInfo.hrdDesc}</p>
                <p className="font-mono text-xs font-semibold text-white tabular-nums">
                  {programInfo.hrdRegNo}
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <p className="text-xs font-semibold text-amber-400 mb-2">{programInfo.payTitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-2">{programInfo.payDesc}</p>
                <p className="font-mono text-xs font-semibold text-white tabular-nums">
                  {programInfo.payAccount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: BORANG PENDAFTARAN */}
      <section id="pendaftaran" className="py-16 lg:py-20 bg-white border-b border-slate-200 no-print">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-2">
              {formT.title}
            </h2>
            <p className="text-slate-600">{formT.subtitle}</p>
          </div>

          {submittedMessage ? (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                  {formT.confirmTitle}
                </h3>
                <p className="text-sm text-slate-600">{formT.confirmSubtitle}</p>
              </div>

              <pre className="bg-white border border-slate-200 rounded-xl p-5 text-xs sm:text-sm font-mono text-slate-800 whitespace-pre-wrap leading-relaxed overflow-x-auto">
                {submittedMessage}
              </pre>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>{formT.btnSendEmail}</span>
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" aria-hidden="true" />
                  <span>{formT.btnSendWhatsapp}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  ) : (
                    <Copy className="w-4 h-4" aria-hidden="true" />
                  )}
                  <span>{copied ? formT.btnCopied : formT.btnCopy}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSubmittedMessage(null)}
                  className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer"
                >
                  {formT.btnEdit}
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-slate-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 space-y-10"
            >
              {/* Registrar Section */}
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 pb-3 mb-6 border-b border-slate-200">
                  {formT.sec1}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="regName" className="block text-sm font-medium text-slate-700 mb-1.5">
                      {formT.lblName} <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="regName"
                      type="text"
                      required
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="regPos" className="block text-sm font-medium text-slate-700 mb-1.5">
                      {formT.lblPos} <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="regPos"
                      type="text"
                      required
                      value={regPos}
                      onChange={(e) => setRegPos(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="regCompany" className="block text-sm font-medium text-slate-700 mb-1.5">
                      {formT.lblCompany} <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="regCompany"
                      type="text"
                      required
                      value={regCompany}
                      onChange={(e) => setRegCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="regPhone" className="block text-sm font-medium text-slate-700 mb-1.5">
                      {formT.lblPhone} <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="regPhone"
                      type="tel"
                      required
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="regEmail" className="block text-sm font-medium text-slate-700 mb-1.5">
                      {formT.lblEmail} <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="regEmail"
                      type="email"
                      required
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="regAddress" className="block text-sm font-medium text-slate-700 mb-1.5">
                      {formT.lblAddress} <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="regAddress"
                      rows={3}
                      required
                      value={regAddress}
                      onChange={(e) => setRegAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Participant Section */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-6 border-b border-slate-200">
                  <h3 className="font-display text-lg font-bold text-slate-900">{formT.sec2}</h3>
                  {participants.length < 3 && (
                    <button
                      type="button"
                      onClick={addParticipant}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{formT.addParticipant.replace('+ ', '')}</span>
                    </button>
                  )}
                </div>

                <div className="space-y-6">
                  {participants.map((participant, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-6 border border-slate-200 space-y-5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-wider tabular-nums">
                          {formT.participantLabel} 0{idx + 1}
                        </span>
                        {idx > 0 && (
                          <button
                            type="button"
                            onClick={() => removeParticipant(idx)}
                            className="inline-flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>{formT.removeParticipant}</span>
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor={`pName-${idx}`}
                            className="block text-sm font-medium text-slate-700 mb-1.5"
                          >
                            {formT.lblName} <span className="text-red-600">*</span>
                          </label>
                          <input
                            id={`pName-${idx}`}
                            type="text"
                            required
                            value={participant.name}
                            onChange={(e) => updateParticipant(idx, 'name', e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor={`pIc-${idx}`}
                            className="block text-sm font-medium text-slate-700 mb-1.5"
                          >
                            {formT.lblIc} <span className="text-red-600">*</span>
                          </label>
                          <input
                            id={`pIc-${idx}`}
                            type="text"
                            required
                            value={participant.ic}
                            onChange={(e) => updateParticipant(idx, 'ic', e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor={`pPosPhone-${idx}`}
                            className="block text-sm font-medium text-slate-700 mb-1.5"
                          >
                            {formT.lblPosPhone} <span className="text-red-600">*</span>
                          </label>
                          <input
                            id={`pPosPhone-${idx}`}
                            type="text"
                            required
                            value={participant.posPhone}
                            onChange={(e) => updateParticipant(idx, 'posPhone', e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor={`pEmail-${idx}`}
                            className="block text-sm font-medium text-slate-700 mb-1.5"
                          >
                            {formT.lblEmail} <span className="text-red-600">*</span>
                          </label>
                          <input
                            id={`pEmail-${idx}`}
                            type="email"
                            required
                            value={participant.email}
                            onChange={(e) => updateParticipant(idx, 'email', e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-600 leading-relaxed">
                {formT.notePrefix}
                <strong className="font-semibold text-slate-900">fauzinordin@hrconsultant.my</strong>
                {formT.noteSuffix}
              </div>

              {errorMsg && (
                <div
                  role="alert"
                  className="bg-red-50 border border-red-200 text-red-700 text-sm font-medium px-4 py-3 rounded-lg"
                >
                  {errorMsg}
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                >
                  {formT.btnSubmit}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
