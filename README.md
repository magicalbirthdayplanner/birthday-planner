# 🎉 Magical Birthday Planner

AI-powered birthday party planning for children aged 0-12.

## ✨ Features

- **AI Theme Recommendations** - GPT-4o powered personalized theme suggestions
- **3-Step Party Wizard** - Easy party creation with child info, theme selection, and details
- **Guest Management** - Track RSVPs, dietary requirements, and VIP status
- **Smart Timeline** - Automated checklists and task tracking
- **Responsive Design** - Beautiful UI that works on all devices
- **Subscription Plans** - Starter (Free), Plus ($19/mo), Pro ($49/mo)

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Auth:** Supabase Auth
- **AI:** OpenAI GPT-4o
- **Deployment:** Vercel

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your credentials

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

## 📁 Project Structure

```
├── prisma/              # Database schema
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # React components
│   ├── lib/            # Utilities and data
│   └── types/          # TypeScript types
├── public/             # Static assets
└── tailwind.config.ts  # Tailwind configuration
```

## 🔐 Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=
OPENAI_API_KEY=
RESEND_API_KEY=
```

## 📄 License

MIT
