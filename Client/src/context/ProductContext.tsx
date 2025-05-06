import React, { createContext, useContext, useState } from 'react';
import { Product } from '../types/Product';
import { productsData } from '../data/products';

interface ProductContextType {
  products: Product[];
  categories: string[];
  filterProducts: (category: string) => Product[];
  searchProducts: (query: string) => Product[];
  getProductById: (id: string) => Product | undefined;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

interface ProductProviderProps {
  children: React.ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products] = useState<Product[]>(productsData);
  
  // Extract unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];

  const filterProducts = (category: string): Product[] => {
    if (category === 'All') return products;
    return products.filter(product => product.category === category);
  };

  const searchProducts = (query: string): Product[] => {
    const lowercaseQuery = query.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(lowercaseQuery) || 
      product.description.toLowerCase().includes(lowercaseQuery)
    );
  };

  const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
  };

  return (
    <ProductContext.Provider value={{
      products,
      categories,
      filterProducts,
      searchProducts,
      getProductById,
    }}>
      {children}
    </ProductContext.Provider>
  );
};