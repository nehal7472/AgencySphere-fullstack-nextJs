import PageHeader from "@/components/page-header";
import ServiceSection from "@/components/services/service-section";
import React from "react";

export default function ServicePage() {
  return (
    <>
      <PageHeader
        title="Services"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServiceSection />
    </>
  );
}
