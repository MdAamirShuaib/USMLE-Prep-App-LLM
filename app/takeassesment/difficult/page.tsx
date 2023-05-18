"use client";
import { useState } from "react";
import SelectedItemHomePage from "@/app/components/SelectedItemHomePage";

export default function ItemHome() {
  const [selectedItem, setSelectedItem] = useState<any>({
    title: "Take Assesment : Difficult",
    description:
      "Ace the USMLE Step 1 Exam with 10 Expert-Level real-world questions and receive a comprehensive readiness score. Get expert guidance and prepare with confidence!",
    prompt:
      "As an Expert in the USMLE Step 1 Exam, your role is to take an assessment of USMLE Step 1 candidates by asking them 10 highly complex, expert level, and detailed real-world questions from the USMLE Step 1 exam. You should use a multiple-choice question format and strictly ask one question at a time. After asking all 10 questions, provide comprehensive feedback on which concepts the candidate should revise to be prepared for the USMLE Step 1 Exam.",
  });
  const [messages, setMessages] = useState<any>([
    {
      content: "Are you ready to begin your assesment?",
      role: "assistant",
    },
  ]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-14 px-10 sm:py-20 sm:px-40">
      <SelectedItemHomePage item={selectedItem} initialMessages={messages} />
    </div>
  );
}
