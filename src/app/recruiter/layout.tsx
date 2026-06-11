import type { ReactNode } from "react";

import { DashboardShell } from "@/features/recruiter/components/dashboard-shell";

export default function RecruiterLayout({ children }: { children: ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}
