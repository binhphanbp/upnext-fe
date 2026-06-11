"use client";

import { useState } from "react";
import { Download } from "lucide-react";

export function DashboardHeader() {
  const [activeFilter, setActiveFilter] = useState("30 ngày");
  const filters = ["7 ngày", "30 ngày", "Tháng này", "Năm nay"];

  return (
    <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <h1 className="text-2xl font-black text-gray-900">Dashboard tuyển dụng</h1>
        <p className="mt-1 text-sm font-medium text-gray-500">
          Tổng quan hiệu quả tuyển dụng của bạn
        </p>
      </div>

      <div className="flex items-center gap-3 self-end sm:self-auto">
        {/* Time filters group */}
        <div className="flex rounded-xl bg-gray-100 p-1">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-gray-900 shadow-xs"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Export button */}
        <button className="flex items-center gap-2 rounded-xl border border-gray-250 bg-white px-4 py-2 text-xs font-bold text-gray-700 hover:bg-gray-50 shadow-2xs transition-all cursor-pointer">
          <Download className="h-4 w-4 text-gray-500" />
          Xuất báo cáo
        </button>
      </div>
    </div>
  );
}
