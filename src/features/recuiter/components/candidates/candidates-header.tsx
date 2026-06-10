import { Filter, Sparkles } from "lucide-react";

export function CandidatesHeader() {
  return (
    <div className="mb-6">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
        Nhà tuyển dụng
      </div>
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Bảng xếp hạng và ngân hàng ứng viên
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            Kỹ năng / năm / công việc
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
            <Sparkles className="h-4 w-4" />
            Tái tạo CV
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500">
        AI tự động chấm điểm ID/CV, giải thích lý do phù hợp với từng vị trí trong danh
        sách của bạn
      </p>
    </div>
  );
}
