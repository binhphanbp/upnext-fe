export type JobStatus =
  | "Nháp"
  | "Chờ duyệt"
  | "Đang hoạt động"
  | "Đang đẩy"
  | "Hết hạn"
  | "Cần chỉnh sửa"
  | "Bị từ chối"
  | "Bị ẩn";

export type JobLevel = "Intern" | "Fresher" | "Junior" | "Middle" | "Senior" | "Lead";

export type WorkModel = "Remote" | "Hybrid" | "Onsite";

export type JobType = "Full-time" | "Part-time" | "Internship" | "Contract";

export interface MatchWeights {
  requiredSkills: number;
  preferredSkills: number;
  experience: number;
  salary: number;
  location: number;
  language: number;
  degree: number;
}

export interface JobPost {
  id: string;
  title: string;
  level: JobLevel;
  headcount: number;
  salaryRange: string;
  workModel: WorkModel;
  jobType: JobType;
  location: string;
  deadline: string;
  assignee: string;
  description: string;
  requirements: string;
  benefits: string;
  requiredSkills: string[];
  preferredSkills: string[];
  views: number;
  cvReceived: number;
  highMatchCv: number;
  avgMatchScore: number;
  status: JobStatus;
  weights: MatchWeights;
  boostedUntil?: string;
  rejectionReason?: string;
  needsEditReason?: string;
}
