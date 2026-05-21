import { BriefcaseBusiness, CheckCircle2, Clock3, UsersRound } from "lucide-react";

const metrics = [
  ["Tin đang mở", "24", BriefcaseBusiness],
  ["Ứng viên mới", "128", UsersRound],
  ["Chờ phỏng vấn", "17", Clock3],
  ["Đã gửi offer", "6", CheckCircle2],
] as const;

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <section>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Overview
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-foreground">
          Bảng điều khiển tuyển dụng
        </h1>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map(([label, value, Icon]) => (
          <div className="rounded-xl border border-border bg-surface p-5" key={label}>
            <Icon aria-hidden className="h-5 w-5 text-primary" />
            <p className="mt-5 text-sm text-muted">{label}</p>
            <p className="mt-1 text-3xl font-semibold text-foreground">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
