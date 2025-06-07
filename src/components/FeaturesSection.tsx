
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
      <div className="text-center mb-16 animate-fade-in-smooth">
        <div className="inline-flex items-center bg-soft-peach border border-cream rounded-full px-6 py-3 mb-8 shadow-sm">
          <Sparkles className="w-5 h-5 text-terracotta mr-3" />
          <span className="text-warm-brown font-poppins text-sm font-semibold tracking-wide uppercase">Powerful Features</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-poppins font-bold text-warm-brown mb-6 leading-tight tracking-tight animate-slide-in-up">
          Everything you need for
          <span className="block text-terracotta mt-3 animate-slide-in-up-delayed">mindful journaling</span>
        </h2>
        
        <p className="text-xl text-warm-brown/70 font-inter max-w-4xl mx-auto leading-relaxed font-medium animate-fade-in-delayed">
          From daily writing to AI-powered insights, we've built the complete toolkit for your personal growth journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="bg-white/90 backdrop-blur-sm border border-cream p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-slide-up group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${getColorClasses(feature.color)}`}>
              <feature.icon className="w-7 h-7" />
            </div>
            <h3 className="text-warm-brown font-poppins font-bold text-xl mb-4 tracking-tight">
              {feature.title}
            </h3>
            <p className="text-warm-brown/70 font-inter leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Premium Features */}
      <div className="mt-20 p-10 bg-gradient-to-br from-soft-peach to-light-cream rounded-3xl border border-cream animate-fade-in-delayed shadow-sm">
        <div className="flex items-center justify-center mb-8">
          <Crown className="w-8 h-8 text-terracotta mr-4" />
          <h3 className="text-3xl font-poppins font-bold text-warm-brown tracking-tight">Premium Features</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <h4 className="text-warm-brown font-poppins font-bold text-xl mb-3 tracking-tight">Monthly Recap Videos</h4>
            <p className="text-warm-brown/70 font-inter leading-relaxed">Get comprehensive monthly video summaries of your journaling journey.</p>
          </div>
          <div className="text-center">
            <h4 className="text-warm-brown font-poppins font-bold text-xl mb-3 tracking-tight">Advanced Analytics</h4>
            <p className="text-warm-brown/70 font-inter leading-relaxed">Deep insights into your emotional patterns and personal growth trends.</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-warm-brown/50 font-inter text-sm">
            Premium subscription required after your first month • Unlock advanced features and unlimited video generation
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
