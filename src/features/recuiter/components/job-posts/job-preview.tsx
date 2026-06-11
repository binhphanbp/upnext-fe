"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  Calendar,
  Bookmark,
  Flag,
} from "lucide-react";
import { JobPost } from "./types";

interface JobPreviewProps {
  job: JobPost;
}

export function JobPreview({ job }: JobPreviewProps) {
  const [expandedDesc, setExpandedDesc] = useState(false);
  const [expandedReq, setExpandedReq] = useState(false);
  const [expandedBenefits, setExpandedBenefits] = useState(false);

  // Formatting helpers to display newlines as bullet points or paragraphs
  const renderTextContent = (
    text: string,
    isExpanded: boolean,
    toggleExpand: () => void,
  ) => {
    if (!text || !text.trim()) {
      return <p className="text-gray-400 italic text-xs">Chưa nhập nội dung</p>;
    }

    const lines = text.split("\n");
    const displayedLines = isExpanded ? lines : lines.slice(0, 4);

    return (
      <div className="space-y-1 text-xs text-gray-700 leading-relaxed font-medium">
        {displayedLines.map((line, index) => {
          if (line.startsWith("-") || line.startsWith("*")) {
            return (
              <div key={index} className="flex items-start gap-1.5 pl-1.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                <span>{line.substring(1).trim()}</span>
              </div>
            );
          }
          return <p key={index}>{line}</p>;
        })}

        {lines.length > 4 && (
          <button
            type="button"
            onClick={toggleExpand}
            className="mt-2 text-[11px] font-bold text-primary hover:text-primary/80 block hover:underline"
          >
            {isExpanded ? "Xem ít hơn" : "Xem thêm"}
          </button>
        )}
      </div>
    );
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "-";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("vi-VN");
  };

  return (
    <div className="space-y-5">
      {/* Company Header */}
      <div className="flex items-start gap-3 border-b border-gray-100 pb-4">
        {/* Mock Logo */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-base shadow-sm">
          ABC
        </div>
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5">
            <h3 className="font-bold text-gray-900 text-sm">Công ty TNHH ABC</h3>
            <span className="inline-flex items-center gap-0.5 rounded bg-emerald-50 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700 border border-emerald-100">
              <CheckCircle className="h-2.5 w-2.5 text-emerald-600" />
              Đã xác thực
            </span>
          </div>
          <p className="text-[11px] text-gray-500 font-medium">
            Công nghệ thông tin • 50-100 nhân viên
          </p>
        </div>
      </div>

      {/* Title & Stats */}
      <div className="space-y-3">
        <h1 className="text-lg font-extrabold text-gray-900 tracking-tight leading-snug">
          {job.title || "Tiêu đề công việc chưa đặt"}
        </h1>

        {/* Quick Details Badges */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs font-semibold text-gray-600">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-gray-400 shrink-0" />
            <span>
              Mức lương:{" "}
              <span className="text-gray-950 font-bold">
                {job.salaryRange || "Chưa cập nhật"}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-400 shrink-0" />
            <span>
              Địa điểm:{" "}
              <span className="text-gray-950 font-bold">
                {job.location || "Chưa cập nhật"}
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-400 shrink-0" />
            <span>
              Hình thức:{" "}
              <span className="text-gray-950 font-bold">
                {job.workModel} ({job.jobType})
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-gray-400 shrink-0" />
            <span>
              Cấp bậc: <span className="text-gray-950 font-bold">{job.level}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 col-span-2">
            <Calendar className="h-4 w-4 text-gray-400 shrink-0" />
            <span>
              Hạn nộp:{" "}
              <span className="text-gray-950 font-bold">{formatDate(job.deadline)}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Form Action Buttons */}
      <div className="flex gap-2.5 border-y border-gray-100 py-3.5">
        <button
          type="button"
          className="flex-1 rounded-xl bg-primary py-2.5 text-xs font-bold text-white shadow-md shadow-primary/15 transition-all hover:bg-primary/95 hover:scale-[1.01] active:scale-[0.99]"
        >
          Ứng tuyển ngay
        </button>
        <button
          type="button"
          className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-2.5 text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
        >
          <Bookmark className="h-4.5 w-4.5" />
        </button>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {/* Job Description */}
        <div className="space-y-1.5">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
            Mô tả công việc
          </h4>
          {renderTextContent(job.description, expandedDesc, () =>
            setExpandedDesc(!expandedDesc),
          )}
        </div>

        {/* Requirements */}
        <div className="space-y-1.5">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
            Yêu cầu ứng viên
          </h4>
          {renderTextContent(job.requirements, expandedReq, () =>
            setExpandedReq(!expandedReq),
          )}
        </div>

        {/* Skills Tag block */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
            Kỹ năng
          </h4>

          <div className="space-y-1.5">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              Kỹ năng yêu cầu:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {job.requiredSkills.length > 0 ? (
                job.requiredSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-gray-800 border border-gray-200"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-xs text-gray-400 italic font-medium">Chưa có</span>
              )}
            </div>
          </div>

          <div className="space-y-1.5 pt-1">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              Kỹ năng ưu tiên:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {job.preferredSkills.length > 0 ? (
                job.preferredSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-700 border border-blue-100"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-xs text-gray-400 italic font-medium">Chưa có</span>
              )}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-1.5">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
            Quyền lợi
          </h4>
          {renderTextContent(job.benefits, expandedBenefits, () =>
            setExpandedBenefits(!expandedBenefits),
          )}
        </div>
      </div>

      {/* Preview Footer */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-4 text-[10px] text-gray-400 font-semibold">
        <span>Tin được đăng 5 ngày trước</span>
        <button
          type="button"
          className="flex items-center gap-1 hover:text-red-500 transition-colors"
        >
          <Flag className="h-3 w-3" />
          Báo cáo tin
        </button>
      </div>
    </div>
  );
}
