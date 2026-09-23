'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { Button } from '@/components/ui/button';

const BTS_ITEMS = [
    {
        src: "/me.jpeg",
        alt: 'Behind-the-scenes shot of director reviewing playback monitor surrounded by film crew on location',
        commentary: '"The rig fell twice. We relit from scratch. The third take is what you see on screen."',
        project: 'Static — Day 2, Location: Warehouse District'
    },
    {
        src: "/me2.jpeg",
        alt: 'Camera operator in silhouette against bright studio lights adjusting camera on dolly track',
        commentary: '"Vera asked for one more take after we called wrap. That\'s the one in the final cut."',
        project: 'Hollow — Day 3, Studio B'
    }];


export default function BTSSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('is-visible');
                });
            },
            { threshold: 0, rootMargin: '0px 0px -15% 0px' }
        );
        const targets = sectionRef?.current?.querySelectorAll('.reveal');
        targets?.forEach((el) => observer?.observe(el));
        return () => observer?.disconnect();
    }, []);

    return (
        <section id="bts" ref={sectionRef} className="py-28 md:py-40 px-6 md:px-12 bg-obsidian border-b border-white/[0.06]">
            <div className="max-w-8xl mx-auto">

                {/* Header */}
                <div className="reveal mb-16">
                    <p className="font-hand text-gold text-lg mb-3">scene three — the creator</p>
                    <h2 className="font-display text-cream text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.88] tracking-tight">
                        Behind<br />
                        <span className="italic font-light text-cream/40">the</span><br />
                        Frame.
                    </h2>
                </div>

                {/* BTS items */}
                <div className="space-y-10">
                    {BTS_ITEMS?.map((item, i) =>
                        <div
                            key={i}
                            className={`reveal reveal-delay-${i + 1} relative overflow-hidden group rounded-xl`}
                            style={{ aspectRatio: i === 0 ? '21/9' : '16/6' }}>

                            <AppImage
                                src={item?.src}
                                alt={item?.alt}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.02]" />


                            {/* Gradient overlay */}
                            <div className="bts-overlay absolute inset-0" />

                            {/* Commentary overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
                                <div className="max-w-xl">
                                    <p className="font-hand text-gold text-xl md:text-2xl leading-snug mb-3">
                                        {item?.commentary}
                                    </p>
                                    <p className="font-body text-[9px] uppercase tracking-widest text-cream/30">
                                        {item?.project}
                                    </p>
                                </div>
                            </div>

                            {/* Corner annotation */}
                            <div className="absolute top-5 right-5 opacity-60">
                                <div className="paper-card p-2 rotate-2 rounded-none">
                                    <p className="font-hand text-graphite text-[10px]">BTS — not for release</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Director reel anchor */}
                <div id="reel" className="reveal reveal-delay-3 mt-16 border border-white/[0.06] p-8 md:p-12 relative overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-transparent pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div>
                            <p className="font-hand text-gold text-xl mb-2">creative philosophy — frame_8</p>
                            <p className="font-body text-sm text-cream/60 font-light max-w-2xl leading-relaxed mb-4">
                                I am a passionate video editor and creative media professional with 2 years of experience in video editing, content creation, and visual storytelling. I served as a Media Director and Video Editor for my college at NITTE Institute of Professional Education, under NITTE University, where I collaborated with my team to produce promotional videos, event highlights, social media campaigns, and creative digital content.
                            </p>
                            <p className="font-body text-sm text-cream/60 font-light max-w-2xl leading-relaxed">
                                My work has been recognized and appreciated by the NITTE University administration for its creativity, quality, and impact in representing the institution through engaging visual content.
                            </p>
                        </div>
                        <Button
                            asChild
                            variant="ghost"
                            className="flex items-center gap-4 group flex-shrink-0 rounded-none h-auto p-0"
                        >
                            <a href="#" aria-label="Watch full director reel">
                                <div className="w-16 h-16 rounded-full border border-gold/60 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gold group-hover:text-obsidian transition-colors ml-0.5">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                                <span className="font-body text-xs uppercase tracking-widest text-cream/50 group-hover:text-cream transition-colors">
                                    Watch Reel
                                </span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>);

}
