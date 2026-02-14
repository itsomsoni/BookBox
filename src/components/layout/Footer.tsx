import { Box, Container, Grid, Typography, Link as MuiLink, Stack, IconButton, Divider, useTheme } from "@mui/material";
import { Instagram, WhatsApp, MailOutline, Copyright } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "background.paper",
                color: "text.primary",
                pt: 8,
                pb: 4,
                borderTop: `1px solid ${theme.palette.divider}`,
                mt: 'auto'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-between">

                    {/* Brand Section */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" fontWeight={800} sx={{ letterSpacing: 1, mb: 2 }}>
                            BookBox
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300, lineHeight: 1.7 }}>
                            Thoughtfully curated books for everyday readers. Starting from Instagram, now bringing the library to your screen.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2, textTransform: 'uppercase' }}>
                            Shop
                        </Typography>
                        <Stack spacing={1}>
                            <MuiLink component={Link} to="/books" color="inherit" underline="none" variant="body2">All Books</MuiLink>
                            <MuiLink color="inherit" underline="none" variant="body2">New Arrivals</MuiLink>
                            <MuiLink color="inherit" underline="none" variant="body2">Bestsellers</MuiLink>
                        </Stack>
                    </Grid>

                    {/* Support & Contact */}
                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2, textTransform: 'uppercase' }}>
                            Support
                        </Typography>
                        <Stack spacing={1}>
                            <MuiLink color="inherit" underline="none" variant="body2">Shipping Policy</MuiLink>
                            <MuiLink color="inherit" underline="none" variant="body2">Return Policy</MuiLink>
                            <MuiLink color="inherit" underline="none" variant="body2">FAQs</MuiLink>
                        </Stack>
                    </Grid>

                    {/* Connect Section */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 2, textTransform: 'uppercase' }}>
                            Connect With Us
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                            <IconButton
                                href="https://instagram.com/_bookbox" // Replace with your handle
                                target="_blank"
                                sx={{ bgcolor: 'action.hover', color: 'primary.main' }}
                            >
                                <Instagram fontSize="small" />
                            </IconButton>
                            <IconButton
                                href="https://wa.me/91XXXXXXXXXX"
                                target="_blank"
                                sx={{ bgcolor: 'action.hover', color: '#25D366' }}
                            >
                                <WhatsApp fontSize="small" />
                            </IconButton>
                            <IconButton
                                sx={{ bgcolor: 'action.hover', color: 'text.primary' }}
                            >
                                <MailOutline fontSize="small" />
                            </IconButton>
                        </Stack>
                        <Typography variant="caption" color="text.secondary">
                            Based in Vadodara, Gujarat.
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, opacity: 0.5 }} />

                {/* Bottom Bar */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Copyright sx={{ fontSize: 14, color: 'text.secondary' }} />
                        <Typography variant="caption" color="text.secondary">
                            {new Date().getFullYear()} BookBox. All rights reserved.
                        </Typography>
                    </Stack>
                    <Typography variant="caption" color="text.secondary">
                        Designed for the modern reader.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}