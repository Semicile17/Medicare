"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  BrainCircuit,
  History,
  Stethoscope,
  PanelRightOpen,
  PanelLeftClose,
  Clipboard,
} from "lucide-react";
import Link from "next/link";
import UserNav from "./UserNav";

const Sidebar = ({
  activeComponent,
  setActiveComponent,
}: {
  activeComponent: string;
  setActiveComponent: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden p-4">
        <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
          <PanelRightOpen className="h-6 w-6" />
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform justify-center flex duration-200 ease-in-out z-30`}
      >
        <div className="flex flex-col h-screen p-4 bg-yellow-100 text-black w-64">
          {/* Company Logo and Name */}
          <div className="flex items-center mb-8 justify-between">
            <div className="flex items-center">
              <Stethoscope />
              <span className="ml-2 text-xl font-bold cursor-pointer">
                <Link href="/">MediCare</Link>
              </span>
            </div>
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              <PanelLeftClose className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation Buttons */}
          <nav className="flex flex-col space-y-2">
            {[
              {
                name: "Portfolio",
                icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
              },
              {
                name: "AIAssistant",
                icon: <BrainCircuit className="mr-2 h-4 w-4" />,
              },
              {
                name: "MedicalHistory",
                icon: <History className="mr-2 h-4 w-4" />,
              },
              {
                name: "ConsultDoctor",
                icon: <Stethoscope className="mr-2 h-4 w-4" />,
              },
              {
                name: "MyReports",
                icon: <Clipboard className="mr-2 h-4 w-4" />,
              },
            ].map(({ name, icon }) => (
              <Button
                key={name}
                variant="ghost"
                className={`justify-start ${
                  activeComponent === name
                    ? "bg-green-800 text-white hover:bg-green-800 hover:text-white"
                    : "hover:bg-green-200"
                }`}
                onClick={() => {
                  setIsOpen(false);
                  setActiveComponent(name);
                }}
              >
                {icon}
                {name.replace(/([A-Z])/g, " $1").trim()}{" "}
                {/* Adds spacing to camelCase */}
              </Button>
            ))}
          </nav>
        </div>
        <UserNav />
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
