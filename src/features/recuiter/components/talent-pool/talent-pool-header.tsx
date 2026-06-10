"use client";

import { Button } from "@/components/ui/button";

export function TalentPoolHeader() {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between">
        <div className="text-xs font-medium uppercase tracking-wide text-primary">
          NHÀ TUYỂN DỤNG
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Chiến dịch chăm sóc
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Thêm vào nhóm
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Nhóm ứng viên tiềm năng, ứng viên đã lưu và chiến dịch chăm sóc
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Lưu ứng viên tiềm năng theo tag, consent, lương, sẵn sàng và chiến dịch email
          chăm sóc cho đối tuyển đúng sáu
        </p>
      </div>
    </div>
  );
}
