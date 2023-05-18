export default async function InitiateAiConversation(
  newMessages: any,
  item: any
) {
  const newPrompt = [{ role: "system", content: item.prompt }, ...newMessages];
  const apiRequestBody = {
    model: "gpt-3.5-turbo",
    messages: newPrompt,
    temperature: 0.6,
  };
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_OPENAI_API_URL}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((res) => res.json())
      .then((data) => data.choices[0].message.content);
    return response;
  } catch (error) {
    console.log(error);
    return "No response";
  }
}
