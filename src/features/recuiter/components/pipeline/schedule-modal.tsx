"use client";

import React from "react";
import { X, AlertTriangle } from "lucide-react";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal = ({ isOpen, onClose }: ScheduleModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-[640px] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-2">
          <h2 className="text-xl font-bold text-gray-900">Lên lịch phỏng vấn</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 pt-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-semibold text-gray-500 mb-1.5">
                Ứng viên
              </label>
              <input
                type="text"
                readOnly
                value="Nguyen Minh Khoa"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-gray-500 mb-1.5">
                Vòng phỏng vấn
              </label>
              <input
                type="text"
                readOnly
                value="Phỏng vấn kỹ thuật - Vòng 1/2"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[13px] font-semibold text-gray-500 mb-1.5">
                Ngày
              </label>
              <input
                type="text"
                defaultValue="24 Tháng 5 2026"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-gray-500 mb-1.5">
                Thời gian
              </label>
              <input
                type="text"
                defaultValue="09:00 - 10:00"
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Warning Message */}
          <div className="mt-2 flex items-center gap-3 rounded-lg border border-amber-200 bg-amber-50/50 p-3 text-sm text-amber-800">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />
            <p>
              Nếu ứng viên từ chối và đề xuất lịch khác, hệ thống chỉ cho phép tối đa 2
              vòng gửi lại để tránh spam.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-2 pb-6 flex gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Lưu nháp
          </button>
          <button className="rounded-lg bg-primary hover:bg-primary/90 px-4 py-2 text-sm font-bold text-white transition-colors shadow-sm">
            Gửi lời mời + email
          </button>
        </div>
      </div>
    </div>
  );
};
