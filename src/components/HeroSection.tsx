import { useState } from 'react';
import { ArrowRight, Terminal, Link2, TrendingUp } from 'lucide-react';
import { PORTRAIT_URL, PROFILE, TELEMETRY_TABS, TICKER_ITEMS, type TelemetryTabData } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCv: () => void;
  onJumpToLinkedin: () => void;
}

export function HeroSection({ onOpenCv, onJumpToLinkedin }: HeroSectionProps) {
  const [activeTabId, setActiveTabId] = useState<TelemetryTabData['id']>('ai');
  const [hoveredPointIdx, setHoveredPointIdx] = useState<number | null>(null);
  const [imgError, setImgError] = useState(false);

  const activeTab = TELEMETRY_TABS.find((t) => t.id === activeTabId) ?? TELEMETRY_TABS[0];
  const lastPoint = activeTab.points[activeTab.points.length - 1];
  const inspectedPoint = hoveredPointIdx !== null ? activeTab.points[hoveredPointIdx] : null;

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="top" className="w-full pt-28 pb-10 lg:pt-32 lg:pb-14 flex flex-col gap-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column (Value Proposition) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#262b2a]/85 border border-white/[0.06] shadow-[0_0_16px_rgba(16,185,129,0.12)]">
            <span className="font-mono text-[11px] font-semibold tracking-[0.08em] text-[#6ffbbe] uppercase">
              {PROFILE.availabilityText}
            </span>
          </div>

          {/* Main Headline */}
          <div className="flex flex-col gap-2">
            <h1 className="text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.12] tracking-[-0.03em] font-extrabold text-[#e0e3e1]">
              {PROFILE.name}
            </h1>
            <p className="text-[24px] sm:text-[30px] lg:text-[36px] leading-[1.2] tracking-[-0.02em] font-bold bg-gradient-to-r from-[#6ffbbe] via-[#e0e3e1] to-[#bbcabf] bg-clip-text text-transparent">
              {PROFILE.headlineSub}
            </p>
          </div>

          {/* Bio */}
          <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#bbcabf] max-w-2xl">
            {PROFILE.heroBio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#10b981] hover:bg-[#4edea3] text-[#003824] text-[15px] font-bold whitespace-nowrap shrink-0 shadow-[0_0_24px_rgba(16,185,129,0.28)] hover:shadow-[0_0_32px_rgba(16,185,129,0.45)] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6ffbbe]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-[18px] h-[18px]" />
            </button>

            <button
              type="button"
              onClick={onOpenCv}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#262b2a] hover:bg-[#313634] border border-white/[0.08] text-[#e0e3e1] text-[15px] font-semibold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4edea3]"
            >
              <span>View CV &amp; Contact</span>
            </button>

            <div className="flex items-center gap-2 pl-1">
              <a
                href={PROFILE.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
                aria-label="GitHub Repository"
                className="w-11 h-11 rounded-full bg-[#1c201f] hover:bg-[#262b2a] border border-white/[0.06] flex items-center justify-center text-[#bbcabf] hover:text-[#4edea3] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4edea3]"
              >
                <Terminal className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={onJumpToLinkedin}
                title="LinkedIn & Direct Connect"
                aria-label="LinkedIn & Direct Connect"
                className="w-11 h-11 rounded-full bg-[#1c201f] hover:bg-[#262b2a] border border-white/[0.06] flex items-center justify-center text-[#bbcabf] hover:text-[#4edea3] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4edea3]"
              >
                <Link2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Wealthcore Profile Telemetry Dashboard Card) */}
        <div className="lg:col-span-5 w-full">
          <div className="w-full p-6 md:p-7 rounded-2xl bg-[#181c1b] border border-[#10b981]/30 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.7),0_0_24px_-2px_rgba(16,185,129,0.16)] flex flex-col gap-6">
            {/* Header row */}
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#bbcabf]">
                PROFILE TELEMETRY
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#10b981]/15 font-mono text-[12px] font-semibold text-[#6ffbbe] whitespace-nowrap">
                ITPLN &apos;25
              </span>
            </div>

            {/* Profile row */}
            <div className="flex items-center gap-4">
              <div className="relative w-[72px] h-[72px] shrink-0 rounded-full p-[3px] bg-gradient-to-tr from-[#4edea3] via-[#262b2a] to-[#e9c349]">
                <div className="w-full h-full rounded-full bg-[#313634] flex items-center justify-center overflow-hidden">
                  {!imgError ? (
                    <img
                      src={PORTRAIT_URL}
                      alt={PROFILE.name}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-[50%_45%] scale-[2.1] origin-[50%_45%] rounded-full"
                    />
                  ) : (
                    <span className="font-sans text-lg font-bold text-[#6ffbbe]">
                      {PROFILE.monogram}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[20px] sm:text-[22px] font-bold tracking-tight text-[#e0e3e1] truncate">
                  {PROFILE.name}
                </span>
                <span className="font-mono text-[12px] sm:text-[13px] text-[#bbcabf] truncate">
                  NIM {PROFILE.nim} · {PROFILE.major}
                </span>
              </div>
            </div>

            {/* 3-Column Key Metrics Strip */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#262b2a]/85 border border-white/[0.04] flex flex-col items-center text-center">
                <span className="font-mono tabular-nums text-[24px] sm:text-[26px] leading-tight font-bold text-[#6ffbbe]">
                  {PROFILE.gpa}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.06em] text-[#bbcabf] mt-1">
                  Current GPA
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#262b2a]/85 border border-white/[0.04] flex flex-col items-center text-center">
                <span className="font-mono tabular-nums text-[24px] sm:text-[26px] leading-tight font-bold text-[#e0e3e1]">
                  {PROFILE.seminars}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.06em] text-[#bbcabf] mt-1">
                  Tech Seminars
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#262b2a]/85 border border-[#e9c349]/20 shadow-[0_0_20px_rgba(233,195,73,0.08)] flex flex-col items-center text-center">
                <span className="font-mono tabular-nums text-[24px] sm:text-[26px] leading-tight font-bold text-[#e9c349]">
                  {PROFILE.championships}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.06em] text-[#ffe088] mt-1">
                  Basket Champ
                </span>
              </div>
            </div>

            {/* Interactive Focus Sparkline Widget */}
            <div className="p-4 rounded-xl bg-[#1c201f] border border-white/[0.05] flex flex-col gap-3">
              <div className="flex items-center justify-between gap-1.5 overflow-x-auto pb-1">
                {TELEMETRY_TABS.map((tab) => {
                  const isActive = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setActiveTabId(tab.id);
                        setHoveredPointIdx(null);
                      }}
                      className={`px-2.5 py-1 rounded-md font-mono text-[12px] font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4edea3] ${
                        isActive
                          ? 'bg-[#313634] text-[#6ffbbe]'
                          : 'bg-[#1c201f] text-[#bbcabf] hover:text-[#e0e3e1] hover:bg-[#262b2a]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Interactive SVG Area Line Chart */}
              <div className="relative w-full h-24 pt-2">
                <svg
                  className="w-full h-full overflow-visible"
                  fill="none"
                  viewBox="0 0 320 80"
                  aria-label={`${activeTab.label} trajectory chart`}
                >
                  <defs>
                    <linearGradient id={`metricGradient-${activeTab.id}`} x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="25" x2="320" y2="25" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                  <line x1="0" y1="55" x2="320" y2="55" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                  <path d={activeTab.areaPath} fill={`url(#metricGradient-${activeTab.id})`} />
                  <path
                    d={activeTab.linePath}
                    stroke="#10B981"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  {activeTab.points.map((pt, idx) => {
                    const isFocused = hoveredPointIdx === idx || (hoveredPointIdx === null && idx === activeTab.points.length - 1);
                    return (
                      <g key={pt.milestone}>
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={isFocused ? 5 : 3}
                          fill={isFocused ? '#6ffbbe' : '#10b981'}
                          className="transition-all duration-150"
                        />
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={14}
                          fill="transparent"
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredPointIdx(idx)}
                          onMouseLeave={() => setHoveredPointIdx(null)}
                          onClick={() => setHoveredPointIdx(idx)}
                        />
                      </g>
                    );
                  })}
                </svg>

                {inspectedPoint && (
                  <div className="absolute top-0 right-0 px-2.5 py-1 rounded-md bg-[#0b0f0e]/90 border border-[#10b981]/30 font-mono text-[11px] text-[#6ffbbe] pointer-events-none">
                    {inspectedPoint.milestone}: {inspectedPoint.metric}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-3 text-[#bbcabf] font-mono text-[12px]">
                <span className="truncate" title={activeTab.caption}>
                  {inspectedPoint ? `${inspectedPoint.milestone} (${inspectedPoint.metric})` : activeTab.caption}
                </span>
                <span className="text-[#6ffbbe] flex items-center gap-1 font-semibold whitespace-nowrap shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {activeTab.growthLabel}
                </span>
              </div>
              <div className="sr-only">
                Latest milestone: {lastPoint.milestone} at {lastPoint.metric}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Hero Ticker Bar */}
      <div className="w-full py-3.5 overflow-hidden bg-[#181c1b] border border-white/[0.06] rounded-xl">
        <div className="flex items-center whitespace-nowrap w-max animate-marquee font-mono text-[12px] tracking-[0.06em] text-[#bbcabf]">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <span key={`${item}-${idx}`} className="flex items-center gap-2.5 px-5">
              <span className="text-[#4edea3]" aria-hidden="true">♦</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
