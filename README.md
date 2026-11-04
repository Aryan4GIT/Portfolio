# Aryan Kumar Singh — Portfolio

A fast, aesthetic personal portfolio built with **Vite + React + Tailwind CSS v4 + Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (default http://localhost:5173).

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Deploy

- **Vercel** — push this folder to a GitHub repo, then "Import Project" on vercel.com. Framework preset: **Vite**. No extra config needed.
- **Netlify** — build command `npm run build`, publish directory `dist`.

## Edit your content

Everything you'd want to change (bio, experience, projects, skills, links) lives in one file:

```
src/data/content.js
```

Update the values there and the whole site updates. No need to touch the components.

Project screenshots live in `public/work/`. Run `npm test` after editing to catch a missing image or a broken project entry.

## Structure

```
src/
  data/content.js       ← all your text & links (edit here)
  components/           ← Hero, About, Experience, Projects, Skills, Contact...
  index.css             ← design tokens (colors, fonts)
  App.jsx               ← page layout
```
