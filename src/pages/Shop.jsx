import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [products] = useState([
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
      isBestseller: true,
      isNew: false,
      inStock: true,
      stockQuantity: 15
    },
    {
      id: 2,
      name: "Vitamin C Brightening Cream",
      price: 38.00,
      image: "/images/img28.jpg",
      category: "skincare",
      type: "moisturizer",
      rating: 4.7,
      reviewCount: 289,
      isBestseller: true,
      isNew: false,
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
      type: "lipstick",
      rating: 4.9,
      reviewCount: 156,
      isBestseller: true,
      isNew: true,
      inStock: true,
      stockQuantity: 3 
    },
    {
      id: 4,
      name: "Anti-Aging Night Cream",
      price: 52.00,
      image: "/images/img5.jpg",
      category: "skincare",
      type: "moisturizer",
      rating: 4.6,
      reviewCount: 203,
      isBestseller: false,
      isNew: false,
      inStock: false, 
      stockQuantity: 0
    },
    {
      id: 5,
      name: "Eyeshadow Palette - Nude",
      price: 35.00,
      originalPrice: 45.00,
      discount: 22,
      image: "/images/img29.jpg",
      category: "makeup",
      type: "eyeshadow",
      rating: 4.5,
      reviewCount: 178,
      isBestseller: false,
      isNew: true,
      inStock: true,
      stockQuantity: 12
    },
    {
      id: 6,
      name: "Face Wash & Toner Kit",
      price: 28.00,
      image: "/images/img19.webp",
      category: "skincare",
      type: "cleanser",
      rating: 4.4,
      reviewCount: 95,
      isBestseller: false,
      isNew: false,
      inStock: false, 
      stockQuantity: 0
    },
    {
      id: 7,
      name: "Foundation - Natural Finish",
      price: 42.00,
      image: "/images/img14.webp",
      category: "makeup",
      type: "foundation",
      rating: 4.6,
      reviewCount: 203,
      isBestseller: false,
      isNew: true,
      inStock: true,
      stockQuantity: 2 
    },
    {
      id: 8,
      name: "Sunscreen SPF 50+",
      price: 22.00,
      originalPrice: 28.00,
      discount: 21,
      image: "/images/img20.jpg",
      category: "skincare",
      type: "sunscreen",
      rating: 4.5,
      reviewCount: 167,
      isBestseller: false,
      isNew: false,
      inStock: true,
      stockQuantity: 20
    },
    {
      id: 9,
      name: "Limited Edition Perfume",
      price: 65.00,
      image: "/images/img6.jpg",
      category: "fragrance",
      type: "perfume",
      rating: 4.8,
      reviewCount: 89,
      isBestseller: true,
      isNew: false,
      inStock: false, 
      stockQuantity: 0
    },
    {
      id: 10,
      name: "Hair Serum - Argan Oil",
      price: 28.00,
      image: "/images/img7.jpg",
      category: "haircare",
      type: "haircare",
      rating: 4.4,
      reviewCount: 67,
      isBestseller: false,
      isNew: true,
      inStock: true,
      stockQuantity: 5 
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [stockFilter, setStockFilter] = useState('all'); 

  const categories = ['all', 'skincare', 'makeup', 'fragrance', 'haircare'];
  const types = ['all', 'serum', 'moisturizer', 'cleanser', 'sunscreen', 'lipstick', 'eyeshadow', 'foundation', 'perfume', 'haircare'];
  const stockOptions = ['all', 'in-stock', 'out-of-stock'];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesType = selectedType === 'all' || product.type === selectedType;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStock = stockFilter === 'all' || 
                        (stockFilter === 'in-stock' && product.inStock) ||
                        (stockFilter === 'out-of-stock' && !product.inStock);

    return matchesCategory && matchesType && matchesPrice && matchesSearch && matchesStock;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew - a.isNew;
      default:
        return (b.isBestseller - a.isBestseller) || (b.rating - a.rating);
    }
  });

  const inStockCount = products.filter(p => p.inStock).length;
  const outOfStockCount = products.filter(p => !p.inStock).length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Shop All Products</h1>
          <p className="text-xl text-pink-600 max-w-2xl mx-auto">
            Discover our complete collection of premium beauty products
          </p>
          
          <div className="flex justify-center space-x-6 mt-6 text-sm">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              {inStockCount} In Stock
            </div>
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full">
              {outOfStockCount} Out of Stock
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300"
              >
                Filters
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="lg:hidden mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat === 'all' ? 'All Categories' : cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stock Status</label>
                  <select
                    value={stockFilter}
                    onChange={(e) => setStockFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    {stockOptions.map(option => (
                      <option key={option} value={option}>
                        {option === 'all' ? 'All Stock' : 
                         option === 'in-stock' ? 'In Stock' : 'Out of Stock'}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>$0</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 hidden lg:block">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition duration-200 ${
                        selectedCategory === category
                          ? 'bg-pink-100 text-pink-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category === 'all' ? 'All Categories' : category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Product Type</h4>
                <div className="space-y-2">
                  {types.map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition duration-200 ${
                        selectedType === type
                          ? 'bg-pink-100 text-pink-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {type === 'all' ? 'All Types' : type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Stock Status</h4>
                <div className="space-y-2">
                  {stockOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => setStockFilter(option)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition duration-200 ${
                        stockFilter === option
                          ? 'bg-pink-100 text-pink-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {option === 'all' ? 'All Stock' : 
                       option === 'in-stock' ? 'In Stock' : 'Out of Stock'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedType('all');
                  setStockFilter('all');
                  setPriceRange([0, 100]);
                  setSearchQuery('');
                }}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition duration-200"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {sortedProducts.length} of {products.length} products
                {stockFilter !== 'all' && ` (${stockFilter === 'in-stock' ? 'In Stock' : 'Out of Stock'})`}
              </p>
              <div className="text-sm text-gray-500">
                Sorted by: {sortBy.replace('-', ' ')}
              </div>
            </div>

            {sortedProducts.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedType('all');
                    setStockFilter('all');
                    setPriceRange([0, 100]);
                    setSearchQuery('');
                  }}
                  className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    showCategory={true}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
