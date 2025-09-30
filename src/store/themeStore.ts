import {create} from 'zustand'

interface ThemeStore{
    darkMode:boolean,
    toggleTheme:()=>void
}

export const useThemeStore=create<ThemeStore>((set)=>({
      darkMode: JSON.parse(localStorage.getItem("darkMode") || "false"),
  toggleTheme: () =>
    set((state) => {
      localStorage.setItem("darkMode", JSON.stringify(!state.darkMode));
      return { darkMode: !state.darkMode };
    }),
}))