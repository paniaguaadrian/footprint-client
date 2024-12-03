import { createContext } from 'react';

interface ThemeModeContextProps {
  toggleColorMode: () => void;
}

export const ThemeModeContext = createContext<ThemeModeContextProps>({
  toggleColorMode: () => {},
});
