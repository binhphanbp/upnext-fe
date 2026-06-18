"use client";

import {
  ClipboardList,
  Search,
  Filter,
  Eye,
  Clock,
  AlertCircle,
  MoreHorizontal,
} from "lucide-react";
import { PageHeader, PanelHeader, InsightCard } from "@/components/ui";

const jobs = [
  {
    id: "JOB-001",
    title: "Senior Frontend Engineer",
    company: "TechCorp Vietnam",
    salary: "$1500 - $2500",
    views: 245,
    active: true,
  },
  {
    id: "JOB-002",
    title: "UI/UX Designer",
    company: "Global Finance",
    salary: "$1000 - $1800",
    views: 120,
    active: true,
  },
  {
    id: "JOB-003",
    title: "Marketing Manager",
    company: "VinaRetail",
    salary: "Thỏa thuận",
    views: 89,
    active: false,
  },
  {
    id: "JOB-004",
    title: "Backend Node.js Developer",
    company: "EduSmart",
    salary: "$1200 - $2000",
    views: 310,
    active: true,
  },
  {
    id: "JOB-005",
    title: "Data Analyst",
    company: "HealthPlus",
    salary: "Đến $1500",
    views: 156,
    active: true,
  },
  {
    id: "JOB-006",
    title: "DevOps Engineer",
    company: "TechCorp Vietnam",
    salary: "$2000+",
    views: 42,
    active: false,
  },
];

export default function JobsPage() {
  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="VẬN HÀNH & NỘI DUNG"
        title="Quản lý Tin đăng"
        description="Kho chứa toàn bộ Job đang có trên sàn, cho phép kiểm duyệt, theo dõi tương tác và ẩn tin."
        actions={
          <button
            className="primary-button"
            style={{ backgroundColor: "#8b5cf6", color: "#fff" }}
          >
            Đăng tin mới (Admin)
          </button>
        }
      />

      <div className="admin-kpi-grid">
        <InsightCard
          title="Tổng tin đang hiển thị"
          value="1,840"
          icon={ClipboardList}
          color="#8b5cf6"
          note="Trên toàn nền tảng"
        />
        <InsightCard
          title="Lượt xem hôm nay"
          value="24,500"
          icon={Eye}
          color="#0ea5e9"
          note="Lượt xem chi tiết tin"
        />
        <InsightCard
          title="Tin hết hạn tuần này"
          value="112"
          icon={Clock}
          color="#f59e0b"
          note="Cần nhắc gia hạn"
        />
      </div>

      <div style={{ marginTop: "24px" }}>
        <section className="panel">
          <PanelHeader
            icon={<ClipboardList size={17} />}
            title="Danh sách công việc"
            action="Bộ lọc chi tiết"
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
                placeholder="Tìm kiếm công việc theo tiêu đề, công ty..."
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
                    Mã Job
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Tiêu đề & Công ty
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Mức lương
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Lượt xem
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
                      width: "50px",
                    }}
                  ></th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "16px", fontSize: "13px", color: "#64748b" }}>
                      {job.id}
                    </td>
                    <td style={{ padding: "16px" }}>
                      <strong
                        style={{
                          display: "block",
                          fontSize: "14px",
                          color: "#0f172a",
                          marginBottom: "4px",
                        }}
                      >
                        {job.title}
                      </strong>
                      <span style={{ fontSize: "13px", color: "#64748b" }}>
                        {job.company}
                      </span>
                    </td>
                    <td style={{ padding: "16px", fontSize: "14px", color: "#334155" }}>
                      {job.salary}
                    </td>
                    <td style={{ padding: "16px", fontSize: "14px", color: "#334155" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <Eye size={14} color="#94a3b8" /> {job.views}
                      </div>
                    </td>
                    <td style={{ padding: "16px" }}>
                      {job.active ? (
                        <span
                          style={{
                            padding: "4px 10px",
                            backgroundColor: "#e0e7ff",
                            color: "#4338ca",
                            borderRadius: "999px",
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          Hiển thị
                        </span>
                      ) : (
                        <span
                          style={{
                            padding: "4px 10px",
                            backgroundColor: "#f1f5f9",
                            color: "#475569",
                            borderRadius: "999px",
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          Hết hạn
                        </span>
                      )}
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
