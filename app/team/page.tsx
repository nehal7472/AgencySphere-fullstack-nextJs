import PageHeader from "@/components/page-header";
import TeamSection from "@/components/team/team-section";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function TeamPage({}: Props) {
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
