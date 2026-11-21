import { GraduationCap } from 'lucide-react';
import { EDUCATION_TIMELINE, PROFILE } from '../data/portfolioData';

export function AboutEducationSection() {
  return (
    <section id="about" className="w-full py-16 flex flex-col gap-8 scroll-mt-24">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[11px] font-semibold text-[#6ffbbe] uppercase tracking-[0.12em]">
          01 / BACKGROUND
        </span>
        <h2 className="text-[28px] sm:text-[36px] leading-[1.2] tracking-[-0.02em] font-bold text-[#e0e3e1]">
          Academic Foundation &amp; Discipline
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Card: About Me */}
        <div className="lg:col-span-6 p-7 sm:p-8 rounded-2xl bg-[#181c1b] border border-white/[0.06] flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#1c201f] border border-white/[0.05] flex items-center justify-center text-[#4edea3]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-[24px] font-semibold tracking-[-0.01em] text-[#e0e3e1]">
              About Me
            </h3>
            <p className="text-[15px] leading-[1.65] text-[#bbcabf]">
              {PROFILE.aboutSummary1}
            </p>
            <p className="text-[15px] leading-[1.65] text-[#bbcabf]">
              {PROFILE.aboutSummary2}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
            {PROFILE.pillars.map((pillar) => (
              <span
                key={pillar}
                className="px-3.5 py-1.5 rounded-full bg-[#313634]/80 text-[#6ffbbe] font-mono text-[12px] font-medium whitespace-nowrap"
              >
                {pillar}
              </span>
            ))}
          </div>
        </div>

        {/* Right Card: Pendidikan Formal */}
        <div className="lg:col-span-6 p-7 sm:p-8 rounded-2xl bg-[#181c1b] border border-white/[0.06] flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-[24px] font-semibold tracking-[-0.01em] text-[#e0e3e1]">
              Pendidikan Formal
            </h3>
            <span className="font-mono text-[13px] text-[#bbcabf] whitespace-nowrap">
              2014 — Present
            </span>
          </div>

          <div className="relative pl-7 flex flex-col gap-7 before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#313634]">
            {EDUCATION_TIMELINE.map((edu) => (
              <div key={edu.institution} className="relative flex flex-col gap-1">
                <span
                  className={`absolute -left-[25px] top-1.5 w-3.5 h-3.5 rounded-full ${
                    edu.active
                      ? 'bg-[#10b981] shadow-[0_0_12px_rgba(16,185,129,0.9)]'
                      : 'bg-[#313634] border border-white/10'
                  }`}
                />
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`font-mono text-[11px] font-semibold tracking-[0.08em] ${
                      edu.active ? 'text-[#6ffbbe]' : 'text-[#bbcabf]'
                    }`}
                  >
                    {edu.period}
                  </span>
                  {edu.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#10b981]/20 text-[#6ffbbe] font-mono text-[10px] font-semibold">
                      {edu.badge}
                    </span>
                  )}
                </div>
                <h4 className="text-[18px] font-bold text-[#e0e3e1] tracking-tight">
                  {edu.institution}
                </h4>
                <p className="text-[13px] text-[#bbcabf]">{edu.program}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
