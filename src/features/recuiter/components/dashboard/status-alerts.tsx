"use client";

import { ShieldCheck, AlertCircle } from "lucide-react";

const alertItems = [
  {
    label: "Bài đăng đang chờ duyệt",
    count: 1,
    highlight: true,
    color: "bg-amber-50 text-amber-700",
  },
  {
    label: "Bài đăng bị từ chối",
    count: 0,
    highlight: false,
    color: "bg-gray-50 text-gray-400",
  },
  {
    label: "Bài đăng hết hạn",
    count: 2,
    highlight: true,
    color: "bg-amber-50 text-amber-700",
  },
  {
    label: "Cảnh báo hệ thống",
    count: 0,
    highlight: false,
    color: "bg-gray-50 text-gray-400",
  },
];

export function StatusAlerts() {
  return (
    <div className="rounded-2xl border border-gray-150 bg-white p-6 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col h-full justify-between">
      <div>
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
            <AlertCircle className="h-4.5 w-4.5 text-gray-500" />
            Trạng thái & cảnh báo
          </h2>
          <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
            Xem tất cả
          </button>
        </div>

        {/* Alerts List */}
        <div className="space-y-2.5">
          {alertItems.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center text-xs border-b border-gray-50 pb-2"
            >
              <span
                className={`font-bold ${item.count > 0 ? "text-gray-700" : "text-gray-500"}`}
              >
                {item.label}
              </span>
              <span
                className={`flex h-5 min-w-5 items-center justify-center rounded-full text-[10px] font-black px-1.5 ${item.color}`}
              >
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* System Status Banner */}
      <div className="mt-4 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-50/75 px-4 py-2.5 text-xs font-extrabold text-emerald-700 shadow-3xs border border-emerald-100/40">
        <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
        Hệ thống hoạt động ổn định
      </div>
    </div>
  );
}
