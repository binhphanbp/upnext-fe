import { JobCard } from "@/features/jobs/components/job-card";
import { getFeaturedJobs } from "@/features/jobs/lib/jobs-service";

export const metadata = {
  title: "Việc làm IT",
};

export default async function JobsPage() {
  const jobs = await getFeaturedJobs();

  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Jobs</p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">
          Danh sách việc làm IT
        </h1>
        <p className="mt-3 text-muted">
          Trang này đang dùng dữ liệu mẫu để frontend có thể phát triển độc lập; khi
          backend NestJS sẵn sàng chỉ cần thay service trong feature jobs.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </section>
  );
}
