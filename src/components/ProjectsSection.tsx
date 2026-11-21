import { useState } from 'react';
import { ArrowUpRight, Layers, X, CheckCircle2 } from 'lucide-react';
import { PROJECTS, type ProjectCategory, type ProjectItem } from '../data/portfolioData';

const FILTER_OPTIONS: ProjectCategory[] = [
  'All',
  'Networking & System',
  'Programming',
  'UI/UX & AI',
];

function NetworkDiagramSvg() {
  return (
    <svg className="w-full h-full relative z-10" fill="none" viewBox="0 0 360 180" aria-hidden="true">
      <rect fill="#1c201f" height="35" rx="6" stroke="#4edea3" strokeWidth="1.5" width="96" x="132" y="20" />
      <text fill="#e0e3e1" fontFamily="JetBrains Mono, monospace" fontSize="10" textAnchor="middle" x="180" y="42">
        CORE-ROUTER
      </text>
      <line stroke="#86948a" strokeDasharray="3 3" strokeWidth="1.2" x1="180" x2="90" y1="55" y2="100" />
      <line stroke="#86948a" strokeDasharray="3 3" strokeWidth="1.2" x1="180" x2="270" y1="55" y2="100" />
      <rect fill="#1c201f" height="30" rx="4" stroke="#3c4a42" strokeWidth="1.5" width="90" x="45" y="100" />
      <text fill="#bbcabf" fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle" x="90" y="119">
        SW-VLAN-10
      </text>
      <rect fill="#1c201f" height="30" rx="4" stroke="#3c4a42" strokeWidth="1.5" width="90" x="225" y="100" />
      <text fill="#bbcabf" fontFamily="JetBrains Mono, monospace" fontSize="9" textAnchor="middle" x="270" y="119">
        SW-VLAN-20
      </text>
      <circle cx="90" cy="155" fill="#10b981" fillOpacity="0.28" r="9" />
      <circle cx="90" cy="155" fill="#10b981" r="4" />
      <line stroke="#10b981" strokeWidth="1.5" x1="90" x2="90" y1="130" y2="155" />
      <circle cx="270" cy="155" fill="#10b981" fillOpacity="0.28" r="9" />
      <circle cx="270" cy="155" fill="#10b981" r="4" />
      <line stroke="#10b981" strokeWidth="1.5" x1="270" x2="270" y1="130" y2="155" />
    </svg>
  );
}

function DashboardDiagramSvg() {
  return (
    <svg className="w-full h-full relative z-10" fill="none" viewBox="0 0 360 180" aria-hidden="true">
      <rect fill="#181c1b" height="140" rx="10" stroke="#3c4a42" strokeWidth="1.5" width="300" x="30" y="20" />
      <rect fill="#262b2a" height="35" rx="6" width="120" x="50" y="40" />
      <circle cx="66" cy="57" fill="#4edea3" r="8" />
      <line stroke="#bbcabf" strokeLinecap="round" strokeWidth="3" x1="85" x2="150" y1="52" y2="52" />
      <line stroke="#86948a" strokeLinecap="round" strokeWidth="2" x1="85" x2="130" y1="62" y2="62" />
      <rect fill="#262b2a" height="35" rx="6" width="120" x="190" y="40" />
      <line stroke="#e9c349" strokeLinecap="round" strokeWidth="2.5" x1="205" x2="295" y1="57" y2="57" />
      <rect fill="#101413" height="50" rx="6" stroke="#3c4a42" strokeWidth="1" width="260" x="50" y="90" />
      <path d="M65,120 Q110,105 160,118 T240,105 T300,98" fill="none" stroke="#4edea3" strokeWidth="2" />
    </svg>
  );
}

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('All');
  const [inspectedProject, setInspectedProject] = useState<ProjectItem | null>(null);

  const visibleProjects =
    selectedFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(selectedFilter));

  return (
    <section id="projects" className="w-full py-16 flex flex-col gap-8 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11px] font-semibold text-[#6ffbbe] uppercase tracking-[0.12em]">
            03 / SELECTED WORKS
          </span>
          <h2 className="text-[28px] sm:text-[36px] leading-[1.2] tracking-[-0.02em] font-bold text-[#e0e3e1]">
            Technical Projects &amp; Labs
          </h2>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projects by category">
          {FILTER_OPTIONS.map((category) => {
            const isActive = selectedFilter === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-1.5 rounded-full font-mono text-[12px] font-medium whitespace-nowrap shrink-0 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4edea3] ${
                  isActive
                    ? 'bg-[#313634] text-[#6ffbbe] border border-[#10b981]/30'
                    : 'bg-[#1c201f] text-[#bbcabf] hover:text-[#e0e3e1] border border-white/[0.06]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl bg-[#181c1b] border border-white/[0.06] hover:border-[#10b981]/35 overflow-hidden flex flex-col group transition-all duration-200"
          >
            {/* 16:9 geometric wireframe header */}
            <div className="relative w-full aspect-video bg-[#262b2a] overflow-hidden flex items-center justify-center p-6 border-b border-white/[0.06]">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
              {project.diagramType === 'network' ? <NetworkDiagramSvg /> : <DashboardDiagramSvg />}
              <span className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-[#181c1b]/90 border border-white/[0.08] font-mono text-[11px] font-medium text-[#6ffbbe]">
                {project.semesterTag}
              </span>
            </div>

            <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-full bg-[#1c201f] border border-white/[0.06] text-[#bbcabf] font-mono text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-[22px] sm:text-[24px] leading-snug font-bold text-[#e0e3e1] group-hover:text-[#4edea3] transition-colors">
                  {project.title}
                </h3>

                <ul className="flex flex-col gap-2 text-[13px] leading-[1.6] text-[#bbcabf] list-disc pl-4">
                  {project.highlights.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#4edea3] hover:text-[#6ffbbe] font-mono text-[13px] font-semibold transition-colors"
                  >
                    <span>View Repository</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setInspectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-[#bbcabf] hover:text-[#e0e3e1] font-mono text-[12px] font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4edea3] rounded px-1.5 py-0.5"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Architecture</span>
                  </button>
                </div>

                <span className="font-mono text-[11px] font-semibold tracking-[0.08em] text-[#bbcabf]">
                  {project.categoryLabel}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Architecture Modal */}
      {inspectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setInspectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-[#181c1b] border border-[#10b981]/30 shadow-2xl p-6 sm:p-8 flex flex-col gap-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[11px] font-semibold text-[#6ffbbe] uppercase tracking-[0.1em]">
                  {inspectedProject.categoryLabel} · {inspectedProject.semesterTag}
                </span>
                <h3 id="project-modal-title" className="text-[22px] sm:text-[24px] font-bold text-[#e0e3e1]">
                  {inspectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInspectedProject(null)}
                aria-label="Close project architecture details"
                className="w-9 h-9 rounded-full bg-[#262b2a] hover:bg-[#313634] text-[#e0e3e1] flex items-center justify-center shrink-0 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="w-full aspect-video rounded-xl bg-[#262b2a] border border-white/[0.06] flex items-center justify-center p-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
              {inspectedProject.diagramType === 'network' ? <NetworkDiagramSvg /> : <DashboardDiagramSvg />}
            </div>

            <p className="text-[14px] leading-relaxed text-[#bbcabf]">
              {inspectedProject.architectureNotes.overview}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {inspectedProject.architectureNotes.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3.5 rounded-xl bg-[#1c201f] border border-white/[0.05] flex flex-col gap-1"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#86948a]">
                    {m.label}
                  </span>
                  <span className="font-mono text-[13px] font-semibold text-[#6ffbbe]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#e0e3e1]">
                Technical Deliverables
              </span>
              {inspectedProject.architectureNotes.deliverables.map((d) => (
                <div key={d} className="flex items-start gap-2.5 text-[13px] text-[#bbcabf]">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5" />
                  <span>{d}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setInspectedProject(null)}
                className="px-4 py-2 rounded-full bg-[#262b2a] hover:bg-[#313634] text-[#e0e3e1] text-[13px] font-semibold cursor-pointer"
              >
                Close
              </button>
              <a
                href={inspectedProject.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#10b981] hover:bg-[#4edea3] text-[#003824] text-[13px] font-bold"
              >
                <span>Open GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
