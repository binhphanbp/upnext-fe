import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  type LucideIcon,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { JobCard } from "@/features/jobs/components/job-card";
import { getFeaturedJobs } from "@/features/jobs/lib/jobs-service";

const capabilities: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: BriefcaseBusiness,
    title: "Tin tuyển dụng",
    description: "Chuẩn hóa JD, mức lương, kỹ năng và trạng thái duyệt.",
  },
  {
    icon: UsersRound,
    title: "Hồ sơ ứng viên",
    description: "Theo dõi ứng tuyển, CV, lịch phỏng vấn và kết quả.",
  },
  {
    icon: Building2,
    title: "Nhà tuyển dụng",
    description: "Quản lý công ty, team tuyển dụng và hiệu quả chiến dịch.",
  },
];

export default async function HomePage() {
  const jobs = await getFeaturedJobs();

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              IT recruitment platform
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              UpNext giúp ứng viên IT và nhà tuyển dụng đi nhanh hơn từ tìm kiếm đến
              offer.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Nền tảng tập trung cho việc đăng tin, lọc hồ sơ, quản lý ứng tuyển và theo
              dõi pipeline tuyển dụng trong một workflow rõ ràng.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/jobs">
                  Xem việc IT
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/register">Tạo tài khoản</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface-subtle p-4 shadow-sm">
            <div className="rounded-xl bg-surface p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div>
                  <p className="text-sm text-muted">Pipeline hôm nay</p>
                  <p className="text-2xl font-semibold text-foreground">128 ứng viên</p>
                </div>
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
                  +18%
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {[
                  ["Frontend Developer", "34 CV mới", "bg-teal-50"],
                  ["Backend NestJS", "21 CV phù hợp", "bg-orange-50"],
                  ["DevOps Engineer", "12 phỏng vấn", "bg-indigo-50"],
                ].map(([title, value, tone]) => (
                  <div
                    className={`flex items-center justify-between rounded-lg ${tone} p-4`}
                    key={title}
                  >
                    <div>
                      <p className="font-medium text-foreground">{title}</p>
                      <p className="text-sm text-muted">{value}</p>
                    </div>
                    <ArrowRight aria-hidden className="h-4 w-4 text-primary" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map(({ description, icon: Icon, title }) => (
            <div className="rounded-xl border border-border bg-surface p-5" key={title}>
              <Icon aria-hidden className="h-6 w-6 text-primary" />
              <h2 className="mt-4 text-lg font-semibold text-foreground">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Featured jobs
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Việc IT nổi bật
            </h2>
          </div>
          <Link className="text-sm font-medium text-primary hover:underline" href="/jobs">
            Xem tất cả
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {jobs.slice(0, 3).map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>
      </section>
    </>
  );
}
