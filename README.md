# Vite + React Template

A small template for Vite + React projects. It includes only the tooling needed to build, lint, format, type-check, and test. Product decisions like routing, data fetching, and forms are left to each project, with recommendations [below](#recommended-additions).

## What's included

| Tool | Purpose |
| --- | --- |
| [Vite](https://vite.dev) | Dev server and bundler |
| [React](https://react.dev) | UI library |
| [TypeScript](https://www.typescriptlang.org) | Type safety (`strict` mode) |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [Biome](https://biomejs.dev) | Linting, formatting, and import sorting |
| [Vitest](https://vitest.dev) | Test runner |
| [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | Component testing (with `jest-dom` and `user-event`) |
| [pnpm](https://pnpm.io) | Package manager (required) |

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm test` | Run tests with Vitest |
| `pnpm lint` | Lint with Biome |
| `pnpm format` | Format with Biome |

## Import alias

Imports can start with `@/`, which maps to `src/`:

```ts
import { Button } from "@/components/button";
```

The alias is configured in two places, and both must stay in sync:

- `tsconfig.app.json` (`compilerOptions.paths`), for the editor and type-checker
- `vite.config.ts` (`resolve.alias`), for Vite and Vitest

## Testing

Tests run in a DOM environment (jsdom) with [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom) matchers loaded from `src/test/setup.ts`. Put tests next to the code they cover, named `*.test.ts` or `*.test.tsx`.

```bash
pnpm test           # Run once / watch, depending on your Vitest config
pnpm test --run     # Run once and exit
```

## Recommended additions
### Components and state

| Need | Recommendation | Install |
| --- | --- | --- |
| UI components | [shadcn/ui](https://ui.shadcn.com) | `pnpm dlx shadcn@latest init` |
| Client state | [Zustand](https://zustand.docs.pmnd.rs) | `pnpm add zustand` |
| Server state (fetching, caching) | [TanStack Query](https://tanstack.com/query) | `pnpm add @tanstack/react-query` |
| Icons | [lucide-react](https://lucide.dev) | `pnpm add lucide-react` |

> shadcn's `init` modifies your config and adds dependencies (such as `clsx` and `tailwind-merge` for the `cn()` helper), so run it when you actually need it.

### Routing, forms, and validation

| Need | Recommendation | Install |
| --- | --- | --- |
| Routing |  [TanStack Router](https://tanstack.com/router) | `pnpm add @tanstack/react-router` |
| Validation | [Zod](https://zod.dev) | `pnpm add zod` |
| Forms | [react-hook-form](https://react-hook-form.com) + resolvers | `pnpm add react-hook-form @hookform/resolvers` |

### Testing and quality

| Need | Recommendation | Install |
| --- | --- | --- |
| Mocking APIs in tests | [MSW](https://mswjs.io) | `pnpm add -D msw` |
| End-to-end tests | [Playwright](https://playwright.dev) | `pnpm create playwright` |
| Git hooks | [Husky](https://typicode.github.io/husky) + [lint-staged](https://github.com/lint-staged/lint-staged), or [lefthook](https://github.com/evilmartians/lefthook) | See each project's docs |
