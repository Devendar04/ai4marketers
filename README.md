# AI4Marketers — Vite + React + Tailwind

Workshop landing page by Sai Ganesh, converted to a Vite + React + Tailwind project.

## Quick start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project structure

```
ai4marketers/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css            ← Tailwind directives + custom utilities
    ├── hooks/
    │   └── useFadeUp.js     ← IntersectionObserver fade-in hook
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Problem.jsx
        ├── Phases.jsx
        ├── Curriculum.jsx
        ├── Audience.jsx
        ├── About.jsx
        ├── Brands.jsx
        ├── Testimonial.jsx
        ├── CTA.jsx
        └── Footer.jsx
```

## Customisation

- **Brand colours** — edit `tailwind.config.js` → `theme.extend.colors`
- **Content** — each section is its own component in `src/components/`
- **Animations** — the `useFadeUp` hook in `src/hooks/useFadeUp.js` drives all scroll-triggered fade-ins
