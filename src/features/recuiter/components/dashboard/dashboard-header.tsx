export function DashboardHeader() {
  return (
    <div className="mb-6">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
        Nhà tuyển dụng
      </div>
      <div className="mb-2 flex items-center justify-between">
        <h1 className="text-2xl font-black text-gray-900">Báo cáo tuyển dụng</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">1 Tháng 6, 2024</span>
          <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Xuất báo cáo
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500">
        Trung tâm điều khiển cho nhà tuyển dụng, nguồn ứng viên, xếp hạng, phỏng vấn,
        offer, điểm tin cậy và hiệu quả AI
      </p>
    </div>
  );
}
