import {
  CandidatesHeader,
  StatsCards,
  RankingTable,
  CVPreview,
} from "@/features/recuiter/components/candidates";

export default function CandidatesPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <CandidatesHeader />
      <StatsCards />

      <div className="grid grid-cols-2 gap-6">
        {/* Left side - Ranking Table */}
        <div>
          <RankingTable />
        </div>

        {/* Right side - CV Preview */}
        <div>
          <CVPreview />
        </div>
      </div>
    </div>
  );
}
