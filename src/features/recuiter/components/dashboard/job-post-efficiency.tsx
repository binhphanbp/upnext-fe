"use client";

import { BarChart3 } from "lucide-react";

interface JobEfficiency {
  title: string;
  views: string;
  cvs: string;
  highMatch: string;
  interviews: string;
  offers: string;
  status: string;
  statusType: "active" | "warning";
}

const jobPosts: JobEfficiency[] = [
  {
    title: "Front-end Developer (React)",
    views: "6,842",
    cvs: "342",
    highMatch: "78",
    interviews: "18",
    offers: "6",
    status: "Đang hiển thị",
    statusType: "active",
  },
  {
    title: "Back-end Developer (Node.js)",
    views: "5,321",
    cvs: "256",
    highMatch: "56",
    interviews: "12",
    offers: "4",
    status: "Đang hiển thị",
    statusType: "active",
  },
  {
    title: "UI/UX Designer (Product)",
    views: "4,126",
    cvs: "198",
    highMatch: "42",
    interviews: "10",
    offers: "3",
    status: "Đang hiển thị",
    statusType: "active",
  },
  {
    title: "Data Analyst (BI)",
    views: "3,210",
    cvs: "156",
    highMatch: "28",
    interviews: "8",
    offers: "2",
    status: "Sắp hết hạn (2 ngày)",
    statusType: "warning",
  },
  {
    title: "DevOps Engineer (AWS)",
    views: "2,654",
    cvs: "98",
    highMatch: "16",
    interviews: "4",
    offers: "1",
    status: "Sắp hết hạn (1 ngày)",
    statusType: "warning",
  },
];

export function JobPostEfficiency() {
  return (
    <div className="rounded-2xl border border-gray-150 bg-white p-6 shadow-2xs hover:shadow-xs transition-all duration-200">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
          <BarChart3 className="h-4.5 w-4.5 text-gray-500" />
          Hiệu quả từng tin tuyển dụng
        </h2>
        <button className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
          Xem tất cả
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              <th className="pb-3 font-semibold">Tin tuyển dụng</th>
              <th className="pb-3 font-semibold text-center">Lượt xem</th>
              <th className="pb-3 font-semibold text-center">CV</th>
              <th className="pb-3 font-semibold text-center">Match cao</th>
              <th className="pb-3 font-semibold text-center">Phỏng vấn</th>
              <th className="pb-3 font-semibold text-center">Offer</th>
              <th className="pb-3 font-semibold">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100/50">
            {jobPosts.map((post, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50/30 transition-colors duration-150 group"
              >
                <td className="py-3 text-xs font-bold text-gray-800 truncate max-w-[180px]">
                  {post.title}
                </td>
                <td className="py-3 text-xs font-bold text-gray-600 text-center">
                  {post.views}
                </td>
                <td className="py-3 text-xs font-bold text-gray-600 text-center">
                  {post.cvs}
                </td>
                <td className="py-3 text-xs font-bold text-gray-600 text-center">
                  {post.highMatch}
                </td>
                <td className="py-3 text-xs font-bold text-gray-600 text-center">
                  {post.interviews}
                </td>
                <td className="py-3 text-xs font-bold text-gray-600 text-center">
                  {post.offers}
                </td>
                <td className="py-3 text-xs font-bold">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                        post.statusType === "active" ? "bg-emerald-500" : "bg-amber-500"
                      }`}
                    ></span>
                    <span
                      className={
                        post.statusType === "active"
                          ? "text-emerald-700"
                          : "text-amber-700"
                      }
                    >
                      {post.status}
                    </span>
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
