
import React from 'react';
import { Card } from '@/components/ui/card';
import { Shield, Clock, Heart, Sparkles, Crown, Calendar, BookOpen, Video } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Smart Journal Editor",
      description: "Write freely with our distraction-free editor that saves your thoughts automatically.",
      color: "rose"
    },
    {
      icon: Calendar,
      title: "Progress Tracking",
      description: "Visual calendar to track your journaling consistency and celebrate your streaks.",
      color: "purple"
    },
    {
      icon: Video,
      title: "AI Video Generation",
      description: "Transform 7 days of journaling into beautiful, personalized video memories.",
      color: "orange"
    },
    {
      icon: Heart,
      title: "Emotion Analysis",
      description: "Understand your emotional patterns and growth through intelligent text analysis.",
      color: "pink"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your thoughts are encrypted and secure. Only you have access to your personal journals.",
      color: "green"
    },
    {
      icon: Clock,
      title: "Memory Timeline",
      description: "Browse through your past entries and see how your thoughts have evolved over time.",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      rose: "bg-rose-100 text-rose-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      pink: "bg-pink-100 text-pink-600",
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-rose-100 text-rose-600";
  };

  return (
    <section id="features" className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center bg-slate-100 border border-slate-200 rounded-full px-6 py-3 mb-8">
          <Sparkles className="w-5 h-5 text-slate-600 mr-3" />
          <span className="text-slate-700 font-inter text-sm font-semibold tracking-wide uppercase">Powerful Features</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-inter font-bold text-slate-900 mb-8 leading-tight">
          Everything you need for
          <span className="block text-slate-700 mt-2">mindful journaling</span>
        </h2>
        
        <p className="text-xl text-slate-600 font-inter max-w-4xl mx-auto leading-relaxed font-light">
          From daily writing to AI-powered insights, we've built the complete toolkit for your personal growth journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="bg-white/90 backdrop-blur-sm border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-slide-up group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${getColorClasses(feature.color)}`}>
              <feature.icon className="w-7 h-7" />
            </div>
            <h3 className="text-slate-900 font-inter font-bold text-xl mb-4 tracking-tight">
              {feature.title}
            </h3>
            <p className="text-slate-600 font-inter leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Premium Features */}
      <div className="mt-20 p-10 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-slate-200 animate-fade-in-delayed">
        <div className="flex items-center justify-center mb-8">
          <Crown className="w-8 h-8 text-amber-600 mr-4" />
          <h3 className="text-3xl font-inter font-bold text-slate-900 tracking-tight">Premium Features</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <h4 className="text-slate-800 font-inter font-bold text-xl mb-3 tracking-tight">Monthly Recap Videos</h4>
            <p className="text-slate-600 font-inter leading-relaxed">Get comprehensive monthly video summaries of your journaling journey.</p>
          </div>
          <div className="text-center">
            <h4 className="text-slate-800 font-inter font-bold text-xl mb-3 tracking-tight">Advanced Analytics</h4>
            <p className="text-slate-600 font-inter leading-relaxed">Deep insights into your emotional patterns and personal growth trends.</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-slate-500 font-inter text-sm">
            Premium subscription required after your first month • Unlock advanced features and unlimited video generation
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
