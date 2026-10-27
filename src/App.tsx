import React, { useState } from 'react';
import { NavTab, CartItem } from './types';
import { WHEEL_PRODUCTS } from './data/wheels';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ProductsView } from './components/ProductsView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { CartView } from './components/CartView';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');

  // Initial cart with 1 set of 4 wheels (₹2,60,000)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-init-rf07',
      wheel: WHEEL_PRODUCTS[0],
      diameter: '15"',
      width: '7.0J',
      boltPattern: '4x100',
      quantity: 1,
      unitPrice: 260000,
    },
  ]);

  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => [newItem, ...prev]);
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleCheckout = () => {
    // Checkout simulation handled in CartView
  };

  return (
    <div className="bg-[#121317] text-[#e3e2e8] min-h-screen flex flex-col justify-between selection:bg-[#e62020] selection:text-white font-['Inter']">
      {/* Header with user logo beside brand name & navigation to pages */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        cartCount={cartItems.length}
      />

      {/* Main Dynamic Viewport */}
      <main className="flex-1 w-full flex flex-col">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentTab === 'products' && (
          <ProductsView
            onAddToCart={handleAddToCart}
            onSelectTab={handleSelectTab}
          />
        )}

        {currentTab === 'about' && (
          <AboutView
            onSelectTab={handleSelectTab}
          />
        )}

        {currentTab === 'contact' && (
          <ContactView />
        )}

        {currentTab === 'cart' && (
          <CartView
            items={cartItems}
            onRemoveItem={handleRemoveCartItem}
            onUpdateQuantity={handleUpdateCartQuantity}
            onCheckout={handleCheckout}
            onSelectTab={handleSelectTab}
          />
        )}
      </main>

      {/* Clean Footer with single branch information & logo */}
      <Footer onSelectTab={handleSelectTab} />
    </div>
  );
}
