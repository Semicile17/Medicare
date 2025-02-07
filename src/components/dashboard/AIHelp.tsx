"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Paperclip, Send, Loader2 } from "lucide-react";
import { SelectReport } from "./SelectReport";

export function AIMedicalHelp() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I assist you with medical advice today?",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // Simulating AI response delay
    setTimeout(() => {
      setMessages([
        ...newMessages,
        { text: "Processing your query...", sender: "ai" },
      ]);
      setLoading(false);
    }, 2000);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMessages([
        ...messages,
        { text: `📄 Uploaded: ${file.name}`, sender: "user" },
      ]);
    }
  };

  return (
    <div className="w-full h-full flex">
      <div className="flex flex-col h-full md:w-4/5 bg-gray-100 rounded-lg">
        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4  overflow-y-auto">
          <div className="space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[40%]  text-balance w-fit px-4 py-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-300 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Section */}
        <div className="p-4 bg-white shadow-md flex items-center gap-3">
          <Input
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSend} disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : <Send />}
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileUpload}
            accept=".pdf,.jpg,.png,.docx"
          />
        </div>
      </div>
      <div className="p-3">
        {/* Chat Messages */}
          <div className="space-x-4 flex w-full items-center justify-center bg-sidebar-background">
            <SelectReport />
            <Button
              variant="outline"
              onClick={() => fileInputRef.current.click()}
            >
              <Paperclip />
            </Button>
          </div>
      </div>
    </div>
  );
}
