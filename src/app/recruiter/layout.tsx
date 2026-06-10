import { RecruiterHeader, RecruiterSidebar } from "@/features/recuiter/components/layout";

export default function RecruiterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <RecruiterSidebar />
      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <RecruiterHeader />

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-2">{children}</main>
      </div>
    </div>
  );
}
