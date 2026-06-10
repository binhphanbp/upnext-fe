const candidates = [
  {
    name: "Nguyen Minh Khoa",
    role: "Senior Frontend Engineer",
    experience: "6 years",
    job: "React Lead - Fintech",
    skills: ["React", "TypeScript"],
    score: 96,
    color: "bg-blue-500",
  },
  {
    name: "Tran Bao Anh",
    role: "Full-stack engineer",
    experience: "5 years",
    job: "NodeJS Platform",
    skills: ["NodeJs", "AWS"],
    score: 92,
    color: "bg-green-500",
  },
  {
    name: "Pham Quoc Viet",
    role: "Senior engineer",
    experience: "5 years",
    job: "Cloud Infrastructure",
    skills: ["K8s", "Terraform"],
    score: 89,
    color: "bg-purple-500",
  },
  {
    name: "Le Thu Ha",
    role: "QA automation",
    experience: "4 years",
    job: "SDET - E-commerce",
    skills: ["Playwright", "APITest"],
    score: 84,
    color: "bg-yellow-500",
  },
  {
    name: "Do Minh Quan",
    role: "Data Engineer",
    experience: "4 years",
    job: "Data Platform Engineer",
    skills: ["Spark", "dbt"],
    score: 87,
    color: "bg-red-500",
  },
  {
    name: "Mai Thanh Truc",
    role: "AI Product Engineer",
    experience: "4 years",
    job: "AI Product Engineer",
    skills: ["Python", "LLM"],
    score: 91,
    color: "bg-blue-500",
  },
  {
    name: "Hoang Gia Bao",
    role: "Mobile lead",
    experience: "4 years",
    job: "Senior Mobile Engineer",
    skills: ["React Native", "iOS"],
    score: 78,
    color: "bg-green-500",
  },
  {
    name: "Nguyen Anh Thu",
    role: "Frontend platform architect",
    experience: "4 years",
    job: "Frontend Platform Architect",
    skills: ["React", "Micro Frontends"],
    score: 94,
    color: "bg-purple-500",
  },
];

export function RankingTable() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
        <h2 className="flex items-center gap-2 text-base font-semibold text-gray-900">
          <span className="text-gray-400">⭐</span>
          Xếp hạng điểm khớp
        </h2>
        <button className="text-xs font-medium text-primary hover:text-primary/80">
          Trạng thái hàng loạt →
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-100 bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-[10px] font-semibold text-gray-600">
                Ứng viên
              </th>
              <th className="px-4 py-2 text-left text-[10px] font-semibold text-gray-600">
                Công việc đã ứng tuyển
              </th>
              <th className="px-4 py-2 text-left text-[10px] font-semibold text-gray-600">
                Kỹ năng
              </th>
              <th className="px-4 py-2 text-right text-[10px] font-semibold text-gray-600">
                Điểm
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {candidates.map((candidate, index) => (
              <tr key={index} className="transition-colors hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-8 w-8 rounded-full ${candidate.color} flex items-center justify-center text-[10px] font-semibold text-white`}
                    >
                      {candidate.name.split(" ")[0]?.[0] || ""}
                      {candidate.name.split(" ")[
                        candidate.name.split(" ").length - 1
                      ]?.[0] || ""}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900">
                        {candidate.name}
                      </div>
                      <div className="text-[10px] text-gray-500">
                        {candidate.role} • {candidate.experience}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-xs text-gray-900">{candidate.job}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    {candidate.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-base font-bold text-gray-900">
                      {candidate.score}
                    </span>
                    <div className="h-1.5 w-16 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full bg-primary"
                        style={{ width: `${candidate.score}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
