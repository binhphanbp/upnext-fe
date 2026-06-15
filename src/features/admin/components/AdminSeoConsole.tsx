"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";
import { Globe, AlertCircle, FileText, Activity } from "lucide-react";
import { PageHeader, PanelHeader, ChartTooltip } from "@/components/ui";

// --- DỮ LIỆU MOCK ---
const clickData = [
  { name: "Trang chủ", clicks: 8200 },
  { name: "React", clicks: 4800 },
  { name: "Lương", clicks: 3400 },
  { name: "Công ty", clicks: 2900 },
  { name: "Blog", clicks: 2100 },
];

const seoErrors = [
  { issue: "Meta trùng lặp", percent: "100%" },
  { issue: "Thiếu canonical", percent: "80%" },
  { issue: "Mobile LCP chậm", percent: "95%" },
  { issue: "Cảnh báo noindex", percent: "90%" },
  { issue: "Nội dung mỏng", percent: "85%" },
];

const seoPages = [
  {
    url: "Trang chủ /candidate",
    desc: "Đã index và ổn định",
    status: "Ổn định",
    isWarning: false,
  },
  {
    url: "Landing việc React",
    desc: "Cần làm mới meta",
    status: "Cảnh báo",
    isWarning: true,
  },
  {
    url: "Danh bạ công ty",
    desc: "Đã index và ổn định",
    status: "Ổn định",
    isWarning: false,
  },
  {
    url: "Cẩm nang lương",
    desc: "Cần làm mới meta",
    status: "Cảnh báo",
    isWarning: true,
  },
  {
    url: "Blog: xu hướng tuyển dụng IT",
    desc: "Đã index và ổn định",
    status: "Ổn định",
    isWarning: false,
  },
  { url: "Sitemap.xml", desc: "Cần làm mới meta", status: "Cảnh báo", isWarning: true },
];

export function AdminSeoConsole() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="ADMIN SEO"
        title="SEO console, landing page và sức khỏe index"
        description="Quản lý metadata, landing page theo kỹ năng/khu vực, sitemap, canonical, trạng thái index và hàng đợi nội dung cho tuyển dụng IT."
        actions={
          <button className="primary-button">
            <Globe size={15} /> Xuất bản thay đổi SEO
          </button>
        }
      />

      {/* HÀNG 1: Tỷ lệ 1:1, khoảng cách thoáng hơn */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginBottom: "24px",
        }}
      >
        <section className="panel admin-chart-card">
          <PanelHeader
            icon={<Globe size={17} />}
            title="Click organic và impression"
            action="Search Console"
          />
          <div style={{ width: "100%", height: 260, padding: "10px 0" }}>
            {isMounted && (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={clickData}
                  barSize={36}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid vertical={false} stroke="#f1f5f9" />
                  <XAxis
                    dataKey="name"
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
                  <RechartsTooltip
                    content={<ChartTooltip />}
                    cursor={{ fill: "#f8fafc" }}
                  />
                  {/* Cột thuôn dài và bo góc mềm mại */}
                  <Bar
                    dataKey="clicks"
                    fill="#10a778"
                    radius={[6, 6, 0, 0]}
                    isAnimationActive={false}
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </section>

        <section className="panel">
          <PanelHeader
            icon={<AlertCircle size={17} />}
            title="Bản đồ lỗi SEO"
            action="Hàng đợi sửa lỗi"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "20px 24px",
            }}
          >
            {seoErrors.map((item) => (
              <div
                key={item.issue}
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#334155" }}>
                  {item.issue}
                </span>
                {/* Thanh background nhạt, bo góc sâu */}
                <div
                  style={{
                    width: "100%",
                    height: "6px",
                    backgroundColor: "#f1f5f9",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  {/* Thanh fill dùng dải màu gradient sạch sẽ */}
                  <div
                    style={{
                      width: item.percent,
                      height: "100%",
                      background: "linear-gradient(90deg, #3b82f6 0%, #2dd4bf 100%)",
                      borderRadius: "8px",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* HÀNG 2: Kho trang (chiếm 2 phần) và Sức khỏe (chiếm 1 phần) */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
        <section className="panel table-panel">
          <PanelHeader
            icon={<FileText size={17} />}
            title="Kho trang SEO"
            action="Chạy audit"
          />
          <div style={{ padding: "8px 0" }}>
            {seoPages.map((page, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 24px",
                  borderBottom:
                    index !== seoPages.length - 1 ? "1px solid #f8fafc" : "none",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8fafc")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <strong style={{ fontSize: "14px", fontWeight: 600, color: "#1e293b" }}>
                    {page.url}
                  </strong>
                  <span style={{ fontSize: "12px", color: "#64748b" }}>{page.desc}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span className={`status-pill ${page.isWarning ? "yellow" : "green"}`}>
                    {page.status}
                  </span>
                  {/* Nút bấm tinh giản */}
                  <button
                    style={{
                      padding: "6px 14px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#475569",
                      backgroundColor: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      cursor: "pointer",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                    }}
                  >
                    Mở
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <PanelHeader
            icon={<Activity size={17} />}
            title="Sức khỏe index"
            action="Chi tiết"
          />
          {/* Lưới 2x2 với khoảng cách rộng rãi */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px 24px",
              padding: "32px 24px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#475569" }}>
                Đã index
              </span>
              <strong
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: "1.2",
                }}
              >
                1,284
              </strong>
              <span style={{ fontSize: "12px", color: "#64748b" }}>
                Trang trên Google
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#475569" }}>
                Cảnh báo
              </span>
              <strong
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: "1.2",
                }}
              >
                26
              </strong>
              <span style={{ fontSize: "12px", color: "#64748b" }}>Meta trùng lặp</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#475569" }}>
                CTR
              </span>
              <strong
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: "1.2",
                }}
              >
                4.8%
              </strong>
              <span style={{ fontSize: "12px", color: "#64748b" }}>30 ngày</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#475569" }}>
                Lead SEO
              </span>
              <strong
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: "1.2",
                }}
              >
                318
              </strong>
              <span style={{ fontSize: "12px", color: "#64748b" }}>Ứng viên đăng ký</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
