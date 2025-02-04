import { useState, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

export const useDarkMode = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [darkMode, setDarkMode] = useState(isDarkMode);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return { darkMode, toggleDarkMode, isDarkMode };
};
