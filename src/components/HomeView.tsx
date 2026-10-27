import React, { useState } from 'react';
import { NavTab, WheelProduct, CartItem } from '../types';
import { WHEEL_PRODUCTS } from '../data/wheels';

interface HomeViewProps {
  onSelectTab: (tab: NavTab) => void;
  onAddToCart: (item: CartItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab, onAddToCart }) => {
  const [notification, setNotification] = useState<string | null>(null);

  const handleQuickAdd = (wheel: WheelProduct) => {
    const newItem: CartItem = {
      id: `cart-${wheel.id}-${Date.now()}`,
      wheel,
      diameter: '15"',
      width: wheel.widths[1] || wheel.widths[0],
      boltPattern: wheel.boltPatterns[0],
      quantity: 1,
      unitPrice: wheel.basePrice * 4,
    };
    onAddToCart(newItem);
    setNotification(`Added Set of 4 ${wheel.name} Wheels to Cart`);
    setTimeout(() => setNotification(null), 2500);
  };

  return (
    <div className="flex-1 w-full flex flex-col font-['Inter'] text-[#e3e2e8]">
      {/* Toast Notification with Link to Cart */}
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

      {/* HERO SECTION: Atmospheric High-Performance Luxury Staging */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-[#c5c6c7]/10 carbon-mesh bg-[#0d0e12]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e12] via-[#0d0e12]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute -top-40 right-10 w-[700px] h-[700px] bg-[#e62020]/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#47494a]/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
          {/* Hero Text */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-3 bg-[#1a1b20] border border-[#e62020]/40 px-3.5 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#e62020] animate-pulse"></span>
              <span className="font-['Montserrat'] text-[#e3e2e8] text-[10px] tracking-widest uppercase font-bold">
                STRONGER RIDE &nbsp;|&nbsp; BOLDER LOOKS
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-['Montserrat'] text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[#e3e2e8] tracking-tight leading-[1.05]">
                PRECISION CNC <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3e2e8] via-[#c5c6c7] to-[#e62020]">
                  FORGED ALLOY
                </span>{' '}
                <br />
                WHEELS.
              </h1>
              <p className="font-['Inter'] text-base lg:text-lg text-[#c5c6c7] max-w-xl mt-2 leading-relaxed">
                Aerospace-grade 6061-T6 forged aluminum engineered for extreme track performance, ultra-low unsprung rotational inertia, and peerless vehicle stance aesthetics. Crafted and precision-milled in Talegaon, Pune, Maharashtra.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onSelectTab('products')}
                className="chamfer-btn bg-[#e62020] hover:bg-[#FF2A2A] text-white px-8 py-4 font-['Montserrat'] text-sm uppercase font-bold tracking-wider transition-all duration-200 crimson-glow active:scale-95 flex items-center gap-3 cursor-pointer"
              >
                <span>Explore Forged Catalog</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
              <button
                onClick={() => onSelectTab('about')}
                className="border border-[#c5c6c7]/35 hover:border-[#c5c6c7] hover:bg-[#c5c6c7]/10 text-[#e3e2e8] px-8 py-4 font-['Montserrat'] text-sm uppercase font-bold tracking-wider transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm text-[#e62020]">precision_manufacturing</span>
                <span>Our Engineering</span>
              </button>
            </div>

            {/* Engineering Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#c5c6c7]/15">
              <div>
                <span className="block font-['Inter'] text-lg font-bold text-[#e3e2e8]">10,000T</span>
                <span className="font-['Montserrat'] text-[10px] uppercase text-[#c5c6c7] font-bold">
                  Forging Pressure
                </span>
              </div>
              <div>
                <span className="block font-['Inter'] text-lg font-bold text-[#e3e2e8]">6061-T6</span>
                <span className="font-['Montserrat'] text-[10px] uppercase text-[#c5c6c7] font-bold">
                  Aero Billet Ingot
                </span>
              </div>
              <div>
                <span className="block font-['Inter'] text-lg font-bold text-[#e62020]">&lt; 7.0 KG</span>
                <span className="font-['Montserrat'] text-[10px] uppercase text-[#c5c6c7] font-bold">
                  Ultralight Rotary Mass
                </span>
              </div>
            </div>
          </div>

          {/* Dual-Wheel Hero Staging Area */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[480px] h-[480px] rounded-full border border-[#c5c6c7]/10"></div>
              <div
                className="w-[360px] h-[360px] rounded-full border border-dashed border-[#e62020]/20 animate-spin"
                style={{ animationDuration: '40s' }}
              ></div>
              <div className="w-[200px] h-[200px] rounded-full border border-[#c5c6c7]/15"></div>
            </div>

            <div className="relative w-full max-w-[500px] flex items-center justify-center">
              {/* Wheel 1: RF-07 Grand Prix */}
              <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 -mr-16 group transition-transform duration-500 hover:scale-105">
                <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent rounded-full blur-xl"></div>
                <img
                  alt="RF-07 Grand Prix Gold Mesh Forged Wheel"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA82XSsQes3OoOeJf74zdIvDHYD9taym9GaAY0pVIbQNjcbucHKTvyH3iV_1goNsHFpw8601TC1iAuuo0DXq6dm13I3e9uaioE4FsOS0sPJoTWvMfl6K3dQe32wutb-b-cHBEABpFvD5HLoNz7CDz6_IbmUvBAZqAYafhKu5jbsmwh21hX7vGLItimyGuqXFYAONyhyTP5-tAPt9_J03xwAX7bwnYxLQNTxs_8p7gN1BaOgVIKlKGufy3tg1EezS0X6xYE"
                />
                <div className="absolute -bottom-2 -left-2 bg-[#292a2e]/95 backdrop-blur-md border border-[#c5c6c7]/25 px-3 py-1.5 rounded flex items-center gap-2 shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="font-['Montserrat'] text-[10px] text-[#e3e2e8] uppercase font-bold">
                    RF-07 GP // 6.4 KG
                  </span>
                </div>
              </div>

              {/* Wheel 2: RF-09 Crimson Aero */}
              <div className="relative z-20 w-80 h-80 sm:w-96 sm:h-96 group transition-transform duration-500 hover:scale-105">
                <div className="absolute -inset-4 bg-[#e62020]/20 rounded-full blur-2xl"></div>
                <img
                  alt="RF-09 Crimson Aero Forged Wheel"
                  className="w-full h-full object-contain filter drop-shadow-[0_25px_45px_rgba(230,32,32,0.35)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3GP8NKgK92AVQIRKBEaoOsu5-M2Zeoq9g8ayEhdOZU746qq2JLV54hvQYiJQ2LyjY15x6BdgDkjmg8GFpGZ3KHjs3yGdN7ze9mMzy8WxxGqfZFZMeWJVaUohTKTB6NyVnLYVogB8gSnx3G_O4HKfmcgQ166NzyG_tkdZFa8sKdpQQxX81pk1QmAM6CRIRpLlRv8wvag4Zx8RKv1LjFb9PPROfndE19UdMyXhNyQDECGMOd-9qEwBgd1KjsGrvbILg8pE"
                />
                <div className="absolute top-2 -right-4 bg-[#292a2e]/95 backdrop-blur-md border border-[#e62020]/60 px-3 py-1.5 rounded flex items-center gap-2 shadow-2xl crimson-glow-sm">
                  <span className="material-symbols-outlined text-[#e62020] text-xs">verified</span>
                  <span className="font-['Montserrat'] text-[10px] text-[#e3e2e8] uppercase font-bold">
                    ARAI Tested
                  </span>
                </div>
                <div className="absolute -bottom-4 right-6 bg-[#292a2e]/95 backdrop-blur-md border border-[#c5c6c7]/25 px-3 py-1.5 rounded flex items-center gap-2 shadow-xl">
                  <span className="material-symbols-outlined text-[#c5c6c7] text-xs">speed</span>
                  <span className="font-['Montserrat'] text-[10px] text-[#e3e2e8] uppercase font-bold">
                    Bespoke CNC Offset
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CURATED WHEEL SHOWCASE */}
      <section className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#e62020] font-['Montserrat'] text-[11px] uppercase tracking-widest mb-1 font-bold">
              <span className="w-1.5 h-1.5 bg-[#e62020] rounded-full"></span>
              <span>Aerospace Monoblock Portfolio</span>
            </div>
            <h2 className="font-['Montserrat'] text-2xl lg:text-3xl font-bold uppercase text-[#e3e2e8]">
              Featured Forged Series
            </h2>
          </div>

          <button
            onClick={() => onSelectTab('products')}
            className="text-sm font-['Montserrat'] font-bold text-[#e62020] hover:underline uppercase flex items-center gap-1 cursor-pointer"
          >
            <span>View All Wheel Products</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>

        {/* 4 Featured Products Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHEEL_PRODUCTS.map((wheel) => {
            const setPrice = wheel.basePrice * 4;
            return (
              <div
                key={wheel.id}
                className="group relative bg-[#12141A] border border-[#c5c6c7]/15 rounded-lg p-6 flex flex-col justify-between hover:border-[#e62020]/60 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="font-['Montserrat'] text-[10px] text-[#c5c6c7] bg-[#1F2833] px-2.5 py-1 rounded uppercase tracking-wider font-bold">
                    {wheel.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#e62020]">
                    {wheel.weightKg} kg
                  </span>
                </div>

                <div className="py-6 flex items-center justify-center relative min-h-[200px]">
                  <img
                    alt={wheel.name}
                    className="w-48 h-48 object-contain group-hover:scale-105 transition-transform duration-300 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                    src={wheel.image}
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="font-['Montserrat'] text-[11px] text-[#c5c6c7] uppercase font-semibold">
                      {wheel.tagline}
                    </p>
                    <h3 className="font-['Montserrat'] text-base uppercase text-[#e3e2e8] font-bold">
                      {wheel.name}
                    </h3>
                    <p className="font-mono text-xs text-[#c5c6c7] mt-0.5">
                      14", 15", 16", 17" // {wheel.boltPatterns[0]}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#c5c6c7]/15 flex items-center justify-between">
                    <div>
                      <span className="block font-['Montserrat'] text-[9px] text-[#c5c6c7] uppercase font-bold">
                        Set of 4
                      </span>
                      <span className="font-mono text-base font-bold text-white">
                        ₹{setPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(wheel)}
                      className="h-10 px-3.5 bg-[#e62020] hover:bg-[#ff2a2a] text-white rounded font-['Montserrat'] text-[11px] uppercase tracking-wider transition-all duration-200 active:scale-95 flex items-center gap-1.5 font-bold cursor-pointer shadow-md"
                    >
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: CNC ENGINEERING CUTAWAY */}
      <section className="relative py-24 bg-[#0d0e12] border-y border-[#c5c6c7]/15">
        <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative bg-[#1a1b20] border border-[#c5c6c7]/25 rounded-xl p-8 overflow-hidden">
              <div className="absolute inset-0 carbon-mesh opacity-40"></div>
              <div className="absolute top-4 right-4 font-mono text-[10px] text-[#c5c6c7] tracking-widest font-bold">
                CNC_TOLERANCE // ±0.02MM
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-[#292a2e] border border-[#ae8883]/30 flex items-center justify-center text-[#e62020]">
                    <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
                  </div>
                  <div>
                    <span className="font-['Montserrat'] text-[10px] text-[#e62020] uppercase font-bold tracking-wider">
                      5-Axis CNC Milling
                    </span>
                    <h4 className="font-['Montserrat'] text-lg uppercase text-[#e3e2e8] font-bold">
                      Structural Anatomy &amp; Stress Flow
                    </h4>
                  </div>
                </div>

                <div className="bg-[#0d0e12] border border-[#c5c6c7]/15 p-5 rounded">
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div className="border-l-2 border-[#e62020] pl-3">
                      <span className="text-[#c5c6c7] block">FORGING FORCE</span>
                      <span className="text-[#e3e2e8] font-bold text-sm">10,000 METRIC TONS</span>
                    </div>
                    <div className="border-l-2 border-[#c5c6c7] pl-3">
                      <span className="text-[#c5c6c7] block">GRAIN DIRECTION</span>
                      <span className="text-[#e3e2e8] font-bold text-sm">CONTINUOUS RADIAL</span>
                    </div>
                    <div className="border-l-2 border-[#c5c6c7] pl-3">
                      <span className="text-[#c5c6c7] block">ALLOY TEMPER</span>
                      <span className="text-[#e3e2e8] font-bold text-sm">6061-T6 AEROSPACE</span>
                    </div>
                    <div className="border-l-2 border-[#e62020] pl-3">
                      <span className="text-[#c5c6c7] block">WEIGHT SAVING</span>
                      <span className="text-[#e62020] font-bold text-sm">-32% ROTARY MASS</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <img
                    alt="CNC Machined Forged Alloy Wheel Cutaway Detail"
                    className="w-64 h-64 object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.9)]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPM24m6nVXfjRa78YHXWUar-l-YLXGosZPRkHNKxupA70NWZA0uHq6zKHpUhU8mD71sXpD7mWiRNn7NagR1Sei22xcbs3_TGPM77pADmUl2doMnZV3Y3oB6RL3IDJAFV1LkF0zLT6Sg75oTFWNBY30Ebq0WAX6NuF3M5btHQM4_7yHjz43sU6pg9syUQCAR7csVuCThRzP0q0emHamF0Xuzc-CDcaDP97gPxuOOulUbBI9fayg_svOsC8liEJ7l09Uwg0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-8">
            <div>
              <span className="font-['Montserrat'] text-[11px] text-[#e62020] uppercase tracking-widest font-bold">
                Aero-Engineering Standards
              </span>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl font-bold uppercase text-[#e3e2e8] mt-1 leading-tight">
                Engineered Beyond <br />
                Conventional Limits.
              </h2>
              <p className="font-['Inter'] text-sm text-[#c5c6c7] mt-3 leading-relaxed">
                Every RIMFORCE wheel begins as an unyielding solid cylindrical billet of aerospace-grade 6061-T6 aluminum. Under a staggering 10,000 tons of hydraulic pressure, the grain structure is compressed radially, eliminating micro-porosity and creating unbroken spoke strength.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-[#292a2e] border border-[#e62020]/40 flex items-center justify-center text-[#e62020] font-bold font-mono text-xs shrink-0 mt-0.5">
                  01
                </div>
                <div>
                  <h4 className="font-['Montserrat'] text-base uppercase text-[#e3e2e8] font-bold">
                    Finite Element Analysis (FEA)
                  </h4>
                  <p className="font-['Inter'] text-[#c5c6c7] text-xs sm:text-sm mt-1 leading-relaxed">
                    Simulated under extreme cornering loads up to 3.2G to optimize spoke pocketing and reduce unsprung inertia without sacrificing rigidity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-[#292a2e] border border-[#e62020]/40 flex items-center justify-center text-[#e62020] font-bold font-mono text-xs shrink-0 mt-0.5">
                  02
                </div>
                <div>
                  <h4 className="font-['Montserrat'] text-base uppercase text-[#e3e2e8] font-bold">
                    High-Speed 5-Axis Precision
                  </h4>
                  <p className="font-['Inter'] text-[#c5c6c7] text-xs sm:text-sm mt-1 leading-relaxed">
                    Milled with diamond carbide tooling down to micron tolerances (±0.02mm), ensuring track-true radial runout and zero vibration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded bg-[#292a2e] border border-[#e62020]/40 flex items-center justify-center text-[#e62020] font-bold font-mono text-xs shrink-0 mt-0.5">
                  03
                </div>
                <div>
                  <h4 className="font-['Montserrat'] text-base uppercase text-[#e3e2e8] font-bold">
                    ARAI &amp; ISO 9001 Certified Testing
                  </h4>
                  <p className="font-['Inter'] text-[#c5c6c7] text-xs sm:text-sm mt-1 leading-relaxed">
                    Certified for aggressive circuit duty and severe road impact trials with 2,000,000 cycle dynamic radial fatigue torture trials.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSelectTab('about')}
                className="inline-flex items-center gap-3 font-['Montserrat'] text-xs font-bold text-[#e62020] uppercase tracking-wider hover:underline group cursor-pointer"
              >
                <span>Read More About Our Engineering</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CLIENT RIDE GALLERY */}
      <section className="max-w-[1440px] mx-auto w-full px-6 lg:px-12 py-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-['Montserrat'] text-[11px] text-[#e62020] uppercase tracking-widest font-bold">
              Real Stance // Real Track Times
            </span>
            <h2 className="font-['Montserrat'] text-2xl lg:text-3xl font-bold uppercase text-[#e3e2e8]">
              Client Showcase &amp; Custom Builds
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-['Montserrat'] text-[#c5c6c7] uppercase text-xs font-bold">
              Specification:
            </span>
            <span className="px-3 py-1 bg-[#292a2e] rounded text-xs text-white border border-[#c5c6c7]/20 font-mono">
              Bespoke Offsets
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative bg-[#12141A] border border-[#c5c6c7]/15 rounded-lg overflow-hidden flex flex-col">
            <div className="relative h-64 bg-[#0d0e12] flex items-center justify-center p-6 overflow-hidden">
              <img
                alt="RF-07 Grand Prix Gold Mesh"
                className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA82XSsQes3OoOeJf74zdIvDHYD9taym9GaAY0pVIbQNjcbucHKTvyH3iV_1goNsHFpw8601TC1iAuuo0DXq6dm13I3e9uaioE4FsOS0sPJoTWvMfl6K3dQe32wutb-b-cHBEABpFvD5HLoNz7CDz6_IbmUvBAZqAYafhKu5jbsmwh21hX7vGLItimyGuqXFYAONyhyTP5-tAPt9_J03xwAX7bwnYxLQNTxs_8p7gN1BaOgVIKlKGufy3tg1EezS0X6xYE"
              />
              <div className="absolute top-3 left-3 bg-[#292a2e]/90 backdrop-blur px-2.5 py-1 rounded border border-[#c5c6c7]/20">
                <span className="font-['Montserrat'] text-[9px] text-white uppercase font-bold">
                  Track Homologation Coupe
                </span>
              </div>
            </div>
            <div className="p-5 border-t border-[#c5c6c7]/15 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font-['Montserrat'] text-xs font-bold text-[#e3e2e8] uppercase">
                  RF-07 Grand Prix
                </span>
                <span className="font-['Montserrat'] text-[#e62020] text-[11px] uppercase font-bold">
                  Monaco Gold
                </span>
              </div>
              <p className="font-mono text-[#c5c6c7] text-xs">15" &amp; 16" Custom Track Spec</p>
            </div>
          </div>

          <div className="group relative bg-[#12141A] border border-[#c5c6c7]/15 rounded-lg overflow-hidden flex flex-col">
            <div className="relative h-64 bg-[#0d0e12] flex items-center justify-center p-6 overflow-hidden">
              <img
                alt="RF-01 Tactical Series"
                className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5ddOU1PfSUPZvm9ma4FDOD4Vd9ytWPhqp-vmY3ASSggelnqfr8b2cf4ktYFzIqSG01HUKcG77wBDDPdirZ1lE7rbF0C6U4787yKk3Eu2sA5TZ3OXrNQsBhHc84-Nb4zbiZfUtfZWhPzTRZgnh_Rv7O2NP6S_HfewfzhxYmkkkc-EKsnUCXbL3oPihydUiS7p44juBg0shzdro_HsYAbEGTNRtVsTgBhZg6r2r0KBYsRmgkLNe6-0n3p14bA1l_ggr8WY"
              />
              <div className="absolute top-3 left-3 bg-[#292a2e]/90 backdrop-blur px-2.5 py-1 rounded border border-[#c5c6c7]/20">
                <span className="font-['Montserrat'] text-[9px] text-white uppercase font-bold">
                  Performance Sports Saloon
                </span>
              </div>
            </div>
            <div className="p-5 border-t border-[#c5c6c7]/15 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font-['Montserrat'] text-xs font-bold text-[#e3e2e8] uppercase">
                  RF-01 Tactical Series
                </span>
                <span className="font-['Montserrat'] text-[#e62020] text-[11px] uppercase font-bold">
                  Stealth Titanium
                </span>
              </div>
              <p className="font-mono text-[#c5c6c7] text-xs">15" &amp; 16" Heavy Duty Spec</p>
            </div>
          </div>

          <div className="group relative bg-[#12141A] border border-[#c5c6c7]/15 rounded-lg overflow-hidden flex flex-col">
            <div className="relative h-64 bg-[#0d0e12] flex items-center justify-center p-6 overflow-hidden">
              <img
                alt="RF-04 Hyper-Concave"
                className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq2icgygXGWDv5Xs2b7HwsQpIE0Jts2pmS3W7ef69ZA5QAatlmHkPoiXEtChF_rHXD2tnsG8cOMltGU0wdz9SdrYCKuRVkFRpoZrGnxprxjbIFtTQJP9t9E1KK2cQ2FFDlxkdNTbrOapgZasM42s8q3VvrdHzU07j7nVcvcdq6Gq0ku0gOVMCRJ2GRrrVByHfaYAbx7d-m5rqAMnJymAOGTtPzFp258R7vX5fn-T7OKsU3FokFLBfOrXFWv4Fi0rPSQmc"
              />
              <div className="absolute top-3 left-3 bg-[#292a2e]/90 backdrop-blur px-2.5 py-1 rounded border border-[#c5c6c7]/20">
                <span className="font-['Montserrat'] text-[9px] text-white uppercase font-bold">
                  Luxury High-Speed Estate
                </span>
              </div>
            </div>
            <div className="p-5 border-t border-[#c5c6c7]/15 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font-['Montserrat'] text-xs font-bold text-[#e3e2e8] uppercase">
                  RF-04 Hyper-Concave
                </span>
                <span className="font-['Montserrat'] text-[#e62020] text-[11px] uppercase font-bold">
                  Brushed Bronze
                </span>
              </div>
              <p className="font-mono text-[#c5c6c7] text-xs">16" &amp; 17" Deep Concave Spec</p>
            </div>
          </div>

          <div className="group relative bg-[#12141A] border border-[#c5c6c7]/15 rounded-lg overflow-hidden flex flex-col">
            <div className="relative h-64 bg-[#0d0e12] flex items-center justify-center p-6 overflow-hidden">
              <img
                alt="RF-09 Crimson Aero"
                className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3GP8NKgK92AVQIRKBEaoOsu5-M2Zeoq9g8ayEhdOZU746qq2JLV54hvQYiJQ2LyjY15x6BdgDkjmg8GFpGZ3KHjs3yGdN7ze9mMzy8WxxGqfZFZMeWJVaUohTKTB6NyVnLYVogB8gSnx3G_O4HKfmcgQ166NzyG_tkdZFa8sKdpQQxX81pk1QmAM6CRIRpLlRv8wvag4Zx8RKv1LjFb9PPROfndE19UdMyXhNyQDECGMOd-9qEwBgd1KjsGrvbILg8pE"
              />
              <div className="absolute top-3 left-3 bg-[#292a2e]/90 backdrop-blur px-2.5 py-1 rounded border border-[#c5c6c7]/20">
                <span className="font-['Montserrat'] text-[9px] text-white uppercase font-bold">
                  Performance Sportback
                </span>
              </div>
            </div>
            <div className="p-5 border-t border-[#c5c6c7]/15 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font-['Montserrat'] text-xs font-bold text-[#e3e2e8] uppercase">
                  RF-09 Crimson Aero
                </span>
                <span className="font-['Montserrat'] text-[#e62020] text-[11px] uppercase font-bold">
                  Crimson Red Anodized
                </span>
              </div>
              <p className="font-mono text-[#c5c6c7] text-xs">16" &amp; 17" Carbon Turbofan Spec</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
