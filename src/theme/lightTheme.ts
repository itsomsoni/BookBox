import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',

    background: {
      default: '#F7F6F3',   // softer warm white
      paper: '#FFFFFF'
    },

    primary: {
      main: '#2F5D8C'  // muted deep blue
    },

    text: {
      primary: '#2B2B2B',
      secondary: '#6B6B6B'
    },

    divider: '#EAEAEA'
  },

  typography: {
    fontFamily: 'Roboto, sans-serif',

    h4: {
      fontWeight: 500
    },

    button: {
      textTransform: 'none',
      fontWeight: 500
    }
  },

  shape: {
    borderRadius: 12
  }
});