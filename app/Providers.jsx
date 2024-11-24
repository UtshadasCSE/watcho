"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="dark:bg-gray-700 min-h-screen">{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
