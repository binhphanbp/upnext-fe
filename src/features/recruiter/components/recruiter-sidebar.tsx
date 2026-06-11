"use client";

import { ChevronsLeft, Headphones } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarItems } from "@/features/recruiter/data/dashboard-data";
import { cn } from "@/lib/utils";

export function RecruiterSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen flex-col bg-white px-4 py-7 lg:flex">
      <Link
        className="relative mb-9 ml-1 block h-10 w-[170px] overflow-hidden"
        href="/recruiter"
      >
        <Image
          alt="UpNext"
          className="absolute -left-[26px] -top-[92px] h-[225px] w-[225px] max-w-none object-contain"
          height={225}
          priority
          src="/images/logo.png"
          width={225}
        />
      </Link>

      <nav className="space-y-3">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            (item.href !== "/recruiter" && pathname.startsWith(item.href));

          return (
            <Link
              className={cn(
                "flex h-13 items-center gap-3 rounded-lg px-5 text-sm font-semibold transition",
                active
                  ? "border border-emerald-100 bg-emerald-50/80 text-emerald-700 shadow-[0_12px_30px_rgba(16,185,129,0.08)]"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-950",
              )}
              href={item.href}
              key={item.href}
            >
              <Icon aria-hidden className="h-5 w-5 stroke-[1.8]" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-lg border border-slate-200 bg-white p-4 shadow-[0_18px_46px_rgba(15,23,42,0.06)]">
        <div className="flex gap-3">
          <Headphones aria-hidden className="mt-0.5 h-6 w-6 text-slate-700" />
          <div>
            <p className="text-sm font-bold text-slate-950">Bạn cần hỗ trợ?</p>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              Đội ngũ UpNext luôn sẵn sàng hỗ trợ bạn.
            </p>
          </div>
        </div>
        <button className="mt-5 h-9 w-full rounded-lg bg-emerald-600 text-sm font-bold text-white shadow-[0_10px_24px_rgba(5,150,105,0.24)] transition hover:bg-emerald-700">
          Liên hệ hỗ trợ
        </button>
      </div>

      <button className="mt-5 inline-flex items-center gap-3 px-3 text-sm font-semibold text-slate-500 transition hover:text-slate-900">
        <ChevronsLeft aria-hidden className="h-5 w-5" />
        Thu gọn
      </button>
    </aside>
  );
}
