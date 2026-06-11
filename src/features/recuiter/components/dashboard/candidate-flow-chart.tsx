"use client";

import { useState } from "react";
import {
  Eye,
  FileText,
  ListFilter,
  Users,
  Gift,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, YAxis } from "recharts";

const funnelSteps = [
  {
    label: "Lượt xem",
    value: "24,568",
    percent: "100%",
    icon: Eye,
    color: "text-blue-500",
  },
  {
    label: "Ứng tuyển",
    value: "1,284",
    percent: "5.23%",
    icon: FileText,
    color: "text-teal-500",
  },
  {
    label: "Sàng lọc",
    value: "248",
    percent: "19.31%",
    icon: ListFilter,
    color: "text-indigo-500",
  },
  {
    label: "Phỏng vấn",
    value: "56",
    percent: "22.58%",
    icon: Users,
    color: "text-amber-500",
  },
  {
    label: "Offer",
    value: "18",
    percent: "32.14%",
    icon: Gift,
    color: "text-rose-500",
  },
  {
    label: "Tuyển thành công",
    value: "12",
    percent: "66.67%",
    icon: CheckCircle,
    color: "text-emerald-500",
  },
];

const dropOffs = [
  { count: "23,284", rate: "94.77%" },
  { count: "1,036", rate: "80.69%" },
  { count: "192", rate: "77.42%" },
  { count: "38", rate: "67.86%" },
  { count: "6", rate: "33.33%" },
];

// Flat-bottom values matching the visual drop-off in the design
const chartData = [
  { name: "Lượt xem", value: 100 },
  { name: "Ứng tuyển", value: 30 },
  { name: "Sàng lọc", value: 20 },
  { name: "Phỏng vấn", value: 15 },
  { name: "Offer", value: 10 },
  { name: "Tuyển thành công", value: 5 },
];

export function CandidateFlowChart() {
  const [selectedRange, setSelectedRange] = useState("30 ngày");
  const [isOpen, setIsOpen] = useState(false);
  const ranges = ["7 ngày", "30 ngày", "Tháng này", "Năm nay"];

  return (
    <div className="rounded-2xl border border-gray-150 bg-white p-6 shadow-2xs hover:shadow-xs transition-all duration-200 h-full flex flex-col">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-base font-extrabold text-gray-900">Phễu tuyển dụng</h2>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 rounded-lg border border-gray-250 bg-white px-3 py-1.5 text-xs font-bold text-gray-700 hover:bg-gray-50 shadow-3xs cursor-pointer"
          >
            {selectedRange}
            <ChevronDown className="h-3.5 w-3.5 text-gray-500" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-1.5 z-30 w-28 rounded-xl border border-gray-150 bg-white p-1 shadow-md animate-scale-up">
              {ranges.map((range) => (
                <button
                  key={range}
                  onClick={() => {
                    setSelectedRange(range);
                    setIsOpen(false);
                  }}
                  className="w-full text-left rounded-lg px-3 py-1.5 text-xs font-bold text-gray-650 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                >
                  {range}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Funnel content container */}
      <div className="relative flex flex-col flex-1 justify-center mt-2">
        {/* Step Cards Grid */}
        <div className="grid grid-cols-6 text-center relative z-20">
          {funnelSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-center relative">
                {/* Header Row with Icon */}
                <div className="relative flex items-center justify-center w-full mb-3 h-5">
                  <div className="flex items-center gap-1 text-[9px] lg:text-[10px] xl:text-[11px] font-bold text-gray-500">
                    <Icon className={`h-3 w-3 xl:h-3.5 xl:w-3.5 ${step.color}`} />
                    <span className="whitespace-nowrap hidden sm:block">
                      {step.label}
                    </span>
                  </div>

                  {/* Arrow centered between columns, with manual adjustment for the last one due to long text */}
                  {idx < 5 && (
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 text-gray-300 font-light text-sm z-10 pointer-events-none ${
                        idx === 4
                          ? "right-2 xl:right-3 translate-x-0"
                          : "right-0 translate-x-1/2"
                      }`}
                    >
                      →
                    </div>
                  )}
                </div>

                {/* Values (bare text, no gray boxes) */}
                <span className="text-xl xl:text-3xl font-extrabold text-gray-900 leading-none">
                  {step.value}
                </span>
                <span className="mt-2 text-[10px] xl:text-[11px] font-bold text-emerald-600 leading-none">
                  {step.percent}
                </span>
              </div>
            );
          })}
        </div>

        {/* Recharts Area Chart Funnel - Flat Bottom */}
        <div className="relative h-28 mt-4 select-none z-10 w-[83.333333%] mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#6ee7b7" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <YAxis domain={[0, 100]} hide={true} />
              <Area
                type="linear"
                dataKey="value"
                stroke="none"
                fill="url(#funnelGradient)"
                isAnimationActive={true}
                activeDot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Drop off rates description row */}
        <div className="relative h-10 w-full mt-2 z-20">
          {dropOffs.map((drop, idx) => {
            const leftPercent = 16.666 + idx * 16.666;
            return (
              <div
                key={idx}
                className="absolute flex flex-col items-center leading-tight"
                style={{ left: `${leftPercent}%`, transform: "translateX(-50%)" }}
              >
                <span className="text-[10.5px] font-bold text-rose-500 whitespace-nowrap">
                  Rớt {drop.count}
                </span>
                <span className="text-[10px] font-semibold text-gray-400">
                  ({drop.rate})
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
