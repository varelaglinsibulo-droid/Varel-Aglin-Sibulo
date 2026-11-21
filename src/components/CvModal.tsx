import { X, Printer, Mail, Phone, ExternalLink } from 'lucide-react';
import {
  ACHIEVEMENTS,
  CERTIFICATES,
  EDUCATION_TIMELINE,
  EXPERIENCES,
  PROFILE,
  TECHNICAL_SKILLS,
} from '../data/portfolioData';

interface CvModalProps {
  open: boolean;
  onClose: () => void;
  onJumpToContact: () => void;
}

export function CvModal({ open, onClose, onJumpToContact }: CvModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#181c1b] border border-[#10b981]/30 shadow-2xl p-6 sm:p-8 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/[0.08]">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] font-semibold text-[#6ffbbe] uppercase tracking-[0.1em]">
              CURRICULUM VITAE · ACADEMIC SUMMARY
            </span>
            <h2 id="cv-modal-title" className="text-[24px] sm:text-[28px] font-extrabold text-[#e0e3e1]">
              {PROFILE.name}
            </h2>
            <p className="font-mono text-[12px] text-[#bbcabf]">
              NIM {PROFILE.nim} · {PROFILE.major} · {PROFILE.university} (IPK {PROFILE.gpa})
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#262b2a] hover:bg-[#313634] text-[#e0e3e1] font-mono text-[12px] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print CV</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV modal"
              className="w-9 h-9 rounded-full bg-[#262b2a] hover:bg-[#313634] text-[#e0e3e1] flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-wrap gap-4 text-[12.5px] font-mono text-[#bbcabf]">
          <a href={`mailto:${PROFILE.contact.email}`} className="inline-flex items-center gap-1.5 hover:text-[#4edea3]">
            <Mail className="w-3.5 h-3.5 text-[#4edea3]" />
            <span>{PROFILE.contact.email}</span>
          </a>
          <a href={PROFILE.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#4edea3]">
            <Phone className="w-3.5 h-3.5 text-[#4edea3]" />
            <span>{PROFILE.contact.whatsappDisplay}</span>
          </a>
          <a href={PROFILE.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#4edea3]">
            <ExternalLink className="w-3.5 h-3.5 text-[#4edea3]" />
            <span>github.com/{PROFILE.contact.githubHandle}</span>
          </a>
        </div>

        {/* Two-column CV overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6ffbbe]">
                Pendidikan Formal
              </h3>
              <div className="flex flex-col gap-3">
                {EDUCATION_TIMELINE.map((edu) => (
                  <div key={edu.institution} className="p-3 rounded-xl bg-[#1c201f] border border-white/[0.05]">
                    <div className="font-mono text-[11px] text-[#86948a]">{edu.period}</div>
                    <div className="text-[14px] font-bold text-[#e0e3e1]">{edu.institution}</div>
                    <div className="text-[12px] text-[#bbcabf]">{edu.program}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6ffbbe]">
                Sertifikat Seminar &amp; Workshop
              </h3>
              {CERTIFICATES.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#1c201f] hover:bg-[#262b2a] border border-white/[0.05] flex items-center justify-between gap-2 transition-colors"
                >
                  <div className="min-w-0">
                    <div className="text-[13px] font-semibold text-[#e0e3e1] truncate">{cert.title}</div>
                    <div className="font-mono text-[11px] text-[#86948a] truncate">
                      {cert.issuer} · {cert.date}
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#4edea3] shrink-0" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6ffbbe]">
                Organisasi &amp; Aktivitas Terpilih
              </h3>
              {EXPERIENCES.slice(0, 4).map((exp) => (
                <div key={exp.role} className="p-3 rounded-xl bg-[#1c201f] border border-white/[0.05]">
                  <div className="flex justify-between gap-2 font-mono text-[11px] text-[#86948a]">
                    <span>{exp.category}</span>
                    <span>{exp.period}</span>
                  </div>
                  <div className="text-[14px] font-bold text-[#e0e3e1]">{exp.role}</div>
                  <div className="text-[12px] text-[#bbcabf]">{exp.organization}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#e9c349]">
                Prestasi Kejuaraan
              </h3>
              {ACHIEVEMENTS.map((ach) => (
                <div key={ach.title} className="text-[12.5px] text-[#bbcabf] flex justify-between gap-2">
                  <span>{ach.title}</span>
                  <span className="font-mono text-[#e9c349] shrink-0">{ach.year}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6ffbbe]">
                Keahlian Teknis
              </h3>
              <div className="text-[12.5px] text-[#bbcabf]">
                {TECHNICAL_SKILLS.map((s) => `${s.name} (${s.level}%)`).join(' · ')}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full bg-[#262b2a] hover:bg-[#313634] text-[#e0e3e1] text-[13px] font-semibold cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onJumpToContact();
            }}
            className="px-5 py-2 rounded-full bg-[#10b981] hover:bg-[#4edea3] text-[#003824] text-[13px] font-bold cursor-pointer"
          >
            Proceed to Contact
          </button>
        </div>
      </div>
    </div>
  );
}
