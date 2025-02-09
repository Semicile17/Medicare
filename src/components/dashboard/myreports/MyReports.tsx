/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import Image from "next/image";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Plus, View } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Folder {
  id: string;
  name: string;
  images: string[];
}

const MyReports = () => {
  const [folders, setFolders] = useState<Folder[]>([
    {
      id: "1",
      name: "Cardiology Reports",
      images: ["/file.svg", "/file.svg", "/file.svg", "/file.svg"],
    },
    {
      id: "2",
      name: "Radiology Reports",
      images: ["/file.svg", "/file.svg"],
    },
  ]);

  const [newFolderName, setNewFolderName] = useState(""); // State for the new folder name

  const handleUploadSuccess = (
    result: any,
    folderId: string,
    widget: { close: () => void }
  ) => {
    if (result.info) {
      const url = (result.info as CloudinaryUploadWidgetInfo).secure_url;
      setFolders((prev) =>
        prev.map((folder) =>
          folder.id === folderId
            ? { ...folder, images: [...folder.images, url] }
            : folder
        )
      );
      widget.close();
    }
  };

  const handleCreateFolder = () => {
    if (newFolderName.trim() === "") {
      alert("Folder name cannot be empty"); // Basic validation
      return;
    }

    const newFolder: Folder = {
      id: String(folders.length + 1), // Generate a simple ID (you might want to use a UUID in production)
      name: newFolderName,
      images: [], // Start with an empty array of images
    };

    setFolders((prev) => [...prev, newFolder]); // Add the new folder to the state
    setNewFolderName(""); // Reset the input field
  };

  return (
    <div className="w-full h-full p-6 md:flex md:gap-4 md:flex-wrap space-y-5">
      {folders.map((folder) => (
        <Card key={folder.id} className="md:w-1/6 h-48 flex flex-col justify-center ">
          <CardHeader className="md:p-5 p-3">
            <CardTitle className="text-sm md:text-md text-wrap">
              {folder.name}
            </CardTitle>
            <CardDescription>{folder.images.length} reports</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center md:gap-1 md:p-1">
            {folder.images.slice(0, 3).map((image, index) => (
              <Image
                key={index}
                src={image}
                width={20}
                height={20}
                alt={`Report ${index + 1}`}
              />
            ))}
            {true && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="md:h-10 md:w-10 h-6 w-6 text-xs bg-green-600 rounded-full"
                  >
                    {folder.images.length > 3
                      ? `+${folder.images.length - 3}`
                      : (folder.images.length==0?'No reports':<View className="h-6 w-6"/>)}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{folder.name}</DialogTitle>
                    <DialogDescription>View your reports</DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-3 ">
                    {folder.images.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        width={100}
                        height={100}
                        alt={`Report ${index + 1}`}
                        className="w-full h-auto"
                      />
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </CardContent>
          <CardFooter>
            <CldUploadWidget
              signatureEndpoint="/api/sign-image"
              onSuccess={(result, { widget }) =>
                handleUploadSuccess(result, folder.id, widget)
              }
            >
              {({ open }) => (
                <Button
                  variant="outline"
                  type="button"
                  className="w-full text-xs text-white"
                  onClick={() => open()}
                >
                  + Add Report
                </Button>
              )}
            </CldUploadWidget>
          </CardFooter>
        </Card>
      ))}

      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="fixed right-6 bottom-6 md:relative md:right-0 md:bottom-0 md:w-1/6 md:h-48 md:rounded-lg md:bg-white md:text-black h-12 w-12 rounded-full bg-green-800"
            variant="ghost"
          >
            <Plus className="h-10 w-10" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Folder</DialogTitle>
            <DialogDescription>Add a new folder</DialogDescription>
          </DialogHeader>
          <Input
            placeholder="Folder Name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)} // Update the state as the user types
          />
          <Button variant="outline" onClick={handleCreateFolder}>
            Create
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyReports;