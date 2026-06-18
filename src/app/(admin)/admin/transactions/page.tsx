"use client";

import {
  Receipt,
  CreditCard,
  ArrowRightLeft,
  Search,
  Download,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import { PageHeader, PanelHeader, InsightCard } from "@/components/ui";

const transactions = [
  {
    id: "TXN-9842",
    company: "TechCorp Vietnam",
    amount: "5,000,000 ₫",
    plan: "Gói Pro (Tháng)",
    method: "Chuyển khoản VNPay",
    status: "Completed",
    date: "17/06/2026 14:30",
  },
  {
    id: "TXN-9841",
    company: "EduSmart",
    amount: "15,000,000 ₫",
    plan: "Gói Enterprise",
    method: "Thẻ Tín dụng",
    status: "Completed",
    date: "16/06/2026 09:15",
  },
  {
    id: "TXN-9840",
    company: "VinaRetail",
    amount: "2,000,000 ₫",
    plan: "Gói Cơ bản",
    method: "Momo",
    status: "Refunded",
    date: "15/06/2026 11:20",
  },
  {
    id: "TXN-9839",
    company: "Global Finance",
    amount: "5,000,000 ₫",
    plan: "Gói Pro (Tháng)",
    method: "Chuyển khoản VNPay",
    status: "Pending",
    date: "15/06/2026 08:00",
  },
  {
    id: "TXN-9838",
    company: "HealthPlus",
    amount: "1,500,000 ₫",
    plan: "Gói Khởi nghiệp",
    method: "ZaloPay",
    status: "Failed",
    date: "14/06/2026 16:45",
  },
];

export default function TransactionsPage() {
  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="TÀI CHÍNH & KINH DOANH"
        title="Lịch sử Giao dịch"
        description="Kiểm soát dòng tiền, xem chi tiết hóa đơn, phương thức thanh toán và trạng thái giao dịch."
        actions={
          <button
            className="primary-button"
            style={{ backgroundColor: "#334155", color: "#fff" }}
          >
            <Download size={15} /> Xuất báo cáo CSV
          </button>
        }
      />

      <div className="admin-kpi-grid">
        <InsightCard
          title="Doanh thu tháng này"
          value="245,000,000 ₫"
          icon={Receipt}
          color="#10b981"
          note="Tăng 8% so với tháng trước"
        />
        <InsightCard
          title="Giao dịch thành công"
          value="1,420"
          icon={CheckCircle2}
          color="#3b82f6"
          note="Tỷ lệ thành công 98%"
        />
        <InsightCard
          title="Yêu cầu hoàn tiền"
          value="3"
          icon={ArrowRightLeft}
          color="#f59e0b"
          note="Đang chờ xử lý"
        />
      </div>

      <div style={{ marginTop: "24px" }}>
        <section className="panel">
          <PanelHeader
            icon={<CreditCard size={17} />}
            title="Tất cả giao dịch"
            action="Lọc theo ngày"
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
                placeholder="Tìm kiếm theo mã TXN, công ty..."
                style={{
                  width: "100%",
                  padding: "8px 12px 8px 36px",
                  borderRadius: "6px",
                  border: "1px solid #e2e8f0",
                  fontSize: "14px",
                }}
              />
            </div>
          </div>

          <div style={{ width: "100%", overflowX: "auto" }}>
            <table
              style={{ width: "100%", borderCollapse: "collapse", minWidth: "900px" }}
            >
              <thead>
                <tr
                  style={{
                    borderBottom: "1px solid #e2e8f0",
                    backgroundColor: "#f8fafc",
                    textAlign: "left",
                  }}
                >
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Mã Giao dịch
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Khách hàng
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Dịch vụ / Sản phẩm
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Số tiền
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Trạng thái
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Thời gian
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "13px",
                        color: "#3b82f6",
                        fontWeight: 600,
                      }}
                    >
                      {txn.id}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#0f172a",
                        fontWeight: 500,
                      }}
                    >
                      {txn.company}
                    </td>
                    <td style={{ padding: "16px" }}>
                      <strong
                        style={{
                          display: "block",
                          fontSize: "13px",
                          color: "#334155",
                          marginBottom: "4px",
                        }}
                      >
                        {txn.plan}
                      </strong>
                      <span style={{ fontSize: "12px", color: "#64748b" }}>
                        {txn.method}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#0f172a",
                        fontWeight: 600,
                      }}
                    >
                      {txn.amount}
                    </td>
                    <td style={{ padding: "16px" }}>
                      {txn.status === "Completed" && (
                        <span
                          style={{
                            padding: "4px 10px",
                            backgroundColor: "#dcfce7",
                            color: "#15803d",
                            borderRadius: "999px",
                            fontSize: "12px",
                            fontWeight: 600,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <CheckCircle2 size={12} /> Thành công
                        </span>
                      )}
                      {txn.status === "Pending" && (
                        <span
                          style={{
                            padding: "4px 10px",
                            backgroundColor: "#fef3c7",
                            color: "#b45309",
                            borderRadius: "999px",
                            fontSize: "12px",
                            fontWeight: 600,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <AlertTriangle size={12} /> Chờ thanh toán
                        </span>
                      )}
                      {txn.status === "Failed" && (
                        <span
                          style={{
                            padding: "4px 10px",
                            backgroundColor: "#fee2e2",
                            color: "#b91c1c",
                            borderRadius: "999px",
                            fontSize: "12px",
                            fontWeight: 600,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <XCircle size={12} /> Thất bại
                        </span>
                      )}
                      {txn.status === "Refunded" && (
                        <span
                          style={{
                            padding: "4px 10px",
                            backgroundColor: "#f1f5f9",
                            color: "#475569",
                            borderRadius: "999px",
                            fontSize: "12px",
                            fontWeight: 600,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <ArrowRightLeft size={12} /> Đã hoàn tiền
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "16px", fontSize: "13px", color: "#64748b" }}>
                      {txn.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
