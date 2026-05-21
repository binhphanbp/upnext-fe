export type JobStatus = "draft" | "published" | "closed";

export type EmploymentType = "Full-time" | "Part-time" | "Contract" | "Internship";

export type WorkplaceType = "Remote" | "Hybrid" | "On-site";

export type Job = {
  id: string;
  slug: string;
  title: string;
  description: string;
  salaryRange: string;
  location: string;
  level: string;
  employmentType: EmploymentType;
  workplaceType: WorkplaceType;
  status: JobStatus;
  skills: string[];
  company: {
    id: string;
    name: string;
    logoUrl?: string;
  };
};
