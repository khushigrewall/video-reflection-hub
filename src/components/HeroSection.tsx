
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Sparkles, Brain, Video, Calendar } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-rose-50 border border-rose-200 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-rose-600 mr-2" />
          <span className="text-rose-700 font-inter text-sm font-medium">Transform your thoughts into memories</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-inter font-bold text-rose-900 mb-6 leading-tight">
          Document Your
          <span className="block bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
            Daily Journey
          </span>
        </h1>
        
        <p className="text-xl text-rose-700 font-inter max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Anyone can write journals everyday and track their progress. We analyze your journal entries over time 
          and create personalized AI-generated video summaries that capture your growth, memories, and insights.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-inter font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            <Video className="w-5 h-5 mr-2" />
            Start Journaling Today
          </Button>
          <Button variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50 px-8 py-4 text-lg font-inter font-medium rounded-xl">
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-white/70 backdrop-blur-sm border-rose-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
          <div className="bg-rose-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-rose-600" />
          </div>
          <h3 className="text-rose-900 font-inter font-semibold text-lg mb-2">Daily Tracking</h3>
          <p className="text-rose-600 font-inter font-light leading-relaxed">
            Write and track your daily thoughts, emotions, and experiences with our intuitive interface.
          </p>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-rose-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
          <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Brain className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-rose-900 font-inter font-semibold text-lg mb-2">AI Analysis</h3>
          <p className="text-rose-600 font-inter font-light leading-relaxed">
            Our AI studies your journal patterns, emotions, and growth to understand your unique journey.
          </p>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-rose-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
          <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Video className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-rose-900 font-inter font-semibold text-lg mb-2">Weekly Videos</h3>
          <p className="text-rose-600 font-inter font-light leading-relaxed">
            Get personalized video summaries after completing 7 days of consistent journaling.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
