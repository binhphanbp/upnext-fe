"use client";

import { Search, Bell, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export function AdminHeader() {
  const pathname = usePathname();

  const getPageTitle = () => {
    switch (pathname) {
      case "/admin":
        return "Thống kê nền tảng";
      case "/admin/employers":
        return "Nhà tuyển dụng";
      case "/admin/candidates":
        return "Ứng viên";
      case "/admin/jobs":
        return "Quản lý tin đăng";
      case "/admin/moderation":
        return "Kiểm duyệt nội dung";
      case "/admin/tickets":
        return "Trung tâm hỗ trợ";
      case "/admin/blog":
        return "Quản lý bài viết";
      case "/admin/sales":
        return "Sales CRM";
      case "/admin/transactions":
        return "Lịch sử giao dịch";
      case "/admin/plans":
        return "Gói dịch vụ";
      case "/admin/master-data":
        return "Dữ liệu gốc";
      case "/admin/roles":
        return "Vai trò & Phân quyền";
      case "/admin/audit":
        return "Audit Log";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 shrink-0">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md">
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-semibold text-slate-800">{getPageTitle()}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 w-64 transition-all"
          />
        </div>

        <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
        </button>

        <div className="w-8 h-8 bg-teal-100 text-teal-700 font-bold flex items-center justify-center rounded-full text-sm">
          A
        </div>
      </div>
    </header>
  );
}
