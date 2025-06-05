
import React from 'react';
import Header from '@/components/Header';
import JournalingSection from '@/components/JournalingSection';
import VideoPreview from '@/components/VideoPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-reflect-gradient font-inter">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main>
          <JournalingSection />
          <VideoPreview />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
