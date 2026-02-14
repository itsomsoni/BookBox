import { IconButton } from "@mui/material";
import { useThemeMode } from "../../app/providers/ThemeProvider"
import { LightMode, DarkMode } from '@mui/icons-material'
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = () => {
    const { mode, toggleTheme } = useThemeMode();

    return (
        <IconButton 
            onClick={toggleTheme} 
            sx={(theme) => ({
                color: theme.palette.text.primary,
                overflow: 'hidden' // Keeps the animation contained
            })}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={mode}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex' }}
                >
                    {mode === 'light' ? <DarkMode /> : <LightMode />}
                </motion.div>
            </AnimatePresence>
        </IconButton>
    )
}