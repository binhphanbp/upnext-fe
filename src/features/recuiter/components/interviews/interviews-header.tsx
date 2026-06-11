"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { ScheduleModal } from "../pipeline/schedule-modal";

export const InterviewsHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
            NHÀ TUYỂN DỤNG
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
            Lịch phỏng vấn, các vòng lặp và phản hồi của ứng viên
          </h1>
          <p className="text-sm text-gray-500 max-w-3xl font-medium">
            Quản lý phỏng vấn, giới hạn 2 vòng hẹn lại, trạng thái calendar sync, feedback
            rubric và email nhắc tự động.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="shrink-0 bg-primary hover:bg-primary/90 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2 text-sm font-bold transition-all shadow-sm cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          Lên lịch phỏng vấn
        </button>
      </div>

      <ScheduleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
