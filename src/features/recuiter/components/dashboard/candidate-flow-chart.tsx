"use client";

import { TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data for Candidate Flow chart
const candidateFlowData = [
  { month: "13 Jan", orange: 30, blue: 70 },
  { month: "Feb", orange: 60, blue: 80 },
  { month: "Mar", orange: 20, blue: 30 },
  { month: "Apr", orange: 30, blue: 75 },
  { month: "May", orange: 65, blue: 90 },
  { month: "Jun", orange: 30, blue: 55 },
  { month: "Jul", orange: 20, blue: 35 },
  { month: "Aug", orange: 65, blue: 85 },
  { month: "Sep", orange: 25, blue: 50 },
  { month: "Oct", orange: 30, blue: 70 },
  { month: "Nov", orange: 20, blue: 50 },
  { month: "31 Dec", orange: 40, blue: 65 },
];

export function CandidateFlowChart() {
  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-600">
            <TrendingUp className="h-4 w-4" />
            Luồng ứng viên
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">82</span>
            <span className="text-sm font-medium text-green-600">
              +12% so với kỳ trước
            </span>
          </div>
        </div>
        <button className="text-sm font-medium text-primary hover:text-primary/80">
          Chi tiết →
        </button>
      </div>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={candidateFlowData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            ticks={[0, 25, 50, 75, 100]}
          />
          <Tooltip />
          <Bar dataKey="orange" fill="#fb923c" radius={[4, 4, 0, 0]} />
          <Bar dataKey="blue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
