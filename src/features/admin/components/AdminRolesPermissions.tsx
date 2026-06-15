"use client";

import { Users, Lock, ShieldCheck, CheckCircle2, Plus } from "lucide-react";
import { PageHeader, PanelHeader } from "@/components/ui";

// --- DỮ LIỆU MOCK ---
const roles = [
  {
    name: "Super Admin",
    desc: "Toàn nền tảng",
    count: 15,
    color: "#3b82f6",
    active: true,
  },
  { name: "Admin SEO", desc: "SEO, blog, landing page", count: 4, color: "#10a778" },
  { name: "Admin Sales", desc: "Lead, deal, hóa đơn", count: 6, color: "#6366f1" },
  {
    name: "Admin kiểm duyệt",
    desc: "Tin đăng, khiếu nại, từ khóa cấm",
    count: 5,
    color: "#f59e0b",
  },
  {
    name: "Admin Support",
    desc: "Ticket, tài khoản, xem hoàn tiền",
    count: 7,
    color: "#ef4444",
  },
];

const permissionGroups = [
  { title: "Người dùng", perms: ["user.read", "user.lock", "user.export"] },
  {
    title: "Nhà tuyển dụng",
    perms: ["employer.verify", "employer.lock", "billing.refund"],
  },
  { title: "Nội dung", perms: ["post.moderate", "seo.edit", "blog.publish"] },
  { title: "Sales", perms: ["lead.read", "deal.update", "invoice.view"] },
  { title: "Hệ thống", perms: ["role.create", "audit.read", "ai.configure"] },
];

const governanceRules = [
  "role.create bắt buộc Super Admin phê duyệt",
  "Mọi thay đổi quyền đều ghi audit log",
  "Hoàn tiền tài chính cần 2 người phê duyệt",
  "Khiếu nại kiểm duyệt không được tự duyệt",
];

export function AdminRolesPermissions() {
  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="SUPER ADMIN"
        title="Vai trò động, phân quyền và quản trị admin"
        description="Super Admin tạo nhiều role như Admin SEO, Admin Sales, Admin kiểm duyệt; quyền được bật/tắt theo nhóm và lưu dấu vết audit."
        actions={
          <button className="primary-button">
            <Plus size={15} /> Tạo vai trò
          </button>
        }
      />

      {/* 1. SỬA GRID: Mở rộng 2 cột bên, thu hẹp tỷ lệ cột giữa để chữ không bị ép */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr 300px",
          gap: "24px",
          alignItems: "start",
        }}
      >
        {/* CỘT 1: DANH SÁCH VAI TRÒ */}
        <section className="panel" style={{ paddingBottom: "12px" }}>
          <PanelHeader
            icon={<Users size={17} />}
            title="Vai trò admin"
            action="Nhân bản"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {roles.map((role) => (
              <div
                key={role.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  backgroundColor: role.active ? "#f8fafc" : "transparent",
                  borderLeft: role.active ? "3px solid #3b82f6" : "3px solid transparent",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    minWidth: "32px",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      backgroundColor: role.color,
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    {role.name.charAt(0)}
                  </div>
                </div>

                {/* Ép chữ nếu dài quá sẽ tự thành dấu ... (ellipsis) để không bị xô lệch */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  <strong
                    style={{
                      fontSize: "14px",
                      color: "#1e293b",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {role.name}
                  </strong>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#64748b",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {role.desc}
                  </span>
                </div>

                <div
                  style={{
                    padding: "2px 8px",
                    backgroundColor: "#eff6ff",
                    color: "#3b82f6",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  {role.count}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CỘT 2: MA TRẬN QUYỀN */}
        <section className="panel">
          <PanelHeader
            icon={<Lock size={17} />}
            title="Ma trận quyền Super Admin"
            action="Lưu policy"
          />
          {/* 2. LÀM SẠCH LOGIC UI: Ép cứng xếp thành 2 cột đều nhau (1fr 1fr), thay vì auto-fit gây lộn xộn */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
              padding: "16px",
            }}
          >
            {permissionGroups.map((group) => (
              <div
                key={group.title}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  padding: "16px",
                  backgroundColor: "#fafaf9",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    fontSize: "13px",
                    color: "#0f172a",
                    marginBottom: "16px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {group.title}
                </strong>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {group.perms.map((p) => (
                    <div
                      key={p}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "13px", color: "#334155" }}>{p}</span>

                      {/* 3. LOGIC NÚT TOGGLE CHUẨN: Xây dựng hình viên thuốc có hình tròn bên trong */}
                      <div
                        style={{
                          width: "36px",
                          height: "20px",
                          backgroundColor: "#3b82f6",
                          borderRadius: "999px",
                          position: "relative",
                          cursor: "pointer",
                          flexShrink: 0,
                        }}
                      >
                        <div
                          style={{
                            width: "16px",
                            height: "16px",
                            backgroundColor: "#ffffff",
                            borderRadius: "50%",
                            position: "absolute",
                            top: "2px",
                            right: "2px",
                            boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CỘT 3: QUY TẮC QUẢN TRỊ */}
        <section className="panel">
          <PanelHeader
            icon={<ShieldCheck size={17} />}
            title="Quy tắc quản trị"
            action="Sửa"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "16px",
            }}
          >
            {governanceRules.map((rule) => (
              <div
                key={rule}
                style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
              >
                <CheckCircle2
                  size={16}
                  color="#10a778"
                  style={{ marginTop: "2px", flexShrink: 0 }}
                />
                <span style={{ fontSize: "13px", color: "#475569", lineHeight: "1.5" }}>
                  {rule}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
