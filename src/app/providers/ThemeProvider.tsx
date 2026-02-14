import { useEffect, useMemo, useState, type ReactNode } from "react"
import { darkTheme, lightTheme } from "../../theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

type Props = {
    children: ReactNode;
}

export const AppThemeProvider = ({ children }: Props) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === 'dark')
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setMode('dark');
    });

    const toggleTheme = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem('theme', newMode);
    }

    const theme = useMemo(() =>
        (mode === 'light' ? lightTheme : darkTheme), [mode])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}