import React from "react";
import ServiceCard from "./service-card";
import { getServiceList } from "@/lib/services";

type ServiceCardProps = {
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

export default async function ServiceSection() {
  const ServiceCardDetails: ServiceCardProps[] = await getServiceList();

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <p className="text-sm font-semibold text-green-600 uppercase">
          Our Services
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900 dark:text-white">
          We Provide Best Web Design Services
        </h2>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ServiceCardDetails.map((items) => (
          <ServiceCard key={items.id} items={items} />
        ))}
      </div>
    </section>
  );
}
