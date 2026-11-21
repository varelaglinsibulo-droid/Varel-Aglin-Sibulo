import { useState } from 'react';
import { Terminal, BrainCircuit, Users } from 'lucide-react';
import { EMERGING_INTERESTS, SOFT_SKILLS, TECHNICAL_SKILLS } from '../data/portfolioData';

export function SkillsSection() {
  const [selectedSoftSkill, setSelectedSoftSkill] = useState<string>(SOFT_SKILLS[0].name);
  const activeSoftSkill =
    SOFT_SKILLS.find((s) => s.name === selectedSoftSkill) ?? SOFT_SKILLS[0];

  return (
    <section id="skills" className="w-full py-16 flex flex-col gap-8 scroll-mt-24">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[11px] font-semibold text-[#6ffbbe] uppercase tracking-[0.12em]">
          04 / CAPABILITIES
        </span>
        <h2 className="text-[28px] sm:text-[36px] leading-[1.2] tracking-[-0.02em] font-bold text-[#e0e3e1]">
          Technical Stack &amp; Core Strengths
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Card 1: Technical & Computing */}
        <div className="p-7 sm:p-8 rounded-2xl bg-[#181c1b] border border-white/[0.06] flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-[#4edea3]" />
            <h3 className="text-[18px] font-bold text-[#e0e3e1]">Technical &amp; Computing</h3>
          </div>

          <div className="flex flex-col gap-5">
            {TECHNICAL_SKILLS.map((skill) => (
              <div key={skill.name} className="flex flex-col gap-2">
                <div className="flex justify-between font-mono text-[13px]">
                  <span className="text-[#e0e3e1]">{skill.name}</span>
                  <span className="text-[#6ffbbe] tabular-nums">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#313634] overflow-hidden">
                  <div
                    className="h-full bg-[#10b981] rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: Emerging Tech Interests */}
        <div className="p-7 sm:p-8 rounded-2xl bg-[#181c1b] border border-white/[0.06] flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <BrainCircuit className="w-5 h-5 text-[#4edea3]" />
            <h3 className="text-[18px] font-bold text-[#e0e3e1]">Emerging Tech Interests</h3>
          </div>

          <div className="flex flex-col gap-4">
            {EMERGING_INTERESTS.map((interest) => (
              <div
                key={interest.title}
                className="p-4 rounded-xl bg-[#1c201f] border border-white/[0.06] hover:border-[#10b981]/35 transition-colors flex flex-col gap-1.5"
              >
                <span className="text-[15px] font-bold text-[#e0e3e1]">{interest.title}</span>
                <p className="text-[13px] leading-[1.55] text-[#bbcabf]">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Leadership & Soft Skills */}
        <div className="p-7 sm:p-8 rounded-2xl bg-[#181c1b] border border-white/[0.06] flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#4edea3]" />
              <h3 className="text-[18px] font-bold text-[#e0e3e1]">Leadership &amp; Soft Skills</h3>
            </div>
            <p className="text-[13px] leading-[1.6] text-[#bbcabf]">
              Terbukti melalui rekam jejak memimpin kepanitiaan besar, pengelolaan dana program kerja, dan ketahanan berolahraga kompetitif. Klik salah satu keahlian untuk melihat bukti lapangan:
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((skill) => {
                const isActive = skill.name === selectedSoftSkill;
                return (
                  <button
                    key={skill.name}
                    type="button"
                    onClick={() => setSelectedSoftSkill(skill.name)}
                    className={`px-3.5 py-1.5 rounded-full font-mono text-[12px] whitespace-nowrap cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4edea3] ${
                      isActive
                        ? 'bg-[#10b981]/20 text-[#6ffbbe] border border-[#10b981]/45'
                        : 'bg-[#313634] text-[#e0e3e1] hover:text-[#4edea3] border border-transparent'
                    }`}
                  >
                    {skill.name}
                  </button>
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl bg-[#1c201f] border border-white/[0.06]">
              <span className="block font-mono text-[10px] uppercase tracking-[0.08em] text-[#6ffbbe] mb-1">
                VERIFIED CONTEXT · {activeSoftSkill.name}
              </span>
              <p className="text-[12.5px] leading-relaxed text-[#bbcabf]">
                {activeSoftSkill.evidence}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
