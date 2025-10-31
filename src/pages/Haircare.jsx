import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Haircare = () => {
  const [selectedType, setSelectedType] = useState('all');

  const haircareProducts = [
    {
      id: 10,
      name: "Hair Serum - Argan Oil",
      price: 28.00,
      image: "/images/img7.jpg",
      category: "haircare",
      type: "serum",
      rating: 4.4,
      reviewCount: 67,
      isNew: true,
      inStock: true,
      stockQuantity: 5
    },
    {
      id: 11,
      name: "Mamaearth Onion Shampoo",
      price: 18.00,
      originalPrice: 24.00,
      discount: 25,
      image: "/images/img22.jpg",
      category: "haircare",
      type: "shampoo",
      rating: 4.6,
      reviewCount: 134,
      isBestseller: true,
      inStock: true,
      stockQuantity: 12
    },
    {
      id: 12,
      name: "Hair Mask",
      price: 32.00,
      image: "/images/img23.jpg",
      category: "haircare",
      type: "treatment",
      rating: 4.7,
      reviewCount: 89,
      inStock: true,
      stockQuantity: 8
    },
    {
      id: 13,
      name: "Heat Protectant Spray",
      price: 22.00,
      image: "images/img24.jpg",
      category: "haircare",
      type: "styling",
      rating: 4.3,
      reviewCount: 56,
      inStock: false,
      stockQuantity: 0
    }
  ];

  const types = ['all', 'serum', 'shampoo', 'treatment', 'styling'];

  const filteredProducts = selectedType === 'all' 
    ? haircareProducts 
    : haircareProducts.filter(product => product.type === selectedType);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">💇‍♀️ Haircare</h1>
          <p className="text-xl text-pink-600 max-w-2xl mx-auto">
            Transform your hair with our premium haircare collection
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {types.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-3 rounded-full capitalize font-semibold transition-all duration-300 ${
                selectedType === type
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600 shadow-md'
              }`}
            >
              {type === 'all' ? 'All Products' : type}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showCategory={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Haircare;