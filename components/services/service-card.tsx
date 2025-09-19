/* eslint-disable @next/next/no-img-element */
import React from "react";

type Items = {
  id: number;
  tag: string;
  title: string;
  des: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  created_at: string;
  updated_at: string;
};

export default function ServiceCard({ items }: { items: Items }) {
  // Collect only valid images into an array
  const images = [
    items.image1,
    items.image2,
    items.image3,
    items.image4,
  ].filter(Boolean);

  return (
    <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-800 p-6 hover:shadow-xl transition-shadow">
      {/* Tag (optional) */}
      {items.tag && (
        <span className="inline-block text-xs font-medium text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300 px-3 py-1 rounded-full mb-3">
          {items.tag}
        </span>
      )}

      {/* Title & Description */}
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
        {items.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{items.des}</p>

      {/* Image Grid */}
      <div
        className={`grid gap-4 ${
          images.length === 1
            ? "grid-cols-1"
            : images.length === 2
            ? "grid-cols-2"
            : "grid-cols-2 md:grid-cols-3"
        }`}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img!}
            alt={`${items.title} preview ${idx + 1}`}
            className="rounded-lg w-full h-40 object-cover shadow-md hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
}
