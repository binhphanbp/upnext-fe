"use client";

import { Button } from "@/components/ui/button";

const automations = [
  {
    id: 1,
    icon: (
      <svg
        className="h-4 w-4 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4"
        />
      </svg>
    ),
    text: "Gửi cập nhật lương cho nhóm đã lọc",
  },
  {
    id: 2,
    icon: (
      <svg
        className="h-4 w-4 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4"
        />
      </svg>
    ),
    text: "Tái kết nối ứng viên đã xem bởi nhà tuyển dụng",
  },
  {
    id: 3,
    icon: (
      <svg
        className="h-4 w-4 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4"
        />
      </svg>
    ),
    text: "Mời ứng viên DevOps tham gia hội thảo",
  },
  {
    id: 4,
    icon: (
      <svg
        className="h-4 w-4 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4"
        />
      </svg>
    ),
    text: "Tự động nhắc sau 7 lần không phản hồi",
  },
];

export function NurtureAutomation() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h2 className="text-base font-semibold text-gray-900">
              Tự động hóa chăm sóc
            </h2>
          </div>
          <Button
            variant="ghost"
            size="md"
            className="text-primary hover:text-primary/80"
          >
            Cấu hình
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-3">
          {automations.map((automation) => (
            <div
              key={automation.id}
              className="flex items-start gap-3 rounded-lg border border-gray-200 p-3 hover:border-primary/20 hover:bg-primary/5 transition-colors"
            >
              <div className="mt-0.5">{automation.icon}</div>
              <p className="flex-1 text-sm text-gray-700">{automation.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
