import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
  overlay?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  bgImage = 'https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg',
  overlay = true,
}) => {
  return (
    <div 
      className="relative h-[30vh] md:h-[40vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-coffee-900 bg-opacity-50"></div>
      )}
      <div className="relative z-10 text-center px-4 md:px-0">
        <motion.h1 
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-2 md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            className="font-sans text-lg md:text-xl text-cream-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;