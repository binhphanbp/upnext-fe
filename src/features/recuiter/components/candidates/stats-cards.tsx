import { Users, Sparkles, Calendar, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Đơn ứng tuyển mới",
    value: "128",
    description: "97 CVs cần đánh giá ngay hôm nay",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Sparkles,
    label: "CV khớp cao",
    value: "46",
    description: "Điểm 85+ trong các công việc đang hoạt động",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Calendar,
    label: "Sẵn sàng phỏng vấn",
    value: "18",
    description: "Phát hành lịch xác nhận",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Heart,
    label: "Nguồn nhân tài",
    value: "342",
    description: "Đã lưu cho chiến dịch tương lai",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
];

export function StatsCards() {
  return (
    <div className="mb-6 grid grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="rounded-xl border border-gray-200 bg-white p-6">
            <div className={`mb-3 inline-flex rounded-lg ${stat.bgColor} p-2`}>
              <Icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div className="mb-1 text-xs font-medium text-gray-600">{stat.label}</div>
            <div className="mb-2 text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.description}</div>
          </div>
        );
      })}
    </div>
  );
}
