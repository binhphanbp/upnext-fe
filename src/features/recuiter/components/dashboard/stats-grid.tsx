const stats = [
  {
    label: "Việc làm đang mở",
    value: "36",
    description: "7 tin mới",
  },
  {
    label: "CV nhận được",
    value: "1,284",
    description: "120 mới tuần này",
  },
  {
    label: "CV phù hợp cao",
    value: "248",
    description: "Điểm 80+",
  },
  {
    label: "Phỏng vấn",
    value: "18",
    description: "8 chờ phản hồi",
  },
  {
    label: "Offer",
    value: "7",
    description: "2 đang thương lượng",
  },
  {
    label: "Điểm tin cậy",
    value: "86",
    description: "Nhà tuyển dụng uy tín",
  },
];

export function StatsGrid() {
  return (
    <div className="mt-6 grid grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="rounded-lg bg-gray-50 p-4">
          <div className="mb-1 text-xs font-medium text-gray-600">{stat.label}</div>
          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          <div className="text-xs text-gray-500">{stat.description}</div>
        </div>
      ))}
    </div>
  );
}
