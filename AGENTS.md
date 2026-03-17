# AGENTS.md

Welcome to the Burger Bliss React website repository. This file contains essential information for AI agents working on this codebase.

## Build/Lint/Test Commands

### Development
- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build` (runs TypeScript compiler + Vite build)
- **Preview production build**: `npm run preview`

### Code Quality
- **Lint all files**: `npm run lint`
- **Type check**: `npm run build` (includes `tsc -b`)

### Testing
Currently, there are no tests in this project. If you add tests:
- **Run all tests**: `npm test`
- **Run single test**: `npm test -- --run --reporter=verbose` (adjust based on test framework)
- **Watch mode**: `npm test -- --watch`

### Pre-commit/CI
- Run `npm run lint` and `npm run build` before committing.
- Ensure no TypeScript errors, lint errors, or unused variables.

## Code Style Guidelines

### 1. TypeScript & React
- **Functional components**: Use arrow functions with const.
- **Types**: Explicitly type all props, state, and returns. Use interfaces for objects.
- **Imports**: Use `import type` for type-only imports (required by `verbatimModuleSyntax`).
- **Strict mode**: Enabled (`strict: true`). No `any` types.
- **Unused variables**: `noUnusedLocals` and `noUnusedParameters` are enabled; fix all.

### 2. Imports
- **Order**: React imports first, then external libraries, then internal modules.
- **Grouping**: Separate groups with a blank line.
- **Path aliases**: Use relative paths (`../`, `./`). No absolute imports configured.

Example:
```tsx
import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/useCart';
import { CartItem } from '../contexts/CartContextInstance';
```

### 3. Formatting
- **No explicit formatter**: Use ESLint + Prettier? Not configured. Follow existing style:
  - 2-space indentation.
  - Single quotes for strings (JSX attributes double quotes).
  - Trailing commas in objects/arrays.
  - Line length: keep reasonable (< 100 chars).
- **Tailwind CSS**: Use utility classes directly. No custom CSS unless necessary.
  - Use custom colors defined in `tailwind.config.js`: `hamburger-bun`, `hamburger-meat`, etc.

### 4. Naming Conventions
- **Components**: PascalCase (e.g., `Header`, `CartProvider`).
- **Hooks**: camelCase with `use` prefix (e.g., `useCart`).
- **Variables/Functions**: camelCase.
- **Interfaces/Types**: PascalCase (e.g., `CartItem`, `CartContextType`).
- **Files**: PascalCase for components, camelCase for hooks/utils, kebab-case for configs (e.g., `tailwind.config.js`).

### 5. Error Handling
- **Context hooks**: Throw descriptive errors if used outside provider (see `useCart`).
- **Form validation**: Use HTML5 `required` attribute; minimal validation.
- **Async errors**: Use try-catch for async operations (e.g., API calls). Currently no API calls.

### 6. React Patterns
- **State management**: Use React Context API for global state (cart). Local state with `useState`.
- **Side effects**: Use `useEffect` sparingly; avoid memory leaks (cleanup).
- **Lists**: Always provide `key` prop.
- **Conditional rendering**: Use short-circuit `&&` or ternary.

### 7. Tailwind CSS
- **Custom colors**: Use `bg-hamburger-bun`, `text-hamburger-meat`, etc.
- **Responsive**: Use mobile-first breakpoints (e.g., `md:grid-cols-2`).
- **Dark mode**: Not implemented; can be added via `dark:` prefix.

### 8. Accessibility
- **Semantic HTML**: Use `<header>`, `<nav>`, `<main>`, `<footer>`.
- **ARIA labels**: Add `aria-label` to icon-only buttons.
- **Form labels**: Associate labels with inputs using `htmlFor`.

### 9. Performance
- **Memoization**: Use `React.memo` for heavy components if needed.
- **List optimization**: For large lists, consider virtualization (not implemented).
- **Bundle size**: Keep dependencies minimal.

### 10. Git Workflow
- **Branches**: Feature branches named `feature/short-description`.
- **Commits**: Use conventional commits (e.g., `feat: add cart functionality`, `fix: resolve lint errors`).
- **Pull Requests**: Run lint and build before merging.

## Existing Configurations

### ESLint
- Uses `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`.
- Configuration: `eslint.config.js`.

### TypeScript
- `verbatimModuleSyntax`: true → require `import type` for types.
- `strict`: true → all strict checks enabled.
- `noUncheckedSideEffectImports`: true → ensures imports have side effects.

### Tailwind CSS
- Version 4.2.1 with PostCSS plugin `@tailwindcss/postcss`.
- Custom color palette in `tailwind.config.js`.

## Common Tasks

### Adding a new component
1. Create file in `src/components/` (or `src/pages/` for page components).
2. Export default component.
3. Add imports using guidelines.
4. Run `npm run lint` to ensure no errors.

### Adding a new page
1. Create page component in `src/pages/`.
2. Add route in `src/App.tsx`.
3. Update navigation in `Header.tsx`.

### Adding a new dependency
- Runtime: `npm install <package>`
- Dev: `npm install -D <package>`
- Update `package-lock.json` automatically.

### Fixing lint errors
- Run `npm run lint` to see errors.
- Fix each error; many are auto-fixable with `--fix` (but not configured).
- Pay attention to React Refresh errors (only export components).

## OpenCode Custom Commands

### `/prompt` - Prompt Optimization
A custom command `/prompt` has been added to optimize prompts using Anthropic's prompting best practices. Use it in the OpenCode TUI:

```
/prompt this is the prompt to optimize
```

The command will:
1. Analyze the original prompt for clarity, specificity, and structure
2. Apply Anthropic's prompting best practices (clarity, examples, XML structuring, etc.)
3. Output an optimized prompt with explanations

The command is configured in `.opencode/commands/prompt.md` and `opencode.jsonc`.

## Notes for AI Agents
- **Respect existing patterns**: Follow the style of neighboring files.
- **No comments**: Avoid adding comments unless necessary (code should be self-explanatory).
- **Minimal changes**: When fixing bugs, only change the minimal necessary code.
- **Run commands**: Always run lint and build after making changes.
- **Check for unused code**: Remove any unused imports/variables.

## Contact
For questions about the codebase, refer to the README.md or inspect the existing code.

---

*Last updated: 2026-03-13*