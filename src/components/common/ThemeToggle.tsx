import { IconButton } from "@mui/material";
import { useThemeMode } from "../../app/providers/ThemeProvider"
import { LightMode, DarkMode } from '@mui/icons-material'

export const ThemeToggle = () => {
    const { mode, toggleTheme } = useThemeMode();

    return (
        <IconButton onClick={toggleTheme} color={"inherit"}>
            {mode === 'light' ? <DarkMode /> : <LightMode />}
        </IconButton>
    )
}