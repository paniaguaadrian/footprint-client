import { useContext } from 'react';

import { IconButton, useTheme } from '@mui/material';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

import { ThemeModeContext } from '../../context/theme/ThemeModeContext';

const ThemeToggleButton = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ThemeModeContext);

  return (
    <IconButton
      onClick={toggleColorMode}
      color="primary"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme.palette.mode === 'dark' ? <BedtimeIcon /> : <WbSunnyIcon />}
    </IconButton>
  );
};

export default ThemeToggleButton;
