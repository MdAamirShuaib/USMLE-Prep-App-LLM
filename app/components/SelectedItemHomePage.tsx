"use client";
import React from "react";
import { useCallback, useState } from "react";
import { Bars } from "react-loader-spinner";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InitiateAiConversation from "./InitiateAiConversation";
import { useRouter } from "next/navigation";

interface SelectedItemHomePageProps {
  item: any;
  initialMessages?: any;
}

const SelectedItemHomePage: React.FC<SelectedItemHomePageProps> = ({
  item,
  initialMessages,
}) => {
  const [messages, setMessages] = useState<any>(initialMessages);

  const [userResponse, setUserResponse] = useState("");

  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();

  const handleExit = () => {
    router.push("/");
  };

  const handleSubmitText = async (e: any) => {
    e.preventDefault();
    const newMessages: any = [
      ...messages,
      { content: userResponse, role: "user" },
    ];
    setMessages(newMessages);
    setUserResponse("");
    setisLoading(true);
    const data = await InitiateAiConversation(newMessages, item);
    setMessages([...newMessages, { content: data, role: "assistant" }]);
    setisLoading(false);
  };

  const handleTextChange = (e: any) => {
    setUserResponse(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-full">
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl font-bold font-sans text-lightBlueText">
          {item.title}
          <button
            className="hover:scale-[1.03] mx-4 px-1 rounded-sm active:scale-[.99] text-sm text-red-500"
            onClick={handleExit}
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </button>
        </div>
        <div className="mt-3 w-10/12 sm:w-4/5 text-whiteText text-justify sm:text-center">
          {item.description}
        </div>
      </div>
      <div className="flex flex-col mt-8 w-11/12 sm:w-4/5">
        {messages.map((message: any, index: number) =>
          message.role === "assistant" ? (
            <div
              key={index}
              className="ml-4 py-2 text-lightBlueText text-justify font-medium text-md"
            >
              <p>
                {message.content
                  .split("\n")
                  .map((line: string, lineIndex: number) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            </div>
          ) : (
            <div
              key={message.content}
              className="flex items-center mb-3 bg-bgGrey rounded-xl px-6 pt-2 pb-3 text-whiteText text-justify font-semibold"
            >
              {message.content
                .split("\n")
                .map((line: string, lineIndex: number) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </div>
          )
        )}

        <form onSubmit={handleSubmitText}>
          <div style={{ position: "relative" }}>
            <textarea
              className={`w-full h-[100px] p-4 rounded-xl bg-bgGrey text-whiteText ${
                isLoading ? "opacity-50" : ""
              }`}
              placeholder="Insert your response"
              name="textBox"
              value={userResponse}
              required
              onChange={handleTextChange}
              disabled={isLoading}
            />
            <div className="flex justify-between mx-2 mt-2">
              <button
                className="flex items-center justify-center active:scale-[.98] hover:scale-[1.01]  py-2 px-3 sm:px-4 bg-btnGreen text-bgDark font-semibold rounded-xl"
                disabled={isLoading}
                type="submit"
              >
                Submit Answer
                <div className="">
                  <Bars
                    height="20"
                    width="30"
                    color="#0a0c10"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={isLoading}
                  />
                </div>
              </button>
              <button
                disabled={isLoading}
                type="submit"
                style={{ display: "none" }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelectedItemHomePage;
