import { BadgeCheck, Wallet, Dumbbell, Megaphone, Trophy, Activity } from 'lucide-react';
import { EXPERIENCES, type ExperienceItem } from '../data/portfolioData';

function ExperienceIcon({ name }: { name: ExperienceItem['iconName'] }) {
  switch (name) {
    case 'verified':
      return <BadgeCheck className="w-4 h-4" />;
    case 'payments':
      return <Wallet className="w-4 h-4" />;
    case 'fitness':
      return <Dumbbell className="w-4 h-4" />;
    case 'campaign':
      return <Megaphone className="w-4 h-4" />;
    case 'basketball':
      return <Trophy className="w-4 h-4" />;
    case 'soccer':
      return <Activity className="w-4 h-4" />;
  }
}

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 flex flex-col gap-8 scroll-mt-24">
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[11px] font-semibold text-[#6ffbbe] uppercase tracking-[0.12em]">
          02 / LEADERSHIP &amp; ACTIVITIES
        </span>
        <h2 className="text-[28px] sm:text-[36px] leading-[1.2] tracking-[-0.02em] font-bold text-[#e0e3e1]">
          Organizations &amp; Campus Involvement
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERIENCES.map((item) => {
          const isGold = item.accent === 'gold';
          const isNeutral = item.accent === 'neutral';

          const categoryColor = isGold
            ? 'text-[#e9c349]'
            : isNeutral
            ? 'text-[#bbcabf]'
            : 'text-[#6ffbbe]';

          const footerColor = isGold
            ? 'text-[#e9c349]'
            : isNeutral
            ? 'text-[#bbcabf]'
            : 'text-[#4edea3]';

          const hoverTitleColor = isGold
            ? 'group-hover:text-[#e9c349]'
            : 'group-hover:text-[#4edea3]';

          return (
            <article
              key={`${item.role}-${item.period}`}
              className="p-6 rounded-2xl bg-[#181c1b] hover:bg-[#1c201f] border border-white/[0.06] hover:border-[#10b981]/30 transition-all duration-200 flex flex-col justify-between gap-5 group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`font-mono text-[11px] font-semibold uppercase tracking-[0.08em] ${categoryColor}`}>
                    {item.category}
                  </span>
                  <span className="font-mono text-[12px] text-[#bbcabf] whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                <h3 className={`text-[18px] font-bold text-[#e0e3e1] transition-colors ${hoverTitleColor}`}>
                  {item.role}
                </h3>

                <span className="font-mono text-[12px] text-[#bbcabf]">
                  {item.organization}
                </span>

                <p className="text-[13px] leading-[1.6] text-[#bbcabf]">
                  {item.description}
                </p>
              </div>

              <div className={`pt-2 flex items-center gap-2 font-mono text-[12px] font-medium ${footerColor}`}>
                <ExperienceIcon name={item.iconName} />
                <span>{item.footerLabel}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
