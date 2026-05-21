export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} UpNext.</p>
        <p>Frontend built with Next.js App Router, TypeScript, and pnpm.</p>
      </div>
    </footer>
  );
}
