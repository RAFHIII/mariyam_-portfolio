'use client';
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FeedbackItem {
    id: string;
    quote: string;
    author: string;
    role: string;
}

const FEEDBACKS: FeedbackItem[] = [
    {
        id: 'f6',
        quote: "Your content truly deserved the collab! We got more to do. Looking forward to meeting you and the NIPE video team soon!",
        author: "Nitte Education",
        role: "Official Administration"
    },
    {
        id: 'f2',
        quote: "It's not just one thing, it's the whole you part that makes it so good. The way you capture every moment and bring everything to life ✨ The passion and dedication you pour into your content is what makes all the difference.",
        author: "Client Feedback",
        role: "fram_e8m community"
    },
    {
        id: 'f3',
        quote: "Next time we are giving you a media pass! 🙌",
        author: "@nitteeducation",
        role: "NITTE University"
    },
    {
        id: 'f1',
        quote: "❤️❤️ (Appreciation on content)",
        author: "Arjun Kanungo",
        role: "Singer & Composer"
    },
    {
        id: 'f5',
        quote: "❤️❤️❤️❤️",
        author: "Jnaneshwar Maroor",
        role: "Principal, NIPE"
    },
    {
        id: 'f4',
        quote: "🙌🔥",
        author: "@niree__hebri",
        role: "Supporter"
    }
];

export default function FeedbacksSection() {
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
        <section id="feedback" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-transparent border-b border-white/[0.06]">
            <div className="max-w-8xl mx-auto">
                {/* Header */}
                <div className="mb-16 text-center md:text-left reveal">
                    <p className="font-hand text-gold text-lg mb-3">words from clients</p>
                    <h2 className="font-display text-cream text-[clamp(2rem,5vw,4rem)] font-black leading-none tracking-tight">
                        Client <span className="italic font-light text-cream/40">Feedbacks.</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {FEEDBACKS.map((item, i) => (
                        <Card 
                            key={item.id} 
                            className={`reveal reveal-delay-${i % 3 + 1} bg-white/[0.02] border-white/[0.05] hover:border-gold/30 transition-all duration-500 rounded-2xl relative overflow-hidden group hover:-translate-y-2`}
                        >
                            {/* Gold Accent Bar */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold/80 to-gold/20" />
                            
                            <CardContent className="p-8 md:p-10 flex flex-col h-full justify-between">
                                {/* Quote Icon */}
                                <svg className="w-10 h-10 text-gold/20 mb-6 group-hover:text-gold/40 transition-colors" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                                
                                <p className="font-hand text-cream/90 text-xl md:text-2xl leading-relaxed mb-8 relative z-10">
                                    "{item.quote}"
                                </p>
                                
                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="w-8 h-[1px] bg-gold/50" />
                                    <div>
                                        <p className="font-body text-sm text-cream font-medium uppercase tracking-wider mb-1">
                                            {item.author}
                                        </p>
                                        <p className="font-body text-[10px] text-cream/40 uppercase tracking-widest">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
