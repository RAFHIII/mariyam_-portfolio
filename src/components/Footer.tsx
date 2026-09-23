'use client';
import React, { useEffect, useRef } from 'react';
import { DitherShader } from "@/components/ui/dither-shader";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    const targets = footerRef.current?.querySelectorAll('.reveal');
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="border-t border-white/[0.06] pt-20 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-8xl mx-auto relative z-10">
        
        {/* Full-width Dither Shader Section */}
        <div className="w-full flex flex-col items-center justify-center mb-16 pointer-events-none">
          <p className="font-hand text-gold/80 text-xl mb-4 reveal">creator profile</p>
          <div className="relative w-full max-w-6xl mx-auto h-[180px] md:h-[240px] lg:h-[300px] overflow-hidden rounded-2xl border border-white/5 opacity-80 reveal reveal-delay-1">
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-transparent z-10" />
            <DitherShader
              src="/me.jpeg"
              gridSize={2}
              ditherMode="bayer"
              colorMode="duotone"
              invert={false}
              animated={false}
              primaryColor="#0a0a0a"
              secondaryColor="#d4af37"
              threshold={0.5}
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="font-display text-cream text-xl font-bold uppercase tracking-tight">
              Mariyam_Rafhiya
            </span>
            <span className="font-hand text-gold text-sm">— video editor</span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-8 text-[10px] font-body uppercase tracking-widest text-cream/30">
            <a href="#work" className="hover:text-cream/70 transition-colors">Work</a>
            <a href="#process" className="hover:text-cream/70 transition-colors">Process</a>
            <a href="#bts" className="hover:text-cream/70 transition-colors">About</a>
            <a
              href="/resume.pdf"
              download="Mariyam_Rafhiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream/70 transition-colors"
            >
              Resume
            </a>
            <a
              href="https://www.instagram.com/fram_e8m?igsi=OHBmNTlqZzQxcHh6&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream/70 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/rafhiyamariyam/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream/70 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/[0.04] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-body text-cream/20 uppercase tracking-widest">
            © 2026 Mariyam Rafhiya — All rights reserved
          </p>
          <div className="flex items-center gap-1">
            <span className="font-hand text-cream/15 text-xs">crafted with</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold/30">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <span className="font-hand text-cream/15 text-xs">passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

