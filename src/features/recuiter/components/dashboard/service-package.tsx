"use client";

import { CreditCard, Star } from "lucide-react";

export function ServicePackage() {
  return (
    <div className="rounded-2xl border border-gray-150 bg-white p-6 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col h-full justify-between">
      <div>
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
            <CreditCard className="h-4.5 w-4.5 text-gray-500" />
            Gói dịch vụ & tài nguyên
          </h2>
          <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
            Quản lý gói
          </button>
        </div>

        {/* Package Badges */}
        <div className="mb-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[13px] font-extrabold text-gray-900">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
            Gói Pro Hiring
          </div>
          <span className="shrink-0 rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600 leading-none">
            Đang hoạt động
          </span>
        </div>

        {/* Resource List */}
        <div className="space-y-3.5 text-xs">
          <div className="flex justify-between items-center border-b border-gray-50 pb-2.5">
            <span className="font-bold text-gray-500">Ngày hết hạn</span>
            <span className="font-extrabold text-gray-800">
              15/07/2024{" "}
              <span className="font-medium text-gray-400 text-[10px] ml-1">
                (còn 44 ngày)
              </span>
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-50 pb-2.5">
            <span className="font-bold text-gray-500">Lượt đăng tin còn lại</span>
            <span className="font-extrabold text-gray-800">14 / 30</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-50 pb-2.5">
            <span className="font-bold text-gray-500">Lượt đẩy tin còn lại</span>
            <span className="font-extrabold text-gray-800">22 / 50</span>
          </div>

          <div className="flex flex-col gap-1.5 pt-1">
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-500">AI Credits còn lại</span>
              <span className="font-extrabold text-gray-800">
                1,240 / 2,000{" "}
                <span className="text-[10px] font-bold text-emerald-600 ml-1">62%</span>
              </span>
            </div>
            {/* Credits progress bar */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[62%] rounded-full bg-emerald-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
