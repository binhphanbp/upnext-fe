"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Banknote, UsersRound, BriefcaseBusiness, UserCheck, Plus } from "lucide-react";
import { PageHeader, PanelHeader, ChartTooltip, Metric } from "@/components/ui";

const revenueByPlan = [
  { plan: "Dùng thử", revenue: 0, accounts: 420 },
  { plan: "Khởi đầu", revenue: 9800, accounts: 186 },
  { plan: "Tăng trưởng", revenue: 24800, accounts: 142 },
  { plan: "Doanh nghiệp", revenue: 8200, accounts: 18 },
];

const adminGrowth = [
  { day: "T2", candidates: 1840, employers: 320 },
  { day: "T3", candidates: 2110, employers: 380 },
  { day: "T4", candidates: 2380, employers: 410 },
  { day: "T5", candidates: 2660, employers: 460 },
  { day: "T6", candidates: 2920, employers: 520 },
  { day: "T7", candidates: 3180, employers: 570 },
  { day: "CN", candidates: 3420, employers: 610 },
];

export function AdminUsersFinance() {
  // Biến trạng thái giúp khắc phục triệt để lỗi trắng biểu đồ (Hydration Mismatch)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="Admin"
        title="Nhà tuyển dụng, ứng viên, gói dịch vụ và vai trò admin"
        description="Giám sát nhà tuyển dụng, ứng viên, gói dịch vụ, hóa đơn, hoàn tiền và phân quyền admin phụ."
        actions={
          <button className="primary-button">
            <Plus size={15} /> Thêm admin phụ
          </button>
        }
      />

      <div className="admin-dashboard-row">
        <section className="panel admin-chart-card">
          <PanelHeader
            icon={<Banknote size={17} />}
            title="Doanh thu gói và tài khoản hoạt động"
            action="Xuất dữ liệu"
          />
          <div style={{ width: "100%", height: 240 }}>
            {isMounted && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueByPlan}>
                  <CartesianGrid vertical={false} stroke="#ececf2" />
                  <XAxis
                    dataKey="plan"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#858897", fontSize: 11 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#858897", fontSize: 11 }}
                    width={44}
                  />
                  <Tooltip content={<ChartTooltip />} />
                  <Bar
                    dataKey="revenue"
                    fill="#10a778"
                    radius={[8, 8, 2, 2]}
                    maxBarSize={44}
                    isAnimationActive={false}
                  />
                  <Bar
                    dataKey="accounts"
                    fill="#3b82f6"
                    radius={[8, 8, 2, 2]}
                    maxBarSize={44}
                    isAnimationActive={false}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </section>

        <section className="panel admin-chart-card">
          <PanelHeader
            icon={<UsersRound size={17} />}
            title="Tăng trưởng tài khoản"
            action="Phân khúc"
          />
          <div style={{ width: "100%", height: 240 }}>
            {isMounted && (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={adminGrowth}>
                  <CartesianGrid
                    vertical={false}
                    stroke="#ececf2"
                    strokeDasharray="5 5"
                  />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#858897", fontSize: 11 }}
                  />
                  <YAxis hide />
                  <Tooltip content={<ChartTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="candidates"
                    stroke="#3b82f6"
                    strokeWidth={2.4}
                    dot={false}
                    isAnimationActive={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="employers"
                    stroke="#10a778"
                    strokeWidth={2.4}
                    dot={false}
                    isAnimationActive={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </section>
      </div>

      <div className="finance-grid">
        <section className="panel table-panel">
          <PanelHeader
            icon={<BriefcaseBusiness size={17} />}
            title="Tài khoản nhà tuyển dụng"
            action="Khóa / mở khóa"
          />
          {[
            "Nexa Fintech - 92 trust",
            "CloudBridge Labs - 86 trust",
            "NewSoft Co - 54 trust",
            "Risky Hiring - 28 trust",
          ].map((item, index) => (
            <div className="post-row" key={item}>
              <div>
                <strong>{item}</strong>
                <span>
                  {index < 2
                    ? "Đang dùng gói Pro"
                    : index === 2
                      ? "Bị giới hạn tính năng"
                      : "Tạm khóa"}
                </span>
              </div>
              <span
                className={
                  index === 3
                    ? "status-pill red"
                    : index === 2
                      ? "status-pill yellow"
                      : "status-pill green"
                }
              >
                {index === 3 ? "Đã khóa" : "Đang hoạt động"}
              </span>
            </div>
          ))}
        </section>

        <section className="panel billing-panel">
          <PanelHeader
            icon={<Banknote size={17} />}
            title="Gói dịch vụ & hóa đơn"
            action="Sửa giá"
          />
          <div className="resource-grid">
            <Metric title="Khởi đầu" value="$49" detail="30 tin/tháng" />
            <Metric title="Pro" value="$149" detail="AI + tín dụng đẩy tin" />
            <Metric title="Doanh nghiệp" value="$399" detail="SLA và hỗ trợ" />
            <Metric title="Hoàn tiền" value="4" detail="Đã duyệt theo chính sách" />
          </div>
        </section>

        <section className="panel">
          <PanelHeader
            icon={<UserCheck size={17} />}
            title="Vai trò admin phụ"
            action="Quản lý"
          />

          {/* Thêm một div bọc ngoài để tạo khoảng cách giữa các dòng */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "16px 20px",
            }}
          >
            {["Admin Sales", "Admin duyệt tin", "Admin hỗ trợ khách hàng"].map(
              (role, index) => {
                const avatarColors = ["#3b82f6", "#10a778", "#6366f1"];

                return (
                  // ĐÃ XÓA className="mini-row", dùng flex thuần túy
                  <div
                    key={role}
                    style={{ display: "flex", alignItems: "center", gap: "12px" }}
                  >
                    {/* Avatar tròn vo */}
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        minWidth: "32px",
                        minHeight: "32px" /* Khóa cứng cả chiều cao */,
                        flexShrink: 0,
                        borderRadius: "50%",
                        backgroundColor: avatarColors[index],
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 600,
                        fontSize: "13px",
                      }}
                    >
                      {role.charAt(0)}
                    </div>

                    {/* Thông tin */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <strong style={{ fontSize: "14px", color: "#1e293b" }}>
                        {role}
                      </strong>
                      <span style={{ fontSize: "12px", color: "#64748b" }}>
                        {index + 3} quyền đang bật
                      </span>
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
