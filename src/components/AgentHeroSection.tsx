
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Globe, Users } from 'lucide-react';
import Link from 'next/link';

export const AgentHeroSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20 lg:py-28 animate-fade-in">
      <div className="text-center mb-16 animate-slide-in-up">
        <div className="inline-flex items-center bg-soft-peach border border-cream rounded-full px-6 py-3 mb-8 shadow-sm animate-fade-in-delayed">
          <Phone className="w-5 h-5 text-terracotta mr-3" />
          <span className="text-warm-brown font-poppins text-sm font-semibold tracking-wide uppercase">Omni Dimension Agent</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-poppins font-bold text-warm-brown mb-8 leading-tight tracking-tight animate-slide-in-up">
          AI Agent That
          <span className="block text-terracotta mt-4 animate-slide-in-up-delayed">Calls & Listens</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-warm-brown/80 font-inter max-w-4xl mx-auto leading-relaxed mb-12 font-medium animate-fade-in-delayed">
          Your personal AI companion calls you daily, listens to your stories, 
          translates conversations, and creates beautiful summaries of your life's moments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delayed-long">
          <Link href="/dashboard">
            <Button className="bg-gradient-to-r from-terracotta to-peach hover:from-peach hover:to-terracotta text-white font-poppins font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              View Dashboard
            </Button>
          </Link>
          <Link href="/setup">
            <Button variant="outline" className="border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white font-poppins font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300">
              Setup Agent
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-20 animate-fade-in-delayed">
        <div className="text-center animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-soft-peach w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-terracotta" />
          </div>
          <h3 className="text-warm-brown font-poppins font-bold text-xl mb-4">Daily Conversations</h3>
          <p className="text-warm-brown/70 font-inter">Your AI agent calls at your preferred time and asks "What happened today?"</p>
        </div>

        <div className="text-center animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-soft-peach w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Globe className="w-8 h-8 text-terracotta" />
          </div>
          <h3 className="text-warm-brown font-poppins font-bold text-xl mb-4">Smart Translation</h3>
          <p className="text-warm-brown/70 font-inter">Automatically translates conversations into your preferred language with context preservation</p>
        </div>

        <div className="text-center animate-slide-in-up" style={{ animationDelay: '1s' }}>
          <div className="bg-soft-peach w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-terracotta" />
          </div>
          <h3 className="text-warm-brown font-poppins font-bold text-xl mb-4">Personal Summaries</h3>
          <p className="text-warm-brown/70 font-inter">Creates beautiful daily entries from your conversations, saved securely</p>
        </div>
      </div>
    </section>
  );
};
