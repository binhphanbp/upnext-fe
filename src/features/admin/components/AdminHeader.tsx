"use client";

import { Search, ChevronRight, ChevronDown, Bell, Zap } from "lucide-react";
import { usePathname } from "next/navigation";

export function AdminHeader() {
  const pathname = usePathname();

  // Tạo breadcrumb động dựa trên URL (Có thể tùy biến thêm sau này)
  const pageTitle = pathname === "/admin" ? "Thống kê nền tảng" : "Quản trị hệ thống";

  return (
    <header className="topbar">
      <div className="breadcrumb">
        <ChevronRight size={15} color="#858897" />
        <span>{pageTitle}</span>
      </div>

      <div className="global-search">
        <Search size={15} />
        <input type="text" placeholder="Tìm việc, CV, công ty, kỹ năng..." />
      </div>

      <div className="top-actions">
        <button className="secondary-button small">
          Admin <ChevronDown size={14} style={{ marginLeft: "4px" }} />
        </button>
        <button className="upgrade">
          <Zap size={14} fill="currentColor" /> Nâng cấp
        </button>
        <button className="bell">
          <Bell size={16} />
          <i></i>
        </button>
        <button className="avatar">V</button>
      </div>
    </header>
  );
}
