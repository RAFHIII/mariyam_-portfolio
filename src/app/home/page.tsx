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

export default function HomePage() {
    return (
        <main className="bg-obsidian min-h-screen">
            {/* Film grain overlay */}
            <div className="grain-overlay" aria-hidden="true" />

            <Header />

            <HeroSection />
            <MarqueeBar />
            <ProcessSection />
            <SelectedWorksSection />
            <FeedbacksSection />
            <BTSSection />
            <TreatmentSection />

            <Footer />
        </main>
    );
}