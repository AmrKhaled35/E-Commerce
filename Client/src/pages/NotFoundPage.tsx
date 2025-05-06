import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Button from '../components/UI/Button';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen pt-24 pb-16 bg-cream-50 flex items-center">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-script text-9xl text-burgundy-700 mb-4">404</h1>
          
          <h2 className="font-serif text-3xl text-coffee-800 mb-6">
            Page non trouvée
          </h2>
          
          <p className="text-coffee-700 max-w-md mx-auto mb-8">
            Oups ! Il semble que la page que vous recherchez ait disparu... 
            Peut-être a-t-elle été mangée par un de nos clients gourmands ?
          </p>
          
          <Button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2"
          >
            <Home size={18} />
            Retour à l'accueil
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;