"use client";

import React, { useState } from "react";
import {
  X,
  Sparkles,
  Calendar,
  ShieldAlert,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { JobPost } from "./types";

interface BoostModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobPost | null;
  onConfirm: (jobId: string, days: number, cost: number) => void;
  creditsLeft: number;
}

export function BoostModal({
  isOpen,
  onClose,
  job,
  onConfirm,
  creditsLeft,
}: BoostModalProps) {
  const [days, setDays] = useState<number>(7);
  const costPerDay = 10;
  const totalCost = days * costPerDay;
  const isOutOfCredits = creditsLeft < totalCost;

  if (!isOpen || !job) return null;

  const handleConfirm = () => {
    if (isOutOfCredits) return;
    onConfirm(job.id, days, totalCost);
    onClose();
  };

  // Calculate target date based on current date + selected days
  const getTargetDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toLocaleDateString("vi-VN");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md scale-95 animate-in fade-in zoom-in-95 rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl duration-200">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2 text-purple-600">
            <Sparkles className="h-5 w-5 fill-purple-100" />
            <h3 className="text-lg font-bold text-gray-900">Đẩy mạnh tin tuyển dụng</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-500">Đang chọn đẩy tin cho:</p>
            <p className="font-semibold text-gray-900 text-sm">{job.title}</p>
          </div>

          {/* Feature Highlight */}
          <div className="rounded-xl bg-purple-50 p-3.5 border border-purple-100 text-xs text-purple-950 space-y-1.5">
            <p className="font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-purple-600 shrink-0" />
              Quyền lợi khi Đẩy mạnh:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-1 text-purple-800">
              <li>Tin hiển thị ưu tiên ở đầu kết quả tìm kiếm của ứng viên.</li>
              <li>Tự động gợi ý cho ứng viên có Match Score &gt; 80%.</li>
              <li>Tăng gấp 3 lần tỷ lệ tiếp cận và nhận CV chất lượng.</li>
            </ul>
          </div>

          {/* Boost Duration Selector */}
          <div>
            <label className="mb-2 block text-xs font-semibold text-gray-700">
              Chọn thời gian đẩy tin:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[3, 7, 15, 30].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDays(d)}
                  className={`rounded-lg py-2.5 text-xs font-semibold transition-all border ${
                    days === d
                      ? "bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/10"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {d} ngày
                </button>
              ))}
            </div>
          </div>

          {/* Credits Summary */}
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-3.5 space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Đơn giá:</span>
              <span className="font-medium text-gray-900">
                {costPerDay} Credit / ngày
              </span>
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>Thời gian đẩy đến ngày:</span>
              <span className="font-medium text-gray-900 flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-gray-400" />
                {getTargetDate()}
              </span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600 font-semibold">Tài nguyên còn lại:</span>
              <span className="font-bold text-gray-900">{creditsLeft} Credit</span>
            </div>
            <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-2 mt-1">
              <span className="font-bold text-gray-800">Tổng chi phí:</span>
              <span className="font-black text-purple-700 text-base">
                {totalCost} Credit
              </span>
            </div>
          </div>

          {isOutOfCredits && (
            <p className="text-xs text-red-500 font-medium">
              * Tài khoản không đủ credit. Vui lòng nạp thêm credit để tiếp tục.
            </p>
          )}
        </div>

        {/* Footer actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Hủy
          </button>
          <button
            onClick={handleConfirm}
            disabled={isOutOfCredits}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-white transition-all ${
              isOutOfCredits
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-600/10"
            }`}
          >
            <Sparkles className="h-4 w-4" />
            Xác nhận đẩy tin
          </button>
        </div>
      </div>
    </div>
  );
}

interface ExtendModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobPost | null;
  onConfirm: (jobId: string, days: number, cost: number) => void;
  creditsLeft: number;
}

export function ExtendModal({
  isOpen,
  onClose,
  job,
  onConfirm,
  creditsLeft,
}: ExtendModalProps) {
  const [days, setDays] = useState<number>(14);
  const costPerDay = 5;
  const totalCost = days * costPerDay;
  const isOutOfCredits = creditsLeft < totalCost;

  if (!isOpen || !job) return null;

  const handleConfirm = () => {
    if (isOutOfCredits) return;
    onConfirm(job.id, days, totalCost);
    onClose();
  };

  const getNewExpiryDate = () => {
    // base on existing deadline or current date if expired
    const baseDate = new Date(job.deadline);
    const today = new Date();
    const start = baseDate < today ? today : baseDate;

    const d = new Date(start);
    d.setDate(d.getDate() + days);
    return d.toLocaleDateString("vi-VN");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md scale-95 animate-in fade-in zoom-in-95 rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl duration-200">
        <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2 text-primary">
            <Calendar className="h-5 w-5" />
            <h3 className="text-lg font-bold text-gray-900">Gia hạn tin tuyển dụng</h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs text-gray-500">Gia hạn hạn nộp hồ sơ cho:</p>
            <p className="font-semibold text-gray-900 text-sm">{job.title}</p>
            <p className="text-xs text-gray-500 mt-1">
              Hạn nộp hiện tại:{" "}
              <span className="font-medium text-gray-700">
                {new Date(job.deadline).toLocaleDateString("vi-VN")}
              </span>
            </p>
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold text-gray-700">
              Chọn số ngày gia hạn:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[7, 14, 30].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDays(d)}
                  className={`rounded-lg py-2 text-xs font-semibold transition-all border ${
                    days === d
                      ? "bg-primary text-white border-primary shadow-md shadow-primary/10"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {d} ngày
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-100 bg-gray-50 p-3.5 space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Chi phí gia hạn:</span>
              <span className="font-medium text-gray-900">
                {costPerDay} Credit / ngày
              </span>
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>Hạn nộp hồ sơ mới:</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {getNewExpiryDate()}
              </span>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600 font-semibold">Tài nguyên còn lại:</span>
              <span className="font-bold text-gray-900">{creditsLeft} Credit</span>
            </div>
            <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-2 mt-1">
              <span className="font-bold text-gray-800">Tổng chi phí:</span>
              <span className="font-black text-primary text-base">
                {totalCost} Credit
              </span>
            </div>
          </div>

          {isOutOfCredits && (
            <p className="text-xs text-red-500 font-medium">
              * Tài khoản không đủ credit. Vui lòng nạp thêm credit để tiếp tục.
            </p>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Hủy
          </button>
          <button
            onClick={handleConfirm}
            disabled={isOutOfCredits}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold text-white transition-all ${
              isOutOfCredits
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/10"
            }`}
          >
            <Calendar className="h-4 w-4" />
            Xác nhận gia hạn
          </button>
        </div>
      </div>
    </div>
  );
}

interface RejectionDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobPost | null;
  onEditAndResubmit: (job: JobPost) => void;
}

export function RejectionDetailsModal({
  isOpen,
  onClose,
  job,
  onEditAndResubmit,
}: RejectionDetailsModalProps) {
  const [appealText, setAppealText] = useState("");
  const [appealSubmitted, setAppealSubmitted] = useState(false);
  const [showAppealForm, setShowAppealForm] = useState(false);

  if (!isOpen || !job) return null;

  const handleAppealSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appealText.trim()) return;
    setAppealSubmitted(true);
    setTimeout(() => {
      // Mock reset after a while
      setAppealText("");
    }, 2000);
  };

  const isRejected = job.status === "Bị từ chối";
  const title = isRejected ? "Chi tiết tin bị từ chối" : "Nội dung cần chỉnh sửa";
  const reason = isRejected ? job.rejectionReason : job.needsEditReason;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md scale-95 animate-in fade-in zoom-in-95 rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl duration-200">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2 text-red-600">
            <ShieldAlert className="h-5 w-5" />
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          </div>
          <button
            onClick={() => {
              onClose();
              setShowAppealForm(false);
              setAppealSubmitted(false);
            }}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        {!showAppealForm ? (
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500">Tin tuyển dụng:</p>
              <p className="font-semibold text-gray-900 text-sm">{job.title}</p>
            </div>

            <div className="rounded-xl bg-red-50 p-4 border border-red-100 space-y-2">
              <p className="font-bold text-xs text-red-800">Lý do kiểm duyệt:</p>
              <p className="text-xs text-red-700 leading-relaxed font-medium">
                {reason ||
                  "Tin của bạn vi phạm quy chuẩn nội dung, vui lòng liên hệ admin để biết thêm chi tiết."}
              </p>
            </div>

            <div className="rounded-xl border border-yellow-100 bg-yellow-50 p-3.5 text-xs text-yellow-800 space-y-1">
              <p className="font-semibold">Hướng dẫn khắc phục:</p>
              <p className="leading-relaxed">
                {isRejected
                  ? "Vui lòng chọn nút 'Sửa và gửi lại', loại bỏ các từ ngữ 'tuyển gấp', 'khẩn cấp' hoặc các ký tự đặc biệt khỏi Tiêu đề/Yêu cầu và gửi duyệt lại."
                  : "Chỉnh sửa nội dung bị nhắc nhở (gỡ bỏ số điện thoại/email trực tiếp), hệ thống sẽ tự động phê duyệt ngay khi chỉnh sửa đúng quy định."}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-between gap-3">
              {isRejected && (
                <button
                  onClick={() => setShowAppealForm(true)}
                  className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-gray-400" />
                  Khiếu nại
                </button>
              )}
              <div className="flex gap-2 ml-auto">
                <button
                  onClick={onClose}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    onEditAndResubmit(job);
                    onClose();
                  }}
                  className="rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white hover:bg-red-700 shadow-md shadow-red-600/10 transition-colors"
                >
                  Sửa và gửi lại
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {!appealSubmitted ? (
              <form onSubmit={handleAppealSubmit} className="space-y-4">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-700">
                    Nội dung khiếu nại kiểm duyệt:
                  </label>
                  <textarea
                    rows={4}
                    value={appealText}
                    onChange={(e) => setAppealText(e.target.value)}
                    placeholder="Nhập lý do khiếu nại của bạn. Ví dụ: 'Tin của tôi ghi rõ tiêu chuẩn thương mại chứ không phải spam, mong ban quản trị xem xét lại...'"
                    className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
                    required
                  />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAppealForm(false)}
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Quay lại
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white hover:bg-red-700 transition-colors"
                  >
                    Gửi khiếu nại
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto animate-bounce" />
                <h4 className="font-bold text-gray-900 text-sm">
                  Gửi khiếu nại thành công!
                </h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                  Ý kiến của bạn đã được chuyển tới ban quản trị. Chúng tôi sẽ phản hồi
                  qua email người phụ trách tin trong vòng 24 giờ.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      onClose();
                      setShowAppealForm(false);
                      setAppealSubmitted(false);
                    }}
                    className="rounded-lg border border-gray-300 bg-white px-5 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
