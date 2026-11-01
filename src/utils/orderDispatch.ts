import { CartItem, OrderFormData, PlacedOrder } from '../types';

export const WHATSAPP_TARGET_NUMBER = '9588435668';
export const WHATSAPP_COUNTRY_CODE = '91';

export function generateOrderId(): string {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `RF-PUN-2026-${randomSuffix}`;
}

/**
 * Builds the WhatsApp dispatch text to be received on 9588435668
 */
export function buildWhatsAppMessage(
  orderId: string,
  customer: OrderFormData,
  items: CartItem[],
  totalAmount: number,
  totalWeightSaved: number
): string {
  const itemsText = items
    .map(
      (item, idx) =>
        `${idx + 1}. *${item.wheel.name}* (${item.wheel.code})\n` +
        `   • Specs: ${item.diameter} × ${item.width} | Bolt: ${item.boltPattern}\n` +
        `   • Quantity: ${item.quantity} ${item.quantity === 1 ? 'Set (4 wheels)' : 'Sets'}\n` +
        `   • Amount: ₹${(item.unitPrice * item.quantity).toLocaleString('en-IN')}`
    )
    .join('\n\n');

  return (
    `🏎️ *NEW RIMFORCE FORGED ALLOY WHEEL ORDER*\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `📋 *Order ID:* ${orderId}\n` +
    `📅 *Date:* ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}\n` +
    `💰 *Total Amount:* ₹${totalAmount.toLocaleString('en-IN')}\n` +
    `⚖️ *Total Unsprung Mass Saved:* -${totalWeightSaved.toFixed(1)} kg\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `👤 *CUSTOMER & SHIPPING DETAILS:*\n` +
    `• *First Name:* ${customer.firstName}\n` +
    `• *Last Name:* ${customer.lastName}\n` +
    `• *Contact Number:* ${customer.contactNumber}\n` +
    `• *Email:* ${customer.email}\n` +
    `• *Delivery Address:* ${customer.address}\n` +
    `• *Pincode:* ${customer.pincode}\n` +
    (customer.vehicleModel ? `• *Vehicle Model / Fitment:* ${customer.vehicleModel}\n` : '') +
    (customer.specialNotes ? `• *Special Requests:* ${customer.specialNotes}\n` : '') +
    `\n📦 *COMMISSIONED WHEEL BUILDS:*\n` +
    `${itemsText}\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `🏭 *Production Facility:* Talegaon, Pune CNC Lab\n` +
    `🛡️ *Included:* ARAI Certification, Laser Runout Spec, Insured Air Freight\n` +
    `━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
    `_Sent via RIMFORCE Digital Order Dispatch System_`
  );
}

/**
 * Creates the direct WhatsApp URL for sending to 9588435668
 */
export function createWhatsAppUrl(messageText: string): string {
  const fullPhone = `${WHATSAPP_COUNTRY_CODE}${WHATSAPP_TARGET_NUMBER}`;
  return `https://api.whatsapp.com/send?phone=${fullPhone}&text=${encodeURIComponent(messageText)}`;
}

/**
 * Creates the mailto link pre-configured with customer email and 'order placed succesfully'
 */
export function createMailtoUrl(
  customer: OrderFormData,
  orderId: string,
  items: CartItem[],
  totalAmount: number
): string {
  const subject = `Order Placed Successfully - RIMFORCE Order ${orderId}`;
  const body =
    `Hello ${customer.firstName} ${customer.lastName},\n\n` +
    `Your RIMFORCE alloy wheels order (${orderId}) has been placed successfully!\n\n` +
    `Order Summary:\n` +
    items.map((i) => `- ${i.wheel.name} (${i.diameter} ${i.width}, ${i.boltPattern}) x ${i.quantity} Set: ₹${(i.unitPrice * i.quantity).toLocaleString('en-IN')}`).join('\n') +
    `\n\nTotal Paid: ₹${totalAmount.toLocaleString('en-IN')}\n\n` +
    `Delivery Destination:\n` +
    `${customer.address}\nPincode: ${customer.pincode}\nContact: ${customer.contactNumber}\n\n` +
    `Our CNC engineering specialist in Talegaon, Pune has received your order and allocated your forged 6061-T6 billet.\n\n` +
    `WhatsApp Dispatch Hotline: +91 95884 35668\n` +
    `Thank you for choosing RIMFORCE.`;

  return `mailto:${customer.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
