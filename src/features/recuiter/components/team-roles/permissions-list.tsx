"use client";

import React from "react";
import { ShieldCheck, ChevronRight } from "lucide-react";

interface Permission {
  name: string;
  role: string;
  type: "owner" | "recruiter" | "finance";
}

const permissions: Permission[] = [
  {
    name: "Xem hồ sơ ứng viên (View CV)",
    role: "Nhà tuyển dụng",
    type: "recruiter",
  },
  {
    name: "Chuyển bước quy trình (Move pipeline)",
    role: "Nhà tuyển dụng",
    type: "recruiter",
  },
  {
    name: "Lên lịch phỏng vấn (Schedule interview)",
    role: "Nhà tuyển dụng",
    type: "recruiter",
  },
  {
    name: "Gửi đề nghị tuyển dụng (Send offer)",
    role: "Chủ sở hữu",
    type: "owner",
  },
  {
    name: "Quản lý thanh toán (Billing management)",
    role: "Tài chính",
    type: "finance",
  },
  {
    name: "Xác minh công ty (Company verification)",
    role: "Chủ sở hữu",
    type: "owner",
  },
];

export const PermissionsList = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-gray-500" />
          <h2 className="text-base font-bold text-gray-900">Nhóm quyền</h2>
        </div>
        <button className="flex items-center gap-0.5 text-xs font-bold text-primary hover:underline cursor-pointer">
          Chỉnh sửa
          <ChevronRight className="h-3 w-3" />
        </button>
      </div>

      {/* List */}
      <div className="divide-y divide-gray-100">
        {permissions.map((perm, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
          >
            <span className="text-sm font-semibold text-gray-800 truncate">
              {perm.name}
            </span>

            {/* Role Badge */}
            <div className="shrink-0">
              {perm.type === "owner" && (
                <span className="inline-flex items-center rounded-full bg-fuchsia-50 border border-fuchsia-100 px-2.5 py-0.5 text-xs font-bold text-fuchsia-700">
                  {perm.role}
                </span>
              )}
              {perm.type === "recruiter" && (
                <span className="inline-flex items-center rounded-full bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 text-xs font-bold text-indigo-700">
                  {perm.role}
                </span>
              )}
              {perm.type === "finance" && (
                <span className="inline-flex items-center rounded-full bg-violet-50 border border-violet-100 px-2.5 py-0.5 text-xs font-bold text-violet-700">
                  {perm.role}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
