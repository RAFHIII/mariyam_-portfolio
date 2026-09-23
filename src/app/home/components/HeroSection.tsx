'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { Button } from '@/components/ui/button';
import VariableProximity from '@/components/ui/VariableProximity';

const POLAROIDS = [
    {
        id: 'p1',
        src: "/img1.jpeg",
        alt: 'Director reviewing storyboard sketches on a cluttered studio table with film equipment',
        caption: 'scout — industrial district',
        cls: 'polaroid-a absolute top-[18%] left-[4%] w-[160px] md:w-[200px] z-10',
        rotation: '-rotate-3'
    },
    {
        id: 'p2',
        src: "/img2.jpeg",
        alt: 'Camera crew setting up lighting rigs in a dark warehouse for a music video shoot',
        caption: 'lighting test — warehouse',
        cls: 'polaroid-b absolute top-[18%] right-[8%] w-[150px] md:w-[185px] z-10 hidden md:block',
        rotation: 'rotate-2'
    }
];


export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const headlineContainerRef = useRef<HTMLDivElement>(null);

    // Subtle mouse parallax
    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const handleMouse = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const rx = (clientX / innerWidth - 0.5) * 12;
            const ry = (clientY / innerHeight - 0.5) * 8;
            const polaroids = hero.querySelectorAll<HTMLElement>('[data-parallax]');
            polaroids.forEach((el, i) => {
                const depth = 0.4 + i * 0.15;
                el.style.transform = `${el.dataset.baseTransform || ''} translate(${rx * depth}px, ${ry * depth}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouse, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouse);
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center overflow-hidden bg-transparent pt-20">

            {/* Scan line */}
            <div className="scan-line" />

            {/* Dot grid background */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245,240,225,0.6) 1px, transparent 0)',
                    backgroundSize: '28px 28px'
                }} />


            {/* Corkboard texture band */}
            <div className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(58,58,60,0.08) 0%, transparent 70%)'
                }} />


            {/* ── POLAROIDS ── */}
            {POLAROIDS.map((p) =>
                <div
                    key={p.id}
                    data-parallax="true"
                    data-base-transform={`rotate(${p.rotation})`}
                    className={`${p.cls} ${p.rotation} cursor-pointer group`}
                    style={{ willChange: 'transform' }}>

                    <div className="paper-card p-2 pb-8 hover:shadow-2xl transition-shadow duration-500">
                        <div className="overflow-hidden bg-graphite/20" style={{ height: 120 }}>
                            <AppImage
                                src={p.src}
                                alt={p.alt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                        </div>
                        <p className="font-hand text-[11px] text-graphite mt-2 px-1 leading-tight">
                            {p.caption}
                        </p>
                    </div>
                </div>
            )}

            {/* ── STORYBOARD PANEL (top-right) ── */}
            <div className="absolute top-[15%] right-[22%] md:right-[28%] w-[90px] md:w-[110px] z-10 rotate-1 hidden lg:block">
                <div className="border border-graphite/60 bg-cream/5 p-1.5">
                    <div className="grid grid-cols-2 gap-[3px]">
                        {[0, 1, 2, 3].map((i) =>
                            <div key={i} className="bg-graphite/30 aspect-video relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-[1px] bg-gold/20" />
                                </div>
                            </div>
                        )}
                    </div>
                    <p className="font-hand text-[9px] text-gold/70 mt-1 text-center">
                        shot list — seq. 04
                    </p>
                </div>
            </div>

            {/* ── FILMSTRIP STRIP ── */}
            <div className="absolute top-0 right-[14%] w-[44px] h-full z-10 opacity-30 hidden xl:flex flex-col">
                <div className="w-full h-full bg-graphite/40 relative overflow-hidden">
                    <div className="filmstrip-holes absolute top-0 left-0 right-0 h-3 opacity-60" />
                    <div className="filmstrip-holes absolute bottom-0 left-0 right-0 h-3 opacity-60" />
                    {[0, 1, 2, 3, 4, 5, 6].map((i) =>
                        <div
                            key={i}
                            className="mx-2 my-1 bg-obsidian/60 overflow-hidden"
                            style={{ height: 60, marginTop: i === 0 ? 16 : 4 }} />

                    )}
                </div>
            </div>

            {/* ── MAIN HERO TEXT BLOCK ── */}
            <div className="relative z-20 w-full max-w-8xl mx-auto px-6 md:px-12">
                <div className="max-w-3xl ml-auto mr-[6%] md:mr-[18%]">



                    {/* Main headline with VariableProximity */}
                    <div ref={headlineContainerRef} className="mb-8 w-full relative select-none">
                        <div className="block">
                            <VariableProximity
                                label="MARIYAM"
                                className="text-cream text-[clamp(3.5rem,10vw,8.5rem)] font-bold tracking-tight block leading-[0.9]"
                                fromFontVariationSettings="'wght' 400, 'opsz' 14"
                                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                containerRef={headlineContainerRef}
                                radius={160}
                                falloff="linear"
                            />
                        </div>
                        <div className="block -mt-1 md:-mt-3">
                            <VariableProximity
                                label="RAFHIYA"
                                className="text-gold text-[clamp(3.5rem,10vw,8.5rem)] font-bold tracking-tight block leading-[0.9]"
                                fromFontVariationSettings="'wght' 400, 'opsz' 14"
                                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                containerRef={headlineContainerRef}
                                radius={160}
                                falloff="linear"
                            />
                        </div>
                    </div>

                    {/* Sub-description */}
                    <div className="pull-quote mb-10 max-w-md ml-2">
                        <p className="font-body text-sm text-cream/50 font-light leading-relaxed uppercase tracking-wider mb-2">
                            Video Editor & Creative Media Professional
                        </p>
                        <p className="font-body text-sm text-cream/50 font-light leading-relaxed">
                            2 years of experience crafting promotional videos, event highlights, and social media campaigns. Formerly Media Director at NITTE Institute of Professional Education.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-6">
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-gold to-[#e6c875] text-obsidian px-8 py-4 font-body font-semibold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.2)] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] rounded-none h-auto"
                        >
                            <a href="#reel">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                View Projects
                            </a>
                        </Button>
                        <a
                            href="/resume.pdf"
                            download="Mariyam_Rafhiya_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between border-b border-cream/20 py-3 hover:border-gold transition-colors duration-300">

                            <span className="font-body text-xs uppercase tracking-widest text-cream mr-6 group-hover:text-gold transition-colors">
                                Download Resume
                            </span>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-gold">

                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                            </svg>
                        </a>
                    </div>



                    {/* Stats row */}
                    <div className="flex items-center gap-8 mt-14 pt-8 border-t border-white/[0.06]">
                        <div>
                            <p className="font-display text-3xl font-bold text-cream">2+</p>
                            <p className="font-body text-[9px] uppercase tracking-widest text-cream/30 mt-0.5">Years Experience</p>
                        </div>
                        <div className="w-[1px] h-8 bg-white/10" />
                        <div>
                            <p className="font-display text-3xl font-bold text-cream">NITTE</p>
                            <p className="font-body text-[9px] uppercase tracking-widest text-cream/30 mt-0.5">Media Director</p>
                        </div>
                        <div className="w-[1px] h-8 bg-white/10" />
                        <div>
                            <p className="font-display text-3xl font-bold text-cream">6+</p>
                            <p className="font-body text-[9px] uppercase tracking-widest text-cream/30 mt-0.5">Software Tools</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom scroll indicator */}
            <div className="absolute bottom-8 left-8 md:left-16 flex flex-col items-center gap-2 z-20 opacity-40">
                <span className="font-hand text-cream/60 text-sm">scroll</span>
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-cream animate-bounce">

                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-6-6l6 6l6-6" />
                </svg>
            </div>
        </section>);

}

