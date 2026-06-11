import { Building2, Edit2, ShieldCheck, FileText, MapPin, Clock } from "lucide-react";

export function CompanyProfileDetailCard() {
  return (
    <div className="rounded-2xl border border-gray-150 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-900">Hồ sơ công ty</h2>
            <p className="text-xs text-gray-400">Thông tin hành chính doanh nghiệp</p>
          </div>
        </div>
        <button className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer border-0 bg-transparent p-0">
          Chỉnh sửa
          <Edit2 className="h-3.5 w-3.5 ml-0.5" />
        </button>
      </div>

      {/* Info fields list */}
      <div className="space-y-4">
        {/* Giấy phép kinh doanh */}
        <div className="flex items-start gap-3.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
            <ShieldCheck className="h-4.5 w-4.5 text-emerald-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Giấy phép kinh doanh
            </p>
            <div className="mt-1">
              <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-100">
                <ShieldCheck className="h-3 w-3 shrink-0" />
                Đã xác thực
              </span>
            </div>
          </div>
        </div>

        {/* Mã số thuế */}
        <div className="flex items-start gap-3.5 pt-3.5 border-t border-gray-100">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
            <FileText className="h-4.5 w-4.5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Mã số thuế
            </p>
            <p className="text-sm font-bold text-gray-900 mt-1">0318 884 209</p>
          </div>
        </div>

        {/* Địa chỉ */}
        <div className="flex items-start gap-3.5 pt-3.5 border-t border-gray-100">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
            <MapPin className="h-4.5 w-4.5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Địa chỉ
            </p>
            <p className="text-sm font-bold text-gray-900 mt-1 leading-relaxed">
              12 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
            </p>
          </div>
        </div>

        {/* SLA phản hồi */}
        <div className="flex items-start gap-3.5 pt-3.5 border-t border-gray-100">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-400">
            <Clock className="h-4.5 w-4.5 text-amber-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              SLA phản hồi ứng viên
            </p>
            <p className="text-sm font-bold text-gray-900 mt-1">
              88% phản hồi trong vòng 24 giờ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
