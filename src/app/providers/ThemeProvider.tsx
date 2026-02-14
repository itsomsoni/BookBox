import {
    type ReactNode,
    useMemo,
    useState,
    useEffect,
    createContext,
    useContext,
} from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../../theme";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
    mode: ThemeMode;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useThemeMode must be used within AppThemeProvider");
    return context;
};

type Props = {
    children: ReactNode;
};

export const AppThemeProvider = ({ children }: Props) => {
    const [mode, setMode] = useState<ThemeMode>("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme") as ThemeMode | null;
        if (saved)
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setMode(saved);
    }, []);

    const toggleTheme = () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.setItem("theme", newMode);
    };

    const theme = useMemo(
        () => (mode === "light" ? lightTheme : darkTheme),
        [mode]
    );

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};