# ClearBill — AI-Powered Medical Bill Negotiation Platform

> Upload a bill. We audit every charge, fix errors, and negotiate savings. You only pay if we save you money.

**Live:** [clear-bill-landing-page.vercel.app](https://clear-bill-landing-page.vercel.app) &nbsp;|&nbsp; **Stack:** Next.js · TypeScript · React · MongoDB · OpenAI · Vercel

---

## What It Does

Americans are overbilled **$100B+ annually** on medical bills — through duplicate charges, upcoded CPT codes, and unbundled procedures. ClearBill fixes that.

1. **Upload** — patient submits a bill (PDF, JPG, or PNG) with optional context (provider, date, amount)
2. **AI Audit** — GPT-4o-mini (vision) reads the bill image, flags coding errors, identifies overcharges, and estimates a savings range
3. **Negotiation Script** — generates 3–5 specific talking points the patient can use with the provider
4. **Dashboard** — tracks audit status, surfaces savings found, and walks the user through approval
5. **Success-fee model** — patient pays nothing unless money is saved

---

## Key Features

| Feature | Details |
|---------|---------|
| **Bill OCR + Vision AI** | GPT-4o-mini reads uploaded bill images directly; no manual data entry |
| **Itemized Audit** | Flags duplicate charges, upcoded CPT codes, and unusually high line items |
| **Savings Estimator** | Interactive calculator projects savings before the user submits |
| **Negotiation Playbook** | Generates provider-specific talking points from the AI analysis |
| **Status Dashboard** | Real-time audit timeline: Uploaded → Auditing → Negotiating → Approved |
| **MongoDB Persistence** | User + Bill models; full audit trail stored per patient |
| **Milestone UX** | Badge system + confetti burst on savings approval |
| **Vercel Analytics** | Built-in page analytics via `@vercel/analytics` |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 |
| **UI Components** | Shadcn/ui (Radix UI primitives) · Lucide icons · Recharts |
| **AI / ML** | OpenAI GPT-4o-mini (vision + chat completions) |
| **Database** | MongoDB (Mongoose ODM) |
| **Deployment** | Vercel (serverless Node.js runtime) |
| **Forms** | React Hook Form + Zod validation |

---

## Architecture

```
app/
├── page.tsx                    # Landing page (Hero, How It Works, Calculator, Pricing, FAQ)
├── upload/                     # Bill submission flow
├── dashboard/                  # Per-patient audit dashboard
└── api/
    └── bills/route.ts          # Core API: upload → OpenAI vision → MongoDB → response

components/
├── sections/                   # Landing page sections (hero, pricing, security, etc.)
├── savings-calculator.tsx      # Interactive savings estimator
├── status-timeline.tsx         # Dashboard audit progress tracker
├── savings-meter.tsx           # Animated savings display
└── uploader.tsx                # File upload with drag-and-drop

lib/
├── mongodb.ts                  # Database connection
└── models/                     # User + Bill Mongoose schemas
```

**API flow (`POST /api/bills`):**
1. Parse `multipart/form-data` — file + patient metadata
2. Find-or-create `User` in MongoDB by email
3. Create `Bill` document in `pending` status
4. Convert file to base64 data URL for OpenAI vision
5. Call GPT-4o-mini with system prompt (certified medical coder persona)
6. Parse response → update `Bill` to `analyzed` with `analysisSummary`
7. Return `{ billId, summary }` to client

---

## Getting Started

```bash
git clone https://github.com/gababik/clear-bill-landing-page.git
cd clear-bill-landing-page
npm install

# Create .env.local
OPENAI_API_KEY=sk-...
MONGODB_URI=mongodb+srv://...

npm run dev
# → http://localhost:3000
```

---

## Business Context

Built as a full-stack prototype with customer discovery, financial modeling, and a patent abstract — demonstrating end-to-end product thinking from problem discovery through working software.

- **Market**: $100B+ annual medical billing error problem in the US
- **Model**: Success-fee (no savings → no charge)
- **Validation**: Customer discovery interviews, financial projections, patent abstract filed
- **Status**: Working prototype; ~2,900 lines of production-quality TypeScript

---

## Author

**George Babik** — Electrical Engineer + CS Minor, UC Riverside (Jun 2026)
[LinkedIn](https://linkedin.com/in/georgebabik) · [GitHub](https://github.com/gababik) · [Email](mailto:gbabi001@ucr.edu)
