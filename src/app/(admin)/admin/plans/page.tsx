"use client";

import { Package, Check, Settings, Zap, Crown, Building } from "lucide-react";
import { PageHeader, PanelHeader } from "@/components/ui";

const plans = [
  {
    id: "free",
    name: "Cơ bản",
    price: "Miễn phí",
    icon: <Package size={24} color="#64748b" />,
    color: "#64748b",
    features: [
      "Đăng 1 tin tuyển dụng/tháng",
      "Tìm kiếm ứng viên cơ bản",
      "Hỗ trợ qua email",
    ],
  },
  {
    id: "pro",
    name: "Tăng tốc (Pro)",
    price: "1,490,000 ₫/tháng",
    icon: <Zap size={24} color="#f59e0b" />,
    color: "#f59e0b",
    features: [
      "Đăng 5 tin tuyển dụng/tháng",
      "Mở khóa 50 CV",
      "Nhắn tin trực tiếp ứng viên",
      "Hỗ trợ ưu tiên 24/7",
    ],
  },
  {
    id: "enterprise",
    name: "Doanh nghiệp",
    price: "4,990,000 ₫/tháng",
    icon: <Crown size={24} color="#8b5cf6" />,
    color: "#8b5cf6",
    features: [
      "Đăng tin không giới hạn",
      "Mở khóa 300 CV",
      "Quản lý tuyển dụng nhóm",
      "API tích hợp nội bộ",
      "Chuyên viên tư vấn riêng",
    ],
  },
];

export default function PlansPage() {
  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="TÀI CHÍNH & KINH DOANH"
        title="Quản lý Gói dịch vụ"
        description="Cấu hình giá bán, số lượng tin đăng, và quyền lợi của từng gói dịch vụ trên nền tảng."
        actions={<button className="primary-button">Thêm gói mới</button>}
      />

      <div
        style={{
          marginTop: "24px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {plans.map((plan) => (
          <section
            key={plan.id}
            className="panel"
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div
              style={{
                padding: "24px",
                borderBottom: "1px solid #f1f5f9",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: `${plan.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {plan.icon}
              </div>
              <div>
                <strong
                  style={{
                    fontSize: "18px",
                    color: "#0f172a",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  {plan.name}
                </strong>
                <span style={{ fontSize: "24px", fontWeight: 700, color: plan.color }}>
                  {plan.price}
                </span>
              </div>
            </div>

            <div
              style={{
                padding: "24px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#64748b",
                  textTransform: "uppercase",
                }}
              >
                Quyền lợi bao gồm:
              </span>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "14px",
                      color: "#334155",
                    }}
                  >
                    <Check
                      size={16}
                      color="#10b981"
                      style={{ marginTop: "2px", flexShrink: 0 }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ padding: "16px", borderTop: "1px solid #f1f5f9" }}>
              <button
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "10px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#334155",
                }}
              >
                <Settings size={16} /> Cấu hình gói
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
