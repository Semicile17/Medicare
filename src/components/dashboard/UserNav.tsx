import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  EllipsisVertical,
  User,
  CreditCard,
  LogOut,
  Settings,
} from "lucide-react";
import { Button } from "../ui/button";

const UserNav = () => {

  return (
    <div className="flex space-x-3 absolute bottom-6 w-[90%] bg-green-800 hover:bg-green-700 duration-300 rounded-lg text-white p-3">
      {/* User Avatar */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* User Info */}
      <div className="flex flex-col items-start">
        <p className="text-md">Shadcn</p>
        <p className="text-xs">semicile17@gmail.com</p>
      </div>

      {/* Popover for Additional Features */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="p-0 hover:bg-transparent">
            <EllipsisVertical className=" hover:text-black rounded-full hover:bg-gray-300" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-2 bg-green-700 text-white border-none">
          {/* My Account */}
          <div className="flex items-center p-2 hover:bg-green-100 hover:text-black rounded-md cursor-pointer">
            <User className="h-4 w-4 mr-2" />
            <span className="text-sm">My Account</span>
          </div>

          {/* Pricing */}
          <div className="flex items-center p-2 hover:bg-green-100  hover:text-black rounded-md cursor-pointer">
            <CreditCard className="h-4 w-4 mr-2" />
            <span className="text-sm">Pricing</span>
          </div>

          {/* Settings */}
          <div className="flex items-center p-2 hover:bg-green-100 hover:text-black rounded-md cursor-pointer">
            <Settings className="h-4 w-4 mr-2" />
            <span className="text-sm">Settings</span>
          </div>

          {/* Logout */}
          <div
            className="flex items-center p-2 hover:bg-green-100 rounded-md hover:text-black cursor-pointer"
          >
            <LogoutLink className="flex">
              <LogOut className="h-4 w-4 mr-2" />
              <span className="text-sm">Logout</span>
            </LogoutLink>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserNav;
