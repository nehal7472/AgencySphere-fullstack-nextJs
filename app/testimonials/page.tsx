import PageHeader from "@/components/page-header";
import TestimonialSection from "@/components/testimonials/testinibial-section";
import React from "react";

export default function TestimonialsPage() {
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
