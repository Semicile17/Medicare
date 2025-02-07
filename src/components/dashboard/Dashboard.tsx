"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ConsultDoctor } from "./ConsultDoctor"
import { HealthReports } from "./HealthReports"
import { MedicalHistory } from "./MedicalHistory"
import { Portfolio } from "./Portfolio"
import { MyReports } from "./MyReports"
import { AIMedicalHelp } from "./AIHelp"


export default function Dashboard() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  // Content to display based on selection
  const renderContent = () => {
    switch (selectedItem) {
      case "Portfolio":
        return <Portfolio />
      case "Medical History":
        return <MedicalHistory />
      case "My Reports":
        return <MyReports />
      case "AI Medical Help":
        return <AIMedicalHelp />
      case "Consult a Doctor":
        return <ConsultDoctor />
      case "Health Reports":
        return <HealthReports />
      default:
        return (
          <div className="p-4 text-muted-foreground">
            Select an item from the sidebar to view details.
          </div>
        )
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar onSelect={setSelectedItem} /> {/* Pass handler to sidebar */}
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 md:flex-row">
          <div className="w-full">{renderContent()}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}