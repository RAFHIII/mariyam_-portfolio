import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import MarqueeBar from './components/MarqueeBar';
import ProcessSection from './components/ProcessSection';
import SelectedWorksSection from './components/SelectedWorksSection';
import FeedbacksSection from './components/FeedbacksSection';
import BTSSection from './components/BTSSection';
import TreatmentSection from './components/TreatmentSection';
import Grainient from '@/components/ui/Grainient';

export default function HomePage() {
    return (
        <main className="bg-obsidian min-h-screen relative overflow-x-hidden">
            {/* Film grain overlay */}
            <div className="grain-overlay" aria-hidden="true" />

            {/* Subtle ambient Grainient background with portfolio color theme */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-20 overflow-hidden"
                aria-hidden="true"
            >
                <Grainient
                    color1="#C9A84C"
                    color2="#2A2215"
                    color3="#0B0B0D"
                    timeSpeed={0.25}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={50}
                    blendAngle={0}
                    blendSoftness={0.05}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0.1}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={1}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>

            {/* Main content layer */}
            <div className="relative z-10">
                <Header />
                <HeroSection />
                <MarqueeBar />
                <ProcessSection />
                <SelectedWorksSection />
                <FeedbacksSection />
                <BTSSection />
                <TreatmentSection />
                <Footer />
            </div>
        </main>
    );
}