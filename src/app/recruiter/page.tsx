import {
  DashboardHeader,
  CandidateFlowChart,
  StatsGrid,
  ApplicationsChart,
  TrustScoreCard,
  AIOperationsCard,
} from "@/features/recuiter/components/dashboard";

export default function RecruiterPage() {
  return (
    <div className="min-h-screen bg-white p-4">
      <DashboardHeader />

      {/* Candidate Flow Section */}
      <CandidateFlowChart />
      <StatsGrid />

      {/* Bottom Section - 3 Cards */}
      <div className="mt-6 grid grid-cols-3 gap-6">
        <ApplicationsChart />
        <TrustScoreCard />
        <AIOperationsCard />
      </div>
    </div>
  );
}
