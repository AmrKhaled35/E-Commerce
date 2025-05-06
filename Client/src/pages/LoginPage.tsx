import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import Button from '../components/UI/Button';
import AnimatedSection from '../components/UI/AnimatedSection';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, handle login logic here
    }, 1500);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-md mx-auto">
          <AnimatedSection>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-32 bg-gradient-to-r from-burgundy-600 to-burgundy-800">
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-md">
                  <LogIn size={40} className="text-burgundy-700" />
                </div>
              </div>
              
              <div className="p-8 pt-16">
                <h1 className="font-serif text-2xl text-coffee-800 text-center mb-6">
                  Connexion
                </h1>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-medium text-coffee-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-coffee-700 mb-1">
                      Mot de passe
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy-300"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-coffee-500 hover:text-coffee-700"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-burgundy-600 focus:ring-burgundy-300 border-cream-300 rounded"
                      />
                      <label htmlFor="remember" className="ml-2 block text-sm text-coffee-700">
                        Se souvenir de moi
                      </label>
                    </div>
                    
                    <a href="#" className="text-sm text-burgundy-700 hover:text-burgundy-800 transition-colors">
                      Mot de passe oublié?
                    </a>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Connexion en cours...' : 'Se connecter'}
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-coffee-700">
                    Pas encore de compte?{' '}
                    <Link to="/register" className="text-burgundy-700 font-medium hover:text-burgundy-800 transition-colors">
                      S'inscrire
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <motion.div 
            className="mt-6 text-center text-sm text-coffee-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>La connexion vous permet de suivre vos commandes, sauvegarder vos favoris et accéder aux offres exclusives.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;