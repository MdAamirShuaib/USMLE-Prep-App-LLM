"use client";
import { useEffect, useState } from "react";
import SelectedItemHomePage from "@/app/components/SelectedItemHomePage";
import Data from "@/app/components/getData";
import { usePathname } from "next/navigation";

export default function ItemHome() {
  const [messages, setMessages] = useState<any>(null);
  const [selectedItem, setSelectedItem] = useState<object>({});

  const currentPath = usePathname();

  useEffect(() => {
    const data = Data;
    const setected = data.filter((item: any) => {
      return item.path === currentPath;
    });
    setSelectedItem(setected[0]);
    setMessages(setected[0].initialMessages);
  }, [messages, selectedItem]);

  return (
    <div className="bg-gradient-to-tr from-gray-900 from-10%  to-black flex min-h-screen flex-col items-center justify-between py-14 px-10 sm:py-20 sm:px-40">
      {messages && selectedItem && (
        <SelectedItemHomePage item={selectedItem} initialMessages={messages} />
      )}
    </div>
  );
}
