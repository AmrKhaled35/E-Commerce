import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/UI/ProductCard';
import PageHeader from '../components/UI/PageHeader';
import AnimatedSection from '../components/UI/AnimatedSection';

const ProductListPage: React.FC = () => {
  const { products, categories, filterProducts } = useProducts();
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setDisplayedProducts(filterProducts(activeCategory));
    } else {
      const filtered = filterProducts(activeCategory).filter(
        product => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setDisplayedProducts(filtered);
    }
  }, [searchQuery, activeCategory, filterProducts]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchQuery('');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <PageHeader 
        title="Nos Produits" 
        subtitle="Découvrez notre sélection de pâtisseries et viennoiseries artisanales" 
        bgImage="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg"
      />
      
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        activeCategory === category
                          ? 'bg-burgundy-700 text-white'
                          : 'bg-white text-coffee-700 hover:bg-cream-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                {/* Search */}
                <div className="relative w-full md:w-64">
                  <input
                    type="text"
                    placeholder="Rechercher un produit..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-10 pr-4 py-2 bg-white border border-cream-300 rounded-full focus:outline-none focus:ring-2 focus:ring-burgundy-300 focus:border-transparent"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-coffee-400" />
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {displayedProducts.length === 0 ? (
            <AnimatedSection className="text-center py-12">
              <h3 className="text-xl font-serif text-coffee-700 mb-2">Aucun produit trouvé</h3>
              <p className="text-coffee-600">Veuillez modifier vos critères de recherche</p>
            </AnimatedSection>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {displayedProducts.map((product, index) => (
                <AnimatedSection key={product.id} delay={index * 0.05}>
                  <ProductCard product={product} />
                </AnimatedSection>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductListPage;