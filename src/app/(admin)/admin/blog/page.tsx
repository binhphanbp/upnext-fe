"use client";

import { PenTool, FileText, Calendar, Eye, Edit, Trash2, Plus } from "lucide-react";
import { PageHeader, PanelHeader, InsightCard } from "@/components/ui";

const blogs = [
  {
    id: 1,
    title: "10 Kỹ năng viết CV chinh phục nhà tuyển dụng IT",
    category: "Cẩm nang Ứng viên",
    author: "Admin SEO",
    views: 1250,
    date: "15/06/2026",
    status: "Published",
  },
  {
    id: 2,
    title: "Báo cáo thị trường nhân sự IT Quý 2/2026",
    category: "Tin tức & Phân tích",
    author: "Super Admin",
    views: 3420,
    date: "10/06/2026",
    status: "Published",
  },
  {
    id: 3,
    title: "Cách tối ưu hóa tin đăng tuyển dụng để thu hút nhân tài",
    category: "Góc Nhà Tuyển Dụng",
    author: "Admin Sales",
    views: 0,
    date: "Chưa đăng",
    status: "Draft",
  },
  {
    id: 4,
    title: "Xu hướng làm việc Remote sau đại dịch",
    category: "Tin tức & Phân tích",
    author: "Admin SEO",
    views: 890,
    date: "01/06/2026",
    status: "Published",
  },
];

export default function BlogPage() {
  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="VẬN HÀNH & NỘI DUNG"
        title="Quản lý Bài viết (Blog)"
        description="Đăng tin tức, cẩm nang tuyển dụng và quản lý nội dung SEO."
        actions={
          <button
            className="primary-button"
            style={{ backgroundColor: "#10b981", color: "#fff" }}
          >
            <Plus size={15} /> Viết bài mới
          </button>
        }
      />

      <div className="admin-kpi-grid">
        <InsightCard
          title="Tổng bài viết"
          value="128"
          icon={FileText}
          color="#3b82f6"
          note="Đã xuất bản"
        />
        <InsightCard
          title="Lượt xem tháng này"
          value="45,200"
          icon={Eye}
          color="#0ea5e9"
          note="Tăng 15% so với tháng trước"
        />
        <InsightCard
          title="Bài đang nháp"
          value="12"
          icon={PenTool}
          color="#f59e0b"
          note="Chưa xuất bản"
        />
      </div>

      <div style={{ marginTop: "24px" }}>
        <section className="panel">
          <PanelHeader
            icon={<FileText size={17} />}
            title="Danh sách bài viết"
            action="Quản lý Danh mục"
          />

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
                    Tiêu đề
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Chuyên mục
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                    }}
                  >
                    Tác giả
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
                    Hiệu suất
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#475569",
                      width: "100px",
                      textAlign: "right",
                    }}
                  >
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                    <td style={{ padding: "16px" }}>
                      <strong
                        style={{
                          display: "block",
                          fontSize: "14px",
                          color: "#0f172a",
                          marginBottom: "4px",
                        }}
                      >
                        {blog.title}
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
                        <Calendar size={12} /> {blog.date}
                      </span>
                    </td>
                    <td style={{ padding: "16px", fontSize: "14px", color: "#334155" }}>
                      <span
                        style={{
                          padding: "4px 8px",
                          backgroundColor: "#f1f5f9",
                          borderRadius: "4px",
                          fontSize: "12px",
                        }}
                      >
                        {blog.category}
                      </span>
                    </td>
                    <td style={{ padding: "16px", fontSize: "14px", color: "#334155" }}>
                      {blog.author}
                    </td>
                    <td style={{ padding: "16px" }}>
                      {blog.status === "Published" ? (
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
                          Đã xuất bản
                        </span>
                      ) : (
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
                          Bản nháp
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "16px", fontSize: "14px", color: "#334155" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <Eye size={14} color="#94a3b8" /> {blog.views}
                      </div>
                    </td>
                    <td style={{ padding: "16px", textAlign: "right" }}>
                      <button
                        style={{
                          color: "#3b82f6",
                          cursor: "pointer",
                          background: "none",
                          border: "none",
                          marginRight: "12px",
                        }}
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        style={{
                          color: "#ef4444",
                          cursor: "pointer",
                          background: "none",
                          border: "none",
                        }}
                      >
                        <Trash2 size={16} />
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
