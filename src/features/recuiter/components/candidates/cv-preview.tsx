import { Calendar, Heart, MessageSquare } from "lucide-react";

export function CVPreview() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-3">
        <h2 className="text-base font-semibold text-gray-900">Xem trước CV</h2>
        <button className="text-xs font-medium text-primary hover:text-primary/80">
          Mở hồ sơ đầy đủ →
        </button>
      </div>

      {/* Candidate Info */}
      <div className="mb-4">
        <div className="mb-3 flex items-start gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
            NK
          </div>
          <div className="flex-1">
            <h3 className="mb-1 text-base font-bold text-gray-900">Nguyen Minh Khoa</h3>
            <p className="mb-2 text-xs text-gray-600">
              Senior Frontend Engineer • 6.5+ y.e Ho Chi Minh
            </p>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary/90">
                <Calendar className="h-3 w-3" />
                Lịch hẹn
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-50">
                <Heart className="h-3 w-3" />
                Nguồn
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-50">
                <MessageSquare className="h-3 w-3" />
                Nhắn tin
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="mb-1 text-3xl font-bold text-gray-900">96</div>
            <div className="text-[10px] text-gray-500">Điểm khớp</div>
          </div>
        </div>
      </div>

      {/* AI Reason */}
      <div className="mb-4 rounded-lg bg-primary/10 p-3">
        <h4 className="mb-1.5 text-xs font-semibold text-gray-900">Lý do AI</h4>
        <p className="text-xs text-gray-700">
          Kiến trúc React mạnh mẽ, kinh nghiệm fintech domain, khoảng lương phù hợp
        </p>
      </div>

      {/* Details Grid */}
      <div className="space-y-3">
        <div>
          <h4 className="mb-1.5 text-xs font-semibold text-gray-900">Kỹ năng</h4>
          <div className="rounded-lg bg-gray-50 p-2.5">
            <p className="text-xs text-gray-700">
              Trọng số 55%: React, TypeScript, Next.js, system design, testing
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-1.5 text-xs font-semibold text-gray-900">Kinh nghiệm</h4>
          <div className="rounded-lg bg-gray-50 p-2.5">
            <p className="text-xs text-gray-700">
              Trọng số 30%: 6 năm, sản phẩm phân phối, bằng chứng kiến trúc
            </p>
          </div>
        </div>

        <div>
          <h4 className="mb-1.5 text-xs font-semibold text-gray-900">Khác</h4>
          <div className="rounded-lg bg-gray-50 p-2.5">
            <p className="text-xs text-gray-700">
              Trọng số 20%: lương, địa điểm, ngôn ngữ và tính khả dụng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
