"use client"
import React from "react";
import Sidebar from "./Sidebar";
import Portfolio from "./portfolio/Portfolio";
import AIAssistant from "./aiassistant/AIAssistant";
import MedicalHistory from "./medicalhistory/MedicalHistory";
import ConsultDoctor from "./consultdoctor/ConsultDoctor";
import { useState } from "react";
import MyReports from "./myreports/MyReports";

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState("Portfolio"); // Default component
    const renderComponent = () => {
        switch (activeComponent) {
          case "Portfolio":
            return <Portfolio />;
          case "AIAssistant":
            return <AIAssistant />;
          case "MedicalHistory":
            return <MedicalHistory />;
          case "ConsultDoctor":
            return <ConsultDoctor />;
          case "MyReports":
              return <MyReports/>;
          default:
            return <Portfolio />;
        }
      };
  return (
    <div className="md:flex h-screen">
     <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      {/* Render the active component beside the sidebar */}
      <div className="w-full p-2 h-full">{renderComponent()}</div>
    </div>
  );
};

export default Dashboard;
