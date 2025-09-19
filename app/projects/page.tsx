import PageHeader from "@/components/page-header";
import ProjectSection from "@/components/projects/project-section";
import React from "react";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="All Projects"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "All Projects" }]}
      />
      <ProjectSection />
    </>
  );
}
