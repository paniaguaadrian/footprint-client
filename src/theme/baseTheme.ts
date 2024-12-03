import { ThemeOptions } from '@mui/material/styles';

export const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Roboto", "Poppins", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    body1: { fontSize: '1rem', fontWeight: 400 },
    body2: { fontSize: '0.875rem', fontWeight: 400 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          fontFamily: '"Roboto", "Poppins", sans-serif',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
        button: {
          cursor: 'pointer',
          fontFamily: 'inherit',
          border: 'none',
          background: 'none',
        },
      },
    },
  },
};
