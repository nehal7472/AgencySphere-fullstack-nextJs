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
  icon: React.ReactNode;
  title: string;
  des: string;
  link: string;
};
type StatListData = {
  id: number;
  followers: string;
  solved: string;
  customers: string;
  projects: string;
};

const Icons = [
  { id: 1, icon: <Instagram size={30} color="black" /> },
  { id: 2, icon: <Heart size={30} color="black" /> },
  { id: 3, icon: <Badge size={30} color="black" /> },
];

export default async function WorkList() {
  const cardData: CardProps[] = await getWorkList();
  const stats: StatListData = await getStatList();

  return (
    <section className="bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-[490px]">
          <h2 className="text-[20px] text-green-600">WORK LIST</h2>
          <h3 className="text-3xl font-semibold">
            We provide the Perfect Solution to your business growth
          </h3>
        </div>

        {/* work list card */}
        <div className="grid md:grid-cols-3 gap-6">
          {cardData.map((items) => (
            <div
              key={items.id}
              className="bg-white dark:bg-gray-800 px-6 py-8 rounded-xl flex flex-col gap-4 mt-6"
            >
              <div className="w-16 h-16 bg-green-100 text-green-700 flex items-center justify-center rounded-xl">
                {Icons.map((item) => item.id === items.id && item.icon)}
              </div>
              <h3 className="text-xl font-bold">{items.title}</h3>
              <p className="text-gray-600 text-lg">{items.des}</p>
              <a
                href={"#"}
                className="mt-auto text-green-600 font-medium flex items-center gap-1 hover:underline"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* stat list */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 mt-12">
          <StatList
            icon={<Users size={40} />}
            value={stats.followers}
            label="Followers"
          />
          <StatList
            icon={<ThumbsUp size={40} />}
            value={stats.solved}
            label="Solved Problems"
          />
          <StatList
            icon={<Smile size={40} />}
            value={stats.customers}
            label="Happy Customers"
          />
          <StatList
            icon={<Folder size={40} />}
            value={stats.projects}
            label="Projects"
          />
        </div>
      </div>
    </section>
  );
}
