## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v20.0.0` or higher
- **npm** or **bun**

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd rimforce-alloy-wheels
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server (runs on port 3000):
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## 📦 Scripts

- `npm run dev`: Starts the Vite development server on port 3000 with host binding `0.0.0.0`.
- `npm run build`: Builds the production bundle into the `dist/` folder.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs TypeScript validation (`tsc --noEmit`).

---

## 📁 Project Structure

```
├── public/
│   └── assets/aistudio/          # Local static brand assets & logos
├── src/
│   ├── components/
│   │   ├── AboutView.tsx         # Engineering pillars & manufacturing facility info
│   │   ├── CartView.tsx          # Full-page shopping cart with product images & INR checkout
│   │   ├── ContactView.tsx       # Single-branch contact form & Pune facility hotline
│   │   ├── Footer.tsx            # Footer with brand mark & Pune headquarters details
│   │   ├── Header.tsx            # Sticky header with logo & navigation tabs
│   │   ├── HomeView.tsx          # Atmospheric hero section & featured series showcase
│   │   └── ProductsView.tsx      # Wheel product catalog with 14"–17" diameters
│   ├── data/
│   │   └── wheels.ts             # Wheel specifications, pricing (INR), & Pune branch details
│   ├── types.ts                  # TypeScript interfaces for products, cart, & ateliers
│   ├── App.tsx                   # Main application controller & routing state
│   ├── index.css                 # Tailwind CSS entry point & custom grid styling
│   └── main.tsx                  # React application entry point
├── package.json                  # NPM packages & build scripts
├── requirements.txt              # Dependency specifications & environment prerequisites
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite plugin configuration
```

---