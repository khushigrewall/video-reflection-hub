
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Sparkles, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-soft-peach/40 backdrop-blur-lg border-b border-cream/30">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-peach-gradient rounded-2xl flex items-center justify-center shadow-lg animate-glow">
            <BookOpen className="w-6 h-6 text-warm-brown" />
          </div>
          <div>
            <h1 className="text-warm-brown font-poppins font-bold text-2xl">Journely</h1>
            <p className="text-terracotta text-xs font-medium">Transform memories into videos</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-warm-brown hover:text-terracotta transition-colors font-poppins font-medium hover:scale-105 transform duration-200">
            Features
          </a>
          <a href="#how-it-works" className="text-warm-brown hover:text-terracotta transition-colors font-poppins font-medium hover:scale-105 transform duration-200">
            How It Works
          </a>
          <a href="#pricing" className="text-warm-brown hover:text-terracotta transition-colors font-poppins font-medium hover:scale-105 transform duration-200">
            Pricing
          </a>
          <Button className="bg-peach-gradient hover:opacity-90 text-warm-brown border-0 px-6 py-2 rounded-full font-poppins font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <Sparkles className="w-4 h-4 mr-2" />
            Start Journaling
          </Button>
        </nav>

        <Button variant="ghost" className="md:hidden text-warm-brown hover:bg-cream/20">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
