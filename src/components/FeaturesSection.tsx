
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
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
          <span className="text-purple-700 font-inter text-sm font-medium">Powerful Features</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-inter font-bold text-rose-900 mb-6">
          Everything you need for
          <span className="block text-purple-600">mindful journaling</span>
        </h2>
        
        <p className="text-xl text-rose-700 font-inter max-w-3xl mx-auto font-light">
          From daily writing to AI-powered insights, we've built the complete toolkit for your personal growth journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-white/70 backdrop-blur-sm border-rose-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${getColorClasses(feature.color)}`}>
              <feature.icon className="w-7 h-7" />
            </div>
            <h3 className="text-rose-900 font-inter font-semibold text-xl mb-3">
              {feature.title}
            </h3>
            <p className="text-rose-600 font-inter font-light leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>

      {/* Premium Features */}
      <div className="mt-16 p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border border-amber-200">
        <div className="flex items-center justify-center mb-6">
          <Crown className="w-8 h-8 text-amber-600 mr-3" />
          <h3 className="text-2xl font-inter font-bold text-amber-900">Premium Features</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <h4 className="text-amber-800 font-inter font-semibold text-lg mb-2">Monthly Recap Videos</h4>
            <p className="text-amber-700 font-inter font-light">Get comprehensive monthly video summaries of your journaling journey.</p>
          </div>
          <div className="text-center">
            <h4 className="text-amber-800 font-inter font-semibold text-lg mb-2">Advanced Analytics</h4>
            <p className="text-amber-700 font-inter font-light">Deep insights into your emotional patterns and personal growth trends.</p>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-amber-600 font-inter text-sm">
            Premium subscription required after your first month • Unlock advanced features and unlimited video generation
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
