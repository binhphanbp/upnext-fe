const jobs = [
  {
    title: "React Lead - Fintech",
    salary: "6,500 lượt xem • 57 CV",
    status: "Đang hoạt động",
    statusColor: "text-green-600 bg-green-50",
    views: "0 ngày",
    action: "Đẩy mạnh",
  },
  {
    title: "NodeJS Platform Engineer",
    salary: "5,200 lượt xem • 48 CV",
    status: "Đang đẩy",
    statusColor: "text-purple-600 bg-purple-50",
    views: "6 ngày",
    action: "Đẩy mạnh",
  },
  {
    title: "Data Engineer",
    salary: "3,100 lượt xem • 23 CV",
    status: "Hết hạn",
    statusColor: "text-yellow-600 bg-yellow-50",
    views: "0 ngày",
    action: "Làm mới",
  },
  {
    title: "Junior Tester",
    salary: "1,950 lượt xem • 14 CV",
    status: "Nháp",
    statusColor: "text-gray-600 bg-gray-50",
    views: "",
    action: "Chỉnh sửa",
  },
  {
    title: "Frontend Platform Architect",
    salary: "7,400 lượt xem • 92 CV",
    status: "Đang hoạt động",
    statusColor: "text-green-600 bg-green-50",
    views: "21 ngày",
    action: "Đẩy mạnh",
  },
  {
    title: "Go Backend Engineer",
    salary: "6,800 lượt xem • 78 CV",
    status: "Đang hoạt động",
    statusColor: "text-green-600 bg-green-50",
    views: "15 ngày",
    action: "Đẩy mạnh",
  },
  {
    title: "SRE Lead",
    salary: "4,350 lượt xem • 34 CV",
    status: "Đang đẩy",
    statusColor: "text-purple-600 bg-purple-50",
    views: "9 ngày",
    action: "Đẩy mạnh",
  },
  {
    title: "Machine Learning Engineer",
    salary: "9,600 lượt xem • 126 CV",
    status: "Đang hoạt động",
    statusColor: "text-green-600 bg-green-50",
    views: "19 ngày",
    action: "Đẩy mạnh",
  },
  {
    title: "Security Engineer",
    salary: "5,200 lượt xem • 43 CV",
    status: "Đang xem xét",
    statusColor: "text-orange-600 bg-orange-50",
    views: "4 ngày",
    action: "Tiếp tục",
  },
  {
    title: "Technical Product Manager",
    salary: "6,780 lượt xem • 89 CV",
    status: "Đang hoạt động",
    statusColor: "text-green-600 bg-green-50",
    views: "11 ngày",
    action: "Đẩy mạnh",
  },
  {
    title: "Mobile Lead",
    salary: "4,750 lượt xem • 52 CV",
    status: "Hết hạn",
    statusColor: "text-yellow-600 bg-yellow-50",
    views: "0 ngày",
    action: "Làm mới",
  },
  {
    title: "AI Frontend Engineer",
    salary: "8,150 lượt xem • 107 CV",
    status: "Đang đẩy",
    statusColor: "text-purple-600 bg-purple-50",
    views: "14 ngày",
    action: "Đẩy mạnh",
  },
];

export function JobList() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-900">Danh sách tin tuyển dụng</h2>
        <button className="text-sm font-medium text-primary hover:text-primary/80">
          Thao tác hàng loạt →
        </button>
      </div>

      {/* Job List */}
      <div className="divide-y divide-gray-100">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-gray-50"
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.salary}</p>
            </div>
            <div className="flex items-center gap-4">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${job.statusColor}`}
              >
                {job.status}
              </span>
              {job.views && <span className="text-sm text-gray-500">{job.views}</span>}
              <button className="rounded-lg border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                {job.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
