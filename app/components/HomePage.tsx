"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GetHomePageData from "./GetHomePageData";

const HomePage = () => {
  const [homeData, setHomeData] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const data = await GetHomePageData();
      setHomeData(data);
      console.log(data);
    }
    fetchData();
  }, [setHomeData]);

  const handleItemSelect = (item: any) => {
    if (item.title === "Explain Concepts") {
      router.push("/explainconcepts");
    }
    if (item.title === "Take Assesment : Easy") {
      router.push("/takeassesment/easy");
    }
    if (item.title === "Take Assesment : Moderate") {
      router.push("/takeassesment/moderate");
    }
    if (item.title === "Take Assesment : Difficult") {
      router.push("/takeassesment/difficult");
    }
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
              className="flex flex-col px-8 py-4 w-[280px] bg-bgGrey h-full sm:h-[250px] rounded-2xl mx-6 cursor-pointer border border-bgDark hover:border-whiteText hover:scale-105 transition duration-300 mb-10"
              key={item.title}
            >
              <div className="flex flex-col items-center justify-center text-transparent text-2xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">
                {item.title}
              </div>
              <div className="flex mt-3 max-h-2/3 text-whiteText text-sm overflow-clip">
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
