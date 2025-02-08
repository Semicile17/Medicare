import { GoogleGenerativeAI } from "@google/generative-ai";

export const TextOutput = async (question: string) => {
  const apiKey = process.env.NEXT_PUBLIC_AI_API_KEY;
  console.log(apiKey)
  if (!apiKey) {
    throw new Error("API Key is missing");
  }
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "You are a medical assistant.",
  });

  const prompt = question;

  const result = await model.generateContent(prompt);
  return result.response.text();
};
