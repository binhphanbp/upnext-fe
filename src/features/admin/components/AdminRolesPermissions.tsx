"use client";

import {
  Users,
  Lock,
  ShieldCheck,
  CheckCircle2,
  Plus,
  MoreVertical,
  Search,
} from "lucide-react";
import { useState } from "react";

// --- DỮ LIỆU MOCK ---
const roles = [
  {
    name: "Super Admin",
    desc: "Toàn quyền trên hệ thống",
    count: 2,
    color: "bg-blue-500",
  },
  {
    name: "Admin SEO",
    desc: "Quản lý SEO, blog, landing page",
    count: 4,
    color: "bg-teal-500",
  },
  {
    name: "Admin Sales",
    desc: "Quản lý Lead, deal, hóa đơn",
    count: 6,
    color: "bg-indigo-500",
  },
  {
    name: "Admin Kiểm duyệt",
    desc: "Duyệt tin đăng, xử lý khiếu nại",
    count: 5,
    color: "bg-amber-500",
  },
  {
    name: "Admin Support",
    desc: "Hỗ trợ ticket, tài khoản",
    count: 7,
    color: "bg-rose-500",
  },
];

const permissionGroups = [
  {
    title: "Người dùng",
    perms: [
      { id: "user.read", label: "Xem người dùng", granted: true },
      { id: "user.edit", label: "Sửa người dùng", granted: true },
      { id: "user.lock", label: "Khóa tài khoản", granted: true },
    ],
  },
  {
    title: "Nhà tuyển dụng",
    perms: [
      { id: "employer.verify", label: "Xác thực NTD", granted: true },
      { id: "employer.lock", label: "Khóa NTD", granted: false },
      { id: "billing.refund", label: "Hoàn tiền", granted: false },
    ],
  },
  {
    title: "Nội dung",
    perms: [
      { id: "post.moderate", label: "Duyệt bài", granted: true },
      { id: "seo.edit", label: "Chỉnh sửa SEO", granted: false },
      { id: "blog.publish", label: "Đăng Blog", granted: false },
    ],
  },
  {
    title: "Hệ thống",
    perms: [
      { id: "role.create", label: "Tạo Role", granted: false },
      { id: "audit.read", label: "Xem Audit log", granted: true },
      { id: "ai.configure", label: "Cấu hình AI", granted: false },
    ],
  },
];

const governanceRules = [
  "Quyền tạo vai trò (role.create) bắt buộc Super Admin phê duyệt",
  "Mọi thay đổi quyền đều được lưu trữ vĩnh viễn trong Audit log",
  "Tính năng hoàn tiền tài chính cần 2 người có thẩm quyền phê duyệt chéo",
];

export function AdminRolesPermissions() {
  const [activeRole, setActiveRole] = useState(roles[0]);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Vai trò & Phân quyền</h2>
          <p className="text-sm text-slate-500 mt-1">
            Quản lý các nhóm quyền truy cập và chức năng của quản trị viên.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <Plus size={16} /> Thêm vai trò mới
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* CỘT TRÁI: DANH SÁCH ROLE & QUY TẮC */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          <div className="bg-white rounded-xl border border-slate-200 flex flex-col">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50 rounded-t-xl">
              <div className="flex items-center gap-2 font-semibold text-slate-800">
                <Users size={18} className="text-slate-500" />
                <span>Danh sách vai trò</span>
              </div>
            </div>

            <div className="p-4">
              <div className="relative mb-4">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Tìm vai trò..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                {roles.map((role) => (
                  <button
                    key={role.name}
                    onClick={() => setActiveRole(role)}
                    className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all border ${
                      activeRole.name === role.name
                        ? "bg-teal-50 border-teal-200 shadow-sm"
                        : "bg-white border-transparent hover:bg-slate-50 hover:border-slate-200"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${role.color}`}
                    >
                      {role.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <strong
                          className={`text-sm truncate ${activeRole.name === role.name ? "text-teal-900" : "text-slate-800"}`}
                        >
                          {role.name}
                        </strong>
                        <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-xs font-medium shrink-0">
                          {role.count}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate">{role.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* QUY TẮC QUẢN TRỊ */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex items-center gap-2 bg-slate-50/50">
              <ShieldCheck size={18} className="text-slate-500" />
              <span className="font-semibold text-slate-800">Quy tắc bảo mật chung</span>
            </div>
            <div className="p-5 space-y-4 bg-slate-50">
              {governanceRules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-600 leading-relaxed">{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: CHI TIẾT PHÂN QUYỀN */}
        <div className="xl:col-span-8">
          <div className="bg-white rounded-xl border border-slate-200 h-full flex flex-col">
            <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl ${activeRole.color}`}
                >
                  {activeRole.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-xl">{activeRole.name}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">{activeRole.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-slate-500 hover:text-slate-800 p-2 hover:bg-slate-100 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                  <MoreVertical size={18} />
                </button>
                <button className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
                  Lưu thay đổi
                </button>
              </div>
            </div>

            <div className="p-6 flex-1 bg-slate-50/50">
              <div className="flex items-center gap-2 mb-6">
                <Lock size={18} className="text-slate-500" />
                <h4 className="font-semibold text-slate-800 text-lg">
                  Ma trận phân quyền chi tiết
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {permissionGroups.map((group) => (
                  <div
                    key={group.title}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
                  >
                    <div className="bg-slate-100/80 px-5 py-3 border-b border-slate-200">
                      <strong className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                        {group.title}
                      </strong>
                    </div>
                    <div className="p-3">
                      {group.perms.map((p) => (
                        <div
                          key={p.id}
                          className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors group"
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-slate-800 group-hover:text-teal-700 transition-colors">
                              {p.label}
                            </span>
                            <span className="text-xs text-slate-400 font-mono mt-1">
                              {p.id}
                            </span>
                          </div>

                          {/* Modern Toggle Switch */}
                          <button
                            className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${p.granted ? "bg-teal-500" : "bg-slate-200"}`}
                            role="switch"
                            aria-checked={p.granted}
                          >
                            <span
                              className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${p.granted ? "translate-x-5" : "translate-x-0"}`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
