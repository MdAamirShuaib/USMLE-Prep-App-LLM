import axios from "axios";

export default async function InitiateAiConversation(
  newMessages: any,
  item: any
) {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/initiateAIConversation`,
    {
      messages: newMessages,
      itemName: item.title,
      itemDescription: item.description,
      prompt: item.prompt,
    }
  );
  console.log(data);
  return data;
}
