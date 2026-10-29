import React, { useState } from 'react';
import { INDIAN_ATELIERS } from '../data/wheels';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    topic: 'fitment',
    fullName: '',
    email: '',
    phoneNumber: '',
    city: '',
    vehicleModel: '',
    message: '',
  });

  const [submittedTicket, setSubmittedTicket] = useState<{
    ticketId: string;
    topic: string;
    timestamp: string;
  } | null>(null);

  const [calculatingBrake, setCalculatingBrake] = useState(false);
  const [brakeCalculationResult, setBrakeCalculationResult] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [id === 'inquiry_topic'
        ? 'topic'
        : id === 'full_name'
        ? 'fullName'
        : id === 'email_address'
        ? 'email'
        : id === 'phone_number'
        ? 'phoneNumber'
        : id === 'city_region'
        ? 'city'
        : id === 'vehicle_details'
        ? 'vehicleModel'
        : id]: value,
    }));
  };

  const handleCalculateBrake = () => {
    setCalculatingBrake(true);
    setBrakeCalculationResult(null);

    setTimeout(() => {
      setCalculatingBrake(false);
      const vehicle = formData.vehicleModel.trim();
      if (!vehicle) {
        setBrakeCalculationResult(
          'Standard template loaded. Minimum offset: ET38 (Deep Concavity back-spacing approved for 14"–17").'
        );
      } else {
        setBrakeCalculationResult(
          `Caliper clearance analysis for "${vehicle}": Barrel radial clearance is +16.2mm. Spoke clearance meets ARAI/BIS minimum safety standard.`
        );
      }
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketNum = Math.floor(1000 + Math.random() * 9000);
    setSubmittedTicket({
      ticketId: `RF-PUN-2026-${ticketNum}`,
      topic: formData.topic,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
  };

  // Single official branch in Talegaon, Pune, Maharashtra
  const centralBranch = INDIAN_ATELIERS[0];

  return (
    <div className="flex-1 w-full bg-tech-grid relative text-[#e3e2e8]">
      {/* Red Ambient Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[340px] bg-[#e62020]/5 blur-[120px] rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16 relative z-10">
        {/* HERO SECTION */}
        <section className="mb-14 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#e62020]"></span>
            <span className="font-['Montserrat'] text-[11px] font-bold tracking-widest text-[#e62020] uppercase">
              CONNECT WITH RIMFORCE INDIA
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-[#292a2e] text-[#c5c6c7] border border-[#c5c6c7]/20 font-mono">
              DIRECT CNC &amp; SPEC SUPPORT
            </span>
          </div>

          <h1 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-[48px] lg:leading-[56px] text-[#e3e2e8] uppercase max-w-4xl tracking-tight mb-5 font-bold">
            Get in Touch With Our Wheel Specialists &amp; Headquarters
          </h1>

          <p className="font-['Inter'] text-base lg:text-lg text-[#c5c6c7] max-w-3xl leading-relaxed mb-8">
            Have questions about standard fitment, custom offsets, order dispatch, or dealership distribution? Our technical advisors and customer relations team at our Talegaon, Pune headquarters are here to assist.
          </p>

          {/* Quick Contact Pills - Single Branch (Talegaon, Pune, Maharashtra) */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              className="flex items-center gap-2.5 px-4 py-2.5 bg-[#1a1b20] border border-[#c5c6c7]/20 hover:border-[#e62020] text-[#e3e2e8] hover:text-[#e62020] transition-all group rounded-lg"
              href="tel:+919588435668"
            >
              <span className="material-symbols-outlined text-[18px] text-[#e62020]">call</span>
              <div className="flex flex-col text-left">
                <span className="font-['Montserrat'] text-[11px] font-bold text-[#c5c6c7] uppercase">
                  Pune HQ &amp; Lab
                </span>
                <span className="font-mono text-sm font-semibold text-[#e3e2e8] group-hover:text-[#e62020]">
                  +91 95884 35668
                </span>
              </div>
            </a>

            <a
              className="flex items-center gap-2.5 px-4 py-2.5 bg-[#1a1b20] border border-[#c5c6c7]/20 hover:border-[#e62020] text-[#e3e2e8] hover:text-[#e62020] transition-all group rounded-lg"
              href="mailto:rohandpatil420@gmail.com"
            >
              <span className="material-symbols-outlined text-[18px] text-[#e62020]">mail</span>
              <div className="flex flex-col text-left">
                <span className="font-['Montserrat'] text-[11px] font-bold text-[#c5c6c7] uppercase">
                  Technical Support
                </span>
                <span className="font-mono text-sm font-semibold text-[#e3e2e8] group-hover:text-[#e62020]">
                  rohandpatil420@gmail.com
                </span>
              </div>
            </a>

            <div className="flex items-center gap-2 px-3 py-2 bg-[#1f1f24] border border-[#c5c6c7]/15 rounded-lg text-[#c5c6c7] text-xs font-mono sm:ml-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-['Montserrat'] text-[11px] font-bold uppercase">
                Talegaon, Pune Desk: Online (IST)
              </span>
            </div>
          </div>
        </section>

        {/* TWO COLUMNS GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#1a1b20] border border-[#c5c6c7]/15 p-8 lg:p-10 rounded-xl relative shadow-2xl">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#e62020]"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#c5c6c7]/40"></div>

            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#c5c6c7]/15">
              <div>
                <span className="font-['Montserrat'] text-[11px] font-bold text-[#e62020] uppercase tracking-wider block mb-1">
                  INQUIRY DISPATCH
                </span>
                <h2 className="font-['Montserrat'] text-2xl font-bold uppercase text-[#e3e2e8]">
                  Direct Technical Message
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-[#1f1f24] border border-[#c5c6c7]/15 text-[#c5c6c7] text-[11px] font-['Montserrat'] font-bold uppercase">
                <span className="material-symbols-outlined text-[#e62020] text-[16px]">verified</span>
                <span>CNC Engineering Team</span>
              </div>
            </div>

            {submittedTicket ? (
              <div className="bg-[#121317] border border-[#e62020]/40 p-6 rounded-lg space-y-4 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e62020]/20 border border-[#e62020] flex items-center justify-center text-[#e62020]">
                    <span className="material-symbols-outlined text-[24px]">check</span>
                  </div>
                  <div>
                    <span className="font-['Montserrat'] text-[11px] font-bold text-[#e62020] uppercase">
                      MESSAGE DISPATCHED
                    </span>
                    <h3 className="font-['Montserrat'] text-lg font-bold text-white uppercase">
                      Inquiry Registered
                    </h3>
                  </div>
                </div>

                <div className="p-4 bg-[#1a1b20] rounded border border-[#c5c6c7]/15 text-xs font-mono space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#c5c6c7]">Ticket Reference ID:</span>
                    <span className="text-[#e62020] font-bold">{submittedTicket.ticketId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#c5c6c7]">Assigned Facility:</span>
                    <span className="text-white">Talegaon, Pune Central CNC Hub</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#c5c6c7]">Timestamp:</span>
                    <span className="text-white">{submittedTicket.timestamp} IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#c5c6c7]">Response SLA:</span>
                    <span className="text-emerald-400 font-bold">&lt; 24 Hours Guaranteed</span>
                  </div>
                </div>

                <button
                  onClick={() => setSubmittedTicket(null)}
                  className="px-5 py-2.5 bg-[#e62020] text-white text-xs font-['Montserrat'] font-bold uppercase rounded cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className="block font-['Montserrat'] text-[11px] font-bold uppercase text-[#c5c6c7] tracking-wider mb-2"
                    htmlFor="inquiry_topic"
                  >
                    Inquiry Topic <span className="text-[#e62020]">*</span>
                  </label>
                  <select
                    className="w-full h-12 bg-[#1f1f24] border border-[#c5c6c7]/25 text-[#e3e2e8] px-4 py-2 text-sm focus:border-[#e62020] focus:outline-none rounded-lg cursor-pointer"
                    id="inquiry_topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                  >
                    <option value="fitment">Wheel Dimensions &amp; Bolt Patterns (14"–17")</option>
                    <option value="order_status">Order Status &amp; Production Dispatch</option>
                    <option value="dealership">Dealership &amp; Workshop Partner</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block font-['Montserrat'] text-[11px] font-bold uppercase text-[#c5c6c7] tracking-wider mb-2"
                      htmlFor="full_name"
                    >
                      Full Name <span className="text-[#e62020]">*</span>
                    </label>
                    <input
                      className="w-full h-12 bg-[#1f1f24] border border-[#c5c6c7]/25 text-[#e3e2e8] px-4 text-sm focus:border-[#e62020] focus:outline-none rounded-lg"
                      id="full_name"
                      placeholder="e.g. Rahul Sharma"
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-['Montserrat'] text-[11px] font-bold uppercase text-[#c5c6c7] tracking-wider mb-2"
                      htmlFor="email_address"
                    >
                      Email Address <span className="text-[#e62020]">*</span>
                    </label>
                    <input
                      className="w-full h-12 bg-[#1f1f24] border border-[#c5c6c7]/25 text-[#e3e2e8] px-4 text-sm focus:border-[#e62020] focus:outline-none rounded-lg"
                      id="email_address"
                      placeholder="name@domain.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block font-['Montserrat'] text-[11px] font-bold uppercase text-[#c5c6c7] tracking-wider mb-2"
                      htmlFor="phone_number"
                    >
                      Phone Number <span className="text-[#e62020]">*</span>
                    </label>
                    <input
                      className="w-full h-12 bg-[#1f1f24] border border-[#c5c6c7]/25 text-[#e3e2e8] px-4 text-sm focus:border-[#e62020] focus:outline-none rounded-lg"
                      id="phone_number"
                      placeholder="+91 98765 43210"
                      required
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-['Montserrat'] text-[11px] font-bold uppercase text-[#c5c6c7] tracking-wider mb-2"
                      htmlFor="city_region"
                    >
                      City / State <span className="text-[#e62020]">*</span>
                    </label>
                    <input
                      className="w-full h-12 bg-[#1f1f24] border border-[#c5c6c7]/25 text-[#e3e2e8] px-4 text-sm focus:border-[#e62020] focus:outline-none rounded-lg"
                      id="city_region"
                      placeholder="Pune, Mumbai, Nagpur, Bengaluru, Delhi..."
                      required
                      type="text"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      className="block font-['Montserrat'] text-[11px] font-bold uppercase text-[#c5c6c7] tracking-wider"
                      htmlFor="vehicle_details"
                    >
                      Vehicle Platform (Optional)
                    </label>
                    <button
                      type="button"
                      onClick={handleCalculateBrake}
                      className="font-['Montserrat'] text-[11px] font-bold text-[#e62020] uppercase bg-transparent border-0 cursor-pointer flex items-center gap-1 hover:underline"
                    >
                      <span className="material-symbols-outlined text-[14px]">speed</span>
                      <span>{calculatingBrake ? 'Checking...' : 'Brake Clearance Check'}</span>
                    </button>
                  </div>
                  <input
                    className="w-full h-12 bg-[#1f1f24] border border-[#c5c6c7]/25 text-[#e3e2e8] px-4 text-sm focus:border-[#e62020] focus:outline-none rounded-lg"
                    id="vehicle_details"
                    placeholder="e.g. Performance Hatchback / Track Saloon"
                    type="text"
                    value={formData.vehicleModel}
                    onChange={handleInputChange}
                  />

                  {brakeCalculationResult && (
                    <div className="mt-2.5 p-3 bg-[#121317] border border-[#e62020]/30 rounded text-xs text-[#c5c6c7] flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#e62020] text-[18px] shrink-0 mt-0.5">
                        calculate
                      </span>
                      <span>{brakeCalculationResult}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label
                    className="block font-['Montserrat'] text-[11px] font-bold uppercase text-[#c5c6c7] tracking-wider mb-2"
                    htmlFor="message"
                  >
                    Message &amp; Custom Specifications <span className="text-[#e62020]">*</span>
                  </label>
                  <textarea
                    className="w-full bg-[#1f1f24] border border-[#c5c6c7]/25 text-[#e3e2e8] p-4 text-sm focus:border-[#e62020] focus:outline-none rounded-lg resize-y"
                    id="message"
                    placeholder="Specify your preferred wheel diameter (14&quot;, 15&quot;, 16&quot;, or 17&quot;), width, bolt pattern, or delivery requirements..."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-5 justify-between">
                  <button
                    className="w-full sm:w-auto px-9 py-3.5 bg-[#e62020] hover:bg-[#FF2A2A] text-white font-['Montserrat'] text-sm font-bold uppercase rounded tracking-wider crimson-glow transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    type="submit"
                  >
                    <span>Send Message</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>

                  <div className="flex items-center gap-2 text-[#c5c6c7] text-xs font-['Inter']">
                    <span className="material-symbols-outlined text-[#e62020] text-[18px]">history</span>
                    <span>Guaranteed response within 24 hours</span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Support Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#1a1b20] border border-[#c5c6c7]/15 p-6 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#1f1f24] border border-[#c5c6c7]/20 rounded-lg text-[#e62020]">
                  <span className="material-symbols-outlined text-[24px]">terminal</span>
                </div>
                <span className="px-2.5 py-1 bg-[#292a2e] rounded text-xs font-mono font-semibold text-[#c5c6c7] border border-[#c5c6c7]/20">
                  ACTIVE CNC QUEUE
                </span>
              </div>
              <h3 className="font-['Montserrat'] text-lg font-semibold uppercase text-[#e3e2e8] mb-1">
                Customer Care &amp; Order Tracking
              </h3>
              <p className="font-['Inter'] text-xs text-[#c5c6c7] mb-4">
                Track your active CNC milling status, heat treatment, and multi-stage powder coat curing directly with our Talegaon, Pune dispatch desk.
              </p>
              <div className="space-y-2 py-3 border-t border-b border-[#c5c6c7]/15 text-xs font-mono mb-4">
                <div className="flex justify-between text-[#c5c6c7]">
                  <span>Operating Hours:</span>
                  <span className="text-[#e3e2e8] font-bold">Mon–Sat 09:00 – 19:30 IST</span>
                </div>
                <div className="flex justify-between text-[#c5c6c7]">
                  <span>Direct Dispatch:</span>
                  <a className="text-[#e62020] hover:underline" href="mailto:rohandpatil420@gmail.com">
                    rohandpatil420@gmail.com
                  </a>
                </div>
              </div>
              <a
                className="inline-flex items-center gap-2 text-[#e3e2e8] hover:text-[#e62020] font-['Montserrat'] text-[11px] font-bold uppercase tracking-wider transition-colors"
                href="https://wa.me/919588435668"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-emerald-400 text-[18px]">chat</span>
                <span>Open WhatsApp Concierge Link</span>
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
            </div>

            <div className="bg-[#1a1b20] border border-[#c5c6c7]/15 p-6 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#1f1f24] border border-[#c5c6c7]/20 rounded-lg text-[#e62020]">
                  <span className="material-symbols-outlined text-[24px]">hub</span>
                </div>
                <span className="px-2.5 py-1 bg-[#292a2e] rounded text-xs font-['Montserrat'] font-bold text-[#c5c6c7] uppercase border border-[#c5c6c7]/20">
                  WORKSHOPS
                </span>
              </div>
              <h3 className="font-['Montserrat'] text-lg font-semibold uppercase text-[#e3e2e8] mb-1">
                Authorized Dealer &amp; Installer Network
              </h3>
              <p className="font-['Inter'] text-xs text-[#c5c6c7] mb-4">
                Are you a performance workshop or tuning studio in India? Apply for wholesale allocations, dealer offsets, and priority batch milling.
              </p>
              <a
                href="mailto:rohandpatil420@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1f1f24] border border-[#c5c6c7]/25 hover:border-[#e62020] text-[#e3e2e8] text-[11px] font-['Montserrat'] font-bold uppercase tracking-wider transition-colors rounded"
              >
                <span>Inquire for Partner Tier</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </a>
            </div>
          </div>
        </section>

        {/* SINGLE CENTRAL BRANCH: TALEGAON, PUNE, MAHARASHTRA */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#c5c6c7]/15">
            <div>
              <span className="font-['Montserrat'] text-[11px] font-bold text-[#e62020] uppercase tracking-widest block mb-1">
                PRIMARY BRANCH LOCATION
              </span>
              <h2 className="font-['Montserrat'] text-2xl lg:text-3xl font-bold uppercase text-[#e3e2e8]">
                Central Headquarters &amp; Engineering Center
              </h2>
            </div>
            <span className="font-['Inter'] text-xs text-[#c5c6c7] mt-2 sm:mt-0">
              Personal consultations available by reservation with our chief wheel architects.
            </span>
          </div>

          {/* Single Branch Card */}
          <div className="bg-[#1a1b20] border border-[#e62020]/40 p-8 lg:p-10 rounded-xl relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#e62020]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#1f1f24] text-[#e62020] border border-[#e62020]/30 text-[11px] font-['Montserrat'] font-bold uppercase">
                    {centralBranch.typeBadge}
                  </span>
                  <span className="text-xs font-mono text-[#c5c6c7] bg-[#121317] px-2.5 py-0.5 rounded border border-[#c5c6c7]/10">
                    {centralBranch.timezone}
                  </span>
                </div>

                <h3 className="font-['Montserrat'] text-2xl sm:text-3xl font-bold uppercase text-white">
                  {centralBranch.name}
                </h3>

                <p className="font-['Inter'] text-sm text-[#c5c6c7] leading-relaxed max-w-2xl">
                  {centralBranch.address}
                </p>

                <p className="font-['Inter'] text-xs text-[#e62020] font-semibold">
                  Key Capabilities: {centralBranch.specialty}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#c5c6c7]/15 font-mono text-xs text-[#c5c6c7]">
                  <div>
                    <span className="text-[#c5c6c7]/70 block text-[10px] uppercase">Telephone Hotline</span>
                    <span className="text-white font-bold text-sm">+91 9588435668</span>
                  </div>
                  <div>
                    <span className="text-[#c5c6c7]/70 block text-[10px] uppercase">Hours of Operation</span>
                    <span className="text-white text-sm">{centralBranch.hours}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href={`tel:${centralBranch.phone.replace(/\s+/g, '')}`}
                  className="w-full py-3.5 bg-[#e62020] hover:bg-[#ff2a2a] text-white text-center font-['Montserrat'] text-xs font-bold uppercase tracking-wider rounded crimson-glow transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span className="material-symbols-outlined text-lg">call</span>
                  <span>Call Headquarters</span>
                </a>

                <a
                  href="https://wa.me/919588435668"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#1f1f24] border border-[#c5c6c7]/25 hover:border-[#e62020] hover:bg-[#292a2e] text-[#e3e2e8] text-center font-['Montserrat'] text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-emerald-400 text-lg">chat</span>
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RAPID FAQ STRIP */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[2px] bg-[#e62020]"></span>
            <span className="font-['Montserrat'] text-[11px] font-bold text-[#c5c6c7] uppercase tracking-widest">
              RAPID LOGISTICS &amp; FITMENT FAQ
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0d0e12] border border-[#c5c6c7]/15 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#e62020] text-[22px]">flight_takeoff</span>
                <h4 className="font-['Montserrat'] text-sm uppercase text-[#e3e2e8] font-bold">
                  Where is my order shipped from?
                </h4>
              </div>
              <p className="font-['Inter'] text-xs text-[#c5c6c7] leading-relaxed">
                All forged monoblock wheel sets are engineered and precision-packaged directly out of our automated Talegaon, Pune CNC and laser inspection facility in Maharashtra, with insured express air freight.
              </p>
            </div>

            <div className="bg-[#0d0e12] border border-[#c5c6c7]/15 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#e62020] text-[22px]">local_shipping</span>
                <h4 className="font-['Montserrat'] text-sm uppercase text-[#e3e2e8] font-bold">
                  Do you deliver across India?
                </h4>
              </div>
              <p className="font-['Inter'] text-xs text-[#c5c6c7] leading-relaxed">
                Yes. We deliver across all Indian tier-1 and tier-2 states with secure climate-regulated freight pallets and guaranteed transit insurance via BlueDart Apex and DHL Express India.
              </p>
            </div>

            <div className="bg-[#0d0e12] border border-[#c5c6c7]/15 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#e62020] text-[22px]">meeting_room</span>
                <h4 className="font-['Montserrat'] text-sm uppercase text-[#e3e2e8] font-bold">
                  Can I visit the branch in person?
                </h4>
              </div>
              <p className="font-['Inter'] text-xs text-[#c5c6c7] leading-relaxed">
                Our central engineering facility in Talegaon, Pune, Maharashtra accepts private appointments for vehicle laser measurements, custom wheel finish inspection, and personalized stance consultation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
