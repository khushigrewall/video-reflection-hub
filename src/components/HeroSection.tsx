
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Sparkles, Brain, Video, Calendar, Star, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8 animate-float">
          <Star className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-inter text-sm font-medium">Document. Analyze. Remember.</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-inter font-bold text-white mb-8 leading-tight">
          Write Your
          <span className="block bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent animate-glow">
            Life Story
          </span>
        </h1>
        
        <p className="text-xl text-white/90 font-inter max-w-4xl mx-auto mb-12 leading-relaxed font-light">
          Anyone can write journals daily and track progress. After 7 consecutive days, 
          our AI analyzes your authentic entries and creates personalized video memories that capture your growth and insights.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 px-10 py-5 text-lg font-inter font-medium rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <Video className="w-6 h-6 mr-3" />
            Start Your Journey
          </Button>
          <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/30 px-10 py-5 text-lg font-inter font-medium rounded-2xl backdrop-blur-md">
            <Play className="w-6 h-6 mr-3" />
            Watch Preview
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-2xl text-center hover:bg-white/15 transition-all duration-300">
            <Users className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">50K+</h3>
            <p className="text-white/80 font-light">Active Journalers</p>
          </Card>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-2xl text-center hover:bg-white/15 transition-all duration-300">
            <Video className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">100K+</h3>
            <p className="text-white/80 font-light">Videos Generated</p>
          </Card>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 rounded-2xl text-center hover:bg-white/15 transition-all duration-300">
            <Award className="w-8 h-8 text-white mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-1">98%</h3>
            <p className="text-white/80 font-light">User Satisfaction</p>
          </Card>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
          <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-white font-inter font-semibold text-xl mb-3">Smart Daily Tracking</h3>
          <p className="text-white/80 font-inter font-light leading-relaxed">
            Write and track your daily thoughts with our intelligent interface that learns your patterns.
          </p>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
          <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-white font-inter font-semibold text-xl mb-3">AI Memory Analysis</h3>
          <p className="text-white/80 font-inter font-light leading-relaxed">
            Advanced AI studies your journal patterns and emotional journey for deeper insights.
          </p>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
          <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Video className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-white font-inter font-semibold text-xl mb-3">Weekly Video Memories</h3>
          <p className="text-white/80 font-inter font-light leading-relaxed">
            Get beautiful video summaries after 7 days of consistent journaling.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
