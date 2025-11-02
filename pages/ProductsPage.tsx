import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import ProductDetailModal from '../components/ProductDetailModal';
import { useProducts } from '../context/ProductContext';

const ProductCard: React.FC<{ product: Product; onClick: () => void }> = ({ product, onClick }) => (
  <div
    className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer group"
    onClick={onClick}
    onKeyPress={(e) => e.key === 'Enter' && onClick()}
    tabIndex={0}
    role="button"
    aria-label={`View details for ${product.productName}`}
  >
    <div className="relative">
      <img className="h-48 w-full object-cover" src={product.imageUrl} alt={product.productName} />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
    </div>
    <div className="p-4">
      <span className="text-xs text-green-600 font-semibold">{product.category}</span>
      <h3 className="text-lg font-semibold mt-1 mb-2 text-gray-800">{product.productName}</h3>
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm text-gray-500">{product.unit}</span>
        <span className="text-sm font-medium text-green-500 group-hover:text-green-600 transition-colors">
          View Details &rarr;
        </span>
      </div>
    </div>
  </div>
);


const ProductsPage: React.FC = () => {
  const { products } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(products.map(p => p.category)))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.productName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, searchTerm, selectedCategory]);

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Our Products</h1>
          <p className="text-lg text-gray-600 mt-2">Explore our wide range of fresh, globally sourced produce.</p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow w-full md:w-auto">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => <ProductCard key={product.productId} product={product} onClick={() => setSelectedProduct(product)} />)
          ) : (
            <p className="col-span-full text-center text-gray-600 py-10">No products found matching your criteria.</p>
          )}
        </div>
      </div>
      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ProductsPage;