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
    <section className="py-12 px-2 md:px-4  max-w-6xl mx-auto">
      <div className=" mb-10 max-w-96">
        <p className="text-sm font-semibold text-green-600 uppercase">
          All Project
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Better Agency/SEO Solution At Your Fingertips
        </h2>
      </div>
      {/* project card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ProjectDetails.map((items) => (
          <div key={items.id}>
            <ProjectCard items={items} />
          </div>
        ))}
      </div>
    </section>
  );
}
