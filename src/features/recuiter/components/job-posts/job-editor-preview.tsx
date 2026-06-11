"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

const previewHighlights = [
  { label: "Trong tieu de", value: "React, Next.js, TypeScript" },
  { label: "Kinh nghiem", value: "Tu 3 nam tro len" },
  { label: "Goi y AI", value: "Mo ta, yeu cau va phuc loi" },
];

export function JobEditorPreview() {
  const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");
  const [prompt, setPrompt] = useState(
    "Can tao JD Senior Frontend Developer tai Ha Noi, lam viec Hybrid, uu tien React va Next.js.",
  );

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-3">
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("editor")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "editor"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Sparkles className="h-4 w-4" />
            Soan tin
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "preview"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Xem truoc
          </button>
        </div>
        <button
          type="button"
          className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Mau goi y
        </button>
      </div>

      <div className="p-6">
        {activeTab === "editor" ? (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="ai-job-prompt"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Mo ta ngan de AI goi y bai dang
              </label>
              <textarea
                id="ai-job-prompt"
                rows={4}
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Nhap vai tro, dia diem, hinh thuc lam viec va ky nang can co..."
              />
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              <Sparkles className="h-4 w-4" />
              Tao voi AI
            </button>

            <div className="grid gap-4 sm:grid-cols-3">
              {previewHighlights.map((item) => (
                <div key={item.label} className="rounded-lg bg-gray-50 p-4">
                  <div className="mb-1 text-xs font-medium text-gray-600">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-6">
            <p className="text-sm font-semibold text-gray-900">
              Ban xem truoc ban nhap AI
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Noi dung nay la khu preview nhe de doi recruiter nhin nhanh truoc khi day du
              thong tin vao form chinh.
            </p>
            <p className="mt-4 rounded-lg bg-white p-4 text-sm text-gray-700 shadow-sm">
              {prompt}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
