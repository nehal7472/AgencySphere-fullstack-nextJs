import PageHeader from "@/components/page-header";
import TeamSection from "@/components/team/team-section";
import React from "react";

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Team"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
      />
      <TeamSection />
    </>
  );
}
