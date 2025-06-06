
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Crown, Sparkles, Video, Calendar, Brain, Star, Zap, Mail } from 'lucide-react';

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');

  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "1 month only",
      description: "Perfect for getting started with journaling",
      features: [
        "Daily journaling for 1 month",
        "Basic progress tracking",
        "Weekly video (1 month only)",
        "Calendar view",
        "Basic analytics"
      ],
      buttonText: "Start Free",
      popular: false,
      icon: Sparkles
    },
    {
      name: "6 Month Plan",
      price: "₹1,499",
      period: "6 months",
      description: "Best value for consistent journalers",
      features: [
        "Everything in Free",
        "Weekly video summaries",
        "Bi-weekly video summaries", 
        "Monthly recap videos",
        "Advanced AI insights",
        "Emotion pattern analysis",
        "Export journal data",
        "Priority support"
      ],
      buttonText: "Choose 6 Months",
      popular: true,
      icon: Crown
    },
    {
      name: "1 Year Plan",
      price: "₹2,499",
      period: "12 months",
      description: "Complete journaling experience with yearly recap",
      features: [
        "Everything in 6 Month Plan",
        "Weekly video summaries",
        "Bi-weekly video summaries",
        "Monthly recap videos", 
        "Annual recap video",
        "Advanced memory connections",
        "Personal growth reports",
        "Early feature access"
      ],
      buttonText: "Get 1 Year",
      popular: false,
      icon: Star
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section id="pricing" className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-white/50 backdrop-blur-md border border-amber-200/40 rounded-full px-6 py-3 mb-8">
          <Crown className="w-5 h-5 text-amber-800 mr-2" />
          <span className="text-amber-800 font-inter text-sm font-medium">Choose Your Plan</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-inter font-bold text-amber-900 mb-6">
          Start Your Journey
          <span className="block text-amber-700">
            Choose What Fits
          </span>
        </h2>
        
        <p className="text-xl text-amber-700 font-inter max-w-3xl mx-auto font-light">
          Begin with free journaling for one month, then upgrade for continuous video features and insights.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`relative p-8 rounded-3xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              plan.popular 
                ? 'bg-white/60 border-2 border-orange-300 shadow-xl scale-105' 
                : 'bg-white/40 border border-amber-200/40 shadow-lg hover:bg-white/50'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-3 rounded-2xl ${plan.popular ? 'bg-orange-200' : 'bg-amber-100/60'}`}>
                <plan.icon className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-amber-900 font-inter font-semibold text-2xl">{plan.name}</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold text-amber-900">{plan.price}</span>
                <span className="text-amber-700 font-light">/{plan.period}</span>
              </div>
              <p className="text-amber-700 font-inter text-sm mt-2">{plan.description}</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-amber-800 font-inter text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className={`w-full py-4 text-lg font-inter font-medium rounded-xl transition-all duration-300 ${
                plan.popular 
                  ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl' 
                  : 'bg-white/60 hover:bg-white/70 text-amber-900 border border-orange-300'
              }`}
            >
              <Zap className="w-5 h-5 mr-2" />
              {plan.buttonText}
            </Button>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card className="bg-white/40 backdrop-blur-md border border-amber-200/40 p-8 rounded-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <Video className="w-6 h-6 text-amber-800" />
            <h3 className="text-amber-900 font-inter font-semibold text-xl">Video Generation</h3>
          </div>
          <p className="text-amber-700 font-inter leading-relaxed">
            After 7 days of journaling, our AI analyzes your authentic entries to create meaningful 
            video memories that connect your experiences over time.
          </p>
        </Card>

        <Card className="bg-white/40 backdrop-blur-md border border-amber-200/40 p-8 rounded-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="w-6 h-6 text-amber-800" />
            <h3 className="text-amber-900 font-inter font-semibold text-xl">AI Analysis</h3>
          </div>
          <p className="text-amber-700 font-inter leading-relaxed">
            Advanced AI studies your writing patterns, emotional growth, and memory connections to provide 
            deeper insights into your personal development journey.
          </p>
        </Card>
      </div>

      {/* Newsletter Subscription */}
      <Card className="bg-white/50 backdrop-blur-md border border-amber-200/40 p-8 rounded-3xl max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Mail className="w-6 h-6 text-amber-800" />
            <h3 className="text-amber-900 font-inter font-semibold text-xl">Subscribe to Our Self-Care Newsletter</h3>
          </div>
          <p className="text-amber-700 font-inter">
            Get weekly tips on journaling, mental wellness, and personal growth delivered to your inbox.
          </p>
        </div>
        
        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-xl bg-white/60 border border-amber-200/40 text-amber-900 placeholder:text-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <Button 
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-inter font-medium transition-all duration-300"
          >
            Subscribe
          </Button>
        </form>
      </Card>

      <div className="text-center mt-12">
        <p className="text-amber-600 font-inter text-sm">
          ✨ Start free for 1 month, upgrade anytime. Cancel or change plans easily through your account settings.
        </p>
      </div>
    </section>
  );
};

export default SubscriptionSection;
