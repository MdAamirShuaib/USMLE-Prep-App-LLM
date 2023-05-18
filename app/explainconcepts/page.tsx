"use client";
import { useEffect, useState } from "react";
import SelectedItemHomePage from "@/app/components/SelectedItemHomePage";

export default function ItemHome() {
  const [selectedItem, setSelectedItem] = useState<object>({
    title: "Explain Concepts",
    description:
      "Get Expert assistance and help in preparing for the USMLE Step 1 exam by getting personalized guidance, explaining complex concepts, and answer explanations.",
    prompt:
      "As an Expert Coach, you are responsible for helping USMLE Step 1 candidate understand the concepts and topics covered in the exam. Your role is to provide positive, warm, and reassuring guidance to the candidates and explain complex concepts in a manner that is easily understandable.",
  });
  const [messages, setMessages] = useState<any>([
    {
      content:
        "Please ask a question or mention any topic you need Explanation",
      role: "assistant",
    },
  ]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-14 px-10 sm:py-20 sm:px-40">
      <SelectedItemHomePage item={selectedItem} initialMessages={messages} />
    </div>
  );
}
