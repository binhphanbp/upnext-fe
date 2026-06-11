import type { ReactNode } from "react";

import { RecruiterSidebar } from "./recruiter-sidebar";
import { RecruiterTopbar } from "./recruiter-topbar";

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)]">
        <RecruiterSidebar />
        <div className="min-w-0 border-l border-slate-200/80">
          <RecruiterTopbar />
          <main className="px-4 py-7 sm:px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
