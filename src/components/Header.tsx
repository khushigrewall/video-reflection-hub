
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6 px-4 bg-white/60 backdrop-blur-md border-b border-rose-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-rose-200 to-purple-200 rounded-xl flex items-center justify-center shadow-sm">
            <BookOpen className="w-5 h-5 text-rose-700" />
          </div>
          <div>
            <h1 className="text-rose-900 font-inter font-bold text-2xl">Reflect AI</h1>
            <p className="text-rose-600 text-xs font-light">Your mindful journaling companion</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-rose-700 hover:text-rose-900 transition-colors font-inter font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-rose-700 hover:text-rose-900 transition-colors font-inter font-medium">
            How It Works
          </a>
          <a href="#pricing" className="text-rose-700 hover:text-rose-900 transition-colors font-inter font-medium">
            Pricing
          </a>
          <Button className="bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white px-6 py-2 rounded-full font-inter font-medium transition-all duration-200 shadow-md hover:shadow-lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
