"use client";

import {
  Users,
  Search,
  Filter,
  Mail,
  Ban,
  MoreHorizontal,
  UserX,
  Activity,
} from "lucide-react";
import { PageHeader, PanelHeader, InsightCard, Avatar } from "@/components/ui";

const candidates = [
  {
    id: "CAN-001",
    name: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    skills: "React, Node.js",
    active: true,
  },
  {
    id: "CAN-002",
    name: "Trần Thị B",
    email: "tranthib@gmail.com",
    skills: "Figma, UI/UX",
    active: true,
  },
  {
    id: "CAN-003",
    name: "Lê Văn C",
    email: "levanc@hotmail.com",
    skills: "Python, AI",
    active: false,
  },
  {
    id: "CAN-004",
    name: "Phạm D",
    email: "phamd@yahoo.com",
    skills: "Marketing, SEO",
    active: true,
  },
  {
    id: "CAN-005",
    name: "Hoàng E",
    email: "hoange@gmail.com",
    skills: "C++, C#",
    active: true,
  },
  {
    id: "CAN-006",
    name: "Vũ F",
    email: "vuf@gmail.com",
    skills: "Data Analyst",
    active: false,
  },
];

export default function CandidatesPage() {
  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="QUẢN LÝ NGƯỜI DÙNG"
        title="Quản lý Ứng viên"
        description="Quản lý tài khoản ứng viên, hỗ trợ reset mật khẩu, và xem lịch sử vi phạm."
        actions={
          <button
            className="primary-button"
            style={{ backgroundColor: "#10b981", color: "#fff" }}
          >
            Xuất dữ liệu
          </button>
        }
      />

      <div className="admin-kpi-grid">
        <InsightCard
          title="Tổng ứng viên"
          value="45,210"
          icon={Users}
          color="#10b981"
          note="Tăng 2% tuần này"
        />
        <InsightCard
          title="Active 30 ngày"
          value="12,800"
          icon={Activity}
          color="#3b82f6"
          note="Người dùng thường xuyên"
        />
        <InsightCard
          title="Tài khoản bị khóa"
          value="142"
          icon={Ban}
          color="#ef4444"
          note="Hành vi spam"
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
            icon={<Users size={17} />}
            title="Danh sách ứng viên"
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
                placeholder="Tìm kiếm ứng viên theo tên, email..."
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
            {candidates.map((can, i) => (
              <div
                key={can.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                <Avatar name={can.name} index={i} />
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <strong style={{ fontSize: "14px", color: "#0f172a" }}>
                    {can.name}
                  </strong>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#64748b",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <Mail size={12} /> {can.email} • {can.skills}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {can.active ? (
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
                      Bình thường
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
                      Cảnh báo
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
            icon={<UserX size={17} />}
            title="Lịch sử vi phạm"
            action="Chi tiết"
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
              "Lê Văn C - Spam CV (khóa 7 ngày)",
              "Vũ F - Báo cáo ảo (cảnh cáo 1)",
              "Nguyễn X - Thái độ không tốt (khóa vĩnh viễn)",
            ].map((alert) => (
              <div
                key={alert}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "12px",
                  backgroundColor: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: "8px",
                }}
              >
                <Ban
                  size={16}
                  color="#b91c1c"
                  style={{ marginTop: "2px", flexShrink: 0 }}
                />
                <span style={{ fontSize: "13px", color: "#7f1d1d", lineHeight: "1.4" }}>
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
