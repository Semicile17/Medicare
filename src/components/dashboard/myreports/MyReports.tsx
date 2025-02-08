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

  const handleUploadSuccess = (
    result:any ,
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

  return (
    <div className="w-full h-full p-6 md:flex md:flex-wrap grid grid-cols-2 gap-4">
      {folders.map((folder) => (
        <Card key={folder.id} className="md:w-1/6 h-48">
          <CardHeader className="md:p-5 p-3">
            <CardTitle className="text-sm md:text-md">{folder.name}</CardTitle>
            <CardDescription>{folder.images.length} reports</CardDescription>
          </CardHeader>
          <CardContent className="md:flex grid grid-cols-4 justify-center md:gap-1 md:p-1">
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
                  <Button variant="ghost" className="md:h-10 md:w-10 h-6 w-6 text-xs rounded-full">
                    {folder.images.length > 3
                      ? `+${folder.images.length - 3}`
                      : "view"}
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{folder.name}</DialogTitle>
                    <DialogDescription>View your reports</DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-3 gap-2">
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
    </div>
  );
};

export default MyReports;
