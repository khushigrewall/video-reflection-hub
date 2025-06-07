
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Check, Crown, Star, Video, Calendar, Mail, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast({
        title: "Subscribed! ✨",
        description: "You'll receive our weekly self-care tips and journaling inspiration.",
      });
    }, 1500);
  };

  const plans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Perfect for getting started with journaling",
      features: [
        "Daily journaling with prompts",
        "7-day streak tracking",
        "1 AI video after 7 consecutive days",
        "Basic progress analytics",
        "Email support"
      ],
      buttonText: "Start Free",
      popular: false,
      gradient: "from-cream to-soft-peach"
    },
    {
      name: "Monthly Pro", 
      price: "9.99",
      period: "per month",
      description: "Enhanced journaling with regular video memories",
      features: [
        "Everything in Free",
        "Weekly AI video summaries", 
        "Monthly recap videos",
        "Advanced emotion analytics",
        "Priority support",
        "Export your videos"
      ],
      buttonText: "Start Monthly Plan",
      popular: true,
      gradient: "from-peach to-terracotta"
    },
    {
      name: "Yearly Pro",
      price: "99.99", 
      period: "per year",
      originalPrice: "119.88",
      description: "Best value with comprehensive video memories",
      features: [
        "Everything in Monthly Pro",
        "Bi-weekly video summaries",
        "Quarterly deep-dive videos", 
        "Annual life journey video",
        "Premium video templates",
        "Advanced sharing options"
      ],
      buttonText: "Get Yearly Plan",
      popular: false,
      gradient: "from-terracotta to-warm-brown"
    }
  ];

  return (
    <section id="pricing" className="w-full max-w-6xl mx-auto px-4 py-20">
      {/* Newsletter Section */}
      <div className="text-center mb-20">
        <div className="bg-card-gradient backdrop-blur-md border border-cream/30 rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
          <div className="flex items-center justify-center mb-6">
            <Mail className="w-8 h-8 text-terracotta mr-3" />
            <h3 className="text-2xl font-poppins font-bold text-warm-brown">Subscribe to Our Self-Care Newsletter</h3>
          </div>
          <p className="text-warm-brown/70 font-poppins mb-6 font-medium">
            Get weekly journaling prompts, mindfulness tips, and inspiration delivered to your inbox
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-light-cream/60 border-cream/60 text-warm-brown placeholder:text-warm-brown/50 font-poppins rounded-2xl px-6 py-3 focus:bg-light-cream/80 transition-all duration-300"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-peach-gradient hover:opacity-90 text-warm-brown border border-cream/60 px-8 py-3 font-poppins font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-soft-peach/60 backdrop-blur-md border border-cream/40 rounded-full px-6 py-3 mb-8">
          <Crown className="w-5 h-5 text-terracotta mr-2" />
          <span className="text-warm-brown font-poppins text-sm font-medium">Choose Your Plan</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-poppins font-bold text-warm-brown mb-6">
          Start Your
          <span className="block bg-gradient-to-r from-terracotta to-peach bg-clip-text text-transparent">
            Journey Today
          </span>
        </h2>
        
        <p className="text-xl text-warm-brown/70 font-poppins max-w-4xl mx-auto font-medium">
          Transform your daily thoughts into beautiful video memories with our AI-powered journaling platform
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative bg-gradient-to-br ${plan.gradient} border-cream/30 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-terracotta to-peach text-white px-6 py-2 rounded-full text-sm font-poppins font-semibold shadow-lg">
                <Star className="w-4 h-4 inline mr-1" />
                Most Popular
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-warm-brown font-poppins font-bold text-2xl mb-2">{plan.name}</h3>
              <p className="text-warm-brown/70 font-poppins text-sm font-medium mb-4">{plan.description}</p>
              
              <div className="mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-poppins font-bold text-warm-brown">${plan.price}</span>
                  <span className="text-warm-brown/70 font-poppins ml-2">{plan.period}</span>
                </div>
                {plan.originalPrice && (
                  <p className="text-warm-brown/60 text-sm font-poppins mt-1">
                    <span className="line-through">${plan.originalPrice}</span> - Save ${(parseFloat(plan.originalPrice) - parseFloat(plan.price)).toFixed(2)}!
                  </p>
                )}
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                  <span className="text-warm-brown/80 font-poppins text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className={`w-full py-4 font-poppins font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl ${plan.popular ? 'bg-gradient-to-r from-warm-brown to-terracotta text-cream hover:opacity-90' : 'bg-card-gradient text-warm-brown border border-cream/60 hover:bg-soft-peach/40'}`}>
              {plan.buttonText}
            </Button>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-warm-brown/60 font-poppins text-sm">
          All plans include end-to-end encryption and privacy protection • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default SubscriptionSection;
