"use client";

import { Database, MapPin, Tag, Plus, Settings2, Edit2, Trash2 } from "lucide-react";
import { PageHeader, PanelHeader } from "@/components/ui";

const masterData = {
  skills: [
    "React",
    "Vue",
    "Angular",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "Figma",
    "Photoshop",
    "SEO",
    "Marketing",
    "Sales",
  ],
  industries: [
    "IT - Phần mềm",
    "Tài chính - Ngân hàng",
    "Bán lẻ - Hàng tiêu dùng",
    "Giáo dục",
    "Y tế - Chăm sóc sức khỏe",
    "Sản xuất",
    "Kinh doanh",
  ],
  locations: [
    "Hồ Chí Minh",
    "Hà Nội",
    "Đà Nẵng",
    "Cần Thơ",
    "Hải Phòng",
    "Bình Dương",
    "Đồng Nai",
    "Toàn quốc (Remote)",
  ],
};

export default function MasterDataPage() {
  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="QUẢN TRỊ HỆ THỐNG"
        title="Dữ liệu gốc (Master Data)"
        description="Quản lý và cấu hình các danh mục dùng chung trên toàn hệ thống như Kỹ năng, Ngành nghề, Khu vực."
        actions={
          <button
            className="primary-button"
            style={{ backgroundColor: "#475569", color: "#fff" }}
          >
            <Settings2 size={15} /> Cài đặt nâng cao
          </button>
        }
      />

      <div
        style={{
          marginTop: "24px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        {/* Kỹ năng */}
        <section className="panel">
          <PanelHeader
            icon={<Tag size={17} />}
            title="Kỹ năng & Chuyên môn"
            action="Xem tất cả"
          />
          <div style={{ padding: "16px", borderBottom: "1px solid #f1f5f9" }}>
            <button
              style={{
                width: "100%",
                padding: "8px",
                border: "1px dashed #cbd5e1",
                borderRadius: "6px",
                backgroundColor: "#f8fafc",
                color: "#64748b",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              <Plus size={14} /> Thêm Kỹ năng mới
            </button>
          </div>
          <div style={{ padding: "16px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {masterData.skills.map((skill) => (
              <span
                key={skill}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "4px 10px",
                  backgroundColor: "#f1f5f9",
                  borderRadius: "999px",
                  fontSize: "13px",
                  color: "#334155",
                }}
              >
                {skill}
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    color: "#94a3b8",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Trash2 size={12} />
                </button>
              </span>
            ))}
          </div>
        </section>

        {/* Ngành nghề */}
        <section className="panel">
          <PanelHeader
            icon={<Database size={17} />}
            title="Ngành nghề"
            action="Xem tất cả"
          />
          <div style={{ padding: "16px", borderBottom: "1px solid #f1f5f9" }}>
            <button
              style={{
                width: "100%",
                padding: "8px",
                border: "1px dashed #cbd5e1",
                borderRadius: "6px",
                backgroundColor: "#f8fafc",
                color: "#64748b",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              <Plus size={14} /> Thêm Ngành nghề mới
            </button>
          </div>
          <div
            style={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {masterData.industries.map((ind) => (
              <div
                key={ind}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 12px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "6px",
                }}
              >
                <span style={{ fontSize: "13px", color: "#334155" }}>{ind}</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      color: "#94a3b8",
                    }}
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      color: "#ef4444",
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Khu vực */}
        <section className="panel">
          <PanelHeader
            icon={<MapPin size={17} />}
            title="Khu vực & Địa điểm"
            action="Xem tất cả"
          />
          <div style={{ padding: "16px", borderBottom: "1px solid #f1f5f9" }}>
            <button
              style={{
                width: "100%",
                padding: "8px",
                border: "1px dashed #cbd5e1",
                borderRadius: "6px",
                backgroundColor: "#f8fafc",
                color: "#64748b",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              <Plus size={14} /> Thêm Khu vực mới
            </button>
          </div>
          <div
            style={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {masterData.locations.map((loc) => (
              <div
                key={loc}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 12px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "6px",
                }}
              >
                <span style={{ fontSize: "13px", color: "#334155" }}>{loc}</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      color: "#94a3b8",
                    }}
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      color: "#ef4444",
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
