"use client";
import {
  InterviewsHeader,
  ScheduleList,
  FeedbackRubric,
} from "@/features/recuiter/components/interviews";

export default function InterviewsPage() {
  return (
    <div className="flex flex-col gap-6 p-6 max-w-7xl mx-auto w-full">
      <InterviewsHeader />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        <div className="lg:col-span-3">
          <ScheduleList />
        </div>
        <div className="lg:col-span-2">
          <FeedbackRubric />
        </div>
      </div>
    </div>
  );
}
