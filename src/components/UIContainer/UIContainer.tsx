import { Box } from '@mui/material';

interface UIContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
  padding?: string;
  textAlign?: 'left' | 'center' | 'right';
}

const UIContainer: React.FC<UIContainerProps> = ({
  children,
  maxWidth = '1280px',
  padding = '2rem',
  textAlign = 'center',
}) => {
  return (
    <Box
      sx={{
        maxWidth,
        margin: '0 auto',
        padding,
        textAlign,
      }}
    >
      {children}
    </Box>
  );
};

export default UIContainer;
