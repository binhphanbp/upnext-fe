import { ChevronDown, Search } from "lucide-react";

import { filterControls, ListFilter } from "@/features/recruiter/data/job-posts-data";

export function JobFilters() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-[0_14px_36px_rgba(15,23,42,0.05)]">
      <div className="grid gap-3 lg:grid-cols-[178px_repeat(4,minmax(112px,1fr))_110px]">
        <label className="relative block">
          <span className="sr-only">Tìm theo tên vị trí</span>
          <input
            className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-4 pr-10 text-sm font-semibold text-slate-700 outline-none placeholder:text-slate-400 focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
            placeholder="Tìm theo tên vị trí"
            type="search"
          />
          <Search
            aria-hidden
            className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
          />
        </label>

        {filterControls.map((control) => (
          <button
            className="inline-flex h-11 items-center justify-between gap-3 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-4 text-xs font-bold text-slate-500"
            key={control}
          >
            {control}
            <ChevronDown aria-hidden className="h-4 w-4" />
          </button>
        ))}

        <button className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-slate-50 px-3 text-xs font-bold text-slate-700">
          <ListFilter aria-hidden className="h-4 w-4" />
          Xóa bộ lọc
        </button>
      </div>
    </section>
  );
}
