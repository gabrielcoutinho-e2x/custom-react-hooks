import { useEffect } from "react";
import useMediaQuery from "../useMediaQuery/useMediaQuery";
import { useLocalStorage } from "../useStorage/useStorage";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode");
  //if the user already setup the browser to darkMode
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  //if darkMode is null or undefined, use prefersDarkMode
  const enabled = darkMode ?? prefersDarkMode;
  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
}
