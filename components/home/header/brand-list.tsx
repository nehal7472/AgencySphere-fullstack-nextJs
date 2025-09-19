import { getBrandList } from "@/lib/services";
import Image from "next/image";

type BrandItem = {
  id: number;
  name: string;
  image: string;
};

export default async function BrandList() {
  const brandData: BrandItem[] = await getBrandList();

  if (!brandData?.length) {
    return (
      <div className="text-center py-8 text-gray-600 dark:text-gray-300">
        No brands found
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 px-4 md:px-20 md:py-8 py-4">
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {brandData.map((item) => (
          <li key={item.id}>
            <Image
              src={item.image}
              alt={item.name}
              width={130}
              height={100}
              className="object-contain w-[70px] md:w-[130px] mx-auto"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
