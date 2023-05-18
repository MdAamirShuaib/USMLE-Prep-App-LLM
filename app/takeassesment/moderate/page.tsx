"use client";
import GetSelectedItemData from "@/app/components/GetSelectedItemData";
import { useEffect, useState } from "react";
import SelectedItemHomePage from "@/app/components/SelectedItemHomePage";

export default function ItemHome() {
  const [selectedItem, setSelectedItem] = useState<object>({});
  const [messages, setMessages] = useState<any>([
    {
      content: "Are you ready to begin your assesment?",
      role: "assistant",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const data = await GetSelectedItemData("Take Assesment : Moderate");
      setSelectedItem(data);
    }
    fetchData();
  }, [setSelectedItem]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <SelectedItemHomePage item={selectedItem} initialMessages={messages} />
    </div>
  );
}
