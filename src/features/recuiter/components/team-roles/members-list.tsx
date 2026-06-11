"use client";

import React from "react";
import { Users, ChevronRight } from "lucide-react";

interface Member {
  name: string;
  role: string;
  avatarLetter: string;
  avatarBg: string;
  description: string;
  status: "Active";
}

const members: Member[] = [
  {
    name: "Trần Hoàng Lan",
    role: "Chủ sở hữu",
    avatarLetter: "O",
    avatarBg: "bg-blue-500",
    description: "Tất cả quyền hạn",
    status: "Active",
  },
  {
    name: "Nguyễn Mỹ Anh",
    role: "Nhà tuyển dụng",
    avatarLetter: "R",
    avatarBg: "bg-emerald-500",
    description: "Không gian làm việc tuyển dụng",
    status: "Active",
  },
  {
    name: "Lê Quang Huy",
    role: "Trưởng bộ phận tuyển dụng",
    avatarLetter: "M",
    avatarBg: "bg-purple-500",
    description: "Không gian làm việc tuyển dụng",
    status: "Active",
  },
  {
    name: "Phạm Linh",
    role: "Quản lý tài chính",
    avatarLetter: "F",
    avatarBg: "bg-amber-500",
    description: "Chỉ thanh toán",
    status: "Active",
  },
];

export const MembersList = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-gray-500" />
          <h2 className="text-base font-bold text-gray-900">Thành viên</h2>
        </div>
        <button className="flex items-center gap-0.5 text-xs font-bold text-primary hover:underline cursor-pointer">
          Quản lý vị trí
          <ChevronRight className="h-3 w-3" />
        </button>
      </div>

      {/* List */}
      <div className="divide-y divide-gray-100">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0"
          >
            {/* Avatar Circle */}
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full text-white font-extrabold text-sm shrink-0 shadow-sm ${member.avatarBg}`}
            >
              {member.avatarLetter}
            </div>

            {/* Member Details */}
            <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2 min-w-0">
              <div className="min-w-0">
                <div className="text-sm font-bold text-gray-900">
                  {member.name} <span className="text-gray-400 font-medium mx-1">—</span>{" "}
                  <span className="text-gray-600 font-semibold">{member.role}</span>
                </div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">
                  {member.description}
                </div>
              </div>

              {/* Status Badge */}
              <div className="shrink-0 flex justify-start">
                <span className="inline-flex items-center rounded-full bg-[#e8f5f1] px-2.5 py-0.5 text-xs font-bold text-primary">
                  Đang hoạt động
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
