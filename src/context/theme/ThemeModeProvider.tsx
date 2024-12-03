import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ThemeModeContext } from './ThemeModeContext';

import { baseTheme } from '../../theme/baseTheme';
import { lightPalette, darkPalette } from '../../theme/palette';

export const ThemeModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const LOCAL_STORAGE_KEY = 'themeMode';

  const getInitialMode = (): 'light' | 'dark' => {
    const savedMode = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedMode === 'light' || savedMode === 'dark') {
      return savedMode;
    }

    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return prefersDarkMode ? 'dark' : 'light';
  };

  const [mode, setMode] = useState<'light' | 'dark'>(getInitialMode);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        ...baseTheme,
        palette: mode === 'light' ? lightPalette : darkPalette,
      }),
    [mode]
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
