import PageHeader from "@/components/page-header";
import TestimonialSection from "@/components/testimonials/testinibial-section";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function TestimonialsPage({}: Props) {
  return (
    <>
      <PageHeader
        title="Testimonial List"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Testimonial List" },
        ]}
      />
      <TestimonialSection />
    </>
  );
}
