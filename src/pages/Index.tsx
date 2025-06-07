
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
      <Header />
      
      <main className="space-y-20">
        <div className="animate-fade-in">
          <HeroSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <JournalingSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <JournalTracker />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <JournalCalendar />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <FeaturesSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <HowItWorksSection />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <VideoPreview />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <SubscriptionSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
