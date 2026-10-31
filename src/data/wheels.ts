import { WheelProduct, AtelierLocation, TeamContact } from '../types';

export const BRAND_LOGO_IMAGE = '/assets/aistudio/logo_df8b2043.jpeg';

export const TEAM_CONTACTS: TeamContact[] = [
  {
    id: 'rohan',
    name: 'Rohan Patil',
    role: 'Chief Technical & CNC Specialist',
    phone: '+919588435668',
    displayPhone: '+91 95884 35668',
    email: 'rohandpatil420@gmail.com',
  },
  {
    id: 'onkar',
    name: 'Onkar Pacharane',
    role: 'Fitment & Production Operations',
    phone: '+919975177822',
    displayPhone: '+91 99751 77822',
    email: 'onkarpacharane123@gmail.com',
  },
  {
    id: 'jay',
    name: 'Jay Jadhav',
    role: 'Forging Specialist & Quality Control',
    phone: '+917447338321',
    displayPhone: '+91 74473 38321',
    email: 'jayjadhav3007@gmail.com',
  },
  {
    id: 'yashraj',
    name: 'Yashraj Gorhe',
    role: 'Logistics & Client Relations Specialist',
    phone: '+919579297452',
    displayPhone: '+91 95792 97452',
    email: 'yashrajgorhe07@gmail.com',
  },
];

export const WHEEL_PRODUCTS: WheelProduct[] = [
  {
    id: 'rf07-grand-prix',
    name: 'RF-07 Grand Prix',
    code: 'RF-MONO-07',
    tagline: 'Ultralight Gold Mesh Forged Monoblock',
    category: 'Forged Monoblock',
    basePrice: 65000, // ₹65,000 per wheel (₹2,60,000 for set of 4)
    weightKg: 6.4,
    weightSavedPerCorner: 3.6,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA82XSsQes3OoOeJf74zdIvDHYD9taym9GaAY0pVIbQNjcbucHKTvyH3iV_1goNsHFpw8601TC1iAuuo0DXq6dm13I3e9uaioE4FsOS0sPJoTWvMfl6K3dQe32wutb-b-cHBEABpFvD5HLoNz7CDz6_IbmUvBAZqAYafhKu5jbsmwh21hX7vGLItimyGuqXFYAONyhyTP5-tAPt9_J03xwAX7bwnYxLQNTxs_8p7gN1BaOgVIKlKGufy3tg1EezS0X6xYE',
    description: 'Precision CNC-milled from 10,000-ton forged 6061-T6 aerospace aluminum billets. Scalloped spoke side pockets minimize rotational inertia for instantaneous brake heat dissipation.',
    diameters: ['14"', '15"', '16"', '17"'],
    widths: ['6.5J', '7.0J', '7.5J', '8.0J'],
    boltPatterns: ['4x100', '4x108', '5x100', '5x114.3'],
    loadRatingKg: 780,
    certifications: ['ISO 9001:2015', 'ARAI Certified', 'BIS Compliant'],
    popularSetups: ['Sport Road Fitment (15x7.0 ET35)', 'Track Performance (16x7.5 ET38)'],
    features: [
      '10,000-Ton Forged Aerospace 6061-T6 Billet',
      'Engineered for Performance Multi-Piston Caliper Clearance',
      'Knurled Bead Seats (Zero Tire Slippage under high torque)',
      'Laser-Etched Individual Production Serial ID',
    ],
  },
  {
    id: 'rf01-tactical',
    name: 'RF-01 Tactical Spec',
    code: 'RF-TAC-01',
    tagline: 'Heavy Duty Reinforced Spoke Architecture',
    category: 'Track Spec',
    basePrice: 55000, // ₹55,000 per wheel (₹2,20,000 for set of 4)
    weightKg: 6.9,
    weightSavedPerCorner: 3.2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5ddOU1PfSUPZvm9ma4FDOD4Vd9ytWPhqp-vmY3ASSggelnqfr8b2cf4ktYFzIqSG01HUKcG77wBDDPdirZ1lE7rbF0C6U4787yKk3Eu2sA5TZ3OXrNQsBhHc84-Nb4zbiZfUtfZWhPzTRZgnh_Rv7O2NP6S_HfewfzhxYmkkkc-EKsnUCXbL3oPihydUiS7p44juBg0shzdro_HsYAbEGTNRtVsTgBhZg6r2r0KBYsRmgkLNe6-0n3p14bA1l_ggr8WY',
    description: 'Constructed for intense structural rigidity and maximum load endurance. High-tension spokes engineered to absorb curb strikes while maintaining microscopic radial tolerances.',
    diameters: ['14"', '15"', '16"', '17"'],
    widths: ['6.0J', '6.5J', '7.0J', '7.5J'],
    boltPatterns: ['4x100', '4x108', '5x100', '5x114.3'],
    loadRatingKg: 850,
    certifications: ['ISO 9001:2015', 'ARAI Verified'],
    popularSetups: ['Square Circuit Spec (15x6.5 ET38)', 'Road Endurance (16x7.0 ET40)'],
    features: [
      'Reinforced Outer Rim Guard Profile',
      'Solid Monoblock Aerospace Billet Milling',
      'Deep Lug Pocketing for Lightweight Lug Fasteners',
      'Multi-Stage High-Durability Thermal Powder Coating',
    ],
  },
  {
    id: 'rf04-hyper-concave',
    name: 'RF-04 Hyper-Concave',
    code: 'RF-CONC-04',
    tagline: 'Aggressive Y-Spoke Deep Radial Drop Center',
    category: 'Forged Monoblock',
    basePrice: 72000, // ₹72,000 per wheel (₹2,88,000 for set of 4)
    weightKg: 6.6,
    weightSavedPerCorner: 3.8,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq2icgygXGWDv5Xs2b7HwsQpIE0Jts2pmS3W7ef69ZA5QAatlmHkPoiXEtChF_rHXD2tnsG8cOMltGU0wdz9SdrYCKuRVkFRpoZrGnxprxjbIFtTQJP9t9E1KK2cQ2FFDlxkdNTbrOapgZasM42s8q3VvrdHzU07j7nVcvcdq6Gq0ku0gOVMCRJ2GRrrVByHfaYAbx7d-m5rqAMnJymAOGTtPzFp258R7vX5fn-T7OKsU3FokFLBfOrXFWv4Fi0rPSQmc',
    description: 'Engineered with an ultra-deep concave profile extending inward toward the central hub. Delivers commanding visual presence alongside maximum brake back-spacing.',
    diameters: ['14"', '15"', '16"', '17"'],
    widths: ['6.5J', '7.0J', '7.5J', '8.0J'],
    boltPatterns: ['4x100', '5x100', '5x114.3'],
    loadRatingKg: 790,
    certifications: ['ISO 9001:2015', 'ARAI Tested'],
    popularSetups: ['Flush Stance (16x7.5 ET35)', 'Performance Track (17x8.0 ET38)'],
    features: [
      'Radial Deep Concave Profile',
      'I-Beam Spoke Lateral Weight Relief Chamfering',
      'Titanium Fastener Compatible',
      'Hand-Brushed Ceramic Protective Clear Coat',
    ],
  },
  {
    id: 'rf09-crimson-aero',
    name: 'RF-09 Crimson Aero',
    code: 'RF-AERO-09',
    tagline: 'Dry Carbon Turbofan Integrated Aerodynamic Monoblock',
    category: 'Aerodynamic Forged',
    basePrice: 85000, // ₹85,000 per wheel (₹3,40,000 for set of 4)
    weightKg: 6.2,
    weightSavedPerCorner: 4.1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3GP8NKgK92AVQIRKBEaoOsu5-M2Zeoq9g8ayEhdOZU746qq2JLV54hvQYiJQ2LyjY15x6BdgDkjmg8GFpGZ3KHjs3yGdN7ze9mMzy8WxxGqfZFZMeWJVaUohTKTB6NyVnLYVogB8gSnx3G_O4HKfmcgQ166NzyG_tkdZFa8sKdpQQxX81pk1QmAM6CRIRpLlRv8wvag4Zx8RKv1LjFb9PPROfndE19UdMyXhNyQDECGMOd-9qEwBgd1KjsGrvbILg8pE',
    description: 'Flagship aerodynamic forged monoblock. Integrated autoclaved dry carbon fiber turbofan vanes extract caliper heat while smoothing turbulent air around wheel wells.',
    diameters: ['14"', '15"', '16"', '17"'],
    widths: ['7.0J', '7.5J', '8.0J'],
    boltPatterns: ['4x100', '5x100', '5x114.3'],
    loadRatingKg: 820,
    certifications: ['ISO 9001:2015', 'ARAI Verified', 'CFD Validated'],
    popularSetups: ['Aero Circuit Spec (16x7.5 ET35)', 'High-Speed Drag Reduction Stance (17x8.0 ET38)'],
    features: [
      'Autoclaved 3K Twill Dry Carbon Aerodisc Plates',
      'Vortex Caliper Cooling Extraction Channels',
      'Precision Central Locking Ring Fastener',
      'High-Speed Dynamic Balancing for Maximum Stability',
    ],
  },
];

// Single official headquarters and branch in Talegaon, Pune, Maharashtra
export const INDIAN_ATELIERS: AtelierLocation[] = [
  {
    id: 'pune',
    name: 'Pune CNC Engineering Center & HQ',
    city: 'Pune',
    typeBadge: 'Primary Manufacturing Facility & HQ',
    timezone: 'IST // UTC+5:30',
    address: 'Plot 42, MIDC Industrial Area, Talegaon Dabhade, Pune, Maharashtra 410507',
    phone: '+91 20 4410 9200',
    hours: 'Mon–Sat: 09:00 – 19:30 IST',
    specialty: '10,000T Forging, 5-Axis CNC Milling, Laser Inspection & Dyno Balancing',
  },
];
