
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import VideoPreview from '@/components/VideoPreview';
import SubscriptionSection from '@/components/SubscriptionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-warm-gradient animate-fade-in">
      <Header />
      <main className="flex flex-col items-center">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <VideoPreview />
        <SubscriptionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
