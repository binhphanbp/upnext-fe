"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";
import { Briefcase, Banknote, TrendingUp, Receipt, Plus } from "lucide-react";
import { PageHeader, PanelHeader, ChartTooltip } from "@/components/ui";

// --- DỮ LIỆU MOCK ---
const funnelData = [
  { stage: "Lead", count: 8500 },
  { stage: "Demo", count: 4200 },
  { stage: "Dùng thử", count: 2100 },
  { stage: "Đã trả phí", count: 950 },
  { stage: "Gia hạn", count: 480 },
];

const revenueData = [
  { plan: "Dùng thử", rev: 0 },
  { plan: "Khởi đầu", rev: 9500 },
  { plan: "Tăng trưởng", rev: 25000 },
  { plan: "Doanh nghiệp", rev: 8000 },
];

const pipelineDeals = [
  {
    company: "Nexa Fintech – Gia hạn Growth",
    stage: "Đề xuất",
    amount: "$149",
    status: "green",
  },
  {
    company: "CloudBridge – Dùng thử Enterprise",
    stage: "Đàm phán",
    amount: "$399",
    status: "green",
  },
  {
    company: "ShopGrid – Review hoàn tiền",
    stage: "Hoàn tiền",
    amount: "$49",
    status: "yellow",
  },
  {
    company: "Orbit Commerce – Mở rộng seat",
    stage: "Mở rộng",
    amount: "$199",
    status: "green",
  },
  {
    company: "VectorMind – Hóa đơn năm",
    stage: "Đã gửi hóa đơn",
    amount: "$149",
    status: "green",
  },
];

export function AdminSalesCrm() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="ADMIN SALES"
        title="Sales CRM, gói dịch vụ, hóa đơn và vòng đời nhà tuyển dụng"
        description="Theo dõi lead nhà tuyển dụng, gói dịch vụ, pipeline sales, hóa đơn, hoàn tiền và bàn giao sang hỗ trợ."
        actions={
          <button className="primary-button">
            <Plus size={15} /> Tạo hóa đơn
          </button>
        }
      />

      {/* HÀNG 1: Biểu đồ Phễu và Doanh thu (Tỷ lệ 1:1) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginBottom: "24px",
        }}
      >
        {/* Biểu đồ Funnel Sales (Ngang) */}
        <section className="panel admin-chart-card">
          <PanelHeader
            icon={<Briefcase size={17} />}
            title="Funnel sales"
            action="Dự báo"
          />
          <div style={{ width: "100%", height: 260, padding: "10px 0" }}>
            {isMounted && (
              <ResponsiveContainer width="100%" height="100%">
                {/* Đặt layout="vertical" để biểu đồ Bar quay ngang */}
                <BarChart
                  data={funnelData}
                  layout="vertical"
                  barSize={16}
                  margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
                >
                  <CartesianGrid horizontal={true} vertical={false} stroke="#f1f5f9" />
                  <XAxis type="number" hide />
                  <YAxis
                    dataKey="stage"
                    type="category"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    width={80}
                  />
                  <RechartsTooltip
                    cursor={{ fill: "#f8fafc" }}
                    content={<ChartTooltip />}
                  />
                  <Bar
                    dataKey="count"
                    fill="#6366f1"
                    radius={[0, 8, 8, 0]}
                    isAnimationActive={false}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </section>

        {/* Biểu đồ Doanh thu gói (Area cong) */}
        <section className="panel admin-chart-card">
          <PanelHeader
            icon={<Banknote size={17} />}
            title="Doanh thu gói"
            action="Sổ cái"
          />
          <div style={{ width: "100%", height: 260, padding: "10px 0" }}>
            {isMounted && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={revenueData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="#f1f5f9"
                    strokeDasharray="3 3"
                  />
                  <XAxis
                    dataKey="plan"
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
                  {/* Sử dụng type="monotone" để đường nét uốn cong mềm mại */}
                  <Area
                    type="monotone"
                    dataKey="rev"
                    stroke="#10a778"
                    strokeWidth={2.5}
                    fill="#10a778"
                    fillOpacity={0.08}
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </section>
      </div>

      {/* HÀNG 2: Pipeline (chiếm 1 phần) và Kiểm soát (chiếm 1 phần) */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
        {/* Danh sách Pipeline Deal */}
        <section className="panel table-panel">
          <PanelHeader
            icon={<TrendingUp size={17} />}
            title="Pipeline deal"
            action="Thêm deal"
          />
          <div style={{ padding: "8px 0" }}>
            {pipelineDeals.map((deal, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 24px",
                  borderBottom:
                    index !== pipelineDeals.length - 1 ? "1px solid #f8fafc" : "none",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8fafc")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <strong style={{ fontSize: "14px", fontWeight: 600, color: "#1e293b" }}>
                    {deal.company}
                  </strong>
                  <span style={{ fontSize: "12px", color: "#64748b" }}>{deal.stage}</span>
                </div>
                {/* Label số tiền với màu sắc linh hoạt */}
                <div
                  style={{
                    padding: "4px 10px",
                    backgroundColor: deal.status === "green" ? "#ecfdf5" : "#fffbeb",
                    color: deal.status === "green" ? "#10b981" : "#f59e0b",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {deal.amount}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lưới Kiểm soát doanh thu 2x2 */}
        <section className="panel">
          <PanelHeader
            icon={<Receipt size={17} />}
            title="Kiểm soát doanh thu"
            action="Mở sổ cái"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px 24px",
              padding: "32px 24px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#475569" }}>
                MRR
              </span>
              <strong
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: "1.2",
                }}
              >
                $42.8k
              </strong>
              <span style={{ fontSize: "12px", color: "#64748b" }}>+11% MoM</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#475569" }}>
                Chuyển đổi trial
              </span>
              <strong
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: "1.2",
                }}
              >
                18%
              </strong>
              <span style={{ fontSize: "12px", color: "#64748b" }}>
                Gói Growth cao nhất
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#475569" }}>
                Rủi ro hoàn tiền
              </span>
              <strong
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: "1.2",
                }}
              >
                4
              </strong>
              <span style={{ fontSize: "12px", color: "#64748b" }}>Cần phê duyệt</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#475569" }}>
                AR quá hạn
              </span>
              <strong
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: "1.2",
                }}
              >
                $2.1k
              </strong>
              <span style={{ fontSize: "12px", color: "#64748b" }}>3 hóa đơn</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
