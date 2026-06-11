"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Eye,
  FileText,
  Info,
  ListChecks,
  Plus,
  Send,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import {
  BoostModal,
  defaultJobs,
  ExtendModal,
  JobForm,
  JobList,
  JobPost,
  JobPreview,
  JobStatus,
  RejectionDetailsModal,
} from "@/features/recuiter/components/job-posts";

type JobPostsStep = 1 | 2 | 3 | 4;

const newJobTemplate = (): JobPost => ({
  id: `job-${Date.now()}`,
  title: "",
  level: "Senior",
  headcount: 1,
  salaryRange: "",
  workModel: "Hybrid",
  jobType: "Full-time",
  location: "",
  deadline:
    new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0] ?? "",
  assignee: "Nguyễn Văn A",
  description: "",
  requirements: "",
  benefits: "",
  requiredSkills: [],
  preferredSkills: [],
  views: 0,
  cvReceived: 0,
  highMatchCv: 0,
  avgMatchScore: 0,
  status: "Nháp",
  weights: {
    requiredSkills: 30,
    preferredSkills: 20,
    experience: 20,
    salary: 10,
    location: 10,
    language: 5,
    degree: 5,
  },
});

const stepItems: Array<{
  id: JobPostsStep;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}> = [
  {
    id: 1,
    title: "Thông tin tuyển dụng",
    subtitle: "Soạn nội dung và điều kiện tuyển",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    id: 2,
    title: "Xem trước tin",
    subtitle: "Kiểm tra trải nghiệm ứng viên",
    icon: <Eye className="h-4 w-4" />,
  },
  {
    id: 3,
    title: "Thiết lập chấm điểm",
    subtitle: "Cấu hình Match Score riêng",
    icon: <SlidersHorizontal className="h-4 w-4" />,
  },
  {
    id: 4,
    title: "Quản lý tin đăng",
    subtitle: "Tách riêng phần vận hành cuối",
    icon: <ListChecks className="h-4 w-4" />,
  },
];

const composeStepItems = stepItems.filter((item) => item.id !== 4);
const managementStepItem = stepItems.find((item) => item.id === 4)!;

export default function JobPostsPage() {
  const [jobs, setJobs] = useState<JobPost[]>(defaultJobs);
  const [editingJob, setEditingJob] = useState<JobPost>(newJobTemplate());
  const [activeStep, setActiveStep] = useState<JobPostsStep>(1);
  const [isEditingExisting, setIsEditingExisting] = useState<boolean>(false);
  const [creditsLeft, setCreditsLeft] = useState<number>(820);
  const [boostJob, setBoostJob] = useState<JobPost | null>(null);
  const [extendJob, setExtendJob] = useState<JobPost | null>(null);
  const [rejectionJob, setRejectionJob] = useState<JobPost | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "info" | "warning" | "error";
  } | null>(null);

  const showToast = (
    message: string,
    type: "success" | "info" | "warning" | "error" = "success",
  ) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const totalWeight =
    editingJob.weights.requiredSkills +
    editingJob.weights.preferredSkills +
    editingJob.weights.experience +
    editingJob.weights.salary +
    editingJob.weights.location +
    editingJob.weights.language +
    editingJob.weights.degree;

  const requiredFieldChecks = useMemo(
    () => [
      { label: "Tiêu đề công việc", done: editingJob.title.trim().length > 0 },
      { label: "Mức lương", done: editingJob.salaryRange.trim().length > 0 },
      { label: "Địa điểm làm việc", done: editingJob.location.trim().length > 0 },
      { label: "Hạn nộp hồ sơ", done: editingJob.deadline.trim().length > 0 },
      { label: "Mô tả công việc", done: editingJob.description.trim().length > 0 },
      { label: "Yêu cầu ứng viên", done: editingJob.requirements.trim().length > 0 },
      { label: "Quyền lợi", done: editingJob.benefits.trim().length > 0 },
      { label: "Kỹ năng yêu cầu", done: editingJob.requiredSkills.length > 0 },
      { label: "Match Score = 100%", done: totalWeight === 100 },
    ],
    [editingJob, totalWeight],
  );

  const completedChecks = requiredFieldChecks.filter((item) => item.done).length;
  const readinessPercent = Math.round(
    (completedChecks / requiredFieldChecks.length) * 100,
  );
  const isReadyToPublish = completedChecks === requiredFieldChecks.length;

  const jobStatusSummary = useMemo(() => {
    return {
      total: jobs.length,
      active: jobs.filter(
        (job) => job.status === "Đang hoạt động" || job.status === "Đang đẩy",
      ).length,
      pending: jobs.filter((job) => job.status === "Chờ duyệt").length,
      draft: jobs.filter((job) => job.status === "Nháp").length,
    };
  }, [jobs]);

  useEffect(() => {
    const pendingJobs = jobs.filter((job) => job.status === "Chờ duyệt");
    if (pendingJobs.length === 0) return;

    const timer = setTimeout(() => {
      setJobs((prevJobs) =>
        prevJobs.map((job) => {
          if (job.status === "Chờ duyệt") {
            showToast(
              `Tin tuyển dụng "${job.title}" đã được kiểm duyệt thành công!`,
              "success",
            );
            return { ...job, status: "Đang hoạt động" as JobStatus };
          }
          return job;
        }),
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, [jobs]);

  const handleAICraft = () => {
    const aiJob: JobPost = {
      ...editingJob,
      title: "Senior Frontend Developer (React/NextJS)",
      location: "Hà Nội",
      salaryRange: "30 - 50 triệu",
      level: "Senior",
      workModel: "Hybrid",
      jobType: "Full-time",
      description:
        "- Thiết kế và xây dựng các tính năng Frontend phức tạp sử dụng Next.js (App Router) và TypeScript.\n- Tối ưu hiệu năng ứng dụng web, cải thiện SEO và trải nghiệm người dùng.\n- Phối hợp chặt chẽ với Product và UX/UI để triển khai giao diện mượt mà.\n- Đóng góp xây dựng Design System và chuẩn hóa component dùng chung.",
      requirements:
        "- Tối thiểu 3 năm kinh nghiệm thực chiến với ReactJS và TypeScript.\n- Hiểu sâu về SSR, SSG và mô hình dữ liệu trong Next.js.\n- Sử dụng tốt Tailwind CSS, quản lý state và quy trình review code.\n- Có kinh nghiệm viết unit test hoặc integration test là lợi thế.",
      benefits:
        "- Mức lương cạnh tranh, review định kỳ và thưởng theo hiệu quả.\n- Cấp máy tính làm việc, bảo hiểm sức khỏe và ngân sách học tập.\n- Hybrid linh hoạt và môi trường sản phẩm tăng trưởng nhanh.",
      requiredSkills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      preferredSkills: ["GraphQL", "Vitest", "Docker"],
    };

    setEditingJob(aiJob);
    setActiveStep(1);
    showToast("Đã tối ưu hóa nội dung tin tuyển dụng bằng AI!", "success");
  };

  const handleStepClick = (step: JobPostsStep) => {
    setActiveStep(step);
  };

  const resetEditingState = () => {
    setEditingJob(newJobTemplate());
    setIsEditingExisting(false);
  };

  const handleCreateNewJob = () => {
    resetEditingState();
    setActiveStep(1);
    showToast("Trình soạn thảo đã sẵn sàng cho tin mới.", "info");
  };

  const handleSaveDraft = () => {
    if (!editingJob.title.trim()) {
      showToast("Vui lòng nhập ít nhất tiêu đề công việc để lưu nháp.", "warning");
      return;
    }

    const draftJob: JobPost = {
      ...editingJob,
      status: "Nháp" as JobStatus,
    };

    if (isEditingExisting) {
      setJobs((prev) => prev.map((job) => (job.id === draftJob.id ? draftJob : job)));
      showToast(`Đã lưu nháp thay đổi tin "${draftJob.title}" thành công.`, "success");
    } else {
      setJobs((prev) => [draftJob, ...prev]);
      showToast(`Đã tạo và lưu nháp tin "${draftJob.title}" thành công.`, "success");
    }

    resetEditingState();
    setActiveStep(4);
  };

  const handlePublish = () => {
    const isFormIncomplete =
      !editingJob.title.trim() ||
      !editingJob.location.trim() ||
      !editingJob.deadline.trim() ||
      !editingJob.description.trim() ||
      !editingJob.requirements.trim();

    if (isFormIncomplete) {
      showToast(
        "Chưa đủ thông tin bắt buộc để đăng tin. Vui lòng kiểm tra lại form.",
        "error",
      );
      setActiveStep(1);
      return;
    }

    if (totalWeight !== 100) {
      showToast(
        "Cấu hình Match Score không hợp lệ. Vui lòng chỉnh tổng trọng số về 100%.",
        "warning",
      );
      setActiveStep(3);
      return;
    }

    const publishedJob: JobPost = {
      ...editingJob,
      status: "Chờ duyệt" as JobStatus,
    };

    if (isEditingExisting) {
      setJobs((prev) =>
        prev.map((job) => (job.id === publishedJob.id ? publishedJob : job)),
      );
      showToast(`Đã gửi cập nhật tin tuyển dụng "${publishedJob.title}".`, "success");
    } else {
      setJobs((prev) => [publishedJob, ...prev]);
      showToast(`Đã gửi duyệt tin tuyển dụng "${publishedJob.title}".`, "success");
    }

    resetEditingState();
    setActiveStep(4);
  };

  const handleSelectJob = (job: JobPost) => {
    setEditingJob({ ...job });
    setIsEditingExisting(true);
    showToast(`Đã tải thông tin tin "${job.title}".`, "info");
  };

  const handleListAction = (action: string, job: JobPost) => {
    switch (action) {
      case "edit":
        setEditingJob({ ...job });
        setIsEditingExisting(true);
        setActiveStep(1);
        showToast(`Trình soạn thảo đã tải tin "${job.title}".`, "info");
        break;

      case "duplicate":
        setEditingJob({
          ...job,
          id: `job-${Date.now()}`,
          title: `${job.title} - Sao chép`,
          views: 0,
          cvReceived: 0,
          highMatchCv: 0,
          status: "Nháp",
        });
        setIsEditingExisting(false);
        setActiveStep(1);
        showToast(`Đã nhân bản tin "${job.title}". Sẵn sàng lưu hoặc đăng.`, "success");
        break;

      case "toggle_hide": {
        const nextStatus: JobStatus = job.status === "Bị ẩn" ? "Đang hoạt động" : "Bị ẩn";
        setJobs((prev) =>
          prev.map((item) =>
            item.id === job.id ? { ...item, status: nextStatus } : item,
          ),
        );
        showToast(
          nextStatus === "Bị ẩn"
            ? `Đã tạm ẩn tin "${job.title}".`
            : `Đã hiển thị lại tin "${job.title}".`,
          "success",
        );
        break;
      }

      case "extend":
        setExtendJob(job);
        break;

      case "boost":
        setBoostJob(job);
        break;

      case "delete":
        if (confirm(`Bạn có chắc chắn muốn xóa tin tuyển dụng "${job.title}"?`)) {
          setJobs((prev) => prev.filter((item) => item.id !== job.id));
          showToast(`Đã xóa tin tuyển dụng "${job.title}" thành công.`, "success");
          if (editingJob.id === job.id) {
            resetEditingState();
          }
        }
        break;

      case "candidates":
        showToast(`Đang chuyển hướng xem ứng viên của: ${job.title}...`, "info");
        break;

      case "analytics":
        showToast(`Đang tải báo cáo hiệu quả cho tin: ${job.title}...`, "info");
        break;

      case "view_rejection":
        setRejectionJob(job);
        break;

      default:
        break;
    }
  };

  const handleBoostConfirm = (jobId: string, days: number, cost: number) => {
    setCreditsLeft((prev) => prev - cost);
    setJobs((prev) =>
      prev.map((job) => {
        if (job.id === jobId) {
          const limitDate = new Date();
          limitDate.setDate(limitDate.getDate() + days);
          return {
            ...job,
            status: "Đang đẩy" as JobStatus,
            boostedUntil: limitDate.toISOString().split("T")[0],
          };
        }
        return job;
      }),
    );
    showToast(`Đẩy mạnh tin thành công. Bạn bị trừ ${cost} credits.`, "success");
  };

  const handleExtendConfirm = (jobId: string, days: number, cost: number) => {
    setCreditsLeft((prev) => prev - cost);
    setJobs((prev) =>
      prev.map((job) => {
        if (job.id === jobId) {
          const baseDate = new Date(job.deadline);
          const today = new Date();
          const start = baseDate < today ? today : baseDate;
          start.setDate(start.getDate() + days);

          return {
            ...job,
            deadline: start.toISOString().split("T")[0] ?? "",
            status: job.status === "Hết hạn" ? "Đang hoạt động" : job.status,
          };
        }
        return job;
      }),
    );
    showToast(`Gia hạn tin thành công. Bạn bị trừ ${cost} credits.`, "success");
  };

  const handleEditAndResubmit = (job: JobPost) => {
    setEditingJob({ ...job });
    setIsEditingExisting(true);
    setActiveStep(1);
    showToast(
      `Trình soạn thảo đã tải tin "${job.title}". Vui lòng chỉnh sửa nội dung lỗi.`,
      "info",
    );
  };

  const renderComposeStep = () => {
    if (activeStep === 1) {
      return (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12 xl:items-start">
          <div className="xl:col-span-7 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between border-b border-gray-150 pb-3">
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
                  Soạn thông tin tuyển dụng
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  Tập trung hoàn thiện nội dung bên trái, phần xem nhanh chuyển sang khối
                  riêng.
                </p>
              </div>
              <button
                type="button"
                onClick={handleAICraft}
                className="flex items-center gap-1 rounded-lg border border-purple-200 bg-purple-50 px-3 py-1.5 text-[11px] font-bold text-purple-700 transition-colors hover:bg-purple-100"
              >
                <Sparkles className="h-3 w-3" />
                AI viết tin
              </button>
            </div>
            <JobForm job={editingJob} onChange={setEditingJob} currentStep={1} />
          </div>

          <div className="space-y-5 xl:col-span-5">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    Tiến độ hoàn thiện
                  </p>
                  <h3 className="mt-1 text-lg font-black text-emerald-950">
                    {readinessPercent}% sẵn sàng
                  </h3>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-emerald-700 shadow-sm">
                  {completedChecks}/{requiredFieldChecks.length}
                </span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/80">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all"
                  style={{ width: `${readinessPercent}%` }}
                />
              </div>
              <div className="mt-4 space-y-2">
                {requiredFieldChecks.slice(0, 4).map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-xs text-gray-700"
                  >
                    {item.done ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 shrink-0 text-amber-500" />
                    )}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => handleStepClick(2)}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-emerald-700"
              >
                Sang bước xem trước
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-150 pb-3">
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
                    Xem nhanh tin tuyển dụng
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gray-500">
                    Preview tách riêng để dễ rà soát nội dung ngay trong khi soạn.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleStepClick(2)}
                  className="text-[11px] font-bold text-primary transition-colors hover:text-primary/80"
                >
                  Mở toàn màn xem trước
                </button>
              </div>
              <div className="max-h-[720px] overflow-y-auto pr-1">
                <JobPreview job={editingJob} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeStep === 2) {
      return (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12 xl:items-start">
          <div className="xl:col-span-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between border-b border-gray-150 pb-3">
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
                  Xem trước trải nghiệm ứng viên
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  Kiểm tra bố cục, nội dung và tính thuyết phục trước khi gửi duyệt.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleStepClick(1)}
                className="text-[11px] font-bold text-primary transition-colors hover:text-primary/80"
              >
                Quay lại chỉnh sửa
              </button>
            </div>
            <JobPreview job={editingJob} />
          </div>

          <div className="space-y-5 xl:col-span-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
                Checklist trước khi gửi
              </h3>
              <div className="mt-4 space-y-3">
                {requiredFieldChecks.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-2 text-xs text-gray-700"
                  >
                    {item.done ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    ) : (
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    )}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                Gợi ý nghiệp vụ
              </p>
              <div className="mt-3 space-y-2 text-xs leading-6 text-blue-950">
                <p>- Kiểm tra tiêu đề có đúng seniority và tránh từ ngữ giật tít.</p>
                <p>- Rà lại mức lương, deadline và quyền lợi để tăng tỷ lệ apply.</p>
                <p>
                  - Nếu dùng Match Score, nên sang tab chấm điểm để hoàn tất trước khi
                  gửi.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleStepClick(3)}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-blue-700"
              >
                Sang bước Match Score
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (activeStep === 3) {
      return (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12 xl:items-start">
          <div className="xl:col-span-7 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="mb-4 border-b border-gray-150 pb-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
                Thiết lập Match Score
              </h3>
              <p className="mt-1 text-xs font-medium text-gray-500">
                Tách thành tab riêng để HR có thể cấu hình tiêu chí chấm CV mà không bị
                lẫn với phần nội dung tin.
              </p>
            </div>
            <JobForm job={editingJob} onChange={setEditingJob} currentStep={3} />
          </div>

          <div className="space-y-5 xl:col-span-5">
            <div
              className={`rounded-2xl border p-5 shadow-sm ${
                totalWeight === 100
                  ? "border-emerald-100 bg-emerald-50/70"
                  : "border-red-100 bg-red-50/70"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
                    Tình trạng cấu hình
                  </p>
                  <h3 className="mt-1 text-lg font-black text-gray-950">
                    {totalWeight}% / 100%
                  </h3>
                </div>
                {totalWeight === 100 ? (
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-600" />
                ) : (
                  <AlertTriangle className="h-6 w-6 shrink-0 text-red-500" />
                )}
              </div>
              <p className="mt-3 text-xs leading-6 text-gray-700">
                {totalWeight === 100
                  ? "Bộ tiêu chí đã hợp lệ. Hệ thống có thể dùng ngay để ưu tiên CV phù hợp."
                  : "Tổng trọng số chưa đủ 100%. Hãy điều chỉnh để bộ lọc hoạt động đúng khi gửi duyệt."}
              </p>
              <div className="mt-4 rounded-xl bg-white/90 p-4 text-xs text-gray-700 shadow-sm">
                <p className="font-bold text-gray-900">Khuyến nghị nghiệp vụ</p>
                <div className="mt-2 space-y-1.5">
                  <p>- Vị trí senior nên ưu tiên kỹ năng bắt buộc và kinh nghiệm.</p>
                  <p>
                    - Nếu job khó tuyển, giữ trọng số địa điểm và lương ở mức vừa phải.
                  </p>
                  <p>- Preferred Skills nên là phần bù, không lấn át tiêu chí cốt lõi.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between border-b border-gray-150 pb-3">
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
                    Tóm tắt tin đang chấm điểm
                  </h3>
                  <p className="mt-1 text-xs font-medium text-gray-500">
                    Dùng khối bên phải để đối chiếu nhanh giữa nội dung và bộ tiêu chí.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleStepClick(4)}
                  className="text-[11px] font-bold text-primary transition-colors hover:text-primary/80"
                >
                  Sang quản lý tin
                </button>
              </div>
              <div className="max-h-[560px] overflow-y-auto pr-1">
                <JobPreview job={editingJob} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <JobList
        jobs={jobs}
        onSelectJob={handleSelectJob}
        selectedJobId={editingJob.id}
        onAction={handleListAction}
      />
    );
  };

  return (
    <div className="min-h-screen space-y-6 bg-gray-50/50 p-5">
      {toast && (
        <div className="fixed right-6 top-6 z-50 flex max-w-sm scale-95 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl animate-in slide-in-from-top-6 duration-200">
          {toast.type === "success" && (
            <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
          )}
          {toast.type === "error" && (
            <AlertTriangle className="h-5 w-5 shrink-0 text-red-500" />
          )}
          {toast.type === "warning" && (
            <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500" />
          )}
          {toast.type === "info" && <Info className="h-5 w-5 shrink-0 text-blue-500" />}
          <div className="text-xs font-semibold text-gray-800">{toast.message}</div>
        </div>
      )}

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
            Nhà tuyển dụng &gt; Quản lý tin
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
            Tạo và vận hành tin tuyển dụng
          </h1>
          <p className="text-xs font-medium text-gray-500">
            Tách riêng phần soạn, xem trước, chấm điểm và quản lý tin để thao tác gọn hơn
            đúng flow tuyển dụng.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={handleAICraft}
            className="flex items-center gap-1.5 rounded-xl border border-gray-250 bg-white px-4 py-2 text-xs font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50"
          >
            <Sparkles className="h-4 w-4 text-purple-600" />
            AI viết tin
          </button>
          <button
            type="button"
            onClick={handleCreateNewJob}
            className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-white shadow-md shadow-primary/10 transition-all hover:bg-primary/95"
          >
            <Plus className="h-4 w-4" />
            Tạo tin
          </button>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[280px_minmax(0,1fr)]">
        <button
          type="button"
          onClick={() => handleStepClick(managementStepItem.id)}
          className={`flex flex-col rounded-2xl border p-4 text-left shadow-sm transition-all ${
            activeStep === managementStepItem.id
              ? "border-emerald-200 bg-emerald-50"
              : "border-gray-200 bg-white hover:border-gray-250 hover:bg-gray-50"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                activeStep === managementStepItem.id
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {managementStepItem.icon}
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-emerald-700 shadow-sm">
              {jobStatusSummary.total} tin
            </span>
          </div>

          <div className="mt-4 min-w-0">
            <div className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
              {managementStepItem.title}
            </div>
            <p className="mt-2 text-[12px] font-medium leading-5 text-gray-500">
              {managementStepItem.subtitle}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold">
            <span className="rounded-full bg-white px-3 py-1 text-gray-700 shadow-sm">
              {"\u0110ang ho\u1ea1t \u0111\u1ed9ng"}: {jobStatusSummary.active}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-gray-700 shadow-sm">
              {"Ch\u1edd duy\u1ec7t"}: {jobStatusSummary.pending}
            </span>
          </div>

          <div className="mt-auto pt-5 text-[11px] font-bold text-emerald-700">
            {"M\u1edf khu v\u1eadn h\u00e0nh ri\u00eang"}
          </div>
        </button>

        <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="grid gap-3 lg:grid-cols-3">
            {composeStepItems.map((item) => {
              const isActive = activeStep === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleStepClick(item.id)}
                  className={`flex min-w-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all ${
                    isActive
                      ? "border-emerald-200 bg-emerald-50 shadow-sm"
                      : "border-gray-150 bg-white hover:border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      isActive ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-xs font-extrabold uppercase tracking-wider text-gray-900">
                      {item.title}
                    </div>
                    <div className="mt-1 text-[11px] font-medium text-gray-500">
                      {item.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                Tiến độ form: {readinessPercent}%
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                Match Score: {totalWeight}/100
              </span>
              <span
                className={`rounded-full px-3 py-1 ${
                  isReadyToPublish
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                {isReadyToPublish ? "Sẵn sàng gửi duyệt" : "Cần bổ sung thông tin"}
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                Tin đang hoạt động: {jobStatusSummary.active}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="rounded-xl border border-gray-250 bg-white px-4 py-2 text-xs font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50"
              >
                Lưu nháp
              </button>
              <button
                type="button"
                onClick={handlePublish}
                className="flex items-center gap-1.5 rounded-xl bg-[#00b074] px-4 py-2 text-xs font-bold text-white shadow-md shadow-emerald-600/10 transition-all hover:bg-[#00b074]/95"
              >
                <Send className="h-3.5 w-3.5" />
                {isEditingExisting ? "Cập nhật" : "Gửi duyệt"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {renderComposeStep()}

      <BoostModal
        isOpen={boostJob !== null}
        onClose={() => setBoostJob(null)}
        job={boostJob}
        onConfirm={handleBoostConfirm}
        creditsLeft={creditsLeft}
      />

      <ExtendModal
        isOpen={extendJob !== null}
        onClose={() => setExtendJob(null)}
        job={extendJob}
        onConfirm={handleExtendConfirm}
        creditsLeft={creditsLeft}
      />

      <RejectionDetailsModal
        isOpen={rejectionJob !== null}
        onClose={() => setRejectionJob(null)}
        job={rejectionJob}
        onEditAndResubmit={handleEditAndResubmit}
      />
    </div>
  );
}
