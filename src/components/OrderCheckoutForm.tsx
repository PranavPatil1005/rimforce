import React, { useState } from 'react';
import { CartItem, OrderFormData } from '../types';
import { WHATSAPP_TARGET_NUMBER } from '../utils/orderDispatch';

interface OrderCheckoutFormProps {
  items: CartItem[];
  totalAmount: number;
  totalWeightSaved: number;
  onSubmitOrder: (formData: OrderFormData) => void;
  onCancel: () => void;
}

export const OrderCheckoutForm: React.FC<OrderCheckoutFormProps> = ({
  items,
  totalAmount,
  totalWeightSaved,
  onSubmitOrder,
  onCancel,
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    pincode: '',
    contactNumber: '',
    vehicleModel: '',
    specialNotes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Delivery address is required';
    }
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^[0-9]{6}$/.test(formData.pincode.trim().replace(/\s/g, ''))) {
      newErrors.pincode = 'Please enter a valid 6-digit Indian PIN code';
    }
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (formData.contactNumber.replace(/[^0-9]/g, '').length < 10) {
      newErrors.contactNumber = 'Please enter a valid 10-digit mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate brief processing animation before completion
    setTimeout(() => {
      onSubmitOrder(formData);
      setIsSubmitting(false);
    }, 600);
  };

  const handleInputChange = (field: keyof OrderFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-[#12141A] border border-[#e62020]/40 rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#1f1f24] via-[#1a1b20] to-[#121317] p-6 sm:p-8 border-b border-[#c5c6c7]/15">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#e62020]"></span>
              <span className="font-['Montserrat'] text-[10px] font-bold tracking-widest text-[#e62020] uppercase">
                COMMISSION ALLOCATION FORM
              </span>
            </div>
            <h2 className="font-['Montserrat'] text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-tight">
              Order Confirmation &amp; Shipping
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#c5c6c7] mt-1">
              Please enter your details below. Once submitted, your order specifications will be received directly on WhatsApp (<span className="text-white font-mono font-bold">+{WHATSAPP_TARGET_NUMBER}</span>) and a confirmation email stating <span className="text-emerald-400 font-bold">"order placed succesfully"</span> will be delivered to your inbox.
            </p>
          </div>

          <button
            type="button"
            onClick={onCancel}
            className="self-start sm:self-auto text-xs font-['Montserrat'] font-bold text-[#c5c6c7] hover:text-[#e62020] transition-colors flex items-center gap-1 cursor-pointer bg-[#1f1f24] px-3.5 py-2 rounded border border-[#c5c6c7]/20"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Back to Cart</span>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Fields: Left 7 Columns */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="block text-xs font-['Montserrat'] font-bold uppercase text-[#c5c6c7] mb-1.5">
                First Name <span className="text-[#e62020]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Pranav"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`w-full bg-[#1a1b20] border ${
                  errors.firstName ? 'border-[#e62020]' : 'border-[#c5c6c7]/20 focus:border-[#e62020]'
                } rounded px-3.5 py-2.5 text-sm text-white placeholder-[#c5c6c7]/40 outline-none transition-colors`}
              />
              {errors.firstName && (
                <p className="text-[11px] text-[#e62020] mt-1 font-mono">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-xs font-['Montserrat'] font-bold uppercase text-[#c5c6c7] mb-1.5">
                Last Name <span className="text-[#e62020]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Patil"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`w-full bg-[#1a1b20] border ${
                  errors.lastName ? 'border-[#e62020]' : 'border-[#c5c6c7]/20 focus:border-[#e62020]'
                } rounded px-3.5 py-2.5 text-sm text-white placeholder-[#c5c6c7]/40 outline-none transition-colors`}
              />
              {errors.lastName && (
                <p className="text-[11px] text-[#e62020] mt-1 font-mono">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Address */}
            <div>
              <label className="block text-xs font-['Montserrat'] font-bold uppercase text-[#c5c6c7] mb-1.5">
                Email Address <span className="text-[#e62020]">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full bg-[#1a1b20] border ${
                    errors.email ? 'border-[#e62020]' : 'border-[#c5c6c7]/20 focus:border-[#e62020]'
                  } rounded px-3.5 py-2.5 text-sm text-white placeholder-[#c5c6c7]/40 outline-none transition-colors pr-9`}
                />
                <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[#c5c6c7]/50 text-lg">
                  mail
                </span>
              </div>
              {errors.email ? (
                <p className="text-[11px] text-[#e62020] mt-1 font-mono">{errors.email}</p>
              ) : (
                <p className="text-[10px] text-[#c5c6c7]/70 mt-1 font-mono">
                  You will receive "order placed succesfully" here.
                </p>
              )}
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-xs font-['Montserrat'] font-bold uppercase text-[#c5c6c7] mb-1.5">
                Contact Number <span className="text-[#e62020]">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3 top-2.5 text-xs text-[#c5c6c7] font-mono select-none">
                  +91
                </div>
                <input
                  type="tel"
                  placeholder="98765 43210"
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                  className={`w-full bg-[#1a1b20] border ${
                    errors.contactNumber ? 'border-[#e62020]' : 'border-[#c5c6c7]/20 focus:border-[#e62020]'
                  } rounded pl-12 pr-3.5 py-2.5 text-sm text-white placeholder-[#c5c6c7]/40 outline-none transition-colors`}
                />
              </div>
              {errors.contactNumber && (
                <p className="text-[11px] text-[#e62020] mt-1 font-mono">{errors.contactNumber}</p>
              )}
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-['Montserrat'] font-bold uppercase text-[#c5c6c7] mb-1.5">
              Full Delivery Address <span className="text-[#e62020]">*</span>
            </label>
            <textarea
              rows={3}
              placeholder="House/Flat No, Building, Street, Area, City, State"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              className={`w-full bg-[#1a1b20] border ${
                errors.address ? 'border-[#e62020]' : 'border-[#c5c6c7]/20 focus:border-[#e62020]'
              } rounded px-3.5 py-2.5 text-sm text-white placeholder-[#c5c6c7]/40 outline-none transition-colors resize-none`}
            />
            {errors.address && (
              <p className="text-[11px] text-[#e62020] mt-1 font-mono">{errors.address}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Pincode */}
            <div>
              <label className="block text-xs font-['Montserrat'] font-bold uppercase text-[#c5c6c7] mb-1.5">
                Pincode <span className="text-[#e62020]">*</span>
              </label>
              <input
                type="text"
                maxLength={6}
                placeholder="411045"
                value={formData.pincode}
                onChange={(e) => handleInputChange('pincode', e.target.value)}
                className={`w-full bg-[#1a1b20] border ${
                  errors.pincode ? 'border-[#e62020]' : 'border-[#c5c6c7]/20 focus:border-[#e62020]'
                } rounded px-3.5 py-2.5 text-sm text-white font-mono placeholder-[#c5c6c7]/40 outline-none transition-colors`}
              />
              {errors.pincode && (
                <p className="text-[11px] text-[#e62020] mt-1 font-mono">{errors.pincode}</p>
              )}
            </div>

            {/* Vehicle Model / Fitment (Optional) */}
            <div>
              <label className="block text-xs font-['Montserrat'] font-bold uppercase text-[#c5c6c7] mb-1.5">
                Vehicle Model &amp; Year <span className="text-[#c5c6c7]/60 text-[10px] font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. BMW 330i, Honda City, Polo GT"
                value={formData.vehicleModel}
                onChange={(e) => handleInputChange('vehicleModel', e.target.value)}
                className="w-full bg-[#1a1b20] border border-[#c5c6c7]/20 focus:border-[#e62020] rounded px-3.5 py-2.5 text-sm text-white placeholder-[#c5c6c7]/40 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Dispatch Notice Box */}
          <div className="p-3.5 rounded-lg bg-[#1a1b20] border border-[#c5c6c7]/15 flex items-start gap-3">
            <span className="material-symbols-outlined text-[#25D366] text-xl shrink-0 mt-0.5">
              chat
            </span>
            <div className="text-xs space-y-1">
              <span className="font-['Montserrat'] font-bold text-white uppercase block">
                Instant Dual Notification System
              </span>
              <p className="text-[#c5c6c7] leading-relaxed">
                When you click <strong>"Submit Order &amp; Dispatch"</strong>, this order will be routed to WhatsApp (<span className="text-white font-mono font-bold">+{WHATSAPP_TARGET_NUMBER}</span>) for machining queue allocation, and you will receive an official confirmation email.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#e62020] hover:bg-[#ff2a2a] disabled:opacity-50 text-white font-['Montserrat'] text-xs font-bold uppercase tracking-wider rounded crimson-glow transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-xl"
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-outlined animate-spin text-base">progress_activity</span>
                <span>Dispatching Order...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-base">send</span>
                <span>Submit Order (Send to WhatsApp &amp; Confirm Email)</span>
              </>
            )}
          </button>
        </form>

        {/* Order Summary Recap: Right 5 Columns */}
        <div className="lg:col-span-5 bg-[#1a1b20] border border-[#c5c6c7]/15 p-6 rounded-xl space-y-5">
          <h3 className="font-['Montserrat'] text-sm font-bold uppercase text-white pb-3 border-b border-[#c5c6c7]/15 flex items-center justify-between">
            <span>Order Summary</span>
            <span className="text-xs text-[#e62020] font-mono">{items.length} {items.length === 1 ? 'Build' : 'Builds'}</span>
          </h3>

          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-2.5 rounded bg-[#12141A] border border-[#c5c6c7]/10"
              >
                <img
                  src={item.wheel.image}
                  alt={item.wheel.name}
                  className="w-14 h-14 object-contain rounded bg-[#0d0e12] p-1 border border-[#c5c6c7]/10 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-['Montserrat'] text-xs font-bold uppercase text-white truncate">
                    {item.wheel.name}
                  </h4>
                  <p className="text-[10px] text-[#c5c6c7] font-mono">
                    {item.diameter} × {item.width} | {item.boltPattern}
                  </p>
                  <p className="text-[10px] text-[#e62020] font-mono font-bold mt-0.5">
                    {item.quantity} {item.quantity === 1 ? 'Set (4 wheels)' : 'Sets'} × ₹{(item.unitPrice * item.quantity).toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-3 border-t border-[#c5c6c7]/15 text-xs font-mono">
            <div className="flex justify-between text-[#c5c6c7]">
              <span>Unsprung Mass Saved:</span>
              <span className="text-emerald-400 font-bold">-{totalWeightSaved.toFixed(1)} kg</span>
            </div>
            <div className="flex justify-between text-[#c5c6c7]">
              <span>Air Freight (India):</span>
              <span className="text-emerald-400 font-bold">FREE</span>
            </div>
            <div className="flex justify-between text-[#c5c6c7]">
              <span>Laser Runout Balancing:</span>
              <span className="text-white font-bold">Included</span>
            </div>
            <div className="pt-2 border-t border-[#c5c6c7]/10 flex justify-between items-baseline">
              <span className="font-['Montserrat'] text-xs font-bold uppercase text-white">
                Total Payable:
              </span>
              <span className="font-mono text-xl font-bold text-[#e62020]">
                ₹{totalAmount.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="p-3 bg-[#12141A] rounded border border-emerald-500/20 text-[11px] text-[#c5c6c7] space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase text-[10px]">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span>100% Genuine Forged Aerospace 6061-T6</span>
            </div>
            <p>
              Each wheel is precision-machined to order in Talegaon, Pune. Structural lifetime guarantee included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
