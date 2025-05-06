import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, ChevronLeft } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import Button from '../components/UI/Button';
import AnimatedSection from '../components/UI/AnimatedSection';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = getProductById(id || '');
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-serif text-coffee-800 mb-4">Produit non trouvé</h2>
        <p className="mb-8 text-coffee-600">Le produit que vous recherchez n'existe pas ou a été supprimé.</p>
        <Button onClick={() => navigate('/products')}>
          Retour aux produits
        </Button>
      </div>
    );
  }
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="bg-cream-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => navigate('/products')}
          className="mb-8 inline-flex items-center"
        >
          <ChevronLeft size={16} className="mr-1" />
          Retour aux produits
        </Button>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 p-6 md:p-8">
            {/* Product Images */}
            <div className="lg:col-span-3">
              <div className="mb-4">
                <AnimatedSection>
                  <motion.div 
                    className="rounded-lg overflow-hidden bg-cream-100"
                    layoutId={`product-image-${product.id}`}
                  >
                    <img 
                      src={product.gallery ? product.gallery[selectedImage] : product.image} 
                      alt={product.name}
                      className="w-full h-80 md:h-96 object-cover"
                    />
                  </motion.div>
                </AnimatedSection>
              </div>
              
              {product.gallery && product.gallery.length > 1 && (
                <AnimatedSection delay={0.1}>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {product.gallery.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`rounded-md overflow-hidden border-2 transition-all ${
                          selectedImage === index
                            ? 'border-burgundy-600 shadow-md'
                            : 'border-transparent'
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`${product.name} view ${index + 1}`}
                          className="w-full h-16 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </AnimatedSection>
              )}
            </div>
            
            {/* Product Info */}
            <div className="lg:col-span-2 flex flex-col">
              <AnimatedSection delay={0.2}>
                <div className="mb-2">
                  {product.isNew && (
                    <span className="inline-block bg-burgundy-600 text-white text-xs px-2 py-1 rounded mb-2">
                      Nouveau
                    </span>
                  )}
                  <h1 className="font-serif text-3xl text-coffee-800 mb-1">{product.name}</h1>
                  <p className="text-2xl font-medium text-burgundy-700">{product.price.toFixed(2)} €</p>
                </div>
                
                <div className="my-6">
                  <p className="text-coffee-700">{product.description}</p>
                </div>
                
                {product.ingredients && (
                  <div className="mb-6">
                    <h3 className="font-serif text-lg text-coffee-800 mb-2">Ingrédients</h3>
                    <p className="text-coffee-600">
                      {product.ingredients.join(', ')}
                    </p>
                  </div>
                )}
                
                {product.allergens && product.allergens.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-serif text-lg text-coffee-800 mb-2">Allergènes</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.allergens.map((allergen) => (
                        <span 
                          key={allergen}
                          className="inline-block bg-cream-200 text-coffee-700 px-2 py-1 rounded-full text-sm"
                        >
                          {allergen}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.nutritionalInfo && (
                  <div className="mb-6">
                    <h3 className="font-serif text-lg text-coffee-800 mb-2">Informations Nutritionnelles</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="text-center p-2 bg-cream-100 rounded-lg">
                        <p className="text-sm text-coffee-600">Calories</p>
                        <p className="font-medium text-coffee-800">{product.nutritionalInfo.calories} kcal</p>
                      </div>
                      <div className="text-center p-2 bg-cream-100 rounded-lg">
                        <p className="text-sm text-coffee-600">Protéines</p>
                        <p className="font-medium text-coffee-800">{product.nutritionalInfo.protein}g</p>
                      </div>
                      <div className="text-center p-2 bg-cream-100 rounded-lg">
                        <p className="text-sm text-coffee-600">Glucides</p>
                        <p className="font-medium text-coffee-800">{product.nutritionalInfo.carbs}g</p>
                      </div>
                      <div className="text-center p-2 bg-cream-100 rounded-lg">
                        <p className="text-sm text-coffee-600">Lipides</p>
                        <p className="font-medium text-coffee-800">{product.nutritionalInfo.fat}g</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-auto pt-6">
                  <div className="flex items-center mb-6">
                    <span className="mr-4 text-coffee-700">Quantité</span>
                    <div className="flex items-center border border-cream-300 rounded-md">
                      <button 
                        onClick={decrementQuantity}
                        className="flex items-center justify-center w-8 h-8 text-coffee-600 hover:text-burgundy-700 transition-colors"
                        disabled={quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center text-coffee-800">{quantity}</span>
                      <button 
                        onClick={incrementQuantity}
                        className="flex items-center justify-center w-8 h-8 text-coffee-600 hover:text-burgundy-700 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleAddToCart} 
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={18} />
                    Ajouter au panier
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;