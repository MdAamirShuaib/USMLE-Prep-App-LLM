"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Data from "@/app/components/getData";

const HomePage = () => {
  const [homeData, setHomeData] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    setHomeData(Data);
  }, []);

  const handleItemSelect = (item: any) => {
    router.push(item.path);
  };

  return (
    <div className="w-full h-full flex justify-center text-white">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-1">
          United States Medical Licensing Examination : Step 1
        </h1>
        <h3 className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold mb-5">
          Preparation and Practice Assesments
        </h3>
        <div className="flex flex-wrap justify-center mt-10">
          {homeData.map((item: any) => (
            <div
              onClick={() => handleItemSelect(item)}
              className="flex flex-col px-8 py-4 w-[400px] bg-bgGrey h-full rounded-3xl mx-6 cursor-pointer border border-bgDark hover:border-whiteText hover:scale-105 transition duration-300 mb-10"
              key={item.title}
            >
              <div className="flex flex-col items-center justify-center text-transparent text-2xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold mt-1">
                {item.title}
              </div>
              <div className="flex mt-3 max-h-2/3 text-slate-300 text-center text-sm overflow-clip mb-2">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
