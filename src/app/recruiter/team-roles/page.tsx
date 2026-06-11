"use client";

import React from "react";
import {
  TeamRolesHeader,
  MembersList,
  PermissionsList,
} from "@/features/recuiter/components/team-roles";

export default function TeamRolesPage() {
  return (
    <div className="flex flex-col gap-6 p-6 max-w-7xl mx-auto w-full">
      <TeamRolesHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <MembersList />
        <PermissionsList />
      </div>
    </div>
  );
}
