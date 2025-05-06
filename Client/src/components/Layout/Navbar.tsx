import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white bg-opacity-95 shadow-md py-2' 
      : 'bg-transparent py-4'
  }`;

  const logoClasses = `font-script text-2xl md:text-3xl ${
    isScrolled ? 'text-burgundy-800' : 'text-burgundy-800'
  }`;

  const linkClasses = `relative font-sans text-sm font-medium transition-colors duration-300 
    ${isScrolled ? 'text-coffee-800 hover:text-burgundy-700' : 'text-coffee-800 hover:text-burgundy-700'}
    after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-burgundy-600 
    after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full`;

  const activeLinkClasses = `${linkClasses} after:w-full text-burgundy-700`;

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className={logoClasses}>
            La Petite Pâtisserie
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={location.pathname === link.path ? activeLinkClasses : linkClasses}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-coffee-800 hover:text-burgundy-700 transition-colors">
              <User size={20} />
            </Link>
            
            <Link to="/cart" className="text-coffee-800 hover:text-burgundy-700 transition-colors relative">
              <ShoppingBag size={20} />
              {cartItems.length > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-burgundy-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {cartItems.length}
                </motion.span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="text-coffee-800 hover:text-burgundy-700 transition-colors md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg overflow-hidden"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-coffee-800 hover:text-burgundy-700 font-medium ${
                    location.pathname === link.path ? 'text-burgundy-700' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;