"use client";

import React from "react";
import { BarChart3, ChevronRight } from "lucide-react";

interface SourceItem {
  name: string;
  hires: number;
  score: number;
  avatarBg: string;
  avatarLetter: string;
}

const sources: SourceItem[] = [
  {
    name: "UpNext AI match",
    hires: 46,
    score: 92,
    avatarBg: "bg-blue-500",
    avatarLetter: "U",
  },
  {
    name: "LinkedIn import",
    hires: 12,
    score: 85,
    avatarBg: "bg-emerald-500",
    avatarLetter: "L",
  },
  {
    name: "Referral (Giới thiệu)",
    hires: 8,
    score: 78,
    avatarBg: "bg-purple-500",
    avatarLetter: "R",
  },
  {
    name: "Career site (Trang tuyển dụng)",
    hires: 6,
    score: 71,
    avatarBg: "bg-amber-500",
    avatarLetter: "C",
  },
];

export const SourcePerformance = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-gray-500" />
            <h2 className="text-base font-bold text-gray-900">Hiệu quả nguồn tuyển</h2>
          </div>
          <button className="flex items-center gap-0.5 text-xs font-bold text-primary hover:underline cursor-pointer">
            Chi tiết
            <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        {/* List */}
        <div className="space-y-4">
          {sources.map((source, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* Avatar Letter */}
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-white font-extrabold text-xs shrink-0 shadow-sm ${source.avatarBg}`}
              >
                {source.avatarLetter}
              </div>

              {/* Source Info */}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-gray-900 truncate">
                  {source.name} <span className="text-gray-400 font-medium mx-1">—</span>{" "}
                  <span className="text-gray-600 font-semibold">
                    {source.hires} lượt tuyển
                  </span>
                </div>
                <div className="text-xs text-gray-400 font-semibold mt-0.5">
                  Điểm chất lượng:{" "}
                  <span className="text-primary font-bold">{source.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
