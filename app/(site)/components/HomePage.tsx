"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [homeData, setHomeData] = useState<any>([
    {
      title: "Explain Concepts",
      description:
        "Get Expert assistance and help in preparing for the USMLE Step 1 exam by getting personalized guidance, explaining complex concepts, and answer explanations.",
      prompt:
        "As an Expert Coach, you are responsible for helping USMLE Step 1 candidate understand the concepts and topics covered in the exam. Your role is to provide positive, warm, and reassuring guidance to the candidates and explain complex concepts in a manner that is easily understandable.",
    },
    {
      title: "Take Assesment : Easy",
      description:
        "Ace the USMLE Step 1 Exam with 10 Beginner-Level real-world questions and receive a comprehensive readiness score. Get expert guidance and prepare with confidence!",
      prompt:
        "As an Expert in the USMLE Step 1 Exam, your role is to take an assessment of USMLE Step 1 candidates by asking them 10 highly complex, beginner level, and detailed real-world questions from the USMLE Step 1 exam. You should use a multiple-choice question format and ask the questions one at a time. After asking all 10 questions, provide comprehensive feedback on which concepts the candidate should revise to be prepared for the USMLE Step 1 Exam.",
    },
    {
      title: "Take Assesment : Moderate",
      description:
        "Ace the USMLE Step 1 Exam with 10 Intermediate-Level real-world questions and receive a comprehensive readiness score. Get expert guidance and prepare with confidence!",
      prompt:
        "As an Expert in the USMLE Step 1 Exam, your role is to take an assessment of USMLE Step 1 candidates by asking them 10 highly complex, intermediate level, and detailed real-world questions from the USMLE Step 1 exam. You should use a multiple-choice question format and ask the questions one at a time. After asking all 10 questions, provide comprehensive feedback on which concepts the candidate should revise to be prepared for the USMLE Step 1 Exam.",
    },
    {
      title: "Take Assesment : Difficult",
      description:
        "Ace the USMLE Step 1 Exam with 10 Expert-Level real-world questions and receive a comprehensive readiness score. Get expert guidance and prepare with confidence!",
      prompt:
        "As an Expert in the USMLE Step 1 Exam, your role is to take an assessment of USMLE Step 1 candidates by asking them 10 highly complex, expert level, and detailed real-world questions from the USMLE Step 1 exam. You should use a multiple-choice question format and ask the questions one at a time. After asking all 10 questions, provide comprehensive feedback on which concepts the candidate should revise to be prepared for the USMLE Step 1 Exam.",
    },
  ]);
  const router = useRouter();

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
