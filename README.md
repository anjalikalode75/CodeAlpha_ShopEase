# ShopEase — Full-Stack E-Commerce Platform

**ShopEase** is a modern, production-style full-stack e-commerce web application engineered for the **CodeAlpha Full Stack Development Internship**.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, JavaScript, HTML5, CSS3
- **Styling**: Tailwind CSS with custom design system (Warm neutral base, Charcoal typography, Deep Indigo `#4f46e5` accent)
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Backend**: Node.js & Express.js (RESTful API)
- **Database**: MongoDB with Mongoose ODM (Indexes, Schemas, Lifecycle Hooks)
- **Authentication**: JWT stored securely in HttpOnly cookies / Authorization Bearer headers, bcryptjs password hashing
- **Security**: Helmet, CORS with credential handling, Express Rate Limiter, authoritative server-side validation
- **Testing**: Jest & Supertest automated backend test suites
- **HTTP Client**: Axios with centralized error interceptors

---

## 📁 Repository Structure

```text
CodeAlpha_ShopEase/
├── client/                     # Vite React Frontend
│   ├── src/
│   │   ├── assets/             # Images, static media
│   │   ├── components/         # Reusable UI components
│   │   ├── context/            # React Context providers (Auth, Cart)
│   │   ├── hooks/              # Custom React hooks
│   │   ├── layouts/            # Page layouts (Navbar, Footer, Admin sidebar)
│   │   ├── pages/              # View pages (Home, Catalog, Details, Cart, Admin)
│   │   ├── services/           # Axios HTTP client instance & API endpoints
│   │   ├── utils/              # Formatters, helpers
│   │   ├── App.jsx             # Main application component & routes
│   │   ├── index.css           # Tailwind directives & design tokens
│   │   └── main.jsx            # React root mount
│   ├── index.html              # HTML shell with Google Fonts & SEO meta
│   ├── package.json            # Client dependencies & scripts
│   ├── postcss.config.js       # PostCSS config
│   ├── tailwind.config.js      # Tailwind theme extensions
│   └── vite.config.js          # Vite config with backend proxy
│
├── server/                     # Node.js Express Backend
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js           # Mongoose connection manager & lifecycle hooks
│   │   │   └── env.js          # Strict environment variable validation
│   │   ├── middleware/
│   │   │   ├── auth.js         # JWT verification & role authorization (customer/admin)
│   │   │   ├── errorHandler.js # Centralized Mongoose, duplicate-key & 500 error handler
│   │   │   └── notFound.js     # Standardized JSON 404 handler
│   │   ├── models/
│   │   │   ├── Category.js     # Category model with slug generator
│   │   │   ├── Cart.js         # Persistent user cart model
│   │   │   ├── Order.js        # Authoritative order calculations & COD status
│   │   │   ├── Product.js      # Product schema with text indexes & ratings
│   │   │   ├── User.js         # User model with bcrypt pre-save & password exclusion
│   │   │   └── index.js        # Model barrel export
│   │   ├── routes/
│   │   │   └── healthRoutes.js # API health diagnostics route (/api/v1/health)
│   │   ├── app.js              # Express app with Helmet, CORS, Rate Limiters
│   │   └── server.js           # HTTP server bootstrap & graceful shutdown
│   ├── tests/
│   │   └── health.test.js      # Automated backend foundation test suite
│   ├── .env.example            # Backend environment template
│   └── package.json            # Backend dependencies & test scripts
│
├── .env.example                # Root environment template
├── .gitignore                  # Git ignore rules (node_modules, .env, build)
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+ (tested on Node v24.18.0)
- **npm** v9+ (tested on npm 11.16.0)
- **MongoDB** running locally (`mongodb://127.0.0.1:27017/shopease`) or a MongoDB Atlas URI

### 1. Clone & Setup Environment
```bash
git clone <repository-url>
cd CodeAlpha_ShopEase

# Configure backend environment
cp server/.env.example server/.env
```

Review `server/.env` and ensure `MONGODB_URI` points to your running MongoDB instance.

### 2. Install Dependencies
```bash
# Backend dependencies
cd server
npm install

# Frontend dependencies
cd ../client
npm install
```

### 3. Run Backend Server
```bash
cd server
npm run dev
```
Backend API will start at: `http://localhost:5000`  
Health check endpoint: `http://localhost:5000/api/v1/health`

### 4. Run Automated Tests
```bash
cd server
npm test
```

### 5. Run Frontend Development Server
```bash
cd client
npm run dev
```
Frontend development server will start at: `http://localhost:5173`

---

## 🛡️ Development Roadmap

- [x] **Phase 1: Project Architecture, Monorepo Scaffolding & Core Backend Foundation**
- [ ] **Phase 2: Authentication & Authorization APIs, Input Validation & Security Hardening**
- [ ] **Phase 3: Category & Product Catalog API, Filtering/Sorting & Safe Seeding Script**
- [ ] **Phase 4: Shopping Cart, Server-Side Authoritative Checkout & COD Orders**
- [ ] **Phase 5: Frontend Design System, Responsive Shell, Navbar & Hero**
- [ ] **Phase 6: Customer Shopping Experience, Catalog Browsing & Cart Management**
- [ ] **Phase 7: Protected Admin Dashboard (Metrics, Products, Orders, Users)**
- [ ] **Phase 8: End-to-End Verification, Postman Documentation & Production Readiness**
