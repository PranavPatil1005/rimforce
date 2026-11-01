export type NavTab = 'home' | 'products' | 'about' | 'contact' | 'cart';

export interface WheelProduct {
  id: string;
  name: string;
  code: string;
  tagline: string;
  category: string;
  basePrice: number; // in INR (₹)
  weightKg: number; // e.g. 6.8 kg
  weightSavedPerCorner: number; // in kg e.g. 3.4 kg
  image: string;
  description: string;
  diameters: string[]; // ['14"', '15"', '16"', '17"']
  widths: string[]; // ['6.0J', '6.5J', '7.0J', '7.5J', '8.0J']
  boltPatterns: string[]; // ['4x100', '4x108', '5x100', '5x114.3']
  loadRatingKg: number;
  certifications: string[];
  popularSetups: string[];
  features: string[];
}

export interface CartItem {
  id: string;
  wheel: WheelProduct;
  diameter: string;
  width: string;
  boltPattern: string;
  quantity: number; // number of sets of 4
  unitPrice: number; // set price in INR
}

export interface AtelierLocation {
  id: string;
  name: string;
  city: string;
  typeBadge: string;
  timezone: string;
  address: string;
  phone: string;
  hours: string;
  specialty: string;
}

export interface TeamContact {
  id: string;
  name: string;
  role: string;
  phone: string;
  displayPhone: string;
  email: string;
}

export interface OrderFormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  pincode: string;
  contactNumber: string;
  vehicleModel?: string;
  specialNotes?: string;
}

export interface PlacedOrder {
  orderId: string;
  createdAt: string;
  customer: OrderFormData;
  items: CartItem[];
  totalAmount: number;
  totalWeightSaved: number;
  whatsappNumber: string;
  whatsappUrl: string;
  emailSubject: string;
  emailSent: boolean;
}

