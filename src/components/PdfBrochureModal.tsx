import { useState } from 'react';
import { Check, FileDown, Printer, X } from 'lucide-react';
import type { TranslationContent } from '../data/translations';

export const OFFICIAL_PDF_PATH =
  '/assets/aistudio/2026_-_44_SDD_Dengan_A.I_-_KUALA_TERENGGANU_0a5c8a69.pdf';
export const OFFICIAL_PDF_FILENAME =
  'Brosur-Pengendalian-Siasatan-Dalaman-AI-Kuala-Terengganu.pdf';

const BROCHURE_PAGES = Array.from({ length: 13 }, (_, index) => {
  const num = String(index + 1).padStart(2, '0');
  return {
    pageNumber: index + 1,
    src: `/assets/brochure-pages/page-${num}.jpg`,
  };
});

export async function downloadOfficialPdf(): Promise<boolean> {
  try {
    const response = await fetch(OFFICIAL_PDF_PATH);
    if (!response.ok) {
      throw new Error('Failed to fetch PDF');
    }
    const arrayBuffer = await response.arrayBuffer();
    const pdfBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(pdfBlob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = OFFICIAL_PDF_FILENAME;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
    }, 5000);

    return true;
  } catch {
    return false;
  }
}

interface PdfBrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: TranslationContent;
}

export function PdfBrochureModal({ isOpen, onClose, content }: PdfBrochureModalProps) {
  const [downloaded, setDownloaded] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const { pdfModal } = content;

  const handleDownloadClick = async () => {
    setDownloading(true);
    const ok = await downloadOfficialPdf();
    setDownloading(false);
    if (ok) {
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    }
  };

  const handlePrint = () => {
    onClose();
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xs p-3 sm:p-6 no-print"
    >
      <div className="bg-white rounded-2xl border border-slate-200 max-w-5xl w-full h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-5 py-4 sm:px-6 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50 shrink-0">
          <div className="min-w-0">
            <h3 id="pdf-modal-title" className="font-display text-lg sm:text-xl font-bold text-slate-900">
              {pdfModal.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{pdfModal.message}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={pdfModal.btnClose}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="px-5 py-3 sm:px-6 border-b border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-slate-500">{pdfModal.hint}</p>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleDownloadClick}
              disabled={downloading}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {downloaded ? (
                <Check className="w-4 h-4 text-slate-950" aria-hidden="true" />
              ) : (
                <FileDown className="w-4 h-4" aria-hidden="true" />
              )}
              <span>{pdfModal.btnDownloadPdf}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Printer className="w-4 h-4" aria-hidden="true" />
              <span>{pdfModal.btnPrint}</span>
            </button>
          </div>
        </div>

        {/* Scrollable 13-Page Brochure Image Viewer (Immune to Chrome PDF plugin blocks) */}
        <div className="flex-1 bg-slate-200 overflow-y-auto p-4 sm:p-6 space-y-6">
          {BROCHURE_PAGES.map((page) => (
            <div
              key={page.pageNumber}
              className="max-w-3xl mx-auto bg-white rounded-lg shadow-md border border-slate-300 overflow-hidden"
            >
              <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono tabular-nums">
                <span>Strategic HRM Solutions</span>
                <span>
                  {page.pageNumber} / {BROCHURE_PAGES.length}
                </span>
              </div>
              <img
                src={page.src}
                alt={`${pdfModal.title} - Halaman ${page.pageNumber}`}
                loading={page.pageNumber <= 2 ? 'eager' : 'lazy'}
                referrerPolicy="no-referrer"
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
