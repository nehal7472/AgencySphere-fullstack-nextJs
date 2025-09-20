import { getHero, HeroItem } from "@/services/apiService"; // adjust path

export default async function HeroSection() {
  const heroData: HeroItem[] = await getHero();

  // fallback if no data
  if (!heroData || heroData.length === 0) {
    return (
      <section className="bg-green-100 dark:bg-gray-900 py-12 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          No hero content available.
        </p>
      </section>
    );
  }

  const hero = heroData[0];

  return (
    <section className="bg-green-100 dark:bg-gray-900 transition-colors py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            {hero.title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            {hero.description}
          </p>
          <button className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-600 transition">
            Get Started
          </button>
        </div>

        {/* Right Images */}
        <div className="flex gap-4">
          {hero.image1 && (
            <img
              src={hero.image1}
              alt="Hero image 1"
              className="w-1/3 rounded-xl shadow-lg object-cover"
            />
          )}
          {hero.image2 && (
            <img
              src={hero.image2}
              alt="Hero image 2"
              className="w-1/3 rounded-xl shadow-lg object-cover"
            />
          )}
          {hero.image3 && (
            <img
              src={hero.image3}
              alt="Hero image 3"
              className="w-1/3 rounded-xl shadow-lg object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
