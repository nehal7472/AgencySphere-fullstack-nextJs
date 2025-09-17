import { getBrandList } from "@/lib/services";
import Image from "next/image";

type BrandItems = {
  id: number;
  name: string;
  image: string;
};

export default async function BrandList() {
  const brandData: BrandItems[] = await getBrandList();

  if (!brandData?.length) return <div>No brands found</div>;

  return (
    <div className=" bg-white dark:bg-gray-800 flex items-center justify-between px-4 md:px-20 md:py-8 py-2">
      {brandData.map((item) => (
        <div key={item.id}>
          <Image
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            className="object-contain w-[50px]  md:w-[130px]"
          />
        </div>
      ))}
    </div>
  );
}
