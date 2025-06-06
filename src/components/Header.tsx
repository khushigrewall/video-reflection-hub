
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Sparkles, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-white/15 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/25 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg animate-glow">
            <BookOpen className="w-6 h-6 text-orange-800" />
          </div>
          <div>
            <h1 className="text-orange-900 font-inter font-bold text-2xl">Journely</h1>
            <p className="text-orange-700 text-xs font-light">Transform memories into videos</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-orange-800 hover:text-orange-900 transition-colors font-inter font-medium hover:scale-105 transform duration-200">
            Features
          </a>
          <a href="#how-it-works" className="text-orange-800 hover:text-orange-900 transition-colors font-inter font-medium hover:scale-105 transform duration-200">
            How It Works
          </a>
          <a href="#pricing" className="text-orange-800 hover:text-orange-900 transition-colors font-inter font-medium hover:scale-105 transform duration-200">
            Pricing
          </a>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white border-0 px-6 py-2 rounded-full font-inter font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <Sparkles className="w-4 h-4 mr-2" />
            Start Journaling
          </Button>
        </nav>

        <Button variant="ghost" className="md:hidden text-orange-800 hover:bg-white/10">
          <Menu className="w-6 h-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
