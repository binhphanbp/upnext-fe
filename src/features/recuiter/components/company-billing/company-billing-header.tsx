import { ShieldCheck } from "lucide-react";

export function CompanyBillingHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-150 pb-5 mb-6">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
          Nhà tuyển dụng
        </span>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Hồ sơ công ty, điểm uy tín và gói dịch vụ
        </h1>
        <p className="mt-1.5 text-sm text-gray-500">
          Bổ sung xác thực để tăng điểm uy tín, theo dõi gói dịch vụ, tài nguyên và hóa
          đơn.
        </p>
      </div>
      <div className="flex shrink-0 items-center">
        <button className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-primary/10 cursor-pointer border-0">
          <ShieldCheck className="h-4.5 w-4.5" />
          Xác thực công ty
        </button>
      </div>
    </div>
  );
}
