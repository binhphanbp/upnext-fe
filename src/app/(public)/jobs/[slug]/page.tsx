import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getJobBySlug } from "@/features/jobs/lib/jobs-service";

export default async function JobDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm text-muted">{job.company.name}</p>
            <h1 className="mt-2 text-3xl font-semibold text-foreground">{job.title}</h1>
            <p className="mt-3 text-muted">
              {job.location} · {job.workplaceType} · {job.salaryRange}
            </p>
          </div>
          <Button size="lg">Ứng tuyển</Button>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
        <article className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-xl font-semibold text-foreground">Mô tả công việc</h2>
          <p className="mt-4 leading-7 text-muted">{job.description}</p>
        </article>
        <aside className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg font-semibold text-foreground">Thông tin nhanh</h2>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="text-muted">Cấp bậc</dt>
              <dd className="mt-1 font-medium text-foreground">{job.level}</dd>
            </div>
            <div>
              <dt className="text-muted">Loại hợp đồng</dt>
              <dd className="mt-1 font-medium text-foreground">{job.employmentType}</dd>
            </div>
            <div>
              <dt className="text-muted">Trạng thái</dt>
              <dd className="mt-1 font-medium text-foreground">{job.status}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
