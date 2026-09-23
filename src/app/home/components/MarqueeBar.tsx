import React from 'react';

const ITEMS = [
    'Video Editing',
    'DaVinci Resolve',
    'Color Grading',
    'CapCut & VN Editor',
    'Motion Typography',
    'Creative Storytelling',
    'Social Media Content',
    'Team Leadership',
    'PicsArt & Snapseed',
];

export default function MarqueeBar() {
    return (
        <div className="border-y border-white/[0.06] bg-ink/30 py-5 overflow-hidden">
            <div className="marquee-track">
                {[...ITEMS, ...ITEMS]?.map((item, i) => (
                    <span key={i} className="inline-block mx-10 font-body text-[10px] uppercase tracking-widest2 text-cream/25">
                        {item}
                        <span className="ml-10 text-gold/40">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
