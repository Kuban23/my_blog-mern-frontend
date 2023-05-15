import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  shadows: ['none'],
  palette: {
    primary: {
      main: '#8c12f0',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 400,
    },
  },
});
