import { Award, CheckCircle2, AlertCircle, ChevronRight } from "lucide-react";

interface ScoreDetail {
  label: string;
  value: string;
  isPositive: boolean;
  description: string;
}

const scoreDetails: ScoreDetail[] = [
  {
    label: "Giấy phép kinh doanh đã xác minh",
    value: "+12",
    isPositive: true,
    description: "Tài liệu pháp lý hợp lệ đã được phê duyệt bởi ban quản trị.",
  },
  {
    label: "Đánh giá tích cực từ ứng viên",
    value: "+8",
    isPositive: true,
    description:
      "Nhận được phản hồi tích cực về quy trình phỏng vấn chuyên nghiệp từ ứng viên.",
  },
  {
    label: "Thời gian phản hồi cần cải thiện",
    value: "-4",
    isPositive: false,
    description: "Thời gian phản hồi hồ sơ ứng viên trung bình vượt quá 48 giờ làm việc.",
  },
];

export function TrustScoreDetailCard() {
  return (
    <div className="rounded-2xl border border-gray-150 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-900">
              Điểm tin cậy nhà tuyển dụng
            </h2>
            <p className="text-xs text-gray-400">
              Được đánh giá dựa trên mức độ hoạt động và xác thực
            </p>
          </div>
        </div>
        <button className="flex items-center gap-0.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer border-0 bg-transparent p-0">
          Cải thiện
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Score and status */}
      <div className="mb-6 flex items-baseline gap-3">
        <span className="text-5xl font-extrabold tracking-tight text-gray-900">86</span>
        <div className="flex flex-col gap-0.5">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200/50">
            Doanh nghiệp tin cậy
          </span>
          <span className="text-[11px] text-gray-400">
            Thuộc nhóm 15% nhà tuyển dụng uy tín nhất
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-xs text-gray-400">
          <span>Tiến trình hoàn thiện hồ sơ tin cậy</span>
          <span className="font-bold text-emerald-600">86%</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
            style={{ width: "86%" }}
          />
        </div>
      </div>

      {/* Score Details List */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
          Chi tiết các tiêu chuẩn đánh giá
        </h3>
        <div className="divide-y divide-gray-100">
          {scoreDetails.map((detail, index) => (
            <div
              key={index}
              className="flex items-start gap-3 py-3 hover:bg-gray-50/30 rounded-lg px-2 -mx-2 transition-colors"
            >
              {detail.isPositive ? (
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 shrink-0 text-rose-500 mt-0.5" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-bold text-gray-900 truncate">
                    {detail.label}
                  </p>
                  <span
                    className={`inline-flex rounded-lg px-2 py-0.5 text-xs font-bold border ${
                      detail.isPositive
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                        : "bg-rose-50 text-rose-700 border-rose-100"
                    }`}
                  >
                    {detail.value}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{detail.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
