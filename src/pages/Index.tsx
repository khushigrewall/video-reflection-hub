
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import JournalingSection from '@/components/JournalingSection';
import JournalTracker from '@/components/JournalTracker';
import JournalCalendar from '@/components/JournalCalendar';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import VideoPreview from '@/components/VideoPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 font-inter">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #e11d48 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #a855f7 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="space-y-20">
          <HeroSection />
          <JournalingSection />
          <JournalTracker />
          <JournalCalendar />
          <FeaturesSection />
          <HowItWorksSection />
          <VideoPreview />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
