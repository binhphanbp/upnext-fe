"use client";

import { Award } from "lucide-react";

interface Candidate {
  name: string;
  initials: string;
  avatarColor: string;
}

interface RankedCandidate {
  rank: number;
  candidate: Candidate;
  position: string;
  matchScore: string;
  status: "Mới" | "Đã phỏng vấn" | "Sàng lọc";
}

const topCandidates: RankedCandidate[] = [
  {
    rank: 1,
    candidate: {
      name: "Phạm Thị Linh",
      initials: "PT",
      avatarColor: "bg-amber-50 text-amber-700",
    },
    position: "Front-end Developer",
    matchScore: "96%",
    status: "Mới",
  },
  {
    rank: 2,
    candidate: {
      name: "Lê Duy Nam",
      initials: "LD",
      avatarColor: "bg-slate-100 text-slate-700",
    },
    position: "Back-end Developer",
    matchScore: "93%",
    status: "Mới",
  },
  {
    rank: 3,
    candidate: {
      name: "Trần Văn Hùng",
      initials: "TV",
      avatarColor: "bg-orange-50 text-orange-700",
    },
    position: "DevOps Engineer",
    matchScore: "91%",
    status: "Mới",
  },
  {
    rank: 4,
    candidate: {
      name: "Nguyễn Hữu Phúc",
      initials: "NH",
      avatarColor: "bg-blue-50 text-blue-700",
    },
    position: "Data Analyst",
    matchScore: "89%",
    status: "Đã phỏng vấn",
  },
  {
    rank: 5,
    candidate: {
      name: "Trương Thu Trang",
      initials: "TT",
      avatarColor: "bg-purple-50 text-purple-700",
    },
    position: "UI/UX Designer",
    matchScore: "88%",
    status: "Sàng lọc",
  },
];

export function TopCandidates() {
  return (
    <div className="rounded-2xl border border-gray-150 bg-white p-6 shadow-2xs hover:shadow-xs transition-all duration-200">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
          <Award className="h-4.5 w-4.5 text-gray-500" />
          Top ứng viên Match Score cao
        </h2>
        <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
          Xem tất cả
        </button>
      </div>

      {/* Table / List */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="pb-3 font-semibold text-center w-12">Hạng</th>
              <th className="pb-3 font-semibold">Ứng viên</th>
              <th className="pb-3 font-semibold">Vị trí</th>
              <th className="pb-3 font-semibold">Match Score</th>
              <th className="pb-3 font-semibold">Trạng thái</th>
              <th className="pb-3 font-semibold text-right">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100/50">
            {topCandidates.map((item, idx) => {
              // Rank circle styling
              let rankStyle = "bg-gray-100 text-gray-500";
              if (item.rank === 1) rankStyle = "bg-amber-400 text-white font-extrabold";
              if (item.rank === 2) rankStyle = "bg-slate-300 text-white font-extrabold";
              if (item.rank === 3)
                rankStyle = "bg-amber-600/80 text-white font-extrabold";

              // Status badge styling
              let statusStyle = "bg-blue-50 text-blue-700";
              if (item.status === "Đã phỏng vấn")
                statusStyle = "bg-orange-50 text-orange-700";
              if (item.status === "Sàng lọc")
                statusStyle = "bg-purple-50 text-purple-700";

              return (
                <tr
                  key={idx}
                  className="hover:bg-gray-50/30 transition-colors duration-150 group"
                >
                  <td className="py-3 text-center">
                    <div
                      className={`flex h-5 w-5 mx-auto items-center justify-center rounded-full text-[10px] ${rankStyle}`}
                    >
                      {item.rank}
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${item.candidate.avatarColor}`}
                      >
                        {item.candidate.initials}
                      </div>
                      <span className="text-xs font-bold text-gray-950 truncate max-w-[120px]">
                        {item.candidate.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 text-xs font-bold text-gray-500">
                    {item.position}
                  </td>
                  <td className="py-3 text-xs font-black text-emerald-600">
                    {item.matchScore}
                  </td>
                  <td className="py-3">
                    <span
                      className={`inline-flex items-center whitespace-nowrap rounded-lg px-2 py-1 text-[10px] font-extrabold leading-none ${statusStyle}`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <button className="rounded-lg border border-gray-250 bg-white px-3 py-1.5 text-2xs font-bold text-gray-700 hover:bg-gray-50 shadow-3xs transition-all cursor-pointer">
                      Xem CV
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
