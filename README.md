# VoxTrade Website

A comprehensive Next.js frontend and Node.js backend for the VoxTrade mobile trading app marketing website.

## 🚀 Features

### Frontend (Next.js 14)
- Modern, responsive design with Tailwind CSS
- Framer Motion animations
- TypeScript for type safety
- SEO optimized
- Mobile-first approach

### Backend (Node.js/Express)
- RESTful API architecture
- JWT authentication
- Stripe subscription integration
- Rate limiting & security middleware
- Input validation

## 📁 Project Structure

```
voxtrade-website/
├── frontend/                 # Next.js frontend
│   ├── src/
│   │   ├── app/             # App router pages
│   │   ├── components/      # React components
│   │   ├── lib/             # Utilities & API
│   │   └── styles/          # Global styles
│   ├── public/              # Static assets
│   └── package.json
│
├── backend/                  # Node.js backend
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── middleware/      # Express middleware
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   └── index.js         # Entry point
│   └── package.json
│
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at `http://localhost:3000`

### Backend Setup

```bash
cd backend
cp .env.example .env
# Edit .env with your configuration
npm install
npm run dev
```

The backend will run at `http://localhost:5000`

## 🎨 Design System

### Colors
- Primary: `#00FFC8` (Cyan/Teal)
- Background: `#000000` (Black)
- Cards: `#0D0D0D`, `#1A1A1A`
- Text: White, Gray variants

### Typography
- Font Family: Sora (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800

## 📄 Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Main landing page with all sections |
| About | `/about` | Company story and values |
| Blog | `/blog` | Articles and market insights |
| Contact | `/contact` | Contact form |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password/:token` - Reset password
- `GET /api/auth/verify-email/:token` - Verify email

### Users
- `GET /api/users/me` - Get current user
- `PUT /api/users/me` - Update profile
- `PUT /api/users/change-password` - Change password
- `DELETE /api/users/me` - Delete account

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe
- `GET /api/newsletter/confirm/:token` - Confirm subscription

### Contact
- `POST /api/contact` - Submit contact form

### Subscription
- `POST /api/subscription/create-checkout-session` - Create Stripe checkout
- `GET /api/subscription/status` - Get subscription status
- `POST /api/subscription/cancel` - Cancel subscription
- `POST /api/subscription/apply-promo` - Apply promo code
- `POST /api/subscription/webhook` - Stripe webhook

## 🔧 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (.env)
```
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/voxtrade
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd frontend
vercel
```

### Backend (DigitalOcean/Railway/Render)
```bash
cd backend
# Set environment variables
npm start
```

## 📱 Mobile App Links

- iOS App Store: Coming Soon
- Google Play Store: Coming Soon

## 📞 Support

- Email: support@voxtradeapp.com
- Website: https://voxtradeapp.com

## 📄 License

Copyright © 2026 VoxTrade. All rights reserved.
