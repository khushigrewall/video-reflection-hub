
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
      rose: "bg-soft-peach/60 text-terracotta",
      purple: "bg-soft-peach/60 text-terracotta",
      orange: "bg-soft-peach/60 text-terracotta",
      pink: "bg-soft-peach/60 text-terracotta",
      green: "bg-soft-peach/60 text-terracotta",
      blue: "bg-soft-peach/60 text-terracotta"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-soft-peach/60 text-terracotta";
  };

  return (
    <section id="features" className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-soft-peach/60 backdrop-blur-md border border-cream/40 rounded-full px-6 py-3 mb-8 animate-float">
          <Sparkles className="w-5 h-5 text-terracotta mr-2 animate-glow" />
          <span className="text-warm-brown font-poppins text-sm font-medium">Powerful Features</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-poppins font-bold text-warm-brown mb-6 animate-fade-in">
          Everything you need for
          <span className="block bg-gradient-to-r from-terracotta to-peach bg-clip-text text-transparent animate-glow">
            mindful journaling
          </span>
        </h2>
        
        <p className="text-xl text-warm-brown/70 font-poppins max-w-4xl mx-auto font-medium animate-fade-in" style={{ animationDelay: '0.1s' }}>
          From daily writing to AI-powered insights, we've built the complete toolkit for your personal growth journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-card-gradient backdrop-blur-md border-cream/30 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float ${getColorClasses(feature.color)}`}>
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="text-warm-brown font-poppins font-semibold text-xl mb-3">
              {feature.title}
            </h3>
            <p className="text-warm-brown/70 font-poppins font-medium leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Premium Features with animation */}
      <div className="mt-16 p-8 bg-card-gradient backdrop-blur-md rounded-3xl border border-cream/30 shadow-xl animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="flex items-center justify-center mb-6">
          <Crown className="w-8 h-8 text-terracotta mr-3 animate-glow" />
          <h3 className="text-2xl font-poppins font-bold text-warm-brown">Premium Features</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <h4 className="text-warm-brown font-poppins font-semibold text-lg mb-2">Monthly Recap Videos</h4>
            <p className="text-warm-brown/70 font-poppins font-medium">Get comprehensive monthly video summaries of your journaling journey.</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '1.0s' }}>
            <h4 className="text-warm-brown font-poppins font-semibold text-lg mb-2">Advanced Analytics</h4>
            <p className="text-warm-brown/70 font-poppins font-medium">Deep insights into your emotional patterns and personal growth trends.</p>
          </div>
        </div>
        
        <div className="text-center mt-6 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <p className="text-warm-brown/60 font-poppins text-sm">
            Premium subscription required after your first month • Unlock advanced features and unlimited video generation
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
