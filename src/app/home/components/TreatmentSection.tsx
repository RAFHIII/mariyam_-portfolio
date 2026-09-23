'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Copy, Check, MessageCircle, Download, ArrowUpRight } from 'lucide-react';

export default function TreatmentSection() {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
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

    const copyToClipboard = (text: string, type: 'email' | 'phone') => {
        navigator.clipboard.writeText(text);
        if (type === 'email') {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        }
    };

    return (
        <section id="treatment" ref={sectionRef} className="py-28 md:py-40 px-6 md:px-12 bg-transparent">
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
                                        alt={`Director who collaborated with Mariyam, profile ${i + 1}`}
                                        className="w-8 h-8 rounded-full border-2 border-obsidian grayscale"
                                    />
                                ))}
                            </div>
                            <p className="font-body text-xs text-cream/30 font-light">
                                <span className="text-cream/60">Trusted by brands, institutes & creators</span> for engaging content
                            </p>
                        </div>
                    </div>

                    {/* 40 — Contact Me Here */}
                    <div className="lg:sticky lg:top-28 reveal reveal-delay-2 space-y-6">
                        <div className="border border-white/[0.08] p-6 md:p-8 relative overflow-hidden rounded-xl bg-white/[0.02] backdrop-blur-sm">
                            {/* Paper texture accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />

                            <div className="mb-8">
                                <p className="font-hand text-gold text-2xl mb-1">contact me here</p>
                                <h3 className="font-display text-cream text-2xl font-bold tracking-tight mb-2">
                                    Let&apos;s create something remarkable.
                                </h3>
                                <p className="font-body text-xs text-cream/40 font-light leading-relaxed">
                                    Ready to discuss a project, collaboration, or creative role? Reach out directly via email or phone.
                                </p>
                            </div>

                            {/* Contact Details Cards */}
                            <div className="space-y-4 mb-8">
                                {/* Email */}
                                <div className="p-4 rounded-lg border border-white/[0.06] bg-black/30 hover:border-gold/30 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-1.5">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                                                <Mail className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="font-body text-[10px] uppercase tracking-widest text-cream/40 font-medium">
                                                Mail ID
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => copyToClipboard('mariyamrafhiya8634@gmail.com', 'email')}
                                            className="text-xs flex items-center gap-1 text-cream/40 hover:text-gold transition-colors py-1 px-2 rounded hover:bg-white/5 cursor-pointer"
                                            title="Copy email address"
                                        >
                                            {copiedEmail ? (
                                                <>
                                                    <Check className="w-3 h-3 text-gold" />
                                                    <span className="text-[10px] text-gold font-medium">Copied</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-3 h-3" />
                                                    <span className="text-[10px]">Copy</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <a
                                        href="mailto:mariyamrafhiya8634@gmail.com"
                                        className="font-body text-sm md:text-base text-cream hover:text-gold font-medium transition-colors block break-all"
                                    >
                                        mariyamrafhiya8634@gmail.com
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="p-4 rounded-lg border border-white/[0.06] bg-black/30 hover:border-gold/30 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-1.5">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                                                <Phone className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="font-body text-[10px] uppercase tracking-widest text-cream/40 font-medium">
                                                No / Phone
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => copyToClipboard('9740773854', 'phone')}
                                            className="text-xs flex items-center gap-1 text-cream/40 hover:text-gold transition-colors py-1 px-2 rounded hover:bg-white/5 cursor-pointer"
                                            title="Copy phone number"
                                        >
                                            {copiedPhone ? (
                                                <>
                                                    <Check className="w-3 h-3 text-gold" />
                                                    <span className="text-[10px] text-gold font-medium">Copied</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-3 h-3" />
                                                    <span className="text-[10px]">Copy</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <a
                                            href="tel:9740773854"
                                            className="font-body text-sm md:text-base text-cream hover:text-gold font-medium transition-colors"
                                        >
                                            +91 9740773854
                                        </a>
                                        <span className="text-[10px] font-hand text-gold/70">Call or WhatsApp</span>
                                    </div>
                                </div>
                            </div>

                            {/* Direct Action Buttons */}
                            <div className="space-y-3">
                                <Button
                                    asChild
                                    className="w-full bg-gold text-obsidian py-4 font-body font-semibold text-xs uppercase tracking-widest hover:bg-cream transition-colors duration-300 rounded-none h-auto justify-center"
                                >
                                    <a href="mailto:mariyamrafhiya8634@gmail.com">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Send an Email
                                    </a>
                                </Button>

                                <div className="grid grid-cols-2 gap-3">
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-white/10 text-cream/80 hover:text-cream hover:border-gold/40 hover:bg-white/[0.03] text-[11px] font-body uppercase tracking-wider py-3 h-auto rounded-none"
                                    >
                                        <a href="tel:9740773854">
                                            <Phone className="w-3.5 h-3.5 mr-1.5 text-gold" />
                                            Call Directly
                                        </a>
                                    </Button>

                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-white/10 text-cream/80 hover:text-cream hover:border-gold/40 hover:bg-white/[0.03] text-[11px] font-body uppercase tracking-wider py-3 h-auto rounded-none"
                                    >
                                        <a
                                            href="https://wa.me/919740773854"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <MessageCircle className="w-3.5 h-3.5 mr-1.5 text-gold" />
                                            WhatsApp
                                        </a>
                                    </Button>
                                </div>

                                {/* Social Links */}
                                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                                    <span className="font-body text-[10px] uppercase tracking-widest text-cream/30">
                                        Social
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <a
                                            href="https://www.instagram.com/fram_e8m?igsi=OHBmNTlqZzQxcHh6&utm_source=qr"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-cream/60 hover:text-gold transition-colors font-body text-xs py-1 px-2 rounded hover:bg-white/5"
                                        >
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gold">
                                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                                <circle cx="12" cy="12" r="4" />
                                                <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
                                            </svg>
                                            <span>Instagram</span>
                                            <ArrowUpRight className="w-3 h-3 opacity-50" />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/rafhiyamariyam/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-cream/60 hover:text-gold transition-colors font-body text-xs py-1 px-2 rounded hover:bg-white/5"
                                        >
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                <rect x="2" y="9" width="4" height="12" />
                                                <circle cx="4" cy="4" r="2" />
                                            </svg>
                                            <span>LinkedIn</span>
                                            <ArrowUpRight className="w-3 h-3 opacity-50" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Resume download quick link */}
                        <div className="border border-white/[0.06] p-4 rounded-xl flex items-center justify-between bg-white/[0.01] hover:border-gold/20 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-cream/60">
                                    <Download className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="font-body text-xs text-cream/80 font-medium">Looking for my CV?</p>
                                    <p className="font-body text-[10px] text-cream/40">Complete credentials & work history</p>
                                </div>
                            </div>
                            <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="text-gold hover:text-cream text-xs font-body uppercase tracking-widest hover:bg-transparent px-2"
                            >
                                <a
                                    href="/resume.pdf"
                                    download="Mariyam_Rafhiya_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1"
                                >
                                    Download PDF
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
