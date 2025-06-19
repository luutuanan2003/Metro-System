
# Metro System Web App – Full Stack Setup

This project is a modern full-stack web application designed for the HCMC Metro System, with both operator (OPWA) and passenger (PAWA) interfaces. It uses the latest industry-standard tools and is fully cloud-deployable.

---

## 🔧 Tech Stack Overview

### ✅ Frontend – React + Next.js
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: File-based routing under `/app/`
- **Pages + APIs**: Defined in `/app/` using built-in Next.js API routes

### ✅ Backend – Node.js API via Next.js
- **Runtime**: Node.js v22
- **Backend API**: `/app/api/[route]/route.ts`
- **Data Modeling**: Mongoose (MongoDB ODM)
- **Utility Layer**: `/src/lib/mongodb.ts` to connect to MongoDB

### ✅ Database – MongoDB Atlas
- **Hosted on**: https://cloud.mongodb.com
- **Connection**: Secure via `MONGODB_URI` in `.env.local`
- **ODM**: Mongoose
- **Example**: `src/models/staff.model.ts`

---

## ☁️ Deployment Options

### Option A – Vercel (Recommended)
- Deploy frontend + backend API together
- Native Next.js support
- Serverless functions
- Easy GitHub integration

### Option B – AWS (Advanced)
- **Frontend**: Deploy static export to AWS S3 + CloudFront
- **Backend**: Run API via AWS Lambda or ECS
- **Database**: MongoDB Atlas or AWS DocumentDB

---

## 🌱 Environment Variables

`.env.local` (not committed):
```
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/MetroSystem?retryWrites=true&w=majority
```

---

## 📁 Folder Structure

```
metro-app/
├── app/                     # Next.js App Router structure
│   └── api/                 # Backend API routes
│       └── staff/route.ts   # Example GET endpoint
├── src/
│   ├── lib/mongodb.ts       # MongoDB connection utility
│   └── models/staff.model.ts# Mongoose schema
├── .env.local               # Environment secrets (excluded from Git)
├── tsconfig.json            # Path aliases (`@/`)
└── package.json             # Dependencies & scripts
```

---

## ✅ Setup Status

| Feature                    | Status       |
|----------------------------|--------------|
| Next.js app created        | ✅ done       |
| MongoDB connected          | ✅ done       |
| Staff model added          | ✅ done       |
| GET /api/staff route       | ⚠️ in progress|
| Deployment                 | 🚧 not yet    |

---

## 🚀 How to Continue

1. Finish `GET /api/staff` route (ensure `route.ts` exists)
2. Add `POST /api/staff` to insert data
3. Build UI form to submit + list staff
4. Deploy via Vercel or Amplify (see guide)

---

Generated with ❤️ by ChatGPT.
