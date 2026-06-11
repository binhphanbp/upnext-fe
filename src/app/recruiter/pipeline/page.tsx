"use client";
import {
  PipelineHeader,
  PipelineBoard,
  PipelineLogic,
} from "@/features/recuiter/components/pipeline";

export default function PipelinePage() {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl p-6">
      <PipelineHeader />
      <PipelineBoard />
      <PipelineLogic />
    </div>
  );
}
