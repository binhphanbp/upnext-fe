export type UserRole = "candidate" | "recruiter" | "admin";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};
