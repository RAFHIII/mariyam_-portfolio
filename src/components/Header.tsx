'use client';
import React, { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none">
      <div
        className={`mx-auto transition-all duration-500 ease-out pointer-events-auto ${
          scrolled
            ? 'mt-3 md:mt-4 max-w-5xl w-[92%] px-5 md:px-7 h-14 rounded-full bg-[#0B0B0D]/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_25px_rgba(201,168,76,0.08)] flex items-center justify-between'
            : 'max-w-8xl px-6 md:px-12 h-20 bg-transparent border-b border-transparent flex items-center justify-between'
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <AppLogo
            src="/logo.jpeg"
            size={scrolled ? 24 : 28}
            text="Mariyam Rafhiya"
            className={`font-display text-cream font-bold uppercase tracking-tight group-hover:opacity-80 transition-all duration-300 ${
              scrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'
            }`}
          />
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {[
            { label: 'Achievements', href: '#achievements' },
            { label: 'Projects', href: '#work' },
            { label: 'Feedback', href: '#feedback' },
            { label: 'About', href: '#bts' },
          ]?.map((item) => (
            <a
              key={item?.label}
              href={item?.href}
              className="gold-underline text-[10px] font-body font-medium uppercase tracking-widest text-cream/60 hover:text-cream transition-colors duration-300"
            >
              {item?.label}
            </a>
          ))}
        </nav>

        {/* Social Icons & CTA */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden sm:flex items-center gap-1.5">
            <a
              href="https://www.instagram.com/fram_e8m?igsi=OHBmNTlqZzQxcHh6&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-gold transition-colors p-1.5 rounded-full hover:bg-white/5"
              aria-label="Instagram Profile"
              title="Instagram @fram_e8m"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/rafhiyamariyam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-gold transition-colors p-1.5 rounded-full hover:bg-white/5"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          <Button
            asChild
            variant="outline"
            size="sm"
            className={`border-gold/60 text-gold hover:bg-gold hover:text-obsidian text-[10px] font-body font-semibold uppercase tracking-widest transition-all duration-300 ${
              scrolled
                ? 'px-4 py-1.5 h-8 rounded-full shadow-[0_0_15px_rgba(201,168,76,0.15)]'
                : 'px-6 py-2.5 h-auto rounded-none'
            }`}
          >
            <a href="#treatment">Hire Me</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
