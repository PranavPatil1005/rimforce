import React, { useState } from 'react';
import { NavTab } from '../types';
import { BRAND_LOGO_IMAGE } from '../data/wheels';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  cartCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0d0e12]/92 backdrop-blur-md shadow-2xl border-b border-[#5d3f3b]/30">
      <div className="w-full px-6 lg:px-12 flex justify-between items-center h-20 max-w-[1440px] mx-auto">
        {/* Brand Anchor with User Logo Left Beside Brand Name */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer bg-transparent border-0 p-0"
          >
            {/* User Logo Image Left of Brand Name */}
            <div className="h-11 sm:h-12 w-14 sm:w-16 rounded overflow-hidden flex items-center justify-center bg-[#1a1b20] border border-[#ae8883]/30 group-hover:border-[#e62020] transition-colors shrink-0">
              <img
                src={BRAND_LOGO_IMAGE}
                alt="RIMFORCE Forged Wheels Logo"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-['Montserrat'] text-xl lg:text-2xl font-extrabold tracking-tight text-[#e3e2e8] uppercase leading-none">
                RIMFORCE
              </span>
              <span className="font-['Montserrat'] text-[9px] font-bold tracking-[0.25em] text-[#e62020] uppercase mt-1">
                ALLOY WHEELS
              </span>
            </div>
          </button>
        </div>

        {/* 4 Clean Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`text-sm uppercase tracking-wider font-['Montserrat'] transition-all duration-150 py-1 cursor-pointer bg-transparent border-0 ${
                  isActive
                    ? 'border-b-2 border-[#e62020] text-[#e62020] font-bold'
                    : 'text-[#c5c6c7] hover:text-[#e3e2e8]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Trailing Action: Dedicated Cart Page Link */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onSelectTab('cart')}
            className={`relative px-4 py-2 rounded border transition-all active:scale-95 flex items-center gap-2 cursor-pointer ${
              currentTab === 'cart'
                ? 'bg-[#e62020] text-white border-[#e62020] shadow-[0_0_16px_rgba(230,32,32,0.4)]'
                : 'bg-[#1a1b20] hover:bg-[#1f1f24] text-[#e3e2e8] border-[#c5c6c7]/20 hover:border-[#e62020]'
            }`}
            title="Go to Cart Page"
          >
            <span
              className={`material-symbols-outlined text-lg ${
                currentTab === 'cart' ? 'text-white' : 'text-[#e62020]'
              }`}
            >
              shopping_bag
            </span>
            <span className="text-xs font-['Montserrat'] font-bold uppercase hidden sm:inline-block">
              Cart
            </span>
            <span
              className={`text-[10px] font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center font-mono ${
                currentTab === 'cart'
                  ? 'bg-white text-[#e62020]'
                  : 'bg-[#e62020] text-white'
              }`}
            >
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#c5c6c7] hover:text-white md:hidden rounded hover:bg-[#1a1b20]"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0e12]/98 border-b border-[#5d3f3b]/40 px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-xs font-['Montserrat'] font-bold uppercase tracking-wider rounded ${
                currentTab === item.id
                  ? 'bg-[#1f1f24] text-[#e62020] border-l-2 border-[#e62020]'
                  : 'text-[#c5c6c7] hover:bg-[#1a1b20]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onSelectTab('cart');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 text-xs font-['Montserrat'] font-bold uppercase tracking-wider rounded flex items-center justify-between ${
              currentTab === 'cart'
                ? 'bg-[#e62020] text-white'
                : 'bg-[#1a1b20] text-[#e3e2e8]'
            }`}
          >
            <span>View Cart</span>
            <span className="font-mono text-xs font-bold">({cartCount})</span>
          </button>
        </div>
      )}
    </header>
  );
};
