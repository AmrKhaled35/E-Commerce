import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../../types/Product';
import { useCart } from '../../context/CartContext';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <motion.div 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <Link to={`/product/${product.id}`} className="block overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-burgundy-700 text-white text-xs px-2 py-1 rounded">
            Nouveau
          </span>
        )}
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link 
            to={`/product/${product.id}`}
            className="text-coffee-800 hover:text-burgundy-700 transition-colors"
          >
            <h3 className="font-serif text-lg font-medium">{product.name}</h3>
          </Link>
          <p className="font-medium text-burgundy-700">{product.price.toFixed(2)} €</p>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <Button 
          onClick={() => addToCart(product)} 
          variant="outline" 
          size="sm" 
          fullWidth
          className="flex items-center justify-center gap-2"
        >
          <ShoppingBag size={16} />
          Ajouter au panier
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;