
import React from 'react';
import { BookOpen, Mail, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Help Center', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  return (
    <footer className="w-full bg-card-gradient backdrop-blur-md border-t border-cream/30 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-peach-gradient rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-warm-brown" />
              </div>
              <div>
                <h3 className="text-warm-brown font-poppins font-bold text-xl">Journely</h3>
                <p className="text-terracotta text-xs font-medium">Transform memories into videos</p>
              </div>
            </div>
            <p className="text-warm-brown/70 font-poppins text-sm font-medium leading-relaxed mb-6">
              Turn your daily thoughts into beautiful video memories with AI-powered journaling and analysis.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-soft-peach/60 rounded-xl flex items-center justify-center text-terracotta hover:bg-soft-peach transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-soft-peach/60 rounded-xl flex items-center justify-center text-terracotta hover:bg-soft-peach transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-soft-peach/60 rounded-xl flex items-center justify-center text-terracotta hover:bg-soft-peach transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-soft-peach/60 rounded-xl flex items-center justify-center text-terracotta hover:bg-soft-peach transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-3 grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-warm-brown font-poppins font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-warm-brown/70 hover:text-terracotta font-poppins text-sm font-medium transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-warm-brown font-poppins font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-warm-brown/70 hover:text-terracotta font-poppins text-sm font-medium transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-warm-brown font-poppins font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-warm-brown/70 hover:text-terracotta font-poppins text-sm font-medium transition-colors duration-300">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cream/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-warm-brown/60 font-poppins text-sm font-medium mb-4 md:mb-0">
            © 2024 Journely. All rights reserved.
          </p>
          <p className="text-warm-brown/60 font-poppins text-sm font-medium">
            Made with ❤️ for mindful journaling
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
