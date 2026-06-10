# UpNext Frontend - Tong quan du an

## 1. Du an nay dung de lam gi

UpNext la frontend cho nen tang tuyen dung IT. Hien tai repo nay tap trung vao phan giao dien va khung kien truc, chua ket noi day du voi backend that.

Trang thai hien tai:

- Public site co trang chu, danh sach viec lam, chi tiet viec lam.
- Auth site co man hinh dang nhap, dang ky o muc UI.
- Dashboard co layout rieng va cac man hinh placeholder cho quan ly tin va ung tuyen.
- Feature `jobs` dang dung mock data de frontend co the phat trien doc lap.

## 2. Tech stack chinh

- Next.js `16.2.6` voi App Router
- React `19`
- TypeScript strict mode
- Tailwind CSS `4`
- TanStack Query cho client async state
- Zod de validate environment variables
- Vitest + Testing Library cho test
- ESLint + Prettier cho code quality
- Husky + lint-staged cho pre-commit
- Docker + Next standalone output cho runtime production

## 3. Cach ung dung duoc to chuc

Ung dung di theo 4 lop chinh:

1. `src/app`
   Dinh nghia route, layout, metadata, loading, error, not-found theo App Router.
2. `src/components`
   Shared UI va shared layout component.
3. `src/features`
   Logic theo nghiep vu. Hien tai co `jobs` va mot phan type cho `auth`.
4. `src/lib`
   Utility chung, env parsing, API client.

Huong to chuc nay dang dung dung tinh than cua App Router:

- route chi dieu phoi trang va layout
- feature giu logic nghiep vu
- component shared dung lai giua nhieu khu vuc
- `lib` giu ha tang dung chung

## 4. Luong chay tong the

### 4.1 Tu luc app khoi dong

Entry root la `src/app/layout.tsx`.

Tai day app:

- nap font `Geist` va `Geist_Mono`
- import `globals.css`
- khai bao `metadata` toan cuc
- wrap toan bo ung dung bang `Providers`

`src/app/providers.tsx` la client component, tao `QueryClient` cua TanStack Query va cung cap qua `QueryClientProvider`.

### 4.2 Luong render theo App Router

Repo dang chia route thanh 3 route group:

- `src/app/(public)` cho cac trang public
- `src/app/(auth)` cho login/register
- `src/app/(dashboard)` cho khu vuc dashboard

Luu y:

- Dau ngoac tron trong ten folder chi de group route.
- URL that su khong chua `(public)`, `(auth)`, `(dashboard)`.

Vi du:

- `src/app/(public)/page.tsx` -> `/`
- `src/app/(public)/jobs/page.tsx` -> `/jobs`
- `src/app/(public)/jobs/[slug]/page.tsx` -> `/jobs/:slug`
- `src/app/(auth)/login/page.tsx` -> `/login`
- `src/app/(dashboard)/dashboard/page.tsx` -> `/dashboard`

### 4.3 Luong du lieu cua feature jobs

Luong hien tai cua jobs rat thang:

1. Page goi service trong feature `jobs`
2. Service doc tu `mockJobs`
3. Service tra ve du lieu cho page
4. Page render bang component `JobCard` hoac giao dien chi tiet

Cu the:

- `getFeaturedJobs()` trong `src/features/jobs/lib/jobs-service.ts` loc job co `status === "published"`
- `getJobBySlug(slug)` tim job theo `slug`
- Nguon du lieu hien tai nam o `src/features/jobs/lib/mock-data.ts`
- Kieu du lieu chung nam o `src/types/job.ts`

Khi noi backend that, diem thay doi chinh se la:

- `src/features/jobs/lib/jobs-service.ts`
- `src/lib/api/http-client.ts`

UI page va component co the giu nguyen neu contract du lieu khong doi nhieu.

## 5. Luong hoat dong theo tung khu vuc

### 5.1 Public area

`src/app/(public)/layout.tsx` wrap toan bo trang public bang:

- `SiteHeader`
- `main`
- `SiteFooter`

#### Trang chu `/`

File: `src/app/(public)/page.tsx`

Luong:

1. page async goi `getFeaturedJobs()`
2. render hero section
3. render capability cards
4. render danh sach featured jobs bang `JobCard`

#### Trang jobs `/jobs`

File: `src/app/(public)/jobs/page.tsx`

Luong:

1. goi `getFeaturedJobs()`
2. render grid danh sach viec lam
3. hien thong diep ro rang rang hien tai dang dung mock data

#### Trang chi tiet jobs `/jobs/[slug]`

File: `src/app/(public)/jobs/[slug]/page.tsx`

Luong:

1. lay `slug` tu `params`
2. goi `getJobBySlug(slug)`
3. neu khong tim thay thi `notFound()`
4. neu co du lieu thi render thong tin job, skills, mo ta, quick info

### 5.2 Auth area

Auth area gom:

- `src/app/(auth)/login/page.tsx`
- `src/app/(auth)/register/page.tsx`

Trang thai hien tai:

- moi dung UI form
- chua co action submit that
- chua noi auth API
- chua co state dang nhap
- chua co middleware/guard

No phu hop voi muc tieu scaffold giao dien truoc, backend sau.

### 5.3 Dashboard area

Dashboard dung layout rieng:

- `src/app/(dashboard)/dashboard/layout.tsx`

Layout nay chia man hinh thanh:

- sidebar ben trai
- vung noi dung ben phai

Sidebar nam o:

- `src/components/dashboard/dashboard-sidebar.tsx`

Sidebar la client component vi no dung `usePathname()` de xac dinh menu dang active.

Man hinh trong dashboard:

- `/dashboard`: tong quan metric mau
- `/dashboard/jobs`: placeholder cho CRUD tin tuyen dung
- `/dashboard/applications`: placeholder cho pipeline ung vien

## 6. Routing, metadata va SEO

### Root metadata

`src/app/layout.tsx` khai bao metadata goc:

- `metadataBase`
- `title.default`
- `title.template`
- `description`

### Loading, error, not-found

Repo da co cac file xu ly App Router cap toan app:

- `src/app/loading.tsx`: spinner loading toan cuc
- `src/app/error.tsx`: error boundary UI
- `src/app/not-found.tsx`: trang 404

### SEO files

- `src/app/robots.ts`: tao `robots.txt`
- `src/app/sitemap.ts`: tao `sitemap.xml`

Hai file nay doc `NEXT_PUBLIC_APP_URL` tu env de tao URL day du.

## 7. Environment va cau hinh

### Env public

File: `src/lib/env/public.ts`

Dung `zod` de parse:

- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_API_URL`

Day la cac bien co the dung o client.

### Env server

File: `src/lib/env/server.ts`

Mo rong them:

- `APP_ENV`
- `INTERNAL_API_URL`

Y nghia:

- `NEXT_PUBLIC_API_URL` phuc vu cac request phia client
- `INTERNAL_API_URL` danh cho server-side call backend noi bo neu can

### Next config

File: `next.config.ts`

Dang bat:

- `output: "standalone"` de build production gon hon
- `poweredByHeader: false`
- `reactStrictMode: true`
- logging chi tiet cho fetch

## 8. API layer

File trung tam:

- `src/lib/api/http-client.ts`

Thanh phan chinh:

- `buildUrl(path)`: noi `NEXT_PUBLIC_API_URL` voi path
- `apiFetch<T>()`: wrapper quanh `fetch`
- `ApiError`: custom error co `status` va `payload`

Cach no hoat dong:

1. tao URL day du
2. set header `Accept: application/json`
3. neu `body` la object thi stringify JSON
4. auto them `Content-Type: application/json` khi phu hop
5. neu response fail thi nem `ApiError`
6. neu status `204` thi tra ve `undefined`
7. con lai parse JSON

Hien tai `jobs-service.ts` chua dung toi `apiFetch()`, nhung day la diem mo rong ro nhat khi noi backend.

## 9. Shared components va utility

### UI primitives

Nam trong `src/components/ui`:

- `button.tsx`
- `input.tsx`
- `badge.tsx`

Muc dich:

- tao mot lop UI nho, dung lai duoc
- dong nhat class Tailwind
- giam lap lai markup

### Layout components

- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`
- `src/components/dashboard/dashboard-sidebar.tsx`

### Utilities

`src/lib/utils.ts` cung cap ham `cn()`:

- gop class conditionally bang `clsx`
- resolve xung dot class Tailwind bang `tailwind-merge`

Test cho utility nay nam o:

- `src/lib/utils.test.ts`

## 10. Cau truc thu muc

```txt
.
|- .github/
|  \- workflows/
|     \- ci.yml
|- .husky/
|  \- pre-commit
|- public/
|  \- cac static asset (.svg, favicon...)
|- src/
|  |- app/
|  |  |- (auth)/
|  |  |  |- login/page.tsx
|  |  |  \- register/page.tsx
|  |  |- (dashboard)/
|  |  |  \- dashboard/
|  |  |     |- applications/page.tsx
|  |  |     |- jobs/page.tsx
|  |  |     |- layout.tsx
|  |  |     \- page.tsx
|  |  |- (public)/
|  |  |  |- jobs/
|  |  |  |  |- [slug]/page.tsx
|  |  |  |  \- page.tsx
|  |  |  |- layout.tsx
|  |  |  \- page.tsx
|  |  |- error.tsx
|  |  |- favicon.ico
|  |  |- globals.css
|  |  |- layout.tsx
|  |  |- loading.tsx
|  |  |- not-found.tsx
|  |  |- providers.tsx
|  |  |- robots.ts
|  |  \- sitemap.ts
|  |- components/
|  |  |- dashboard/
|  |  |- layout/
|  |  \- ui/
|  |- config/
|  |  |- routes.ts
|  |  \- site.ts
|  |- features/
|  |  |- auth/
|  |  \- jobs/
|  |- lib/
|  |  |- api/
|  |  |- env/
|  |  \- utils.ts
|  |- test/
|  |  \- setup.ts
|  \- types/
|     \- job.ts
|- Dockerfile
|- docker-compose.yml
|- eslint.config.mjs
|- next.config.ts
|- package.json
|- postcss.config.mjs
|- tsconfig.json
\- vitest.config.ts
```

## 11. Vai tro cua cac thu muc quan trong

### `src/app`

Noi duy nhat quyet dinh route public cua ung dung.

Nen dat trong thu muc nay:

- page
- layout
- loading
- error
- not-found
- metadata files

Khong nen dua business logic phuc tap vao day.

### `src/features`

Noi chua logic theo domain.

Hien tai:

- `features/jobs`: da co service, mock data, component card
- `features/auth`: moi co type

Khi du an lon hon, day la noi nen dat:

- services
- hooks nghiep vu
- feature-specific components
- dto / mappers / validators theo tung domain

### `src/components`

Noi chua thanh phan dung chung, khong gan chat voi mot feature duy nhat.

### `src/lib`

Noi chua utility va infrastructure:

- env
- API wrapper
- helper dung chung

### `src/types`

Noi dat cac type domain dung xuyen feature.

## 12. Testing va quality gate

### Test

Vitest config nam o `vitest.config.ts`:

- environment: `jsdom`
- globals: `true`
- setup file: `src/test/setup.ts`

Hien tai repo moi co test mau cho `cn()`.

### Lint va format

- ESLint config nam o `eslint.config.mjs`
- Prettier chay qua script package.json

### Git hooks

`.husky/pre-commit` chay:

```bash
pnpm lint-staged
```

Tuc la file duoc stage se bi lint/fix/format truoc khi commit.

### CI

`.github/workflows/ci.yml` dang chay:

1. `pnpm install --frozen-lockfile`
2. `pnpm lint`
3. `pnpm typecheck`
4. `pnpm test`
5. `pnpm format:check`
6. `pnpm build`

## 13. Docker va deploy

### Dockerfile

Dockerfile dung multi-stage build:

1. `deps`: cai dependency bang pnpm
2. `builder`: build Next app
3. `runner`: copy output standalone va chay production server

Loi ich:

- image nho hon
- runtime sach hon
- phu hop deploy production

### docker-compose

`docker-compose.yml` expose app qua cong `3000:3000`.

Env trong compose cho thay frontend du kien se noi backend qua:

- public URL: `http://localhost:4000/api`
- internal URL: `http://upnext-backend:4000/api`

## 14. Diem manh cua kien truc hien tai

- chia route bang App Router ro rang
- da tach layout public va dashboard
- co dat nen cho API layer va env validation
- feature `jobs` da co type -> data -> service -> UI
- co quality gate co ban cho local va CI
- co san Docker production path

## 15. Gioi han hien tai

- auth moi la UI, chua co submit logic
- dashboard moi la placeholder
- jobs dang dung mock data
- chua co state quan ly user/session
- chua co middleware bao ve route
- test coverage con rat mong

## 16. Thu tu nen mo rong tiep

Neu tiep tuc phat trien repo nay, thu tu hop ly la:

1. Noi `jobs-service.ts` vao backend that qua `apiFetch()`
2. Bo sung query hooks neu can client fetching
3. Xay auth flow that: login, register, session, route guard
4. Hoan thien dashboard jobs/applications
5. Them test cho feature va page quan trong

## 17. Ket luan ngan

Repo nay da co bo khung frontend kha sach cho mot recruitment platform:

- route organization ro
- phan tach shared UI / feature / infra hop ly
- de thay mock bang backend that
- phu hop de scale tiep theo feature

Neu can hieu nhanh du an, nen doc theo thu tu nay:

1. `package.json`
2. `src/app/layout.tsx`
3. `src/app/(public)/page.tsx`
4. `src/features/jobs/lib/jobs-service.ts`
5. `src/lib/api/http-client.ts`
6. `src/app/(dashboard)/dashboard/layout.tsx`
