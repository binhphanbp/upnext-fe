"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

export function JobEditorPreview() {
  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-3">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab("editor")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "editor"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Sparkles className="h-4 w-4" />
            Soạn tin
          </button>
          <button
            onClick={() => setActiveTab("preview")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "preview"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Xem trước
          </button>
        </div>
        <button className="text-sm font-medium text-primary hover:text-primary/80">
          Thao tác hàng loạt →
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "editor" ? (
          <div className="space-y-6">
            {/* Job title */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Tiêu đề công việc
              </label>
              <input
                type="text"
                defaultValue="Senior Frontend Engineer"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Requirements */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Yêu cầu
              </label>
              <textarea
                rows={4}
                defaultValue="5+ years React, TypeScript experience Optimize go-design system: semantic HTML Real-world experience"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="mt-2 flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                <Sparkles className="h-4 w-4" />
                Tạo với AI
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="mb-1 text-xs font-medium text-gray-600">
                  Trọng số kỹ năng
                </div>
                <div className="text-2xl font-bold text-gray-900">50%</div>
                <div className="text-xs text-gray-500">React, FE kiến trúc</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="mb-1 text-xs font-medium text-gray-600">Kinh nghiệm</div>
                <div className="text-2xl font-bold text-gray-900">30%</div>
                <div className="text-xs text-gray-500">5+ năm, lĩnh vực</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="mb-1 text-xs font-medium text-gray-600">Khác</div>
                <div className="text-xs text-gray-500 mt-2">
                  Bằng cấp, ngôn ngữ, địa điểm
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">Nội dung xem trước</div>
        )}
      </div>
    </div>
  );
}
