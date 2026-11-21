import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutEducationSection } from './components/AboutEducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactFooter } from './components/ContactFooter';
import { CvModal } from './components/CvModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [showConnectPanel, setShowConnectPanel] = useState(false);

  const jumpToContact = (openForm = false) => {
    if (openForm) {
      setShowConnectPanel(true);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f0e] text-[#e0e3e1] font-sans antialiased relative selection:bg-[#10b981] selection:text-[#00422b]">
      {/* Fixed ambient emerald radial diffusion */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.08)_0%,transparent_60%)]"
      />
      {/* Subtle architectural hairline grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-45 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      <Navbar onOpenCv={() => setCvModalOpen(true)} />

      <main className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-8">
        <HeroSection
          onOpenCv={() => setCvModalOpen(true)}
          onJumpToLinkedin={() => jumpToContact(true)}
        />
        <AboutEducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactFooter
          showConnectPanel={showConnectPanel}
          onToggleConnectPanel={(open) =>
            setShowConnectPanel((prev) => (open === undefined ? !prev : open))
          }
        />
      </main>

      <CvModal
        open={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        onJumpToContact={() => jumpToContact(true)}
      />
    </div>
  );
}
