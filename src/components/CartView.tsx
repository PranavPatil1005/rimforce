import React, { useState } from 'react';
import { CartItem, NavTab, OrderFormData, PlacedOrder } from '../types';
import { OrderCheckoutForm } from './OrderCheckoutForm';
import { ConfirmationEmailModal } from './ConfirmationEmailModal';
import {
  generateOrderId,
  buildWhatsAppMessage,
  createWhatsAppUrl,
  WHATSAPP_TARGET_NUMBER,
} from '../utils/orderDispatch';

interface CartViewProps {
  items: CartItem[];
  onRemoveItem: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
  onSelectTab: (tab: NavTab) => void;
}

export const CartView: React.FC<CartViewProps> = ({
  items,
  onRemoveItem,
  onUpdateQuantity,
  onCheckout,
  onSelectTab,
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'form' | 'success'>('cart');
  const [placedOrder, setPlacedOrder] = useState<PlacedOrder | null>(null);
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);

  const totalAmount = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const totalWeightSaved = items.reduce(
    (sum, item) => sum + item.wheel.weightSavedPerCorner * 4 * item.quantity,
    0
  );

  const handleStartCheckout = () => {
    setCheckoutStep('form');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderSubmit = (formData: OrderFormData) => {
    const orderId = generateOrderId();
    const waMessage = buildWhatsAppMessage(
      orderId,
      formData,
      items,
      totalAmount,
      totalWeightSaved
    );
    const waUrl = createWhatsAppUrl(waMessage);

    const newOrder: PlacedOrder = {
      orderId,
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      customer: formData,
      items: [...items],
      totalAmount,
      totalWeightSaved,
      whatsappNumber: WHATSAPP_TARGET_NUMBER,
      whatsappUrl: waUrl,
      emailSubject: `Order Placed Successfully - RIMFORCE Order #${orderId}`,
      emailSent: true,
    };

    setPlacedOrder(newOrder);
    setCheckoutStep('success');
    onCheckout();

    // Trigger WhatsApp dispatch in a new window/tab
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // If browser blocks popup, the user has prominent "Open WhatsApp" button on screen
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex-1 w-full bg-tech-grid relative text-[#e3e2e8]">
      {/* Email Preview Modal */}
      {showEmailModal && placedOrder && (
        <ConfirmationEmailModal
          order={placedOrder}
          onClose={() => setShowEmailModal(false)}
        />
      )}

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16 relative z-10">
        {/* Progress Tracker when not empty */}
        {items.length > 0 && (
          <div className="max-w-xl mx-auto mb-10 flex items-center justify-between text-xs font-['Montserrat'] font-bold uppercase tracking-wider">
            <div
              className={`flex items-center gap-2 ${
                checkoutStep === 'cart' ? 'text-[#e62020]' : 'text-emerald-400'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                  checkoutStep === 'cart'
                    ? 'bg-[#e62020] text-white'
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500'
                }`}
              >
                1
              </span>
              <span>Cart Items</span>
            </div>

            <div className="w-12 h-[1px] bg-[#c5c6c7]/20"></div>

            <div
              className={`flex items-center gap-2 ${
                checkoutStep === 'form'
                  ? 'text-[#e62020]'
                  : checkoutStep === 'success'
                  ? 'text-emerald-400'
                  : 'text-[#c5c6c7]/50'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                  checkoutStep === 'form'
                    ? 'bg-[#e62020] text-white'
                    : checkoutStep === 'success'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500'
                    : 'bg-[#1a1b20] text-[#c5c6c7]/60 border border-[#c5c6c7]/20'
                }`}
              >
                2
              </span>
              <span>Details &amp; Shipping</span>
            </div>

            <div className="w-12 h-[1px] bg-[#c5c6c7]/20"></div>

            <div
              className={`flex items-center gap-2 ${
                checkoutStep === 'success' ? 'text-emerald-400' : 'text-[#c5c6c7]/50'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                  checkoutStep === 'success'
                    ? 'bg-emerald-500 text-black font-bold'
                    : 'bg-[#1a1b20] text-[#c5c6c7]/60 border border-[#c5c6c7]/20'
                }`}
              >
                3
              </span>
              <span>Confirmed</span>
            </div>
          </div>
        )}

        {/* STEP 2: ORDER DETAILS & SHIPPING FORM */}
        {checkoutStep === 'form' && (
          <OrderCheckoutForm
            items={items}
            totalAmount={totalAmount}
            totalWeightSaved={totalWeightSaved}
            onSubmitOrder={handleOrderSubmit}
            onCancel={() => setCheckoutStep('cart')}
          />
        )}

        {/* STEP 3: ORDER PLACED SUCCESSFULLY */}
        {checkoutStep === 'success' && placedOrder && (
          <div className="max-w-3xl mx-auto bg-[#12141A] border border-[#e62020] p-6 sm:p-10 rounded-2xl text-center space-y-8 shadow-2xl animate-fadeIn">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>

            <div className="space-y-2">
              <span className="font-['Montserrat'] text-xs font-bold text-[#e62020] uppercase tracking-widest block">
                COMMISSION REGISTERED
              </span>
              <h2 className="font-['Montserrat'] text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
                order placed succesfully
              </h2>
              <p className="font-['Inter'] text-sm text-[#c5c6c7] max-w-xl mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{placedOrder.customer.firstName} {placedOrder.customer.lastName}</strong>! Your order details have been received on WhatsApp (<strong className="text-white font-mono">+{WHATSAPP_TARGET_NUMBER}</strong>) and an official confirmation email has been dispatched to <strong className="text-emerald-400 font-mono">{placedOrder.customer.email}</strong>.
              </p>
            </div>

            {/* Status Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
              <div className="p-3.5 rounded-lg bg-[#1a1b20] border border-[#25D366]/30 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#25D366] text-2xl">chat</span>
                <div className="text-xs">
                  <span className="font-['Montserrat'] font-bold text-white uppercase block">
                    WhatsApp Received
                  </span>
                  <span className="text-[#c5c6c7] font-mono text-[11px]">+{WHATSAPP_TARGET_NUMBER}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#1a1b20] border border-emerald-500/30 flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-400 text-2xl">mark_email_read</span>
                <div className="text-xs">
                  <span className="font-['Montserrat'] font-bold text-white uppercase block">
                    Confirmation Email Sent
                  </span>
                  <span className="text-emerald-400 font-mono text-[11px] truncate block max-w-[180px]">
                    {placedOrder.customer.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={placedOrder.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-['Montserrat'] text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Open in WhatsApp (+91 {WHATSAPP_TARGET_NUMBER})</span>
              </a>

              <button
                type="button"
                onClick={() => setShowEmailModal(true)}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#1f1f24] hover:bg-[#292a2e] border border-[#c5c6c7]/30 text-white font-['Montserrat'] text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span className="material-symbols-outlined text-base">mail</span>
                <span>View Confirmation Email</span>
              </button>
            </div>

            {/* Order Specification Summary Card */}
            <div className="p-5 bg-[#1a1b20] rounded-xl border border-[#c5c6c7]/15 text-xs font-mono space-y-3 text-left">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-2 border-b border-[#c5c6c7]/15 gap-1">
                <div>
                  <span className="text-[#c5c6c7]">Order Reference:</span>{' '}
                  <span className="text-white font-bold">{placedOrder.orderId}</span>
                </div>
                <div>
                  <span className="text-[#c5c6c7]">Facility:</span>{' '}
                  <span className="text-white font-semibold">Talegaon, Pune CNC Lab</span>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2 border-b border-[#c5c6c7]/10">
                <div>
                  <span className="text-[#c5c6c7] text-[10px] uppercase font-bold block">Delivery Address:</span>
                  <p className="text-white font-['Inter'] text-xs mt-0.5">{placedOrder.customer.address}</p>
                  <p className="text-[#c5c6c7] text-[11px]">Pincode: {placedOrder.customer.pincode}</p>
                </div>
                <div>
                  <span className="text-[#c5c6c7] text-[10px] uppercase font-bold block">Contact Information:</span>
                  <p className="text-white text-xs mt-0.5">{placedOrder.customer.firstName} {placedOrder.customer.lastName}</p>
                  <p className="text-[#c5c6c7] text-[11px]">Phone: {placedOrder.customer.contactNumber}</p>
                </div>
              </div>

              {/* Allocated Items */}
              <div className="space-y-1.5 py-1">
                <span className="text-[#c5c6c7] text-[10px] uppercase font-bold block">Allocated Sets:</span>
                {placedOrder.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-xs">
                    <span className="text-white">
                      • {item.wheel.name} ({item.diameter} × {item.width}, {item.boltPattern}) × {item.quantity} Set(s)
                    </span>
                    <span className="text-[#c5c6c7]">₹{(item.unitPrice * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-[#c5c6c7]/15 flex justify-between items-center text-sm">
                <span className="text-white font-bold">Total Paid:</span>
                <span className="text-[#e62020] font-bold text-base">
                  ₹{placedOrder.totalAmount.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#1a1b20] hover:bg-[#292a2e] text-[#c5c6c7] hover:text-white border border-[#c5c6c7]/20 text-xs font-['Montserrat'] font-bold uppercase rounded cursor-pointer transition-colors flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">print</span>
                <span>Print Official Invoice</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setCheckoutStep('cart');
                  onSelectTab('products');
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#e62020] hover:bg-[#ff2a2a] text-white font-['Montserrat'] text-xs font-bold uppercase tracking-wider rounded crimson-glow transition-all cursor-pointer"
              >
                Commission Another Wheel Set
              </button>
            </div>
          </div>
        )}

        {/* STEP 1: CART ITEMS VIEW */}
        {checkoutStep === 'cart' && (
          <>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#c5c6c7]/15">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-[2px] bg-[#e62020]"></span>
                  <span className="font-['Montserrat'] text-[11px] font-bold tracking-widest text-[#e62020] uppercase">
                    ACTIVE BUILD ALLOCATION
                  </span>
                </div>
                <h1 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#e3e2e8] tracking-tight">
                  Shopping Cart ({items.length} {items.length === 1 ? 'Build' : 'Builds'})
                </h1>
              </div>

              <button
                onClick={() => onSelectTab('products')}
                className="text-xs font-['Montserrat'] font-bold text-[#e62020] hover:underline uppercase flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                <span>Continue Browsing Products</span>
              </button>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-20 bg-[#12141A] border border-[#c5c6c7]/15 rounded-xl space-y-5">
                <span className="material-symbols-outlined text-[#c5c6c7]/30 text-6xl">
                  shopping_bag
                </span>
                <div>
                  <h2 className="font-['Montserrat'] text-xl font-bold uppercase text-white">
                    Your Wheel Cart is Empty
                  </h2>
                  <p className="text-xs text-[#c5c6c7] mt-1 max-w-md mx-auto">
                    No forged wheel configurations currently selected. Explore our 14" to 17" aerospace monoblock series.
                  </p>
                </div>
                <button
                  onClick={() => onSelectTab('products')}
                  className="px-8 py-3.5 bg-[#e62020] hover:bg-[#ff2a2a] text-white font-['Montserrat'] text-xs font-bold uppercase tracking-wider rounded crimson-glow transition-all cursor-pointer"
                >
                  Explore Products
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 8 Columns: Items with Images */}
                <div className="lg:col-span-8 space-y-5">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#12141A] border border-[#c5c6c7]/15 p-5 sm:p-6 rounded-xl flex flex-col sm:flex-row gap-6 items-center hover:border-[#e62020]/40 transition-all shadow-xl"
                    >
                      {/* Prominent Product Image in Cart */}
                      <div className="w-36 h-36 sm:w-44 sm:h-44 bg-[#0d0e12] rounded-lg border border-[#c5c6c7]/10 flex items-center justify-center p-3 shrink-0 relative overflow-hidden group">
                        <img
                          src={item.wheel.image}
                          alt={item.wheel.name}
                          className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute bottom-1.5 left-1.5 bg-[#1a1b20]/90 backdrop-blur px-2 py-0.5 rounded text-[9px] font-mono text-white border border-[#c5c6c7]/20">
                          {item.wheel.weightKg} kg / corner
                        </span>
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 space-y-3 w-full">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] font-mono text-[#c5c6c7] uppercase block">
                              {item.wheel.code} // {item.wheel.category}
                            </span>
                            <h3 className="font-['Montserrat'] text-xl font-bold uppercase text-white">
                              {item.wheel.name}
                            </h3>
                            <span className="text-xs font-['Montserrat'] text-[#e62020] font-bold block mt-0.5">
                              Set of 4 Wheels &nbsp;|&nbsp; {item.diameter} Diameter
                            </span>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[#c5c6c7] hover:text-[#e62020] p-1.5 transition-colors cursor-pointer rounded hover:bg-[#1a1b20]"
                            title="Remove wheel set"
                          >
                            <span className="material-symbols-outlined text-xl">delete</span>
                          </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono bg-[#1a1b20] p-2.5 rounded border border-[#c5c6c7]/10">
                          <div>
                            <span className="text-[#c5c6c7]/70 block text-[9px] uppercase">Profile</span>
                            <span className="text-white font-bold">{item.diameter} × {item.width}</span>
                          </div>
                          <div>
                            <span className="text-[#c5c6c7]/70 block text-[9px] uppercase">Bolt Pattern</span>
                            <span className="text-white font-bold">{item.boltPattern}</span>
                          </div>
                          <div className="col-span-2 sm:col-span-1">
                            <span className="text-[#c5c6c7]/70 block text-[9px] uppercase">Mass Delta</span>
                            <span className="text-emerald-400 font-bold">
                              -{(item.wheel.weightSavedPerCorner * 4).toFixed(1)} kg saved
                            </span>
                          </div>
                        </div>

                        {/* Quantity & Set Price */}
                        <div className="flex justify-between items-center pt-2 border-t border-[#c5c6c7]/10">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-['Montserrat'] text-[#c5c6c7] uppercase font-bold">
                              Quantity:
                            </span>
                            <div className="flex items-center border border-[#c5c6c7]/20 rounded bg-[#1f1f24]">
                              <button
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="px-3 py-1 text-xs text-[#c5c6c7] hover:text-white cursor-pointer"
                              >
                                -
                              </button>
                              <span className="px-2.5 text-xs font-mono font-bold text-white">
                                {item.quantity} {item.quantity === 1 ? 'Set' : 'Sets'}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="px-3 py-1 text-xs text-[#c5c6c7] hover:text-white cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="font-mono text-lg font-bold text-white">
                              ₹{(item.unitPrice * item.quantity).toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Mass Reduction Callout */}
                  <div className="bg-[#12141A] border border-[#c5c6c7]/15 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#1a1b20] border border-[#e62020]/30 rounded text-[#e62020]">
                        <span className="material-symbols-outlined text-xl">speed</span>
                      </div>
                      <div>
                        <span className="font-['Montserrat'] text-xs font-bold uppercase text-white block">
                          Total Unsprung Mass Reduction
                        </span>
                        <span className="text-[11px] text-[#c5c6c7]">
                          Reduces rotational inertia across all 4 wheel corners
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-base font-bold text-emerald-400">
                      -{totalWeightSaved.toFixed(1)} KG NET
                    </span>
                  </div>
                </div>

                {/* Right 4 Columns: Order Summary Card */}
                <div className="lg:col-span-4 bg-[#12141A] border border-[#c5c6c7]/15 p-6 rounded-xl space-y-6 shadow-2xl sticky top-28">
                  <h2 className="font-['Montserrat'] text-lg font-bold uppercase text-white pb-3 border-b border-[#c5c6c7]/15">
                    Allocation Summary
                  </h2>

                  <div className="space-y-3 text-xs font-['Inter']">
                    <div className="flex justify-between text-[#c5c6c7]">
                      <span>Forged Wheel Sets ({items.length}):</span>
                      <span className="font-mono text-white font-bold">
                        ₹{totalAmount.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="flex justify-between text-[#c5c6c7]">
                      <span>CNC Machining &amp; Turning:</span>
                      <span className="text-white font-semibold">Included</span>
                    </div>
                    <div className="flex justify-between text-[#c5c6c7]">
                      <span>Precision Dynamic Balancing:</span>
                      <span className="text-emerald-400 font-mono font-bold">Complimentary</span>
                    </div>
                    <div className="flex justify-between text-[#c5c6c7]">
                      <span>Insured Express Air Freight (India):</span>
                      <span className="text-emerald-400 font-mono font-bold">Complimentary</span>
                    </div>
                    <div className="flex justify-between text-[#c5c6c7]">
                      <span>ARAI Laser Runout Certificate:</span>
                      <span className="text-white font-semibold">Included</span>
                    </div>

                    <div className="pt-3 border-t border-[#c5c6c7]/15 flex justify-between items-baseline">
                      <span className="font-['Montserrat'] text-sm font-bold uppercase text-white">
                        Total (INR)
                      </span>
                      <span className="font-mono text-2xl font-bold text-[#e62020]">
                        ₹{totalAmount.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      type="button"
                      onClick={handleStartCheckout}
                      className="w-full py-4 bg-[#e62020] hover:bg-[#ff2a2a] text-white font-['Montserrat'] text-xs font-bold uppercase tracking-wider rounded crimson-glow transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span className="material-symbols-outlined text-base">assignment_turned_in</span>
                      <span>Proceed to Confirm Order</span>
                    </button>

                    <p className="text-[10px] text-[#c5c6c7]/80 text-center font-mono">
                      Next: Fill short shipping form &bull; Direct dispatch to WhatsApp +91 {WHATSAPP_TARGET_NUMBER} &bull; Email confirmation
                    </p>
                  </div>

                  <div className="text-[11px] text-[#c5c6c7]/80 text-center font-mono">
                    Production Lead Time: 14 Business Days from Talegaon, Pune Lab
                  </div>

                  <div className="pt-3 border-t border-[#c5c6c7]/15 text-center">
                    <button
                      onClick={() => onSelectTab('contact')}
                      className="text-[11px] text-[#c5c6c7] hover:text-[#e62020] transition-colors font-['Montserrat'] uppercase font-bold tracking-wider inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Need Custom Fitment Assistance?</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
