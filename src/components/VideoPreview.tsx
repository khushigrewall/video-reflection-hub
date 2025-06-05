
import React from 'react';
import { Card } from '@/components/ui/card';
import { Play, Volume2, Calendar, Sparkles } from 'lucide-react';

const VideoPreview = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-4">
          See Your Reflections as a Video
        </h2>
        <p className="text-white/80 text-lg font-inter max-w-2xl mx-auto">
          Your journal entries are converted into a weekly video using AI — complete with voiceovers and beautiful visuals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Video Preview Mockup */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-2xl shadow-2xl">
          <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl relative overflow-hidden">
            {/* Video Thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-200 cursor-pointer">
                <Play className="w-12 h-12 text-white fill-current" />
              </div>
            </div>
            
            {/* Video Controls Mockup */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-1 bg-white/30 rounded-full">
                  <div className="w-3 h-1 bg-white rounded-full"></div>
                </div>
                <span className="text-white text-sm font-inter">2:34</span>
              </div>
              <Volume2 className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="text-white font-inter font-semibold text-lg mb-2">
              Week of December 2-8, 2024
            </h3>
            <p className="text-white/70 font-inter text-sm">
              A beautiful summary of your week's reflections, featuring your growth moments and gratitude.
            </p>
          </div>
        </Card>

        {/* Features List */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-purple-500/20 p-3 rounded-xl">
              <Sparkles className="w-6 h-6 text-purple-300" />
            </div>
            <div>
              <h3 className="text-white font-inter font-semibold text-lg mb-2">
                AI-Generated Visuals
              </h3>
              <p className="text-white/70 font-inter">
                Beautiful, contextual imagery that matches your journal entries and emotions.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-pink-500/20 p-3 rounded-xl">
              <Volume2 className="w-6 h-6 text-pink-300" />
            </div>
            <div>
              <h3 className="text-white font-inter font-semibold text-lg mb-2">
                Natural Voiceovers
              </h3>
              <p className="text-white/70 font-inter">
                Your words brought to life with AI-generated speech that captures the right tone.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-500/20 p-3 rounded-xl">
              <Calendar className="w-6 h-6 text-blue-300" />
            </div>
            <div>
              <h3 className="text-white font-inter font-semibold text-lg mb-2">
                Weekly Summaries
              </h3>
              <p className="text-white/70 font-inter">
                Automatically compiled every week, creating a visual diary of your personal growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;
