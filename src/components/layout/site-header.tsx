import Link from "next/link";

import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";

const navigation = [
  { href: routes.jobs, label: "Việc làm" },
  { href: routes.dashboard, label: "Dashboard" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link className="text-xl font-semibold text-primary" href={routes.home}>
          UpNext
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              className="text-sm font-medium text-muted transition hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href={routes.login}>Đăng nhập</Link>
          </Button>
          <Button asChild>
            <Link href={routes.register}>Đăng ký</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
