"use client";

import React, { useState } from "react";
import {
  CompanyBillingHeader,
  TrustScoreDetailCard,
  CompanyProfileDetailCard,
  SubscriptionCard,
  UpgradeModal,
} from "@/features/recuiter/components/company-billing";

export default function CompanyBillingPage() {
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 p-6 max-w-7xl mx-auto w-full">
      <CompanyBillingHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 space-y-6">
          <TrustScoreDetailCard />
          <SubscriptionCard onUpgradeClick={() => setIsUpgradeOpen(true)} />
        </div>
        <div className="lg:col-span-1">
          <CompanyProfileDetailCard />
        </div>
      </div>

      {/* Upgrade Modal */}
      <UpgradeModal isOpen={isUpgradeOpen} onClose={() => setIsUpgradeOpen(false)} />
    </div>
  );
}
