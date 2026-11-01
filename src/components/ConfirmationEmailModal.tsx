import React from 'react';
import { PlacedOrder } from '../types';
import { createMailtoUrl, WHATSAPP_TARGET_NUMBER } from '../utils/orderDispatch';

interface ConfirmationEmailModalProps {
  order: PlacedOrder;
  onClose: () => void;
}

export const ConfirmationEmailModal: React.FC<ConfirmationEmailModalProps> = ({ order, onClose }) => {
  const mailtoUrl = createMailtoUrl(
    order.customer,
    order.orderId,
    order.items,
    order.totalAmount
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#12141A] border border-[#e62020] rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#1a1b20] border-b border-[#c5c6c7]/15 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#e62020] text-xl">mark_email_read</span>
            <div>
              <span className="font-['Montserrat'] text-xs font-bold uppercase text-white block">
                Official Order Confirmation Email
              </span>
              <span className="text-[11px] font-mono text-[#c5c6c7]">
                Delivered to: <strong className="text-white">{order.customer.email}</strong>
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-[#292a2e] text-[#c5c6c7] hover:text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Modal Body: Realistic Email Client Presentation */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#e3e2e8] font-['Inter']">
          {/* Simulated Email Envelope Header */}
          <div className="bg-[#1a1b20] p-4 rounded-xl border border-[#c5c6c7]/10 space-y-2 text-xs font-mono">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-[#c5c6c7]/10 gap-1">
              <div>
                <span className="text-[#c5c6c7]">From:</span>{' '}
                <span className="text-white font-bold">RIMFORCE Engineering &lt;orders@rimforce.in&gt;</span>
              </div>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Delivered Successfully
              </span>
            </div>
            <div>
              <span className="text-[#c5c6c7]">To:</span>{' '}
              <span className="text-white font-semibold">
                {order.customer.firstName} {order.customer.lastName} &lt;{order.customer.email}&gt;
              </span>
            </div>
            <div>
              <span className="text-[#c5c6c7]">Subject:</span>{' '}
              <span className="text-[#e62020] font-bold">
                Order Placed Successfully - RIMFORCE Order #{order.orderId}
              </span>
            </div>
            <div>
              <span className="text-[#c5c6c7]">Date:</span>{' '}
              <span className="text-white">{order.createdAt}</span>
            </div>
          </div>

          {/* Email Content Body */}
          <div className="bg-[#0d0e12] p-6 rounded-xl border border-[#c5c6c7]/15 space-y-6">
            {/* Brand Header */}
            <div className="flex items-center justify-between border-b border-[#c5c6c7]/15 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#e62020] rotate-45"></span>
                <span className="font-['Montserrat'] text-base font-black tracking-wider text-white">
                  RIMFORCE
                </span>
                <span className="text-[10px] text-[#e62020] font-mono">ALLOY WHEELS</span>
              </div>
              <span className="text-[10px] font-mono bg-[#1a1b20] px-2 py-1 rounded text-[#c5c6c7]">
                CNC LAB TALEGAON
              </span>
            </div>

            {/* Success Headline */}
            <div className="text-center py-2 space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
                <span className="material-symbols-outlined text-2xl">check</span>
              </div>
              <h3 className="font-['Montserrat'] text-xl font-bold uppercase text-white">
                order placed succesfully
              </h3>
              <p className="text-xs text-[#c5c6c7] max-w-md mx-auto">
                Dear {order.customer.firstName} {order.customer.lastName}, your custom alloy wheel commission has been received and registered under Reference <strong className="text-white font-mono">{order.orderId}</strong>.
              </p>
            </div>

            {/* Commissioned Items List */}
            <div className="space-y-3">
              <div className="text-xs font-['Montserrat'] font-bold text-[#c5c6c7] uppercase border-b border-[#c5c6c7]/10 pb-1">
                Allocated Wheel Sets
              </div>
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-[#16171d] p-3 rounded border border-[#c5c6c7]/10 text-xs"
                >
                  <div>
                    <h5 className="font-bold text-white uppercase">{item.wheel.name}</h5>
                    <p className="text-[#c5c6c7] text-[11px] font-mono">
                      {item.diameter} × {item.width} | Bolt: {item.boltPattern} | Qty: {item.quantity} Set(s)
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-white">
                      ₹{(item.unitPrice * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total and Delivery Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono pt-3 border-t border-[#c5c6c7]/15">
              <div className="bg-[#16171d] p-3 rounded border border-[#c5c6c7]/10 space-y-1">
                <span className="text-[#c5c6c7] text-[10px] uppercase font-bold block">Shipping Address:</span>
                <p className="text-white text-xs">{order.customer.address}</p>
                <p className="text-white text-xs">Pincode: {order.customer.pincode}</p>
                <p className="text-white text-xs">Contact: {order.customer.contactNumber}</p>
              </div>

              <div className="bg-[#16171d] p-3 rounded border border-[#c5c6c7]/10 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#c5c6c7]">Mass Saved:</span>
                  <span className="text-emerald-400 font-bold">-{order.totalWeightSaved.toFixed(1)} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#c5c6c7]">Insured Air Freight:</span>
                  <span className="text-emerald-400 font-bold">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm pt-1 border-t border-[#c5c6c7]/10">
                  <span className="text-white font-bold">Total Paid:</span>
                  <span className="text-[#e62020] font-bold">₹{order.totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[#c5c6c7]/70 text-center font-mono border-t border-[#c5c6c7]/10 pt-3">
              Questions regarding machining or fitment? Reach our lead engineer directly at +91 {WHATSAPP_TARGET_NUMBER}.
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#1a1b20] border-t border-[#c5c6c7]/15 flex flex-wrap items-center justify-between gap-3">
          <a
            href={mailtoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[#292a2e] hover:bg-[#38393e] text-white text-xs font-['Montserrat'] font-bold uppercase rounded flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">open_in_new</span>
            <span>Open in Mail App</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2.5 bg-[#1f1f24] hover:bg-[#292a2e] border border-[#c5c6c7]/20 text-white text-xs font-['Montserrat'] font-bold uppercase rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              <span>Print Invoice</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#e62020] hover:bg-[#ff2a2a] text-white text-xs font-['Montserrat'] font-bold uppercase rounded transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
