
import React from 'react';
import { Card } from '@/components/ui/card';
import { Play, Volume2, Calendar, Sparkles } from 'lucide-react';

const VideoPreview = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-inter font-light text-slate-700 mb-4">
          Your Reflections as Art
        </h2>
        <p className="text-slate-600 text-lg font-inter max-w-2xl mx-auto font-light">
          Weekly videos crafted from your journal entries — thoughtful, beautiful, and uniquely yours
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Video Preview Mockup */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200 p-6 rounded-2xl shadow-sm">
          <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl relative overflow-hidden">
            {/* Video Thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-6 hover:bg-white/90 transition-all duration-200 cursor-pointer shadow-sm">
                <Play className="w-12 h-12 text-slate-600 fill-current" />
              </div>
            </div>
            
            {/* Video Controls Mockup */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-800/80 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-1 bg-slate-400 rounded-full">
                  <div className="w-3 h-1 bg-white rounded-full"></div>
                </div>
                <span className="text-white text-sm font-inter">2:34</span>
              </div>
              <Volume2 className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="text-slate-700 font-inter font-medium text-lg mb-2">
              Week of December 2-8, 2024
            </h3>
            <p className="text-slate-600 font-inter text-sm font-light">
              A gentle summary of your week's reflections and growth moments
            </p>
          </div>
        </Card>

        {/* Features List */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-slate-200/60 p-3 rounded-xl">
              <Sparkles className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <h3 className="text-slate-700 font-inter font-medium text-lg mb-2">
                Thoughtful Visuals
              </h3>
              <p className="text-slate-600 font-inter font-light">
                Beautiful imagery that captures the essence of your reflections
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-slate-200/60 p-3 rounded-xl">
              <Volume2 className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <h3 className="text-slate-700 font-inter font-medium text-lg mb-2">
                Gentle Narration
              </h3>
              <p className="text-slate-600 font-inter font-light">
                Your words brought to life with warm, natural voiceovers
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-slate-200/60 p-3 rounded-xl">
              <Calendar className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <h3 className="text-slate-700 font-inter font-medium text-lg mb-2">
                Weekly Stories
              </h3>
              <p className="text-slate-600 font-inter font-light">
                Automatically crafted each week, preserving your journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;
