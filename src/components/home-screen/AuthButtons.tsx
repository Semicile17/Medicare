"use client";
import React from "react";
import { Button } from "../ui/button";
import { useState } from "react";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

const AuthButtons = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex w-full items-center gap-6">
      <RegisterLink
        onClick={() => {
          setLoading(true);
        }}
      >
        <Button
          variant={"outline"}
          disabled={loading}
          className="px-8 py-4 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
        >
          Create Portfolio
        </Button>
      </RegisterLink>
    </div>
  );
};

export default AuthButtons;
