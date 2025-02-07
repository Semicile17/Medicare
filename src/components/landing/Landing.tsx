"use client";
import { useState } from "react";
import React from "react";
import { Hammer } from "lucide-react";
import { Button } from "../ui/button";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const Landing = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex gap-3 flex-1 flex-col p-3 items-center justify-center h-screen">
      <Hammer size={200} className="" />
      <p className="text-center">Under Construction...</p>
      <div className="flex space-x-3 p-5">
        <RegisterLink
          className="flex-1"
          onClick={() => {
            setLoading(true);
          }}
        >
          <Button className="w-36" variant={"outline"} disabled={loading}>
            Sign up
          </Button>
        </RegisterLink>
        <LoginLink
          className="flex-1"
          onClick={() => {
            setLoading(true);
          }}
        >
          <Button className="w-36" disabled={loading}>
            Login
          </Button>
        </LoginLink>
      </div>
    </div>
  );
};

export default Landing;
