# 🔗 Linkly - URL Shortener

<div align="center">

**A modern, fast, and secure URL Shortener built with Next.js and MongoDB.**

Generate short, shareable links instantly with a clean and responsive user interface.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge\&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge\&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge\&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</div>

---

## 📖 Overview

**Linkly** is a full-stack URL shortening application developed as part of my Full Stack Development learning journey.

The application allows users to convert long URLs into short, easy-to-share links. Every generated short URL is stored in MongoDB and redirects users to the original destination.

---

## ✨ Features

* 🔗 Generate short URLs instantly
* 🚀 Fast redirection to original URLs
* 💾 MongoDB database integration
* ⚡ Built with Next.js App Router
* 📱 Fully responsive interface
* 🎨 Modern UI with Tailwind CSS
* 🔒 Server-side API routes
* 📦 Clean project structure

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* React
* Tailwind CSS

### Backend

* Next.js API Routes
* MongoDB
* MongoDB Node.js Driver

### Tools

* Git & GitHub
* VS Code
* npm

---

## 📂 Project Structure

```text
Linkly/
│
├── app/
│   ├── api/
│   ├── shorten/
│   ├── [shorturl]/
│   └── layout.js
│
├── components/
│
├── lib/
│
├── public/
│
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Aaiyub-shaikh/Linkly.git
```

### 2. Navigate to the project

```bash
cd Linkly
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create Environment Variables

Create a file named:

```text
.env.local
```

Add:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 5. Run the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## ⚙️ How It Works

1. User enters a long URL.
2. The application generates a unique short identifier.
3. The mapping is stored in MongoDB.
4. Visiting the short URL redirects to the original website.


## 🎯 Learning Outcomes

This project helped me gain hands-on experience with:

* Next.js App Router
* Server Components
* API Routes
* MongoDB Integration
* CRUD Operations
* Environment Variables
* Dynamic Routing
* Responsive UI Design
* Full Stack Application Development

---

## 🔮 Future Improvements

* User Authentication
* QR Code Generation
* Click Analytics
* Custom Short URLs
* Link Expiration
* Dashboard
* Copy-to-Clipboard Animation
* Dark Mode
* Rate Limiting
* URL Validation

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

Feel free to fork this repository and submit a Pull Request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Aaiyub Shaikh**


GitHub: https://github.com/Aaiyub-shaikh

---

<div align="center">

### ⭐ If you found this project helpful, consider giving it a Star!

Made with ❤️ using **Next.js** and **MongoDB**

</div>
