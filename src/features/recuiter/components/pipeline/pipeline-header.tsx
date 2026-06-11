"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { ScheduleModal } from "./schedule-modal";

export const PipelineHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
            NHÀ TUYỂN DỤNG
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Quy trình, vòng phỏng vấn và thông báo ứng viên
          </h1>
          <p className="text-sm text-gray-500">
            Kéo thả ứng viên giữa các cột; khi chuyển sang phỏng vấn, hệ thống yêu cầu xếp
            lịch và giới hạn tối đa 2 vòng.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="shrink-0 bg-primary hover:bg-primary/90 text-white rounded-lg px-4 py-2 flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <Calendar className="w-4 h-4" />
          Lên lịch phỏng vấn
        </button>
      </div>

      <ScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
