import PageHeader from "@/components/page-header";
import ServiceSection from "@/components/services/service-section";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function ServicePage({}: Props) {
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
