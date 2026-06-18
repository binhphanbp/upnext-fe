"use client";

import {
  Building2,
  Search,
  Filter,
  ShieldAlert,
  CheckCircle2,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import { PageHeader, PanelHeader, InsightCard, Avatar } from "@/components/ui";

const employers = [
  {
    id: "EMP-001",
    name: "TechCorp Vietnam",
    industry: "IT - Phần mềm",
    active: true,
    jobs: 12,
  },
  { id: "EMP-002", name: "Global Finance", industry: "Tài chính", active: true, jobs: 4 },
  { id: "EMP-003", name: "VinaRetail", industry: "Bán lẻ", active: false, jobs: 0 },
  { id: "EMP-004", name: "EduSmart", industry: "Giáo dục", active: true, jobs: 2 },
  { id: "EMP-005", name: "HealthPlus", industry: "Y tế", active: true, jobs: 7 },
  { id: "EMP-006", name: "Green Energy", industry: "Môi trường", active: true, jobs: 1 },
];

export default function EmployersPage() {
  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="QUẢN LÝ NGƯỜI DÙNG"
        title="Quản lý Nhà tuyển dụng"
        description="Theo dõi danh sách công ty, xác thực trạng thái doanh nghiệp (KYC) và các tài khoản vi phạm."
        actions={
          <button className="primary-button">
            <Plus size={15} /> Thêm công ty
          </button>
        }
      />

      <div className="admin-kpi-grid">
        <InsightCard
          title="Tổng công ty"
          value="3,240"
          icon={Building2}
          color="#3b82f6"
          note="Tăng 12% so với tháng trước"
        />
        <InsightCard
          title="Chờ xác thực"
          value="45"
          icon={ShieldAlert}
          color="#f59e0b"
          note="Cần duyệt thủ công"
        />
        <InsightCard
          title="Tài khoản bị khóa"
          value="12"
          icon={CheckCircle2}
          color="#ef4444"
          note="Vi phạm chính sách"
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: "24px",
          alignItems: "start",
          marginTop: "24px",
        }}
      >
        <section className="panel">
          <PanelHeader
            icon={<Building2 size={17} />}
            title="Danh sách công ty"
            action="Bộ lọc"
          />

          <div
            style={{
              padding: "16px",
              borderBottom: "1px solid #f1f5f9",
              display: "flex",
              gap: "12px",
            }}
          >
            <div style={{ flex: 1, position: "relative" }}>
              <Search
                size={16}
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "10px",
                  color: "#94a3b8",
                }}
              />
              <input
                type="text"
                placeholder="Tìm kiếm công ty..."
                style={{
                  width: "100%",
                  padding: "8px 12px 8px 36px",
                  borderRadius: "6px",
                  border: "1px solid #e2e8f0",
                  fontSize: "14px",
                }}
              />
            </div>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                backgroundColor: "#fff",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 500,
                color: "#334155",
              }}
            >
              <Filter size={16} /> Lọc
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {employers.map((emp, i) => (
              <div
                key={emp.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                <Avatar name={emp.name} index={i} />
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>
                    {emp.name}
                  </strong>
                  <span style={{ fontSize: "13px", color: "#64748b" }}>
                    {emp.industry} • {emp.jobs} tin tuyển dụng
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {emp.active ? (
                    <span
                      style={{
                        padding: "4px 10px",
                        backgroundColor: "#dcfce7",
                        color: "#166534",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      Hoạt động
                    </span>
                  ) : (
                    <span
                      style={{
                        padding: "4px 10px",
                        backgroundColor: "#fee2e2",
                        color: "#991b1b",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      Đã khóa
                    </span>
                  )}
                  <button
                    style={{
                      color: "#94a3b8",
                      cursor: "pointer",
                      background: "none",
                      border: "none",
                    }}
                  >
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <PanelHeader
            icon={<ShieldAlert size={17} />}
            title="Yêu cầu xác thực"
            action="Xem tất cả"
          />
          <div
            style={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {[
              "Cty TNHH Alpha Tech - GPKD mờ",
              "Công ty CP Beta - Sai mã số thuế",
              "Gamma Solutions - Trùng tên thương hiệu",
            ].map((alert) => (
              <div
                key={alert}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "12px",
                  backgroundColor: "#fffbeb",
                  border: "1px solid #fde68a",
                  borderRadius: "8px",
                }}
              >
                <ShieldAlert
                  size={16}
                  color="#d97706"
                  style={{ marginTop: "2px", flexShrink: 0 }}
                />
                <span style={{ fontSize: "13px", color: "#92400e", lineHeight: "1.4" }}>
                  {alert}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
