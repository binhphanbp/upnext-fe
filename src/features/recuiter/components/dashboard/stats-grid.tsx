import { Eye, FileText, Target, Users, Gift, ShieldCheck } from "lucide-react";

const stats = [
  {
    label: "Lượt xem tin",
    value: "24,568",
    trend: "▲ 18.6%",
    description: "so với 30 ngày trước",
    icon: Eye,
    iconColor: "text-blue-500",
  },
  {
    label: "CV nhận được",
    value: "1,284",
    trend: "▲ 16.3%",
    description: "so với 30 ngày trước",
    icon: FileText,
    iconColor: "text-blue-500",
  },
  {
    label: "CV phù hợp cao",
    value: "248",
    trend: "▲ 12.8%",
    description: "so với 30 ngày trước",
    icon: Target,
    iconColor: "text-blue-500",
  },
  {
    label: "Phỏng vấn",
    value: "56",
    trend: "▲ 7.7%",
    description: "so với 30 ngày trước",
    icon: Users,
    iconColor: "text-blue-500",
  },
  {
    label: "Offer",
    value: "18",
    trend: "▲ 5.9%",
    description: "so với 30 ngày trước",
    icon: Gift,
    iconColor: "text-rose-500",
  },
  {
    label: "Điểm tin cậy",
    value: "86",
    valueSuffix: "/100",
    trend: "▲ 6 điểm",
    description: "so với 30 ngày trước",
    icon: ShieldCheck,
    iconColor: "text-emerald-500",
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="rounded-2xl border border-gray-150 bg-white p-3 xl:p-4 shadow-2xs hover:shadow-xs transition-all duration-200 flex items-start gap-2.5 group cursor-default"
          >
            {/* Bare Icon without background padding to save horizontal space */}
            <div
              className={`mt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110 ${stat.iconColor}`}
            >
              <Icon className="h-5 w-5 xl:h-6 xl:w-6" />
            </div>

            {/* Metric Info */}
            <div className="flex-1 min-w-0">
              <div className="text-[11px] xl:text-xs font-semibold text-gray-500 truncate">
                {stat.label}
              </div>
              <div className="mt-1 flex items-baseline gap-1.5 flex-nowrap whitespace-nowrap">
                <span className="text-[17px] xl:text-xl font-extrabold text-gray-900 tracking-tight leading-none">
                  {stat.value}
                </span>
                {stat.valueSuffix && (
                  <span className="text-[11px] font-medium text-gray-400 leading-none">
                    {stat.valueSuffix}
                  </span>
                )}
                <span className="text-[10px] font-bold text-emerald-600 shrink-0 leading-none">
                  {stat.trend}
                </span>
              </div>
              <div className="mt-1.5 text-[9px] xl:text-[10px] font-medium text-gray-400 truncate leading-none">
                {stat.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
