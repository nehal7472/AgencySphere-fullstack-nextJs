import PageHeader from "@/components/page-header";
import ProjectSection from "@/components/projects/project-section";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function ProjectsPage({}: Props) {
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
