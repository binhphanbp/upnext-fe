"use client";

import { TrendingUp, ChevronRight } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Vietnamese mock data for Candidate Flow
const candidateFlowData = [
  { month: "T1", app: 70, interview: 30 },
  { month: "T2", app: 80, interview: 60 },
  { month: "T3", app: 30, interview: 20 },
  { month: "T4", app: 75, interview: 30 },
  { month: "T5", app: 90, interview: 65 },
  { month: "T6", app: 55, interview: 30 },
  { month: "T7", app: 35, interview: 20 },
  { month: "T8", app: 85, interview: 65 },
  { month: "T9", app: 50, interview: 25 },
  { month: "T10", app: 70, interview: 30 },
  { month: "T11", app: 50, interview: 20 },
  { month: "T12", app: 65, interview: 40 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number | string | Array<number | string>;
    name: string;
    [key: string]: unknown;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="backdrop-blur-md bg-gray-900/95 border border-gray-700 text-white p-3.5 rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] text-xs min-w-[140px] transition-all">
        <div className="font-semibold text-[13px] mb-2 text-gray-100 flex items-center gap-1.5 border-b border-gray-700/60 pb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
          Tháng {label?.replace("T", "")}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
              <span className="text-gray-300 font-medium">Ứng tuyển</span>
            </div>
            <span className="font-bold text-blue-400 text-sm">{payload[0]?.value}</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.5)]"></div>
              <span className="text-gray-300 font-medium">Phỏng vấn</span>
            </div>
            <span className="font-bold text-orange-400 text-sm">{payload[1]?.value}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export function CandidateFlowChart() {
  return (
    <div className="mb-6 rounded-2xl border border-gray-150 bg-white p-6 shadow-sm group relative">
      <div className="mb-2 flex items-start justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-bold text-gray-900">
            <div className="p-1.5 bg-orange-50 rounded-lg">
              <TrendingUp className="h-4 w-4 text-orange-500" />
            </div>
            Luồng ứng viên
          </div>
          <div className="flex items-baseline gap-3 mt-1">
            <span className="text-3xl font-extrabold text-gray-900">82</span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
              +12% so với kỳ trước
            </span>
          </div>
        </div>
        <button className="flex items-center gap-0.5 text-xs font-bold text-primary hover:text-emerald-700 transition-colors cursor-pointer group/btn mt-1">
          Chi tiết
          <ChevronRight className="h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="flex gap-5 mb-4 text-[11px] font-semibold justify-end">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-blue-500 rounded-[3px] shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
          <span className="text-gray-500">Ứng tuyển</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-orange-400 rounded-[3px] shadow-[0_0_8px_rgba(251,146,60,0.4)]"></div>
          <span className="text-gray-500">Phỏng vấn</span>
        </div>
      </div>

      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={candidateFlowData}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: "#64748b", fontSize: 11, fontWeight: 700 }}
              axisLine={false}
              tickLine={false}
              dy={10}
            />
            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
              ticks={[0, 25, 50, 75, 100]}
              dx={-10}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "#f8fafc", rx: 4, ry: 4 }}
            />
            <Bar dataKey="app" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={12} />
            <Bar dataKey="interview" fill="#fb923c" radius={[4, 4, 0, 0]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
