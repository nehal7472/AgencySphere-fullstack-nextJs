import { getAllProjectList } from "@/lib/services";
import React from "react";
import ProjectCard from "./project-card";

type ProjectListProps = {
  id: number;
  title: string;
  image: string;
  remark: string;
  live: string;
  created_at: string;
  updated_at: string;
};

export default async function ProjectSection() {
  const ProjectDetails: ProjectListProps[] = await getAllProjectList();

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Heading */}
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <p className="text-sm font-semibold text-green-600 uppercase tracking-wide">
          All Projects
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900 dark:text-white">
          Better Agency & SEO Solutions At Your Fingertips
        </h2>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectDetails.map((items) => (
          <ProjectCard key={items.id} items={items} />
        ))}
      </div>
    </section>
  );
}
