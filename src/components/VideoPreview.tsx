import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Play, Pause, Volume2, Calendar, Sparkles, Crown, Download, Share2 } from 'lucide-react';

const VideoPreview = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDownload = () => {
    // Download functionality
    console.log('Downloading video...');
  };

  const handleShare = () => {
    // Share functionality
    console.log('Sharing video...');
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 bg-gradient-to-b ">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-[#4B1F00] mb-4 animate-fade-in-up">
          Your Journey as a Story
        </h2>
        <p className="text-[#4B1F00]/80 text-lg font-poppins max-w-2xl mx-auto font-medium animate-fade-in-up animation-delay-200">
          Weekly videos crafted from your journal entries — thoughtful, beautiful, and uniquely yours
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center animate-fade-in-up animation-delay-400">
        {/* Video Preview Mockup */}
        <div className="p-6">
          <div className="aspect-video bg-gradient-to-br from-[#FFE4CC] to-[#FF9456]/30 rounded-xl relative overflow-hidden">
            {/* Video Thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="bg-white/90 backdrop-blur-sm rounded-full p-6 hover:bg-white transition-all duration-200 cursor-pointer shadow-lg hover:scale-110 transform"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <Pause className="w-12 h-12 text-[#E25E1C] fill-current" />
                ) : (
                  <Play className="w-12 h-12 text-[#E25E1C] fill-current" />
                )}
              </div>
            </div>
            
            {/* Video Controls Mockup */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#4B1F00]/80 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-1 bg-[#FFE4CC] rounded-full">
                  <div className="w-3 h-1 bg-[#FF9456] rounded-full"></div>
                </div>
                <span className="text-white text-sm font-poppins">2:34</span>
              </div>
              <div className="flex items-center space-x-3">
                <Volume2 className="w-5 h-5 text-white cursor-pointer hover:text-[#FFE4CC] transition-colors" />
                <Download 
                  className="w-5 h-5 text-white cursor-pointer hover:text-[#FFE4CC] transition-colors" 
                  onClick={handleDownload}
                />
                <Share2 
                  className="w-5 h-5 text-white cursor-pointer hover:text-[#FFE4CC] transition-colors" 
                  onClick={handleShare}
                />
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="text-[#4B1F00] font-poppins font-semibold text-lg mb-2">
              Week of December 2-8, 2024
            </h3>
            <p className="text-[#4B1F00]/70 font-poppins text-sm font-medium">
              A gentle summary of your week's reflections and growth moments
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4 animate-slide-in-right animation-delay-600">
            <div className="bg-[#FF9456]/20 p-3 rounded-xl">
              <Sparkles className="w-6 h-6 text-[#E25E1C]" />
            </div>
            <div>
              <h3 className="text-[#4B1F00] font-poppins font-semibold text-lg mb-2">
                Weekly Videos
              </h3>
              <p className="text-[#4B1F00]/70 font-poppins font-medium">
                Complete 7 days of journaling to automatically receive your weekly video summary
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 animate-slide-in-right animation-delay-800">
            <div className="bg-[#FF9456]/20 p-3 rounded-xl">
              <Volume2 className="w-6 h-6 text-[#E25E1C]" />
            </div>
            <div>
              <h3 className="text-[#4B1F00] font-poppins font-semibold text-lg mb-2">
                Gentle Narration
              </h3>
              <p className="text-[#4B1F00]/70 font-poppins font-medium">
                Your words brought to life with warm, natural voiceovers
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 animate-slide-in-right animation-delay-1000">
            <div className="bg-[#FF9456]/30 p-3 rounded-xl">
              <Crown className="w-6 h-6 text-[#E25E1C]" />
            </div>
            <div>
              <h3 className="text-[#4B1F00] font-poppins font-semibold text-lg mb-2">
                Monthly Recaps
                <span className="text-xs bg-[#E25E1C] text-white px-2 py-1 rounded-full ml-2">Premium</span>
              </h3>
              <p className="text-[#4B1F00]/70 font-poppins font-medium">
                Get bi-weekly and monthly video summaries with premium subscription
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;
