import {
  TalentPoolHeader,
  TalentPoolStats,
  TalentPoolTable,
  NurtureAutomation,
} from "@/features/recuiter/components/talent-pool";

export default function TalentPoolPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <TalentPoolHeader />
      <TalentPoolStats />

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
        <div className="lg:col-span-2">
          <TalentPoolTable />
        </div>
        <div className="lg:col-span-1">
          <NurtureAutomation />
        </div>
      </div>
    </div>
  );
}
