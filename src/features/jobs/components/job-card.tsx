import { MapPin } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Job } from "@/types/job";

export function JobCard({ job }: Readonly<{ job: Job }>) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{job.company.name}</p>
          <h3 className="mt-2 text-lg font-semibold leading-7 text-foreground">
            <Link href={`/jobs/${job.slug}`}>{job.title}</Link>
          </h3>
        </div>
        <span className="rounded-lg bg-surface-subtle px-3 py-2 text-sm font-semibold text-primary">
          IT
        </span>
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted">{job.description}</p>
      <div className="mt-4 flex items-center gap-2 text-sm text-muted">
        <MapPin aria-hidden className="h-4 w-4" />
        <span>{job.location}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills.slice(0, 3).map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-4">
        <p className="text-sm font-semibold text-foreground">{job.salaryRange}</p>
        <Button asChild variant="secondary">
          <Link href={`/jobs/${job.slug}`}>Chi tiết</Link>
        </Button>
      </div>
    </article>
  );
}
