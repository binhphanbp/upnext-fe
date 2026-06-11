"use client";

import React from "react";
import {
  AnalyticsHeader,
  AnalyticsMetrics,
  ApplicationsChart,
  SourcePerformance,
  AiOperations,
} from "@/features/recuiter/components/analytics";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6 p-6 max-w-7xl mx-auto w-full">
      <AnalyticsHeader />
      <AnalyticsMetrics />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        <ApplicationsChart />
        <SourcePerformance />
        <AiOperations />
      </div>
    </div>
  );
}
