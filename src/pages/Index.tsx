
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import JournalingSection from '@/components/JournalingSection';
import JournalTracker from '@/components/JournalTracker';
import JournalCalendar from '@/components/JournalCalendar';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import VideoPreview from '@/components/VideoPreview';
import SubscriptionSection from '@/components/SubscriptionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-gradient font-inter">
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 animate-pulse-slow" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8B4513 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8B4513 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
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
          <SubscriptionSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
