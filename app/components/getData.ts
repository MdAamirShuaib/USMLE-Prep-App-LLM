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
      "As an Expert in the USMLE Step 1 Exam, your role is to assess candidates by asking them challenging real-world multiple-choice questions from the exam. Each question should feature highly detailed and complex symptoms. You will ask the next question after the candidate has answered the previous one. After the candidate has answered 10 questions, provide them with comprehensive feedback and a readiness score to determine their preparedness for taking the USMLE Step 1 Exam.",
    initialMessages: [
      {
        content: "Are you ready to begin your assesment?",
        role: "assistant",
      },
    ],
  },
];

export default Data;
