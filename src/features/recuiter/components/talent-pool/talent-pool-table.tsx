"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const candidates = [
  {
    id: 1,
    name: "Nguyen Minh Khoa",
    avatar: "bg-blue-500",
    role: "Senior Frontend Engineer",
    experience: "6 years",
    salary: "$7.3k",
    skills: ["React", "TypeScript"],
    match: "96 match",
    status: "Open",
    color: "text-blue-600",
  },
  {
    id: 2,
    name: "Tran Bao Anh",
    avatar: "bg-green-500",
    role: "Backend Engineer",
    experience: "5 years",
    salary: "$2.9k",
    skills: ["Node.js", "#JS"],
    match: "92 match",
    status: "Open",
    color: "text-green-600",
  },
  {
    id: 3,
    name: "Pham Quoc Viet",
    avatar: "bg-purple-500",
    role: "DevOps Engineer",
    experience: "4 years",
    salary: "$2.4k",
    skills: ["K8s", "Terraform"],
    match: "89 match",
    status: "Open",
    color: "text-purple-600",
  },
  {
    id: 4,
    name: "Le Thu Ha",
    avatar: "bg-orange-500",
    role: "QA Automation",
    experience: "3 years",
    salary: "€-7k",
    skills: ["Playwright", "API Test"],
    match: "84 match",
    status: "Open",
    color: "text-orange-600",
  },
  {
    id: 5,
    name: "Do Minh Quan",
    avatar: "bg-red-500",
    role: "Data Engineer",
    experience: "5 years",
    salary: "$7.6k",
    skills: ["Spark", "dbt"],
    match: "87 match",
    status: "Open",
    color: "text-red-600",
  },
  {
    id: 6,
    name: "Mai Thanh Truc",
    avatar: "bg-blue-500",
    role: "AI Projects Engineer",
    experience: "4 years",
    salary: "$3.4k",
    skills: ["Python", "LLM"],
    match: "91 match",
    status: "Open",
    color: "text-blue-600",
  },
  {
    id: 7,
    name: "Hoang Gia Bao",
    avatar: "bg-green-500",
    role: "Mobile Lead",
    experience: "6 years",
    salary: "$2.7k",
    skills: ["React Native", "iOS"],
    match: "78 match",
    status: "Open",
    color: "text-green-600",
  },
  {
    id: 8,
    name: "Nguyen Anh Thu",
    avatar: "bg-purple-500",
    role: "Frontend-admin-Architect",
    experience: "8 years",
    salary: "$2.2k",
    skills: ["React", "Micro-Frontends"],
    match: "94 match",
    status: "Open",
    color: "text-purple-600",
  },
  {
    id: 9,
    name: "Pham Nhat Linh",
    avatar: "bg-orange-500",
    role: "Security Engineer",
    experience: "5 years",
    salary: "$3.1k",
    skills: ["AppSec", "Cloud"],
    match: "81 match",
    status: "Open",
    color: "text-orange-600",
  },
  {
    id: 10,
    name: "Tran Duc Huy",
    avatar: "bg-red-500",
    role: "Go Backend Engineer",
    experience: "5 years",
    salary: "$5.5k",
    skills: ["Go", "Kafka"],
    match: "88 match",
    status: "Open",
    color: "text-red-600",
  },
  {
    id: 11,
    name: "Le Khanh Vy",
    avatar: "bg-blue-500",
    role: "Product Designer",
    experience: "4 years",
    salary: "$2.3k",
    skills: ["UX", "Design System"],
    match: "76 match",
    status: "Open",
    color: "text-blue-600",
  },
  {
    id: 12,
    name: "Vu Tien Dat",
    avatar: "bg-green-500",
    role: "Engineering Manager",
    experience: "8 years",
    salary: "$8.5k",
    skills: ["Leadership", "Agile"],
    match: "82 match",
    status: "Open",
    color: "text-green-600",
  },
];

export function TalentPoolTable() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2 className="text-base font-semibold text-gray-900">Bảng nhóm ứng viên</h2>
          </div>
          <Button variant="ghost" size="md" className="text-purple-600">
            Gắn thẻ hàng loạt
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">
                Ứng viên
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">
                Kỹ năng
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600">
                Phù hợp
              </th>
              <th className="w-32 px-4 py-3 text-right text-xs font-medium text-gray-600"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${candidate.avatar} text-sm font-semibold text-white`}
                    >
                      {candidate.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .substring(0, 2)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{candidate.name}</div>
                      <div className="text-xs text-gray-500">
                        {candidate.role} • {candidate.experience} • {candidate.salary}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    {candidate.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        className="bg-gray-100 text-gray-700 border-gray-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-sm font-medium ${candidate.color}`}>
                    {candidate.match}
                  </span>
                </td>
                <td className="w-32 px-4 py-3 text-right" style={{ minWidth: "120px" }}>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors h-8 px-6 text-xs border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                  >
                    Mở
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
