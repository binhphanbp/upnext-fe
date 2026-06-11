"use client";

import React from "react";
import { Download, BarChart2 } from "lucide-react";

export const AnalyticsHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
      <div className="flex-1">
        <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
          NHÀ TUYỂN DỤNG
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          Phân tích tuyển dụng, chất lượng phễu và hiệu quả nguồn (ROI)
        </h1>
        <p className="text-sm text-gray-500 max-w-3xl font-medium">
          Đo hiệu quả từng nguồn ứng viên, tỷ lệ chuyển đổi, SLA xử lý, chi phí tuyển dụng
          và chất lượng tuyển chọn.
        </p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg px-4 py-2 flex items-center justify-center gap-2 text-sm font-bold transition-all shadow-sm cursor-pointer">
          <Download className="w-4 h-4 text-gray-500" />
          Xuất CSV
        </button>
        <button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2 text-sm font-bold transition-all shadow-sm cursor-pointer">
          <BarChart2 className="w-4 h-4" />
          Lập báo cáo
        </button>
      </div>
    </div>
  );
};
