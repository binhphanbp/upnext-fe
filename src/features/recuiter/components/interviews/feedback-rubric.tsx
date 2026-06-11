"use client";

import React from "react";
import { Video, AlertTriangle, ChevronRight } from "lucide-react";

export const FeedbackRubric = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <Video className="h-5 w-5 text-gray-500" />
            <h2 className="text-base font-bold text-gray-900">Tiêu chí đánh giá</h2>
          </div>
          <button className="flex items-center gap-0.5 text-xs font-bold text-primary hover:underline cursor-pointer">
            Chỉnh sửa
            <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        {/* Rubric Grid */}
        <div className="grid grid-cols-2 border-t border-gray-100 pt-4 mt-2">
          {/* Top Left */}
          <div className="pr-4 pb-4 border-r border-b border-gray-100">
            <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
              Kỹ thuật
            </div>
            <div className="text-3xl font-black text-gray-900 my-1">40%</div>
            <div className="text-xs text-gray-400 font-medium leading-relaxed">
              Kiến trúc, độ sâu mã nguồn
            </div>
          </div>
          {/* Top Right */}
          <div className="pl-4 pb-4 border-b border-gray-100">
            <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
              Sản phẩm
            </div>
            <div className="text-3xl font-black text-gray-900 my-1">25%</div>
            <div className="text-xs text-gray-400 font-medium leading-relaxed">
              Hiểu biết lĩnh vực, tác động
            </div>
          </div>
          {/* Bottom Left */}
          <div className="pr-4 pt-4 border-r border-gray-100">
            <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
              Giao tiếp
            </div>
            <div className="text-3xl font-black text-gray-900 my-1">20%</div>
            <div className="text-xs text-gray-400 font-medium leading-relaxed">
              Sự rõ ràng, các đánh đổi
            </div>
          </div>
          {/* Bottom Right */}
          <div className="pl-4 pt-4">
            <div className="text-xs font-extrabold text-gray-500 uppercase tracking-wider">
              Văn hóa
            </div>
            <div className="text-3xl font-black text-gray-900 my-1">15%</div>
            <div className="text-xs text-gray-400 font-medium leading-relaxed">
              Sự phù hợp với đội ngũ
            </div>
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/40 p-4 text-xs text-amber-800 font-medium leading-relaxed">
        <AlertTriangle className="h-4.5 w-4.5 shrink-0 text-amber-600 mt-0.5" />
        <p>
          Ứng viên chỉ được đề xuất lịch khác một lần. Nếu nhà tuyển dụng gửi lại quá 2
          vòng, hệ thống yêu cầu cung cấp lý do.
        </p>
      </div>
    </div>
  );
};
