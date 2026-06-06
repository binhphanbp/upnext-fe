"use client"; // Cần use client vì chúng ta sử dụng hook usePathname

import {
  BarChart3,
  FileText,
  Settings,
  ShieldAlert,
  Users,
  Wallet,
  Lock,
  UserPlus,
  PanelLeft,
  Zap,
  MoreHorizontal,
  ScrollText,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AdminSidebar() {
  const pathname = usePathname();

  // Hàm kiểm tra xem đường dẫn hiện tại có khớp với menu không để gắn class "active"
  const isActive = (path: string) => (pathname === path ? "nav-item active" : "nav-item");

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          <strong
            style={{
              color: "var(--color-brand-logo)",
              fontSize: "22px",
              fontWeight: "900",
              letterSpacing: "-0.5px",
            }}
          >
            UPNEXT
          </strong>
        </div>
        <button className="sidebar-toggle">
          <PanelLeft size={16} />
        </button>
      </div>

      <nav className="side-nav">
        <section>
          <p>Truy cập</p>
          <Link href="/admin/login" className={isActive("/admin/login")}>
            <Lock size={18} />
            <span>Đăng nhập</span>
          </Link>
          <Link href="/admin/register" className={isActive("/admin/register")}>
            <UserPlus size={18} />
            <span>Đăng ký</span>
          </Link>
        </section>

        <section>
          <p>Admin</p>
          <Link href="/admin" className={isActive("/admin")}>
            <BarChart3 size={18} />
            <span>Thống kê nền tảng</span>
          </Link>
          <Link href="/admin/moderation" className={isActive("/admin/moderation")}>
            <ShieldAlert size={18} />
            <span>Kiểm duyệt</span>
            <b>19</b>
          </Link>
          <Link href="/admin/users" className={isActive("/admin/users")}>
            <Users size={18} />
            <span>Người dùng & tài chính</span>
          </Link>
          <Link href="/admin/roles" className={isActive("/admin/roles")}>
            <Settings size={18} />
            <span>Vai trò & phân quyền</span>
          </Link>
          <Link href="/admin/seo" className={isActive("/admin/seo")}>
            <FileText size={18} />
            <span>SEO Console</span>
          </Link>
          <Link href="/admin/sales" className={isActive("/admin/sales")}>
            <Wallet size={18} />
            <span>Sales CRM</span>
          </Link>
          <Link href="/admin/audit" className={isActive("/admin/audit")}>
            <ScrollText size={18} />
            <span>Audit log</span>
          </Link>
        </section>
      </nav>

      <div className="sidebar-footer">
        <button className="plan-pill">
          <Zap size={14} fill="currentColor" />
          <span>Gói tuyển dụng Pro</span>
        </button>
        <button className="icon-button">
          <MoreHorizontal size={16} />
        </button>
      </div>
    </aside>
  );
}
