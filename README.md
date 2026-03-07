# 🧠 Insight AI — AI Text Summarizer

![React](https://img.shields.io/badge/React-18-blue)

![Vite](https://img.shields.io/badge/Vite-Frontend-purple)

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-UI-38BDF8)

![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-orange)

![Status](https://img.shields.io/badge/Status-Completed-success)

🚀 **Insight AI** is a fast and minimal AI-powered tool that transforms long text into **clear summaries, key insights, or bullet points** using **Google Gemini AI**.

Paste large content and instantly generate structured insights with **adjustable summary styles and lengths**.

Designed as a **clean single-page React application**, the focus is on **simplicity, usability, and reliable AI integration**.

---

# ✨ Key Features

### 🤖 AI Powered Summarization

Generate intelligent summaries using **Google Gemini AI**.

### 📑 Multiple Summary Modes

Choose between **Summary**, **Key Insights**, or **Bullet Points**.

### 📏 Adjustable Summary Length

Generate **Short**, **Medium**, or **Detailed** summaries.

### 🔢 Live Word & Character Counter

Instantly see how much text you are analyzing.

### 📋 Copy to Clipboard

Quickly copy generated summaries with a single click.

### ⚡ Fast & Responsive UI

Mobile-first design with a clean and responsive interface.

### 🛡 Safe AI Response Handling

Structured **JSON parsing** prevents malformed AI responses and ensures reliable output.

---

# 🧩 Summary Modes

## 📄 Summary

Generates a concise paragraph explaining the **core idea of the text**.

---

## 💡 Key Insights

Structured output including:

- Summary
- Key Points
- Keywords

---

## 📌 Bullet Points

Extracts the **most important ideas** in bullet-point format for quick readability.

---

# 📏 Summary Length Options

### Short

Quick overview with minimal explanation.

### Medium

Balanced summary capturing the **main ideas and context**.

### Long

Detailed explanation covering **multiple concepts and deeper insights**.

---

# ⚙️ Tech Stack

| Technology           | Purpose             |
| -------------------- | ------------------- |
| ⚛️ React             | UI Library          |
| ⚡ Vite              | Frontend Build Tool |
| 🎨 Tailwind CSS      | Styling             |
| 🤖 Google Gemini API | AI Text Processing  |
| 🟨 JavaScript        | Application Logic   |

---

# 🏗 Project Architecture

```
src
│
├── assets       → icons & images
├── constants    → API URLs, constants, configs
├── generic      → reusable components
├── page         → container logic (data layer)
├── service      → Gemini API integration (service layer)
├── ui           → UI components (ui layer)
├── utility      → helper functions
├── App.jsx
└── main.jsx
```

This structure follows a **layered architecture**, separating:

- UI rendering
- business logic
- API services
- utilities

---

# ⚡ How It Works

1️⃣ User pastes long text
2️⃣ Selects **summary mode** and **length**
3️⃣ Request is sent to **Google Gemini AI**
4️⃣ AI returns **structured JSON output**
5️⃣ UI parses and renders the summary instantly

---

# 📋 Example Output

### Summary

Artificial Intelligence has rapidly evolved and is now integrated into many aspects of modern life.

### Key Points

• AI powers recommendation systems and healthcare diagnostics
• Autonomous vehicles are a major AI application
• Ethical concerns such as privacy and bias are emerging

### Keywords

Artificial Intelligence, Healthcare AI, Autonomous Vehicles

---

# 📸 Screenshots

## Main Screens

![Web Screen](/screenshots/1.png)
![Mobile View](/screenshots/5.png)

---

## Text Input + Mode Selection

![Web Screen](/screenshots/2.png)
![Mobile View](/screenshots/6.png)

---

## Summary Generation

![Web Screen](/screenshots/4.png)
![Mobile Viewport](/screenshots/6.png)
![Mobile Full View](/screenshots/7.png)

---

# 🔑 Environment Setup

Create a `.env.local` file in the project root and add your **Gemini API key**.

Example:

```
VITE_GEMINI_KEY=your_api_key_here
```

---

# 🚀 Running the Project

### Clone the repository

```
git clone <repository-url>
```

### Navigate to the project folder

```
cd insight-ai
```

### Install dependencies

```
npm install
```

### Run the development server

```
npm run dev
```

---

# 🌍 Deployment

This project can be easily deployed on:

- Netlify
- Vercel
- GitHub Pages

---

# 📄 License

This project is built for **learning and portfolio purposes**.

![Portfolio Project](https://img.shields.io/badge/Portfolio-Project-blue)

---

# 👨‍💻 Author

**Prashant Nath**
Frontend Developer — React | JavaScript | UI Engineering

---

💡 Built to demonstrate **AI integration in modern frontend applications using React**.
