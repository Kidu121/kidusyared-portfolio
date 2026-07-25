import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function ThemeToggle() {

  const [dark, setDark] = useState(false);



  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");


    if (savedTheme === "dark") {

      document.documentElement.classList.add("dark");

      setDark(true);


    } else if (savedTheme === "light") {

      document.documentElement.classList.remove("dark");

      setDark(false);


    } else {


      // Detect system theme

      const systemDark =
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;


      if(systemDark){

        document.documentElement.classList.add("dark");

        setDark(true);

      }


    }


  }, []);





  const toggleTheme = () => {


    const html =
      document.documentElement;



    if(html.classList.contains("dark")){


      html.classList.remove("dark");

      localStorage.setItem(
        "theme",
        "light"
      );

      setDark(false);



    }else{


      html.classList.add("dark");

      localStorage.setItem(
        "theme",
        "dark"
      );


      setDark(true);


    }


  };





  return (

    <motion.button

      whileHover={{
        scale:1.1
      }}

      whileTap={{
        scale:0.9
      }}

      onClick={toggleTheme}

      aria-label="Toggle dark mode"

      className="
      w-10
      h-10
      flex
      items-center
      justify-center
      rounded-full
      border
      border-gray-300
      dark:border-gray-700
      bg-gray-100
      dark:bg-gray-800
      text-gray-800
      dark:text-white
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


    </motion.button>

  );

}