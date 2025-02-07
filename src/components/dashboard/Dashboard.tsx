"use client"
import React from "react";
import Sidebar from "./Sidebar";
import Portfolio from "./portfolio/Portfolio";
import AIAssistant from "./aiassistant/AIAssistant";
import MedicalHistory from "./medicalhistory/MedicalHistory";
import ConsultDoctor from "./consultdoctor/ConsultDoctor";
import { useState } from "react";

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
          default:
            return <Portfolio />;
        }
      };
  return (
    <div className="flex">
     <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      {/* Render the active component beside the sidebar */}
      <div className="flex-1 p-4">{renderComponent()}</div>
    </div>
  );
};

export default Dashboard;
