"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FileText,
  Briefcase,
  Users,
  Database,
  Layers,
  Calendar,
  UsersRound,
  BarChart3,
  Building2,
  MoreHorizontal,
} from "lucide-react";

import { cn } from "@/lib/utils";

const employerLinks = [
  { href: "/recruiter", label: "Báo cáo tuyển dụng", icon: FileText, count: null },
  { href: "/recruiter/job-posts", label: "Tin tuyển dụng", icon: Briefcase, count: 36 },
  { href: "/recruiter/candidates", label: "Ứng viên", icon: Users, count: "1.2k" },
  { href: "/recruiter/talent-pool", label: "Nguồn nhân tài", icon: Database, count: 342 },
  { href: "/recruiter/pipeline", label: "Quy trình", icon: Layers, count: 82 },
  { href: "/recruiter/interviews", label: "Phỏng vấn", icon: Calendar, count: 18 },
  {
    href: "/recruiter/team-roles",
    label: "Nhóm & Vai trò",
    icon: UsersRound,
    count: null,
  },
  { href: "/recruiter/analytics", label: "Phân tích", icon: BarChart3, count: null },
  {
    href: "/recruiter/company-billing",
    label: "Công ty & Thanh toán",
    icon: Building2,
    count: null,
  },
];

export function RecruiterSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[230px] flex-col border-r border-gray-200 bg-gray-50">
      {/* Logo & Expand */}
      <div className="flex items-center justify-between border-b border-gray-200 px-2 py-3.5">
        <Link href="/" className="flex items-center h-10">
          <Image
            src="/images/logo.png"
            alt="UpNext"
            width={200}
            height={60}
            className="w-auto"
            priority
          />
        </Link>
        <button className="flex h-8 w-8 items-center justify-center text-gray-500 hover:text-gray-700">
          <Image
            src="/flower.svg"
            alt="Menu"
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {/* EMPLOYER Section */}
        <div>
          <h3 className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
            Nhà tuyển dụng
          </h3>
          <ul className="space-y-1.5">
            {employerLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg px-3 py-2 text-[5px] font-normal transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-gray-600 hover:bg-white hover:text-gray-900",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1">{link.label}</span>
                    {link.count && (
                      <span className="text-[12px] font-normal text-gray-400">
                        {link.count}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Footer: Pro hiring button */}
      <div className="border-t border-gray-200 p-3">
        <div className="flex items-center gap-2">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-xs font-semibold text-gray-900 transition-colors hover:bg-yellow-500">
            <Image
              src="/thunder.svg"
              alt="Pro hiring"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            Pro hiring
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
