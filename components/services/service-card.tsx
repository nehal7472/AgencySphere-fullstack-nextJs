/* eslint-disable @next/next/no-img-element */
import React from "react";

type Items = {
  id: number;
  tag: string;
  title: string;
  des: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  created_at: string;
  updated_at: string;
};

export default function ServiceCard({ items }: { items: Items }) {
  return (
    <div className="rounded-2xl shadow-md bg-white dark:bg-gray-800 p-6">
      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{items.title}</h2>
      <p className="text-gray-500 mb-4">{items.des}</p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src={items.image1}
          alt={`${items.title} preview 1`}
          className="rounded-lg w-full object-cover shadow-xl"
        />
        <img
          src={items.image2}
          alt={`${items.title} preview 2`}
          className="rounded-lg w-full object-cover shadow-xl"
        />
        <img
          src={items.image3}
          alt={`${items.title} preview 3`}
          className="rounded-lg w-full object-cover shadow-xl"
        />
        <img
          src={items.image4}
          alt={`${items.title} preview 4`}
          className="rounded-lg w-full object-cover shadow-xl"
        />
      </div>
    </div>
  );
}
