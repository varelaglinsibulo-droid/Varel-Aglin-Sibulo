# Google Stitch UI Prompt: Portfolio Varel Aglin Sibulo

Dokumen ini disusun khusus untuk **Google Stitch** (AI UI/UX & Front-End Generator). Karena Stitch menghasilkan antarmuka langsung dari deskripsi visual dan konten aktual, seluruh data CV dan profil **Varel Aglin Sibulo** sudah ditanamkan langsung ke dalam spesifikasi komponen di bawah ini.

---

## Cara Pakai di Google Stitch

1. Buka **Google Stitch** (`stitch.withgoogle.com`).
2. Pilih mode **Web / Desktop** (1440px).
3. **Opsi 1 (Langsung Jadi 1 Halaman Penuh):** Salin seluruh blok **Master Stitch Prompt** di bawah ini, tempel ke kolom prompt Stitch, lalu klik **Generate**.
4. **Opsi 2 (Bertahap per Bagian):** Jika ingin hasil lebih detail per *section*, gunakan **Prompt Iterasi / Section** di bagian bawah untuk mengedit atau menambah bagian tertentu di kanvas Stitch.
5. Setelah desain muncul, kamu bisa langsung klik **Export to Code** (HTML/CSS atau React/Tailwind) atau **Export to Figma**.

---

## Master Stitch Prompt (Salin & Tempel ke Google Stitch)

```text
Design a sleek, high-end, modern dark-mode personal portfolio website for "Varel Aglin Sibulo", an Informatics Engineering student and tech builder, inspired by luxury fintech & wealth-management interfaces (Wealthcore Investment aesthetic).

### 1. VISUAL STYLE & DESIGN SYSTEM
- **Theme:** Deep Obsidian Dark Mode with subtle architectural grid lines (48px spacing, 2.5% white opacity) and a soft top-center emerald radial ambient glow.
- **Color Palette:**
  - Primary Background: `#070B0A` (Deep Obsidian Black)
  - Card Surface: `#0D1412` (Elevated Dark Forest) with `1px solid rgba(255,255,255,0.08)` border and `16px` border-radius
  - Primary Accent: `#10B981` (Emerald Mint) with subtle glow `rgba(16, 185, 129, 0.16)`
  - Secondary Accent (Awards): `#D4AF37` (Metallic Gold tint)
  - Primary Text: `#F3F6F5` | Secondary Text: `#9CA8A4` | Muted Text: `#5E6B67`
- **Typography:**
  - Headings & Body: `Plus Jakarta Sans` (Bold/ExtraBold tight tracking `-0.03em` for headings, clean readable `15px` for body)
  - Technical Labels, Metrics & Dates: `JetBrains Mono` (uppercase, wide letter-spacing `0.12em`)

### 2. NAVIGATION BAR (Sticky Top Pill)
- Floating glassmorphic pill navbar (`rgba(13, 20, 18, 0.78)`, `backdrop-filter: blur(16px)`), centered `max-width: 1140px`, rounded full (`999px`).
- **Left:** Monogram logo `VA.` in bold white with an emerald green dot.
- **Center Links:** `About`, `Experience`, `Projects`, `Skills`, `Achievements`.
- **Right CTA:** Solid emerald pill button `Get in Touch` (`#10B981` background, `#04130D` bold dark text).

### 3. HERO SECTION (2-Column Fintech Bento Layout)
- **Left Column (Value Proposition):**
  - Status badge pill: `● OPEN FOR INTERNSHIPS & COLLABORATION · 2026` in emerald monospace.
  - Main Headline (H1): `Varel Aglin Sibulo` followed by a gradient emerald sub-headline: `Informatics Engineering Student & Tech Builder.`
  - Bio paragraph: "Mahasiswa semester 2 Program Studi S-1 Teknik Informatika di Institut Teknologi PLN (IPK 3.71). Berfokus pada AI Agents, Data Science, Cyber Security, serta pengembangan arsitektur sistem dan jaringan yang andal."
  - CTA Buttons: Primary emerald pill `Explore Projects →` + Ghost dark pill `View CV & Contact` + subtle GitHub & LinkedIn icon buttons.
- **Right Column (Wealthcore "Profile Telemetry" Dashboard Card):**
  - Elevated dark glass card with `1px solid rgba(16,185,129,0.35)` border.
  - Header row: `PROFILE TELEMETRY` (left) and emerald badge `ITPLN '25` (right).
  - Profile row: Circular portrait avatar placeholder (`72px`, emerald border) + `Varel Aglin Sibulo` / `NIM 202531063 · S-1 Teknik Informatika`.
  - 3-Column Key Metrics Strip (mini dark boxes):
    1. `3.71` — `Current GPA`
    2. `4+` — `Tech Seminars`
    3. `2x` (in Gold) — `Basket Champion`
  - Interactive Focus Sparkline Widget: 3 pill tabs (`01 AI & Data`, `02 Cyber & Net`, `03 Leadership`) above a smooth glowing emerald SVG area line chart showing growth trajectory, paired with caption: "AI Agents, Data Science & Modern System Architecture".
- **Bottom Hero Ticker Bar:**
  - Full-width subtle bordered strip with monospace scrolling tags: `AI AGENTS ✦ DATA SCIENCE ✦ CYBER SECURITY ✦ NETWORK CONFIGURATION ✦ SYSTEM ARCHITECTURE ✦ UI/UX DESIGN ✦ LEADERSHIP`.

### 4. SECTION 01: ABOUT & EDUCATION (2-Column Bento Grid)
- Section Label: `01 / BACKGROUND` | Title: `Academic Foundation & Discipline`
- **Left Card (About Me):**
  - Summary: "Mahasiswa semester 2 S-1 Teknik Informatika di Institut Teknologi PLN dengan latar belakang jurusan IPA dari SMAN 2 Kota Palopo. Pengalaman organisasi membentuk pribadi yang disiplin, bertanggung jawab, dan adaptif dalam kerja individu maupun tim."
  - 3 Pillar Tags at bottom: `Disciplined Execution`, `Analytical Mindset`, `Collaborative Leader`.
- **Right Card (Education Timeline):**
  - Vertical timeline with glowing emerald nodes:
    1. `2025 – Sekarang` | **INSTITUT TEKNOLOGI PLN** — S-1 Teknik Informatika (Active badge: `Semester 2 · IPK 3.71`)
    2. `2022 – 2025` | **SMAN 2 KOTA PALOPO** — Jurusan Ilmu Pengetahuan Alam (IPA)
    3. `2019 – 2022` | **SMP 8 KOTA PALOPO** — Pendidikan Menengah Pertama
    4. `2014 – 2019` | **SDN 50 BULU DATU** — Pendidikan Dasar

### 5. SECTION 02: ORGANIZATIONS & CAMPUS INVOLVEMENT (2x3 Card Grid)
- Section Label: `02 / LEADERSHIP & ACTIVITIES` | Title: `Organizations & Campus Involvement`
- 6 structured dark cards, each with a monospace category pill, date range, bold role title, emerald organization subtitle, and concise description:
  1. `EVENT LEADERSHIP` · `2024 – 2025` | **Ketua Kegiatan Paskah** — *Pengurus Siswa Kristen SMAN 2 Kota Palopo* (Memimpin perencanaan konsep, koordinasi lintas divisi, dan kelancaran acara).
  2. `ORGANIZATION` · `2024 – 2025` | **Bidang Usaha Dana** — *Pengurus Siswa Kristen SMAN 2 Kota Palopo* (Merancang strategi penggalangan dana dan pengelolaan anggaran program kerja).
  3. `STUDENT COUNCIL` · `2024 – 2025` | **Anggota Bidang 7 (Jasmani, Kesehatan & Gizi)** — *OSIS SMAN 2 Kota Palopo* (Menginisiasi program kebugaran jasmani dan edukasi gizi terverifikasi).
  4. `CAMPUS ACTIVITY` · `2025 – Sekarang` | **Peserta Aktif Seminar Teknologi** — *Institut Teknologi PLN* (Mengikuti 4 seminar internal & eksternal seputar AI, keamanan siber, dan karier IT).
  5. `SPORTS & TEAMWORK` · `2022 – 2024` | **Anggota Ekstrakurikuler Basket** — *SMAN 2 Kota Palopo* (Latihan rutin dan kompetisi antar-pelajar tingkat kota).
  6. `SPORTS & TEAMWORK` · `2019 – 2022` | **Anggota Ekstrakurikuler Futsal** — *SMP 8 Kota Palopo* (Membangun kekompakan tim dan disiplin olahraga).

### 6. SECTION 03: TECHNICAL PROJECTS & LABS (2-Column Showcase Grid)
- Section Label: `03 / SELECTED WORKS` | Title: `Technical Projects & Labs`
- Filter pills on top right: `All`, `Networking & System`, `Programming`, `UI/UX & AI`.
- 2 detailed project cards with `16:9` dark geometric wireframe/preview header, semester badge (`SEM 2 · 2026`), monospace tech tags, title, bullet points, and `View Repository ↗` link:
  1. **Simulasi Topologi & Konfigurasi Jaringan Kampus** (`Networking & System`) — Tags: `Cisco Packet Tracer`, `TCP/IP`, `Subnetting`. Bullets: Implementasi pembagian VLAN & pengalamatan IPv4 efisien; Pengujian konektivitas antar-node.
  2. **Personal Portfolio & Telemetry Dashboard** (`UI/UX & AI`) — Tags: `HTML5`, `CSS3`, `JavaScript`, `JSON`. Bullets: Antarmuka dark-fintech responsif dengan komponen glassmorphism; Arsitektur data terpisah.

### 7. SECTION 04: CAPABILITIES & SKILLS (3-Column Bento Matrix)
- Section Label: `04 / CAPABILITIES` | Title: `Technical Stack & Core Strengths`
- **Card 1 — Technical & Computing:** Progress bar rows in emerald (`#10B981`):
  - `Modern Programming Languages` (80%)
  - `Network Device Configuration` (78%)
  - `Computer System Architecture` (75%)
  - `UI/UX Interface Design` (76%)
  - `Microsoft Office (Word, Excel, PowerPoint)` (90%)
- **Card 2 — Emerging Tech Interests:** 3 highlighted sub-cards with emerald left border:
  - **AI Agents:** Eksplorasi alur kerja otonom, pemanfaatan LLM, dan otomasi cerdas.
  - **Data Science:** Pengolahan data terstruktur, analisis pola, dan visualisasi informasi.
  - **Cyber Security:** Fondasi pertahanan jaringan, keamanan sistem, dan mitigasi risiko digital.
- **Card 3 — Leadership & Soft Skills:** Interactive pill tags:
  - `Leadership`, `Bertanggung Jawab`, `Disiplin Tinggi`, `Kerja Sama Tim`, `Manajemen Waktu`, `Komunikasi Organisasi`, `Adaptif`.

### 8. SECTION 05: ACHIEVEMENTS & HONORS (2-Column Gold-Tinted Cards)
- Section Label: `05 / HONORS` | Title: `Achievements & Recognition`
- 2 trophy cards with subtle gold gradient tint (`rgba(212,175,55,0.06)`), gold trophy icon box (`52px`), and `1ST PLACE · CHAMPION` label:
  1. **Champion Invitation Basketball SMADA Palopo Vol. II** — Juara 1 turnamen bola basket antar-pelajar tingkat kota.
  2. **Champion Invitation Basketball SMANEL Palopo Vol. I** — Juara 1 bersama tim basket sekolah melalui strategi dan kerja sama solid.

### 9. SECTION 06: CONTACT CTA & FOOTER
- **Large Centered Rounded CTA Box** with radial emerald top glow and `1px solid rgba(16,185,129,0.35)` border:
  - Label: `06 / INITIATE CONTACT`
  - Headline: `Let's Build & Collaborate.`
  - Subtitle: "Terbuka untuk peluang magang IT, proyek studi pengembangan perangkat lunak/jaringan, dan kolaborasi organisasi."
  - 4 Interactive Contact Action Pills:
    - `Email: varelaglinsibulo@gmail.com`
    - `WhatsApp: +62 812-4153-8880`
    - `GitHub: github.com/varelaglinsibulo-droid`
    - `LinkedIn: Varel Aglin Sibulo`
- **Minimal Footer:**
  - Left: `© 2026 Varel Aglin Sibulo — NIM 202531063`
  - Right: `S-1 Teknik Informatika · Institut Teknologi PLN`
```

---

## Prompt Tambahan untuk Iterasi di Google Stitch

Gunakan prompt pendek ini di kolom *chat/edit* Stitch jika setelah generate pertama kamu ingin menyempurnakan bagian tertentu:

### 1. Mempercantik Hero Telemetry Card
```text
Refine the Hero right-hand card to look like a luxury wealth-management telemetry widget. Add a glowing emerald SVG area chart curve with gradient fill underneath, crisp monospace labels for GPA 3.71, 4+ Seminars, and 2x Champion, and make the circular profile avatar frame sharp with a subtle emerald outer ring.
```

### 2. Mengubah Tampilan Mobile (Responsive Check)
```text
Create a mobile responsive version (375px width) of this portfolio. Collapse the top navigation links into a clean hamburger button while keeping the "VA." logo and "Get in Touch" pill visible, stack the Hero 2-column grid vertically, and ensure all Bento cards have comfortable 20px padding without horizontal overflow.
```

### 3. Menambah Efek Hover & Micro-Interactions saat Export Kode
```text
Ensure the exported HTML/CSS includes smooth CSS transitions: cards lift slightly (-4px) with an emerald border glow on hover, navigation links smoothly scroll to sections, and clicking the email contact pill copies "varelaglinsibulo@gmail.com" to clipboard with a small confirmation toast.
```