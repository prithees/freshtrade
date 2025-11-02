import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../types';
import { initialProducts } from '../services/googleSheetService';

type NewProductData = Omit<Product, 'productId' | 'lastUpdated'>;

interface ProductContextType {
  products: Product[];
  addProduct: (product: NewProductData) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (productData: NewProductData) => {
    const newProduct: Product = {
      ...productData,
      productId: 'PROD' + new Date().getTime(),
      lastUpdated: new Date().toISOString().split('T')[0],
      imageUrl: productData.imageUrl || `https://source.unsplash.com/400x300/?${encodeURIComponent(productData.productName)}`,
    };
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
