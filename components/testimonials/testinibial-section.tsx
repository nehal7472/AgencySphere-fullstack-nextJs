import { getTestimonialList } from "@/lib/services";
import React from "react";
import TestimonialCars from "./testimonial-card";

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
  const TestimonialData: TestimonialProps[] = await getTestimonialList();
  return (
    <section className="py-12 px-2 md:px-4  max-w-6xl mx-auto">
      <div className=" mb-10 ">
        <p className="text-sm font-semibold text-green-600 uppercase">
          Our Team Member
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 max-w-96">
          Check our awesome team members
        </h2>
      </div>
      {/* testimonial cards  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {TestimonialData.map((items) => (
          <div key={items.id}>
            <TestimonialCars items={items} />
          </div>
        ))}
      </div>
    </section>
  );
}
