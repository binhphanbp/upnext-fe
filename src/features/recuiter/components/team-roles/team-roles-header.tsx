"use client";

import React from "react";
import { UserPlus } from "lucide-react";

export const TeamRolesHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
      <div className="flex-1">
        <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
          NHÀ TUYỂN DỤNG
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          Thành viên nhóm, vai trò tuyển dụng và quy trình phê duyệt
        </h1>
        <p className="text-sm text-gray-500 max-w-3xl font-medium">
          Phân quyền recruiter, hiring manager, finance; kiểm soát ai được xem CV, gửi
          offer, mua gói và khóa tin tuyển dụng.
        </p>
      </div>
      <button className="shrink-0 bg-primary hover:bg-primary/90 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2 text-sm font-bold transition-all shadow-sm cursor-pointer">
        <UserPlus className="w-4 h-4" />
        Mời thành viên
      </button>
    </div>
  );
};
