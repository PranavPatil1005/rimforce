import React from 'react';
import { NavTab } from '../types';
import { BRAND_LOGO_IMAGE } from '../data/wheels';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-[#0d0e12] border-t border-[#5d3f3b]/20 relative bottom-0 text-[#e3e2e8]">
      <div className="w-full px-6 lg:px-12 py-12 max-w-[1440px] mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-[#c5c6c7]/10">
          {/* Col 1: Brand & Logo */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-12 rounded overflow-hidden flex items-center justify-center bg-[#1a1b20] border border-[#ae8883]/30">
                <img
                  src={BRAND_LOGO_IMAGE}
                  alt="RIMFORCE Forged Wheels Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-['Montserrat'] text-xl font-extrabold uppercase tracking-tight text-[#e3e2e8]">
                RIMFORCE
              </span>
            </div>
            <p className="font-['Inter'] text-xs text-[#c5c6c7] max-w-sm leading-relaxed">
              Ultra-performance forged alloy wheels crafted from aerospace-grade 6061-T6 aluminum. Precision-milled in Talegaon, Pune, engineered for high-performance track and road platforms across India.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-['Montserrat'] uppercase text-[#e3e2e8] text-xs font-bold tracking-wider">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 font-['Montserrat'] text-xs font-bold uppercase tracking-wider">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="text-[#c5c6c7] hover:text-[#e62020] transition-colors cursor-pointer text-left bg-transparent border-0 p-0"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('products')}
                  className="text-[#c5c6c7] hover:text-[#e62020] transition-colors cursor-pointer text-left bg-transparent border-0 p-0"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('about')}
                  className="text-[#c5c6c7] hover:text-[#e62020] transition-colors cursor-pointer text-left bg-transparent border-0 p-0"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="text-[#c5c6c7] hover:text-[#e62020] transition-colors cursor-pointer text-left bg-transparent border-0 p-0"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Central Facility & Direct Contacts */}
          <div className="flex flex-col gap-3">
            <h4 className="font-['Montserrat'] uppercase text-[#e3e2e8] text-xs font-bold tracking-wider">
              Central Branch &amp; HQ
            </h4>
            <div className="space-y-2 text-xs font-['Inter'] text-[#c5c6c7]">
              <div>
                <strong className="text-white block font-['Montserrat'] uppercase text-[11px]">
                  Central Engineering Facility &amp; HQ
                </strong>
                <span>Plot 42, MIDC Industrial Area, Talegaon Dabhade, Pune, Maharashtra 410507</span>
              </div>
              <div className="pt-1 flex flex-col gap-1 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#e62020] text-sm">call</span>
                  <a href="tel:+919588435668" className="text-white font-semibold hover:text-[#e62020] transition-colors">
                    +91 95884 35668
                  </a>
                </div>
                <div className="text-[11px] text-[#c5c6c7]/70 pl-6 flex flex-wrap gap-x-1.5">
                  <a href="tel:+919975177822" className="hover:text-white">9975177822</a>
                  <span>•</span>
                  <a href="tel:+917447338321" className="hover:text-white">7447338321</a>
                  <span>•</span>
                  <a href="tel:+919579297452" className="hover:text-white">9579297452</a>
                </div>
                <div className="flex items-center gap-2 pt-0.5">
                  <span className="material-symbols-outlined text-[#e62020] text-sm">mail</span>
                  <a href="mailto:rohandpatil420@gmail.com" className="text-[#e3e2e8] hover:text-[#e62020] transition-colors truncate">
                    rohandpatil420@gmail.com
                  </a>
                </div>
                <div className="text-[10px] text-[#c5c6c7]/60 pl-6 flex flex-col gap-0.5">
                  <a href="mailto:onkarpacharane123@gmail.com" className="hover:text-white truncate">onkarpacharane123@gmail.com</a>
                  <a href="mailto:jayjadhav3007@gmail.com" className="hover:text-white truncate">jayjadhav3007@gmail.com</a>
                  <a href="mailto:yashrajgorhe07@gmail.com" className="hover:text-white truncate">yashrajgorhe07@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Quality Certification */}
          <div className="flex flex-col gap-3">
            <h4 className="font-['Montserrat'] uppercase text-[#e3e2e8] text-xs font-bold tracking-wider">
              Quality &amp; Standards
            </h4>
            <div className="flex flex-col gap-2 text-xs font-['Inter'] text-[#c5c6c7]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#e62020] text-sm">verified</span>
                <span>ISO 9001:2015 Certified Lab</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#e62020] text-sm">verified</span>
                <span>ARAI &amp; Road Stress Validated</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#e62020] text-sm">shield</span>
                <span>Lifetime Structural Warranty</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['Montserrat'] text-[11px] text-[#c5c6c7] uppercase tracking-widest text-center md:text-left font-bold">
            © 2025 RIMFORCE ALLOY WHEELS. PRECISION CNC ENGINEERING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-[#c5c6c7]">
              DESIGNED, MILLED &amp; FORGED IN TALEGAON, PUNE, MAHARASHTRA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
