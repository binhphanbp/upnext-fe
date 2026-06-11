import { CreditCard, Sparkles, Calendar, CreditCard as CardIcon } from "lucide-react";

interface SubscriptionCardProps {
  onUpgradeClick?: () => void;
}

export function SubscriptionCard({ onUpgradeClick }: SubscriptionCardProps) {
  return (
    <div className="rounded-2xl border border-gray-150 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <CreditCard className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-900">
              Gói dịch vụ & Tài nguyên
            </h2>
            <p className="text-xs text-gray-400">Quản lý hạn mức và chu kỳ thanh toán</p>
          </div>
        </div>
        <div className="self-start sm:self-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 px-3.5 py-1 text-xs font-bold text-white shadow-sm shadow-orange-500/10">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            Gói Pro Tuyển dụng
          </span>
        </div>
      </div>

      {/* Grid containing Limits & Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Resource Limits */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Hạn mức sử dụng tài nguyên
          </h3>

          {/* AI CV Screening Limit */}
          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-700">
                Quét hồ sơ ứng viên bằng AI
              </span>
              <span className="font-bold text-gray-900">84 / 100 CV</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full rounded-full bg-primary" style={{ width: "84%" }} />
            </div>
          </div>

          {/* Job posts Limit */}
          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-700">
                Tin tuyển dụng đang hoạt động
              </span>
              <span className="font-bold text-gray-900">3 / 5 tin</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-amber-500"
                style={{ width: "60%" }}
              />
            </div>
          </div>
        </div>

        {/* Subscription details */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
              Thông tin thanh toán
            </h3>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  Ngày gia hạn tiếp theo
                </span>
                <span className="font-bold text-gray-900">11 / 07 / 2026</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 flex items-center gap-1.5">
                  <CardIcon className="h-4 w-4 text-gray-400" />
                  Phương thức thanh toán
                </span>
                <span className="font-bold text-gray-900">Visa •••• 4242</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Buttons */}
      <div className="flex flex-wrap items-center justify-end gap-3 pt-5 border-t border-gray-100">
        <button className="flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-gray-700 border border-gray-200 transition-all hover:bg-gray-50 active:scale-[0.98] cursor-pointer">
          Xem lịch sử hóa đơn
        </button>
        <button
          onClick={onUpgradeClick}
          className="flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white border-0 transition-all hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-primary/10 cursor-pointer"
        >
          Nâng cấp gói dịch vụ
        </button>
      </div>
    </div>
  );
}
