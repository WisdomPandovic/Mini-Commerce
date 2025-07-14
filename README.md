# Mini-Commerce

A modern and responsive e-commerce web application built with Next.js 14, TypeScript, Zustand, and React Query. This application allows users to browse a product catalog, view detailed product information, manage a shopping cart, and complete a simple checkout flow.

---

## Project Overview

Mini-Commerce is a frontend technical assessment project that mimics a minimal e-commerce experience. It includes:

* Product listing and filtering
* Product detail pages
* Cart and checkout pages
* Order confirmation with a dynamic ID
* Persistent cart state
* Search and category filtering
* Error handling for fetch and navigation failures

---

## Design Approach

* **Layout:** Mobile-first and responsive grid using Tailwind CSS
* **Colors:** Clean white base with accent colors like yellow and pink to highlight call-to-actions
* **Typography:** Clear, accessible font sizes and spacing
* **Imagery:** Optimized with `next/image` for fast loading
* **Responsiveness:** CSS utility classes ensure grid adaptation across screen sizes

---

## Tools & Techniques

* **Framework:** Next.js 14 (App Router)
* **State Management:** Zustand for global cart state
* **Data Fetching:** React Query (@tanstack/react-query) for API calls, caching, and stale-while-revalidate
* **Type Checking:** TypeScript with `strict: true` and no `any` types
* **Styling:** Tailwind CSS, responsive design
* **Testing:** (Optional) Jest + React Testing Library structure prepared
* **CI/CD:** Not implemented

---

## SEO Strategy

* `meta` tags per page: title, description
* Open Graph tags: image, title, URL for sharing
* Structured data: JSON-LD schema for products
* `next/image` for automatic image optimization
* Semantic HTML for better indexing and accessibility

---

## Error-Handling Technique

* **Data Fetch Failures:**

  * Shown as clear UI messages when the product list fails to load
* **Cart Edge Cases:**

  * Graceful fallback for empty or invalid items
* **Navigation:**

  * Custom 404 page for unknown routes
* **Fallback UI:**

  * Spinners and retry messages using `isLoading` and `isError` from React Query

---

## TypeScript & ESLint

* `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "jsx": "preserve",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

* `.eslintrc.json`

```json
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "plugins": ["@typescript-eslint"],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "react/react-in-jsx-scope": "off"
  }
}
```

---

## Summary

This project is a robust foundation for a scalable e-commerce app. It demonstrates modern tooling, clean UI/UX practices, and production-level error handling and SEO strategies.
