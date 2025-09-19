import { getFeaturedProject } from "@/lib/services";
import Image from "next/image";
import React from "react";

type FeaturedProject = {
  id: number;
  title: string;
  image: string;
  live: string;
  remark: string;
  created_at: string;
  updated_at: string;
};

export default async function ProductGrid() {
  const featuredProjects: FeaturedProject[] = await getFeaturedProject();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProjects.slice(0, 5).map((item, index) => (
        <div
          key={item.id}
          className={index === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
        >
          <div className="overflow-hidden rounded-lg">
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={600}
              className={
                index === 0
                  ? "w-full h-full object-cover rounded-lg hover:scale-105 transition-transform"
                  : "w-full aspect-[16/9] object-cover rounded-lg hover:scale-105 transition-transform"
              }
            />
          </div>
          <div className="mt-3 text-sm text-gray-500">{item.created_at}</div>
          <h3 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white">
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
}
