import { useEffect, useState } from "react";
import {
  Zap,
  X,
  Shield,
  Sparkles,
  TrendingUp,
  Building2,
  CheckCircle2,
} from "lucide-react";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UpgradeModal({ isOpen, onClose }: UpgradeModalProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
      {/* Backdrop click closer */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl border border-gray-150 shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto z-10 p-6 md:p-8 animate-scale-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all cursor-pointer border-0"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-100 px-3.5 py-1 text-xs font-bold text-orange-600 mb-3">
            <Zap className="h-3.5 w-3.5 fill-orange-500" />
            Nâng cấp lên Plus
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Bảng giá minh bạch, Không phí ẩn
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Chọn gói phù hợp cho Candidate, Recruiter hoặc đội vận hành tuyển dụng IT.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="mt-5 inline-flex items-center gap-1 bg-gray-100 p-1 rounded-full border border-gray-200">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border-0 ${
                billingCycle === "monthly"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900 bg-transparent"
              }`}
            >
              Hàng tháng
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer border-0 ${
                billingCycle === "yearly"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900 bg-transparent"
              }`}
            >
              Hàng năm
              <span className="bg-emerald-500 text-white font-extrabold px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wide">
                Tiết kiệm 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-8">
          {/* Card 1: Trial */}
          <div className="flex flex-col justify-between rounded-2xl border border-gray-150 bg-white p-5 hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-gray-900">Dùng thử</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Shield className="h-4 w-4" />
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed min-h-[36px]">
                Dành cho đội mới thử quy trình tuyển dụng có AI.
              </p>

              <div className="my-5 flex flex-col gap-3">
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold text-gray-900">Miễn phí</span>
                </div>
                <button
                  disabled
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-bold text-gray-400 cursor-not-allowed border-solid whitespace-nowrap"
                >
                  Đang dùng
                </button>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Bao gồm các tính năng:
                </p>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">Hệ thống quản lý ứng viên (ATS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">1 tin tuyển dụng hoạt động</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">Tự động trích xuất CV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">Báo cáo tuyển dụng cơ bản</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Starter */}
          <div className="flex flex-col justify-between rounded-2xl border border-gray-150 bg-white p-5 hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-gray-900">Khởi đầu</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Sparkles className="h-4 w-4" />
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed min-h-[36px]">
                Cho startup cần đăng tin và lọc CV ổn định.
              </p>

              <div className="my-5 flex flex-col gap-3">
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold text-gray-900">
                    ${billingCycle === "monthly" ? "49" : "39"}
                  </span>
                  <span className="text-xs text-gray-400 ml-1">/tháng</span>
                </div>
                <button className="w-full rounded-xl bg-[#fcae1d] hover:bg-[#e29c19] px-4 py-2 text-xs font-bold text-white transition-colors cursor-pointer border-0 active:scale-[0.98] shadow-sm shadow-orange-500/10 whitespace-nowrap">
                  Nâng cấp
                </button>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Bao gồm các tính năng:
                </p>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">5 tin tuyển dụng hoạt động</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">300 lượt trích xuất CV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">3 thành viên nhóm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">10 bản ghi phỏng vấn AI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: Growth */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-purple-500 bg-purple-50/5 p-5 shadow-lg shadow-purple-500/5 hover:shadow-xl transition-all relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider shadow whitespace-nowrap">
              Phổ biến
            </span>
            <div>
              <div className="flex items-center justify-between mb-3 mt-1">
                <span className="font-bold text-gray-900">Phát triển</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <TrendingUp className="h-4 w-4" />
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed min-h-[36px]">
                Gói phù hợp nhất cho đội tuyển dụng IT đang scale.
              </p>

              <div className="my-5 flex flex-col gap-3">
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold text-gray-900">
                    ${billingCycle === "monthly" ? "149" : "119"}
                  </span>
                  <span className="text-xs text-gray-400 ml-1">/tháng</span>
                </div>
                <button className="w-full rounded-xl bg-violet-600 hover:bg-violet-700 px-4 py-2 text-xs font-bold text-white transition-colors cursor-pointer border-0 active:scale-[0.98] shadow-sm shadow-purple-500/10 whitespace-nowrap">
                  Nâng cấp
                </button>
              </div>

              <div className="border-t border-purple-100 pt-4">
                <p className="text-[10px] font-bold text-purple-600 uppercase tracking-wider mb-3">
                  Bao gồm các tính năng:
                </p>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">30 tin tuyển dụng hoạt động</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">2,000 lượt lọc CV bằng AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">Tự động hóa quy trình</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">Đồng bộ lịch Google/Outlook</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 4: Enterprise */}
          <div className="flex flex-col justify-between rounded-2xl border border-gray-150 bg-white p-5 hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-gray-900">Doanh nghiệp</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Building2 className="h-4 w-4" />
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed min-h-[36px]">
                Cho công ty cần SLA, phân quyền và thanh toán riêng.
              </p>

              <div className="my-5 flex flex-col gap-3">
                <div className="flex items-baseline h-[36px] items-end">
                  <span className="text-2xl font-extrabold text-gray-900 leading-none">
                    Liên hệ
                  </span>
                </div>
                <button className="w-full rounded-xl bg-[#fcae1d] hover:bg-[#e29c19] px-4 py-2 text-xs font-bold text-white transition-colors cursor-pointer border-0 active:scale-[0.98] shadow-sm shadow-orange-500/10 whitespace-nowrap">
                  Nhận tư vấn
                </button>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Bao gồm các tính năng:
                </p>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">Không giới hạn tin tuyển dụng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">Không giới hạn thành viên</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">
                      Đăng nhập SSO & Nhật ký hệ thống
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="leading-tight">Hỗ trợ riêng kèm cam kết SLA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex items-center justify-center gap-2 py-3 bg-gray-50 rounded-2xl border border-gray-100 text-xs text-gray-600">
          <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
          <span>
            Không tính phí ẩn. Có thể đổi gói hoặc hủy gia hạn ở trang Company & Billing.
          </span>
        </div>
      </div>
    </div>
  );
}
