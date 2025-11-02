import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto'; // Restore scrolling
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in-fast"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full transform transition-all animate-slide-in-up"
        onClick={(e) => e.stopPropagation()}
        style={{ animationDuration: '0.3s' }}
      >
        <div className="relative">
          <img className="w-full h-56 md:h-64 object-cover" src={product.imageUrl} alt={product.productName} />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white rounded-full p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Close product details"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <span className="text-sm text-green-600 font-semibold uppercase tracking-wide">{product.category}</span>
          <h2 className="text-3xl font-bold text-gray-800 mt-1 mb-3">{product.productName}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {product.tags && product.tags.length > 0 ? (
              product.tags.map(tag => (
                <span key={tag} className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
              ))
            ) : (
                 <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Standard Grade</span>
            )}
          </div>

          <div className="border-t pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div><span className="font-semibold text-gray-700">Unit:</span> {product.unit}</div>
                <div><span className="font-semibold text-gray-700">Min. Order:</span> {product.minOrderQty} {product.unit}</div>
                <div><span className="font-semibold text-gray-700">Stock:</span> <span className={`${product.stockStatus === 'In Stock' ? 'text-green-600' : product.stockStatus === 'Low Stock' ? 'text-yellow-600' : 'text-red-600'}`}>{product.stockStatus}</span></div>
                <div><span className="font-semibold text-gray-700">Price:</span> <Link to="/pricing" onClick={onClose} className="text-green-600 hover:underline font-semibold">View Price List</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;