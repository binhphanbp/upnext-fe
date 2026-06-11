"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Search, ChevronDown, ChevronRight, Bell } from "lucide-react";

import { Input } from "@/components/ui/input";
import { UpgradeModal } from "@/features/recuiter/components/company-billing";

export function RecruiterHeader() {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-gray-50">
      <div className="flex h-17 items-center justify-between gap-4 px-4">
        {/* Left section - Logo/Title and Search */}
        <div className="flex flex-1 items-center gap-3">
          {/* Logo and Title */}
          <Link
            href="/recruiter"
            className="flex items-center gap-2 text-gray-900 hover:text-gray-700"
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium whitespace-nowrap">
              Báo cáo tuyển dụng
            </span>
          </Link>

          {/* Search bar */}
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Tìm kiếm công việc, CV, công ty, kỹ năng..."
              className="h-9 w-full rounded-lg border-gray-200 bg-gray-50 pl-9 pr-4 text-sm placeholder:text-gray-400 focus:border-gray-300 focus:bg-white focus:ring-1 focus:ring-gray-300"
            />
          </div>
        </div>

        {/* Right section - Actions */}
        <div className="flex items-center gap-2">
          {/* Recruiter dropdown */}
          <button className="flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
            Nhà tuyển dụng
            <ChevronDown className="h-4 w-4" />
          </button>

          {/* Upgrade button with thunder icon and text */}
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="flex h-9 items-center gap-1.5 rounded-lg bg-yellow-400 px-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-yellow-500 cursor-pointer border-0"
          >
            <Image
              src="/thunder.svg"
              alt="Upgrade"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            Upgrade
          </button>

          {/* Notification button */}
          <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-50">
            <Bell className="h-5 w-5" />
          </button>

          {/* User avatar */}
          <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-600 text-sm font-semibold text-white transition-colors hover:bg-purple-700">
            V
          </button>

          {/* More options dropdown */}
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700">
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
      />
    </header>
  );
}
