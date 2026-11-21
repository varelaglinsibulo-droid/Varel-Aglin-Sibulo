import { useState } from 'react';
import { Trophy, Award, FileCheck2, Eye, Download, X, ExternalLink, ShieldCheck } from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATES, type CertificateItem } from '../data/portfolioData';

export function AchievementsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="achievements" className="w-full py-16 flex flex-col gap-10 scroll-mt-24">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[11px] font-semibold text-[#e9c349] uppercase tracking-[0.12em]">
          05 / HONORS &amp; CREDENTIALS
        </span>
        <h2 className="text-[28px] sm:text-[36px] leading-[1.2] tracking-[-0.02em] font-bold text-[#e0e3e1]">
          Achievements &amp; Verified Certificates
        </h2>
      </div>

      {/* 2-Column Gold Championship Honors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ACHIEVEMENTS.map((honor) => (
          <article
            key={honor.title}
            className="p-7 sm:p-8 rounded-2xl bg-[#181c1b] hover:bg-[#1c201f] border border-[#e9c349]/20 shadow-[0_0_32px_rgba(212,175,55,0.06)] flex flex-col justify-between gap-6 group transition-all duration-200"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-[#1c201f] border border-[#e9c349]/25 flex items-center justify-center shrink-0 text-[#e9c349] shadow-[0_0_20px_rgba(212,175,55,0.12)]">
                {honor.iconName === 'trophy' ? (
                  <Trophy className="w-7 h-7" />
                ) : (
                  <Award className="w-7 h-7" />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] font-semibold text-[#e9c349] uppercase tracking-[0.1em]">
                  {honor.rankLabel}
                </span>
                <h3 className="text-[18px] font-bold text-[#e0e3e1] group-hover:text-[#ffe088] transition-colors">
                  {honor.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-[#bbcabf]">
                  {honor.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#313634] font-mono text-[13px] text-[#bbcabf]">
              <span>{honor.scope}</span>
              <span className="text-[#e9c349] font-semibold tabular-nums">{honor.year}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Verified Seminar & Workshop Certificates */}
      <div className="flex flex-col gap-5 pt-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#4edea3]" />
            <h3 className="text-[20px] sm:text-[22px] font-bold text-[#e0e3e1] tracking-tight">
              Verified Seminar &amp; Workshop Certificates
            </h3>
          </div>
          <span className="font-mono text-[12px] text-[#bbcabf]">
            {CERTIFICATES.length} Official PDF Documents
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert) => (
            <article
              key={cert.id}
              className="rounded-2xl bg-[#181c1b] hover:bg-[#1c201f] border border-white/[0.07] hover:border-[#10b981]/35 transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              {/* Certificate Image Thumbnail Header */}
              <div className="relative w-full aspect-[16/10] bg-[#0b0f0e] border-b border-white/[0.06] overflow-hidden">
                <img
                  src={cert.previewImageUrl}
                  alt={`Sertifikat ${cert.title}`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181c1b] via-transparent to-black/30 pointer-events-none" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0b0f0e]/85 border border-white/[0.1] font-mono text-[10px] font-semibold text-[#6ffbbe] uppercase tracking-wider">
                  {cert.category}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  aria-label={`Inspect ${cert.title} certificate`}
                  className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/0 hover:bg-black/45 transition-colors cursor-pointer group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4edea3]"
                >
                  <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#10b981] text-[#003824] font-mono text-[12px] font-bold shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </span>
                </button>
              </div>

              {/* Certificate Metadata Body */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-[#bbcabf]">
                    <span>{cert.date}</span>
                    <span className="text-[#4edea3]">{cert.role}</span>
                  </div>

                  <h4 className="text-[17px] font-bold text-[#e0e3e1] leading-snug group-hover:text-[#6ffbbe] transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-[13px] text-[#bbcabf] leading-relaxed">
                    {cert.theme}
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-3 border-t border-white/[0.06]">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#86948a] truncate" title={cert.issuer}>
                    <FileCheck2 className="w-3.5 h-3.5 text-[#4edea3] shrink-0" />
                    <span className="truncate">{cert.issuer}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#262b2a] hover:bg-[#313634] text-[#e0e3e1] hover:text-[#6ffbbe] font-mono text-[11px] font-semibold cursor-pointer transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview PDF</span>
                    </button>

                    <a
                      href={cert.pdfUrl}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1c201f] hover:bg-[#262b2a] border border-white/[0.06] text-[#bbcabf] hover:text-[#e0e3e1] font-mono text-[11px] transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox / PDF Viewer Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="w-full max-w-4xl rounded-2xl bg-[#181c1b] border border-[#10b981]/35 shadow-2xl p-5 sm:p-7 flex flex-col gap-5 max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="font-mono text-[11px] font-semibold text-[#6ffbbe] uppercase tracking-[0.1em]">
                  {selectedCert.category} · {selectedCert.date}
                </span>
                <h3 id="cert-modal-title" className="text-[20px] sm:text-[22px] font-bold text-[#e0e3e1] truncate">
                  {selectedCert.title}
                </h3>
                <p className="font-mono text-[12px] text-[#bbcabf] truncate">
                  {selectedCert.issuer} · {selectedCert.certificateNumber}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
                className="w-9 h-9 rounded-full bg-[#262b2a] hover:bg-[#313634] text-[#e0e3e1] flex items-center justify-center shrink-0 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="w-full max-h-[64vh] rounded-xl bg-[#0b0f0e] border border-white/[0.08] overflow-hidden flex items-center justify-center p-2 sm:p-4">
              <img
                src={selectedCert.previewImageUrl}
                alt={`Foto Sertifikat ${selectedCert.title}`}
                className="w-full h-full max-h-[58vh] object-contain rounded-lg"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/[0.06]">
              <span className="font-mono text-[11px] text-[#bbcabf]">
                {selectedCert.verificationNote}
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#262b2a] hover:bg-[#313634] text-[#e0e3e1] font-mono text-[12px] font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Tab</span>
                </a>
                <a
                  href={selectedCert.pdfUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#10b981] hover:bg-[#4edea3] text-[#003824] font-mono text-[12px] font-bold transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

