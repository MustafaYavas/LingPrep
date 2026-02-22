# AI Development Rules – React (TypeScript)

## 1. General Principles

- All new React projects MUST be initialized using Vite
- AI MUST NOT use Create React App, Next.js, or other scaffolding tools unless explicitly instructed
- Vite setup MUST include TypeScript template
- This project uses a **feature-oriented, scalable folder structure**.
- The folder structure MUST be followed exactly.
- AI MUST NOT create files or folders outside the defined structure.
- If a required file does not clearly fit any folder, STOP and ask for clarification.
- All source code MUST live under src/.
- TypeScript (.ts, .tsx) is mandatory.
- JavaScript is forbidden unless explicitly stated.

## 2 TypeScript Rules

- Using `any` is strictly **forbidden**
- `unknown` MUST be used only for:
  - API responses
  - External libraries
  - localStorage, sessionStorage
  - Environment variables
  - Any untrusted runtime input (e.g. JSON.parse, catch blocks, events)
- Internal application logic SHOULD rely on type inference.
- Explicit return types are REQUIRED for:
  - Public hooks
  - Services
  - Redux async thunks
- All component props must be defined with **explicit type/interface**
- `type` vs `interface`:
  - `interface` for object structures
  - `type` for unions, primitives, utility compositions
- Example:

```ts
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
```

## 3. Tech Stack & Styling

- **Styling:** **Tailwind CSS** only.
  - CSS files allowed only for global styles
- **HTTP:** **Axios** for all API calls.
- **State Management:**
  - Global cross-feature state → **@reduxjs/toolkit**
    - Async Redux logic MUST use:
      - createAsyncThunk OR feature-level services called inside thunks
  - Redux bindings → **react-redux**
  - Persistence → **redux-persist**.
- **Icons:** **Lucide React**.
- **Forms:** **Formik** with **Yup** for schema validation.
- **Testing:**
  - React Testing Library
  - Vitest or Jest (project-defined)

## 4. Root-Level Structure

```txt
src/
├─ app/
├─ components/
│  ├─ ui/
│  └─ layout/
├─ features/
├─ hooks/
├─ pages/
├─ services/
├─ store/
├─ styles/
├─ types/
├─ utils/
└─ main.tsx

AI MUST place all source code under src/.
```

## 5. Folder Responsibilities

`app/`

- Application-level setup and configuration.
- Examples:
  - App.tsx
  - routing configuration
  - providers (ThemeProvider, QueryClientProvider, etc.)
- No business logic.
- No feature logic.

`components/`

- Shared, reusable components.

`components/ui/`

- Pure, presentational UI components.
- No business logic, state management, API calls or side effects.
- Examples:
  - Button
  - Modal
  - Input
- Local UI state (e.g. input value) is allowed.

`components/layout/`

- Structural components that define page layout.
- Examples:
  - Header
  - Footer
  - Sidebar
  - PageLayout

`features/`

- Feature-based domain logic.
- Each feature has its own folder.
- A feature may include:
  - components
  - hooks
  - services
  - types

Example:

```
features/
└─ auth/
   ├─ components/
   ├─ hooks/
   ├─ services/
   ├─ async-thunks/
   ├─ types/
   └─ index.ts
```

Rules:

- Feature-specific Redux slices MUST live inside features/{feature}/store
  - `features/auth/store/authSlice.ts`
- Features MUST expose a public API via index.ts
- Feature public API MAY expose:
  - Hooks
  - Types
  - Selectors
  - Public components

- Feature public API MUST NOT expose:
  - Internal services
  - Internal hooks
  - Redux slice internals
- Other modules MUST import only from the feature root

✅ Allowed:

```ts
import { useAuth } from "@/features/auth";
```

❌ Forbidden:

```ts
import { useAuth } from "@/features/auth/hooks/useAuth";
```

`hooks/`

- Global, reusable custom hooks.
- Hooks that belong to a specific feature MUST live under that feature.
- Custom hooks must begin with the `use` prefix.

`pages/`

- Route-level components.
- Pages compose features and shared components.
- Pages MUST NOT contain reusable UI components.
- If a page-specific component becomes reused in another page or feature, it MUST be moved to components/ or features/{feature}/components.
- Page-specific components MAY exist under:

```txt
pages/{page-name}/components
```

Only if:

- They are not reused elsewhere
- They are tightly coupled to the page

`services/`

- Contains ONLY shared technical infrastructure
  - (Axios instance, interceptors, base clients)

- features/{feature}/services:
  - Contains domain-specific API calls
  - MUST use shared clients from services/
- Rules:
  - Components MUST NOT call Axios directly
  - Services MUST map technical errors to domain-level errors

`store/`

- Global, cross-feature Redux state only
- Feature-specific slices MUST NOT live here

`async-thunk/`

- Global, cross-feature async thunks only
- Feature-specific async thunks MUST live inside features/{feature}/async-thunk

`styles/`

- Global styles only.
- Examples:
  - CSS reset
  - Global typography
  - CSS variables
  - Tailwind base overrides

`types/`

- Shared TypeScript types and interfaces.
- Feature-specific types MUST live inside the feature folder.

`utils/`

- Pure utility functions.
- No React imports allowed.

## 6. Side Effects & Error Handling Rules

- Side effects MUST live only in:
  - hooks
  - services

- Components MUST NOT:
  - call fetch or axios directly
  - access Axios response details
  - parse HTTP or network errors

- Services MUST:
  - catch low-level technical errors (HTTP, network, Axios)
  - map them to domain-level errors
  - throw ONLY domain-level errors

All domain errors MUST:

- extend BaseDomainError
- include:
  - code: DomainErrorCode
  - message: string
  - cause?: unknown

Shared domain errors MUST live in:
src/types/errors OR src/utils/errors

## 7. Naming Conventions

Consistent naming is mandatory.  
AI MUST follow the rules below exactly.

`Files & Folders`

- Folder names → kebab-case → `user-profile`
- Component files → PascalCase → `LoginForm.tsx`
- Barrel files → index.ts only

---

`React Components`

- Component names → PascalCase → `UserCard`
- One component per file
- File name MUST match component name

Example:

```ts
// UserCard.tsx
export function UserCard() {}
```

`Hooks`

- MUST start with `use`
- camelCase only

Examples:

- ✅ useAuth
- ✅ useUserProfile
- ❌ authHook
- ❌ UseAuth

`Types & Interfaces`

- PascalCase
- No lowercase type names

Preferred:

```ts
export type User = {};
export interface AuthState {}
```

Avoid:

```ts
export type user = {};
```

`Constants`

- Constants MUST use UPPER_SNAKE_CASE

Example:

```ts
export const API_BASE_URL = "https://api.example.com";
```

`Functions & Variables`

- camelCase
- Boolean variables MUST start with:
  - is, has, can, should

```ts
const isAuthenticated = true;
const hasPermission = false;
```

`Feature Naming`

- Feature folder names MUST reflect a domain concept.
- Feature names MUST be singular.

Examples:

- ✅ auth
- ✅ user
- ❌ users
- ❌ authenticationFeature

## 8. Import Rules

- Path aliases (@/) MUST be used
- Relative imports are allowed within the same folder.

## 9. Forbidden Actions

- Creating new top-level folders
- Mixing feature logic into pages
- Placing business logic inside `components/ui`
- Deep imports into features
- Inline styles
- Ignoring rules for convenience

## 10. Decision Guide (AI Only)

Before writing code, ask:

1. Is this UI-only?
   → `components/ui`
2. Is this feature-specific logic?
   → `features/{feature-name}`
3. Is this reusable across features?
   → `hooks` or `utils`
4. Is this route-level composition?
   → `pages`

- AI MUST explicitly state which decision path was chosen before writing code.
