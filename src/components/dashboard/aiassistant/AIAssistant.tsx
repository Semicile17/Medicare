/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ClipboardPlusIcon, Send } from "lucide-react";
import ReportsSection from "./ReportsSection";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import InputSection from "./InputSection";

const AIAssistant = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [question, setQuestion] = useState("");
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  // Handle asking a question
  const handleAskQuestion = async () => {
    if (!question) return;

    // Add user's question to chat
    setMessages((prev) => [...prev, { sender: "user", text: question }]);
    setQuestion("");

    try {
      // const response = await fetch("/api/ask-ai", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ question, file: uploadedFile?.name || null }),
      // });
      // const data = await response.json();
      // setMessages((prev) => [...prev, { sender: "ai", text: data.response }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Error processing request." },
      ]);
    }
  };

  return (
    <div className="w-full h-full flex items-center">
      <div className="p-6 bg-transparent rounded-lg shadow-md flex flex-col lg:h-full w-full md:w-4/5 h-[670px] mx-auto">
        <div className="flex-1 overflow-y-auto p-4 mb-4 rounded-lg bg-transparent">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 my-4 rounded-lg text-xs md:text-sm w-fit max-w-[70%] ${
                msg.sender === "user"
                  ? "bg-green-600 text-white self-end ml-auto"
                  : "bg-yellow-100 text-black"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <InputSection mediaUrl={mediaUrl} setMediaUrl={setMediaUrl} question={question} setQuestion={setQuestion} handleAskQuestion={handleAskQuestion} />
      </div>
      <div className="h-full w-1/5 hidden md:block shadow-md bg-green-100 m-2 p-3 rounded-lg">
        <p className="text-gray-800 text-xs">select a report or upload one</p>
      </div>
    </div>
  );
};

export default AIAssistant;
