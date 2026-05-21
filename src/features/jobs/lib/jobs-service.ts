import { mockJobs } from "./mock-data";

export async function getFeaturedJobs() {
  return mockJobs.filter((job) => job.status === "published");
}

export async function getJobBySlug(slug: string) {
  return mockJobs.find((job) => job.slug === slug);
}
