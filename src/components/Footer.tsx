
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Mail, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-16 px-4 mt-20">
      <div className="max-w-6xl mx-auto">
        <Separator className="bg-terracotta/30 mb-12" />
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-soft-peach/60 backdrop-blur-md rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-terracotta" />
              </div>
              <span className="text-warm-brown font-poppins font-bold text-xl">Journely</span>
            </div>
            <p className="text-warm-brown/70 font-poppins text-sm leading-relaxed">
              Transform your daily thoughts into beautiful video memories through the power of AI analysis.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-warm-brown font-poppins font-semibold">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-warm-brown/70 hover:text-terracotta transition-colors font-poppins text-sm">Features</a></li>
              <li><a href="#how-it-works" className="text-warm-brown/70 hover:text-terracotta transition-colors font-poppins text-sm">How It Works</a></li>
              <li><a href="#pricing" className="text-warm-brown/70 hover:text-terracotta transition-colors font-poppins text-sm">Pricing</a></li>
              <li><a href="#" className="text-warm-brown/70 hover:text-terracotta transition-colors font-poppins text-sm">Mobile App</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-warm-brown font-poppins font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-warm-brown/70 hover:text-terracotta transition-colors font-poppins text-sm">Help Center</a></li>
              <li><a href="#" className="text-warm-brown/70 hover:text-terracotta transition-colors font-poppins text-sm">Contact Us</a></li>
              <li><a href="#" className="text-warm-brown/70 hover:text-terracotta transition-colors font-poppins text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-warm-brown/70 hover:text-terracotta transition-colors font-poppins text-sm">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-warm-brown font-poppins font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-soft-peach/60 backdrop-blur-md p-3 rounded-xl hover:bg-cream/60 transition-colors">
                <Mail className="w-5 h-5 text-terracotta" />
              </a>
              <a href="#" className="bg-soft-peach/60 backdrop-blur-md p-3 rounded-xl hover:bg-cream/60 transition-colors">
                <Twitter className="w-5 h-5 text-terracotta" />
              </a>
              <a href="#" className="bg-soft-peach/60 backdrop-blur-md p-3 rounded-xl hover:bg-cream/60 transition-colors">
                <Instagram className="w-5 h-5 text-terracotta" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-terracotta/30">
          <p className="text-warm-brown/60 font-poppins text-sm font-medium flex items-center justify-center space-x-2">
            <span>© 2025 Journely. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for your memories.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
