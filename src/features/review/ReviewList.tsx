import { useState, useEffect } from "react";
import { Box, Container, Typography, Stack, useTheme, IconButton } from "@mui/material";
import { FormatQuote, ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { bookReviews } from "../../data/review";
import ReviewCard from "./ReviewCard";

export default function ReviewList() {
    const [index, setIndex] = useState(0);
    const theme = useTheme();

    // Auto-change every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % bookReviews.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setIndex((prev) => (prev + 1) % bookReviews.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + bookReviews.length) % bookReviews.length);

    return (
        <Box sx={{ 
            py: 12, 
            bgcolor: theme.palette.mode === 'light' ? "#F9F8F6" : "background.default", 
            overflow: "hidden",
            position: 'relative'
        }}>
            {/* Background Decorative Quote Icon */}
            <FormatQuote sx={{ 
                position: 'absolute', 
                top: 20, 
                left: '10%', 
                fontSize: 180, 
                color: 'primary.main', 
                opacity: 0.05 
            }} />

            <Container maxWidth="md">
                <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 6 }}>
                    <Box>
                        <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 3 }}>
                            The Reader's Voice
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 600, mt: 1 }}>
                            Community Love
                        </Typography>
                    </Box>
                    
                    {/* Navigation Buttons */}
                    <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton onClick={prevSlide} sx={{ border: `1px solid ${theme.palette.divider}` }}>
                            <ArrowBackIos sx={{ fontSize: 16, ml: 0.5 }} />
                        </IconButton>
                        <IconButton onClick={nextSlide} sx={{ border: `1px solid ${theme.palette.divider}` }}>
                            <ArrowForwardIos sx={{ fontSize: 16 }} />
                        </IconButton>
                    </Stack>
                </Stack>

                <Box sx={{ position: "relative" }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        >
                            {/* We use the ReviewCard but you could also inline a custom layout here */}
                            <Box sx={{ px: { md: 4 } }}>
                                <ReviewCard review={bookReviews[index]} />
                            </Box>
                        </motion.div>
                    </AnimatePresence>
                </Box>

                {/* Modern Progress Indicator */}
                <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700 }}>
                        0{index + 1}
                    </Typography>
                    <Box sx={{ width: 100, height: 2, bgcolor: 'divider', position: 'relative' }}>
                        <motion.div 
                            animate={{ width: `${((index + 1) / bookReviews.length) * 100}%` }}
                            style={{ 
                                height: '100%', 
                                backgroundColor: theme.palette.primary.main, 
                                position: 'absolute' 
                            }} 
                        />
                    </Box>
                    <Typography variant="caption" sx={{ fontFamily: 'monospace', fontWeight: 700 }}>
                        0{bookReviews.length}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}