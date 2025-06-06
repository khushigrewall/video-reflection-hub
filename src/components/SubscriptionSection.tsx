
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Crown, Sparkles, Video, Calendar, Brain, Star, Zap } from 'lucide-react';

const SubscriptionSection = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started with journaling",
      features: [
        "Daily journaling",
        "Basic progress tracking",
        "Weekly video after 7 days",
        "Calendar view",
        "Basic analytics"
      ],
      buttonText: "Start Free",
      popular: false,
      icon: Sparkles
    },
    {
      name: "Premium",
      price: "₹299",
      period: "per month",
      description: "Advanced features for serious journalers",
      features: [
        "Everything in Free",
        "Bi-weekly video summaries",
        "Monthly recap videos",
        "Advanced AI insights",
        "Emotion pattern analysis",
        "Export journal data",
        "Priority support",
        "Custom video themes"
      ],
      buttonText: "Go Premium",
      popular: true,
      icon: Crown
    },
    {
      name: "Lifetime",
      price: "₹2,999",
      period: "one-time",
      description: "Complete journaling experience forever",
      features: [
        "Everything in Premium",
        "Lifetime access",
        "Unlimited video generation",
        "Annual recap videos",
        "Advanced memory connections",
        "Personal growth reports",
        "Early feature access",
        "Direct support line"
      ],
      buttonText: "Get Lifetime",
      popular: false,
      icon: Star
    }
  ];

  return (
    <section id="pricing" className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
          <Crown className="w-5 h-5 text-white mr-2" />
          <span className="text-white font-inter text-sm font-medium">Choose Your Plan</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-inter font-bold text-white mb-6">
          Start Your Journey
          <span className="block bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
            Choose What Fits
          </span>
        </h2>
        
        <p className="text-xl text-white/90 font-inter max-w-3xl mx-auto font-light">
          Begin with free journaling, then upgrade after your first month for advanced video features and insights.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`relative p-8 rounded-3xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              plan.popular 
                ? 'bg-white/20 border-2 border-white/40 shadow-xl scale-105' 
                : 'bg-white/10 border border-white/20 shadow-lg hover:bg-white/15'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white/30 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium border border-white/30">
                  Most Popular
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-3 rounded-2xl ${plan.popular ? 'bg-white/30' : 'bg-white/20'}`}>
                <plan.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-inter font-semibold text-2xl">{plan.name}</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-white/70 font-light">/{plan.period}</span>
              </div>
              <p className="text-white/80 font-inter text-sm mt-2">{plan.description}</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/90 font-inter text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className={`w-full py-4 text-lg font-inter font-medium rounded-xl transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white/30 hover:bg-white/40 text-white border border-white/40 shadow-lg hover:shadow-xl' 
                  : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
              }`}
            >
              <Zap className="w-5 h-5 mr-2" />
              {plan.buttonText}
            </Button>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <Video className="w-6 h-6 text-white" />
            <h3 className="text-white font-inter font-semibold text-xl">Video Generation</h3>
          </div>
          <p className="text-white/80 font-inter leading-relaxed">
            Premium unlocks bi-weekly and monthly video recaps. Your authentic journal entries are analyzed 
            to create meaningful video memories that connect your experiences over time.
          </p>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="w-6 h-6 text-white" />
            <h3 className="text-white font-inter font-semibold text-xl">AI Analysis</h3>
          </div>
          <p className="text-white/80 font-inter leading-relaxed">
            Advanced AI studies your writing patterns, emotional growth, and memory connections to provide 
            deeper insights into your personal development journey.
          </p>
        </Card>
      </div>

      <div className="text-center mt-12">
        <p className="text-white/70 font-inter text-sm">
          ✨ Start free, upgrade anytime. Cancel or change plans easily through your account settings.
        </p>
      </div>
    </section>
  );
};

export default SubscriptionSection;
