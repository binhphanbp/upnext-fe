"use client";

import React from "react";
import { CalendarRange, ChevronRight } from "lucide-react";

interface ScheduleItem {
  dayShort: string;
  dateNum: string;
  timeTitle: string;
  candidateInfo: string;
  status: "confirmed" | "waiting";
}

const schedules: ScheduleItem[] = [
  {
    dayShort: "Mon",
    dateNum: "22",
    timeTitle: "Mon 09:00 – Backend system design",
    candidateInfo: "Nguyễn Minh Khoa • Vòng 1/2",
    status: "confirmed",
  },
  {
    dayShort: "Tue",
    dateNum: "23",
    timeTitle: "Tue 14:00 – Frontend architecture",
    candidateInfo: "Trần Bảo Anh • Vòng 2/2",
    status: "waiting",
  },
  {
    dayShort: "Wed",
    dateNum: "24",
    timeTitle: "Wed 10:30 – Culture fit",
    candidateInfo: "Phạm Quốc Việt • Vòng 1/2",
    status: "confirmed",
  },
  {
    dayShort: "Thu",
    dateNum: "25",
    timeTitle: "Thu 15:00 – Offer discussion",
    candidateInfo: "Lê Thu Hà • Vòng 2/2",
    status: "waiting",
  },
  {
    dayShort: "Fri",
    dateNum: "26",
    timeTitle: "Fri 09:00 – Technical loop 2",
    candidateInfo: "Đỗ Minh Quân • Vòng 1/2",
    status: "confirmed",
  },
];

export const ScheduleList = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <CalendarRange className="h-5 w-5 text-gray-500" />
          <h2 className="text-base font-bold text-gray-900">Lịch trình tuần này</h2>
        </div>
        <button className="flex items-center gap-0.5 text-xs font-bold text-primary hover:underline cursor-pointer">
          Xem lịch
          <ChevronRight className="h-3 w-3" />
        </button>
      </div>

      {/* List */}
      <div className="divide-y divide-gray-100">
        {schedules.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0"
          >
            {/* Date Badge */}
            <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-100 rounded-xl w-12 h-14 shrink-0">
              <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-0.5">
                {item.dayShort}
              </span>
              <span className="text-lg font-black text-gray-800 leading-none">
                {item.dateNum}
              </span>
            </div>

            {/* Info Section */}
            <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2 min-w-0">
              <div className="text-sm min-w-0 truncate">
                <span className="font-bold text-gray-900 mr-2">{item.timeTitle}</span>
                <span className="text-gray-500 font-medium whitespace-nowrap">
                  {item.candidateInfo}
                </span>
              </div>

              {/* Status Badge */}
              <div className="shrink-0 flex justify-start">
                {item.status === "confirmed" ? (
                  <span className="inline-flex items-center rounded-full bg-[#e8f5f1] px-2.5 py-0.5 text-xs font-bold text-primary">
                    Đã xác nhận
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700">
                    Đang chờ
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
