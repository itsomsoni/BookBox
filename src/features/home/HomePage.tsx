import { Box, Button, Typography, Container, Stack, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReviewList from "../review/ReviewList";
import FeaturedSection from "../FeaturedSection";

export default function HomePage() {
    const theme = useTheme();

    // Unified Button Style to ensure "Stability"
    const btnStyle = {
        px: 4,
        py: 1.2,
        borderRadius: `${theme.shape.borderRadius}px`,
        textTransform: "none",
        fontWeight: 500,
        transition: "all 0.3s ease",
        "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: theme.palette.mode === 'light'
                ? "0px 8px 20px rgba(47, 93, 140, 0.2)"
                : "0px 8px 20px rgba(0, 0, 0, 0.4)",
        },
    };

    const handleScroll = () => {
        const element = document.getElementById('featured-book');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    };

    return (
        <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
            {/* SECTION 1: ENHANCED HERO */}
            <Box
                sx={{
                    height: "90vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Animated Background Shapes using your Theme Primary */}
                <Box
                    component={motion.div}
                    animate={{ y: [0, -40, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    sx={{
                        position: "absolute",
                        width: { xs: 250, md: 400 },
                        height: { xs: 250, md: 400 },
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`,
                        top: "10%",
                        left: "-5%",
                        zIndex: 0,
                    }}
                />
                <Box
                    component={motion.div}
                    animate={{ y: [0, -40, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    sx={{
                        position: "absolute",
                        width: { xs: 250, md: 400 },
                        height: { xs: 250, md: 400 },
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`,
                        top: "30%",
                        left: "80%",
                        zIndex: 0,
                    }}
                />

                <Container maxWidth="md" sx={{ zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: "2.5rem", md: "4rem" },
                                fontWeight: 600,
                                color: "text.primary",
                                lineHeight: 1.1,
                                mb: 2,
                            }}
                        >
                            Discover books that <br />
                            <Box component="span" sx={{ color: "primary.main" }}>stay with you.</Box>
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{ color: "text.secondary", mb: 4, fontWeight: 400, maxWidth: "600px", mx: "auto" }}
                        >
                            From finance deep-dives to soul-stirring fiction. Thoughtfully curated for the modern reader.
                        </Typography>

                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
                            <Button
                                onClick={handleScroll}
                                variant="contained"
                                size="large"
                                sx={{ ...btnStyle, bgcolor: "primary.main", color: "#fff" }}
                            >
                                Begin Your Journey
                            </Button>
                            <Button
                                component={Link}
                                to="/about"
                                variant="outlined"
                                size="large"
                                sx={{ ...btnStyle, borderColor: "divider", color: "text.primary" }}
                            >
                                Our Story
                            </Button>
                        </Stack>
                    </motion.div>
                </Container>
            </Box>

            {/* SECTION 2: THE INSTAGRAM BRIDGE (Trending Now) */}
            <FeaturedSection></FeaturedSection>
            <ReviewList></ReviewList>
        </Box>
    );
}