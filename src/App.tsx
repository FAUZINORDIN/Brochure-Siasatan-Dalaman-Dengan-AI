import { useEffect, useState } from 'react';
import { AudienceAndMethodology } from './components/AudienceAndMethodology';
import { ContactAndFooter } from './components/ContactAndFooter';
import { CourseModules } from './components/CourseModules';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PdfBrochureModal } from './components/PdfBrochureModal';
import { ProgramDetailsAndRegistration } from './components/ProgramDetailsAndRegistration';
import { RationaleAndOutcomes } from './components/RationaleAndOutcomes';
import { TrainerProfile } from './components/TrainerProfile';
import { TRANSLATIONS, type LanguageCode } from './data/translations';

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>('ms');
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

  const content = TRANSLATIONS[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Navbar t={content.nav} />

      <main className="flex-1">
        <HeroSection
          t={content.hero}
          language={language}
          onChangeLanguage={setLanguage}
          onOpenPdfModal={() => setPdfModalOpen(true)}
        />

        <RationaleAndOutcomes
          rationale={content.rationale}
          objectives={content.objectives}
        />

        <AudienceAndMethodology
          audience={content.audience}
          methodology={content.methodology}
        />

        <CourseModules modules={content.modules} />

        <TrainerProfile trainer={content.trainer} />

        <ProgramDetailsAndRegistration
          programInfo={content.programInfo}
          formT={content.form}
        />
      </main>

      <ContactAndFooter contact={content.contact} />

      <PdfBrochureModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
        content={content}
      />
    </div>
  );
}
