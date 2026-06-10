import { Target } from "lucide-react";

const scoreDetails = [
  {
    label: "Giấy phép kinh doanh đã xác minh",
    value: "+12",
    isPositive: true,
  },
  {
    label: "Đánh giá tích cực từ ứng viên",
    value: "+8",
    isPositive: true,
  },
  {
    label: "Thời gian phản hồi cần cải thiện",
    value: "-4",
    isPositive: false,
  },
];

export function TrustScoreCard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Target className="h-4 w-4 text-primary" />
          Điểm tin cậy nhà tuyển dụng
        </div>
        <button className="text-sm font-medium text-primary hover:text-primary/80">
          Cải thiện →
        </button>
      </div>

      <div className="mb-4">
        <div className="text-4xl font-bold text-gray-900">86</div>
        <div className="text-sm font-medium text-green-600">Doanh nghiệp tin cậy</div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4 h-2 overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-[86%] rounded-full bg-primary"></div>
      </div>

      {/* Score Details */}
      <div className="space-y-2 text-sm">
        {scoreDetails.map((detail, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-600">{detail.label}</span>
            <span
              className={`font-medium ${
                detail.isPositive ? "text-gray-900" : "text-red-600"
              }`}
            >
              ({detail.value})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
