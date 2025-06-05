
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 mt-20">
      <div className="max-w-4xl mx-auto">
        <Separator className="bg-slate-300 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-slate-200/70 rounded-lg flex items-center justify-center">
              <span className="text-slate-700 font-bold text-sm">R</span>
            </div>
            <span className="text-slate-700 font-inter font-medium">Reflect AI</span>
          </div>
          
          <nav className="flex items-center space-x-8">
            <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors font-inter text-sm">
              About
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors font-inter text-sm">
              Contact
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors font-inter text-sm">
              Terms
            </a>
          </nav>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-slate-500 font-inter text-sm font-light">
            © 2025 Reflect AI. Creating space for your thoughts to flourish.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
