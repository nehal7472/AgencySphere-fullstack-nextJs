/* eslint-disable @next/next/no-img-element */
import React from "react";

type items = {
  id: number;
  name: string;
  image: string;
  designation: string;
  msg: string;
  created_at: string;
  updated_at: string;
};

export default function TestimonialCars({ items }: { items: items }) {
  return (
    <div className="rounded-2xl shadow-md bg-white dark:bg-gray-800 p-8 text-center">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src={items.image}
          alt={items.name}
          className="w-25 h-25 rounded-3xl object-cover border-4 border-white shadow-lg"
        />
      </div>

      {/* Message */}
      <p className="text-gray-500 text-md mb-4">{items.msg}</p>

      {/* Name */}
      <h3 className="text-xl font-bold uppercase">{items.name}</h3>
      <p className="text-gray-600 text-md">{items.designation}</p>
    </div>
  );
}
