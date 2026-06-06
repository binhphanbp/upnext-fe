"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  AlertTriangle,
  Banknote,
  BriefcaseBusiness,
  Flag,
  Gauge,
  ShieldAlert,
  UserCheck,
  UsersRound,
} from "lucide-react";
import {
  ChartTooltip,
  InsightCard,
  Metric,
  PageHeader,
  PanelHeader,
} from "@/components/ui";

// Dữ liệu giả định từ mã nguồn[cite: 2]
const adminGrowth = [
  { day: "T2", candidates: 1840, employers: 320, posts: 92 },
  { day: "T3", candidates: 2110, employers: 380, posts: 108 },
  { day: "T4", candidates: 2380, employers: 410, posts: 126 },
  { day: "T5", candidates: 2660, employers: 460, posts: 144 },
  { day: "T6", candidates: 2920, employers: 520, posts: 161 },
  { day: "T7", candidates: 3180, employers: 570, posts: 148 },
  { day: "CN", candidates: 3420, employers: 610, posts: 176 },
];

const revenueByPlan = [
  { plan: "Dùng thử", revenue: 0, accounts: 420 },
  { plan: "Khởi đầu", revenue: 9800, accounts: 186 },
  { plan: "Tăng trưởng", revenue: 24800, accounts: 142 },
  { plan: "Doanh nghiệp", revenue: 8200, accounts: 18 },
];

const roleDistribution = [
  { name: "Ứng viên", value: 72, color: "#3b82f6" },
  { name: "Nhà tuyển dụng", value: 21, color: "#10a778" },
  { name: "Admin", value: 7, color: "#574bf5" },
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

// Component Dashboard chính[cite: 2]
export function AdminDashboard() {
  return (
    <div className="page-scroll">
      <PageHeader
        eyebrow="Admin"
        title="Trung tâm vận hành nền tảng, doanh thu và sức khỏe AI"
        description="Bảng điều khiển vận hành toàn nền tảng: tăng trưởng ứng viên/nhà tuyển dụng, doanh thu gói, kiểm duyệt, phân quyền và sức khỏe AI."
        actions={
          <button className="primary-button">
            <Flag size={15} /> Xem cảnh báo
          </button>
        }
      />

      <div className="admin-kpi-grid">
        <InsightCard
          title="Người dùng mới"
          value="1,284"
          icon={UsersRound}
          color="#3b82f6"
          note="Ứng viên +18%, nhà tuyển dụng +7%"
        />
        <InsightCard
          title="Tin mới"
          value="386"
          icon={BriefcaseBusiness}
          color="#574bf5"
          note="27 tin chờ kiểm duyệt"
        />
        <InsightCard
          title="Doanh thu"
          value="$42.8k"
          icon={Banknote}
          color="#10a778"
          note="Doanh thu gói dịch vụ 30 ngày"
        />
        <InsightCard
          title="Độ trễ AI"
          value="1.4s"
          icon={Gauge}
          color="#f59e0b"
          note="Match scoring p95"
        />
      </div>

      <div className="admin-command-grid">
        <section className="panel admin-chart-card wide">
          <PanelHeader
            icon={<UsersRound size={17} />}
            title="Tăng trưởng người dùng, nhà tuyển dụng và tin đăng"
            action="Mở phân tích"
          />
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={adminGrowth}>
              <defs>
                <linearGradient id="candidateGrowth" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.34} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id="employerGrowth" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#10a778" stopOpacity={0.34} />
                  <stop offset="95%" stopColor="#10a778" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#ececf2" strokeDasharray="5 5" />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#858897", fontSize: 11 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#858897", fontSize: 11 }}
                width={42}
              />
              <Tooltip content={<ChartTooltip />} />
              <Area
                type="monotone"
                dataKey="candidates"
                stroke="#3b82f6"
                strokeWidth={2.4}
                fill="url(#candidateGrowth)"
                isAnimationActive={false}
              />
              <Area
                type="monotone"
                dataKey="employers"
                stroke="#10a778"
                strokeWidth={2.4}
                fill="url(#employerGrowth)"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="chart-summary-row">
            <Metric
              title="Tăng trưởng ứng viên"
              value="+18%"
              detail="Nguồn organic và referral"
            />
            <Metric
              title="Tăng trưởng NTD"
              value="+7%"
              detail="Paid acquisition ổn định"
            />
            <Metric title="Tin mới" value="176" detail="Đỉnh CN, 27 tin chờ duyệt" />
          </div>
        </section>

        <section className="panel admin-chart-card">
          <PanelHeader
            icon={<UserCheck size={17} />}
            title="Tỷ trọng nhóm người dùng"
            action="Vai trò"
          />
          <ResponsiveContainer width="100%" height={230}>
            <PieChart>
              <Pie
                data={roleDistribution}
                innerRadius={58}
                outerRadius={86}
                paddingAngle={4}
                dataKey="value"
                isAnimationActive={false}
              >
                {roleDistribution.map((entry) => (
                  <Cell fill={entry.color} key={entry.name} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="chart-legend">
            {roleDistribution.map((entry) => (
              <span key={entry.name}>
                <i style={{ background: entry.color }} />
                {entry.name} {entry.value}%
              </span>
            ))}
          </div>
        </section>

        <section className="panel admin-chart-card">
          <PanelHeader
            icon={<Banknote size={17} />}
            title="Doanh thu theo gói"
            action="Tài chính"
          />
          <ResponsiveContainer width="100%" height={230}>
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
                width={42}
              />
              <Tooltip content={<ChartTooltip />} />
              <Bar
                dataKey="revenue"
                fill="#574bf5"
                radius={[8, 8, 2, 2]}
                maxBarSize={44}
                isAnimationActive={false}
              />
            </BarChart>
          </ResponsiveContainer>
        </section>

        <section className="panel admin-chart-card">
          <PanelHeader
            icon={<ShieldAlert size={17} />}
            title="Khối lượng kiểm duyệt"
            action="Hàng đợi"
          />
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={moderationTrend}>
              <CartesianGrid vertical={false} stroke="#ececf2" strokeDasharray="5 5" />
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
                dataKey="flagged"
                stroke="#f59e0b"
                strokeWidth={2.4}
                dot={false}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="hidden"
                stroke="#ef4444"
                strokeWidth={2.4}
                dot={false}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="restored"
                stroke="#10a778"
                strokeWidth={2.4}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section className="panel admin-alert-panel">
          <PanelHeader
            icon={<AlertTriangle size={17} />}
            title="Cảnh báo hệ thống"
            action="Mở hàng đợi"
          />
          {[
            "Tin tuyển dụng chứa từ ngữ lách luật",
            "Nhà tuyển dụng có điểm uy tín dưới 50",
            "Độ trễ AI matching vượt ngưỡng 1.8s",
            "Yêu cầu hoàn tiền cần 2 người phê duyệt",
          ].map((alert) => (
            <div className="alert-row" key={alert}>
              <AlertTriangle size={15} />
              <span>{alert}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
