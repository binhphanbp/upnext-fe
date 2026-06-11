"use client";

import { FileText, Calendar, Clock, ShieldAlert, Zap, ChevronRight } from "lucide-react";

const todoItems = [
  {
    label: "CV mới chưa xem",
    count: 12,
    icon: FileText,
    iconColor: "text-blue-500 bg-blue-50",
    badgeColor: "bg-blue-50 text-blue-700",
  },
  {
    label: "Lịch phỏng vấn chờ xác nhận",
    count: 5,
    icon: Calendar,
    iconColor: "text-amber-500 bg-amber-50",
    badgeColor: "bg-amber-50 text-amber-700",
  },
  {
    label: "Tin sắp hết hạn (≤ 3 ngày)",
    count: 4,
    icon: Clock,
    iconColor: "text-orange-500 bg-orange-50",
    badgeColor: "bg-orange-50 text-orange-700",
  },
  {
    label: "Điểm uy tín giảm",
    count: 1,
    icon: ShieldAlert,
    iconColor: "text-rose-500 bg-rose-50",
    badgeColor: "bg-rose-50 text-rose-700",
  },
  {
    label: "AI credit sắp hết (≤ 20%)",
    count: 1,
    icon: Zap,
    iconColor: "text-emerald-500 bg-emerald-50",
    badgeColor: "bg-emerald-50 text-emerald-700",
  },
];

export function TodoToday() {
  const totalCount = todoItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className="rounded-2xl border border-gray-150 bg-white p-6 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col h-full justify-between">
      <div>
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-extrabold text-gray-900">
              Việc cần xử lý hôm nay
            </h2>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-xs font-black text-white">
              {totalCount}
            </span>
          </div>
          <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
            Xem tất cả
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-2">
          {todoItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/30 p-2.5 hover:bg-gray-50 transition-all duration-150 group cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Soft Icon container */}
                  <div className={`p-2 rounded-lg shrink-0 ${item.iconColor}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-gray-700 truncate">
                    {item.label}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span
                    className={`text-xs font-extrabold px-2 py-0.5 rounded-full ${item.badgeColor}`}
                  >
                    {item.count}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-gray-300 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
