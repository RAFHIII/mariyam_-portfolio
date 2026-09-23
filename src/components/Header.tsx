'use client';
import React, { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-obsidian/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <AppLogo
            src="/logo.jpeg"
            size={28}
            text="Mariyam Rafhiya"
            className="font-display text-cream text-xl font-bold uppercase tracking-tight group-hover:opacity-80 transition-opacity"
          />
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: 'Achievements', href: '#achievements' },
            { label: 'Projects', href: '#work' },
            { label: 'Feedback', href: '#feedback' },
            { label: 'About', href: '#bts' },
          ]?.map((item) => (
            <a
              key={item?.label}
              href={item?.href}
              className="gold-underline text-[10px] font-body font-medium uppercase tracking-widest text-cream/50 hover:text-cream transition-colors duration-300"
            >
              {item?.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Button
          asChild
          variant="outline"
          size="sm"
          className="border-gold/60 text-gold hover:bg-gold hover:text-obsidian text-[10px] font-body font-semibold uppercase tracking-widest px-6 py-2.5 h-auto rounded-none transition-all duration-300"
        >
          <a href="#treatment">Hire Me</a>
        </Button>
      </div>
    </header>
  );
}
