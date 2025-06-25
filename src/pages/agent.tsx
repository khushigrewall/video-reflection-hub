
import React from 'react';
import { Header } from '@/components/Header';
import { AgentHeroSection } from '@/components/AgentHeroSection';
import { Footer } from '@/components/Footer';

const Agent = () => {
  return (
    <div className="min-h-screen bg-warm-gradient animate-fade-in">
      <Header />
      <main className="flex flex-col items-center">
        <AgentHeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Agent;
