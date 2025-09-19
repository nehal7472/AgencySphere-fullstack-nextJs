import { getTestimonialList } from "@/lib/services";
import React from "react";
import TestimonialCard from "./testimonial-card";

type TestimonialProps = {
  id: number;
  name: string;
  image: string;
  designation: string;
  msg: string;
  created_at: string;
  updated_at: string;
};

export default async function TestimonialSection() {
  const testimonialData: TestimonialProps[] = await getTestimonialList();

  return (
    <section className="py-12 px-2 md:px-4 max-w-6xl mx-auto">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold text-green-600 uppercase">
          Testimonial
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">Our Client Say</h2>
      </div>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialData.map((items) => (
          <TestimonialCard key={items.id} items={items} />
        ))}
      </div>
    </section>
  );
}
