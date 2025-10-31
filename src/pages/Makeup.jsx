import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Makeup = () => {
  const [selectedType, setSelectedType] = useState('all');

  const makeupProducts = [
    {
      id: 1,
      name: "Matte Lipstick Collection",
      price: 25.00,
      originalPrice: 30.00,
      discount: 17,
      image: "/images/img4.jpg",
      category: "makeup",
      type: "lipstick",
      rating: 4.9,
      reviewCount: 156,
      isBestseller: true
    },
    {
      id: 2,
      name: "Eyeshadow Palette - Nude",
      price: 35.00,
      originalPrice: 45.00,
      discount: 22,
      image: "/images/img13.jpg",
      category: "makeup",
      type: "eyeshadow",
      rating: 4.5,
      reviewCount: 178,
      isBestseller: true
    },
    {
      id: 3,
      name: "Foundation - Natural Finish",
      price: 42.00,
      image: "/images/img14.webp",
      category: "makeup",
      type: "foundation",
      rating: 4.6,
      reviewCount: 203
    },
    {
      id: 4,
      name: "Mascara - Volume Boost",
      price: 18.00,
      originalPrice: 24.00,
      discount: 25,
      image: "/images/img15.webp",
      category: "makeup",
      type: "mascara",
      rating: 4.4,
      reviewCount: 89
    },
    {
      id: 5,
      name: "Blush - Rosy Glow",
      price: 22.00,
      image: "/images/img16.jpg",
      category: "makeup",
      type: "blush",
      rating: 4.3,
      reviewCount: 67
    },
    {
      id: 6,
      name: "Makeup Brush Set",
      price: 55.00,
      originalPrice: 70.00,
      discount: 21,
      image: "/images/img17.jpg",
      category: "makeup",
      type: "tools",
      rating: 4.7,
      reviewCount: 134
    }
  ];

  const types = ['all', 'lipstick', 'eyeshadow', 'foundation', 'mascara', 'blush', 'tools'];

  const filteredProducts = selectedType === 'all' 
    ? makeupProducts 
    : makeupProducts.filter(product => product.type === selectedType);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">💄 Makeup</h1>
          <p className="text-xl text-pink-600 max-w-2xl mx-auto">
            Express yourself with our premium makeup collection
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

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Makeup Guide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="/images/img31.jpg" 
                  alt="Lip Care" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-pink-600 transition-colors duration-300">Lip Care</h3>
              <p className="text-gray-600">Always prep lips with balm before lipstick</p>
            </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <img 
                src="/images/img32.webp" 
                alt="Eye Makeup" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-pink-600 transition-colors duration-300">Eye Makeup</h3>
            <p className="text-gray-600">Use primer for long-lasting eyeshadow</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <img 
                src="/images/img30.webp" 
                alt="Foundation" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-pink-600 transition-colors duration-300">Foundation</h3>
            <p className="text-gray-600">Match foundation to your neck for seamless blend</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Makeup;