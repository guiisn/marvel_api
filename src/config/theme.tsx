import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#e23636',
      light: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;