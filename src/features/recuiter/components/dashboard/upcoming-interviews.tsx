"use client";

import { MoreVertical, Calendar } from "lucide-react";

interface Candidate {
  name: string;
  initials: string;
  avatarColor: string;
}

interface Interview {
  time: string;
  candidate: Candidate;
  position: string;
  status: "Chờ xác nhận" | "Đã xác nhận";
}

const interviews: Interview[] = [
  {
    time: "Hôm nay, 10:00",
    candidate: {
      name: "Nguyễn Tuấn Anh",
      initials: "NT",
      avatarColor: "bg-orange-100 text-orange-700",
    },
    position: "Front-end Developer",
    status: "Chờ xác nhận",
  },
  {
    time: "Hôm nay, 14:00",
    candidate: {
      name: "Hoàng Lan",
      initials: "HL",
      avatarColor: "bg-rose-100 text-rose-700",
    },
    position: "UI/UX Designer",
    status: "Chờ xác nhận",
  },
  {
    time: "Mai, 09:30",
    candidate: {
      name: "Mai Quốc Bảo",
      initials: "MQ",
      avatarColor: "bg-blue-100 text-blue-700",
    },
    position: "Back-end Developer",
    status: "Đã xác nhận",
  },
  {
    time: "Mai, 11:00",
    candidate: {
      name: "Trần Anh Khoa",
      initials: "TA",
      avatarColor: "bg-teal-100 text-teal-700",
    },
    position: "Data Analyst",
    status: "Đã xác nhận",
  },
  {
    time: "27/06, 15:00",
    candidate: {
      name: "Phạm Ngọc Minh",
      initials: "PN",
      avatarColor: "bg-emerald-100 text-emerald-700",
    },
    position: "QA Engineer",
    status: "Chờ xác nhận",
  },
];

export function UpcomingInterviews() {
  return (
    <div className="rounded-2xl border border-gray-150 bg-white p-6 shadow-2xs hover:shadow-xs transition-all duration-200">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
          <Calendar className="h-4.5 w-4.5 text-gray-500" />
          Lịch phỏng vấn sắp tới
        </h2>
        <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
          Xem lịch đầy đủ
        </button>
      </div>

      {/* Table / List */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="pb-3 font-semibold">Thời gian</th>
              <th className="pb-3 font-semibold">Ứng viên</th>
              <th className="pb-3 font-semibold">Vị trí</th>
              <th className="pb-3 font-semibold">Trạng thái</th>
              <th className="pb-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100/50">
            {interviews.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50/30 transition-colors duration-150 group"
              >
                <td className="py-3 text-xs font-bold text-gray-700">{item.time}</td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    {/* Avatar Initials */}
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
                <td className="py-3 text-xs font-bold text-gray-500">{item.position}</td>
                <td className="py-3">
                  <span
                    className={`inline-flex items-center rounded-lg px-2 py-0.5 text-[10px] font-extrabold leading-none ${
                      item.status === "Đã xác nhận"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-3 text-right">
                  <button className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
