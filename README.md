# 🎓 Knowledge Hunting

A fully responsive **Knowledge Sharing Platform** where students can post articles, like, and comment — fostering a learning community built with **React, Express.js, MongoDB, and Firebase Authentication**.

🌐 **Live Link:** [https://knowledge-hunting.web.app](https://knowledge-hunting.web.app)

---

## 🚀 Project Overview

Knowledge Hunting is a MERN stack application that empowers students to:
- Post insightful articles
- Engage through comments and likes
- Explore content by categories
- Manage their contributions
- Switch between light/dark themes

The app is designed to offer an engaging, user-friendly, and secure environment for knowledge exchange.

---

## ✨ Key Features

### 🔍 Public
- Browse all articles
- Filter by categories
- View full article details

### 🔐 Authenticated Users
- Post new articles
- Like and comment on articles
- View, edit, delete own articles
- Update content via pre-filled modal forms

### 🖼 UI & UX
- Responsive design (mobile/tablet/desktop)
- Hero slider on homepage
- Category listing & featured articles
- Light/Dark mode toggle
- Framer Motion animations

### 🔐 Authentication
- Firebase email/password login
- Google OAuth login
- JWT-based private route protection

---

## 🗂️ Tech Stack

### 🖥️ Frontend
- React 19
- React Router 7
- Tailwind CSS + DaisyUI
- Framer Motion
- Firebase Authentication
- Axios
- React Icons
- SweetAlert2
- React Hot Toast
- React Responsive Carousel
- Lottie React (for animation)
- React Simple Typewriter

### 🌐 Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- CORS + dotenv

---

## 🛡️ Security

- 🔒 Firebase config is secured using environment variables.
- 🔒 MongoDB credentials are secured using `.env`.
- 🔐 Firebase Authentication is used for secure user login and registration (Email/Password and Google OAuth).

-Upon successful login/registration, a JWT token is requested from the backend using the user’s Firebase ID token.

---

## 🗃️ MongoDB Collections

### `articles`:
```json
{
  "title": "The Future of AI",
  "content": "Detailed explanation...",
  "category": "Technology",
  "tags": ["AI", "Future"],
  "author_id": "...",
  "author_name": "...",
  "author_photo": "...",
  "date": "..."
}

