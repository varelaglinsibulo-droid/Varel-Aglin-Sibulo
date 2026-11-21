export interface TelemetryTabData {
  id: 'ai' | 'cyber' | 'lead';
  label: string;
  caption: string;
  growthLabel: string;
  points: { x: number; y: number; milestone: string; metric: string }[];
  linePath: string;
  areaPath: string;
}

export interface EducationItem {
  period: string;
  institution: string;
  program: string;
  badge?: string;
  active?: boolean;
}

export interface ExperienceItem {
  category: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  footerLabel: string;
  iconName: 'verified' | 'payments' | 'fitness' | 'campaign' | 'basketball' | 'soccer';
  accent?: 'emerald' | 'gold' | 'neutral';
}

export type ProjectCategory = 'All' | 'Networking & System' | 'Programming' | 'UI/UX & AI';

export interface ProjectItem {
  id: string;
  title: string;
  categories: Exclude<ProjectCategory, 'All'>[];
  semesterTag: string;
  categoryLabel: string;
  stack: string[];
  highlights: string[];
  repositoryUrl: string;
  diagramType: 'network' | 'dashboard';
  architectureNotes: {
    overview: string;
    deliverables: string[];
    metrics: { label: string; value: string }[];
  };
}

export interface TechnicalSkill {
  name: string;
  level: number;
}

export interface EmergingInterest {
  title: string;
  description: string;
}

export interface SoftSkillItem {
  name: string;
  evidence: string;
}

export interface AchievementItem {
  title: string;
  rankLabel: string;
  description: string;
  scope: string;
  year: string;
  iconName: 'trophy' | 'medal';
}

export interface CertificateItem {
  id: string;
  title: string;
  theme: string;
  issuer: string;
  role: string;
  date: string;
  certificateNumber: string;
  verificationNote: string;
  pdfUrl: string;
  previewImageUrl: string;
  category: string;
}

export const PORTRAIT_URL =
  '/assets/aistudio/WhatsApp_Image_2026-11-21_at_13.25.42_a62f9fa7.jpeg';

export const PROFILE = {
  name: 'Varel Aglin Sibulo',
  monogram: 'VA',
  nim: '202531063',
  major: 'S-1 Teknik Informatika',
  university: 'Institut Teknologi PLN',
  location: 'Jakarta Barat',
  gpa: '3.71',
  seminars: '4+',
  championships: '2x',
  headlineSub: 'Informatics Engineering Student & Tech Builder.',
  availabilityText: 'OPEN FOR INTERNSHIPS & COLLABORATION · 2026',
  heroBio:
    'Mahasiswa semester 3 Program Studi S-1 Teknik Informatika di Institut Teknologi PLN (IPK 3.71). Berfokus pada AI Agents, Data Science, Cyber Security, serta pengembangan arsitektur sistem dan jaringan yang andal.',
  aboutSummary1:
    'Mahasiswa semester 3 S-1 Teknik Informatika di Institut Teknologi PLN dengan latar belakang jurusan IPA dari SMAN 2 Kota Palopo. Pengalaman organisasi membentuk pribadi yang disiplin, bertanggung jawab, dan adaptif dalam kerja individu maupun tim.',
  aboutSummary2:
    'Berkomitmen menggabungkan ketelitian sains dengan inovasi komputasi praktis untuk merancang solusi rekayasa perangkat lunak serta infrastruktur jaringan yang tangguh.',
  pillars: ['Disciplined Execution', 'Analytical Mindset', 'Collaborative Leader'],
  contact: {
    email: 'varelaglinsibulo@gmail.com',
    whatsappDisplay: '+62 812-4153-8880',
    whatsappUrl: 'https://wa.me/6281241538880',
    githubHandle: 'varelaglinsibulo-droid',
    githubUrl: 'https://github.com/varelaglinsibulo-droid',
    linkedinName: 'Varel Aglin Sibulo',
  },
};

export const TELEMETRY_TABS: TelemetryTabData[] = [
  {
    id: 'ai',
    label: '01 AI & Data',
    caption: 'AI Agents, Data Science & Modern System Architecture',
    growthLabel: '+38% Growth',
    points: [
      { x: 0, y: 62, milestone: 'Sem 1 Logic', metric: '3.65' },
      { x: 80, y: 48, milestone: 'Python & SQL', metric: '78%' },
      { x: 160, y: 34, milestone: 'AI Workflows', metric: '84%' },
      { x: 240, y: 21, milestone: '4+ Seminars', metric: '90%' },
      { x: 320, y: 8, milestone: 'Sem 3 Active', metric: '3.71 GPA' },
    ],
    linePath: 'M0,62 Q40,56 80,48 T160,34 T240,21 T320,8',
    areaPath: 'M0,62 Q40,56 80,48 T160,34 T240,21 T320,8 L320,80 L0,80 Z',
  },
  {
    id: 'cyber',
    label: '02 Cyber & Net',
    caption: 'VLANs, IPv4 Subnetting, Network Security Protocols',
    growthLabel: '+44% Lab Index',
    points: [
      { x: 0, y: 66, milestone: 'TCP/IP Core', metric: '70%' },
      { x: 80, y: 52, milestone: 'IPv4 CIDR', metric: '76%' },
      { x: 160, y: 38, milestone: 'VLAN Trunk', metric: '82%' },
      { x: 240, y: 18, milestone: 'Packet Lab', metric: '88%' },
      { x: 320, y: 12, milestone: 'Sec Hardening', metric: '92%' },
    ],
    linePath: 'M0,66 Q40,60 80,52 T160,38 T240,18 T320,12',
    areaPath: 'M0,66 Q40,60 80,52 T160,38 T240,18 T320,12 L320,80 L0,80 Z',
  },
  {
    id: 'lead',
    label: '03 Leadership',
    caption: 'Team Coordination, Budgeting & Campus Initiatives',
    growthLabel: '+52% Impact',
    points: [
      { x: 0, y: 58, milestone: 'SMP Futsal', metric: '2021' },
      { x: 80, y: 42, milestone: 'Basket Gold', metric: '2023' },
      { x: 160, y: 28, milestone: 'OSIS Bid 7', metric: '2024' },
      { x: 240, y: 15, milestone: 'Ketua Paskah', metric: '2025' },
      { x: 320, y: 6, milestone: 'ITPLN Active', metric: '2026' },
    ],
    linePath: 'M0,58 Q40,50 80,42 T160,28 T240,15 T320,6',
    areaPath: 'M0,58 Q40,50 80,42 T160,28 T240,15 T320,6 L320,80 L0,80 Z',
  },
];

export const TICKER_ITEMS = [
  'AI AGENTS',
  'DATA SCIENCE',
  'CYBER SECURITY',
  'NETWORK CONFIGURATION',
  'SYSTEM ARCHITECTURE',
  'UI/UX DESIGN',
  'CISCO PACKET TRACER',
  'CAMPUS LEADERSHIP',
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    period: '2025 – Sekarang',
    institution: 'INSTITUT TEKNOLOGI PLN',
    program: 'S-1 Teknik Informatika · Jakarta Barat',
    badge: 'Semester 3 · IPK 3.71',
    active: true,
  },
  {
    period: '2022 – 2025',
    institution: 'SMAN 2 KOTA PALOPO',
    program: 'Jurusan Ilmu Pengetahuan Alam (IPA)',
  },
  {
    period: '2019 – 2022',
    institution: 'SMP 8 KOTA PALOPO',
    program: 'Pendidikan Menengah Pertama',
  },
  {
    period: '2014 – 2019',
    institution: 'SDN 50 BULU DATU',
    program: 'Pendidikan Dasar',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    category: 'EVENT LEADERSHIP',
    period: '2024 – 2025',
    role: 'Ketua Kegiatan Paskah',
    organization: 'Pengurus Siswa Kristen SMAN 2 Kota Palopo',
    description:
      'Memimpin perencanaan konsep, koordinasi lintas divisi, alokasi anggaran, dan memastikan kelancaran seluruh rangkaian kegiatan dengan tanggung jawab penuh.',
    footerLabel: 'Lead Organizer',
    iconName: 'verified',
    accent: 'emerald',
  },
  {
    category: 'ORGANIZATION',
    period: '2024 – 2025',
    role: 'Bidang Usaha Dana',
    organization: 'Pengurus Siswa Kristen SMAN 2 Kota Palopo',
    description:
      'Merancang strategi penggalangan dana kreatif, mengelola pencatatan kas, serta mendukung operasional berbagai program kerja keagamaan siswa.',
    footerLabel: 'Fundraising & Budgeting',
    iconName: 'payments',
    accent: 'emerald',
  },
  {
    category: 'STUDENT COUNCIL',
    period: '2024 – 2025',
    role: 'Anggota Bidang 7 (Jasmani & Gizi)',
    organization: 'OSIS SMAN 2 Kota Palopo',
    description:
      'Menginisiasi program kebugaran jasmani, edukasi gizi sehat sekolah, serta menyelenggarakan kompetisi olahraga berkala antar-tingkatan kelas.',
    footerLabel: 'Health & Sports Operations',
    iconName: 'fitness',
    accent: 'emerald',
  },
  {
    category: 'CAMPUS ACTIVITY',
    period: '2025 – Sekarang',
    role: 'Peserta Aktif Seminar Teknologi',
    organization: 'Institut Teknologi PLN',
    description:
      'Berpartisipasi aktif dalam 4+ seminar internal dan simposium eksternal mendalami perkembangan AI, keamanan siber, dan prospek rekayasa sistem cloud.',
    footerLabel: 'Continuous Learning',
    iconName: 'campaign',
    accent: 'emerald',
  },
  {
    category: 'SPORTS & TEAMWORK',
    period: '2022 – 2024',
    role: 'Ekstrakurikuler Bola Basket',
    organization: 'SMAN 2 Kota Palopo',
    description:
      'Disiplin dalam latihan taktis, komunikasi di bawah tekanan tinggi, serta berkontribusi memenangkan gelar kejuaraan tingkat kota.',
    footerLabel: 'Team Strategy & Stamina',
    iconName: 'basketball',
    accent: 'gold',
  },
  {
    category: 'SPORTS & TEAMWORK',
    period: '2019 – 2022',
    role: 'Ekstrakurikuler Futsal',
    organization: 'SMP 8 Kota Palopo',
    description:
      'Membangun fundamental ketahanan fisik, kekompakan tim, dan sportivitas kompetitif sejak usia sekolah menengah pertama.',
    footerLabel: 'Physical Endurance',
    iconName: 'soccer',
    accent: 'neutral',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'campus-network-topology',
    title: 'Simulasi Topologi & Konfigurasi Jaringan Kampus',
    categories: ['Networking & System'],
    semesterTag: 'SEM 3 · 2026',
    categoryLabel: 'CAMPUS LAB',
    stack: ['Cisco Packet Tracer', 'TCP/IP', 'Subnetting'],
    highlights: [
      'Implementasi pembagian VLAN tersegregasi dan pengalamatan IPv4 efisien lintas departemen.',
      'Pengujian latensi dan routing inter-VLAN dengan packet inspection real-time.',
    ],
    repositoryUrl: 'https://github.com/varelaglinsibulo-droid',
    diagramType: 'network',
    architectureNotes: {
      overview:
        'Perancangan simulasi arsitektur jaringan kampus multi-departemen menggunakan router inti dan switch manajemen VLAN untuk mengisolasi traffic akademik, laboratorium, dan administrasi.',
      deliverables: [
        'Skema VLSM / CIDR IPv4 tanpa pemborosan host per segmen departemen',
        'Konfigurasi trunking 802.1Q antara Core Router dan Switch VLAN-10 / VLAN-20',
        'Verifikasi konektivitas end-to-end menggunakan ICMP ping sweep dan simulation packet trace',
      ],
      metrics: [
        { label: 'VLAN Segments', value: 'VLAN 10 & 20' },
        { label: 'Addressing', value: 'IPv4 VLSM' },
        { label: 'Routing Mode', value: 'Router-on-a-Stick' },
      ],
    },
  },
  {
    id: 'portfolio-telemetry-dashboard',
    title: 'Personal Portfolio & Telemetry Dashboard',
    categories: ['UI/UX & AI', 'Programming'],
    semesterTag: 'SEM 3 · 2026',
    categoryLabel: 'CORE PRODUCT',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'JSON'],
    highlights: [
      'Antarmuka dark-fintech responsif dengan komponen glassmorphism dan token tipografi presisi.',
      'Arsitektur data terpisah untuk pemeliharaan profil telemetry akademik secara modular.',
    ],
    repositoryUrl: 'https://github.com/varelaglinsibulo-droid',
    diagramType: 'dashboard',
    architectureNotes: {
      overview:
        'Aplikasi web portofolio bergaya Obsidian Wealthcore yang memadukan estetika manajemen aset digital dengan telemetry akademik mahasiswa Teknik Informatika secara responsif.',
      deliverables: [
        'Sistem desain modular dengan token warna surface tier dan typografi Plus Jakarta Sans + JetBrains Mono',
        'Widget grafik area SVG interaktif untuk memetakan fokus AI Agents, Cyber Security, dan Leadership',
        'Struktur data JSON/TypeScript terpisah untuk pembaruan proyek, seminar, dan pencapaian tanpa mengubah komponen UI',
      ],
      metrics: [
        { label: 'Design System', value: 'Obsidian Dark' },
        { label: 'Responsiveness', value: 'Desktop & Mobile' },
        { label: 'Data Layer', value: 'Modular Typed' },
      ],
    },
  },
];

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  { name: 'Modern Programming', level: 80 },
  { name: 'Network Device Config', level: 78 },
  { name: 'System Architecture', level: 75 },
  { name: 'UI/UX Interface Design', level: 76 },
  { name: 'MS Office Suite', level: 90 },
];

export const EMERGING_INTERESTS: EmergingInterest[] = [
  {
    title: 'AI Agents',
    description:
      'Eksplorasi alur kerja otonom, integrasi Large Language Models (LLM), dan otomasi kecerdasan komputasi modern.',
  },
  {
    title: 'Data Science',
    description:
      'Pengolahan data terstruktur, analisis pola probabilistik, serta visualisasi informasi kuantitatif tingkat tinggi.',
  },
  {
    title: 'Cyber Security',
    description:
      'Fondasi pertahanan jaringan berlapis, simulasi ancaman digital, dan proteksi integritas data institusi.',
  },
];

export const SOFT_SKILLS: SoftSkillItem[] = [
  {
    name: 'Leadership',
    evidence: 'Memimpin perencanaan konsep dan koordinasi lintas divisi sebagai Ketua Kegiatan Paskah SMAN 2 Kota Palopo.',
  },
  {
    name: 'Bertanggung Jawab',
    evidence: 'Mengelola anggaran dan pencatatan kas operasional pada Bidang Usaha Dana serta mempertahankan IPK 3.71.',
  },
  {
    name: 'Disiplin Tinggi',
    evidence: 'Terbentuk melalui jadwal latihan intensif basket antar-pelajar sekaligus konsistensi akademik Teknik Informatika.',
  },
  {
    name: 'Kerja Sama Tim',
    evidence: 'Meraih 2x gelar juara 1 basket tingkat kota dan aktif berkolaborasi dalam kepanitiaan OSIS Bidang 7.',
  },
  {
    name: 'Manajemen Waktu',
    evidence: 'Menyeimbangkan perkuliahan semester 3, 4+ seminar teknologi, dan proyek lab jaringan secara terstruktur.',
  },
  {
    name: 'Komunikasi Organisasi',
    evidence: 'Berkoordinasi efektif antar-anggota pengurus siswa, panitia acara sekolah, serta peserta kegiatan olahraga.',
  },
  {
    name: 'Adaptif',
    evidence: 'Cepat beradaptasi dari lingkungan sekolah di Palopo ke ekosistem perkuliahan teknologi di Jakarta Barat.',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Champion Invitation Basketball SMADA Palopo Vol. II',
    rankLabel: '1ST PLACE · CHAMPION',
    description:
      'Meraih juara 1 dalam turnamen bola basket antar-pelajar tingkat kota Palopo, membuktikan kedisiplinan eksekusi taktik regu.',
    scope: 'Tingkat Kota Palopo',
    year: '2023',
    iconName: 'trophy',
  },
  {
    title: 'Champion Invitation Basketball SMANEL Palopo Vol. I',
    rankLabel: '1ST PLACE · CHAMPION',
    description:
      'Meraih juara 1 bersama tim sekolah melalui ketahanan mental bertanding dan koordinasi intensif di bawah tekanan kompetisi.',
    scope: 'Tingkat Kota Palopo',
    year: '2024',
    iconName: 'medal',
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: 'jsclab-sharing-37',
    title: 'JSCLab Sharing #37',
    theme: 'Tema: "Growing with Algorithms" — Jakarta Smart City & Future City Hub.',
    issuer: 'UP Jakarta Smart City · Diskominfotik DKI Jakarta',
    role: 'Peserta',
    date: '11 Februari 2026',
    certificateNumber: 'BSrE BSSN Electronic Signature',
    verificationNote:
      'Ditandatangani secara elektronik oleh Kepala UP Jakarta Smart City (Ponirin Ariadi Limbong) melalui BSrE BSSN.',
    pdfUrl: '/assets/aistudio/Copy_of_2026_-_Sertifikat_JSCLab_Sharing_-_Varel_Aglin_Sibulo_sign_deebab66.pdf',
    previewImageUrl: '/assets/aistudio/cert_jsclab_37.png',
    category: 'ALGORITHMS & SMART CITY',
  },
  {
    id: 'ai-agent-workshop-itpln',
    title: 'Workshop Lab Software Architecture & Quality',
    theme: 'Tema: "Build Your First AI Agent: Automation for Personal & Tech Freelancer".',
    issuer: 'Fakultas Telematika Energi · Institut Teknologi PLN',
    role: 'Peserta',
    date: '22 November 2025',
    certificateNumber: 'No. WS06/SAQ-HS-22/22/2025',
    verificationNote:
      'Disahkan oleh Kepala Lab SAQ (Dody, S.Kom., M.Kom) & Dekan Fakultas Telematika Energi (Dr. Meilia Nur Indah Susanti, S.T., M.Kom).',
    pdfUrl: '/assets/aistudio/VAREL_AGLIN_SIBULO_Sebagai_PESERTA_b61ebd84.pdf',
    previewImageUrl: '/assets/aistudio/cert_ai_agent_saq.png',
    category: 'AI AGENTS & AUTOMATION',
  },
  {
    id: 'seminar-harmoni-energi',
    title: 'Seminar Harmoni Energi — GSM IT-PLN',
    theme:
      'Tema: "Membangun Hubungan Kerja yang Kuat untuk Mendukung Transisi Energi Hijau. Peran PLN Dalam Mewujudkan Energi Terbarukan."',
    issuer: 'Gerakan Sahabat Mengajar · Institut Teknologi PLN',
    role: 'Peserta',
    date: '25 April 2025',
    certificateNumber: 'No. 0142.2/SER/4/D0/05/2026',
    verificationNote:
      'Ditandatangani oleh Wakil Rektor III Bidang Kemahasiswaan (Ir. Purnomo, S.T., M.T) dan Dosen Pembina GSM (Dody, S.Kom., M.Kom).',
    pdfUrl: '/assets/aistudio/Varel_Aglin_Sibulo_e24ea4fa.pdf',
    previewImageUrl: '/assets/aistudio/cert_harmoni_energi.png',
    category: 'ENERGY & LEADERSHIP',
  },
];

