import React, { useMemo, useState } from 'react';
import { store } from '../..//store/store.ts';
import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { Theme, responsiveFontSizes } from '@mui/material/styles';
import siteConfig from '../../site-config.ts';
import { colorSchemes } from '../../store/features/themeSlice';
import { useAppSelector } from '../../store/hooks';
import { getDesignTokens, getThemedComponents } from './brandingTheme';
import useEnhancedEffect from '@mui/utils/useEnhancedEffect';
import { deepmerge } from '@mui/utils';
import type {} from '@mui/material/themeCssVarsAugmentation';

interface Props {
  children: React.ReactNode;
}
declare global {
  interface Window {
    theme: Theme;
  }
}

function AppThemeProvider({ children }: Props) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode && siteConfig.darkMode ? 'dark' : 'light');

  // Redux State Selected DarkMode default : false
  const { colorScheme } = useAppSelector(state => state.theme);

  // Listen for redux colorscheme changes
  useEnhancedEffect(() => {
    let newMode;
    if (colorScheme === 'system') {
      newMode = prefersDarkMode ? 'dark' : 'light';
    } else {
      newMode = colorScheme;
    }

    if (mode !== newMode && siteConfig.darkMode) {
      setMode(newMode as 'light' | 'dark');
    }
  }, [colorScheme]);

  const changeSystemThemeListener = (e: MediaQueryListEvent) => {
    // Direct access to the store because colorScheme is not updated
    if (store.getState().theme.colorScheme === colorSchemes.system && siteConfig.darkMode) {
      setMode(e.matches ? 'dark' : 'light');
    }
  };

  useEnhancedEffect(() => {
    const darkThemeSystem = window.matchMedia('prefers-color-scheme: dark');
    darkThemeSystem.addEventListener('change', changeSystemThemeListener);
    return () => darkThemeSystem.removeEventListener('change', changeSystemThemeListener);
  }, []);

  const brandingTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const customizedComponents = useMemo(() => getThemedComponents(brandingTheme), [brandingTheme]);

  const theme = responsiveFontSizes(deepmerge(brandingTheme, customizedComponents));

  useEnhancedEffect(() => {
    if (theme.palette.mode === 'dark') {
      document.body.classList.remove('mode-light');
      document.body.classList.add('mode-dark');
    } else {
      document.body.classList.remove('mode-dark');
      document.body.classList.add('mode-light');
    }
  }, [mode]);

  useEnhancedEffect(() => {
    // ad later css over riddes
    document.documentElement.style.setProperty('--theme-primary-color', theme.palette.primary.main);
    document.documentElement.style.setProperty('--theme-secondary-color', theme.palette.secondary.main);
    document.documentElement.style.setProperty('--theme-background-paper', theme.palette.background.paper);

    if (typeof window !== 'undefined') {
      window.theme = theme;
    }
  }, [theme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
