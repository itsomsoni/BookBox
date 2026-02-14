import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0F172A',
            paper: '#1E293B'
        },
        primary: {
            main: '#8B7CF8'
        },
        secondary: {
            main: '#FF7675'
        }
    },
    typography: {
        fontFamily: `'Inter', sans-serif`,
    }
})