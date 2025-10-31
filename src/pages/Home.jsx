import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: 45.00,
      originalPrice: 55.00,
      discount: 18,
      image: "/images/img2.jpg",
      category: "skincare",
      rating: 4.5,
      reviewCount: 128,
      isBestseller: true,
      inStock: true,
      stockQuantity: 15
    },
    {
      id: 2,
      name: "Vitamin C Brightening Cream",
      price: 38.00,
      image: "/images/img3.jpg",
      category: "skincare",
      rating: 4.3,
      reviewCount: 89,
      isBestseller: true,
      inStock: true,
      stockQuantity: 8
    },
    {
      id: 3,
      name: "Matte Lipstick Collection",
      price: 25.00,
      originalPrice: 30.00,
      discount: 17,
      image: "/images/img4.jpg",
      category: "makeup",
      rating: 4.7,
      reviewCount: 56,
      isNew: true,
      inStock: false,
      stockQuantity: 0
    },
    {
      id: 4,
      name: "Anti-Aging Night Cream",
      price: 52.00,
      image: "/images/img5.jpg",
      category: "skincare",
      rating: 4.6,
      reviewCount: 203,
      isBestseller: true,
      inStock: true,
      stockQuantity: 3
    },
    {
      id: 9,
      name: "Limited Edition Perfume",
      price: 65.00,
      image: "/images/img6.jpg",
      category: "fragrance",
      rating: 4.8,
      reviewCount: 89,
      isBestseller: true,
      inStock: false,
      stockQuantity: 0
    },
    {
      id: 10,
      name: "Hair Serum - Argan Oil",
      price: 28.00,
      image: "/images/img7.jpg",
      category: "haircare",
      rating: 4.4,
      reviewCount: 67,
      isNew: true,
      inStock: true,
      stockQuantity: 2
    }
  ];

  const categories = [
    {
      name: "Skincare",
      image: "/images/img8.webp",
      path: "/skincare",
      description: "Nourish your skin"
    },
    {
      name: "Makeup",
      image: "/images/img9.jpg",
      path: "/makeup",
      description: "Express yourself"
    },
    {
      name: "Haircare",
      image: "/images/img10.jpg",
      path: "/haircare",
      description: "Beautiful hair care"
    },
    {
      name: "Brands",
      image: "/images/img11.jpg",
      path: "/brands",
      description: "Top beauty brands"
    },
    {
      name: "Bestsellers",
      image: "/images/img12.jpg",
      path: "/bestsellers",
      description: "Customer favorites"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: "😊" },
    { number: "150+", label: "Premium Products", icon: "✨" },
    { number: "4.9⭐", label: "Average Rating", icon: "⭐" },
    { number: "24/7", label: "Expert Support", icon: "💬" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section*/}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-800 to-purple-700">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm tracking-wide">PREMIUM LUXURY COLLECTION</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Unveil Your
                  <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                    True Beauty
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                  Your search for flawless ends here. Unleash your skin's potential with our powerful yet gentle collection. See the difference, feel the confidence add your new favorites to cart.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="group relative bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>Discover Collection</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/bestsellers"
                  className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-2"
                >
                  <span>Shop Bestsellers</span>
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/20">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-sm flex items-center justify-center space-x-1">
                      <span>{stat.icon}</span>
                      <span>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="relative">
              <div className="relative z-10 transform  transition-transform duration-500">
                <img
                  src="/images/img1.jpg"
                  alt="Luxury Beauty Products"
                  className="w-full rounded-3xl shadow-2xl border-4 border-white/10"
                />
              </div>

              <div className="absolute bottom-10 left-10 bg-white rounded-2xl p-6 shadow-2xl animate-float animation-delay-500">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-gray-600 text-sm">Trusted by 50K+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12"> 
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-4">
                <span className="text-lg">🎯</span>
                <span className="font-semibold text-sm">SHOP BY CATEGORY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Discover Your
                <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Beauty Journey
                </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our carefully curated collections designed to enhance every aspect of your beauty routine
            </p>
        </div>

        <div className="py-12 bg-gray-52"> 
            <div className="max-w-7xl mx-auto px-2">
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            to={category.path}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                                <p className="text-white/80 text-sm">{category.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
            <div className="mb-8 lg:mb-0">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full mb-4">
                <span className="text-lg">⭐</span>
                <span className="font-semibold text-sm">FEATURED COLLECTION</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Trending 
                <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Now
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Shop our most-loved products, adored by thousands of happy customers
              </p>
            </div>
            <Link
              to="/shop"
              className="group bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
            >
              <span>View All Products</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="transform hover:scale-105 transition-transform duration-300">
                <ProductCard product={product} showCategory={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Banner Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full animate-pulse animation-delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
            <span className="text-lg">🎊</span>
            <span className="font-semibold">WINTER SALE EVENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Up to <span className="text-yellow-300">50% OFF</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Don't miss our biggest sale of the season! Transform your beauty routine with premium products at incredible prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Shop the Sale
            </Link>
            <Link
              to="/bestsellers"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pink-600 transition-all duration-300 backdrop-blur-sm"
            >
              View Deals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;