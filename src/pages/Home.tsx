import { Button, Typography, Box } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';

import UIContainer from '../components/UIContainer/UIContainer';
import ThemeToggleButton from '../components/ThemeToggleButton/ThemeToggleButton';

const Home = () => {
  return (
    <UIContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          backgroundColor: 'background.default',
          color: 'primary',
        }}
      >
        <Typography variant="h1" gutterBottom sx={{ color: 'primary.main' }}>
          Footprint
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<HomeIcon />}
          sx={{ mt: 2, mb: 2, color: 'white' }}
        >
          Start now!
        </Button>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor iure
          asperiores excepturi odio repellat fuga sunt laboriosam ab! Quo
          officia suscipit itaque excepturi ex soluta fugit perferendis facere
          quia laudantium!
        </Typography>
        <ThemeToggleButton />
      </Box>
    </UIContainer>
  );
};

export default Home;
