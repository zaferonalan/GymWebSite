import { useEffect, useState } from "react";
import { BiSolidSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    else {
      element.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme,element]);

  return (
    <> 
      {
        theme === "dark" ? (
          <BiSolidSun onClick={() => setTheme("light")} className="text-2xl text-white"/>
        ):(
          <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl text-black dark:text-white" />
        )
      }
    </>
  )
}

export default DarkMode




