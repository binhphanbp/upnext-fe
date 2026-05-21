# UpNext Frontend

Frontend cho website hệ thống tuyển dụng IT UpNext, xây dựng bằng Next.js App
Router 16, TypeScript, Tailwind CSS 4 và pnpm.

## Tech Stack

- Next.js `16.2.6` App Router
- React `19`
- TypeScript strict mode
- Tailwind CSS `4`
- TanStack Query cho client-side async state
- Zod cho environment validation
- ESLint, Prettier, Vitest, Testing Library
- Husky + lint-staged cho pre-commit quality gate
- Docker production image với Next standalone output
- GitHub Actions CI: lint, typecheck, test, format check, build

## Chạy Local

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Mở `http://localhost:3000`.

## Scripts

```bash
pnpm dev            # chạy development server
pnpm build          # production build
pnpm start          # chạy Next production server
pnpm lint           # ESLint
pnpm typecheck      # TypeScript noEmit
pnpm test           # Vitest
pnpm format         # Prettier write
pnpm format:check   # Prettier check
pnpm validate       # lint + typecheck + test + format:check
```

## Environment

```bash
APP_ENV=development
NEXT_PUBLIC_APP_NAME=UpNext
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:4000/api
INTERNAL_API_URL=http://backend:4000/api
```

Chỉ biến có prefix `NEXT_PUBLIC_` được dùng ở client. Các biến còn lại chỉ
dùng trong server code.

## Cấu Trúc Source

```txt
src/
  app/                 # App Router routes, layouts, loading, error, metadata
  components/          # UI/layout/dashboard shared components
  config/              # routes, site config
  features/            # module theo nghiệp vụ: auth, jobs, ...
  lib/                 # api client, env, utils
  test/                # test setup
  types/               # shared domain types
```

Quy ước scale:

- Route chỉ điều phối layout/data, logic nghiệp vụ đặt trong `features/*`.
- API gọi backend đặt ở `lib/api` hoặc service trong từng feature.
- Type dùng chung đặt ở `types`, type riêng của feature đặt trong feature đó.
- Component dùng lại toàn app đặt ở `components`, component riêng feature đặt
  trong `features/<name>/components`.

## Docker

```bash
docker compose up --build
```

Image production dùng `next.config.ts` với `output: "standalone"` để giảm kích
thước runtime.

## Git Hooks

Sau `pnpm install`, script `prepare` kích hoạt Husky. Pre-commit chạy
`lint-staged` để format và lint các file được stage.

## Backend Integration

Hiện feature `jobs` dùng mock data để frontend phát triển độc lập. Khi backend
NestJS sẵn sàng, thay implementation trong:

- `src/features/jobs/lib/jobs-service.ts`
- `src/lib/api/http-client.ts`

Giữ contract type ở `src/types` đồng bộ với DTO/OpenAPI từ backend.
