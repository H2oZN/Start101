"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // โหลดธีมเมื่อ component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(initialDark);
    document.documentElement.setAttribute(
      "data-theme",
      initialDark ? "dark" : "light"
    );
  }, []);

  // สลับธีม
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isDark} onChange={toggleTheme} />
      <span className="slider" />
    </label>
  );
}
