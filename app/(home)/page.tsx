import FeaturedProject from "@/components/home/featured/featured-project";
import HeroSection from "@/components/home/header/hero-section";
import WorkList from "@/components/home/work/work-list";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <WorkList />
      <FeaturedProject />
    </div>
  );
}
