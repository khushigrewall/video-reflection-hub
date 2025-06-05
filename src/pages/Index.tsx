
import React from 'react';
import Header from '@/components/Header';
import JournalingSection from '@/components/JournalingSection';
import JournalTracker from '@/components/JournalTracker';
import JournalCalendar from '@/components/JournalCalendar';
import VideoPreview from '@/components/VideoPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-reflect-gradient font-inter">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #8B7355 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #8B7355 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="space-y-16">
          <JournalingSection />
          <JournalTracker />
          <JournalCalendar />
          <VideoPreview />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
