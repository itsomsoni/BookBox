import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#F8F7F4',
            paper: '#FFFFFF'
        },
        primary: {
            main: '#6C5CE7'
        },
        secondary: {
            main: '#FF7675'
        },
        text: {
            primary: '#1F1F1F'
        },
    },
    typography: {
        fontFamily: `'Inter', sans-serif`,
        h4: {
            fontWeight: 700
        }
    }
});