/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { Edit2Icon, Share, UserPen } from "lucide-react";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const Portfolio = () => {
  const [exists, setExists] = useState<boolean>(true);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1); // 1: Personal Details, 2: Medical History
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    sex: "",
    age: "",
    weight: "",
    height: "",
    bmi: "",
  });
  const [medicalHistory, setMedicalHistory] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({ ...prev, [name]: value }));

    // Calculate BMI if weight and height are provided
    if (name === "weight" || name === "height") {
      const weight = name === "weight" ? value : personalDetails.weight;
      const height = name === "height" ? value : personalDetails.height;
      if (weight && height) {
        const bmi = (
          (parseFloat(weight) / (parseFloat(height) * parseFloat(height))) *
          10000
        ).toFixed(2);
        setPersonalDetails((prev) => ({ ...prev, bmi }));
      }
    }
  };

  const handleNext = () => {
    // Validate if all fields are filled
    if (
      !personalDetails.name ||
      !personalDetails.sex ||
      !personalDetails.age ||
      !personalDetails.weight ||
      !personalDetails.height
    ) {
      toast({
        title: "Validation Error",
        description: "Please fill all personal details before proceeding.",
        variant: "destructive", // Use destructive variant for errors
      });
      return;
    }
    setStep(2); // Move to the medical history step
  };

  const handleSave = () => {
    // Save the portfolio (you can add your logic here)
    toast({
      title: "Success",
      description: "Portfolio saved successfully!",
    });
    setExists(true);
    setIsDialogOpen(false);
  };

  const handleCloseDialog = () => {
    toast({
      title: "Process Destroyed",
      description: "Details not saved. Your changes were not saved.",
    });
    setIsDialogOpen(false);
    setStep(1); // Reset to the first step
    setPersonalDetails({
      name: "",
      sex: "",
      age: "",
      weight: "",
      height: "",
      bmi: "",
    });
    setMedicalHistory("");
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      {exists ? (
        <div className="p-4 space-y-4 h-full w-full">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="gap-5 items-center hidden md:flex">
                    <h1>Rohit Mahant</h1>
                    <hr className="w-8 rotate-90"/>
                    <h1>Male</h1>
                    <hr className="w-8 rotate-90"/>
                    <h1>20 Years</h1>
                    <hr className="w-8 rotate-90"/>
                    <h1>BMI : 20.4</h1>
                  </div>
                </div>

                <div className="flex gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="rounded-full h-10 w-10">
                          <Edit2Icon/>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Edit Portfolio</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" className="rounded-full h-10 w-10">
                          <Share />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Share Portfolio</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Medical History
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          <div className="items-center gap-2 m-2 flex flex-col">
            <UserPen className="w-10 h-10 text-gray-500" />
            <h1>You don't have a Portfolio yet</h1>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" onClick={() => setIsDialogOpen(true)}>
                Create new Portfolio
              </Button>
            </DialogTrigger>
            <DialogContent onCloseAutoFocus={handleCloseDialog}>
              <DialogHeader>
                <DialogTitle>
                  {step === 1 ? "Personal Details" : "Medical History"}
                </DialogTitle>
                <DialogDescription>
                  {step === 1
                    ? "Please fill in your personal details."
                    : "Add your medical history."}
                </DialogDescription>
              </DialogHeader>

              {step === 1 ? (
                <div className="space-y-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      name="name"
                      value={personalDetails.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label>Sex</Label>
                    <Select
                      value={personalDetails.sex}
                      onValueChange={(value: any) =>
                        setPersonalDetails((prev) => ({ ...prev, sex: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your sex" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Age</Label>
                    <Input
                      name="age"
                      type="number"
                      value={personalDetails.age}
                      onChange={handleInputChange}
                      placeholder="Enter your age"
                    />
                  </div>
                  <div>
                    <Label>Weight (kg)</Label>
                    <Input
                      name="weight"
                      type="number"
                      value={personalDetails.weight}
                      onChange={handleInputChange}
                      placeholder="Enter your weight"
                    />
                  </div>
                  <div>
                    <Label>Height (cm)</Label>
                    <Input
                      name="height"
                      type="number"
                      value={personalDetails.height}
                      onChange={handleInputChange}
                      placeholder="Enter your height"
                    />
                  </div>
                  <div>
                    <Label>BMI</Label>
                    <Input
                      name="bmi"
                      value={personalDetails.bmi}
                      readOnly
                      placeholder="BMI will be calculated automatically"
                    />
                  </div>
                  <Button onClick={handleNext} className="w-full">
                    Next
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <Label>Medical History</Label>
                    <Input
                      value={medicalHistory}
                      onChange={(e) => setMedicalHistory(e.target.value)}
                      placeholder="Enter your medical history"
                    />
                  </div>
                  <Button onClick={handleSave} className="w-full">
                    Save Portfolio
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>

          <p>or</p>
          <Button
            variant="outline"
            onClick={() => {
              setExists(true);
            }}
          >
            Upload Portfolio
          </Button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
