# 🕰️ PC History Timeline App

A responsive, accessible timeline web app built with **React**, **TypeScript**, and **Vite** — showcasing key milestones in personal computing history. Originally built with semantic HTML and vanilla TypeScript, now migrated to a modular React architecture.

---

## 🎯 Project Goals

- ✅ Semantic HTML layout with accessibility-first structure  
- ✅ Responsive design using Flexbox and Grid  
- ✅ Modular React components with strict TypeScript typing  
- ✅ Dynamic rendering of timeline events from `events.json`  
- ✅ Modal interactivity with full event details  
- ✅ Theme toggle for light/dark mode  
- ✅ Clean architecture with scalable component separation

---

## 🧱 Tech Stack

| Layer         | Tools Used                     |
|--------------|---------------------------------|
| Framework     | React + TypeScript             |
| Build Tool    | Vite                           |
| Styling       | CSS (global + responsive)      |
| Data          | Static JSON (`events.json`)    |
| Accessibility | Semantic HTML + ARIA roles     |

---

## 📁 Folder Structure
pc-history-timeline/
├── public/
│   ├── data/
│   │   └── events.json
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Timeline.tsx
│   │   ├── EventMarker.tsx
│   │   ├── Modal.tsx
│   │   └── FilterPanel.tsx
│   ├── styles/
│   │   └── style.css
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tsconfig.json
├── vite.config.ts

