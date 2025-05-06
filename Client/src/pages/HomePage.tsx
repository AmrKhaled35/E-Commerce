import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import Button from '../components/UI/Button';
import ProductCard from '../components/UI/ProductCard';
import AnimatedSection from '../components/UI/AnimatedSection';

const HomePage: React.FC = () => {
  const { products } = useProducts();
  const featuredProducts = products.filter(product => product.isFeatured).slice(0, 4);
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-coffee-900 bg-opacity-40"></div>
        
        <div className="relative z-10 text-center px-4 md:px-0 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Savourez l'Authentique Pâtisserie Française
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-cream-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Découvrez nos créations artisanales élaborées selon les traditions françaises, 
            avec des ingrédients soigneusement sélectionnés pour une expérience gustative incomparable.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg">
              <Link to="/products">Découvrir nos produits</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link to="/about">Notre histoire</Link>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <ArrowRight size={24} className="text-white rotate-90" />
        </motion.div>
      </div>
      
      {/* Featured Products */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-coffee-800 mb-4">Nos Spécialités</h2>
            <p className="text-coffee-600 max-w-2xl mx-auto">
              Découvrez notre sélection de pâtisseries et viennoiseries préparées chaque jour 
              avec passion et savoir-faire.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="text-center mt-12">
            <Link to="/products">
              <Button variant="secondary" size="lg" className="inline-flex items-center">
                Voir tous nos produits
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20 bg-burgundy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/2531195/pexels-photo-2531195.jpeg" 
                  alt="Notre boulangerie" 
                  className="rounded-lg shadow-lg w-full h-auto" 
                />
                <div className="absolute -bottom-6 -right-6 bg-cream-50 p-4 shadow-lg rounded-lg hidden md:block">
                  <p className="font-script text-2xl text-burgundy-700">Depuis 1987</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <h2 className="font-serif text-3xl md:text-4xl text-coffee-800 mb-6">Notre Histoire</h2>
              <p className="text-coffee-700 mb-6">
                La Petite Pâtisserie a ouvert ses portes en 1987 dans le cœur de Paris. 
                Fondée par la famille Dubois, notre pâtisserie perpétue depuis trois générations 
                les traditions authentiques de la pâtisserie française.
              </p>
              <p className="text-coffee-700 mb-8">
                Chaque jour, nos artisans pâtissiers se lèvent avant l'aube pour préparer 
                croissants, pains au chocolat, et d'autres délices qui font la renommée 
                de la pâtisserie française dans le monde entier.
              </p>
              <Link to="/about">
                <Button variant="outline" className="inline-flex items-center">
                  En savoir plus
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section 
        className="py-20 bg-coffee-800 text-cream-50"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(91, 63, 49, 0.85)',
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-4">Ce Que Disent Nos Clients</h2>
            <p className="text-cream-200 max-w-2xl mx-auto">
              Des années de passion et de savoir-faire reconnues par notre fidèle clientèle.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="mb-4 text-yellow-400">
                  ★★★★★
                </div>
                <p className="text-cream-100 mb-4">
                  "Les meilleurs croissants que j'ai jamais goûtés ! Croustillants à l'extérieur, moelleux à l'intérieur, avec ce goût de beurre incomparable."
                </p>
                <p className="font-medium text-cream-50">Sophie L.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="mb-4 text-yellow-400">
                  ★★★★★
                </div>
                <p className="text-cream-100 mb-4">
                  "Je viens chaque dimanche chercher mes viennoiseries. Un rituel que je ne manquerais pour rien au monde. La qualité est constante et le service toujours souriant."
                </p>
                <p className="font-medium text-cream-50">Jean-Pierre M.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
                <div className="mb-4 text-yellow-400">
                  ★★★★★
                </div>
                <p className="text-cream-100 mb-4">
                  "Leurs macarons sont divins, avec une texture parfaite et des saveurs intenses. J'en commande régulièrement pour mes réceptions et ils font toujours sensation."
                </p>
                <p className="font-medium text-cream-50">Marie T.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Blog */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-coffee-800 mb-4">Notre Blog</h2>
            <p className="text-coffee-600 max-w-2xl mx-auto">
              Découvrez les secrets de la pâtisserie française et plongez dans l'histoire de nos traditions culinaires.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <Link to="/blog" className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow group-hover:shadow-lg">
                  <div className="overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg" 
                      alt="L'histoire du croissant" 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-medium text-coffee-800 group-hover:text-burgundy-700 transition-colors mb-2">
                      L'histoire du croissant français
                    </h3>
                    <p className="text-coffee-600 mb-4 line-clamp-2">
                      Découvrez les origines fascinantes du croissant, ce symbole emblématique de la pâtisserie française.
                    </p>
                    <p className="inline-flex items-center text-burgundy-700 font-medium">
                      Lire l'article 
                      <ArrowRight size={16} className="ml-2" />
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <Link to="/blog" className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow group-hover:shadow-lg">
                  <div className="overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/6287488/pexels-photo-6287488.jpeg" 
                      alt="Pâte feuilletée" 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-medium text-coffee-800 group-hover:text-burgundy-700 transition-colors mb-2">
                      Les secrets d'une pâte feuilletée parfaite
                    </h3>
                    <p className="text-coffee-600 mb-4 line-clamp-2">
                      Maîtrisez l'art délicat de la pâte feuilletée avec nos conseils d'experts pour des résultats dignes des meilleures pâtisseries.
                    </p>
                    <p className="inline-flex items-center text-burgundy-700 font-medium">
                      Lire l'article 
                      <ArrowRight size={16} className="ml-2" />
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <Link to="/blog" className="block group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow group-hover:shadow-lg">
                  <div className="overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/239578/pexels-photo-239578.jpeg" 
                      alt="Macarons" 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-medium text-coffee-800 group-hover:text-burgundy-700 transition-colors mb-2">
                      Le macaron, joyau de la pâtisserie française
                    </h3>
                    <p className="text-coffee-600 mb-4 line-clamp-2">
                      Plongez dans l'univers coloré et raffiné des macarons français, de leurs origines italiennes à leur statut actuel.
                    </p>
                    <p className="inline-flex items-center text-burgundy-700 font-medium">
                      Lire l'article 
                      <ArrowRight size={16} className="ml-2" />
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
          
          <AnimatedSection className="text-center mt-12">
            <Link to="/blog">
              <Button variant="secondary" size="lg" className="inline-flex items-center">
                Voir tous les articles
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-burgundy-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Vous avez un événement spécial ?</h2>
              <p className="text-lg text-cream-100 mb-8">
                Nous créons des pâtisseries personnalisées pour vos mariages, anniversaires, 
                ou autres occasions spéciales. Contactez-nous pour discuter de vos besoins.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  Contactez-nous
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;