import { PaletteOptions } from '@mui/material/styles';

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: { main: '#27AE60' },
  secondary: { main: '#3498DB' },
  background: { default: '#F5F5F5', paper: '#FFFFFF' },
  text: { primary: '#1B1B1B', secondary: '#4A4A4A' },
};

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: { main: '#2ECC71' },
  secondary: { main: '#3498DB' },
  background: { default: '#121212', paper: '#1E1E1E' },
  text: { primary: '#E0E0E0', secondary: '#A0A0A0' },
};
