import { Sparkles, Plus } from "lucide-react";

export function JobPostsHeader() {
  return (
    <div className="mb-6">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
        Nhà tuyển dụng
      </div>
      <div className="mb-2 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Tạo, tăng cường và làm mới tin tuyển dụng
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
            <Sparkles className="h-4 w-4" />
            AI craft
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Tạo tin
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500">
        Đăng một bài đăng, AI sẽ xử lý công việc thủ công (copy-text, tái viết để kích
        thích ứng viên phù hợp)
      </p>
    </div>
  );
}
