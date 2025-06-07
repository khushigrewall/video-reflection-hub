
import React from 'react';
import { Card } from '@/components/ui/card';
import { PenTool, Calendar, Brain, Video, Sparkles } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: PenTool,
      title: "Write Your Thoughts",
      description: "Use our intuitive journal editor to capture your daily experiences, emotions, and reflections.",
      step: "01"
    },
    {
      icon: Calendar,
      title: "Track Your Progress",
      description: "Complete 7 consecutive days of journaling to unlock your first AI-generated video summary.",
      step: "02"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced AI studies your journal entries, identifying patterns, emotions, and key insights.",
      step: "03"
    },
    {
      icon: Video,
      title: "Get Your Video",
      description: "Receive a beautiful, personalized video that captures your week's journey and growth.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center bg-slate-100 border border-slate-200 rounded-full px-6 py-3 mb-8">
          <Sparkles className="w-5 h-5 text-slate-600 mr-3" />
          <span className="text-slate-700 font-inter text-sm font-semibold tracking-wide uppercase">Simple Process</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-inter font-bold text-slate-900 mb-8 leading-tight">
          How Reflect AI
          <span className="block text-slate-700 mt-2">transforms your words</span>
        </h2>
        
        <p className="text-xl text-slate-600 font-inter max-w-4xl mx-auto leading-relaxed font-light">
          Our intelligent system doesn't generate text for you - it analyzes your authentic journal entries to create meaningful video memories.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <Card 
            key={index} 
            className="bg-white/90 backdrop-blur-sm border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 relative animate-slide-up group"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
              {step.step}
            </div>
            
            <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
              <step.icon className="w-7 h-7 text-slate-700" />
            </div>
            
            <h3 className="text-slate-900 font-inter font-bold text-xl mb-4 tracking-tight">
              {step.title}
            </h3>
            
            <p className="text-slate-600 font-inter leading-relaxed">
              {step.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-20 animate-fade-in-delayed">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 max-w-5xl mx-auto">
          <h3 className="text-slate-900 font-inter font-bold text-2xl mb-6 text-center tracking-tight">
            🎯 Important: Videos are NOT AI-generated text
          </h3>
          <p className="text-slate-600 font-inter leading-relaxed text-lg text-center">
            We analyze your authentic journal entries to understand your emotional journey, growth patterns, and key moments. 
            The AI creates a video narrative based on YOUR words and experiences, not generated content. 
            Your voice and authentic thoughts are what make each video truly personal and meaningful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
