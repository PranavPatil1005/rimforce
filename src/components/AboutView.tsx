import React from 'react';
import { INDIAN_ATELIERS } from '../data/wheels';
import { NavTab } from '../types';

interface AboutViewProps {
  onSelectTab: (tab: NavTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onSelectTab }) => {
  const centralBranch = INDIAN_ATELIERS[0];

  return (
    <div className="flex-1 w-full bg-tech-grid relative text-[#e3e2e8]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16 relative z-10">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#e62020]"></span>
            <span className="font-['Montserrat'] text-[11px] font-bold tracking-widest text-[#e62020] uppercase">
              ABOUT RIMFORCE DYNAMICS
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-[#292a2e] text-[#c5c6c7] border border-[#c5c6c7]/20 font-mono">
              MADE IN INDIA // FORGED AEROSPACE 6061-T6
            </span>
          </div>

          <h1 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#e3e2e8] tracking-tight mb-4">
            Forged Precision Engineered for Extreme Performance
          </h1>
          <p className="font-['Inter'] text-sm sm:text-base text-[#c5c6c7] max-w-3xl leading-relaxed">
            RIMFORCE is an ultra-high performance forged alloy wheel brand dedicated to motorsport-level unsprung weight reduction, unmatched structural integrity, and bespoke stance aesthetics. Headquartered in Talegaon, Pune, Maharashtra, we manufacture custom forged monoblock wheels for enthusiasts, track day drivers, and performance automobile connoisseurs across India.
          </p>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#12141A] border border-[#c5c6c7]/15 p-6 rounded-xl space-y-3">
            <div className="w-12 h-12 rounded bg-[#1a1b20] border border-[#e62020]/40 flex items-center justify-center text-[#e62020]">
              <span className="material-symbols-outlined text-2xl">compress</span>
            </div>
            <h3 className="font-['Montserrat'] text-lg font-bold uppercase text-white">
              10,000-Ton Forging Force
            </h3>
            <p className="font-['Inter'] text-xs text-[#c5c6c7] leading-relaxed">
              Unlike ordinary cast or gravity wheels, RIMFORCE wheels originate as solid cylindrical billets of 6061-T6 aerospace aluminum subjected to 10,000 metric tons of hydraulic pressure, aligning continuous metal grain along each spoke.
            </p>
          </div>

          <div className="bg-[#12141A] border border-[#c5c6c7]/15 p-6 rounded-xl space-y-3">
            <div className="w-12 h-12 rounded bg-[#1a1b20] border border-[#e62020]/40 flex items-center justify-center text-[#e62020]">
              <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
            </div>
            <h3 className="font-['Montserrat'] text-lg font-bold uppercase text-white">
              5-Axis High-Speed CNC Milling
            </h3>
            <p className="font-['Inter'] text-xs text-[#c5c6c7] leading-relaxed">
              Each wheel blank undergoes up to 14 hours of continuous multi-axis robotic milling in our Talegaon, Pune CNC lab, machining back-pocket weight cutouts down to ±0.02 mm tolerances without compromising structural stiffness.
            </p>
          </div>

          <div className="bg-[#12141A] border border-[#c5c6c7]/15 p-6 rounded-xl space-y-3">
            <div className="w-12 h-12 rounded bg-[#1a1b20] border border-[#e62020]/40 flex items-center justify-center text-[#e62020]">
              <span className="material-symbols-outlined text-2xl">verified</span>
            </div>
            <h3 className="font-['Montserrat'] text-lg font-bold uppercase text-white">
              ISO 9001 &amp; ARAI Compliance
            </h3>
            <p className="font-['Inter'] text-xs text-[#c5c6c7] leading-relaxed">
              Every production batch is tested for dynamic radial fatigue, 13-degree kerb impact resistance, and high-speed lateral stress, complying with rigorous Indian and international automotive homologation standards.
            </p>
          </div>
        </div>

        {/* Manufacturing & Laboratory Overview */}
        <div className="bg-[#12141A] border border-[#c5c6c7]/15 rounded-xl p-8 lg:p-10 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="font-['Montserrat'] text-[10px] font-bold text-[#e62020] uppercase tracking-wider block">
                PUNE ADVANCED ENGINEERING LAB
              </span>
              <h2 className="font-['Montserrat'] text-2xl sm:text-3xl font-bold uppercase text-white">
                Precision Wheel Architecture Crafted in Maharashtra
              </h2>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#c5c6c7] leading-relaxed">
                Our advanced manufacturing center in Talegaon, Pune combines automated 5-axis spindles, ultrasonic deburring baths, computerized T6 heat treatment chambers, and multi-stage cleanroom powder-coating lines.
              </p>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#c5c6c7] leading-relaxed">
                By maintaining end-to-end design, FEA stress modeling, and production within Talegaon, Pune, Maharashtra, we provide tailored wheel offsets and custom bolt patterns with prompt delivery timelines nationwide.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onSelectTab('products')}
                  className="px-6 py-3 bg-[#e62020] hover:bg-[#ff2a2a] text-white font-['Montserrat'] text-xs font-bold uppercase tracking-wider rounded crimson-glow transition-all active:scale-95 cursor-pointer"
                >
                  Explore Wheel Products
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#0d0e12] border border-[#c5c6c7]/15 p-6 rounded-lg space-y-4">
              <h4 className="font-['Montserrat'] text-sm font-bold uppercase text-white border-b border-[#c5c6c7]/15 pb-2">
                Material &amp; Mechanical Tolerances
              </h4>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between text-[#c5c6c7]">
                  <span>Alloy Material:</span>
                  <span className="text-white font-bold">Aerospace 6061-T6 Aluminum</span>
                </div>
                <div className="flex justify-between text-[#c5c6c7]">
                  <span>Tensile Yield Strength:</span>
                  <span className="text-emerald-400 font-bold">276 MPa (40,000 psi)</span>
                </div>
                <div className="flex justify-between text-[#c5c6c7]">
                  <span>Ultimate Tensile Strength:</span>
                  <span className="text-white font-bold">310 MPa (45,000 psi)</span>
                </div>
                <div className="flex justify-between text-[#c5c6c7]">
                  <span>Biaxial Fatigue Life:</span>
                  <span className="text-white font-bold">2,000,000 Dynamic Cycles</span>
                </div>
                <div className="flex justify-between text-[#c5c6c7]">
                  <span>CNC Machining Tolerance:</span>
                  <span className="text-emerald-400 font-bold">± 0.02 mm</span>
                </div>
                <div className="flex justify-between text-[#c5c6c7]">
                  <span>Nationwide Logistics:</span>
                  <span className="text-white font-bold">Insured Express Flight Pallets</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indian Headquarters & Single Branch */}
        <div>
          <div className="mb-8">
            <span className="font-['Montserrat'] text-[11px] font-bold text-[#e62020] uppercase tracking-widest block mb-1">
              CENTRAL FACILITY
            </span>
            <h2 className="font-['Montserrat'] text-2xl lg:text-3xl font-bold uppercase text-white">
              Headquarters &amp; CNC Engineering Center
            </h2>
          </div>

          <div className="bg-[#12141A] border border-[#c5c6c7]/15 p-8 rounded-xl space-y-4 hover:border-[#e62020]/60 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="px-2.5 py-1 rounded bg-[#1a1b20] text-[#e62020] border border-[#e62020]/30 text-[10px] font-['Montserrat'] font-bold uppercase">
                {centralBranch.typeBadge}
              </span>
              <span className="text-xs font-mono text-[#c5c6c7]">{centralBranch.timezone}</span>
            </div>

            <h3 className="font-['Montserrat'] text-xl sm:text-2xl font-bold uppercase text-white">
              {centralBranch.name}
            </h3>
            <p className="font-['Inter'] text-sm text-[#c5c6c7] leading-relaxed max-w-2xl">
              {centralBranch.address}
            </p>

            <div className="pt-3 border-t border-[#c5c6c7]/15 text-xs font-mono grid grid-cols-1 sm:grid-cols-3 gap-3 text-[#c5c6c7]">
              <div>
                <span className="text-[#c5c6c7]/70 block text-[10px] uppercase">Phone:</span>
                <span className="text-white font-semibold">{centralBranch.phone}</span>
              </div>
              <div>
                <span className="text-[#c5c6c7]/70 block text-[10px] uppercase">Hours:</span>
                <span className="text-white">{centralBranch.hours}</span>
              </div>
              <div>
                <span className="text-[#c5c6c7]/70 block text-[10px] uppercase">Facility:</span>
                <span className="text-emerald-400 font-semibold">10,000T Forging &amp; 5-Axis CNC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
