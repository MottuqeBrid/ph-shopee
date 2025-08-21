This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# PH-Shopee

PH-Shopee is a modern e-commerce web application for buying and selling products. It features user authentication, product management, and a responsive UI. Built with Next.js, Tailwind CSS, DaisyUI, NextAuth, and MongoDB.

## 📁 Folder Structure

```
ph-shopee/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── (auth)/          # Auth pages (login)
│   │   ├── (home)/          # Home and product pages
│   │   ├── api/             # API routes (Next.js route handlers)
│   │   └── dashboard/       # Dashboard (add-product, profile)
│   ├── lib/                 # Database connection
│   ├── models/              # Mongoose models
│   └── sharedComponent/     # Reusable UI components
├── .env                     # Environment variables
├── package.json
├── README.md
└── ...
```

## 🛠️ Setup & Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/MottuqeBrid/ph-shopee.git
   cd ph-shopee
   ```
2. Install dependencies:
   ```bash
   npm install
   # or yarn install
   ```
3. Create a `.env` file and add your MongoDB URI and NextAuth credentials:
   ```env
   MONGODB_URI=your_mongodb_uri
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Visit [http://localhost:3000](http://localhost:3000)

## 🗺️ Route Summary

### Main Routes

- `/` — Home page
- `/products` — All products
- `/products/[id]` — Product details
- `/dashboard` — Dashboard (requires login)
- `/dashboard/add-product` — Add new product (requires login)
- `/dashboard/profile` — User profile (requires login)
- `/dashboard/profile/_component/products` — User's products table (requires login)
- `/auth/login` — Login page

### API Routes

- `/api/product` — GET all products, POST new product
- `/api/product/[id]` — GET, PUT, DELETE a product by ID
- `/api/auth/[...nextauth]` — NextAuth authentication

## 🚀 Live Demo

[https://ph-shopee.vercel.app](https://ph-shopee.vercel.app)

## 🗂️ Main Routes

- `/` — Home page
- `/products` — All products
- `/products/[id]` — Product details
- `/dashboard` — Dashboard (requires login)
- `/dashboard/add-product` — Add new product (requires login)
- `/dashboard/profile` — User profile (requires login)
- `/dashboard/profile/_component/products` — User's products table (requires login)
- `/auth/login` — Login page

## 🛠️ API Routes

- `/api/product` — GET all products, POST new product
- `/api/product/[id]` — GET, PUT, DELETE a product by ID
- `/api/auth/[...nextauth]` — NextAuth authentication

## 📝 Features

- User authentication (Google OAuth via NextAuth)
- Add, view, and delete products
- Responsive UI with Tailwind CSS & DaisyUI
- Protected dashboard routes
- Profile management

## 📦 Tech Stack

- Next.js 14+
- React 18+
- Tailwind CSS & DaisyUI
- MongoDB & Mongoose
- NextAuth.js
- Vercel (deployment)

---

© {new Date().getFullYear()} PH-Shopee. All rights reserved.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
