import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/UI/PageHeader';
import AnimatedSection from '../components/UI/AnimatedSection';
import { blogPostsData } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = ['All', ...new Set(blogPostsData.map(post => post.category))];
  
  const filteredPosts = selectedCategory && selectedCategory !== 'All'
    ? blogPostsData.filter(post => post.category === selectedCategory)
    : blogPostsData;
  
  return (
    <div>
      <PageHeader 
        title="Notre Blog" 
        subtitle="Découvrez l'histoire et les secrets de la pâtisserie française" 
        bgImage="https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <motion.div 
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  layoutId={`blog-post-${post.id}`}
                >
                  <div className="overflow-hidden h-56">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium bg-cream-200 text-coffee-700 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-coffee-600">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-coffee-800 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-coffee-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-coffee-600">
                        Par {post.author}
                      </span>
                      <button className="text-burgundy-700 hover:text-burgundy-800 font-medium text-sm transition-colors">
                        Lire la suite
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;