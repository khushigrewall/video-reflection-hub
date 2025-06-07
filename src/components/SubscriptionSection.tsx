
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
        <div className="inline-flex items-center bg-soft-peach/60 backdrop-blur-md border border-cream/40 rounded-full px-6 py-3 mb-8">
          <Crown className="w-5 h-5 text-terracotta mr-2" />
          <span className="text-warm-brown font-poppins text-sm font-medium">Choose Your Plan</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-poppins font-bold text-warm-brown mb-6">
          Start Your Journey
          <span className="block text-terracotta">
            Choose What Fits
          </span>
        </h2>
        
        <p className="text-xl text-warm-brown/70 font-poppins max-w-3xl mx-auto font-medium">
          Begin with free journaling for one month, then upgrade for continuous video features and insights.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`relative p-8 rounded-3xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              plan.popular 
                ? 'bg-soft-peach/60 border-2 border-terracotta/40 shadow-xl scale-105' 
                : 'bg-card-gradient border border-cream/40 shadow-lg hover:bg-soft-peach/40'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-terracotta text-light-cream px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
            )}
            
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-3 rounded-2xl ${plan.popular ? 'bg-cream/60' : 'bg-soft-peach/60'}`}>
                <plan.icon className="w-6 h-6 text-terracotta" />
              </div>
              <h3 className="text-warm-brown font-poppins font-semibold text-2xl">{plan.name}</h3>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold text-warm-brown">{plan.price}</span>
                <span className="text-warm-brown/60 font-medium">/{plan.period}</span>
              </div>
              <p className="text-warm-brown/70 font-poppins text-sm mt-2">{plan.description}</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-terracotta flex-shrink-0" />
                  <span className="text-warm-brown font-poppins text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className={`w-full py-4 text-lg font-poppins font-semibold rounded-xl transition-all duration-300 ${
                plan.popular 
                  ? 'bg-peach-gradient hover:opacity-90 text-warm-brown shadow-lg hover:shadow-xl' 
                  : 'bg-soft-peach/60 hover:bg-cream/60 text-warm-brown border border-cream/60'
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
        <Card className="bg-card-gradient backdrop-blur-md border border-cream/40 p-8 rounded-3xl shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <Video className="w-6 h-6 text-terracotta" />
            <h3 className="text-warm-brown font-poppins font-semibold text-xl">Video Generation</h3>
          </div>
          <p className="text-warm-brown/70 font-poppins leading-relaxed">
            After 7 days of journaling, our AI analyzes your authentic entries to create meaningful 
            video memories that connect your experiences over time.
          </p>
        </Card>

        <Card className="bg-card-gradient backdrop-blur-md border border-cream/40 p-8 rounded-3xl shadow-lg">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="w-6 h-6 text-terracotta" />
            <h3 className="text-warm-brown font-poppins font-semibold text-xl">AI Analysis</h3>
          </div>
          <p className="text-warm-brown/70 font-poppins leading-relaxed">
            Advanced AI studies your writing patterns, emotional growth, and memory connections to provide 
            deeper insights into your personal development journey.
          </p>
        </Card>
      </div>

      {/* Newsletter Subscription */}
      <Card className="bg-soft-peach/60 backdrop-blur-md border border-cream/40 p-8 rounded-3xl max-w-2xl mx-auto shadow-lg">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Mail className="w-6 h-6 text-terracotta" />
            <h3 className="text-warm-brown font-poppins font-semibold text-xl">Subscribe to Our Self-Care Newsletter</h3>
          </div>
          <p className="text-warm-brown/70 font-poppins">
            Get weekly tips on journaling, mental wellness, and personal growth delivered to your inbox.
          </p>
        </div>
        
        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-xl bg-light-cream/60 border border-cream/60 text-warm-brown placeholder:text-warm-brown/50 focus:outline-none focus:ring-2 focus:ring-terracotta/40"
            required
          />
          <Button 
            type="submit"
            className="bg-peach-gradient hover:opacity-90 text-warm-brown px-8 py-3 rounded-xl font-poppins font-semibold transition-all duration-300"
          >
            Subscribe
          </Button>
        </form>
      </Card>

      <div className="text-center mt-12">
        <p className="text-terracotta font-poppins text-sm">
          ✨ Start free for 1 month, upgrade anytime. Cancel or change plans easily through your account settings.
        </p>
      </div>
    </section>
  );
};

export default SubscriptionSection;
