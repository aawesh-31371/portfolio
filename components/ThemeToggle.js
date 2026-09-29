"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      setDark(false);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;

    setDark(nextDark);

    const theme = nextDark ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.span
        key={dark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {dark ? "☾" : "☀"}
      </motion.span>
    </motion.button>
  );
}