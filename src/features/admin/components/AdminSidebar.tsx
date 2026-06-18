"use client";

import {
  BarChart3,
  Building2,
  Users,
  ClipboardList,
  ShieldAlert,
  LifeBuoy,
  BookOpen,
  TrendingUp,
  Receipt,
  Package,
  Database,
  Settings,
  ScrollText,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({
  href,
  icon: Icon,
  label,
  badge,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  badge?: number;
}) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors ${
        active
          ? "bg-teal-50 text-teal-700 font-medium"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} className={active ? "text-teal-600" : "text-slate-500"} />
        <span className="text-sm">{label}</span>
      </div>
      {badge && (
        <span className="bg-rose-100 text-rose-600 px-2 py-0.5 rounded-full text-xs font-bold">
          {badge}
        </span>
      )}
    </Link>
  );
};

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full hidden md:flex shrink-0">
      <div className="h-16 flex items-center px-6 border-b border-slate-200 shrink-0">
        <span className="text-xl font-bold text-slate-800 tracking-tight">UPNEXT</span>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
          <NavItem href="/admin" icon={BarChart3} label="Thống kê nền tảng" />
        </div>

        <div>
          <p className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Quản lý Người dùng
          </p>
          <div className="space-y-1">
            <NavItem href="/admin/employers" icon={Building2} label="Nhà tuyển dụng" />
            <NavItem href="/admin/candidates" icon={Users} label="Ứng viên" />
          </div>
        </div>

        <div>
          <p className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Vận hành & Nội dung
          </p>
          <div className="space-y-1">
            <NavItem href="/admin/jobs" icon={ClipboardList} label="Quản lý tin đăng" />
            <NavItem
              href="/admin/moderation"
              icon={ShieldAlert}
              label="Kiểm duyệt nội dung"
              badge={19}
            />
            <NavItem href="/admin/tickets" icon={LifeBuoy} label="Trung tâm hỗ trợ" />
            <NavItem href="/admin/blog" icon={BookOpen} label="Quản lý bài viết" />
          </div>
        </div>

        <div>
          <p className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Tài chính & Kinh doanh
          </p>
          <div className="space-y-1">
            <NavItem href="/admin/sales" icon={TrendingUp} label="Sales CRM" />
            <NavItem
              href="/admin/transactions"
              icon={Receipt}
              label="Lịch sử giao dịch"
            />
            <NavItem href="/admin/plans" icon={Package} label="Gói dịch vụ" />
          </div>
        </div>

        <div>
          <p className="px-3 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Quản trị Hệ thống
          </p>
          <div className="space-y-1">
            <NavItem href="/admin/master-data" icon={Database} label="Dữ liệu gốc" />
            <NavItem href="/admin/roles" icon={Settings} label="Vai trò & Phân quyền" />
            <NavItem href="/admin/audit" icon={ScrollText} label="Audit Log" />
          </div>
        </div>
      </nav>
    </aside>
  );
}
