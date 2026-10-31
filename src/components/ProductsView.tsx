import React, { useState } from 'react';
import { WheelProduct, CartItem, NavTab } from '../types';
import { WHEEL_PRODUCTS } from '../data/wheels';

interface ProductsViewProps {
  onAddToCart: (item: CartItem) => void;
  onSelectTab: (tab: NavTab) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ onAddToCart, onSelectTab }) => {
  // Diameters strictly 14", 15", 16", 17"
  const [productDiameters, setProductDiameters] = useState<Record<string, string>>({
    'rf07-grand-prix': '15"',
    'rf01-tactical': '15"',
    'rf04-hyper-concave': '16"',
    'rf09-crimson-aero': '16"',
  });

  const [notification, setNotification] = useState<string | null>(null);

  const handleDiameterChange = (wheelId: string, diameter: string) => {
    setProductDiameters((prev) => ({ ...prev, [wheelId]: diameter }));
  };

  const handleAddProductToCart = (wheel: WheelProduct) => {
    const chosenDiameter = productDiameters[wheel.id] || '15"';
    const setPrice = wheel.basePrice * 4;

    const newItem: CartItem = {
      id: `cart-${wheel.id}-${Date.now()}`,
      wheel,
      diameter: chosenDiameter,
      width: wheel.widths[1] || wheel.widths[0],
      boltPattern: wheel.boltPatterns[0],
      quantity: 1,
      unitPrice: setPrice,
    };

    onAddToCart(newItem);
    setNotification(`Added Set of 4 (${wheel.name} - ${chosenDiameter}) to Cart`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="flex-1 w-full bg-tech-grid relative text-[#e3e2e8]">
      {/* Toast Notification with Go To Cart CTA */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1f1f24] border border-[#e62020] text-white px-5 py-3.5 rounded-lg shadow-2xl flex items-center gap-4 animate-fadeIn">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#e62020] text-xl">check_circle</span>
            <span className="text-xs font-['Montserrat'] font-bold uppercase">{notification}</span>
          </div>
          <button
            onClick={() => onSelectTab('cart')}
            className="px-3 py-1.5 bg-[#e62020] hover:bg-[#ff2a2a] text-white text-[11px] font-['Montserrat'] font-bold uppercase rounded cursor-pointer"
          >
            View Cart
          </button>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16 relative z-10">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#e62020]"></span>
            <span className="font-['Montserrat'] text-[11px] font-bold tracking-widest text-[#e62020] uppercase">
              PRECISION CNC CATALOGUE
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-[#292a2e] text-[#c5c6c7] border border-[#c5c6c7]/20 font-mono">
              6061-T6 FORGED ALUMINUM
            </span>
          </div>

          <h1 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#e3e2e8] tracking-tight mb-3">
            Forged Wheel Products
          </h1>
          <p className="font-['Inter'] text-sm sm:text-base text-[#c5c6c7] max-w-2xl leading-relaxed">
            Every wheel is individually precision-milled in our Talegaon, Pune engineering center to meet exact hub tolerances, delivering significant unsprung mass reduction for high-performance track and road setups.
          </p>
        </div>

        {/* Products Grid - No Category Filter, No Color Options, Diameters 14" to 17" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {WHEEL_PRODUCTS.map((wheel) => {
            const currentDiameter = productDiameters[wheel.id] || '15"';
            const setPrice = wheel.basePrice * 4;

            return (
              <div
                key={wheel.id}
                className="bg-[#12141A] border border-[#c5c6c7]/15 rounded-xl overflow-hidden hover:border-[#e62020]/60 transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                {/* Visual Staging Viewport */}
                <div className="relative h-64 sm:h-72 bg-gradient-to-b from-[#1a1b20] to-[#0b0c10] flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={wheel.image}
                    alt={wheel.name}
                    className="w-56 h-56 object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)] group-hover:scale-105 transition-transform duration-500 relative z-10"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    <span className="px-2.5 py-1 bg-[#1f1f24]/90 backdrop-blur rounded text-[10px] font-['Montserrat'] font-bold text-[#e62020] uppercase border border-[#c5c6c7]/20">
                      {wheel.category}
                    </span>
                    <span className="px-2.5 py-1 bg-[#0b0c10]/80 backdrop-blur rounded text-[10px] font-mono text-white border border-[#c5c6c7]/20">
                      {wheel.weightKg} KG / WHEEL
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold rounded">
                      -{wheel.weightSavedPerCorner} KG SAVED
                    </span>
                  </div>
                </div>

                {/* Details & Diameter Selection */}
                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-mono text-xs text-[#c5c6c7] block uppercase">
                          {wheel.code}
                        </span>
                        <h2 className="font-['Montserrat'] text-2xl font-bold uppercase text-white">
                          {wheel.name}
                        </h2>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-[#c5c6c7] uppercase block font-['Montserrat'] font-bold">
                          Per Wheel
                        </span>
                        <span className="font-mono text-xl font-bold text-[#e62020]">
                          ₹{wheel.basePrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <p className="font-['Inter'] text-xs text-[#c5c6c7] leading-relaxed mb-5">
                      {wheel.description}
                    </p>

                    {/* Diameter Selector strictly 14", 15", 16", 17" */}
                    <div className="mb-5 bg-[#1a1b20] p-3.5 rounded-lg border border-[#c5c6c7]/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-['Montserrat'] text-[11px] font-bold uppercase text-white">
                          Select Diameter Size:
                        </span>
                        <span className="font-mono text-xs text-[#e62020] font-bold">
                          {currentDiameter} Selected
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {['14"', '15"', '16"', '17"'].map((dia) => (
                          <button
                            key={dia}
                            type="button"
                            onClick={() => handleDiameterChange(wheel.id, dia)}
                            className={`py-2 text-xs font-mono font-bold rounded cursor-pointer transition-all ${
                              currentDiameter === dia
                                ? 'bg-[#e62020] text-white shadow-[0_0_12px_rgba(230,32,32,0.4)]'
                                : 'bg-[#0d0e12] text-[#c5c6c7] hover:text-white border border-[#c5c6c7]/15'
                            }`}
                          >
                            {dia}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Spec Ribbon */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-[#c5c6c7]/15 text-[11px] font-mono">
                      <div className="bg-[#1a1b20] p-2 rounded">
                        <span className="text-[#c5c6c7]/60 block text-[9px] uppercase">Load Rating</span>
                        <span className="text-white font-bold">{wheel.loadRatingKg} kg</span>
                      </div>
                      <div className="bg-[#1a1b20] p-2 rounded">
                        <span className="text-[#c5c6c7]/60 block text-[9px] uppercase">Bolt Patterns</span>
                        <span className="text-white font-bold">{wheel.boltPatterns[0]}</span>
                      </div>
                      <div className="bg-[#1a1b20] p-2 rounded">
                        <span className="text-[#c5c6c7]/60 block text-[9px] uppercase">Compliance</span>
                        <span className="text-emerald-400 font-bold">ARAI / ISO</span>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart CTA */}
                  <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div>
                      <span className="font-['Montserrat'] text-[10px] text-[#c5c6c7] uppercase block font-bold">
                        Set of 4 Wheels ({currentDiameter})
                      </span>
                      <span className="font-mono text-base font-bold text-white">
                        ₹{setPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddProductToCart(wheel)}
                      className="px-6 py-3 bg-[#e62020] hover:bg-[#ff2a2a] text-white font-['Montserrat'] text-xs font-bold uppercase tracking-wider rounded crimson-glow transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span className="material-symbols-outlined text-base">shopping_cart</span>
                      <span>Add to Cart (Set of 4)</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal clean fitment assistance footer */}
        <div className="mt-8 pt-8 border-t border-[#c5c6c7]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#c5c6c7] font-['Inter']">
            Need custom bolt pattern matching, brake caliper clearance, or bespoke offsets?
          </p>
          <button
            onClick={() => onSelectTab('contact')}
            className="text-xs font-['Montserrat'] font-bold text-[#e62020] hover:underline uppercase flex items-center gap-1 cursor-pointer"
          >
            <span>Inquire With Engineering</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
