"use client";

import { BriefcaseBusiness, LayoutDashboard, UsersRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";

const items = [
  { href: routes.dashboard, icon: LayoutDashboard, label: "Tổng quan" },
  { href: routes.dashboardJobs, icon: BriefcaseBusiness, label: "Tin tuyển dụng" },
  { href: routes.dashboardApplications, icon: UsersRound, label: "Ứng tuyển" },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-border bg-surface px-4 py-4 lg:min-h-screen lg:border-b-0 lg:border-r">
      <Link className="mb-6 block px-2 text-xl font-semibold text-primary" href="/">
        UpNext
      </Link>
      <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              className={cn(
                "inline-flex min-w-max items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                active
                  ? "bg-teal-50 text-primary"
                  : "text-muted hover:bg-surface-subtle hover:text-foreground",
              )}
              href={item.href}
              key={item.href}
            >
              <Icon aria-hidden className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
