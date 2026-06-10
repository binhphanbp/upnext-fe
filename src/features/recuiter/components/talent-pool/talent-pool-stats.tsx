const stats = [
  {
    icon: (
      <svg
        className="h-5 w-5 text-teal-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    label: "Ứng viên đã lưu",
    value: "342",
    description: "12% tiềm năng, 4% sẵn sàng",
    color: "bg-teal-50",
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "Đã đồng ý",
    value: "91%",
    description: "GDPR, quyền liên hệ opt-in",
    color: "bg-blue-50",
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-purple-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    label: "Kỹ năng hot",
    value: "React, K8s",
    description: "Được yêu cầu nhiều nhất",
    color: "bg-purple-50",
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-orange-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Tỷ lệ phản hồi",
    value: "28%",
    description: "5 ngày tiếp cận gần đây",
    color: "bg-orange-50",
  },
];

export function TalentPoolStats() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div key={index} className="rounded-lg border border-gray-200 bg-white p-5">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="mb-1 text-xs font-medium text-gray-500">{stat.label}</div>
              <div className="mb-1 text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.description}</div>
            </div>
            <div className={`rounded-lg p-2 ${stat.color}`}>{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
