<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Portfolio Website Development Guidelines

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion (later)
- Lenis (later)

Always prefer modern Next.js APIs.

Before implementing features, consult:
node_modules/next/dist/docs/

---

## Code Style

- Use TypeScript everywhere.
- Never use `any`.
- Prefer functional components.
- Use arrow functions.
- Prefer named exports unless a Next.js file requires a default export.
- Keep components under 200 lines where possible.
- Avoid duplicated code.

---

## Component Structure

Use this folder structure:

src/
    app/
    components/
        ui/
        layout/
        hero/
        about/
        projects/
        contact/
    hooks/
    lib/
    types/
    data/

---

## Styling

- Tailwind CSS only.
- Do not use inline styles unless absolutely necessary.
- Keep spacing consistent.
- Reuse utility classes.
- Prefer reusable UI components over repeated markup.

---

## Animations

Do not introduce animations unless requested.

When animations are added:

- Prefer Framer Motion.
- Keep animations subtle.
- Prioritize performance.
- Respect prefers-reduced-motion.

---

## Responsiveness

Desktop-first design.

Support:

- Mobile
- Tablet
- Desktop
- Ultrawide

Never hardcode viewport sizes.

---

## Accessibility

Every interactive element must:

- have keyboard support
- have visible focus styles
- include aria-labels when needed

---

## Performance

Prefer:

- next/image
- next/font
- Server Components where appropriate

Avoid unnecessary client components.

---

## Images

All images belong inside:

public/images/

SVG icons belong inside:

public/icons/

---

## Naming

Components:

Hero.tsx
Navbar.tsx
ProjectCard.tsx

Hooks:

useMousePosition.ts

Types:

project.ts

---

## Git

Write clean commit messages.

Examples:

feat: build hero section

fix: responsive navbar

refactor: simplify card component

---

## Important

Do not install additional packages unless requested.

Do not refactor unrelated files.

Do not change existing styling without a reason.

Always explain major architectural decisions before implementing them.

<!-- END:nextjs-agent-rules -->
