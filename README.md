# Portfolio – Jennifer Thomas

Personal portfolio website built with Angular 17 to showcase my work as a junior frontend developer, my technical stack, and selected projects. It’s designed to be fast, accessible, responsive, and easy to maintain.

- Live site: https://www.jennifer-thomas.de
- Repository: https://github.com/TerrorDackel/PortfolioJenniferThomas
- Email: contact@jennifer-thomas.de
- LinkedIn: https://www.linkedin.com/in/jennifer-thomas-595735360/

---

## Preview

![Portfolio preview](src/assets/img/portfolio.png)

---

## Features

- Single-page portfolio built with Angular 17 (standalone components)
- Clear section structure: hero, skill set, projects, references, contact
- Responsive layout for mobile, tablet and desktop
- Sass architecture with reusable mixins and consistent breakpoints
- Smooth scrolling and subtle reveal animations
- Internationalization (DE/EN) with JSON translation files
- External links to live demos and GitHub repositories of my projects
- Accessibility improvements (semantic HTML, readable font sizes, focus states where applicable)

---

## Tech stack

- **Framework:** Angular 17 (standalone components)
- **Languages:** TypeScript, HTML5, Sass (indented syntax)
- **Tooling:** Angular CLI, npm
- **Quality:** ESLint (Angular ESLint)
- **Version control:** Git & GitHub

---

## Key implementation details

- **Architecture:** Standalone components + routing, clean separation of layout (header/content/footer)
- **Styling:** Sass partials (`_core.sass`, `_responsive.sass`) + global utilities and mixins
- **i18n:** Translation files in `src/assets/i18n` (`de.json`, `en.json`)
- **UX:** Scroll helpers + lightweight animations (kept subtle to stay professional)

---

## Project structure (high level)

- `src/app` – root component, routing and application shell
- `src/app/header` – header, navigation and language switcher
- `src/app/content` – main sections (hero, skill set, projects, contact, etc.)
- `src/app/footer` – footer with legal links
- `src/assets` – images, icons and translation files (`i18n`)
- `src/styles` – global styles, mixins and shared utilities

---

## Getting started

### Prerequisites

- Node.js (LTS)
- npm (comes with Node.js)

### Install & run

```bash
npm install
npm start

# Production build
npm run build

# Lint
npm run lint

# Unit tests (only if configured)
npm test

