
import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-6 px-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <h1 className="text-white font-inter font-semibold text-xl">Reflect AI</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors font-inter font-medium">
            About
          </a>
          <a href="#" className="text-white/80 hover:text-white transition-colors font-inter font-medium">
            Features
          </a>
          <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full font-inter font-medium transition-all duration-200 backdrop-blur-sm">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
