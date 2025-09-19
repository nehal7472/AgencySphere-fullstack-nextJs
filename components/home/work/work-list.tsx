import { getStatList, getWorkList } from "@/lib/services";
import {
  ArrowRight,
  Badge,
  Heart,
  Instagram,
  Users,
  ThumbsUp,
  Smile,
  Folder,
} from "lucide-react";
import React from "react";
import StatList from "./stat-list";

type CardProps = {
  id: number;
  title: string;
  des: string;
  link: string;
};

type StatListData = {
  followers: string | number;
  solved: string | number;
  customers: string | number;
  projects: string | number;
};

// icon mapping instead of map inside render
const IconMap: Record<number, React.ReactNode> = {
  1: <Instagram size={30} color="black" />,
  2: <Heart size={30} color="black" />,
  3: <Badge size={30} color="black" />,
};

export default async function WorkList() {
  const cardData: CardProps[] = await getWorkList();
  const stats: StatListData = await getStatList();

  return (
    <section className="bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="max-w-[490px]">
          <h2 className="text-[20px] text-green-600">WORK LIST</h2>
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
            We provide the Perfect Solution to your business growth
          </h3>
        </div>

        {/* Work Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 px-6 py-8 rounded-xl flex flex-col gap-4 shadow hover:shadow-lg transition"
            >
              <div
                className="w-16 h-16 bg-green-100 text-green-700 flex items-center justify-center rounded-xl"
                aria-hidden="true"
              >
                {IconMap[item.id]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {item.des}
              </p>
              <a
                href={item.link || "#"}
                className="mt-auto text-green-600 font-medium flex items-center gap-1 hover:underline"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 mt-12">
          <StatList icon={<Users size={40} />} value={stats.followers} label="Followers" />
          <StatList icon={<ThumbsUp size={40} />} value={stats.solved} label="Solved Problems" />
          <StatList icon={<Smile size={40} />} value={stats.customers} label="Happy Customers" />
          <StatList icon={<Folder size={40} />} value={stats.projects} label="Projects" />
        </div>
      </div>
    </section>
  );
}
