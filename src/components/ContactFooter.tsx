import { useState, type FormEvent } from 'react';
import {
  Mail,
  MessageSquare,
  Code2,
  BadgeCheck,
  ArrowRight,
  Copy,
  Check,
  Send,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ContactFooterProps {
  showConnectPanel: boolean;
  onToggleConnectPanel: (open?: boolean) => void;
}

export function ContactFooter({ showConnectPanel, onToggleConnectPanel }: ContactFooterProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderTopic, setSenderTopic] = useState('IT Internship / Collaboration');
  const [messageBody, setMessageBody] = useState('');
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      // Fallback: trigger mailto if clipboard is unavailable
      window.location.href = `mailto:${PROFILE.contact.email}`;
    }
  };

  const handleSendInquiry = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${senderTopic} — ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Halo Varel,\n\nNama: ${senderName || '-'}\nTopik: ${senderTopic}\n\n${messageBody}\n`
    );
    window.location.href = `mailto:${PROFILE.contact.email}?subject=${subject}&body=${body}`;
    setSubmittedNotice(true);
    setTimeout(() => setSubmittedNotice(false), 3500);
  };

  return (
    <>
      <section id="contact" className="w-full py-16 scroll-mt-24">
        <div className="w-full p-8 md:p-14 rounded-3xl bg-[#181c1b] border border-[#10b981]/30 shadow-[0_16px_48px_-8px_rgba(0,0,0,0.8),0_0_36px_rgba(16,185,129,0.16)] flex flex-col items-center text-center gap-8 relative overflow-hidden">
          {/* Ambient emerald glow top center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#10b981]/15 blur-3xl pointer-events-none rounded-full" />

          <div className="flex flex-col items-center gap-3 relative z-10">
            <span className="font-mono text-[11px] font-semibold text-[#6ffbbe] uppercase tracking-[0.12em]">
              06 / INITIATE CONTACT
            </span>
            <h2 className="text-[32px] md:text-[48px] leading-[1.15] font-extrabold text-[#e0e3e1] tracking-[-0.03em] max-w-2xl">
              Let&apos;s Build &amp; Collaborate.
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#bbcabf] max-w-xl">
              Terbuka untuk peluang magang IT, proyek studi pengembangan perangkat lunak/jaringan, dan kolaborasi organisasi.
            </p>
          </div>

          {/* 4 Interactive Contact Action Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl relative z-10">
            {/* Email Tile (with copy & mailto) */}
            <div className="p-4 rounded-xl bg-[#1c201f] hover:bg-[#262b2a] border border-white/[0.06] flex items-center justify-between text-left transition-all duration-200 group gap-2">
              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="flex items-center gap-3 min-w-0 flex-1"
              >
                <Mail className="w-5 h-5 text-[#4edea3] shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[11px] font-semibold text-[#bbcabf]">EMAIL</span>
                  <span className="font-mono text-[13px] text-[#e0e3e1] truncate group-hover:text-[#4edea3] transition-colors">
                    {PROFILE.contact.email}
                  </span>
                </div>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copy email address"
                aria-label="Copy email address"
                className="px-2.5 py-1.5 rounded-lg bg-[#262b2a] hover:bg-[#313634] text-[#bbcabf] hover:text-[#6ffbbe] font-mono text-[11px] inline-flex items-center gap-1 shrink-0 cursor-pointer transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#4edea3]" />
                    <span className="text-[#4edea3]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp Tile */}
            <a
              href={PROFILE.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#1c201f] hover:bg-[#262b2a] border border-white/[0.06] flex items-center justify-between text-left transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <MessageSquare className="w-5 h-5 text-[#4edea3] shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[11px] font-semibold text-[#bbcabf]">WHATSAPP</span>
                  <span className="font-mono text-[13px] text-[#e0e3e1] truncate group-hover:text-[#4edea3] transition-colors">
                    {PROFILE.contact.whatsappDisplay}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-[18px] h-[18px] text-[#bbcabf] group-hover:text-[#4edea3] group-hover:translate-x-1 transition-all shrink-0" />
            </a>

            {/* GitHub Tile */}
            <a
              href={PROFILE.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#1c201f] hover:bg-[#262b2a] border border-white/[0.06] flex items-center justify-between text-left transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <Code2 className="w-5 h-5 text-[#4edea3] shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[11px] font-semibold text-[#bbcabf]">GITHUB</span>
                  <span className="font-mono text-[13px] text-[#e0e3e1] truncate group-hover:text-[#4edea3] transition-colors">
                    {PROFILE.contact.githubHandle}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-[18px] h-[18px] text-[#bbcabf] group-hover:text-[#4edea3] group-hover:translate-x-1 transition-all shrink-0" />
            </a>

            {/* LinkedIn / Quick Inquiry Trigger Tile */}
            <button
              type="button"
              onClick={() => onToggleConnectPanel()}
              className="p-4 rounded-xl bg-[#1c201f] hover:bg-[#262b2a] border border-white/[0.06] flex items-center justify-between text-left transition-all duration-200 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4edea3]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <BadgeCheck className="w-5 h-5 text-[#4edea3] shrink-0" />
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[11px] font-semibold text-[#bbcabf]">
                    LINKEDIN · DIRECT MESSAGE
                  </span>
                  <span className="font-mono text-[13px] text-[#e0e3e1] truncate group-hover:text-[#4edea3] transition-colors">
                    {PROFILE.contact.linkedinName}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-[18px] h-[18px] text-[#bbcabf] group-hover:text-[#4edea3] group-hover:translate-x-1 transition-all shrink-0" />
            </button>
          </div>

          {/* Expandable Direct Collaboration Form */}
          {showConnectPanel && (
            <form
              onSubmit={handleSendInquiry}
              className="w-full max-w-3xl p-6 rounded-2xl bg-[#0b0f0e]/75 border border-white/[0.08] text-left flex flex-col gap-4 relative z-10"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6ffbbe]">
                  Compose Collaboration Inquiry
                </span>
                <button
                  type="button"
                  onClick={() => onToggleConnectPanel(false)}
                  className="font-mono text-[11px] text-[#bbcabf] hover:text-[#e0e3e1] cursor-pointer"
                >
                  Hide
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] text-[#bbcabf]">Your Name / Organization</span>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Tech Hiring Team"
                    className="px-3.5 py-2.5 rounded-lg bg-[#181c1b] border border-white/[0.1] text-[#e0e3e1] text-[14px] placeholder:text-[#86948a] focus:outline-none focus:border-[#10b981]"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] text-[#bbcabf]">Collaboration Topic</span>
                  <select
                    value={senderTopic}
                    onChange={(e) => setSenderTopic(e.target.value)}
                    className="px-3.5 py-2.5 rounded-lg bg-[#181c1b] border border-white/[0.1] text-[#e0e3e1] text-[14px] focus:outline-none focus:border-[#10b981]"
                  >
                    <option value="IT Internship / Collaboration">IT Internship / Collaboration</option>
                    <option value="Software & UI/UX Project">Software &amp; UI/UX Project</option>
                    <option value="Network Configuration / Lab">Network Configuration / Lab</option>
                    <option value="Student Organization Initiative">Student Organization Initiative</option>
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] text-[#bbcabf]">Message</span>
                <textarea
                  rows={3}
                  required
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  placeholder="Tuliskan detail peluang magang, proyek, atau kolaborasi..."
                  className="px-3.5 py-2.5 rounded-lg bg-[#181c1b] border border-white/[0.1] text-[#e0e3e1] text-[14px] placeholder:text-[#86948a] focus:outline-none focus:border-[#10b981]"
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <span className="font-mono text-[11px] text-[#86948a]">
                  {submittedNotice
                    ? 'Email client opened with your structured inquiry.'
                    : `Direct delivery to ${PROFILE.contact.email}`}
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#10b981] hover:bg-[#4edea3] text-[#003824] text-[13px] font-bold cursor-pointer transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <footer className="relative z-10 w-full bg-[#0b0f0e] border-t border-white/[0.05] py-8 mt-6">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[13px] text-[#bbcabf]">
          <div className="flex items-center gap-2">
            <span>© 2026 {PROFILE.name}</span>
            <span className="opacity-40">—</span>
            <span>NIM {PROFILE.nim}</span>
          </div>
          <div>
            <span>
              {PROFILE.major} · {PROFILE.university}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
