import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import History from './pages/History';
import Login from './pages/Login';
import Bestsellers from './pages/Bestsellers';
import Skincare from './pages/Skincare';
import Makeup from './pages/Makeup';
import Wishlist from './pages/Wishlist';
import Haircare from './pages/Haircare';
import Brands from './pages/Brands';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/bestsellers" element={<Bestsellers />} />
              <Route path="/skincare" element={<Skincare />} />
              <Route path="/makeup" element={<Makeup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/history" element={<History />} />
              <Route path="/login" element={<Login />} />
              <Route path="/haircare" element={<Haircare />} />
              <Route path="/brands" element={<Brands />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;