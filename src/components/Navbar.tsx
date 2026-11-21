import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
];

interface NavbarProps {
  onOpenCv: () => void;
}

export function Navbar({ onOpenCv }: NavbarProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      let current = '';
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollY) {
          current = link.id;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 lg:px-8 pt-4">
      <div className="w-full max-w-[1140px] h-16 px-5 md:px-6 rounded-full bg-[#181c1b]/85 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_-4px_rgba(0,0,0,0.6),0_0_24px_-2px_rgba(16,185,129,0.12)] flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl font-bold tracking-tight text-[#e0e3e1] whitespace-nowrap shrink-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4edea3] rounded-md px-1"
        >
          <span>{PROFILE.monogram}</span>
          <span className="text-[#10b981]">.</span>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-[13px] font-semibold whitespace-nowrap shrink-0 px-3 py-1.5 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4edea3] ${
                  isActive
                    ? 'bg-[#313634] text-[#e0e3e1]'
                    : 'text-[#bbcabf] hover:text-[#e0e3e1]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary CTA + mobile drawer button */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="inline-flex items-center justify-center bg-[#10b981] hover:bg-[#4edea3] text-[#003824] text-[13px] font-bold rounded-full px-5 py-2 whitespace-nowrap shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_28px_rgba(16,185,129,0.45)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6ffbbe]"
          >
            Get in Touch
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden w-10 h-10 rounded-full bg-[#262b2a] text-[#e0e3e1] flex items-center justify-center hover:bg-[#313634] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4edea3]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full max-w-[1140px] mt-2 p-4 rounded-2xl bg-[#181c1b]/95 backdrop-blur-xl border border-white/[0.08] shadow-2xl flex flex-col gap-1.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeId === link.id
                  ? 'bg-[#313634] text-[#4edea3]'
                  : 'text-[#bbcabf] hover:bg-[#262b2a] hover:text-[#e0e3e1]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCv();
            }}
            className="mt-1 px-4 py-2.5 rounded-xl bg-[#262b2a] text-[#e0e3e1] text-sm font-semibold text-left hover:bg-[#313634] transition-colors"
          >
            View CV Summary
          </button>
        </div>
      )}
    </header>
  );
}
