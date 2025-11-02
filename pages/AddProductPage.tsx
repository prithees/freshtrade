import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Product } from '../types';
import { useProducts } from '../context/ProductContext';

const initialFormState = {
  productName: '',
  category: 'Vegetables',
  description: '',
  unit: '',
  pricePerUnit: '',
  minOrderQty: '',
  stockStatus: 'In Stock',
  tags: '',
  imageUrl: ''
};

const AddProductPage: React.FC = () => {
  const { products, addProduct } = useProducts();
  const [formData, setFormData] = useState(initialFormState);
  const [submissionStatus, setSubmissionStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus(null);

    try {
      if (!formData.productName || !formData.unit || !formData.pricePerUnit || !formData.minOrderQty) {
        setSubmissionStatus({ type: 'error', message: 'Please fill in all required fields.' });
        return;
      }
      
      const productToAdd = {
        productName: formData.productName,
        category: formData.category,
        description: formData.description,
        unit: formData.unit,
        pricePerUnit: parseFloat(formData.pricePerUnit) || 0,
        minOrderQty: parseInt(formData.minOrderQty, 10) || 1,
        stockStatus: formData.stockStatus as Product['stockStatus'],
        tags: formData.tags.split(';').map(t => t.trim()).filter(Boolean),
        imageUrl: formData.imageUrl
      };

      addProduct(productToAdd);
      
      setSubmissionStatus({ type: 'success', message: 'Product added successfully!' });
      setFormData(initialFormState);
      
      setTimeout(() => setSubmissionStatus(null), 3000);

    } catch (error) {
      console.error('Submission Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred during submission.';
      setSubmissionStatus({ type: 'error', message: `Failed to add product. ${errorMessage}` });
    }
  };


  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Add New Product</h1>
            <p className="text-lg text-gray-600 mt-2">Add a new item to the product catalog.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Product Details</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleChange} placeholder="e.g., Fresh Onion" required className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500" />
                </div>
                 <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select id="category" name="category" value={formData.category} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500 bg-white">
                    <option>Vegetables</option>
                    <option>Fruits</option>
                    <option>Exotic</option>
                  </select>
                </div>
              </div>
               <div className="mb-6">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={4} required className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500" placeholder="A short description of the product..."></textarea>
              </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                 <div>
                  <label htmlFor="unit" className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
                  <input type="text" id="unit" name="unit" value={formData.unit} onChange={handleChange} placeholder="kg, dozen, piece" required className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500" />
                 </div>
                 <div>
                  <label htmlFor="pricePerUnit" className="block text-sm font-medium text-gray-700 mb-1">Price per Unit (INR)</label>
                  <input type="number" id="pricePerUnit" name="pricePerUnit" value={formData.pricePerUnit} onChange={handleChange} step="0.01" min="0" placeholder="40" required className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500" />
                 </div>
                 <div>
                  <label htmlFor="minOrderQty" className="block text-sm font-medium text-gray-700 mb-1">Minimum Order Qty</label>
                  <input type="number" id="minOrderQty" name="minOrderQty" value={formData.minOrderQty} onChange={handleChange} min="1" placeholder="50" required className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500" />
                 </div>
                 <div>
                   <label htmlFor="stockStatus" className="block text-sm font-medium text-gray-700 mb-1">Stock Status</label>
                   <select id="stockStatus" name="stockStatus" value={formData.stockStatus} onChange={handleChange} required className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500 bg-white">
                     <option>In Stock</option>
                     <option>Low Stock</option>
                     <option>Out of Stock</option>
                   </select>
                 </div>
              </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                 <div>
                   <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">Tags (semicolon-separated)</label>
                   <input type="text" id="tags" name="tags" value={formData.tags} onChange={handleChange} placeholder="e.g., Nashik Origin;A-Grade" className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500" />
                 </div>
                  <div>
                   <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">Image URL (Optional)</label>
                   <input type="url" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="https://source.unsplash.com/..." className="w-full p-3 border rounded-md focus:ring-green-500 focus:border-green-500" />
                  </div>
               </div>

              <div className="border-t pt-6">
                 {submissionStatus && (
                  <div className={`text-center p-3 mb-4 rounded-md text-sm ${submissionStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submissionStatus.message}
                  </div>
                 )}
                <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Existing Products</h2>
           <div className="overflow-x-auto bg-white rounded-lg shadow max-w-5xl mx-auto">
             <table className="min-w-full divide-y divide-gray-200">
               <thead className="bg-gray-50">
                 <tr>
                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                 </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                {products.length === 0 ? (
                   <tr><td colSpan={4} className="text-center py-10 text-gray-500">No products yet.</td></tr>
                 ) : (
                   products.slice().reverse().map(product => (
                     <tr key={product.productId} className="hover:bg-gray-50">
                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.productName}</td>
                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.unit}</td>
                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stockStatus}</td>
                     </tr>
                   ))
                 )}
               </tbody>
             </table>
           </div>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default AddProductPage;