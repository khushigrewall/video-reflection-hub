
import React from 'react';
import { Card } from '@/components/ui/card';
import { Play, Volume2, Calendar, Sparkles, Crown } from 'lucide-react';

const VideoPreview = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-poppins font-bold text-warm-brown mb-6">
          Your Journey as a Story
        </h2>
        <p className="text-warm-brown/70 text-xl font-poppins max-w-3xl mx-auto font-medium">
          Weekly videos crafted from your journal entries — thoughtful, beautiful, and uniquely yours
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Video Preview Mockup */}
        <Card className="bg-card-gradient backdrop-blur-md border-cream/30 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="aspect-video bg-gradient-to-br from-soft-peach/60 to-cream/60 rounded-2xl relative overflow-hidden">
            {/* Video Thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-card-gradient backdrop-blur-md rounded-full p-6 hover:bg-soft-peach/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
                <Play className="w-12 h-12 text-terracotta fill-current" />
              </div>
            </div>
            
            {/* Video Controls Mockup */}
            <div className="absolute bottom-4 left-4 right-4 bg-warm-brown/80 backdrop-blur-md rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-1 bg-cream/60 rounded-full">
                  <div className="w-3 h-1 bg-terracotta rounded-full"></div>
                </div>
                <span className="text-cream text-sm font-poppins">2:34</span>
              </div>
              <Volume2 className="w-5 h-5 text-cream" />
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="text-warm-brown font-poppins font-semibold text-lg mb-2">
              Week of December 2-8, 2024
            </h3>
            <p className="text-warm-brown/70 font-poppins text-sm font-medium">
              A gentle summary of your week's reflections and growth moments
            </p>
          </div>
        </Card>

        {/* Features List */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-soft-peach/60 p-3 rounded-2xl">
              <Sparkles className="w-6 h-6 text-terracotta" />
            </div>
            <div>
              <h3 className="text-warm-brown font-poppins font-semibold text-lg mb-2">
                Weekly Videos
              </h3>
              <p className="text-warm-brown/70 font-poppins font-medium">
                Complete 7 days of journaling to automatically receive your weekly video summary
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-soft-peach/60 p-3 rounded-2xl">
              <Volume2 className="w-6 h-6 text-terracotta" />
            </div>
            <div>
              <h3 className="text-warm-brown font-poppins font-semibold text-lg mb-2">
                Gentle Narration
              </h3>
              <p className="text-warm-brown/70 font-poppins font-medium">
                Your words brought to life with warm, natural voiceovers
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-soft-peach/60 p-3 rounded-2xl">
              <Crown className="w-6 h-6 text-terracotta" />
            </div>
            <div>
              <h3 className="text-warm-brown font-poppins font-semibold text-lg mb-2">
                Monthly Recaps
                <span className="text-xs bg-soft-peach/60 text-terracotta px-2 py-1 rounded-full ml-2 font-medium">Premium</span>
              </h3>
              <p className="text-warm-brown/70 font-poppins font-medium">
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
