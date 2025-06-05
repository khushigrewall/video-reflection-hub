
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 mt-20">
      <div className="max-w-4xl mx-auto">
        <Separator className="bg-white/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-white font-inter font-semibold">Reflect AI</span>
          </div>
          
          <nav className="flex items-center space-x-8">
            <a href="#" className="text-white/70 hover:text-white transition-colors font-inter text-sm">
              About
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors font-inter text-sm">
              Contact
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors font-inter text-sm">
              Terms
            </a>
          </nav>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-white/50 font-inter text-sm">
            © 2025 Reflect AI. Transforming thoughts into memories.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
