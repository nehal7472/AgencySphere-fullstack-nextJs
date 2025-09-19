import React from "react";
import ServiceCard from "./service-card";
import { getServiceList } from "@/lib/services";

type ServiceCardProps = {
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

export default async function ServiceSection() {
  const ServiceCardDetails: ServiceCardProps[] = await getServiceList();
  return (
    <section className="py-12 px-2 md:px-4  max-w-6xl mx-auto">
      <div className=" mb-10 max-w-96">
        <p className="text-sm font-semibold text-green-600 uppercase">
          Our All Services
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          We Provide BestWeb design services
        </h2>
      </div>
      {/* service card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ServiceCardDetails.map((items) => (
          <div key={items.id}>
            <ServiceCard items={items} />
          </div>
        ))}
      </div>
    </section>
  );
}
