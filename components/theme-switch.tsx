"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed text-gray-100 bottom-5 right-5 bg-gray-500 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-zinc-950 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center active:scale-105 hover:scale-[1.2] transition-all dark:bg-slate-100 dark:text-rose-600"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
