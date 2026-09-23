'use client';
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FINAL_VIDEOS = [
    {
        src: "/vedio/IMG_3032.MP4",
        credit: 'Final Render — Event Highlights'
    },
    {
        src: "/vedio/IMG_3038.MP4",
        credit: 'Final Render — Social Promo'
    }
];

export default function ProcessSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0, rootMargin: '0px 0px -15% 0px' }
        );

        const targets = sectionRef.current?.querySelectorAll('.reveal');
        targets?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="achievements" ref={sectionRef} className="py-28 md:py-40 px-6 md:px-12 bg-transparent border-b border-white/[0.06]">
            <div className="max-w-8xl mx-auto">

                {/* Section header */}
                <div className="flex items-start justify-between mb-20 gap-8">
                    <div className="reveal">
                        <p className="font-hand text-gold text-lg mb-3 tracking-wide">
                            scene one — the achievements
                        </p>
                        <h2 className="font-display text-cream text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.88] tracking-tight">
                            Milestones &<br />
                            <span className="italic font-light text-cream/40">recognition.</span>
                        </h2>
                    </div>
                    <div className="reveal reveal-delay-2 hidden md:block max-w-xs text-right mt-auto">
                        <p className="font-body text-sm text-cream/40 font-light leading-relaxed">
                            A track record of excellence in video editing and media direction, recognized by institutions and peers alike.
                        </p>
                    </div>
                </div>

                {/* 60/40 asymmetric grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-6 md:gap-10">

                    {/* 60 column — Large final frame */}
                    <div className="space-y-6">
                        <div className="reveal reveal-delay-3 relative overflow-hidden group rounded-xl border border-white/[0.05] shadow-2xl" style={{ aspectRatio: '16/9' }}>
                            <img
                                src="/img1.jpeg"
                                alt="Achievement"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* 40 column — achievements notes */}
                    <div className="space-y-6 flex flex-col">
                        {/* Handwritten notes card */}
                        <Card className="reveal reveal-delay-2 paper-card torn-top p-6 md:p-8 flex-shrink-0 border-0 rounded-none bg-[#fdfbf7] shadow-xl">
                            <CardContent className="p-0">
                                <p className="font-hand text-graphite text-xl font-bold leading-snug mb-5">
                                    &ldquo;Key Achievements
                                </p>
                                <ul className="space-y-4 font-hand text-graphite/90 text-[1.1rem]">
                                    {[
                                        '🏆 Best Social Media Contributor Award – NITTE University',
                                        '🥇 1st Place – Reel Making Competition STRATCULT - NIPE'
                                    ].map((note, i) =>
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="leading-tight">{note}</span>
                                        </li>
                                    )}
                                </ul>
                                <div className="mt-8 pt-4 border-t border-graphite/20 flex items-center justify-between">
                                    <span className="font-hand text-graphite/50 text-sm">Consistency</span>
                                    <span className="font-hand text-gold text-lg font-bold">✓ Verified</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Annotation tag */}
                        <div className="reveal reveal-delay-5 flex items-center gap-3 mt-auto pt-4">
                            <div className="w-8 h-[1px] bg-gold/50" />
                            <p className="font-hand text-cream/40 text-base">
                                hard work recognized
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tool Stack - Single Line Hoverable Logos */}
                <div className="mt-28 pt-16 border-t border-white/[0.06] text-center">
                    <div className="reveal mb-12">
                        <p className="font-hand text-gold text-lg mb-2">creative arsenal</p>
                        <h3 className="font-display text-cream text-3xl font-bold tracking-tight">The Tool Stack.</h3>
                    </div>
                    
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                        {[
                            { name: 'DaVinci Resolve', logo: '/davinci-resolve.svg' },
                            { name: 'CapCut', logo: '/capcut.svg' },
                            { name: 'VN Editor', logo: '/vn.svg' },
                            { name: 'InShot', logo: '/inshot.svg' },
                            { name: 'PicsArt', logo: '/picsart.svg' },
                            { name: 'Snapseed', logo: '/snapseed-seeklogo.svg' }
                        ].map((tool, i) => (
                            <div 
                                key={i} 
                                className={`reveal reveal-delay-${(i % 5) + 1} group relative flex items-center justify-center p-4 md:p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-gold/30 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]`}
                            >
                                {/* Tooltip */}
                                <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#111] border border-white/10 shadow-xl px-4 py-2 rounded-lg text-xs font-body font-semibold text-cream tracking-widest whitespace-nowrap pointer-events-none z-20">
                                    {tool.name}
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#111] border-b border-r border-white/10 rotate-45" />
                                </div>
                                
                                <img 
                                    src={tool.logo} 
                                    alt={tool.name} 
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
