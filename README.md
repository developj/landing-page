# LANDAS — React + Vite + Tailwind

**Live demo:** https://landing-page-woad-alpha.vercel.app/
<img width="1471" height="782" alt="Screenshot 2025-08-20 at 7 44 10" src="https://github.com/user-attachments/assets/c89a8d13-9779-486c-87fa-47dee0673dac" />
## Added only one module playwright, for end to end test
<img width="1064" height="721" alt="Screenshot 2025-08-20 at 7 35 03" src="https://github.com/user-attachments/assets/c9ce2288-3b3e-4ba2-afb2-e2cebc1a2dfd" />


A responsive landing/e-commerce UI built with **React 19**, **Vite**, **Tailwind CSS v4**, **Zustand** (cart), and **Playwright** for E2E tests. It includes a swipeable hero, a product showcase with mobile peeks and desktop paging, reusable UI primitives, and a navbar with a live cart count.
<img width="848" height="763" alt="Screenshot 2025-08-20 at 8 02 08" src="https://github.com/user-attachments/assets/62b91ac9-d7ca-4edb-8104-79391231c873" />

---

## ✨ Features

- **UI/Styling**
  - Tailwind CSS v4 with a design **theme** (CSS variables under `@theme { ... }`)
  - Reusable **Button**, **Input** (sizes + password toggle), **Checkbox**, **Card**, **BadgePill**, **Price**
- **Navigation**
  - Responsive **Navbar** with cart count (from Zustand) + mobile drawer
- **Showcase**
  - Mobile: horizontal **swipe** with side **peeks** + active card emphasis  
  - Desktop: **scrollable by pages**, dots map to pages (no peeks), manual scroll keeps dots in sync
  - **DotsPager** bar component (shared with hero)
- **Product Card**
  - Image gallery with colored dots, title/subtitle, price row, optional badge
  - **Click badge → add to cart** (Zustand)
- **State**
  - `useCart` store (persisted with localStorage) with `add/remove/setQty/clear`, `count/total` helpers
- **Testing**
  - **Playwright** tests for navbar & showcase; baseURL from env (fallback to localhost)

---

## 🧰 Tech stack

- **React** 19 • **Vite** 7 • **TypeScript** 5  
- **Tailwind CSS** 4 • **tailwind-merge**  
- **Zustand** 5  
- **Playwright** 1.54 (E2E Tests)  
- **ESLint** 9

---

## 🚀 Quickstart (Yarn)

```bash
# 1) Install deps
yarn

# 2) Start dev server (http://localhost:5173)
yarn dev

# 3) Type-check & build
yarn build

# 4) Preview production build
yarn preview

## End-to-end tests (Playwright)

The config reads BASE_URL and falls back to http://localhost:5173.

Run dev server in one terminal:

yarn dev

# Install browsers (first time / CI)
yarn playwright install --with-deps

# Headless run
yarn test:e2e

# Headed run
yarn test:e2e:headed

# Debug mode (inspector)
yarn test:e2e:debug

# UI mode
yarn test:e2e:ui

# Show last HTML report
yarn test:e2e:report

## No Test library was found, I installed playwright for tests




