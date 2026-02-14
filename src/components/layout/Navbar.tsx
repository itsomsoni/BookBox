import { useState } from "react";
import { 
    AppBar, Toolbar, Typography, Button, Stack, Box, Container, 
    IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme 
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "../common/ThemeToggle";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const location = useLocation();
    const navigate = useNavigate();

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    // Simplified names as requested
    const navLinks = [
        { name: "Collection", path: "/books" }, 
        { name: "About", path: "/about" },
    ];

    const handleNavigation = (link: { name: string, path: string, id?: string }) => {
        if (link.id && location.pathname === "/") {
            const element = document.getElementById(link.id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            navigate(link.path);
        }
        if (isMobile) setMobileOpen(false);
    };

    return (
        <AppBar position="sticky" elevation={0} sx={{ 
            bgcolor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(18, 18, 18, 0.8)', 
            backdropFilter: 'blur(10px)', 
            borderBottom: '1px solid', 
            borderColor: 'divider' 
        }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ height: 70, justifyContent: 'space-between' }}>
                    <Typography variant="h5" component={RouterLink} to="/" sx={{ fontWeight: 900, textDecoration: 'none', color: 'text.primary' }}>
                        BookBox
                    </Typography>

                    <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center">
                        {!isMobile && (
                            <Stack direction="row" spacing={1}>
                                {navLinks.map((link) => (
                                    <Button key={link.name} onClick={() => handleNavigation(link)}
                                        sx={{ px: 2, color: 'text.primary', fontWeight: 600, textTransform: 'none' }}>
                                        {link.name}
                                    </Button>
                                ))}
                            </Stack>
                        )}

                        {/* Theme Toggle integrated into Navbar */}
                        <ThemeToggle />

                        {!isMobile ? (
                            <Button variant="contained" href="https://wa.me/91XXXXXXXXXX" sx={{ borderRadius: '8px', px: 3, fontWeight: 700 }}>
                                Order Now
                            </Button>
                        ) : (
                            <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Stack>
                </Toolbar>
            </Container>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <Box sx={{ p: 3 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
                        <Typography variant="h6" fontWeight={900}>BookBox</Typography>
                        <IconButton onClick={handleDrawerToggle}><CloseIcon /></IconButton>
                    </Stack>
                    <List>
                        {navLinks.map((link) => (
                            <ListItem key={link.name} disablePadding sx={{ mb: 1 }}>
                                <ListItemButton onClick={() => handleNavigation(link)} sx={{ borderRadius: '8px' }}>
                                    <ListItemText primary={link.name} primaryTypographyProps={{ fontWeight: 600 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
}