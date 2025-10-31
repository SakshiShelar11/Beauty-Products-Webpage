import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Bestsellers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const bestsellerProducts = [
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: 45.00,
      originalPrice: 55.00,
      discount: 18,
      image: "/images/img2.jpg",
      category: "skincare",
      rating: 4.8,
      reviewCount: 342,
      isBestseller: true
    },
    {
      id: 2,
      name: "Vitamin C Brightening Cream",
      price: 38.00,
      image: "/images/img3.jpg",
      category: "skincare",
      rating: 4.7,
      reviewCount: 289,
      isBestseller: true
    },
    {
      id: 3,
      name: "Matte Lipstick Collection",
      price: 25.00,
      originalPrice: 30.00,
      discount: 17,
      image: "/images/img4.jpg",
      category: "makeup",
      rating: 4.9,
      reviewCount: 156,
      isBestseller: true
    },
    {
      id: 4,
      name: "Anti-Aging Night Cream",
      price: 52.00,
      image: "/images/img5.jpg",
      category: "skincare",
      rating: 4.6,
      reviewCount: 203,
      isBestseller: true
    },
    {
      id: 5,
      name: "Eyeshadow Palette - Nude",
      price: 35.00,
      originalPrice: 45.00,
      discount: 22,
      image: "/images/img13.jpg",
      category: "makeup",
      rating: 4.5,
      reviewCount: 178,
      isBestseller: true
    },
    {
      id: 6,
      name: "Face Wash & Toner Kit",
      price: 28.00,
      image: "/images/img19.webp",
      category: "skincare",
      rating: 4.4,
      reviewCount: 95,
      isBestseller: true
    }
  ];

  const categories = ['all', 'skincare', 'makeup'];

  const filteredProducts = selectedCategory === 'all' 
    ? bestsellerProducts 
    : bestsellerProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">🔥 Bestsellers</h1>
          <p className="text-xl text-pink-600 max-w-2xl mx-auto">
            Discover our most loved products that customers can't stop raving about
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full capitalize font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600 shadow-md'
              }`}
            >
              {category === 'all' ? 'All Products' : category}
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

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-pink-600">10K+</div>
              <div className="text-gray-600">Bestseller Units Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">4.8⭐</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestsellers;