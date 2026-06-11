import { AdminSidebar } from "@/features/admin/components/AdminSidebar";
import { AdminHeader } from "@/features/admin/components/AdminHeader";
import "@/app/globals.css";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      {/* Component Sidebar đã được tách riêng */}
      <AdminSidebar />

      {/* Khu vực làm việc chính */}
      <div className="workspace">
        {/* Component Header đã được tách riêng */}
        <AdminHeader />

        {/* Nội dung các trang con (Dashboard, User, Sales...) sẽ tự động render vào đây */}
        {children}
      </div>
    </div>
  );
}
