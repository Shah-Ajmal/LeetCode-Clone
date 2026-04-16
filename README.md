# 🧩 LeetCode Clone

A full-stack coding practice platform built with **Next.js 16**, **Prisma**, **PostgreSQL**, and **Clerk Auth** — inspired by LeetCode. Users can browse coding problems, write solutions in an in-browser Monaco editor, and submit them for evaluation.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | JavaScript (React 19) |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | shadcn/ui, Radix UI, Lucide React |
| **Authentication** | Clerk |
| **ORM** | Prisma v7 (with `@prisma/adapter-pg`) |
| **Database** | PostgreSQL 15 (via Docker) |
| **Code Editor** | Monaco Editor (`@monaco-editor/react`) |
| **Form Handling** | React Hook Form + Zod |
| **Charts** | Recharts |
| **Dev Tools** | Docker Compose, ESLint |

---

## ✨ Features

- 🔐 **Authentication** — Secure sign-up/login via Clerk
- 📝 **Problem Listings** — Browse coding problems with difficulty tags
- 💻 **Monaco Code Editor** — In-browser IDE with syntax highlighting
- 📊 **Progress Tracking** — Charts and stats for solved problems
- 🗄️ **Database Backed** — PostgreSQL with Prisma ORM for problem and submission storage
- 🐳 **Dockerized DB** — One-command database setup with Docker Compose
- 🎨 **Responsive UI** — Dark/light theme support via `next-themes`
- 📐 **Resizable Panels** — Split-pane layout for problem description and editor

---

## 📁 Project Structure

```
LeetCode-Clone/
├── app/                    # Next.js App Router pages & API routes
├── components/             # Reusable UI components (shadcn/ui based)
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions, Prisma client
├── modules/                # Feature modules (problems, submissions, etc.)
├── prisma/                 # Prisma schema & migrations
│   └── schema.prisma
├── public/                 # Static assets
├── docker-compose.yml      # PostgreSQL Docker setup
├── prisma.config.ts        # Prisma configuration
└── next.config.mjs         # Next.js configuration
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Docker](https://www.docker.com/) & Docker Compose
- A [Clerk](https://clerk.com/) account for authentication

### 1. Clone the Repository

```bash
git clone https://github.com/Shah-Ajmal/LeetCode-Clone.git
cd LeetCode-Clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://postgres:postgres123@localhost:5433/leetcode"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### 4. Start the Database

```bash
docker compose up -d
```

This starts a PostgreSQL 15 instance on port `5433`.

### 5. Run Prisma Migrations

```bash
npx prisma migrate dev
```

### 6. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** `npm run dev` automatically starts the Docker containers before launching the Next.js dev server.

---

## 🐳 Docker Setup

The `docker-compose.yml` provisions a PostgreSQL database with the following defaults:

| Setting | Value |
|---|---|
| Database | `leetcode` |
| User | `postgres` |
| Password | `xxxxxxxx` |
| Port | `5433` (host) → `5432` (container) |

Data is persisted in the `leetcode_db_data` Docker volume.

---

## 📦 Key Dependencies

```json
"@clerk/nextjs"          – Authentication
"@monaco-editor/react"  – In-browser code editor
"@prisma/client"         – Database ORM
"react-hook-form"        – Form state management
"zod"                    – Schema validation
"react-resizable-panels" – Split-pane UI layout
"recharts"               – Progress charts
"next-themes"            – Dark/light mode
"shadcn/ui"              – UI component library
```

---

## 🔧 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Docker + Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🗺️ Roadmap

- [ ] Code execution & test case evaluation
- [ ] Submission history per user
- [ ] Leaderboard
- [ ] Problem difficulty filter & search
- [ ] Admin panel for adding new problems

---

## 📄 License

This project is for educational purposes. Built by [Shah Ajmal](https://github.com/Shah-Ajmal).