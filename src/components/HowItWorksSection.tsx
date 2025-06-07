
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
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-green-600 mr-2" />
          <span className="text-green-700 font-inter text-sm font-medium">Simple Process</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-inter font-bold text-rose-900 mb-6">
          How Reflect AI
          <span className="block text-green-600">transforms your words</span>
        </h2>
        
        <p className="text-xl text-rose-700 font-inter max-w-3xl mx-auto font-light">
          Our intelligent system doesn't generate text for you - it analyzes your authentic journal entries to create meaningful video memories.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <Card key={index} className="bg-white/70 backdrop-blur-sm border-rose-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 relative">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-rose-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {step.step}
            </div>
            
            <div className="bg-rose-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <step.icon className="w-6 h-6 text-rose-600" />
            </div>
            
            <h3 className="text-rose-900 font-inter font-semibold text-lg mb-3">
              {step.title}
            </h3>
            
            <p className="text-rose-600 font-inter font-light leading-relaxed">
              {step.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-blue-900 font-inter font-semibold text-xl mb-4">
            🎯 Important: Videos are NOT AI-generated text
          </h3>
          <p className="text-blue-700 font-inter leading-relaxed">
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
