import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Skincare = () => {
  const [selectedType, setSelectedType] = useState('all');

  const skincareProducts = [
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: 45.00,
      originalPrice: 55.00,
      discount: 18,
      image: "/images/img2.jpg",
      category: "skincare",
      type: "serum",
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
      type: "moisturizer",
      rating: 4.7,
      reviewCount: 289,
      isBestseller: true
    },
    {
      id: 3,
      name: "Anti-Aging Night Cream",
      price: 52.00,
      image: "/images/img18.jpg",
      category: "skincare",
      type: "moisturizer",
      rating: 4.6,
      reviewCount: 203,
      isBestseller: true
    },
    {
      id: 4,
      name: "Face Wash & Toner Kit",
      price: 28.00,
      image: "/images/img19.webp",
      category: "skincare",
      type: "cleanser",
      rating: 4.4,
      reviewCount: 95
    },
    {
      id: 5,
      name: "Sunscreen SPF 50+",
      price: 22.00,
      originalPrice: 28.00,
      discount: 21,
      image: "/images/img20.jpg",
      category: "skincare",
      type: "sunscreen",
      rating: 4.5,
      reviewCount: 167
    },
    {
      id: 6,
      name: "Face Mask - Detox",
      price: 18.00,
      image: "/images/img21.webp",
      category: "skincare",
      type: "mask",
      rating: 4.3,
      reviewCount: 78
    }
  ];

  const types = ['all', 'serum', 'moisturizer', 'cleanser', 'sunscreen', 'mask'];

  const filteredProducts = selectedType === 'all' 
    ? skincareProducts 
    : skincareProducts.filter(product => product.type === selectedType);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">✨ Skincare</h1>
          <p className="text-xl text-pink-600 max-w-2xl mx-auto">
            Nourish your skin with our premium skincare collection
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

        <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Skincare Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden backdrop-blur-sm group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                <img 
                  src="/images/img34.webp" 
                  alt="Clean Daily" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-yellow-300 transition-colors duration-300">Clean Daily</h3>
              <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Always remove makeup before bed</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden backdrop-blur-sm group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                <img 
                  src="/images/img35.jpg" 
                  alt="Use Sunscreen" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-yellow-300 transition-colors duration-300">Use Sunscreen</h3>
              <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Protect your skin from UV rays</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden backdrop-blur-sm group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                <img 
                  src="/images/img33.jpg" 
                  alt="Stay Hydrated" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-yellow-300 transition-colors duration-300">Stay Hydrated</h3>
              <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Drink plenty of water daily</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden backdrop-blur-sm group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                <img 
                  src="/images/img34.jpg" 
                  alt="Weekly Mask" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-yellow-300 transition-colors duration-300">Weekly Mask</h3>
              <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Use face masks for deep cleansing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skincare;