import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-900 text-cream-100 pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-script text-3xl text-cream-100 mb-4">La Petite Pâtisserie</h3>
            <p className="text-sm mb-6 text-cream-200">
              Bringing the authentic taste of French pastries to your doorstep since 1987.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-100 hover:text-cream-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream-100 hover:text-cream-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream-100 hover:text-cream-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-cream-100 hover:text-cream-300 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4 text-cream-50">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-cream-200 hover:text-cream-50 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-cream-200 hover:text-cream-50 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-cream-200 hover:text-cream-50 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-cream-200 hover:text-cream-50 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-cream-200 hover:text-cream-50 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4 text-cream-50">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-cream-200 hover:text-cream-50 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-cream-200 hover:text-cream-50 transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream-200 hover:text-cream-50 transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream-200 hover:text-cream-50 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4 text-cream-50">Visit Us</h4>
            <address className="not-italic">
              <p className="text-sm text-cream-200 mb-2">123 Rue de la Boulangerie</p>
              <p className="text-sm text-cream-200 mb-2">75001 Paris, France</p>
              <p className="text-sm text-cream-200 mb-2">+33 1 23 45 67 89</p>
              <p className="text-sm text-cream-200">info@lapetitepatisserie.fr</p>
            </address>
          </div>
        </div>

        <div className="border-t border-coffee-700 mt-12 pt-8">
          <p className="text-sm text-center text-cream-300">
            &copy; {new Date().getFullYear()} La Petite Pâtisserie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;