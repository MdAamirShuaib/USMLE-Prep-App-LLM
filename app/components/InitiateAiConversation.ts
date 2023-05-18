import axios from "axios";

export default async function InitiateAiConversation(
  newMessages: any,
  item: any
) {
  const { data } = await axios.post(
    "http://localhost:8000/initiateAIConversation",
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
