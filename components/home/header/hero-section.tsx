import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getHero } from "@/lib/services";
import BrandList from "./brand-list";

type HeroItems = {
  id: number;
  title: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
};

export default async function HeroSection() {
  const res = await getHero();
  const heroData: HeroItems = await res.data;

  return (
    <section className="bg-green-100 dark:bg-gray-900 transition-colors py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 relative z-10">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {heroData.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {heroData.description}
          </p>
          <Button size="lg">Get Started</Button>
        </div>

        {/* Right Images - Staggered Collage */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          {/* Image 1 - Large */}
          <div className="absolute top-0 left-0 w-40 h-56 md:w-48 md:h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={heroData.image1}
              alt="Image 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 - Circle */}
          <div className="absolute top-20 left-32 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md">
            <Image
              src={heroData.image2}
              alt="Image 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 3 - Horizontal */}
          <div className="absolute bottom-0 left-16 w-64 h-40 md:w-80 md:h-48 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={heroData.image3}
              alt="Image 3"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 4 - Vertical */}
          <div className="absolute top-10 right-0 w-32 h-48 md:w-40 md:h-56 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={heroData.image4}
              alt="Image 4"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <BrandList />
      </div>
    </section>
  );
}
