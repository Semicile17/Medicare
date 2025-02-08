import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReportsSection from "./ReportsSection";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import React from "react";
import { ClipboardPlusIcon, Send } from "lucide-react";

interface InputSectionProps {
  mediaUrl: string | null;
  setMediaUrl: (url: string) => void;
  question: string;
  setQuestion: (question: string) => void;
  handleAskQuestion: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  setMediaUrl,
  question,
  setQuestion,
  handleAskQuestion,
}) => {
  return (
    <div className="flex items-center space-x-2 w-full mb-10">
      <Input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="flex-1 p-3 h-10 text-black border bg-white rounded-lg"
      />
      <Button
        onClick={handleAskQuestion}
        className="bg-yellow-200 text-black flex justify-center items-center hover:bg-green-700 h-10 w-10  hover:text-white rounded-full"
      >
        <Send className="h-5 w-5" />
      </Button>
      <ReportsSection />
      <CldUploadWidget
        signatureEndpoint="/api/sign-image"
        onSuccess={(result, { widget }) => {
          if (result.info) {
            setMediaUrl((result.info as CloudinaryUploadWidgetInfo).secure_url);
          }
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <Button
              variant="ghost"
              type="button"
              className="bg-yellow-200 text-black rounded-full h-10 w-10 hover:bg-green-600 hover:text-white"
              onClick={() => open()}
            >
              <ClipboardPlusIcon className="h-5 w-5" />
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default InputSection;
