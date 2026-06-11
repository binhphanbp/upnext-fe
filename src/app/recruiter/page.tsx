import {
  DashboardHeader,
  StatsGrid,
  CandidateFlowChart,
  TodoToday,
  UpcomingInterviews,
  TopCandidates,
  JobPostEfficiency,
  ServicePackage,
  StatusAlerts,
} from "@/features/recuiter/components/dashboard";

export default function RecruiterPage() {
  return (
    <div className="flex flex-col gap-6 p-4 sm:p-6 bg-gray-50/50 min-h-screen">
      {/* Page Title & Time Filter Header */}
      <DashboardHeader />

      {/* Row 1: Metrics Overview Cards Grid (col-span-12) */}
      <StatsGrid />

      {/* Row 2: Recruitment Funnel & Urgent Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <CandidateFlowChart />
        </div>
        <div className="lg:col-span-4">
          <TodoToday />
        </div>
      </div>

      {/* Row 3: Upcoming Interviews & Top Match Candidates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingInterviews />
        <TopCandidates />
      </div>

      {/* Row 4: Job Efficiency, Services Package & Status Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6">
          <JobPostEfficiency />
        </div>
        <div className="lg:col-span-3">
          <ServicePackage />
        </div>
        <div className="lg:col-span-3">
          <StatusAlerts />
        </div>
      </div>
    </div>
  );
}
