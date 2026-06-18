"use client";

import {
  LifeBuoy,
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Search,
  Filter,
  MoreHorizontal,
} from "lucide-react";
import { PageHeader, PanelHeader, InsightCard } from "@/components/ui";

const tickets = [
  {
    id: "TK-1042",
    subject: "Không thể nạp tiền thanh toán gói Pro",
    user: "TechCorp Vietnam",
    priority: "High",
    status: "Open",
    date: "10:30 AM, 17/06",
  },
  {
    id: "TK-1041",
    subject: "Báo cáo tin đăng có dấu hiệu lừa đảo",
    user: "Nguyễn Văn A",
    priority: "High",
    status: "In Progress",
    date: "09:15 AM, 17/06",
  },
  {
    id: "TK-1040",
    subject: "Yêu cầu thay đổi email công ty",
    user: "Global Finance",
    priority: "Medium",
    status: "Open",
    date: "Hôm qua",
  },
  {
    id: "TK-1039",
    subject: "Không nhận được mã xác thực OTP",
    user: "Trần Thị B",
    priority: "Medium",
    status: "Resolved",
    date: "Hôm qua",
  },
  {
    id: "TK-1038",
    subject: "Lỗi hiển thị logo công ty",
    user: "EduSmart",
    priority: "Low",
    status: "Resolved",
    date: "15/06",
  },
];

export default function TicketsPage() {
  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="VẬN HÀNH & NỘI DUNG"
        title="Trung tâm Hỗ trợ"
        description="Xử lý khiếu nại, phản hồi từ người dùng và hỗ trợ các vấn đề kỹ thuật."
        actions={<button className="primary-button">Tạo Ticket mới</button>}
      />

      <div className="admin-kpi-grid">
        <InsightCard
          title="Tickets đang chờ"
          value="24"
          icon={Clock}
          color="#f59e0b"
          note="Cần xử lý trong 24h"
        />
        <InsightCard
          title="Cần ưu tiên cao"
          value="5"
          icon={AlertTriangle}
          color="#ef4444"
          note="Lỗi thanh toán, report lừa đảo"
        />
        <InsightCard
          title="Đã giải quyết"
          value="1,248"
          icon={CheckCircle2}
          color="#10b981"
          note="Trong tháng này"
        />
      </div>

      <div style={{ marginTop: "24px" }}>
        <section className="panel">
          <PanelHeader
            icon={<MessageSquare size={17} />}
            title="Hàng đợi Ticket"
            action="Chỉ định cho tôi"
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
                placeholder="Tìm kiếm theo ID, tiêu đề, người dùng..."
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
              <Filter size={16} /> Lọc trạng thái
            </button>
          </div>

          <div style={{ width: "100%", overflowX: "auto" }}>
            <table
              style={{ width: "100%", borderCollapse: "collapse", minWidth: "800px" }}
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
                    Ticket ID
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Chủ đề
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Người dùng
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Mức độ
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
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                      width: "50px",
                    }}
                  ></th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "13px",
                        color: "#64748b",
                        fontWeight: 500,
                      }}
                    >
                      {ticket.id}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "14px",
                        color: "#0f172a",
                        fontWeight: 500,
                      }}
                    >
                      {ticket.subject}
                    </td>
                    <td style={{ padding: "16px", fontSize: "14px", color: "#334155" }}>
                      {ticket.user}
                    </td>
                    <td style={{ padding: "16px" }}>
                      {ticket.priority === "High" && (
                        <span
                          style={{
                            color: "#ef4444",
                            fontSize: "13px",
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <AlertTriangle size={14} /> Cao
                        </span>
                      )}
                      {ticket.priority === "Medium" && (
                        <span
                          style={{ color: "#f59e0b", fontSize: "13px", fontWeight: 600 }}
                        >
                          Trung bình
                        </span>
                      )}
                      {ticket.priority === "Low" && (
                        <span
                          style={{ color: "#10b981", fontSize: "13px", fontWeight: 600 }}
                        >
                          Thấp
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "16px" }}>
                      {ticket.status === "Open" && (
                        <span
                          style={{
                            padding: "4px 10px",
                            backgroundColor: "#fee2e2",
                            color: "#b91c1c",
                            borderRadius: "999px",
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          Mới (Open)
                        </span>
                      )}
                      {ticket.status === "In Progress" && (
                        <span
                          style={{
                            padding: "4px 10px",
                            backgroundColor: "#fef3c7",
                            color: "#b45309",
                            borderRadius: "999px",
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          Đang xử lý
                        </span>
                      )}
                      {ticket.status === "Resolved" && (
                        <span
                          style={{
                            padding: "4px 10px",
                            backgroundColor: "#dcfce7",
                            color: "#15803d",
                            borderRadius: "999px",
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          Đã đóng
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "16px", fontSize: "13px", color: "#64748b" }}>
                      {ticket.date}
                    </td>
                    <td style={{ padding: "16px" }}>
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
