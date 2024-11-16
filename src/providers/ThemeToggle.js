"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoonStar, LuSun } from "react-icons/lu";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme == "dark" ? <LuSun size={18} /> : <LuMoonStar size={18} />}
    </button>
  );
};

export default ThemeToggle;
