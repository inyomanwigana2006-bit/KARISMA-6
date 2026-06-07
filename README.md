# KARISMA 6 — HMJ SSP Undiksha

> Karya, Inovasi, dan Prestasi Mahasiswa — Kompetisi Akademik Nasional

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom design system
- **Auth**: NextAuth.js (Google OAuth)
- **Database**: PostgreSQL via Prisma ORM
- **Storage**: Supabase Storage
- **Animations**: Framer Motion
- **UI**: Radix UI primitives + shadcn/ui
- **Deploy**: Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── login/page.tsx        # Auth page
│   ├── (portal)/
│   │   ├── dashboard/        # Participant dashboard
│   │   └── judge/            # Judge blind review
│   └── api/
│       ├── auth/[...nextauth] # NextAuth API
│       └── ocr/              # AI payment verification
├── components/
│   ├── landing/              # Landing page sections
│   ├── portal/               # Dashboard components
│   └── auth/                 # Auth components
└── lib/
    ├── auth.ts               # NextAuth config
    ├── prisma.ts             # DB client
    ├── data.ts               # Static content
    └── utils.ts              # Helpers
```

## 🛠️ Setup

### 1. Clone & Install

```bash
git clone https://github.com/your-org/karisma-6.git
cd karisma-6
npm install
```

### 2. Environment Variables

```bash
cp .env.example .env.local
```

Fill in:
- `DATABASE_URL` — PostgreSQL connection string (Supabase recommended)
- `NEXTAUTH_SECRET` — Run `openssl rand -base64 32`
- `NEXTAUTH_URL` — Your deployment URL
- `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` — From Google Cloud Console

### 3. Database Setup

```bash
npm run db:generate
npm run db:push
```

### 4. Add Images

Place the following in `public/images/`:
- `logo.png` — KARISMA logo (circular badge)
- `maskot.png` — KARISMA mascot character

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Set environment variables in Vercel dashboard → Settings → Environment Variables.

## 🗄️ Database Schema

Key models:
- **User** — Participants, judges, admins
- **Category** — Competition categories
- **Submission** — Participant submissions with blind scoring
- **Payment** — Payment records with OCR verification
- **Timeline** — Event schedule
- **Certificate** — Digital certificates with unique codes

## 📋 Features

- [x] Landing page with countdown timer
- [x] Google SSO authentication
- [x] Participant dashboard
- [x] Judge blind review panel
- [x] Payment verification (OCR hook)
- [ ] File upload to Supabase Storage
- [ ] Admin panel
- [ ] Certificate generation
- [ ] Email notifications

## 🎨 Design System

Colors defined in `tailwind.config.ts`:
- `karisma-primary` — Phoenix Red `#FF5B1F`
- `karisma-secondary` — Gold `#F5C76B`
- `karisma-dark` — Void Black `#05070B`
- `karisma-deep` — Ocean Blue `#071B34`

Fonts:
- Display: Cinzel (headers)
- Body: Plus Jakarta Sans

---

Made with ❤️ by HMJ SSP Undiksha | KARISMA 6 Committee
