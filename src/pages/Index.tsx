
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
    <div className="min-h-screen bg-warm-gradient font-poppins">
      {/* Subtle Pattern Overlay with Animation */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 animate-pulse-slow" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #4B1F00 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #E25E1C 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>
      
      <div className="relative z-10">
        <div className="animate-fade-in">
          <Header />
        </div>
        
        <main className="space-y-20">
          <div className="animate-fade-in">
            <HeroSection />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <JournalingSection />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <JournalTracker />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <JournalCalendar />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <FeaturesSection />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1.0s' }}>
            <HowItWorksSection />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <VideoPreview />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <SubscriptionSection />
          </div>
        </main>
        
        <div className="animate-fade-in" style={{ animationDelay: '1.6s' }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
