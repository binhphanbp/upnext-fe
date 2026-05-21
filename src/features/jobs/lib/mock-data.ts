import type { Job } from "@/types/job";

export const mockJobs: Job[] = [
  {
    id: "job_frontend_001",
    slug: "senior-frontend-engineer-react-nextjs",
    title: "Senior Frontend Engineer - React/Next.js",
    description:
      "Xây dựng giao diện tuyển dụng hiệu năng cao, thiết kế component system và phối hợp với backend NestJS để hoàn thiện workflow ứng tuyển.",
    salaryRange: "$2,000 - $3,500",
    location: "Ho Chi Minh City",
    level: "Senior",
    employmentType: "Full-time",
    workplaceType: "Hybrid",
    status: "published",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    company: {
      id: "company_001",
      name: "TechFlow Labs",
    },
  },
  {
    id: "job_backend_001",
    slug: "backend-engineer-nestjs-prisma",
    title: "Backend Engineer - NestJS/Prisma",
    description:
      "Thiết kế REST API, phân quyền, job matching và luồng quản lý ứng viên với PostgreSQL, Prisma và kiến trúc module rõ ràng.",
    salaryRange: "$1,800 - $3,000",
    location: "Da Nang",
    level: "Middle",
    employmentType: "Full-time",
    workplaceType: "Remote",
    status: "published",
    skills: ["NestJS", "Prisma", "PostgreSQL", "Docker"],
    company: {
      id: "company_002",
      name: "CloudHire",
    },
  },
  {
    id: "job_devops_001",
    slug: "devops-engineer-cloud-ci-cd",
    title: "DevOps Engineer - Cloud CI/CD",
    description:
      "Phụ trách pipeline CI/CD, container runtime, observability và tối ưu quy trình release cho nền tảng tuyển dụng IT.",
    salaryRange: "$2,200 - $4,000",
    location: "Ha Noi",
    level: "Senior",
    employmentType: "Full-time",
    workplaceType: "On-site",
    status: "published",
    skills: ["Docker", "GitHub Actions", "AWS", "Monitoring"],
    company: {
      id: "company_003",
      name: "NextOps",
    },
  },
];
