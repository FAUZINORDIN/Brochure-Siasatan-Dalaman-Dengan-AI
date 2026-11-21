export type LanguageCode = 'ms' | 'en' | 'zh' | 'ta';

export interface CourseModule {
  number: string;
  title: string;
  items: string[];
  aiHighlight: string;
}

export interface TranslationContent {
  nav: {
    overview: string;
    modules: string;
    trainer: string;
    details: string;
    register: string;
  };
  hero: {
    metaClaimable: string;
    metaAi: string;
    metaModules: string;
    title: string;
    subtitle: string;
    ctaRegister: string;
    ctaPdf: string;
    photoCaption: string;
    facts: {
      dateLabel: string;
      dateValue: string;
      timeValue: string;
      venueLabel: string;
      venueValue: string;
      cityValue: string;
      feeLabel: string;
      feeValue: string;
      feePer: string;
      claimLabel: string;
      claimValue: string;
      claimSub: string;
    };
  };
  rationale: {
    kicker: string;
    title: string;
    p1: string;
    p2Prefix: string;
    p2Highlight: string;
    p2Suffix: string;
    principleTitle: string;
    p3: string;
  };
  objectives: {
    objTitle: string;
    objDescPrefix: string;
    objDescEmphasis: string;
    outcomesTitle: string;
    outcomesSubtitle: string;
    outcomes: Array<{
      number: string;
      text: string;
      emphasis?: string;
    }>;
  };
  audience: {
    title: string;
    subtitle: string;
    roles: Array<{
      number: string;
      title: string;
      detail: string;
    }>;
  };
  methodology: {
    title: string;
    subtitle: string;
    coreLabel: string;
    aiLabel: string;
    items: Array<{
      name: string;
      category: 'core' | 'ai';
    }>;
  };
  modules: {
    subtitle: string;
    title: string;
    expandAll: string;
    collapseAll: string;
    aiTag: string;
    list: CourseModule[];
    scheduleTitle: string;
    day1Label: string;
    day2Label: string;
    day1Items: Array<{ time: string; title: string; isBreak?: boolean }>;
    day2Items: Array<{ time: string; title: string; isBreak?: boolean }>;
  };
  trainer: {
    title: string;
    name: string;
    badge: string;
    credentials: string[];
    bio: string[];
  };
  programInfo: {
    title: string;
    subtitle: string;
    dateTitle: string;
    dateVal: string;
    timeVal: string;
    venueTitle: string;
    venueVal: string;
    venueCity: string;
    feeTitle: string;
    feeVal: string;
    feePax: string;
    feeInc: string;
    hrdTitle: string;
    hrdDesc: string;
    hrdRegNo: string;
    payTitle: string;
    payDesc: string;
    payAccount: string;
  };
  form: {
    title: string;
    subtitle: string;
    sec1: string;
    lblName: string;
    lblPos: string;
    lblCompany: string;
    lblPhone: string;
    lblEmail: string;
    lblAddress: string;
    sec2: string;
    participantLabel: string;
    addParticipant: string;
    removeParticipant: string;
    lblIc: string;
    lblPosPhone: string;
    notePrefix: string;
    noteSuffix: string;
    btnSubmit: string;
    errRequired: string;
    errEmail: string;
    errPhone: string;
    confirmTitle: string;
    confirmSubtitle: string;
    btnSendEmail: string;
    btnSendWhatsapp: string;
    btnCopy: string;
    btnCopied: string;
    btnEdit: string;
  };
  contact: {
    title: string;
    orgName: string;
    addressLine1: string;
    addressLine2: string;
    telLabel: string;
    emailLabel: string;
    webLabel: string;
    footerLine: string;
  };
  pdfModal: {
    title: string;
    message: string;
    hint: string;
    btnDownloadPdf: string;
    btnOpenNewTab: string;
    btnPrint: string;
    btnClose: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationContent> = {
  ms: {
    nav: {
      overview: 'Rasional',
      modules: 'Isi Kandungan',
      trainer: 'Pengajar',
      details: 'Maklumat',
      register: 'Daftar Sekarang',
    },
    hero: {
      metaClaimable: '100% HRD Corp Claimable',
      metaAi: 'AI-Assisted Practice',
      metaModules: '8 Modul Lengkap',
      title: 'Pengendalian Siasatan Dalaman (Domestic Inquiry) dengan A.I.',
      subtitle: 'Mengendalikan Siasatan Dalaman Secara Adil, Sistematik dan Dibantu oleh AI.',
      ctaRegister: 'Daftar Sekarang',
      ctaPdf: 'Muat Turun Brosur PDF',
      photoCaption: 'Kursus Eksekutif HR & Perhubungan Perusahaan · 2 Hari Intensif',
      facts: {
        dateLabel: 'Tarikh & Masa',
        dateValue: '28 & 29 Disember',
        timeValue: '9.00 am – 5.30 pm',
        venueLabel: 'Tempat',
        venueValue: 'Tanjong Vista Hotel',
        cityValue: 'Kuala Terengganu',
        feeLabel: 'Bayaran Kursus',
        feeValue: 'RM 1,550.00',
        feePer: '/ seorang',
        claimLabel: 'Status Tuntutan',
        claimValue: '100% HRD Corp',
        claimSub: 'Skim SBL-Khas / Claimable',
      },
    },
    rationale: {
      kicker: 'Latar Belakang Program',
      title: 'Rasional Kursus',
      p1: 'Pengendalian salah laku pekerja memerlukan proses yang sistematik, adil, telus dan berasaskan bukti. Kesilapan dalam penyiasatan awal, merangka pertuduhan, mengurus bukti, mengendalikan saksi atau merekod prosiding boleh menjejaskan kualiti proses disiplin.',
      p2Prefix: 'Perkembangan ',
      p2Highlight: 'Artificial Intelligence (AI)',
      p2Suffix: ' membuka peluang kepada pengamal HR dan Industrial Relations untuk meningkatkan kecekapan kerja seperti menstruktur fakta kes, mengenal pasti jurang maklumat, membantu merangka pertuduhan, menyediakan soalan saksi, menyusun kronologi, menganalisis dokumen dan membantu menyediakan draf laporan.',
      principleTitle: 'Prinsip Kawalan Manusia & Tadbir Urus AI',
      p3: 'Namun AI tidak seharusnya menggantikan pertimbangan manusia. Penggunaannya perlu mengambil kira kerahsiaan, ketepatan maklumat, bias dan human verification. Kursus ini menggabungkan prinsip serta amalan Domestic Inquiry dengan penggunaan AI secara bertanggungjawab dari peringkat awal kes sehingga penyediaan dapatan.',
    },
    objectives: {
      objTitle: 'Objektif Kursus',
      objDescPrefix: 'Kursus ini bertujuan membolehkan peserta memahami dan mengendalikan Domestic Inquiry secara profesional serta menggunakan AI sebagai alat sokongan untuk meningkatkan kecekapan, struktur analisis dan kualiti dokumentasi ',
      objDescEmphasis: 'tanpa menyerahkan keputusan disiplin kepada AI.',
      outcomesTitle: 'Hasil Pembelajaran',
      outcomesSubtitle: 'Pada akhir kursus, peserta dapat:',
      outcomes: [
        {
          number: '01',
          text: 'Menerangkan konsep, tujuan dan prinsip asas Siasatan Dalaman (Domestic Inquiry), termasuk due inquiry, natural justice dan procedural fairness.',
        },
        {
          number: '02',
          text: 'Mengaplikasikan proses persediaan sebelum Siasatan Dalaman termasuk siasatan awal, pengumpulan fakta dan bukti, surat tunjuk sebab serta penyediaan pertuduhan dengan ',
          emphasis: 'bantuan AI yang sesuai.',
        },
        {
          number: '03',
          text: 'Membezakan peranan, tanggungjawab dan batas kuasa Pengerusi, Ahli Panel, Pegawai Pendakwa dan Pencatat dalam memastikan prosiding yang adil dan neutral.',
        },
        {
          number: '04',
          text: 'Melaksanakan prosedur pembukaan Siasatan Dalaman secara sistematik, termasuk pengesahan kehadiran, pembacaan pertuduhan dan merekod pengakuan pekerja.',
        },
        {
          number: '05',
          text: 'Mengendalikan prosiding Siasatan Dalaman apabila pekerja mengaku bersalah dengan memastikan pengakuan dibuat secara jelas dan sukarela serta faktor mitigasi diberi pertimbangan sewajarnya.',
        },
        {
          number: '06',
          text: 'Mengendalikan dan menganalisis prosiding apabila pekerja mengaku tidak bersalah melalui pembentangan kes, examination-in-chief, cross-examination dan re-examination, termasuk ',
          emphasis: 'penggunaan AI untuk membantu membangunkan soalan dan memetakan bukti.',
        },
        {
          number: '07',
          text: 'Menilai keadaan dan maklumat berkaitan ketidakhadiran pekerja serta melaksanakan prosiding ex-parte mengikut prosedur yang adil dan sistematik.',
        },
        {
          number: '08',
          text: 'Menilai bukti dan keterangan yang dikemukakan serta menghasilkan dapatan dan laporan Siasatan Dalaman yang berstruktur dengan ',
          emphasis: 'bantuan AI dan pengesahan manusia.',
        },
      ],
    },
    audience: {
      title: 'Siapa Yang Patut Hadir',
      subtitle: 'Kursus ini direka khusus untuk pengamal pengurusan tenaga kerja dan pembuat keputusan disiplin:',
      roles: [
        { number: '01', title: 'Pengurus & Eksekutif Sumber Manusia (HR)', detail: 'Pengendali kes disiplin dan penyiasatan dalaman organisasi.' },
        { number: '02', title: 'Pegawai Perhubungan Perusahaan (IR)', detail: 'Pengamal pematuhan undang-undang buruh dan prosiding panel.' },
        { number: '03', title: 'Ketua Jabatan / Pengurus Cawangan', detail: 'Pengerusi dan ahli panel siasatan peringkat operasi.' },
        { number: '04', title: 'Eksekutif Undang-undang & Pentadbiran', detail: 'Penyemak dokumentasi pertuduhan, bukti dan dapatan kes.' },
      ],
    },
    methodology: {
      title: 'Metodologi Kursus',
      subtitle: 'Gabungan praktikal perundangan industri dan latihan aliran kerja berbantukan AI',
      coreLabel: 'Amalan Teras DI',
      aiLabel: 'Makmal AI',
      items: [
        { name: 'Facilitator Input', category: 'core' },
        { name: 'Case Study', category: 'core' },
        { name: 'Group Discussion', category: 'core' },
        { name: 'AI Prompting Exercise', category: 'ai' },
        { name: 'Document Analysis', category: 'core' },
        { name: 'Role Play', category: 'core' },
        { name: 'Mock Domestic Inquiry', category: 'core' },
        { name: 'AI-Assisted Case Analysis', category: 'ai' },
      ],
    },
    modules: {
      subtitle: 'Struktur Program',
      title: 'Isi Kandungan Kursus',
      expandAll: 'Buka Semua Modul',
      collapseAll: 'Tutup Semua Modul',
      aiTag: 'Amalan AI',
      list: [
        {
          number: '01',
          title: 'FUNDAMENTALS OF DOMESTIC INQUIRY',
          items: [
            'Definisi & Tujuan DI',
            'Misconduct & pengurusan disiplin',
            'Due Inquiry, Natural Justice & Procedural Fairness',
          ],
          aiHighlight: 'Kerangka prinsip teras & piawaian keadilan prosiding',
        },
        {
          number: '02',
          title: 'BEFORE THE DOMESTIC INQUIRY',
          items: [
            'Aduan, fakta & bukti',
            'Surat Tunjuk Sebab',
            'Merangka Pertuduhan',
          ],
          aiHighlight: 'AI-Assisted Case Preparation',
        },
        {
          number: '03',
          title: 'THE DOMESTIC INQUIRY TEAM',
          items: [
            'Peranan Pengerusi & Ahli Panel',
            'Pegawai Pendakwa & Pencatat',
          ],
          aiHighlight: 'AI Governance dalam DI (Rules, Data & Accountability)',
        },
        {
          number: '04',
          title: 'OPENING THE DOMESTIC INQUIRY',
          items: [
            'Persediaan & Ucapan Pembukaan',
            'Pengesahan identiti & pertuduhan',
            'Recording the Plea',
          ],
          aiHighlight: 'AI-Assisted DI Preparation (Checklist, Chronology)',
        },
        {
          number: '05',
          title: 'PEKERJA MENGAKU BERSALAH',
          items: [
            'Memastikan pemahaman pertuduhan',
            'Pengakuan jelas & sukarela',
            'Mitigating factors',
          ],
          aiHighlight: 'AI-Assisted Documentation (Draf ringkasan)',
        },
        {
          number: '06',
          title: 'PEKERJA MENGAKU TIDAK BERSALAH',
          items: [
            "Presenting the Company's Case",
            'Examination-in-Chief & Cross-Examination',
            'Re-Examination',
          ],
          aiHighlight: 'AI Question Development & Evidence Mapping',
        },
        {
          number: '07',
          title: 'EX-PARTE DOMESTIC INQUIRY',
          items: [
            'Maksud Ex-Parte DI',
            'Notis & bukti penyampaian',
            'Menilai sebab ketidakhadiran',
          ],
          aiHighlight: 'AI-Assisted Ex-Parte Checklist & Gap Analysis',
        },
        {
          number: '08',
          title: 'FINDINGS, REPORT & AI-ASSISTED REVIEW',
          items: [
            'Menilai bukti & kredibiliti',
            'Charge, Elements & Evidence Matrix',
            'Menyediakan DI Report',
          ],
          aiHighlight: 'AI-Assisted Review + Human Verification',
        },
      ],
      scheduleTitle: 'Jadual Kursus 2 Hari',
      day1Label: 'Hari 1 · 28 Disember 2026',
      day2Label: 'Hari 2 · 29 Disember 2026',
      day1Items: [
        { time: '9.00 – 10.30 pagi', title: 'Modul 1: Fundamentals of Domestic Inquiry' },
        { time: '10.30 – 10.50 pagi', title: 'Minum Pagi (15 minit)', isBreak: true },
        { time: '10.50 pagi – 1.00 petang', title: 'Modul 2: Before the Domestic Inquiry' },
        { time: '1.00 – 2.00 petang', title: 'Makan Tengahari (1 jam)', isBreak: true },
        { time: '2.00 – 3.30 petang', title: 'Modul 3: The Domestic Inquiry Team' },
        { time: '3.30 – 3.50 petang', title: 'Minum Petang (15 minit)', isBreak: true },
        { time: '3.50 – 5.30 petang', title: 'Modul 4: Opening the Domestic Inquiry' },
      ],
      day2Items: [
        { time: '9.00 – 10.30 pagi', title: 'Modul 5: Pekerja Mengaku Bersalah' },
        { time: '10.30 – 10.50 pagi', title: 'Minum Pagi (15 minit)', isBreak: true },
        { time: '10.50 pagi – 1.00 petang', title: 'Modul 6: Pekerja Mengaku Tidak Bersalah' },
        { time: '1.00 – 2.00 petang', title: 'Makan Tengahari (1 jam)', isBreak: true },
        { time: '2.00 – 3.30 petang', title: 'Modul 7: Ex-Parte Domestic Inquiry' },
        { time: '3.30 – 3.50 petang', title: 'Minum Petang (15 minit)', isBreak: true },
        { time: '3.50 – 5.30 petang', title: 'Modul 8: Findings, Report & AI-Assisted Review' },
      ],
    },
    trainer: {
      title: 'Biodata Tenaga Pengajar',
      name: 'MOHD FAUZI NORDIN',
      badge: 'HRD Corp Accredited Trainer',
      credentials: [
        'Neuro Synergy NLP Master Trainer (GAANS, NZ)',
        'Neuro-Semantics & NLP Trainer (ISNS, USA)',
        'Strategic & Performance Coach',
        'HR Consultant | Learning Technologist',
      ],
      bio: [
        'Memulakan kerjaya di dalam Kementerian Dalam Negeri Malaysia dan seterusnya di Lembaga Lebuhraya Malaysia. Setelah 3 tahun di dalam perkhidmatan Kerajaan Malaysia, beliau memasuki Projek Lebuhraya Utara-Selatan Berhad (PLUS) iaitu sebuah syarikat pengendali lebuhraya yang terbesar di Malaysia. Berpengalaman bertugas sebagai Eksekutif Operasi di salah sebuah Lebuhraya yang tersibuk di Malaysia yang mempunyai lebih 200 pekerja dan 30 Penyelia di dalam operasi 24 jam sehari selama hampir 6 tahun.',
        'Lima tahun yang terakhir beliau bertugas di Jabatan Sumber Manusia sebagai Ketua Unit yang mengendalikan pelbagai fungsi seperti Latihan untuk pekerja, disiplin, kebajikan pekerja, Keselamatan dan kesihatan pekerja serta terlibat secara langsung dalam membangunkan organisasi di dalam pelbagai aspek dan program. Beliau juga pernah memegang jawatan sebagai Pengurus Kumpulan Pentadbiran dan Sumber Manusia di Grand Saga Sdn Bhd.',
        'Kini beliau telah lebih 26 tahun mengendalikan latihan dan perundingan untuk pelbagai Industri di Malaysia di dalam bidang Latihan, Pengurusan Sumber Manusia, Kepimpinan, Motivasi, Perkhidmatan Pelanggan, Keusahawanan, Persaraan dan Pentadbiran Pejabat.',
        'Di dalam bidang Neuro-Semantics dan NLP (Neuro Linguistic Programming), Mohd Fauzi Nordin merupakan seorang Certified Neuro-Semantics & NLP Trainer (ISNS, USA), Certified NLP Trainer (NFNLP, USA), Certified NLP Master Practitioner (NFNLP-USA), Certified NLP Basic Practitioner (NFNLP-USA), Certified Basic Neuro-Semantics (ISNS – USA), Certified Meta Master Practitioner (ISNS, USA).',
        'Sementara di dalam Coaching, Mohd Fauzi Nordin adalah seorang Associate Certified Meta-Coach (ACMC) dari ISNS, USA, Certified Performance Coach (OUM / International Coach Federation), Certified NLP Coach from Coaching Division of the American Board of NLP, USA, Certified Neurolinguistic Coach (NFLP,USA) dan Certified Sports and Performance Coach (NFNLP, USA).',
        'Di dalam bidang bahasa, Mohd Fauzi Nordin adalah seorang Certified Language and Behavioral Profile (LAB) Practitioner (SS,CAN), Certified Neurolinguistic Communication Consultant (NFNLP,USA) dan Certified Neurolinguistic Hypnotherapy (NFNLP, USA).',
        'Sementara di dalam bidang latihan, beliau adalah seorang trainer (Certification in Training) yang disahkan oleh Pembangunan Sumber Manusia Berhad (PSMB). Certification in Training Evaluation (CITE) dari Pembangunan Sumber Manusia Berhad (EET/0145) dan Certificate IV in Training and Assessment, Australia.',
        'Mohd Fauzi Nordin berkelulusan Master in Business Administration (MBA), Bachelor In Business Administration (BBA), Diploma in Personnel Management dan Diploma in Public Administration.',
      ],
    },
    programInfo: {
      title: 'Maklumat Program',
      subtitle: 'Butiran lengkap penganjuran, lokasi dan pelaburan latihan',
      dateTitle: 'Tarikh & Masa',
      dateVal: '28 & 29 Disember 2026',
      timeVal: '9.00 am – 5.30 pm',
      venueTitle: 'Tempat',
      venueVal: 'Tanjong Vista Hotel',
      venueCity: 'Kuala Terengganu, Terengganu',
      feeTitle: 'Bayaran Kursus',
      feeVal: 'RM 1,550.00',
      feePax: '/ seorang',
      feeInc: 'Termasuk nota kursus, sijil kehadiran, minum pagi, makan tengahari dan minum petang. (Tidak termasuk penginapan & perjalanan.)',
      hrdTitle: 'HRD Corp Claimable',
      hrdDesc: 'Boleh dimohon di bawah skim SBL-KHAS atau HRD Corp Claimable (HRDF / HRD Corp).',
      hrdRegNo: 'No. Pendaftaran: 1000 1768 472',
      payTitle: 'Maklumat Pembayaran',
      payDesc: 'Tunai / dalam talian ke CIMB Islamic Bank, Bandar Baru Ampang.',
      payAccount: 'Akaun: 860 473 8828 (Strategic HRM Solutions)',
    },
    form: {
      title: 'Borang Pendaftaran Kursus',
      subtitle: 'Pengendalian Siasatan Dalaman (Domestic Inquiry) Dengan A.I.',
      sec1: 'Pendaftaran Dibuat Oleh',
      lblName: 'Nama Penuh',
      lblPos: 'Jawatan',
      lblCompany: 'Nama Syarikat',
      lblPhone: 'No. Telefon / HP',
      lblEmail: 'Alamat E-mel',
      lblAddress: 'Alamat Syarikat',
      sec2: 'Maklumat Peserta',
      participantLabel: 'Peserta',
      addParticipant: '+ Tambah Peserta',
      removeParticipant: 'Padam',
      lblIc: 'No. MyKad / Pasport',
      lblPosPhone: 'Jawatan / No. Telefon',
      notePrefix: 'Sila buat pendua borang ini jika peserta melebihi 3 orang atau e-mel maklumat yang sama kepada ',
      noteSuffix: '. Pengesahan pendaftaran akan dihantar melalui e-mel kepada wakil syarikat.',
      btnSubmit: 'Hantar Pendaftaran',
      errRequired: 'Sila lengkapkan semua ruangan bertanda wajib (*).',
      errEmail: 'Sila masukkan format alamat e-mel yang sah.',
      errPhone: 'Sila masukkan nombor telefon yang sah (minimum 8 digit).',
      confirmTitle: 'Ringkasan Pendaftaran Sedia Dihantar',
      confirmSubtitle: 'Pilih saluran penghantaran rasmi di bawah untuk memuktamadkan pendaftaran anda.',
      btnSendEmail: 'Hantar melalui E-mel',
      btnSendWhatsapp: 'Hantar melalui WhatsApp',
      btnCopy: 'Salin Maklumat',
      btnCopied: 'Disalin ke Papan Klip',
      btnEdit: 'Kemaskini Borang',
    },
    contact: {
      title: 'Hubungi Kami',
      orgName: 'STRATEGIC HRM SOLUTIONS',
      addressLine1: '22M, Jalan Kosas 1/5, Taman Kosas',
      addressLine2: '68000 Ampang, Selangor',
      telLabel: 'Tel',
      emailLabel: 'E-mel',
      webLabel: 'Laman Web',
      footerLine: '© 2026 Program Latihan Profesional · Sesuai untuk tuntutan HRD Corp · Hak cipta terpelihara.',
    },
    pdfModal: {
      title: 'Brosur Rasmi PDF (13 Halaman)',
      message: 'Pratonton brosur PDF rasmi bagi Pengendalian Siasatan Dalaman (Domestic Inquiry) Dengan A.I. — Edisi Kuala Terengganu.',
      hint: 'Muat turun fail PDF rasmi atau semak kesemua 13 halaman brosur di bawah.',
      btnDownloadPdf: 'Muat Turun Brosur PDF',
      btnOpenNewTab: 'Buka PDF di Tab Baharu',
      btnPrint: 'Cetak Halaman Web',
      btnClose: 'Tutup',
    },
  },
  en: {
    nav: {
      overview: 'Rationale',
      modules: 'Curriculum',
      trainer: 'Trainer',
      details: 'Program Info',
      register: 'Register Now',
    },
    hero: {
      metaClaimable: '100% HRD Corp Claimable',
      metaAi: 'AI-Assisted Practice',
      metaModules: '8 Complete Modules',
      title: 'Conducting Domestic Inquiry with A.I.',
      subtitle: 'Managing Domestic Inquiry Fairly, Systematically and Assisted by AI.',
      ctaRegister: 'Register Now',
      ctaPdf: 'Download PDF Brochure',
      photoCaption: 'Executive HR & Industrial Relations Program · 2 Intensive Days',
      facts: {
        dateLabel: 'Date & Time',
        dateValue: '28 & 29 December',
        timeValue: '9.00 am – 5.30 pm',
        venueLabel: 'Venue',
        venueValue: 'Tanjong Vista Hotel',
        cityValue: 'Kuala Terengganu',
        feeLabel: 'Course Fee',
        feeValue: 'RM 1,550.00',
        feePer: '/ pax',
        claimLabel: 'Claim Status',
        claimValue: '100% HRD Corp',
        claimSub: 'SBL-Khas / Claimable Scheme',
      },
    },
    rationale: {
      kicker: 'Program Rationale',
      title: 'Course Rationale',
      p1: 'Handling employee misconduct requires a systematic, fair, transparent, and evidence-based process. Errors in preliminary investigations, framing charges, managing evidence, handling witnesses, or recording proceedings can compromise the quality of the disciplinary process.',
      p2Prefix: 'The development of ',
      p2Highlight: 'Artificial Intelligence (AI)',
      p2Suffix: ' opens opportunities for HR and Industrial Relations practitioners to improve work efficiency such as structuring case facts, identifying information gaps, helping to draft charges, preparing witness questions, arranging chronologies, analyzing documents, and preparing draft reports.',
      principleTitle: 'Human Judgment & AI Governance Principle',
      p3: 'However, AI should not replace human judgment. Its use needs to consider confidentiality, information accuracy, bias, and human verification. This course combines the principles and practices of Domestic Inquiry with the responsible use of AI from early case stages to the preparation of findings.',
    },
    objectives: {
      objTitle: 'Course Objectives',
      objDescPrefix: 'This course aims to enable participants to understand and conduct Domestic Inquiries professionally and use AI as a support tool to improve efficiency, analytical structure, and documentation quality ',
      objDescEmphasis: 'without handing over disciplinary decisions to AI.',
      outcomesTitle: 'Learning Outcomes',
      outcomesSubtitle: 'By the end of this course, participants will be able to:',
      outcomes: [
        {
          number: '01',
          text: 'Explain the concepts, purpose, and basic principles of Domestic Inquiry, including due inquiry, natural justice, and procedural fairness.',
        },
        {
          number: '02',
          text: 'Apply preparation processes before a Domestic Inquiry including preliminary investigation, fact and evidence gathering, show cause letters, and charge preparation with ',
          emphasis: 'appropriate AI assistance.',
        },
        {
          number: '03',
          text: 'Distinguish the roles, responsibilities, and limits of authority of the Chairman, Panel Members, Presenting Officer, and Recording Officer in ensuring fair and neutral proceedings.',
        },
        {
          number: '04',
          text: "Execute the opening procedure of a Domestic Inquiry systematically, including attendance verification, charge reading, and recording the employee's plea.",
        },
        {
          number: '05',
          text: 'Handle Domestic Inquiry proceedings when an employee pleads guilty by ensuring the plea is clear and voluntary, and mitigating factors are given due consideration.',
        },
        {
          number: '06',
          text: 'Conduct and analyze proceedings when an employee pleads not guilty through presentation of the case, examination-in-chief, cross-examination, and re-examination, including the ',
          emphasis: 'use of AI to assist in developing questions and mapping evidence.',
        },
        {
          number: '07',
          text: 'Assess circumstances and information related to employee absence and conduct ex-parte proceedings according to fair and systematic procedures.',
        },
        {
          number: '08',
          text: 'Evaluate evidence and testimony presented and produce structured Domestic Inquiry findings and reports with ',
          emphasis: 'AI assistance and human verification.',
        },
      ],
    },
    audience: {
      title: 'Who Should Attend',
      subtitle: 'This course is specially designed for workforce governance and disciplinary practitioners:',
      roles: [
        { number: '01', title: 'HR Managers & Executives', detail: 'Practitioners managing workplace misconduct and formal investigations.' },
        { number: '02', title: 'Industrial Relations (IR) Officers', detail: 'Specialists overseeing labor compliance and inquiry panel integrity.' },
        { number: '03', title: 'Heads of Department / Branch Managers', detail: 'Leaders appointed as inquiry panel chairmen or panel members.' },
        { number: '04', title: 'Legal & Admin Executives', detail: 'Officers reviewing charges, documentary exhibits, and inquiry reports.' },
      ],
    },
    methodology: {
      title: 'Course Methodology',
      subtitle: 'Combining legal-procedural simulation with responsible AI workflow practice',
      coreLabel: 'Core DI Practice',
      aiLabel: 'AI Practice Lab',
      items: [
        { name: 'Facilitator Input', category: 'core' },
        { name: 'Case Study', category: 'core' },
        { name: 'Group Discussion', category: 'core' },
        { name: 'AI Prompting Exercise', category: 'ai' },
        { name: 'Document Analysis', category: 'core' },
        { name: 'Role Play', category: 'core' },
        { name: 'Mock Domestic Inquiry', category: 'core' },
        { name: 'AI-Assisted Case Analysis', category: 'ai' },
      ],
    },
    modules: {
      subtitle: 'Program Structure',
      title: 'Course Contents',
      expandAll: 'Expand All Modules',
      collapseAll: 'Collapse All Modules',
      aiTag: 'AI Component',
      list: [
        {
          number: '01',
          title: 'FUNDAMENTALS OF DOMESTIC INQUIRY',
          items: [
            'Definition & Purpose of DI',
            'Misconduct & discipline management',
            'Due Inquiry, Natural Justice & Procedural Fairness',
          ],
          aiHighlight: 'Core legal principles & procedural fairness standards',
        },
        {
          number: '02',
          title: 'BEFORE THE DOMESTIC INQUIRY',
          items: [
            'Complaints, facts & evidence',
            'Show Cause Letter',
            'Drafting the Charge',
          ],
          aiHighlight: 'AI-Assisted Case Preparation',
        },
        {
          number: '03',
          title: 'THE DOMESTIC INQUIRY TEAM',
          items: [
            'Role of Chairman & Panel',
            'Presenting & Recording Officer',
          ],
          aiHighlight: 'AI Governance in DI (Rules, Data & Accountability)',
        },
        {
          number: '04',
          title: 'OPENING THE DOMESTIC INQUIRY',
          items: [
            'Room & Document Prep',
            'Identity & Charge Verification',
            'Recording the Plea',
          ],
          aiHighlight: 'AI-Assisted DI Preparation (Checklist, Chronology)',
        },
        {
          number: '05',
          title: 'EMPLOYEE PLEADS GUILTY',
          items: [
            'Ensuring charge comprehension',
            'Clear & voluntary plea',
            'Mitigating factors',
          ],
          aiHighlight: 'AI-Assisted Documentation (Draft summary)',
        },
        {
          number: '06',
          title: 'EMPLOYEE PLEADS NOT GUILTY',
          items: [
            "Presenting the Company's Case",
            'Examination-in-Chief & Cross-Examination',
            'Re-Examination',
          ],
          aiHighlight: 'AI Question Development & Evidence Mapping',
        },
        {
          number: '07',
          title: 'EX-PARTE DOMESTIC INQUIRY',
          items: [
            'Meaning of Ex-Parte DI',
            'Notice & proof of delivery',
            'Assessing reasons for absence',
          ],
          aiHighlight: 'AI-Assisted Ex-Parte Checklist & Gap Analysis',
        },
        {
          number: '08',
          title: 'FINDINGS, REPORT & AI-ASSISTED REVIEW',
          items: [
            'Evaluating evidence & credibility',
            'Charge, Elements & Evidence Matrix',
            'Preparing DI Report',
          ],
          aiHighlight: 'AI-Assisted Review + Human Verification',
        },
      ],
      scheduleTitle: '2-Day Course Schedule',
      day1Label: 'Day 1 · 28 December 2026',
      day2Label: 'Day 2 · 29 December 2026',
      day1Items: [
        { time: '9.00 – 10.30 am', title: 'Module 1: Fundamentals of Domestic Inquiry' },
        { time: '10.30 – 10.50 am', title: 'Morning Tea Break (15 mins)', isBreak: true },
        { time: '10.50 am – 1.00 pm', title: 'Module 2: Before the Domestic Inquiry' },
        { time: '1.00 – 2.00 pm', title: 'Lunch Break (1 hour)', isBreak: true },
        { time: '2.00 – 3.30 pm', title: 'Module 3: The Domestic Inquiry Team' },
        { time: '3.30 – 3.50 pm', title: 'Afternoon Tea Break (15 mins)', isBreak: true },
        { time: '3.50 – 5.30 pm', title: 'Module 4: Opening the Domestic Inquiry' },
      ],
      day2Items: [
        { time: '9.00 – 10.30 am', title: 'Module 5: Employee Pleads Guilty' },
        { time: '10.30 – 10.50 am', title: 'Morning Tea Break (15 mins)', isBreak: true },
        { time: '10.50 am – 1.00 pm', title: 'Module 6: Employee Pleads Not Guilty' },
        { time: '1.00 – 2.00 pm', title: 'Lunch Break (1 hour)', isBreak: true },
        { time: '2.00 – 3.30 pm', title: 'Module 7: Ex-Parte Domestic Inquiry' },
        { time: '3.30 – 3.50 pm', title: 'Afternoon Tea Break (15 mins)', isBreak: true },
        { time: '3.50 – 5.30 pm', title: 'Module 8: Findings, Report & AI-Assisted Review' },
      ],
    },
    trainer: {
      title: 'Trainer Profile',
      name: 'MOHD FAUZI NORDIN',
      badge: 'HRD Corp Accredited Trainer',
      credentials: [
        'Neuro Synergy NLP Master Trainer (GAANS, NZ)',
        'Neuro-Semantics & NLP Trainer (ISNS, USA)',
        'Strategic & Performance Coach',
        'HR Consultant | Learning Technologist',
      ],
      bio: [
        'Started his career in the Ministry of Home Affairs Malaysia and subsequently the Malaysian Highway Authority. After 3 years in the Malaysian Government service, he joined Projek Lebuhraya Utara-Selatan Berhad (PLUS), the largest highway operator in Malaysia. Experienced working as an Operations Executive at one of the busiest highways in Malaysia which has over 200 employees and 30 Supervisors in a 24-hour operation for almost 6 years.',
        'For the last five years, he worked in the Human Resources Department as a Unit Head handling various functions such as Employee Training, Discipline, Welfare, Occupational Safety & Health, and was directly involved in organizational development. He also held the position of Group Administration and Human Resources Manager at Grand Saga Sdn Bhd.',
        'Currently, he has over 26 years of experience conducting training and consulting for various industries in Malaysia in the fields of Training, HR Management, Leadership, Motivation, Customer Service, Entrepreneurship, Retirement, and Office Administration.',
        'In the field of Neuro-Semantics and NLP, Mohd Fauzi Nordin is a Certified Neuro-Semantics & NLP Trainer (ISNS, USA), Certified NLP Trainer (NFNLP, USA), Certified NLP Master Practitioner (NFNLP-USA), Certified NLP Basic Practitioner (NFNLP-USA), Certified Basic Neuro-Semantics (ISNS – USA), Certified Meta Master Practitioner (ISNS, USA).',
        'In Coaching, Mohd Fauzi Nordin is an Associate Certified Meta-Coach (ACMC) from ISNS, USA, Certified Performance Coach (OUM / ICF), Certified NLP Coach (ABNLP, USA), Certified Neurolinguistic Coach (NFLP,USA) and Certified Sports and Performance Coach (NFNLP, USA).',
        'In linguistics, he is a Certified Language and Behavioral Profile (LAB) Practitioner (SS,CAN), Certified Neurolinguistic Communication Consultant (NFNLP,USA) and Certified Neurolinguistic Hypnotherapy (NFNLP, USA).',
        'In the field of training, he is a certified trainer (Certification in Training) endorsed by PSMB. Holds Certification in Training Evaluation (CITE) from PSMB and Certificate IV in Training and Assessment, Australia.',
        'Mohd Fauzi Nordin holds a Master in Business Administration (MBA), Bachelor In Business Administration (BBA), Diploma in Personnel Management, and Diploma in Public Administration.',
      ],
    },
    programInfo: {
      title: 'Program Information',
      subtitle: 'Schedule, venue, and professional training investment details',
      dateTitle: 'Date & Time',
      dateVal: '28 & 29 December 2026',
      timeVal: '9.00 am – 5.30 pm',
      venueTitle: 'Venue',
      venueVal: 'Tanjong Vista Hotel',
      venueCity: 'Kuala Terengganu, Terengganu',
      feeTitle: 'Course Fee',
      feeVal: 'RM 1,550.00',
      feePax: '/ pax',
      feeInc: 'Includes course notes, certificate of attendance, morning tea, lunch, and afternoon tea. (Excludes accommodation & travel.)',
      hrdTitle: 'HRD Corp Claimable',
      hrdDesc: 'Claimable under SBL-KHAS or HRD Corp Claimable schemes (HRDF / HRD Corp).',
      hrdRegNo: 'Registration No: 1000 1768 472',
      payTitle: 'Payment Details',
      payDesc: 'Cash / online transfer to CIMB Islamic Bank, Bandar Baru Ampang.',
      payAccount: 'Account: 860 473 8828 (Strategic HRM Solutions)',
    },
    form: {
      title: 'Course Registration Form',
      subtitle: 'Conducting Domestic Inquiry With A.I.',
      sec1: 'Registration Made By',
      lblName: 'Full Name',
      lblPos: 'Position',
      lblCompany: 'Company Name',
      lblPhone: 'Phone Number',
      lblEmail: 'Email Address',
      lblAddress: 'Company Address',
      sec2: 'Participant Details',
      participantLabel: 'Participant',
      addParticipant: '+ Add Participant',
      removeParticipant: 'Remove',
      lblIc: 'ID Card / Passport No.',
      lblPosPhone: 'Position / Phone No.',
      notePrefix: 'Please duplicate this form if there are more than 3 participants or email the details to ',
      noteSuffix: '. Registration confirmation will be emailed to the company representative.',
      btnSubmit: 'Submit Registration',
      errRequired: 'Please complete all required fields (*).',
      errEmail: 'Please enter a valid email address.',
      errPhone: 'Please enter a valid phone number (minimum 8 digits).',
      confirmTitle: 'Registration Summary Ready to Send',
      confirmSubtitle: 'Choose an official channel below to dispatch your registration details.',
      btnSendEmail: 'Send via Email',
      btnSendWhatsapp: 'Send via WhatsApp',
      btnCopy: 'Copy Details',
      btnCopied: 'Copied to Clipboard',
      btnEdit: 'Edit Form',
    },
    contact: {
      title: 'Contact Us',
      orgName: 'STRATEGIC HRM SOLUTIONS',
      addressLine1: '22M, Jalan Kosas 1/5, Taman Kosas',
      addressLine2: '68000 Ampang, Selangor',
      telLabel: 'Tel',
      emailLabel: 'Email',
      webLabel: 'Website',
      footerLine: '© 2026 Professional Training Program · Eligible for HRD Corp claims · All rights reserved.',
    },
    pdfModal: {
      title: 'Official PDF Brochure (13 Pages)',
      message: 'Official brochure preview for Conducting Domestic Inquiry with A.I. — Kuala Terengganu Edition.',
      hint: 'Download the official PDF file directly or review all 13 pages below.',
      btnDownloadPdf: 'Download PDF Brochure',
      btnOpenNewTab: 'Open PDF in New Tab',
      btnPrint: 'Print Web Page',
      btnClose: 'Close',
    },
  },
  zh: {
    nav: {
      overview: '课程理念',
      modules: '课程内容',
      trainer: '讲师简介',
      details: '项目信息',
      register: '立即注册',
    },
    hero: {
      metaClaimable: '100% HRD Corp 可索赔',
      metaAi: 'AI 辅助实践',
      metaModules: '8个完整模块',
      title: 'AI 辅助进行内部调查 (Domestic Inquiry)',
      subtitle: '在AI的辅助下，公平、系统地管理内部调查。',
      ctaRegister: '立即注册',
      ctaPdf: '下载 PDF 手册',
      photoCaption: '人力资源与劳资关系高管研修课程 · 两天密集实践',
      facts: {
        dateLabel: '日期与时间',
        dateValue: '12月 28 & 29日',
        timeValue: '9.00 am – 5.30 pm',
        venueLabel: '地点',
        venueValue: 'Tanjong Vista Hotel',
        cityValue: 'Kuala Terengganu',
        feeLabel: '课程费用',
        feeValue: 'RM 1,550.00',
        feePer: '/ 人',
        claimLabel: '索赔资格',
        claimValue: '100% HRD Corp',
        claimSub: '符合 HRD Corp 索赔条件',
      },
    },
    rationale: {
      kicker: '课程背景',
      title: '课程理念',
      p1: '处理员工的不当行为需要一个系统、公平、透明且以证据为基础的流程。在初步调查、起草指控、管理证据、处理证人或记录程序中的错误都可能损害纪律处分程序的质量。',
      p2Prefix: '',
      p2Highlight: '人工智能（AI）',
      p2Suffix: '的发展为人力资源和劳资关系从业者提供了提高工作效率的机会，例如构建案件案情、识别信息差距、协助起草指控、准备证人问题、安排时间表、分析文件以及协助准备报告草案。',
      principleTitle: '人工判断与 AI 治理原则',
      p3: '然而，AI不应取代人类的判断。它的使用需要考虑到保密性、信息准确性、偏见和人工核实。本课程结合了内部调查的原则和实践，并在从案件早期阶段到调查结果的准备过程中，负责任地使用AI。',
    },
    objectives: {
      objTitle: '课程目标',
      objDescPrefix: '本课程旨在使参与者能够专业地理解和处理内部调查，并使用AI作为支持工具以提高效率、分析结构和文档质量，',
      objDescEmphasis: '同时不将纪律决定权交给AI。',
      outcomesTitle: '学习成果',
      outcomesSubtitle: '在课程结束时，参与者将能够：',
      outcomes: [
        { number: '01', text: '解释内部调查的概念、目的和基本原则，包括正当调查、自然公正和程序公平。' },
        { number: '02', text: '在内部调查之前应用准备流程，包括初步调查、事实和证据收集、要求解释信以及在', emphasis: '适当的AI协助下进行指控准备。' },
        { number: '03', text: '区分主席、小组成员、呈示官和记录官在确保公平和中立程序中的角色、责任和权力限制。' },
        { number: '04', text: '系统地执行内部调查的开场程序，包括核实出席情况、宣读指控以及记录员工的答辩。' },
        { number: '05', text: '当员工认罪时，通过确保认罪清晰且自愿，并适当考虑减轻处罚的因素，来处理内部调查程序。' },
        { number: '06', text: '当员工不认罪时，通过案件陈述、主问、盘问和复问来进行和分析程序，包括', emphasis: '使用AI来协助制定问题和映射证据。' },
        { number: '07', text: '评估与员工缺席相关的情况和信息，并按照公平、系统的程序进行缺席审判程序。' },
        { number: '08', text: '评估提交的证据和证词，并在', emphasis: 'AI的协助和人工核实下，生成结构化的内部调查结果和报告。' },
      ],
    },
    audience: {
      title: '谁应该参加',
      subtitle: '本课程专为以下人力资源及纪律管理专业人士设计：',
      roles: [
        { number: '01', title: '人力资源经理和主管', detail: '负责员工纪律管理与内部调查流程的执行者。' },
        { number: '02', title: '劳资关系 (IR) 专员', detail: '负责劳工法令合规及听证会程序公正的专员。' },
        { number: '03', title: '部门主管 / 分行经理', detail: '担任内部调查委员会主席或小组成员的管理者。' },
        { number: '04', title: '法律与行政主管', detail: '审阅指控文件、证物清单及调查报告的法务与行政人员。' },
      ],
    },
    methodology: {
      title: '课程方法',
      subtitle: '结合内部调查实战演练与 AI 辅助案件分析工作坊',
      coreLabel: '核心实务',
      aiLabel: 'AI 实操训练',
      items: [
        { name: '辅导员讲解', category: 'core' },
        { name: '案例分析', category: 'core' },
        { name: '小组讨论', category: 'core' },
        { name: 'AI 提示练习', category: 'ai' },
        { name: '文件分析', category: 'core' },
        { name: '角色扮演', category: 'core' },
        { name: '模拟内部调查', category: 'core' },
        { name: 'AI辅助案件分析', category: 'ai' },
      ],
    },
    modules: {
      subtitle: '项目结构',
      title: '课程内容',
      expandAll: '展开全部模块',
      collapseAll: '收起全部模块',
      aiTag: 'AI 实践环节',
      list: [
        {
          number: '01',
          title: '内部调查基础 (FUNDAMENTALS OF DI)',
          items: ['内部调查的定义与目的', '不当行为与纪律管理', '正当调查、自然公正与程序公平'],
          aiHighlight: '内部调查核心法律原则与公平程序准则',
        },
        {
          number: '02',
          title: '内部调查之前 (BEFORE THE DI)',
          items: ['投诉、事实与证据', '要求解释信 (Show Cause Letter)', '起草指控'],
          aiHighlight: 'AI辅助案件准备',
        },
        {
          number: '03',
          title: '内部调查团队 (THE DI TEAM)',
          items: ['主席与小组成员的角色', '呈示官与记录官'],
          aiHighlight: '内部调查中的AI治理（规则、数据与问责制）',
        },
        {
          number: '04',
          title: '开启内部调查 (OPENING THE DI)',
          items: ['房间与文件准备', '身份与指控核实', '记录答辩 (Recording the Plea)'],
          aiHighlight: 'AI辅助内部调查准备（清单、时间线）',
        },
        {
          number: '05',
          title: '员工认罪 (EMPLOYEE PLEADS GUILTY)',
          items: ['确保理解指控', '清晰且自愿的认罪', '减轻处罚因素'],
          aiHighlight: 'AI辅助文档记录（摘要草案）',
        },
        {
          number: '06',
          title: '员工不认罪 (EMPLOYEE PLEADS NOT GUILTY)',
          items: ['呈现公司案件', '主问与盘问 (Cross-Examination)', '复问 (Re-Examination)'],
          aiHighlight: 'AI问题开发与证据映射',
        },
        {
          number: '07',
          title: '缺席内部调查 (EX-PARTE DI)',
          items: ['缺席内部调查的含义', '通知与送达证明', '评估缺席原因'],
          aiHighlight: 'AI辅助缺席清单与差距分析',
        },
        {
          number: '08',
          title: '调查结果、报告与AI审查 (FINDINGS & REPORT)',
          items: ['评估证据与可信度', '指控、要素与证据矩阵', '准备内部调查报告'],
          aiHighlight: 'AI辅助审查 + 人工核实',
        },
      ],
      scheduleTitle: '两天课程时间表',
      day1Label: '第1天 · 2026年12月28日',
      day2Label: '第2天 · 2026年12月29日',
      day1Items: [
        { time: '9.00 – 10.30 am', title: '模块 1: 内部调查基础 (Fundamentals of DI)' },
        { time: '10.30 – 10.50 am', title: '早茶休息 (15分钟)', isBreak: true },
        { time: '10.50 am – 1.00 pm', title: '模块 2: 内部调查之前 (Before the DI)' },
        { time: '1.00 – 2.00 pm', title: '午餐休息 (1小时)', isBreak: true },
        { time: '2.00 – 3.30 pm', title: '模块 3: 内部调查团队 (The DI Team)' },
        { time: '3.30 – 3.50 pm', title: '下午茶休息 (15分钟)', isBreak: true },
        { time: '3.50 – 5.30 pm', title: '模块 4: 开启内部调查 (Opening the DI)' },
      ],
      day2Items: [
        { time: '9.00 – 10.30 am', title: '模块 5: 员工认罪 (Employee Pleads Guilty)' },
        { time: '10.30 – 10.50 am', title: '早茶休息 (15分钟)', isBreak: true },
        { time: '10.50 am – 1.00 pm', title: '模块 6: 员工不认罪 (Employee Pleads Not Guilty)' },
        { time: '1.00 – 2.00 pm', title: '午餐休息 (1小时)', isBreak: true },
        { time: '2.00 – 3.30 pm', title: '模块 7: 缺席内部调查 (Ex-Parte DI)' },
        { time: '3.30 – 3.50 pm', title: '下午茶休息 (15分钟)', isBreak: true },
        { time: '3.50 – 5.30 pm', title: '模块 8: 调查结果、报告与AI审查' },
      ],
    },
    trainer: {
      title: '讲师简介',
      name: 'MOHD FAUZI NORDIN',
      badge: 'HRD Corp 认证培训师',
      credentials: [
        'Neuro Synergy NLP 首席培训师 (GAANS, NZ)',
        'Neuro-Semantics & NLP 培训师 (ISNS, USA)',
        '战略与绩效教练',
        '人力资源顾问 | 学习技术专家',
      ],
      bio: [
        '在他的职业生涯中，他曾在马来西亚内政部和马来西亚大道局任职。在政府服务3年后，他加入了马来西亚最大的高速公路运营商——南北大道公司（PLUS）。作为运营主管，他在马来西亚最繁忙的高速公路之一工作了近6年，管理24小时运营的200多名员工和30名主管。',
        '在过去五年中，他在人力资源部担任单位主管，处理员工培训、纪律、福利、职业安全与健康等职能，并直接参与组织发展计划。他还曾担任 Grand Saga Sdn Bhd 的集团行政和人力资源经理。',
        '目前，他拥有超过26年的经验，在培训、人力资源管理、领导力、动机、客户服务、创业、退休和办公室行政等领域为马来西亚各行业提供培训和咨询。',
        '在神经语义学和NLP领域，Mohd Fauzi Nordin 是一名认证培训师和高级实践者（获 ISNS 和 NFNLP 认证）。',
        '在教练领域，他是 ISNS 的副认证元教练（ACMC），并拥有多项国际教练联合会（ICF）、ABNLP 和 NFNLP 的认证教练资格。',
        '在语言学方面，他是认证语言与行为档案（LAB）实践者，以及神经语言沟通顾问。',
        '在培训领域，他是获 PSMB 认可的认证培训师，拥有 PSMB 的培训评估认证（CITE）以及澳大利亚的四级培训与评估证书。',
        'Mohd Fauzi Nordin 拥有工商管理硕士学位（MBA）、工商管理学士学位（BBA）、人事管理文凭和公共行政文凭。',
      ],
    },
    programInfo: {
      title: '项目信息',
      subtitle: '课程日期、地点与培训费用详情',
      dateTitle: '日期与时间',
      dateVal: '2026年12月 28 & 29日',
      timeVal: '9.00 am – 5.30 pm',
      venueTitle: '地点',
      venueVal: 'Tanjong Vista Hotel',
      venueCity: 'Kuala Terengganu, Terengganu',
      feeTitle: '课程费用',
      feeVal: 'RM 1,550.00',
      feePax: '/ 人',
      feeInc: '包含课程讲义、出席证书、早茶、午餐及下午茶。（不含住宿与交通。）',
      hrdTitle: 'HRD Corp 可索赔',
      hrdDesc: '可通过 SBL-KHAS 或 HRD Corp Claimable 计划申请（HRDF / HRD Corp）。',
      hrdRegNo: '注册编号: 1000 1768 472',
      payTitle: '付款信息',
      payDesc: '现金 / 网上转账至 CIMB Islamic Bank, Bandar Baru Ampang。',
      payAccount: '户口: 860 473 8828 (Strategic HRM Solutions)',
    },
    form: {
      title: '课程报名表',
      subtitle: 'AI辅助进行内部调查',
      sec1: '报名者信息',
      lblName: '全名',
      lblPos: '职位',
      lblCompany: '公司名称',
      lblPhone: '电话号码',
      lblEmail: '电子邮件',
      lblAddress: '公司地址',
      sec2: '参与者详情',
      participantLabel: '参与者',
      addParticipant: '+ 添加参与者',
      removeParticipant: '删除',
      lblIc: '身份证 / 护照号码',
      lblPosPhone: '职位 / 电话号码',
      notePrefix: '如果参与者超过3人，请复制此表格或将详情发送至 ',
      noteSuffix: '。报名确认函将发送给公司代表。',
      btnSubmit: '提交报名',
      errRequired: '请填写所有必填项 (*)。',
      errEmail: '请输入有效的电子邮件地址。',
      errPhone: '请输入有效的电话号码（至少8位数字）。',
      confirmTitle: '报名信息已准备就绪',
      confirmSubtitle: '请选择下方官方渠道发送您的报名详情。',
      btnSendEmail: '通过电邮发送',
      btnSendWhatsapp: '通过 WhatsApp 发送',
      btnCopy: '复制详情',
      btnCopied: '已复制',
      btnEdit: '修改表格',
    },
    contact: {
      title: '联系我们',
      orgName: 'STRATEGIC HRM SOLUTIONS',
      addressLine1: '22M, Jalan Kosas 1/5, Taman Kosas',
      addressLine2: '68000 Ampang, Selangor',
      telLabel: '电话',
      emailLabel: '电邮',
      webLabel: '网站',
      footerLine: '© 2026 专业培训计划 · 符合 HRD Corp 索赔条件 · 保留所有权利。',
    },
    pdfModal: {
      title: '官方 PDF 手册 (13页)',
      message: '《AI辅助进行内部调查》瓜拉登嘉楼专场官方 PDF 手册预览。',
      hint: '可直接下载官方 PDF 文件或在下方浏览全部 13 页手册内容。',
      btnDownloadPdf: '下载 PDF 手册',
      btnOpenNewTab: '在新标签页打开 PDF',
      btnPrint: '打印网页版',
      btnClose: '关闭',
    },
  },
  ta: {
    nav: {
      overview: 'காரணம்',
      modules: 'பாடத்திட்டம்',
      trainer: 'பயிற்றுவிப்பாளர்',
      details: 'தகவல்',
      register: 'பதிவு செய்க',
    },
    hero: {
      metaClaimable: '100% HRD Corp கோரக்கூடியது',
      metaAi: 'AI உதவியுடன் பயிற்சி',
      metaModules: '8 முழுமையான தொகுதிகள்',
      title: 'AI உடன் உள் விசாரணையை நடத்துதல் (Domestic Inquiry)',
      subtitle: 'உள் விசாரணையை நியாயமாகவும், முறையாகவும் AI-இன் உதவியுடனும் கையாளுதல்.',
      ctaRegister: 'இப்போதே பதிவு செய்க',
      ctaPdf: 'PDF சிற்றேட்டைப் பதிவிறக்குக',
      photoCaption: 'HR & தொழில்துறை உறவுகள் சிறப்புப் பயிற்சி · 2 நாட்கள்',
      facts: {
        dateLabel: 'தேதி மற்றும் நேரம்',
        dateValue: 'டிசம்பர் 28 & 29',
        timeValue: '9.00 am – 5.30 pm',
        venueLabel: 'இடம்',
        venueValue: 'Tanjong Vista Hotel',
        cityValue: 'Kuala Terengganu',
        feeLabel: 'பயிற்சி கட்டணம்',
        feeValue: 'RM 1,550.00',
        feePer: '/ நபர்',
        claimLabel: 'உரிமைகோரல் தகுதி',
        claimValue: '100% HRD Corp',
        claimSub: 'HRD Corp கோரிக்கைகளுக்கு தகுதியானது',
      },
    },
    rationale: {
      kicker: 'பயிற்சி பின்னணி',
      title: 'பாடத்திட்டத்தின் காரணம்',
      p1: 'பணியாளரின் தவறான நடத்தையை கையாளுவதற்கு முறையான, நியாயமான, வெளிப்படையான மற்றும் சான்றுகள் அடிப்படையிலான செயல்முறை தேவை. ஆரம்ப விசாரணை, குற்றச்சாட்டுகளை உருவாக்குதல், சான்றுகளை நிர்வகித்தல் போன்றவற்றில் ஏற்படும் பிழைகள் ஒழுங்கு நடவடிக்கையின் தரத்தை பாதிக்கலாம்.',
      p2Prefix: '',
      p2Highlight: 'செயற்கை நுண்ணறிவின் (AI)',
      p2Suffix: ' வளர்ச்சியானது HR மற்றும் தொழில்துறை உறவுகள் பயிற்சியாளர்களுக்கு வேலை திறனை மேம்படுத்துவதற்கான வாய்ப்புகளைத் திறக்கிறது.',
      principleTitle: 'மனித தீர்ப்பு & AI பொறுப்புணர்வு கொள்கை',
      p3: 'எனினும், AI மனித தீர்ப்பை மாற்றக்கூடாது. ரகசியத்தன்மை, தகவல் துல்லியம், சார்புநிலை மற்றும் மனித சரிபார்ப்பு ஆகியவற்றை கருத்தில் கொள்ள வேண்டும். இந்த பாடத்திட்டம் உள் விசாரணையின் கொள்கைகளை AI-இன் பொறுப்பான பயன்பாட்டுடன் இணைக்கிறது.',
    },
    objectives: {
      objTitle: 'பாடத்திட்டத்தின் நோக்கங்கள்',
      objDescPrefix: 'இந்த பாடத்திட்டமானது பங்கேற்பாளர்கள் உள் விசாரணைகளை தொழில்முறையாக கையாளவும், செயல்திறன் மற்றும் ஆவணங்களின் தரத்தை மேம்படுத்த AI-ஐ ஒரு ஆதரவு கருவியாக பயன்படுத்தவும் உதவும், ',
      objDescEmphasis: 'ஆனால் ஒழுங்கு முடிவுகளை AI-இடம் ஒப்படைக்காமல்.',
      outcomesTitle: 'கற்றல் விளைவுகள்',
      outcomesSubtitle: 'இந்த பாடத்திட்டத்தின் முடிவில், பங்கேற்பாளர்கள் பின்வருவனவற்றை செய்ய முடியும்:',
      outcomes: [
        { number: '01', text: 'உள் விசாரணையின் கருத்துக்கள், நோக்கம் மற்றும் அடிப்படை கொள்கைகளை விளக்குதல்.' },
        { number: '02', text: 'உள் விசாரணைக்கு முன்னரான தயாரிப்பு செயல்முறைகளை ', emphasis: 'பொருத்தமான AI உதவியுடன் பயன்படுத்துதல்.' },
        { number: '03', text: 'நியாயமான விசாரணையை உறுதி செய்வதில் தலைவர், குழு உறுப்பினர்கள் மற்றும் பிற அதிகாரிகளின் பொறுப்புகளை வேறுபடுத்துதல்.' },
        { number: '04', text: 'வருகை சரிபார்ப்பு மற்றும் குற்றச்சாட்டு வாசிப்பு உட்பட உள் விசாரணையின் தொடக்க நடைமுறைகளை முறையாக செயல்படுத்துதல்.' },
        { number: '05', text: 'ஒரு பணியாளர் குற்றத்தை ஒப்புக்கொள்ளும்போது, அந்த ஒப்புதல் தெளிவாகவும் சுயவிருப்பத்துடனும் இருப்பதை உறுதி செய்து விசாரணையை கையாளுதல்.' },
        { number: '06', text: 'ஒரு பணியாளர் குற்றத்தை ஒப்புக்கொள்ளாதபோது, ', emphasis: 'AI உதவியுடன் கேள்விகளை உருவாக்கி சான்றுகளை பகுப்பாய்வு செய்து விசாரணையை நடத்துதல்.' },
        { number: '07', text: 'பணியாளர் வராத சூழ்நிலைகளை மதிப்பீடு செய்து, நியாயமான நடைமுறைகளின்படி எக்ஸ்-பார்டே (ex-parte) விசாரணைகளை நடத்துதல்.' },
        { number: '08', text: 'வழங்கப்பட்ட சான்றுகளை மதிப்பீடு செய்து, ', emphasis: 'AI உதவி மற்றும் மனித சரிபார்ப்புடன் கட்டமைக்கப்பட்ட உள் விசாரணை அறிக்கைகளை உருவாக்குதல்.' },
      ],
    },
    audience: {
      title: 'யார் கலந்து கொள்ள வேண்டும்',
      subtitle: 'இந்த பயிற்சி கீழ்க்கண்ட துறை சார்ந்தவர்களுக்காக பிரத்யேகமாக வடிவமைக்கப்பட்டுள்ளது:',
      roles: [
        { number: '01', title: 'HR மேலாளர்கள் மற்றும் நிர்வாகிகள்', detail: 'பணியிட ஒழுங்கு மற்றும் உள் விசாரணைகளை நிர்வகிப்பவர்கள்.' },
        { number: '02', title: 'தொழில்துறை உறவுகள் (IR) அதிகாரிகள்', detail: 'தொழிலாளர் சட்ட இணக்கம் மற்றும் விசாரணைக் குழு நடைமுறைகளை கண்காணிப்பவர்கள்.' },
        { number: '03', title: 'துறைத் தலைவர்கள் / கிளை மேலாளர்கள்', detail: 'விசாரணைக் குழுத் தலைவர் அல்லது உறுப்பினராக செயல்படுபவர்கள்.' },
        { number: '04', title: 'சட்ட மற்றும் நிர்வாக அதிகாரிகள்', detail: 'குற்றச்சாட்டுகள் மற்றும் விசாரணை அறிக்கைகளை மதிப்பாய்வு செய்பவர்கள்.' },
      ],
    },
    methodology: {
      title: 'பயிற்சி முறை',
      subtitle: 'நடைமுறை விசாரணை பயிற்சியுடன் கூடிய AI பணிப்பாய்வு பயிற்சி',
      coreLabel: 'அடிப்படை DI பயிற்சி',
      aiLabel: 'AI பயிற்சி',
      items: [
        { name: 'பயிற்றுவிப்பாளர் விளக்கம்', category: 'core' },
        { name: 'வழக்கு ஆய்வு', category: 'core' },
        { name: 'குழு விவாதம்', category: 'core' },
        { name: 'AI தூண்டுதல் பயிற்சி', category: 'ai' },
        { name: 'ஆவண பகுப்பாய்வு', category: 'core' },
        { name: 'பங்கு நாடகம்', category: 'core' },
        { name: 'மாதிரி உள் விசாரணை', category: 'core' },
        { name: 'AI-உதவி வழக்கு பகுப்பாய்வு', category: 'ai' },
      ],
    },
    modules: {
      subtitle: 'நிரல் அமைப்பு',
      title: 'பாடத்திட்டத்தின் உள்ளடக்கங்கள்',
      expandAll: 'அனைத்தையும் விரிவுபடுத்து',
      collapseAll: 'அனைத்தையும் சுருக்கு',
      aiTag: 'AI செயல்முறை',
      list: [
        {
          number: '01',
          title: 'உள் விசாரணையின் அடிப்படைகள்',
          items: ['DI-இன் வரையறை மற்றும் நோக்கம்', 'தவறான நடத்தை மேலாண்மை', 'இயற்கை நீதி மற்றும் நடைமுறை நியாயம்'],
          aiHighlight: 'நடைமுறை நியாயம் மற்றும் இயற்கை நீதி கோட்பாடுகள்',
        },
        {
          number: '02',
          title: 'உள் விசாரணைக்கு முன்',
          items: ['புகார்கள், உண்மைகள் மற்றும் சான்றுகள்', 'காரணம் காட்டும் கடிதம்', 'குற்றச்சாட்டை உருவாக்குதல்'],
          aiHighlight: 'AI-உதவியுடன் வழக்கு தயாரிப்பு',
        },
        {
          number: '03',
          title: 'உள் விசாரணை குழு',
          items: ['தலைவர் மற்றும் குழுவின் பங்கு', 'வழங்கும் மற்றும் பதிவு செய்யும் அதிகாரி'],
          aiHighlight: 'DI-இல் AI நிர்வாகம்',
        },
        {
          number: '04',
          title: 'உள் விசாரணையைத் தொடங்குதல்',
          items: ['அறை மற்றும் ஆவண தயாரிப்பு', 'அடையாளம் மற்றும் குற்றச்சாட்டு சரிபார்ப்பு', 'பதிலை பதிவு செய்தல்'],
          aiHighlight: 'AI-உதவியுடன் DI தயாரிப்பு',
        },
        {
          number: '05',
          title: 'பணியாளர் குற்றத்தை ஒப்புக்கொள்கிறார்',
          items: ['குற்றச்சாட்டைப் புரிந்துகொள்வதை உறுதிசெய்தல்', 'தெளிவான மற்றும் சுயவிருப்ப ஒப்புதல்', 'தணிக்கும் காரணிகள்'],
          aiHighlight: 'AI-உதவி ஆவணப்படுத்தல்',
        },
        {
          number: '06',
          title: 'பணியாளர் குற்றத்தை மறுக்கிறார்',
          items: ['நிறுவனத்தின் வழக்கை வழங்குதல்', 'குறுக்கு விசாரணை', 'மறு விசாரணை'],
          aiHighlight: 'AI கேள்வி உருவாக்கம்',
        },
        {
          number: '07',
          title: 'எக்ஸ்-பார்டே உள் விசாரணை (EX-PARTE)',
          items: ['எக்ஸ்-பார்டே DI-இன் பொருள்', 'அறிவிப்பு மற்றும் விநியோக சான்று', 'வராமைக்கான காரணங்களை மதிப்பீடு செய்தல்'],
          aiHighlight: 'AI-உதவி இடைவெளி பகுப்பாய்வு',
        },
        {
          number: '08',
          title: 'கண்டுபிடிப்புகள், அறிக்கை & AI மதிப்பாய்வு',
          items: ['சான்றுகளை மதிப்பீடு செய்தல்', 'குற்றச்சாட்டு, கூறுகள் & சான்று அணி', 'DI அறிக்கையை தயாரித்தல்'],
          aiHighlight: 'AI-உதவி மதிப்பாய்வு + மனித சரிபார்ப்பு',
        },
      ],
      scheduleTitle: '2-நாள் பயிற்சி அட்டவணை',
      day1Label: 'நாள் 1 · 28 டிசம்பர் 2026',
      day2Label: 'நாள் 2 · 29 டிசம்பர் 2026',
      day1Items: [
        { time: '9.00 – 10.30 am', title: 'தொகுதி 1: உள் விசாரணையின் அடிப்படைகள்' },
        { time: '10.30 – 10.50 am', title: 'காலை தேநீர் இடைவேளை (15 நிமிடம்)', isBreak: true },
        { time: '10.50 am – 1.00 pm', title: 'தொகுதி 2: உள் விசாரணைக்கு முன்' },
        { time: '1.00 – 2.00 pm', title: 'மதிய உணவு இடைவேளை (1 மணி நேரம்)', isBreak: true },
        { time: '2.00 – 3.30 pm', title: 'தொகுதி 3: உள் விசாரணை குழு' },
        { time: '3.30 – 3.50 pm', title: 'மாலை தேநீர் இடைவேளை (15 நிமிடம்)', isBreak: true },
        { time: '3.50 – 5.30 pm', title: 'தொகுதி 4: உள் விசாரணையைத் தொடங்குதல்' },
      ],
      day2Items: [
        { time: '9.00 – 10.30 am', title: 'தொகுதி 5: பணியாளர் குற்றத்தை ஒப்புக்கொள்கிறார்' },
        { time: '10.30 – 10.50 am', title: 'காலை தேநீர் இடைவேளை (15 நிமிடம்)', isBreak: true },
        { time: '10.50 am – 1.00 pm', title: 'தொகுதி 6: பணியாளர் குற்றத்தை மறுக்கிறார்' },
        { time: '1.00 – 2.00 pm', title: 'மதிய உணவு இடைவேளை (1 மணி நேரம்)', isBreak: true },
        { time: '2.00 – 3.30 pm', title: 'தொகுதி 7: எக்ஸ்-பார்டே உள் விசாரணை' },
        { time: '3.30 – 3.50 pm', title: 'மாலை தேநீர் இடைவேளை (15 நிமிடம்)', isBreak: true },
        { time: '3.50 – 5.30 pm', title: 'தொகுதி 8: கண்டுபிடிப்புகள் & அறிக்கை' },
      ],
    },
    trainer: {
      title: 'பயிற்றுவிப்பாளர் சுயவிவரம்',
      name: 'MOHD FAUZI NORDIN',
      badge: 'HRD Corp அங்கீகரிக்கப்பட்ட பயிற்றுவிப்பாளர்',
      credentials: [
        'Neuro Synergy NLP முதன்மை பயிற்றுவிப்பாளர்',
        'Neuro-Semantics & NLP பயிற்றுவிப்பாளர்',
        'மூலோபாய மற்றும் செயல்திறன் பயிற்சியாளர்',
        'HR ஆலோசகர் | கற்றல் தொழில்நுட்பவியலாளர்',
      ],
      bio: [
        'மலேசிய உள்நாட்டு விவகாரங்கள் அமைச்சகம் மற்றும் மலேசிய நெடுஞ்சாலை ஆணையத்தில் தனது வாழ்க்கையைத் தொடங்கினார். 3 வருட அரசாங்க சேவைக்குப் பிறகு, மலேசியாவின் மிகப்பெரிய நெடுஞ்சாலை ஆபரேட்டரான PLUS-இல் இணைந்தார்.',
        'கடந்த ஐந்து ஆண்டுகளாக, அவர் மனித வளத் துறையில் ஒரு யூனிட் தலைவராக பணிபுரிந்தார், பணியாளர் பயிற்சி, ஒழுக்கம் மற்றும் பாதுகாப்பு போன்ற பல்வேறு செயல்பாடுகளை கையாண்டார்.',
        'தற்போது, பயிற்சி, HR மேலாண்மை, தலைமைத்துவம் போன்ற துறைகளில் மலேசியாவில் உள்ள பல்வேறு தொழில்களுக்கு பயிற்சி மற்றும் ஆலோசனை வழங்குவதில் 26 ஆண்டுகளுக்கும் மேலான அனுபவம் கொண்டுள்ளார்.',
        'நியூரோ-செமாண்டிக்ஸ் மற்றும் NLP துறையில், அவர் ஒரு சான்றளிக்கப்பட்ட பயிற்றுவிப்பாளர் (ISNS மற்றும் NFNLP சான்றிதழ் பெற்றவர்).',
        'பயிற்சித் துறையில், அவர் ISNS, ICF மற்றும் பல சர்வதேச நிறுவனங்களின் சான்றிதழ் பெற்ற பயிற்சியாளர் ஆவார்.',
        'மொழியியலில், அவர் சான்றளிக்கப்பட்ட LAB பயிற்சியாளர் மற்றும் நரம்பியல் மொழி தொடர்பு ஆலோசகர் ஆவார்.',
        'பயிற்சித் துறையில், அவர் PSMB ஆல் சான்றளிக்கப்பட்ட பயிற்றுவிப்பாளர் மற்றும் ஆஸ்திரேலியாவின் சான்றிதழ் IV-ஐ கொண்டுள்ளார்.',
        'Mohd Fauzi Nordin, MBA, BBA மற்றும் பணியாளர் மேலாண்மை மற்றும் பொது நிர்வாகத்தில் டிப்ளோமா பட்டங்களை பெற்றுள்ளார்.',
      ],
    },
    programInfo: {
      title: 'நிகழ்ச்சி தகவல்',
      subtitle: 'தேதி, இடம் மற்றும் பயிற்சி கட்டண விவரங்கள்',
      dateTitle: 'தேதி மற்றும் நேரம்',
      dateVal: '28 & 29 டிசம்பர் 2026',
      timeVal: '9.00 am – 5.30 pm',
      venueTitle: 'இடம்',
      venueVal: 'Tanjong Vista Hotel',
      venueCity: 'Kuala Terengganu, Terengganu',
      feeTitle: 'பயிற்சி கட்டணம்',
      feeVal: 'RM 1,550.00',
      feePax: '/ நபர்',
      feeInc: 'பாட குறிப்புகள், வருகை சான்றிதழ், காலை தேநீர், மதிய உணவு மற்றும் மாலை தேநீர் அடங்கும். (தங்குமிடம் மற்றும் பயணம் தவிர.)',
      hrdTitle: 'HRD Corp கோரக்கூடியது',
      hrdDesc: 'SBL-KHAS அல்லது HRD Corp Claimable திட்டத்தின் கீழ் விண்ணப்பிக்கலாம்.',
      hrdRegNo: 'பதிவு எண்: 1000 1768 472',
      payTitle: 'கட்டண விவரங்கள்',
      payDesc: 'CIMB Islamic Bank, Bandar Baru Ampang வங்கிக்கு பணம் / ஆன்லைன் பரிமாற்றம்.',
      payAccount: 'கணக்கு: 860 473 8828 (Strategic HRM Solutions)',
    },
    form: {
      title: 'பாடநெறி பதிவு படிவம்',
      subtitle: 'AI உடன் உள் விசாரணையை நடத்துதல்',
      sec1: 'பதிவு செய்பவர்',
      lblName: 'முழு பெயர்',
      lblPos: 'பதவி',
      lblCompany: 'நிறுவனத்தின் பெயர்',
      lblPhone: 'தொலைபேசி எண்',
      lblEmail: 'மின்னஞ்சல் முகவரி',
      lblAddress: 'நிறுவனத்தின் முகவரி',
      sec2: 'பங்கேற்பாளர் விவரங்கள்',
      participantLabel: 'பங்கேற்பாளர்',
      addParticipant: '+ பங்கேற்பாளரைச் சேர்',
      removeParticipant: 'நீக்கு',
      lblIc: 'அடையாள அட்டை எண்',
      lblPosPhone: 'பதவி / தொலைபேசி எண்',
      notePrefix: '3 பங்கேற்பாளர்களுக்கு மேல் இருந்தால் இந்த படிவத்தை நகலெடுக்கவும் அல்லது விவரங்களை ',
      noteSuffix: ' என்ற மின்னஞ்சலுக்கு அனுப்பவும்.',
      btnSubmit: 'பதிவை சமர்ப்பிக்கவும்',
      errRequired: 'அனைத்து கட்டாய புலங்களையும் (*) நிரப்பவும்.',
      errEmail: 'சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.',
      errPhone: 'சரியான தொலைபேசி எண்ணை உள்ளிடவும் (குறைந்தது 8 இலக்கங்கள்).',
      confirmTitle: 'பதிவு விவரங்கள் அனுப்பத் தயார்',
      confirmSubtitle: 'உங்கள் பதிவை அனுப்ப கீழே உள்ள வழியைத் தேர்ந்தெடுக்கவும்.',
      btnSendEmail: 'மின்னஞ்சல் மூலம் அனுப்புக',
      btnSendWhatsapp: 'WhatsApp மூலம் அனுப்புக',
      btnCopy: 'விவரங்களை நகலெடு',
      btnCopied: 'நகலெடுக்கப்பட்டது',
      btnEdit: 'படிவத்தைத் திருத்து',
    },
    contact: {
      title: 'எங்களை தொடர்பு கொள்ளவும்',
      orgName: 'STRATEGIC HRM SOLUTIONS',
      addressLine1: '22M, Jalan Kosas 1/5, Taman Kosas',
      addressLine2: '68000 Ampang, Selangor',
      telLabel: 'தொலைபேசி',
      emailLabel: 'மின்னஞ்சல்',
      webLabel: 'இணையதளம்',
      footerLine: '© 2026 தொழில்முறை பயிற்சி திட்டம் · HRD Corp கோரிக்கைகளுக்கு தகுதியானது · அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
    pdfModal: {
      title: 'அதிகாரப்பூர்வ PDF சிற்றேடு (13 பக்கங்கள்)',
      message: 'உள் விசாரணை மற்றும் AI பயிற்சி சிற்றேடு (கோல திரெங்கானு) முன்னோட்டம்.',
      hint: 'கீழே உள்ள அதிகாரப்பூர்வ PDF கோப்பைப் பதிவிறக்கவும் அல்லது 13 பக்கங்களைப் பார்வையிடவும்.',
      btnDownloadPdf: 'PDF சிற்றேட்டைப் பதிவிறக்குக',
      btnOpenNewTab: 'புதிய தாவலில் திறக்கவும்',
      btnPrint: 'வலைப்பக்கத்தை அச்சிடு',
      btnClose: 'மூடு',
    },
  },
};
