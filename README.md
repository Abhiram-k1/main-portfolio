<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Space+Grotesk&weight=700&size=32&pause=1000&color=B5572B&center=true&vCenter=true&random=false&width=600&lines=Kundurthi+Abhiram;AI+%26+Data+Science+Portfolio;Building+Things+That+Matter" alt="Typing SVG" />

<br/>

[![Portfolio Live](https://img.shields.io/badge/🌐_Portfolio-Live-b5572b?style=for-the-badge)](https://main-portfolio-abhiram.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-Abhiram--k1-181717?style=for-the-badge&logo=github)](https://github.com/Abhiram-k1)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail)](mailto:abhi8904876457@gmail.com)

<br/>

**B.Tech — Artificial Intelligence & Data Science**  
*Amrita Vishwa Vidyapeetham, Faridabad (NCR) · NIRF 2025 Rank #17*

</div>

---

## ✨ Portfolio Overview

This is the source code for my personal portfolio website — a **Next.js 14** application built with **Tailwind CSS**, **Framer Motion**, and a custom **multi-theme design system**. It showcases my projects, experience, skills, and certifications in the field of AI, Data Science, and Software Engineering.

> **"Turning data into decisions, models into impact."**

---

## 🖥️ Live Demo

🔗 **[https://main-portfolio-abhiram.netlify.app](https://main-portfolio-abhiram.netlify.app)**

---

## 🎨 Features

| Feature | Details |
|---|---|
| ⚡ **Framework** | Next.js 14 (App Router, Static Export) |
| 🎨 **Styling** | Tailwind CSS v3 + Custom CSS design tokens |
| 🌈 **Theme Switcher** | 4 Premium palettes: Light Sand, Dark Carbon, Cyber Circuit, Nordic Frost |
| 🎬 **Animations** | Framer Motion (scroll-triggered, fade-up) |
| 📱 **Responsive** | Mobile-first, fully responsive layout |
| ♿ **Accessible** | Focus states, reduced motion support, semantic HTML |
| 🔡 **Typography** | Space Grotesk · Inter · IBM Plex Mono (Google Fonts) |
| 📊 **Performance** | Fully statically generated — 100/100 Lighthouse scores |

---

## 🎨 Color Themes

Switch themes live using the 🎨 Palette button in the navigation bar:

| Theme | Description | Accent |
|---|---|---|
| ☀️ **Light Sand & Copper** | Warm grid-paper aesthetic | `#b5572b` Oxidized Copper |
| 🌑 **Dark Carbon & Gold** | Sleek dark editor mode | `#d97706` Amber Gold |
| ⚡ **Cyber Circuit** | Matrix-inspired terminal dark | `#10b981` Emerald Green |
| ❄️ **Nordic Frost** | Clean arctic light mode | `#0284c7` Ice Blue |

---

## 🏗️ Project Structure

```
savya-portfolio/
├── app/
│   ├── globals.css        # Design tokens + 4 theme definitions
│   ├── layout.tsx         # Root layout with Google Fonts
│   └── page.tsx           # Main homepage
├── components/
│   ├── Navbar.tsx         # Navigation + ThemeSwitcher dropdown
│   ├── Hero.tsx           # Hero section with animated tagline
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Work & internship history
│   ├── Projects.tsx       # Project cards (signature + standard)
│   ├── Skills.tsx         # Skills & tech stack grid
│   ├── Contact.tsx        # Contact section
│   └── CircuitPulse.tsx   # Animated SVG circuit decoration
├── lib/
│   ├── data.ts            # All portfolio content (projects, experience, etc.)
│   └── utils.ts           # Utility functions (cn, clsx)
├── public/                # Static assets
├── tailwind.config.ts     # Custom Tailwind tokens
├── next.config.mjs        # Next.js configuration
└── package.json           # Dependencies
```

---

## 🚀 Featured Projects

### 🔐 AKA Key Compromise Predictor ML Framework
> **Tech:** Python · FastAPI · XGBoost · Streamlit · SHAP (Explainable AI)

Predicts session-key compromise in cryptographic exchanges (DH, TLS, SSH) **before** channel establishment. Features:
- Real-time scoring via FastAPI WebSocket streams
- Isotonic regression probability calibration (0–100 risk score)
- SHAP waterfall plots for per-prediction explainability
- **98.4% ROC-AUC** performance

---

### 🏛️ PlaceNext — Placement Portal
> **Tech:** Node.js · Express · PostgreSQL · Socket.IO · JWT

Enterprise-grade multi-tenant placement management system:
- Connects students, company HRs, and institutional TPOs
- Real-time hiring pipeline updates via WebSockets
- Secure JWT multi-role authentication (Student / Company / TPO / Admin)
- Robust relational schema and interactive analytics dashboard

---

### ⚡ Piezoelectric Footstep Power Generator
> **Tech:** Arduino · Raspberry Pi · ThingSpeak · IoT

*🏆 Best Hardware Project Award — Amrita Vishwa Vidyapeetham*

IoT system converting footstep mechanical energy into electricity:
- Piezoelectric sensor array + signal conditioning circuits
- Real-time cloud telemetry dashboard via ThingSpeak
- Demonstrated sustainable energy harvesting in public spaces

---

### 🔒 Secure Cryptography Communication Simulator
> **Tech:** Python · Streamlit · RSA · Elliptic Curve Cryptography · SHA

Interactive end-to-end encrypted communication simulator:
- Diffie-Hellman key exchange visualization
- ECC signature generation and verification
- RSA asymmetric encryption + SHA message integrity hashing

---

## 🛠️ Tech Stack

**Languages:** Python · R · Java · C · C++ · HTML  
**ML/AI:** Scikit-learn · TensorFlow · XGBoost · SHAP · OpenCV  
**Data:** Pandas · NumPy · Matplotlib · Seaborn · Sweetviz  
**Web:** React · Next.js · Node.js · Express · Flask · Streamlit  
**Databases:** PostgreSQL · SQL  
**Cloud:** Google Cloud · Vertex AI · ThingSpeak · Netlify  
**Tools:** Git · GitHub · Jupyter · Figma · Arduino IDE · Docker

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Abhiram-k1/main-portfolio.git

# Navigate to project directory
cd main-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Build for Production

```bash
npm run build
```

---

## 🚀 Deployment on Netlify

This portfolio is deployed on Netlify with the following configuration:

| Setting | Value |
|---|---|
| **Build Command** | `npm run build` |
| **Publish Directory** | `out` |
| **Node Version** | `18` |

The `next.config.mjs` is configured with `output: 'export'` for static site generation, making it compatible with Netlify's CDN.

---

## 📜 Certifications

- Oracle Cloud Infrastructure 2025 AI Foundations Associate
- Goldman Sachs Risk Job Simulation (Forage)
- Quantium Data Analytics Job Simulation (Forage)
- AI Agents and Agentic AI — Vanderbilt University (Coursera)
- Build Real World AI Apps with Gemini & Imagen (Google)
- Getting Started with AI on Jetson Nano (NVIDIA)
- Data Visualization with Python (IBM)
- Introduction to LLMs (Google Cloud Skills Boost)

---

## 🏆 Achievements

- 🥇 **Best Hardware Project Award** — Amrita Vishwa Vidyapeetham (2025)
- 🏆 **Top 1610 Rank** — IICPC CodeFest'25 Prelims
- 🥇 **IGKO Gold Medalist** — Level 2 (SOF, 2020)
- 🤖 **AI Club President** — ASOAI, Amrita Vishwa Vidyapeetham
- 🌐 **Google Student Ambassador** — Campus AI & Cloud outreach

---

## 📬 Contact

| Platform | Link |
|---|---|
| 📧 **Email** | [abhi8904876457@gmail.com](mailto:abhi8904876457@gmail.com) |
| 🐙 **GitHub** | [github.com/Abhiram-k1](https://github.com/Abhiram-k1) |
| 💼 **LinkedIn** | [linkedin.com/in/kundurthi-abhiram](https://linkedin.com) |
| 📞 **Phone** | +91 7795747952 |

---

<div align="center">

Made with ❤️ by **Kundurthi Abhiram**  
*B.Tech AI & Data Science · Amrita Vishwa Vidyapeetham*

⭐ **If you find this portfolio inspiring, leave a star!** ⭐

</div>
