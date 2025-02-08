/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ClipboardIcon, ClipboardPlusIcon } from "lucide-react";
import {
  CldUploadWidget,
  CldVideoPlayer,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";

declare global {
  interface Window {
    cloudinary: any;
  }
}

const ReportsSection = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);


  return (
    <div className="text-black">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="hover:bg-green-800 rounded-full h-10 w-10 bg-yellow-200 hover:text-white duration-300"
          >
            <ClipboardIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="flex gap-1 items-center">
            <span>My Reports</span>
           
           
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Report 2</DropdownMenuItem>
          <DropdownMenuItem>Report 3</DropdownMenuItem>
          <DropdownMenuItem>Report 4</DropdownMenuItem>
          <DropdownMenuItem>Report 5</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ReportsSection;