import {
  JobPostsHeader,
  JobEditorPreview,
  JobList,
} from "@/features/recuiter/components/job-posts";

export default function JobPostsPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <JobPostsHeader />

      <div className="grid grid-cols-5 gap-6">
        {/* Left side - Job Editor & Preview */}
        <div className="col-span-2">
          <JobEditorPreview />
        </div>

        {/* Right side - Job List */}
        <div className="col-span-3">
          <JobList />
        </div>
      </div>
    </div>
  );
}
