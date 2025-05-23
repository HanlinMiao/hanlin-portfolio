"use client";

import React, { useEffect, useState, createContext, useContext } from 'react'

type ThemeContextProviderProps = {
    children: React.ReactNode
};

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}
type Theme = "light" | "dark";

const ThemeContext = createContext<ThemeContextType | null>(null);


export default function ThemeContextProvider({children}:ThemeContextProviderProps) {

    const [theme, setTheme] = useState<Theme>("light");
    const toggleTheme = () => {
        console.log("toggleTheme")
        console.log(theme)
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;
        console.log(localTheme);
        console.log("localtheme")
        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);


  return <ThemeContext.Provider value={{
    theme,
    toggleTheme
  }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }
    return context;
}
