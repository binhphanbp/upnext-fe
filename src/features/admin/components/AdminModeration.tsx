"use client";

import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CheckCircle2, Flag, Gauge, RefreshCw, ShieldAlert } from "lucide-react";
import {
  AuthNotice,
  ChartTooltip,
  Field,
  InsightCard,
  Modal,
  PageHeader,
  PanelHeader,
} from "@/components/ui";

// Dữ liệu mock
const moderationItems = [
  "Junior Tester - nghi thu phí",
  "Remote DevOps - từ khóa bị cấm",
  "React Lead - khiếu nại hợp lệ",
  "Data Intern - lách luật",
];

const moderationTrend = [
  { day: "T2", flagged: 18, hidden: 7, restored: 3 },
  { day: "T3", flagged: 24, hidden: 9, restored: 4 },
  { day: "T4", flagged: 19, hidden: 6, restored: 5 },
  { day: "T5", flagged: 31, hidden: 14, restored: 6 },
  { day: "T6", flagged: 27, hidden: 12, restored: 3 },
  { day: "T7", flagged: 22, hidden: 8, restored: 2 },
  { day: "CN", flagged: 34, hidden: 16, restored: 5 },
];

export function AdminModeration() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="Admin"
        title="Kiểm duyệt tin tuyển dụng và từ khóa cấm"
        description="Quét tự động phát hiện nội dung vi phạm, ẩn/mở bài có lý do dropdown, hỗ trợ khiếu nại bằng chứng hợp lệ."
        actions={
          <button className="primary-button">
            <RefreshCw size={15} /> Quét lại toàn bộ tin
          </button>
        }
      />

      <div className="admin-kpi-grid compact">
        <InsightCard
          title="Gắn cờ hôm nay"
          value="34"
          icon={ShieldAlert}
          color="#f59e0b"
          note="16 tự ẩn, 5 khiếu nại"
        />
        <InsightCard
          title="Dương tính giả"
          value="8%"
          icon={CheckCircle2}
          color="#10a778"
          note="Mục tiêu dưới 10%"
        />
        <InsightCard
          title="Thời gian xem xét TB"
          value="18 phút"
          icon={Gauge}
          color="#3b82f6"
          note="P95 dưới 45 phút"
        />
        <InsightCard
          title="Tín hiệu cấm"
          value="142"
          icon={Flag}
          color="#ef4444"
          note="Phí, đặt cọc, lương ảo"
        />
      </div>

      <div className="admin-dashboard-row">
        <section className="panel admin-chart-card">
          <PanelHeader
            icon={<ShieldAlert size={17} />}
            title="Xu hướng kiểm duyệt"
            action="7 ngày gần nhất"
          />
          <ResponsiveContainer width="100%" height={230}>
            <AreaChart data={moderationTrend}>
              <CartesianGrid vertical={false} stroke="#ececf2" strokeDasharray="5 5" />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#858897", fontSize: 11 }}
              />
              <YAxis hide />
              <Tooltip content={<ChartTooltip />} />
              <Area
                type="monotone"
                dataKey="flagged"
                stroke="#f59e0b"
                fill="#fff4de"
                strokeWidth={2.4}
                isAnimationActive={false}
              />
              <Area
                type="monotone"
                dataKey="hidden"
                stroke="#ef4444"
                fill="#ffeded"
                strokeWidth={2.4}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </section>

        <section className="panel admin-chart-card">
          <PanelHeader icon={<Flag size={17} />} title="Phân bổ lý do" action="Quy tắc" />
          <div className="reason-bars">
            {[
              "Lừa đảo đặt cọc",
              "Lương ảo",
              "Từ khóa cấm",
              "Tin trùng lặp",
              "Thiếu xác thực công ty",
            ].map((item, index) => (
              <div key={item}>
                <span>{item}</span>
                <b style={{ width: `${82 - index * 12}%` }} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="moderation-grid">
        <section className="panel table-panel">
          <PanelHeader
            icon={<ShieldAlert size={17} />}
            title="Hàng đợi kiểm duyệt"
            action="Dropdown lý do"
            onAction={() => setSelectedCase(moderationItems[0] || null)}
          />
          {moderationItems.map((item, index) => (
            <div className="post-row" key={item}>
              <div>
                <strong>{item}</strong>
                <span>
                  {index % 2
                    ? "Tự động ẩn, đã báo nhà tuyển dụng"
                    : "Cần admin quyết định"}
                </span>
              </div>
              <span className={index % 2 ? "status-pill red" : "status-pill yellow"}>
                {index % 2 ? "Đã ẩn" : "Cần xem"}
              </span>
              <button
                className="secondary-button small"
                onClick={() => setSelectedCase(item)}
              >
                Mở
              </button>
            </div>
          ))}
        </section>

        <section className="panel">
          <PanelHeader
            icon={<Flag size={17} />}
            title="Thư viện từ khóa cấm"
            action="Thêm từ"
          />
          <div className="word-cloud">
            {[
              "phí giữ chỗ",
              "cam kết lương ảo",
              "không hợp đồng",
              "thu hộ",
              "né thuế",
              "đặt cọc",
            ].map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
          <AuthNotice>
            Khi danh sách cập nhật, hệ thống quét lại toàn bộ bài đăng và gửi lý do xóa
            tới nhà tuyển dụng.
          </AuthNotice>
        </section>
      </div>

      {selectedCase && (
        <Modal title="Quyết định kiểm duyệt" onClose={() => setSelectedCase(null)}>
          <div className="reason-box">
            <strong>{selectedCase}</strong>
            <p>
              Admin phải chọn lý do chuẩn để hệ thống lưu trữ và gửi thông báo cho nhà
              tuyển dụng.
            </p>
          </div>
          <div className="form-grid">
            <Field label="Quyết định" value="Ẩn tin và thông báo nhà tuyển dụng" />
            <Field
              label="Dropdown lý do"
              value="Nội dung chứa từ ngữ không phù hợp hoặc vi phạm chính sách"
            />
          </div>
          <div className="modal-actions">
            <button className="secondary-button">Yêu cầu bằng chứng</button>
            <button className="secondary-button">Khôi phục tin</button>
            <button className="primary-button">Ẩn và gửi lý do</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
