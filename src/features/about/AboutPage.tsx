import { Box, Container, Typography, Grid, Divider, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function AboutPage() {
    const theme = useTheme();

    return (
        <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: { xs: 8, md: 12 } }}>
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Chapter 1: The Beginning */}
                    <Box sx={{ textAlign: 'center', mb: 10 }}>
                        <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: 2 }}>
                            Chapter I
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: 600, mt: 2, mb: 4 }}>
                            It started with a single shelf.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'text.secondary' }}>
                            BookBox was born in Ahmedabad out of a simple frustration: the digital world was making it harder to find books that actually mattered. We started on Instagram with a mission to curate, not just collect.
                        </Typography>
                    </Box>

                    {/* Image Break - Use a high-quality "process" photo */}
                    <Box sx={{ 
                        width: '100%', 
                        height: 400, 
                        borderRadius: `${theme.shape.borderRadius}px`, 
                        overflow: 'hidden',
                        mb: 10,
                        border: `1px solid ${theme.palette.divider}`
                    }}>
                        <img 
                            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1200" 
                            alt="BookBox Curation Process" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                    </Box>

                    {/* Chapter 2: The Philosophy */}
                    <Grid container spacing={6} sx={{ mb: 10 }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h4" fontWeight={600} gutterBottom>
                                Our Philosophy
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                We believe every book you own should be a reflection of your journey. That’s why we don't use algorithms. Every "BookBox" is hand-inspected for quality and hand-selected for its impact. 
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h4" fontWeight={600} gutterBottom>
                                The Experience
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                From the moment you order on WhatsApp to the second you unbox your package, we want the experience to be tactile, personal, and premium.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 10 }} />

                    {/* Chapter 3: The Future */}
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: 2 }}>
                            Chapter III
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 600, mt: 2, mb: 3 }}>
                            Growing with our Community
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6 }}>
                            What started as a DM-based service on Instagram has grown into this digital library. Thank you for being part of the BookBox story. We’re just getting started.
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}