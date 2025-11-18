# 🎤 EchoHire — AI Mock Interview Platform  
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Vapi AI](https://img.shields.io/badge/Vapi_AI-ff69b4?style=for-the-badge&logo=ai&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)


Prepwise is an intelligent job interview preparation platform that uses **Vapi AI**, **Google Gemini**, and **Next.js** to simulate realistic voice-based interview sessions. Users can practice job interviews with an AI interviewer, receive personalized feedback, track past sessions, and continually improve their performance.

---

## ✨ Features

### 🔊 Real-Time AI Voice Interviews
- Conduct interviews using AI voice agents powered by **Vapi AI**
- Natural, conversational interview experience
- Real-time audio streaming
- Multiple interview styles (behavioral, technical, product, etc.)

### 🧠 AI-Powered Feedback
- Performance summary after each session
- Strengths & weaknesses analysis
- Areas for improvement
- Confidence, clarity, and relevance scoring

### 🗂️ Interview Management Dashboard
- View and track all past interviews
- Sort and filter interview history
- Optional audio replay
- Re-take interviews directly from dashboard

### 📝 Interview Setup
- Choose job role, difficulty, interview style
- Select number of questions
- Custom interview creation options

### 🔐 User Authentication
- Firebase authentication
- Email/password login + Google login
- Secure profile-linked interview storage

---

## 🛠️ Tech Stack

**Frontend**
- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript

**AI**
- Vapi AI (voice + streaming)
- Google Gemini (LLM feedback and evaluation)

**Backend**
- Next.js API routes
- Custom evaluation pipeline

**Database & Auth**
- Firebase Authentication
- Firebase Firestore

---

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
