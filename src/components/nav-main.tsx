"use client"

import { Folder, FileText, ClipboardCheck } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({ onSelect }) {
  const items = [
    { title: "Portfolio", icon: Folder },
    { title: "Medical History", icon: FileText },
    { title: "My Reports", icon: ClipboardCheck },
  ]

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              onClick={() => onSelect(item.title)}
            >
              <button className="flex items-center gap-2 w-full">
                <item.icon className="size-5" />
                <span>{item.title}</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
