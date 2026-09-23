'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const ROLES = [
    { value: 'brand', label: 'Brand / Business' },
    { value: 'institute', label: 'Educational Institute' },
    { value: 'creator', label: 'Content Creator' },
    { value: 'agency', label: 'Marketing Agency' },
];

export default function TreatmentSection() {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !role) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);

            // Trigger file download
            const a = document.createElement('a');
            a.href = '/resume.pdf';
            a.download = 'Mariyam_Rafhiya_Resume.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }, 1200);
    };

    return (
        <section id="treatment" ref={sectionRef} className="py-28 md:py-40 px-6 md:px-12 bg-obsidian">
            <div className="max-w-8xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-10 md:gap-16 items-start">

                    {/* 60 — The offer */}
                    <div className="reveal">
                        <p className="font-hand text-gold text-lg mb-4">scene four — the commission</p>
                        <h2 className="font-display text-cream text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.88] tracking-tight mb-8">
                            The editing<br />
                            <span className="italic font-light text-cream/40">process that</span><br />
                            wins the audience.
                        </h2>

                        <div className="pull-quote mb-10 max-w-lg">
                            <p className="font-body text-base text-cream/50 font-light leading-relaxed">
                                Get access to the same creative workflow and frameworks I use to craft highly engaging social media content, promotional videos, and event highlights that captivate audiences and drive impact.
                            </p>
                        </div>

                        {/* What's inside */}
                        <div className="space-y-4 mb-10">
                            <p className="font-body text-[9px] uppercase tracking-widest text-cream/25 mb-4">
                                What&apos;s inside
                            </p>
                            {[
                                { item: 'Video Editing Workflow', note: 'from raw to render' },
                                { item: 'Color Grading & Correction', note: 'setting the mood' },
                                { item: 'Motion Typography', note: 'keeping viewers hooked' },
                                { item: 'Social Media Strategy', note: 'optimizing for the feed' },
                                { item: 'Creative Direction', note: 'leading with vision' },
                            ].map(({ item, note }) => (
                                <div key={item} className="flex items-start gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-1.5 flex-shrink-0 group-hover:bg-gold transition-colors" />
                                    <div>
                                        <span className="font-body text-sm text-cream font-medium">{item}</span>
                                        <span className="font-hand text-cream/30 text-sm ml-2">— {note}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social proof */}
                        <div className="flex items-center gap-6 border-t border-white/[0.06] pt-8">
                            <div className="flex -space-x-2">
                                {[
                                    'https://i.pravatar.cc/100?u=dir1',
                                    'https://i.pravatar.cc/100?u=dir2',
                                    'https://i.pravatar.cc/100?u=dir3',
                                ].map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt={`Director who downloaded the treatment template, profile ${i + 1}`}
                                        className="w-8 h-8 rounded-full border-2 border-obsidian grayscale"
                                    />
                                ))}
                            </div>
                            <p className="font-body text-xs text-cream/30 font-light">
                                <span className="text-cream/60">Trusted by brands, institutes & creators</span> for engaging content
                            </p>
                        </div>
                    </div>

                    {/* 40 — The form */}
                    <div className="lg:sticky lg:top-28 reveal reveal-delay-2">
                        <div className="border border-white/[0.08] p-6 md:p-8 relative overflow-hidden rounded-xl">
                            {/* Paper texture accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />

                            {!submitted ? (
                                <>
                                    <div className="mb-8">
                                        <p className="font-hand text-gold text-xl mb-1">Get the Portfolio — free</p>
                                        <p className="font-body text-xs text-cream/30 font-light">
                                            No spam. One email. My complete resume and portfolio.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label className="block font-body text-[9px] uppercase tracking-widest text-cream/30">
                                                Your Email
                                            </label>
                                            <Input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="name@label.com"
                                                className="bg-transparent border-0 border-b border-input rounded-none px-0 h-auto py-3 text-sm text-cream placeholder:text-cream/20 focus-visible:ring-0 focus-visible:border-gold transition-colors"
                                            />
                                        </div>

                                        {/* Role selector */}
                                        <div className="space-y-2">
                                            <label className="block font-body text-[9px] uppercase tracking-widest text-cream/30">
                                                Your Role
                                            </label>
                                            <Select required value={role} onValueChange={setRole}>
                                                <SelectTrigger className="bg-transparent border-0 border-b border-input rounded-none px-0 h-auto py-3 text-sm text-cream focus:ring-0 focus:border-gold transition-colors cursor-pointer">
                                                    <SelectValue placeholder="Select your role..." />
                                                </SelectTrigger>
                                                <SelectContent className="bg-ink border-graphite/40">
                                                    {ROLES.map((r) => (
                                                        <SelectItem key={r.value} value={r.value} className="text-cream focus:bg-gold/20 focus:text-cream cursor-pointer">
                                                            {r.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        {/* Progress bar */}
                                        <div className="h-[1px] w-full bg-white/[0.06]">
                                            <div
                                                className="h-full bg-gold/60 transition-all duration-500"
                                                style={{ width: email && role ? '100%' : email || role ? '50%' : '0%' }}
                                            />
                                        </div>

                                        {/* Submit */}
                                        <Button
                                            type="submit"
                                            disabled={loading || !email || !role}
                                            className="w-full bg-gold text-obsidian py-4 font-body font-semibold text-xs uppercase tracking-widest hover:bg-cream transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed rounded-none h-auto"
                                        >
                                            {loading ? (
                                                <>
                                                    <div className="w-3 h-3 border border-obsidian/40 border-t-obsidian rounded-full animate-spin" />
                                                    Preparing...
                                                </>
                                            ) : (
                                                <>
                                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0-3-3m3 3 3-3M3 17V7a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                                    </svg>
                                                    Download Resume & Portfolio
                                                </>
                                            )}
                                        </Button>

                                        <p className="font-body text-[9px] text-cream/20 text-center leading-relaxed">
                                            By downloading, you agree to receive occasional updates on new work and availability.
                                        </p>
                                    </form>
                                </>
                            ) : (
                                <div className="py-8 text-center space-y-4">
                                    <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-6">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="font-hand text-gold text-2xl">Download Started.</p>
                                    <p className="font-body text-sm text-cream/40 font-light leading-relaxed max-w-xs mx-auto">
                                        Your file is downloading now! My full resume and portfolio are on their way. Looking forward to potentially working together.
                                    </p>
                                    <div className="pt-4">
                                        <p className="font-hand text-cream/20 text-sm">— Mariyam Rafhiya, Video Editor</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Secondary CTA */}
                        <Button
                            asChild
                            variant="ghost"
                            className="mt-6 p-5 border border-white/[0.04] w-full justify-between h-auto rounded-none hover:border-gold/20 transition-colors"
                        >
                            <a href="#">
                                <div className="text-left">
                                    <p className="font-body text-xs text-cream/50 uppercase tracking-widest mb-1">Prefer to talk first?</p>
                                    <p className="font-hand text-cream/30 text-sm">Book a 20-min intro call</p>
                                </div>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                    className="text-cream/20 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

