"use client";

import React, { useState } from "react";
import {
  Plus,
  Bold,
  Italic,
  Underline,
  List,
  Link,
  AlertTriangle,
  CheckCircle,
  Sliders,
} from "lucide-react";
import { JobPost, MatchWeights, JobLevel, WorkModel, JobType } from "./types";

interface JobFormProps {
  job: JobPost;
  onChange: (updatedJob: JobPost) => void;
  currentStep: number;
}

interface RichTextToolbarProps {
  onFormat: (action: string) => void;
}

function RichTextToolbar({ onFormat }: RichTextToolbarProps) {
  return (
    <div className="flex gap-1.5 border-b border-gray-200 px-3 py-1.5 bg-gray-50/50">
      <button
        type="button"
        onClick={() => onFormat("bold")}
        className="p-1 rounded text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
      >
        <Bold className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        onClick={() => onFormat("italic")}
        className="p-1 rounded text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
      >
        <Italic className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        onClick={() => onFormat("underline")}
        className="p-1 rounded text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
      >
        <Underline className="h-3.5 w-3.5" />
      </button>
      <div className="w-[1px] bg-gray-200 self-stretch my-0.5" />
      <button
        type="button"
        onClick={() => onFormat("list")}
        className="p-1 rounded text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
      >
        <List className="h-3.5 w-3.5" />
      </button>
      <button
        type="button"
        onClick={() => onFormat("link")}
        className="p-1 rounded text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
      >
        <Link className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

export function JobForm({ job, onChange, currentStep }: JobFormProps) {
  const [newReqSkill, setNewReqSkill] = useState("");
  const [newPrefSkill, setNewPrefSkill] = useState("");
  const [showAddReq, setShowAddReq] = useState(false);
  const [showAddPref, setShowAddPref] = useState(false);

  // Field change helper
  const handleFieldChange = (
    key: keyof JobPost,
    value: string | number | string[] | MatchWeights,
  ) => {
    onChange({
      ...job,
      [key]: value,
    } as JobPost);
  };

  // Weight change helper
  const handleWeightChange = (key: keyof MatchWeights, value: number) => {
    const updatedWeights = {
      ...job.weights,
      [key]: value,
    };
    onChange({
      ...job,
      weights: updatedWeights,
    });
  };

  // Skills handlers
  const handleAddReqSkill = () => {
    if (newReqSkill.trim() && !job.requiredSkills.includes(newReqSkill.trim())) {
      onChange({
        ...job,
        requiredSkills: [...job.requiredSkills, newReqSkill.trim()],
      });
      setNewReqSkill("");
      setShowAddReq(false);
    }
  };

  const handleRemoveReqSkill = (skill: string) => {
    onChange({
      ...job,
      requiredSkills: job.requiredSkills.filter((s) => s !== skill),
    });
  };

  const handleAddPrefSkill = () => {
    if (newPrefSkill.trim() && !job.preferredSkills.includes(newPrefSkill.trim())) {
      onChange({
        ...job,
        preferredSkills: [...job.preferredSkills, newPrefSkill.trim()],
      });
      setNewPrefSkill("");
      setShowAddPref(false);
    }
  };

  const handleRemovePrefSkill = (skill: string) => {
    onChange({
      ...job,
      preferredSkills: job.preferredSkills.filter((s) => s !== skill),
    });
  };

  // Stepper Step 3 - weights sum
  const totalWeight =
    job.weights.requiredSkills +
    job.weights.preferredSkills +
    job.weights.experience +
    job.weights.salary +
    job.weights.location +
    job.weights.language +
    job.weights.degree;

  // Content warnings logic
  const warnings: string[] = [];
  if (!job.salaryRange.trim()) {
    warnings.push("Bạn chưa nhập mức lương cụ thể hoặc khoảng lương.");
  }
  if (!job.benefits.trim()) {
    warnings.push("Bạn chưa điền quyền lợi dành cho ứng viên.");
  }
  if (job.description.length < 50) {
    warnings.push("Mô tả công việc quá ngắn (tối thiểu 50 ký tự) để thu hút ứng viên.");
  }
  if (
    job.title.toLowerCase().includes("tuyển gấp") ||
    job.title.toLowerCase().includes("lương khủng")
  ) {
    warnings.push(
      "Tiêu đề chứa từ khóa quảng cáo/giật tít ('tuyển gấp', 'lương khủng') dễ bị từ chối duyệt.",
    );
  }
  const isFormIncomplete =
    !job.title.trim() ||
    !job.location.trim() ||
    !job.deadline.trim() ||
    !job.description.trim() ||
    !job.requirements.trim();

  if (isFormIncomplete) {
    warnings.push(
      "Chưa đủ thông tin bắt buộc để đăng tin (Tiêu đề, Địa điểm, Hạn nộp, Mô tả, Yêu cầu).",
    );
  }

  // Simple rich text mock bar is declared outside component to prevent re-creation during render

  const mockFormat = (field: keyof JobPost, type: string) => {
    // Just a mock format appender
    const currentVal = String(job[field] || "");
    let newVal = currentVal;
    if (type === "bold") newVal = currentVal + " **đậm**";
    else if (type === "italic") newVal = currentVal + " *nghiêng*";
    else if (type === "underline") newVal = currentVal + " <u>gạch chân</u>";
    else if (type === "list") newVal = currentVal + "\n- ";
    else if (type === "link") newVal = currentVal + " [liên kết](https://...)";

    handleFieldChange(field, newVal);
  };

  if (currentStep === 3) {
    // RENDER MATCH SCORE WEIGHT CONFIGURATION
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
          <Sliders className="h-5 w-5 text-primary" />
          <h2 className="text-base font-bold text-gray-900">
            Thiết lập Match Score chi tiết
          </h2>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed">
          Điều chỉnh trọng số của từng tiêu chí để hệ thống chấm điểm độ phù hợp của CV
          ứng viên.
          <span className="font-semibold text-primary">
            {" "}
            Tổng trọng số bắt buộc phải bằng 100%.
          </span>
        </p>

        {/* Sliders Container */}
        <div className="space-y-5">
          {/* 1. Kỹ năng bắt buộc */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold text-gray-700">
              <span>1. Kỹ năng bắt buộc (Required Skills)</span>
              <span className="text-primary">{job.weights.requiredSkills}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={job.weights.requiredSkills}
              onChange={(e) =>
                handleWeightChange("requiredSkills", parseInt(e.target.value))
              }
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* 2. Kỹ năng ưu tiên */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold text-gray-700">
              <span>2. Kỹ năng ưu tiên (Preferred Skills)</span>
              <span className="text-primary">{job.weights.preferredSkills}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={job.weights.preferredSkills}
              onChange={(e) =>
                handleWeightChange("preferredSkills", parseInt(e.target.value))
              }
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* 3. Số năm kinh nghiệm */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold text-gray-700">
              <span>3. Số năm kinh nghiệm (Experience)</span>
              <span className="text-primary">{job.weights.experience}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={job.weights.experience}
              onChange={(e) => handleWeightChange("experience", parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* 4. Mức lương */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold text-gray-700">
              <span>4. Mức lương (Salary)</span>
              <span className="text-primary">{job.weights.salary}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={job.weights.salary}
              onChange={(e) => handleWeightChange("salary", parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* 5. Địa điểm */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold text-gray-700">
              <span>5. Địa điểm làm việc (Location)</span>
              <span className="text-primary">{job.weights.location}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={job.weights.location}
              onChange={(e) => handleWeightChange("location", parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* 6. Ngôn ngữ */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold text-gray-700">
              <span>6. Ngôn ngữ (Language)</span>
              <span className="text-primary">{job.weights.language}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={job.weights.language}
              onChange={(e) => handleWeightChange("language", parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* 7. Bằng cấp */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-semibold text-gray-700">
              <span>7. Bằng cấp (Degree)</span>
              <span className="text-primary">{job.weights.degree}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="5"
              value={job.weights.degree}
              onChange={(e) => handleWeightChange("degree", parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>

        {/* Sum Indicator */}
        <div
          className={`mt-6 rounded-xl p-4 flex items-center justify-between border ${
            totalWeight === 100
              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          <div className="flex items-center gap-2">
            {totalWeight === 100 ? (
              <CheckCircle className="h-5 w-5 text-emerald-600" />
            ) : (
              <AlertTriangle className="h-5 w-5 text-red-600 animate-pulse" />
            )}
            <div>
              <p className="text-xs font-bold">
                {totalWeight === 100
                  ? "Cấu hình trọng số hợp lệ!"
                  : `Tổng trọng số chưa đạt 100%`}
              </p>
              <p className="text-[10px] opacity-80">
                {totalWeight === 100
                  ? "Hệ thống sẽ áp dụng bộ lọc chấm điểm này ngay sau khi đăng."
                  : `Tổng hiện tại là ${totalWeight}%. Vui lòng điều chỉnh lại.`}
              </p>
            </div>
          </div>
          <span className="text-lg font-black">{totalWeight}% / 100%</span>
        </div>
      </div>
    );
  }

  // RENDER STEP 1: JOB EDITOR FORM
  return (
    <div className="space-y-5">
      <div className="border-b border-gray-100 pb-2">
        <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
          Thông tin cơ bản
        </h2>
      </div>

      {/* Grid of basic fields */}
      <div className="grid grid-cols-2 gap-4">
        {/* Title */}
        <div className="col-span-2">
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Tiêu đề công việc <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={job.title}
            onChange={(e) => handleFieldChange("title", e.target.value)}
            placeholder="Ví dụ: Senior Frontend Developer"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
        </div>

        {/* Level */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Cấp bậc <span className="text-red-500">*</span>
          </label>
          <select
            value={job.level}
            onChange={(e) => handleFieldChange("level", e.target.value as JobLevel)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-white"
          >
            {["Intern", "Fresher", "Junior", "Middle", "Senior", "Lead"].map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </div>

        {/* Headcount */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Số lượng tuyển <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            min="1"
            value={job.headcount}
            onChange={(e) =>
              handleFieldChange("headcount", parseInt(e.target.value) || 1)
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs focus:border-primary focus:outline-none"
            required
          />
        </div>

        {/* Salary */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Mức lương <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={job.salaryRange}
            onChange={(e) => handleFieldChange("salaryRange", e.target.value)}
            placeholder="Ví dụ: 25 - 40 triệu hoặc Thỏa thuận"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs focus:border-primary focus:outline-none"
          />
        </div>

        {/* Work Model */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Hình thức làm việc <span className="text-red-500">*</span>
          </label>
          <select
            value={job.workModel}
            onChange={(e) => handleFieldChange("workModel", e.target.value as WorkModel)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs focus:border-primary focus:outline-none bg-white"
          >
            {["Remote", "Hybrid", "Onsite"].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Job Type */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Loại công việc <span className="text-red-500">*</span>
          </label>
          <select
            value={job.jobType}
            onChange={(e) => handleFieldChange("jobType", e.target.value as JobType)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs focus:border-primary focus:outline-none bg-white"
          >
            {["Full-time", "Part-time", "Internship", "Contract"].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Địa điểm làm việc <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={job.location}
            onChange={(e) => handleFieldChange("location", e.target.value)}
            placeholder="Ví dụ: Hà Nội"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs focus:border-primary focus:outline-none"
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Hạn nộp hồ sơ <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={job.deadline}
            onChange={(e) => handleFieldChange("deadline", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs focus:border-primary focus:outline-none bg-white"
          />
        </div>

        {/* Assignee */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-700">
            Người phụ trách <span className="text-red-500">*</span>
          </label>
          <select
            value={job.assignee}
            onChange={(e) => handleFieldChange("assignee", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs focus:border-primary focus:outline-none bg-white"
          >
            {["Nguyễn Văn A", "Trần Thị B", "Lê Văn C", "Phạm Văn D"].map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-xs font-semibold text-gray-700">
            Mô tả công việc <span className="text-red-500">*</span>
          </label>
          <span className="text-[10px] text-gray-400">
            {job.description.length}/5000 ký tự
          </span>
        </div>
        <div className="rounded-lg border border-gray-300 overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <RichTextToolbar onFormat={(type) => mockFormat("description", type)} />
          <textarea
            rows={5}
            value={job.description}
            onChange={(e) => handleFieldChange("description", e.target.value)}
            placeholder="Mô tả công việc chi tiết..."
            className="w-full border-0 p-3 text-xs focus:outline-none resize-y"
          />
        </div>
      </div>

      {/* Requirements */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-xs font-semibold text-gray-700">
            Yêu cầu ứng viên <span className="text-red-500">*</span>
          </label>
          <span className="text-[10px] text-gray-400">
            {job.requirements.length}/5000 ký tự
          </span>
        </div>
        <div className="rounded-lg border border-gray-300 overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <RichTextToolbar onFormat={(type) => mockFormat("requirements", type)} />
          <textarea
            rows={5}
            value={job.requirements}
            onChange={(e) => handleFieldChange("requirements", e.target.value)}
            placeholder="Yêu cầu cụ thể về chuyên môn, kỹ năng, kinh nghiệm..."
            className="w-full border-0 p-3 text-xs focus:outline-none resize-y"
          />
        </div>
      </div>

      {/* Required Skills tags */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-gray-700">
          Kỹ năng yêu cầu
        </label>
        <div className="flex flex-wrap gap-1.5 items-center p-2 rounded-lg border border-gray-300 min-h-[40px]">
          {job.requiredSkills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1 rounded bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-700 border border-gray-200"
            >
              {skill}
              <button
                type="button"
                onClick={() => handleRemoveReqSkill(skill)}
                className="text-gray-400 hover:text-red-500"
              >
                ×
              </button>
            </span>
          ))}

          {showAddReq ? (
            <div className="inline-flex items-center gap-1">
              <input
                type="text"
                autoFocus
                value={newReqSkill}
                onChange={(e) => setNewReqSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddReqSkill();
                  } else if (e.key === "Escape") {
                    setShowAddReq(false);
                  }
                }}
                className="rounded border border-primary px-1.5 py-0.5 text-[10px] focus:outline-none w-20"
                placeholder="Kỹ năng..."
              />
              <button
                type="button"
                onClick={handleAddReqSkill}
                className="text-[10px] font-bold text-primary hover:text-primary/80"
              >
                Lưu
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowAddReq(true)}
              className="inline-flex items-center gap-1 rounded border border-dashed border-gray-300 px-2 py-0.5 text-[10px] text-gray-500 hover:border-primary hover:text-primary transition-colors"
            >
              <Plus className="h-3 w-3" />
              Thêm
            </button>
          )}
        </div>
      </div>

      {/* Preferred Skills tags */}
      <div>
        <label className="mb-1 block text-xs font-semibold text-gray-700">
          Kỹ năng ưu tiên
        </label>
        <div className="flex flex-wrap gap-1.5 items-center p-2 rounded-lg border border-gray-300 min-h-[40px]">
          {job.preferredSkills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-700 border border-blue-100"
            >
              {skill}
              <button
                type="button"
                onClick={() => handleRemovePrefSkill(skill)}
                className="text-blue-400 hover:text-red-500"
              >
                ×
              </button>
            </span>
          ))}

          {showAddPref ? (
            <div className="inline-flex items-center gap-1">
              <input
                type="text"
                autoFocus
                value={newPrefSkill}
                onChange={(e) => setNewPrefSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddPrefSkill();
                  } else if (e.key === "Escape") {
                    setShowAddPref(false);
                  }
                }}
                className="rounded border border-primary px-1.5 py-0.5 text-[10px] focus:outline-none w-20"
                placeholder="Kỹ năng..."
              />
              <button
                type="button"
                onClick={handleAddPrefSkill}
                className="text-[10px] font-bold text-primary hover:text-primary/80"
              >
                Lưu
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowAddPref(true)}
              className="inline-flex items-center gap-1 rounded border border-dashed border-gray-300 px-2 py-0.5 text-[10px] text-gray-500 hover:border-primary hover:text-primary transition-colors"
            >
              <Plus className="h-3 w-3" />
              Thêm
            </button>
          )}
        </div>
      </div>

      {/* Benefits */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <label className="text-xs font-semibold text-gray-700">
            Quyền lợi <span className="text-red-500">*</span>
          </label>
          <span className="text-[10px] text-gray-400">
            {job.benefits.length}/5000 ký tự
          </span>
        </div>
        <div className="rounded-lg border border-gray-300 overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
          <RichTextToolbar onFormat={(type) => mockFormat("benefits", type)} />
          <textarea
            rows={4}
            value={job.benefits}
            onChange={(e) => handleFieldChange("benefits", e.target.value)}
            placeholder="Các quyền lợi về lương, thưởng, bảo hiểm, đào tạo, chế độ đãi ngộ..."
            className="w-full border-0 p-3 text-xs focus:outline-none resize-y"
          />
        </div>
      </div>

      {/* Content Warnings */}
      <div className="rounded-xl border border-red-100 bg-red-50/50 p-4 space-y-2.5">
        <div className="flex items-center gap-2 text-red-700">
          <AlertTriangle className="h-4.5 w-4.5" />
          <h4 className="text-xs font-bold uppercase tracking-wide">Cảnh báo nội dung</h4>
        </div>
        {warnings.length > 0 ? (
          <ul className="list-disc list-inside space-y-1 text-[11px] text-red-600 font-medium pl-1 leading-relaxed">
            {warnings.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        ) : (
          <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle className="h-3.5 w-3.5" />
            Nội dung bài đăng đã đạt tiêu chuẩn tối thiểu để hiển thị tốt!
          </p>
        )}
      </div>
    </div>
  );
}
