import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ product, showCategory = false }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const {
    id,
    name,
    price,
    image,
    category,
    originalPrice,
    discount,
    rating = 4.5,
    reviewCount = 24,
    isBestseller = false,
    isNew = false,
    inStock = true,
    stockQuantity = 0
  } = product;

  const hasDiscount = originalPrice && originalPrice > price;
  const isWishlisted = isInWishlist(id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inStock) {
      addToCart(product);
    }
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }
  };

  const handleHoverAddToFavorites = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isWishlisted) {
      addToWishlist(product);
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group ${
      !inStock ? 'opacity-70' : ''
    }`}>
      
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"/>
        </Link>
        
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold text-sm">Out of Stock</span>
          </div>
        )}
        
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {!inStock && (
            <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-bold">SOLD OUT</div>
          )}
          {inStock && hasDiscount && (
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{discount}% OFF
            </div>
          )}
          {inStock && isBestseller && (
            <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">🔥 Bestseller</div>
          )}
          {inStock && isNew && (
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">NEW</div>
          )}
        </div>
        
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={handleWishlistToggle}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 ${
              isWishlisted 
                ? 'bg-pink-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600'
            }`}
          >
            <svg className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {inStock && !isWishlisted && (
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button 
              onClick={handleHoverAddToFavorites}
              className="w-full bg-pink-600 text-white py-3 font-semibold hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>Add to Favorites</span>
            </button>
          </div>
        )}

        {inStock && isWishlisted && (
          <div className="absolute bottom-0 left-0 right-0 bg-green-500/95 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="w-full text-white py-3 font-semibold flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>In Favorites</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        {showCategory && category && (
          <span className="text-xs font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full mb-3 inline-block">
            {category}
          </span>
        )}
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-pink-600 transition-colors duration-200 min-h-[3.5rem]">
          {name}
        </h3>

        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-4 h-4 ${
                    star <= Math.floor(rating)
                      ? 'text-yellow-400 fill-current'
                      : star === Math.ceil(rating) && !Number.isInteger(rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">({rating})</span>
          </div>
          <span className="text-sm text-gray-500">• {reviewCount} reviews</span>
        </div>

        {inStock && stockQuantity > 0 && stockQuantity <= 10 && (
          <div className="mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-orange-600 font-medium">Only {stockQuantity} left!</span>
              <div className="flex-1 bg-gray-200 rounded-full h-1">
                <div 
                  className="bg-orange-500 h-1 rounded-full" 
                  style={{ width: `${(stockQuantity / 10) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-pink-600">
            ₹{price}
          </span>
          {hasDiscount && (
            <span className="text-lg text-gray-500 line-through">
              ₹{originalPrice}
            </span>
          )}
        </div>

        <button 
          onClick={handleAddToCart}
          disabled={!inStock}
          className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
            inStock 
              ? 'bg-pink-600 text-white hover:bg-pink-700' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;