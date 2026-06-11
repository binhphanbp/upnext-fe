"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Filter,
  MoreVertical,
  AlertCircle,
  Sparkles,
  Calendar,
  Trash2,
  Copy,
  EyeOff,
  UserCheck,
  BarChart2,
} from "lucide-react";
import { JobPost, JobStatus } from "./types";

interface JobListProps {
  jobs: JobPost[];
  onSelectJob: (job: JobPost) => void;
  selectedJobId: string;
  onAction: (action: string, job: JobPost) => void;
}

export function JobList({ jobs, onSelectJob, selectedJobId, onAction }: JobListProps) {
  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("Tất cả");
  const [expiryFilter, setExpiryFilter] = useState<string>("Tất cả");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Active Dropdown Row State
  const [activeMenuJobId, setActiveMenuJobId] = useState<string | null>(null);

  // Status List for filters
  const statuses = [
    "Tất cả",
    "Nháp",
    "Chờ duyệt",
    "Đang hoạt động",
    "Đang đẩy",
    "Hết hạn",
    "Cần chỉnh sửa",
    "Bị từ chối",
    "Bị ẩn",
  ];

  // Dynamic KPI calculations
  const totalPostings = jobs.length;
  const activeCount = jobs.filter(
    (j) => j.status === "Đang hoạt động" || j.status === "Đang đẩy",
  ).length;
  const expiredCount = jobs.filter((j) => j.status === "Hết hạn").length;
  const draftCount = jobs.filter((j) => j.status === "Nháp").length;
  const totalViews = jobs.reduce((sum, j) => sum + j.views, 0);
  const totalCVs = jobs.reduce((sum, j) => sum + j.cvReceived, 0);

  // Format numbers with commas/dots
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Expiry Checker
  const checkExpiryStatus = (deadlineStr: string) => {
    const deadline = new Date(deadlineStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return deadline < today;
  };

  // Filter & Sort Logic
  const filteredJobs = jobs
    .filter((job) => {
      // Search search filter
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.assignee.toLowerCase().includes(searchTerm.toLowerCase());

      // Status filter
      const matchesStatus = statusFilter === "Tất cả" || job.status === statusFilter;

      // Expiry filter
      let matchesExpiry = true;
      const isExpired = checkExpiryStatus(job.deadline);
      if (expiryFilter === "Còn hạn") {
        matchesExpiry = !isExpired && job.status !== "Hết hạn";
      } else if (expiryFilter === "Hết hạn") {
        matchesExpiry = isExpired || job.status === "Hết hạn";
      }

      return matchesSearch && matchesStatus && matchesExpiry;
    })
    .sort((a, b) => {
      // Sort logic
      if (sortBy === "views") {
        return b.views - a.views;
      }
      if (sortBy === "cvs") {
        return b.cvReceived - a.cvReceived;
      }
      // Newest (Default sorting)
      return b.id.localeCompare(a.id);
    });

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  const getStatusStyle = (status: JobStatus) => {
    switch (status) {
      case "Đang hoạt động":
        return "text-green-700 bg-green-50 border-green-200";
      case "Đang đẩy":
        return "text-purple-700 bg-purple-50 border-purple-200";
      case "Hết hạn":
        return "text-amber-700 bg-amber-50 border-amber-200";
      case "Nháp":
        return "text-gray-600 bg-gray-50 border-gray-200";
      case "Chờ duyệt":
        return "text-blue-700 bg-blue-50 border-blue-200";
      case "Cần chỉnh sửa":
        return "text-orange-700 bg-orange-50 border-orange-200";
      case "Bị từ chối":
        return "text-red-700 bg-red-50 border-red-200";
      case "Bị ẩn":
        return "text-slate-600 bg-slate-50 border-slate-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const handleMenuAction = (action: string, job: JobPost) => {
    onAction(action, job);
    setActiveMenuJobId(null);
  };

  return (
    <div className="space-y-4">
      {/* Header and Quick Stats Grid */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 space-y-4">
        {/* KPI Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 2xl:grid-cols-6 gap-3.5">
          <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-3.5 text-center">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              Tổng tin đăng
            </p>
            <p className="mt-1 text-lg font-black text-gray-900">{totalPostings}</p>
            <p className="text-[9px] text-gray-400 font-semibold mt-0.5">
              Tin tuyển dụng
            </p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-3.5 text-center">
            <p className="text-[10px] font-bold text-green-600 uppercase tracking-wider">
              Đang hoạt động
            </p>
            <p className="mt-1 text-lg font-black text-green-700">{activeCount}</p>
            <p className="text-[9px] text-green-500 font-semibold mt-0.5">Tin hiển thị</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-3.5 text-center">
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
              Hết hạn
            </p>
            <p className="mt-1 text-lg font-black text-amber-700">{expiredCount}</p>
            <p className="text-[9px] text-amber-500 font-semibold mt-0.5">Cần gia hạn</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-3.5 text-center">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              Nháp
            </p>
            <p className="mt-1 text-lg font-black text-gray-700">{draftCount}</p>
            <p className="text-[9px] text-gray-400 font-semibold mt-0.5">
              Chưa hoàn thiện
            </p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-3.5 text-center">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              Tổng lượt xem
            </p>
            <p className="mt-1 text-lg font-black text-gray-900">
              {formatNumber(totalViews)}
            </p>
            <p className="text-[9px] text-gray-400 font-semibold mt-0.5">Lượt tiếp cận</p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-3.5 text-center">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              Tổng CV nhận
            </p>
            <p className="mt-1 text-lg font-black text-gray-900">
              {formatNumber(totalCVs)}
            </p>
            <p className="text-[9px] text-gray-400 font-semibold mt-0.5">CV nộp hồ sơ</p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex flex-wrap gap-2 items-center flex-1">
            {/* Search Box */}
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Tìm kiếm tin tuyển dụng..."
                className="w-full rounded-lg border border-gray-300 pl-8 pr-3 py-1.5 text-xs focus:border-primary focus:outline-none bg-white"
              />
            </div>

            {/* Status Dropdown */}
            <div className="relative">
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="rounded-lg border border-gray-300 pl-3 pr-8 py-1.5 text-xs focus:border-primary focus:outline-none appearance-none bg-white font-medium text-gray-700"
              >
                {statuses.map((s) => (
                  <option key={s} value={s}>
                    Trạng thái: {s}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-2.5 h-3 w-3 text-gray-400 pointer-events-none" />
            </div>

            {/* Expiry Dropdown */}
            <div className="relative">
              <select
                value={expiryFilter}
                onChange={(e) => {
                  setExpiryFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="rounded-lg border border-gray-300 pl-3 pr-8 py-1.5 text-xs focus:border-primary focus:outline-none appearance-none bg-white font-medium text-gray-700"
              >
                <option value="Tất cả">Thời gian: Tất cả</option>
                <option value="Còn hạn">Thời gian: Còn hạn</option>
                <option value="Hết hạn">Thời gian: Hết hạn</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-2.5 h-3 w-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex gap-2 items-center">
            {/* Sorting Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg border border-gray-300 pl-3 pr-8 py-1.5 text-xs focus:border-primary focus:outline-none appearance-none bg-white font-medium text-gray-700"
              >
                <option value="newest">Sắp xếp: Mới nhất</option>
                <option value="views">Sắp xếp: Lượt xem</option>
                <option value="cvs">Sắp xếp: Số lượng CV</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-2.5 h-3 w-3 text-gray-400 pointer-events-none" />
            </div>

            <button
              onClick={() => {
                setSearchTerm("");
                setStatusFilter("Tất cả");
                setExpiryFilter("Tất cả");
                setSortBy("newest");
                setCurrentPage(1);
              }}
              className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
              title="Đặt lại bộ lọc"
            >
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Table List Card */}
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/50 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                <th className="px-5 py-3.5">Tin tuyển dụng</th>
                <th className="px-4 py-3.5 text-center hidden sm:table-cell xl:hidden 2xl:table-cell">
                  Lượt xem
                </th>
                <th className="px-4 py-3.5 text-center">CV nhận</th>
                <th className="px-4 py-3.5 text-center hidden md:table-cell xl:hidden 2xl:table-cell">
                  Match cao
                </th>
                <th className="px-4 py-3.5 text-center hidden lg:table-cell xl:hidden 2xl:table-cell">
                  Match trung bình
                </th>
                <th className="px-4 py-3.5">Trạng thái</th>
                <th className="px-4 py-3.5 hidden sm:table-cell xl:hidden 2xl:table-cell">
                  Hết hạn
                </th>
                <th className="px-5 py-3.5 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-150">
              {currentItems.length > 0 ? (
                currentItems.map((job) => {
                  const isSelected = job.id === selectedJobId;
                  const isExpired = checkExpiryStatus(job.deadline);

                  return (
                    <tr
                      key={job.id}
                      onClick={() => onSelectJob(job)}
                      className={`group cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-primary/5 hover:bg-primary/5"
                          : "hover:bg-gray-50/70"
                      }`}
                    >
                      {/* Job Title and Meta */}
                      <td className="px-5 py-3.5">
                        <div className="space-y-0.5">
                          <p className="text-xs font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
                            {job.title}
                          </p>
                          <p className="text-[10px] text-gray-500 font-semibold">
                            {job.location} • {job.workModel} • Cấp bậc: {job.level}
                          </p>
                          <p className="text-[9px] text-gray-400">
                            Người phụ trách: {job.assignee}
                          </p>
                        </div>
                      </td>

                      {/* Views */}
                      <td className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 hidden sm:table-cell xl:hidden 2xl:table-cell">
                        {formatNumber(job.views)}
                      </td>

                      {/* CV Received */}
                      <td className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700">
                        {job.cvReceived}
                      </td>

                      {/* High Match CVs */}
                      <td className="px-4 py-3.5 text-center text-xs font-bold text-emerald-600 hidden md:table-cell xl:hidden 2xl:table-cell">
                        {job.highMatchCv}
                      </td>

                      {/* Avg Match Score */}
                      <td className="px-4 py-3.5 text-center text-xs font-bold text-gray-800 hidden lg:table-cell xl:hidden 2xl:table-cell">
                        {job.avgMatchScore}%
                      </td>

                      {/* Status */}
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-1">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold border ${getStatusStyle(
                              job.status,
                            )}`}
                          >
                            {job.status}
                          </span>
                          {(job.status === "Bị từ chối" ||
                            job.status === "Cần chỉnh sửa") && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onAction("view_rejection", job);
                              }}
                              className="text-red-500 hover:text-red-700 transition-colors p-0.5 rounded-full hover:bg-red-50"
                              title="Xem lý do vi phạm quy chuẩn"
                            >
                              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                            </button>
                          )}
                        </div>
                      </td>

                      {/* Expiry Date */}
                      <td className="px-4 py-3.5 text-xs text-gray-600 font-semibold hidden sm:table-cell xl:hidden 2xl:table-cell">
                        {job.status === "Nháp" ? (
                          <span className="text-gray-400">-</span>
                        ) : (
                          <span
                            className={
                              isExpired || job.status === "Hết hạn" ? "text-red-500" : ""
                            }
                          >
                            {new Date(job.deadline).toLocaleDateString("vi-VN")}
                          </span>
                        )}
                      </td>

                      {/* Action Menu (Context menu) */}
                      <td className="px-5 py-3.5 text-right relative">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMenuJobId(
                              activeMenuJobId === job.id ? null : job.id,
                            );
                          }}
                          className="p-1 rounded-lg text-gray-400 hover:bg-gray-150 hover:text-gray-700 transition-colors inline-block"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </button>

                        {/* Dropdown Menu Overlay */}
                        {activeMenuJobId === job.id && (
                          <>
                            <div
                              className="fixed inset-0 z-30"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveMenuJobId(null);
                              }}
                            />
                            <div className="absolute right-5 mt-1 w-44 z-40 rounded-xl border border-gray-150 bg-white p-1.5 shadow-xl animate-in fade-in slide-in-from-top-1 duration-100 text-left">
                              <button
                                onClick={() => handleMenuAction("edit", job)}
                                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                <Copy className="h-3.5 w-3.5 text-gray-400" />
                                Chỉnh sửa tin
                              </button>
                              <button
                                onClick={() => handleMenuAction("duplicate", job)}
                                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                <Copy className="h-3.5 w-3.5 text-gray-400" />
                                Nhân bản tin
                              </button>
                              <button
                                onClick={() => handleMenuAction("toggle_hide", job)}
                                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                <EyeOff className="h-3.5 w-3.5 text-gray-400" />
                                {job.status === "Bị ẩn" ? "Hiện tin đăng" : "Tạm ẩn tin"}
                              </button>
                              <button
                                onClick={() => handleMenuAction("extend", job)}
                                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                <Calendar className="h-3.5 w-3.5 text-gray-400" />
                                Gia hạn
                              </button>
                              <button
                                onClick={() => handleMenuAction("boost", job)}
                                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
                              >
                                <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                                Đẩy mạnh
                              </button>
                              <hr className="my-1 border-gray-100" />
                              <button
                                onClick={() => handleMenuAction("candidates", job)}
                                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                <UserCheck className="h-3.5 w-3.5 text-gray-400" />
                                Xem ứng viên
                              </button>
                              <button
                                onClick={() => handleMenuAction("analytics", job)}
                                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                <BarChart2 className="h-3.5 w-3.5 text-gray-400" />
                                Xem hiệu quả
                              </button>
                              <hr className="my-1 border-gray-100" />
                              <button
                                onClick={() => handleMenuAction("delete", job)}
                                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors"
                              >
                                <Trash2 className="h-3.5 w-3.5 text-red-400" />
                                Xóa tin đăng
                              </button>
                            </div>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className="px-5 py-12 text-center text-xs text-gray-400 font-medium italic"
                  >
                    Không tìm thấy tin tuyển dụng nào phù hợp bộ lọc.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="flex items-center justify-between border-t border-gray-150 px-5 py-3.5 bg-gray-50/50 text-xs font-semibold text-gray-600">
          <div>
            Hiển thị {filteredJobs.length === 0 ? 0 : indexOfFirstItem + 1} -{" "}
            {Math.min(indexOfLastItem, filteredJobs.length)} trong {filteredJobs.length}{" "}
            tin
          </div>

          <div className="flex items-center gap-4">
            {/* Pages Navigation */}
            <div className="flex gap-1.5 items-center">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className={`px-2 py-1 rounded border text-gray-700 text-[11px] ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed"
                    : "bg-white border-gray-200 hover:bg-gray-50"
                }`}
              >
                Trước
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-2.5 py-1 rounded border text-[11px] font-bold transition-all ${
                    currentPage === i + 1
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`px-2 py-1 rounded border text-gray-700 text-[11px] ${
                  currentPage === totalPages || totalPages === 0
                    ? "bg-gray-100 text-gray-300 border-gray-100 cursor-not-allowed"
                    : "bg-white border-gray-200 hover:bg-gray-50"
                }`}
              >
                Sau
              </button>
            </div>

            {/* Page Size Selector */}
            <div className="relative">
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(parseInt(e.target.value));
                  setCurrentPage(1);
                }}
                className="rounded border border-gray-300 pl-2 pr-6 py-1 text-[11px] focus:outline-none appearance-none bg-white text-gray-700 font-semibold"
              >
                <option value={5}>5/trang</option>
                <option value={10}>10/trang</option>
                <option value={20}>20/trang</option>
              </select>
              <ChevronDown className="absolute right-2 top-2 h-2.5 w-2.5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
