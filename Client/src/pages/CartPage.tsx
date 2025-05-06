import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/UI/Button';
import PageHeader from '../components/UI/PageHeader';
import AnimatedSection from '../components/UI/AnimatedSection';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();
  
  if (cartItems.length === 0) {
    return (
      <div>
        <PageHeader 
          title="Votre Panier" 
          subtitle="Votre panier est actuellement vide" 
          bgImage="https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg"
        />
        
        <section className="py-20 bg-cream-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <AnimatedSection>
              <div className="max-w-md mx-auto">
                <ShoppingBag size={64} className="text-burgundy-300 mx-auto mb-6" />
                <h2 className="font-serif text-2xl text-coffee-800 mb-4">Votre panier est vide</h2>
                <p className="text-coffee-600 mb-8">
                  Il semble que vous n'ayez pas encore ajouté de produits à votre panier.
                </p>
                <Button onClick={() => navigate('/products')}>
                  Découvrir nos produits
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    );
  }
  
  return (
    <div>
      <PageHeader 
        title="Votre Panier" 
        subtitle="Retrouvez tous les produits que vous avez sélectionnés" 
        bgImage="https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg"
      />
      
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-serif text-2xl text-coffee-800">
                      Articles ({cartItems.length})
                    </h2>
                    <button 
                      onClick={clearCart}
                      className="text-sm text-burgundy-600 hover:text-burgundy-800 transition-colors flex items-center"
                    >
                      <Trash size={16} className="mr-1" />
                      Vider le panier
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <motion.div 
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-cream-200 rounded-lg"
                      >
                        <Link to={`/product/${item.id}`} className="flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-24 h-24 object-cover rounded-md"
                          />
                        </Link>
                        
                        <div className="flex-grow">
                          <Link to={`/product/${item.id}`} className="block">
                            <h3 className="font-serif text-lg text-coffee-800 hover:text-burgundy-700 transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-coffee-600 line-clamp-1">
                            {item.description}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4">
                            <p className="font-medium text-burgundy-700">
                              {item.price.toFixed(2)} €
                            </p>
                            
                            <div className="flex items-center mt-2 sm:mt-0">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="flex items-center justify-center w-8 h-8 text-coffee-600 hover:text-burgundy-700 transition-colors border border-cream-300 rounded-l-md"
                                disabled={item.quantity <= 1}
                              >
                                <Minus size={16} />
                              </button>
                              <span className="w-10 h-8 flex items-center justify-center border-t border-b border-cream-300 text-coffee-800">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="flex items-center justify-center w-8 h-8 text-coffee-600 hover:text-burgundy-700 transition-colors border border-cream-300 rounded-r-md"
                              >
                                <Plus size={16} />
                              </button>
                              
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="ml-4 text-burgundy-600 hover:text-burgundy-800 transition-colors"
                                aria-label="Remove item"
                              >
                                <Trash size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                  <h2 className="font-serif text-2xl text-coffee-800 mb-6">
                    Résumé de la commande
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-coffee-700">
                      <span>Sous-total</span>
                      <span>{cartTotal.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between text-coffee-700">
                      <span>Frais de livraison</span>
                      <span>Gratuit</span>
                    </div>
                    <div className="border-t border-cream-300 pt-4 flex justify-between font-medium text-lg text-coffee-800">
                      <span>Total</span>
                      <span>{cartTotal.toFixed(2)} €</span>
                    </div>
                  </div>
                  
                  <Button className="w-full flex items-center justify-center gap-2">
                    Passer à la caisse
                    <ArrowRight size={18} />
                  </Button>
                  
                  <p className="text-center text-sm text-coffee-600 mt-4">
                    ou{' '}
                    <Link 
                      to="/products" 
                      className="text-burgundy-700 hover:text-burgundy-800 transition-colors"
                    >
                      continuer vos achats
                    </Link>
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;