"use client";

import React from "react";
import { Sparkles, Sliders, ChevronRight } from "lucide-react";

interface AiTask {
  title: string;
  description: string;
}

const aiTasks: AiTask[] = [
  {
    title: "AI viết tin tuyển dụng",
    description: "Đã cấu hình cho quy trình tuyển dụng IT.",
  },
  {
    title: "Match Score Ranking",
    description: "Đã cấu hình cho quy trình tuyển dụng IT.",
  },
  {
    title: "Chatbot hỗ trợ",
    description: "Đã cấu hình cho quy trình tuyển dụng IT.",
  },
];

export const AiOperations = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-150 p-6 shadow-sm flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <Sliders className="h-5 w-5 text-gray-500" />
            <h2 className="text-base font-bold text-gray-900">Vận hành AI</h2>
          </div>
          <button className="flex items-center gap-0.5 text-xs font-bold text-primary hover:underline cursor-pointer">
            Cấu hình
            <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        {/* AI Task List */}
        <div className="space-y-3">
          {aiTasks.map((task, index) => (
            <div
              key={index}
              className="flex items-start gap-3 border border-gray-100 rounded-xl p-3 bg-gray-50/20 hover:bg-gray-50/50 transition-all cursor-pointer"
            >
              {/* Sparkle Icon Badge */}
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0">
                <Sparkles className="h-4 w-4" />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <div className="text-sm font-bold text-gray-900 truncate">
                  {task.title}
                </div>
                <div className="text-xs text-gray-400 font-medium mt-0.5 leading-relaxed">
                  {task.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
