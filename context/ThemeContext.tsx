import React from 'react';

export const ThemeContext =
  React.createContext<{
    theme: string;
    changeTheme: () => void;
  }>(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState('light');

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};

export default ThemeProvider;
