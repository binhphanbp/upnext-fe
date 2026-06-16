"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";
import { ShieldAlert, Lock, List, Download } from "lucide-react";
import { PageHeader, PanelHeader, ChartTooltip } from "@/components/ui";

// --- DỮ LIỆU MOCK LOGIC ---
const auditVolume = [
  { day: "T3", total: 420, risk: 12 },
  { day: "T4", total: 580, risk: 18 },
  { day: "T5", total: 810, risk: 25 },
  { day: "T6", total: 750, risk: 15 },
  { day: "T7", total: 320, risk: 8 },
  { day: "CN", total: 410, risk: 10 },
];

const sensitiveActions = [
  { action: "role.permission.updated", percent: "95%" },
  { action: "billing.refund.approved", percent: "80%" },
  { action: "candidate.export", percent: "75%" },
  { action: "post.restore", percent: "60%" },
  { action: "ai.policy.changed", percent: "50%" },
];

// Gán màu theo Role để đảm bảo tính logic, không rối mắt
const getRoleColor = (role: string) => {
  if (role.includes("Super")) return "#3b82f6"; // Xanh dương
  if (role.includes("SEO")) return "#10a778"; // Xanh lá
  if (role.includes("Sales")) return "#6366f1"; // Tím indigo
  return "#f59e0b"; // Vàng cam cho Kiểm duyệt
};

const auditEvents = [
  {
    action: "role.permission.updated",
    role: "Super Admin",
    ip: "14.241.20.10",
    time: "1 giờ trước",
    status: "Cần xem",
    isWarning: true,
  },
  {
    action: "seo.page.published",
    role: "Admin SEO",
    ip: "14.241.20.11",
    time: "2 giờ trước",
    status: "Đã xác thực",
    isWarning: false,
  },
  {
    action: "invoice.refund.requested",
    role: "Admin Sales",
    ip: "14.241.20.12",
    time: "3 giờ trước",
    status: "Đã xác thực",
    isWarning: false,
  },
  {
    action: "post.hidden",
    role: "Admin kiểm duyệt",
    ip: "14.241.20.13",
    time: "4 giờ trước",
    status: "Đã xác thực",
    isWarning: false,
  },
  {
    action: "role.permission.updated",
    role: "Super Admin",
    ip: "14.241.20.14",
    time: "5 giờ trước",
    status: "Đã xác thực",
    isWarning: false,
  },
  {
    action: "seo.page.published",
    role: "Admin SEO",
    ip: "14.241.20.15",
    time: "6 giờ trước",
    status: "Cần xem",
    isWarning: true,
  },
  {
    action: "invoice.refund.requested",
    role: "Admin Sales",
    ip: "14.241.20.16",
    time: "7 giờ trước",
    status: "Đã xác thực",
    isWarning: false,
  },
];

export function AdminAuditLog() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="ADMIN"
        title="Audit log, sự kiện bảo mật và dấu vết compliance"
        description="Ghi lại mọi thay đổi quyền, kiểm duyệt, thanh toán, xuất bản SEO và truy cập dữ liệu nhạy cảm."
        actions={
          <button className="primary-button">
            <Download size={15} /> Xuất audit
          </button>
        }
      />

      {/* HÀNG 1: Biểu đồ và Hành động nhạy cảm */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginBottom: "24px",
        }}
      >
        {/* Biểu đồ Khối lượng */}
        <section className="panel admin-chart-card">
          <PanelHeader
            icon={<ShieldAlert size={17} />}
            title="Khối lượng sự kiện audit"
            action="Lọc rủi ro"
          />
          <div style={{ width: "100%", height: 260, padding: "10px 0" }}>
            {isMounted && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={auditVolume}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="#f1f5f9"
                    strokeDasharray="4 4"
                  />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 12 }}
                  />
                  <RechartsTooltip content={<ChartTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#3b82f6"
                    strokeWidth={2.5}
                    dot={false}
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="risk"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </section>

        {/* Hành động nhạy cảm (Thanh tiến trình mỏng, hiện đại) */}
        <section className="panel">
          <PanelHeader
            icon={<Lock size={17} />}
            title="Hành động nhạy cảm"
            action="Policy"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "20px 24px",
            }}
          >
            {sensitiveActions.map((item) => (
              <div
                key={item.action}
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#334155" }}>
                  {item.action}
                </span>
                <div
                  style={{
                    width: "100%",
                    height: "6px",
                    backgroundColor: "#f1f5f9",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: item.percent,
                      height: "100%",
                      background: "linear-gradient(90deg, #6366f1 0%, #10b981 100%)",
                      borderRadius: "8px",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* HÀNG 2: Danh sách Audit Log */}
      <section className="panel table-panel" style={{ marginBottom: "40px" }}>
        <PanelHeader icon={<List size={17} />} title="Luồng sự kiện audit" action="Lọc" />
        <div style={{ padding: "8px 0" }}>
          {auditEvents.map((event, index) => {
            const roleColor = getRoleColor(event.role);
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 24px",
                  borderBottom:
                    index !== auditEvents.length - 1 ? "1px solid #f8fafc" : "none",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8fafc")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  {/* Avatar Tròn gán màu theo logic */}
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      flexShrink: 0,
                      borderRadius: "50%",
                      backgroundColor: roleColor,
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    {event.role.charAt(0)}
                  </div>

                  {/* Thông tin sự kiện */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <strong
                      style={{ fontSize: "14px", fontWeight: 600, color: "#0f172a" }}
                    >
                      {event.action}
                    </strong>
                    <span style={{ fontSize: "12px", color: "#64748b" }}>
                      {event.role} • IP {event.ip} • {event.time}
                    </span>
                  </div>
                </div>

                {/* Trạng thái mềm mại */}
                <div
                  style={{
                    padding: "6px 12px",
                    backgroundColor: event.isWarning ? "#fffbeb" : "#ecfdf5",
                    color: event.isWarning ? "#f59e0b" : "#10b981",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: 600,
                  }}
                >
                  {event.status}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
