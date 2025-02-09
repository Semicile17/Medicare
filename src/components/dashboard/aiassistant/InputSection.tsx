
import { Button } from "@/components/ui/button";
import ReportsSection from "./ReportsSection";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import React from "react";
import { ArrowUp, ClipboardPlusIcon, } from "lucide-react";

interface InputSectionProps {
  loading:boolean
  mediaUrl: string | null;
  setMediaUrl: (url: string) => void;
  question: string;
  setQuestion: (question: string) => void;
  handleAskQuestion: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  loading,
  setMediaUrl,
  question,
  setQuestion,
  handleAskQuestion,
}) => {
  return (
    <div className=" bg-white h-28 rounded-2xl shadow-md p-1 justify-center flex flex-col space-x-2 w-full ">

      <div className="flex">
        
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAskQuestion();
            }
          }}
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex-1 p-3 text-black focus:outline-none focus:ring-0 focus:border-none h-12 border-none shadow-none bg-white rounded-lg"
        />
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2 p-2">
          <ReportsSection />
          <CldUploadWidget
            signatureEndpoint="/api/sign-image"
            onSuccess={(result, { widget }) => {
              if (result.info) {
                setMediaUrl(
                  (result.info as CloudinaryUploadWidgetInfo).secure_url
                );
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
        <div className="p-2">
        <Button
          onClick={handleAskQuestion}
          disabled={loading}
          className="bg-yellow-200 text-black flex justify-center items-center hover:bg-green-700 h-10 w-10  hover:text-white rounded-full"
        >
      
         <ArrowUp className="h-5 w-5" />
         
          
        </Button>
        </div>
       
      </div>
    </div>
  );
};

export default InputSection;
