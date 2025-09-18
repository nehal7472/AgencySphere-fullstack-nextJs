import React from "react";
import ProductGrid from "./product-grid";

type Props = {
  children?: React.ReactNode;
};

export default function FeaturedProject({}: Props) {
  return (
    <section className="bg-green-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-[490px]">
          <h2 className="text-[20px] text-green-600">FEATURED PROJECT</h2>
          <h3 className="text-3xl font-semibold">
            We provide the Perfect Solution to your business growth
          </h3>
        </div>
        {/* project grid  */}
        <div className="py-12">
          <ProductGrid />
        </div>
      </div>
    </section>
  );
}
