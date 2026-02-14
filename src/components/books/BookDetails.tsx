import { useParams, Link } from "react-router-dom";
import { Box, Container, Grid, Typography, Button, Stack, Chip, useTheme } from "@mui/material";
import { WhatsApp as WhatsAppIcon, ArrowBackIosNew as ArrowBackIcon } from '@mui/icons-material';
import { books } from "../../data/books";
import { currencyINR } from "../../lib/util";

export default function BookDetail() {
    const { id } = useParams();
    const theme = useTheme();

    // Finding book using bookId as defined in your static data
    const book = books.find(b => b.bookId === Number(id));

    if (!book) return <Typography sx={{ p: 5 }}>Book not found</Typography>;

    const waLink = `https://wa.me/91XXXXXXXXXX?text=Hi! I'm interested in ordering "${book.title}" from BookBox.`;

    return (
        <Container maxWidth="xl" sx={{ py: { xs: 1, md: 5 } }}>
            {/* Back Button */}
            <Button
                startIcon={<ArrowBackIcon sx={{ fontSize: '14px !important' }} />}
                component={Link} to="/books"
                sx={{ mb: 4, color: 'text.secondary', textTransform: 'none' }}
            >
                Back to Collection
            </Button>

            <Grid container spacing={{ xs: 4, md: 10 }} alignItems="flex-start">

                {/* LEFT: Small, Premium Image Box */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <Box sx={{
                        position: { md: 'sticky' },
                        top: { md: '120px' },
                        display: 'flex',
                        justifyContent: { xs: 'center', md: 'flex-start' }
                    }}>
                        <Box sx={{
                            width: '100%',
                            maxWidth: '340px', // Controlled small size
                            borderRadius: `${theme.shape.borderRadius}px`,
                            overflow: 'hidden',
                            boxShadow: theme.palette.mode === 'light'
                                ? '0 20px 40px rgba(0,0,0,0.06)'
                                : '0 20px 40px rgba(0,0,0,0.4)',
                            border: `1px solid ${theme.palette.divider}`,
                            bgcolor: 'background.paper'
                        }}>
                            <img
                                src={book.images[0]}
                                alt={book.title}
                                style={{
                                    width: '100%',
                                    display: 'block',
                                    aspectRatio: '3/4',
                                    objectFit: 'cover'
                                }}
                            />
                        </Box>
                    </Box>
                </Grid>

                {/* RIGHT: Detail Information */}
                <Grid size={{ xs: 12, md: 7 }}>
                    <Stack spacing={4}>
                        <Box>
                            <Chip
                                label={book.genre}
                                size="small"
                                sx={{
                                    mb: 2,
                                    fontWeight: 700,
                                    bgcolor: 'primary.main',
                                    color: '#fff',
                                    borderRadius: '6px'
                                }}
                            />
                            <Typography variant="h3" fontWeight={600} sx={{ lineHeight: 1.2, mb: 1 }}>
                                {book.title}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" fontWeight={400}>
                                by {book.author}
                            </Typography>
                        </Box>

                        <Typography variant="h4" fontWeight={700} color="text.primary">
                            {currencyINR(book.price)}
                        </Typography>

                        {/* <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
                                Description
                            </Typography>
                            <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary', fontSize: '1.05rem' }}>
                                {book.description || "Every BookBox selection is hand-picked for quality. This title is curated specifically for readers who value depth, design, and a meaningful reading experience."}
                            </Typography>
                        </Box> */}

                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<WhatsAppIcon />}
                            href={waLink}
                            target="_blank"
                            sx={{
                                py: 2,
                                borderRadius: '12px',
                                bgcolor: '#25D366',
                                fontSize: '1.1rem',
                                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                                '&:hover': {
                                    bgcolor: '#128C7E',
                                    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                                }
                            }}
                        >
                            Order via WhatsApp
                        </Button>

                        <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center' }}>
                            Secure your copy. We ship across India.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}