/* eslint-disable @next/next/no-img-element */
import React from "react";

type Items = {
  id: number;
  name: string;
  image: string;
  designation: string;
  msg: string;
  created_at: string;
  updated_at: string;
};

export default function TestimonialCard({ items }: { items: Items }) {
  return (
    <div className="rounded-2xl shadow-md bg-white dark:bg-gray-800 p-8 text-center max-w-md mx-auto">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={items.image}
          alt={items.name}
          className="w-24 h-24 rounded-3xl object-cover border-4 border-white dark:border-gray-700 shadow-lg"
        />
      </div>

      {/* Message */}
      <blockquote className="text-gray-600 dark:text-gray-400 text-md mb-4 italic">
        “{items.msg}”
      </blockquote>

      {/* Name & Designation */}
      <h3 className="text-lg font-bold uppercase">{items.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {items.designation}
      </p>
    </div>
  );
}
