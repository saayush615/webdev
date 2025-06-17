import { createContext, useState } from 'react';

// 1. Create a context
export const ThemeContext = createContext();

// 2. Create a provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // default is light theme

  // 3. Toggle function to switch themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 4. Provide the theme and toggle function to the context
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}