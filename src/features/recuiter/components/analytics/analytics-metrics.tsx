"use client";

import React from "react";
import { UserCheck, CalendarCheck, Clock, Coins } from "lucide-react";

export const AnalyticsMetrics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Metric 1 */}
      <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <UserCheck className="h-5 w-5" />
          </div>
          <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
            Ứng tuyển -&gt; Lọc hồ sơ
          </span>
        </div>
        <div className="mt-4">
          <div className="text-3xl font-black text-gray-900">36%</div>
          <div className="text-xs text-gray-400 font-medium mt-1">
            +8% so với tháng trước
          </div>
        </div>
      </div>

      {/* Metric 2 */}
      <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
            <CalendarCheck className="h-5 w-5" />
          </div>
          <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
            Đạt phỏng vấn
          </span>
        </div>
        <div className="mt-4">
          <div className="text-3xl font-black text-gray-900">42%</div>
          <div className="text-xs text-gray-400 font-medium mt-1">
            Nguồn tốt nhất: Giới thiệu
          </div>
        </div>
      </div>

      {/* Metric 3 */}
      <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
            <Clock className="h-5 w-5" />
          </div>
          <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
            Thời gian tuyển dụng
          </span>
        </div>
        <div className="mt-4">
          <div className="text-3xl font-black text-gray-900">18 ngày</div>
          <div className="text-xs text-gray-400 font-medium mt-1">Mục tiêu: 21 ngày</div>
        </div>
      </div>

      {/* Metric 4 */}
      <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
            <Coins className="h-5 w-5" />
          </div>
          <span className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
            Chi phí mỗi lượt tuyển
          </span>
        </div>
        <div className="mt-4">
          <div className="text-3xl font-black text-gray-900">$418</div>
          <div className="text-xs text-gray-400 font-medium mt-1">
            Quảng cáo + Tín dụng AI
          </div>
        </div>
      </div>
    </div>
  );
};
