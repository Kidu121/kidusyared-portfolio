import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {

  const [dark, setDark] = useState(false);


  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }

  }, []);



  const toggleTheme = () => {

    const html = document.documentElement;

    if (html.classList.contains("dark")) {

      html.classList.remove("dark");

      localStorage.setItem(
        "theme",
        "light"
      );

      setDark(false);


    } else {

      html.classList.add("dark");

      localStorage.setItem(
        "theme",
        "dark"
      );

      setDark(true);

    }

  };



  return (

    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="
        p-2
        rounded-full
        border
        border-gray-300
        dark:border-gray-700
        bg-gray-100
        dark:bg-gray-800
        text-gray-800
        dark:text-white
        hover:scale-110
        transition
      "
    >

      {dark ? (
        <Sun 
          size={20}
          className="text-yellow-400"
        />
      ) : (
        <Moon 
          size={20}
        />
      )}

    </button>

  );
}