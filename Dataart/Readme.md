# -js-school-project-JainVansh--
# 🕰️ PC History Timeline App

A responsive, accessible timeline web app built with semantic HTML, modern CSS, and modular TypeScript. This project dynamically renders historical computing events from a JSON file and displays full details in a modal popup using vanilla JS and ES modules.

---

## 🎯 Project Goals

- ✅ Semantic HTML layout with accessibility-first structure
- ✅ Responsive design using Flexbox and media queries
- ✅ Dynamic rendering of timeline events from `events.json`
- ✅ Modal interactivity with full event details
- ✅ Modular TypeScript architecture with strict typing
- ✅ Clean build pipeline using `tsc`

---

## 🧱 Tech Stack

- **HTML5**: Semantic structure with proper landmarks
- **CSS3**: Responsive layout and polished styling
- **TypeScript**: Static typing, modular code, and strict mode
- **ES Modules**: Separation of concerns via `fetcher.ts`, `renderer.ts`, `modal.ts`
- **Accessibility**: Alt attributes, ARIA roles, keyboard-friendly controls

---

## 📁 File Structure

```plaintext
dataart
├── index.html              # Semantic layout with script loader
├── style.css               # Responsive and accessible styling
├── logo.svg                # App logo
├── data/
│   └── events.json         # Timeline event data
├── src/
│   ├── index.ts            # Entry point
│   ├── fetcher.ts          # Loads and parses events.json
│   ├── renderer.ts         # Renders timeline events
│   ├── modal.ts            # Handles modal logic
│   └── types.ts            # TimelineEvent interface
├── dist/
│   └── *.js                # Compiled JS output
├── tsconfig.json           # TypeScript compiler config
└── README.md               # Project overview and roadmap
