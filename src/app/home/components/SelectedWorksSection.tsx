'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import VideoMorphSlider from '@/components/ui/VideoMorphSlider';

interface WorkItem {
    id: string;
    title: string;
    artist: string;
    label: string;
    year: string;
    thumb: string;
    videoUrl?: string;
    alt: string;
    laurels: string[];
    credits: string[];
    color: string;
}

const WORKS: WorkItem[] = [
    {
        id: 'w1',
        title: 'NITTE Promo Video',
        artist: 'NITTE University',
        label: 'Promotional Campaign',
        year: '2025',
        thumb: "https://images.unsplash.com/photo-1576967402682-19976eb930f2",
        videoUrl: "/vedio/IMG_3029.MP4",
        alt: 'Singer standing in fog-filled arena with vibrant purple backlighting creating dramatic silhouette',
        laurels: ['Official University Promo', '10k+ Views on Socials'],
        credits: ['Video Editor: Mariyam Rafhiya', 'Media Director: Mariyam Rafhiya', 'Software: DaVinci Resolve'],
        color: '#7B4F8E'
    },
    {
        id: 'w2',
        title: 'Event Highlights 2024',
        artist: 'NITTE Institute',
        label: 'Event Coverage',
        year: '2024',
        thumb: "https://images.unsplash.com/photo-1662478970266-b4a57b1e6161",
        videoUrl: "/vedio/IMG_3030.MP4",
        alt: 'Concert performance with neon blue and white strobes illuminating musicians on stage',
        laurels: ['Featured on Campus', 'Best Event Coverage'],
        credits: ['Video Editor: Mariyam Rafhiya', 'Color Grade: Mariyam Rafhiya', 'Software: Premiere / CapCut'],
        color: '#2A5C8E'
    },
    {
        id: 'w3',
        title: 'Social Media Campaigns',
        artist: 'NITTE Institute',
        label: 'Short-form Content',
        year: '2024',
        thumb: "https://images.unsplash.com/photo-1716669006630-9d8c1b7ed083",
        videoUrl: "/vedio/IMG_3031.MP4",
        alt: 'Band performing on stage with warm amber and red stage lights washing over the crowd',
        laurels: ['High Engagement Reels', 'Motion Typography Showcase'],
        credits: ['Video Editor: Mariyam Rafhiya', 'Media Director: Mariyam Rafhiya', 'Software: VN Editor / InShot'],
        color: '#8E3A2A'
    }
];

export default function SelectedWorksSection() {
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
        const targets = sectionRef.current?.querySelectorAll('.reveal');
        targets?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="work" ref={sectionRef} className="py-28 md:py-40 px-6 md:px-12 bg-obsidian border-b border-white/[0.06]">
            <div className="max-w-8xl mx-auto">

                {/* Header */}
                <div className="flex items-end justify-between mb-16 gap-6">
                    <div className="reveal">
                        <p className="font-hand text-gold text-lg mb-3">scene two — the finished work</p>
                        <h2 className="font-display text-cream text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.88] tracking-tight">
                            Selected<br />
                            <span className="italic font-light text-cream/40">videos.</span>
                        </h2>
                    </div>
                    <Button
                        asChild
                        variant="ghost"
                        className="reveal reveal-delay-2 hidden md:flex items-center gap-3 group border-b border-cream/20 pb-3 hover:border-gold transition-colors shrink-0 rounded-none h-auto p-0"
                    >
                        <a href="#reel">
                            <span className="font-body text-xs uppercase tracking-widest text-cream/50 group-hover:text-cream transition-colors">
                                Full Editing Portfolio
                            </span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                className="text-cream/50 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                            </svg>
                        </a>
                    </Button>
                </div>

                {/* Work items slider */}
                <div className="w-full max-w-5xl mx-auto aspect-video mb-24 rounded-2xl overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.1)]">
                    <VideoMorphSlider
                        items={WORKS.map(w => ({
                            video: w.videoUrl,
                            caption: `${w.title} — ${w.artist}`
                        }))}
                        transition="melt"
                        duration={1.5}
                        intensity={0.6}
                        overlayColor="#0b0b0d"
                    />
                </div>
            </div>
        </section>
    );
}

