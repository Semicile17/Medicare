/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { BeatLoader } from "react-spinners";
import React, { useState } from "react";
import { Loader2, MessageCircle } from "lucide-react"; // Import MessageCircle icon
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextOutput } from "./actions";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import InputSection from "./InputSection";
import ChatBar from "./ChatBar";

const AIAssistant = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string ;image?:string}[]>([]);
  const [question, setQuestion] = useState("");
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle asking a question
  const handleAskQuestion = async () => {
    setLoading(true); // Set loading to true when the question is being asked
    if (!question.trim() && !mediaUrl) {
      setLoading(false);
      return;
    }

    setMessages((prev) => [...prev, { sender: "user", text: question, image: mediaUrl || undefined }]);
    setQuestion("");


    try {
      const response = await TextOutput(question, mediaUrl);
      setMessages((prev) => [...prev, { sender: "ai", text: response }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Error processing request." },
      ]);
    } finally {
      setLoading(false); // Set loading to false after the response is processed
    }
  };

  return (
    <div className="w-full h-full flex md:items-center">
      <div className="md:p-6 p-2 h-[600px] bg-transparent rounded-lg flex flex-col md:h-full w-full md:w-4/5 mx-auto">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 mb-4 rounded-lg bg-transparent">
          {/* Show empty state if no messages */}
          {messages.length === 0 && (
            <div className="h-full flex flex-col justify-center items-center text-center text-gray-500">
              <MessageCircle className="h-12 w-12 mb-4 text-gray-400" /> {/* Icon */}
              <p className="text-lg font-medium">Chat your queries away</p>
              <p className="text-sm">or share your report</p>
            </div>
          )}

          {/* Display messages */}
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 my-4 rounded-lg text-xs md:text-sm w-fit max-w-[70%] ${
              msg.sender === "user" ? "bg-green-600 text-white self-end ml-auto" : "bg-yellow-100 text-black"
            }`}>
              {msg.text}
              {msg.image && <img src={msg.image} alt="User Uploaded" className="mt-2 w-32 rounded-lg" />}
            </div>
          ))}

          {/* Show loading spinner when AI is processing the response */}
          {loading && (
            <div className="flex justify-center items-center p-2 my-4 rounded-lg text-xs md:text-sm w-fit max-w-[70%] bg-yellow-100 text-black">
              <BeatLoader size={6} />
            </div>
          )}
        </div>

        {/* Input Section */}
        <InputSection
          loading={loading}
          mediaUrl={mediaUrl}
          setMediaUrl={setMediaUrl}
          question={question}
          setQuestion={setQuestion}
          handleAskQuestion={handleAskQuestion}
        />
      </div>
      <ChatBar />
    </div>
  );
};

export default AIAssistant;