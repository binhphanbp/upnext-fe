"use client";

import { Sparkles } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data for Applications & Shortlist
const applicationsData = [
  { day: "Tue", blue: 70, green: 45, dashed: 85 },
  { day: "Wed", blue: 55, green: 65, dashed: 75 },
  { day: "Thu", blue: 80, green: 40, dashed: 70 },
  { day: "Fri", blue: 50, green: 30, dashed: 85 },
  { day: "Sat", blue: 40, green: 75, dashed: 60 },
  { day: "Sun", blue: 70, green: 55, dashed: 80 },
];

export function ApplicationsChart() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Sparkles className="h-4 w-4 text-primary" />
          Đơn ứng tuyển & Danh sách rút gọn
        </div>
        <button className="text-sm font-medium text-primary hover:text-primary/80">
          Chi tiết →
        </button>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={applicationsData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="day"
            tick={{ fill: "#9ca3af", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="blue"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="green"
            stroke="#10b981"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="dashed"
            stroke="#9ca3af"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
