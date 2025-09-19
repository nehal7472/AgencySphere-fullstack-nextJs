/* eslint-disable @next/next/no-img-element */
import React from "react";

type ProjectItem = {
  id: number;
  title: string;
  image: string;
  remark: string;
  live: string;
  created_at: string;
  updated_at: string;
};

export default function ProjectCard({ items }: { items: ProjectItem }) {
  return (
    <div className="rounded-2xl shadow-md bg-white dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="relative w-full h-48 sm:h-64 overflow-hidden">
        <img
          src={items.image}
          alt={`Preview of ${items.title}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title & Details */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold uppercase text-gray-900 dark:text-white">
          {items.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {items.remark}
        </p>

        {/* Live Button */}
        {items.live && (
          <a
            href={items.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            View Live
          </a>
        )}

        {/* Dates */}
        <p className="mt-3 text-xs text-gray-400">
          Created: {new Date(items.created_at).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
