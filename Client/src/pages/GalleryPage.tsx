import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import PageHeader from '../components/UI/PageHeader';
import AnimatedSection from '../components/UI/AnimatedSection';
import { galleryImages } from '../data/galleryImages';

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = selectedCategory && selectedCategory !== 'All'
    ? galleryImages.filter(img => img.category === selectedCategory)
    : galleryImages;
  
  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  
  return (
    <div>
      <PageHeader 
        title="Notre Galerie" 
        subtitle="Découvrez la beauté de la France et de nos créations à travers nos images" 
        bgImage="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg"
      />
      
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category || (category === 'All' && !selectedCategory)
                      ? 'bg-burgundy-700 text-white'
                      : 'bg-white text-coffee-700 hover:bg-cream-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection>
            <Masonry
              breakpointCols={breakpointColumns}
              className="flex -ml-4 w-auto"
              columnClassName="pl-4 bg-clip-padding"
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <motion.img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                    layoutId={`gallery-image-${image.id}`}
                  />
                </motion.div>
              ))}
            </Masonry>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;