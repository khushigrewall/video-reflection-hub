
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
        <div className="inline-flex items-center bg-soft-peach/60 backdrop-blur-md border border-cream/40 rounded-full px-6 py-3 mb-8 animate-float">
          <Sparkles className="w-5 h-5 text-terracotta mr-2 animate-glow" />
          <span className="text-warm-brown font-poppins text-sm font-medium">Simple Process</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-poppins font-bold text-warm-brown mb-6 animate-fade-in">
          How Journely
          <span className="block bg-gradient-to-r from-terracotta to-peach bg-clip-text text-transparent animate-glow">transforms your words</span>
        </h2>
        
        <p className="text-xl text-warm-brown/70 font-poppins max-w-4xl mx-auto font-medium animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Our intelligent system doesn't generate text for you - it analyzes your authentic journal entries to create meaningful video memories.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <Card key={index} className="bg-card-gradient backdrop-blur-md border-cream/30 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative group animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-terracotta to-peach rounded-full flex items-center justify-center text-white font-bold text-sm animate-glow">
              {step.step}
            </div>
            
            <div className="bg-soft-peach/60 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">
              <step.icon className="w-7 h-7 text-terracotta" />
            </div>
            
            <h3 className="text-warm-brown font-poppins font-semibold text-lg mb-3">
              {step.title}
            </h3>
            
            <p className="text-warm-brown/70 font-poppins font-medium leading-relaxed">
              {step.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="bg-card-gradient backdrop-blur-md border border-cream/30 rounded-3xl p-8 max-w-4xl mx-auto shadow-xl">
          <h3 className="text-warm-brown font-poppins font-semibold text-xl mb-4">
            🎯 Important: Videos are NOT AI-generated text
          </h3>
          <p className="text-warm-brown/70 font-poppins font-medium leading-relaxed">
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
