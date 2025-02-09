import { GoogleGenerativeAI } from "@google/generative-ai";

export const TextOutput = async (question: string, imageUrl?: string | null) => {
  const apiKey = process.env.NEXT_PUBLIC_AI_API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are a medical assistant.",
  });

  try {
    // Prepare the prompt
    const prompt = question;
    let base64Image = "";

    // If there's an image, fetch it and convert it to base64
    if (imageUrl) {
      const response = await fetch(imageUrl);
      const arrayBuffer = await response.arrayBuffer();
      base64Image = Buffer.from(arrayBuffer).toString("base64");
    }
    const result = await model.generateContent([prompt, base64Image]);
    return result.response.text();
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate content. Please try again.");
  }
};
