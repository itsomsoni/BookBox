import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#121212",      // calm neutral dark
      paper: "#1C1C1C"
    },

    primary: {
      main: "#4C7CA8"          // muted blue adapted for dark
    },

    text: {
      primary: "#E6E6E6",
      secondary: "#A8A8A8"
    },

    divider: "#2A2A2A"
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 500
    }
  },

  shape: {
    borderRadius: 12
  }
});