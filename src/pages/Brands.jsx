import React from 'react';
import { Link } from 'react-router-dom';

const Brands = () => {
  const brands = [
    {
      name: "L'Oreal",
      image: "/images/img24.webp",
      description: "World's leading beauty brand"
    },
    {
      name: "Maybelline",
      image: "/images/img25.jpg",
      description: "Affordable luxury makeup"
    },
    {
      name: "Neutrogena",
      image: "/images/img26.jpg",
      description: "Dermatologist recommended"
    },
    {
      name: "Garnier",
      image: "/images/img27.jpg",
      description: "Natural ingredient focus"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">🏷️ Brands</h1>
          <p className="text-xl text-pink-600 max-w-2xl mx-auto">
            Discover products from your favorite beauty brands
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300">
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                <p className="text-gray-600 mb-4">{brand.description}</p>
                <Link
                  to="/shop"
                  className="inline-block bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition duration-300"
                >
                  View Products
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;