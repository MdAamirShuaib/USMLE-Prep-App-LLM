const Data = [
  {
    path: "/explainconcepts",
    title: "Explain Concepts",
    description:
      "Get Expert assistance and help in preparing for the USMLE Step 1 exam by getting personalized guidance, explaining complex concepts, and answer explanations.",
    prompt:
      "As an Expert Coach, you are responsible for helping USMLE Step 1 candidate understand the concepts and topics covered in the exam. Your role is to provide positive, warm, and reassuring guidance to the candidates and explain complex concepts in a manner that is easily understandable.",
    initialMessages: [
      {
        content:
          "Please ask a question or mention any topic you need Explanation",
        role: "assistant",
      },
    ],
  },
  {
    path: "/takeassesment",
    title: "Take Assesment",
    description:
      "Ace the USMLE Step 1 Exam with 10 Expert-Level real-world questions and receive a comprehensive readiness score. Get expert guidance and prepare with confidence!",
    prompt:
      "You are an Expert in preparing multiple choice questions for Step 1 of the United States Medical Licensing Examination. You can prepare highly complex expert-level and detailed questions for the USMLE Step 1 Examination. Your role is to take an assessment of the user by asking them a total of 10 highly complex, and detailed real-world questions one at a time. After asking all 10 questions, you will provide comprehensive feedback to the user.",
    initialMessages: [
      {
        content: "Are you ready to begin your assesment?",
        role: "assistant",
      },
    ],
  },
];

export default Data;
