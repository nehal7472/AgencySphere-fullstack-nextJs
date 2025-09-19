/* eslint-disable @next/next/no-img-element */
import React from "react";

type items = {
  id: number;
  title: string;
  image: string;
  remark: string;
  live: string;
  created_at: string;
  updated_at: string;
};

export default function ProjectCard({ items }: { items: items }) {
  return (
    <div className="rounded-2xl shadow-md bg-white dark:bg-gray-800 overflow-hidden p-8">
      {/* Image */}
      <img
        src={items.image}
        alt={items.title}
        className="w-full h-full object-cover rounded-2xl"
      />

      {/* Title */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold uppercase">{items.title}</h3>
      </div>
    </div>
  );
}
