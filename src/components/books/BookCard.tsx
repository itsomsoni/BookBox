import { Box, Card, CardContent, CardMedia, Typography, Button, useTheme, Stack } from "@mui/material";
import type { Book } from "../../data/books";
import { currencyINR } from "../../lib/util";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
    book: Book
}

export default function BookCard({ book }: Props) {
    const theme = useTheme();

    return (
        <Card
            component={motion.div}
            whileHover={{ y: -8 }}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: `${theme.shape.borderRadius}px`, // Using your 12px setting
                bgcolor: 'background.paper',
                boxShadow: theme.palette.mode === 'light'
                    ? '0 4px 12px rgba(0,0,0,0.03)'
                    : '0 4px 12px rgba(0,0,0,0.3)',
                border: `1px solid ${theme.palette.divider}`,
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                    boxShadow: theme.palette.mode === 'light'
                        ? '0 12px 24px rgba(0,0,0,0.08)'
                        : '0 12px 24px rgba(0,0,0,0.5)',
                }
            }}
        >
            {/* Image Container with Hover Effect */}
            <Box
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    // Maintains the "Book" aspect ratio users expect
                    aspectRatio: "3 / 4",
                    backgroundColor: 'rgba(0,0,0,0.02)'
                }}
            >
                <CardMedia
                    component="img"
                    image={book.images[0]}
                    alt={book.title}
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
                        "&:hover": {
                            transform: "scale(1.08)",
                        },
                    }}
                />
            </Box>

            <CardContent sx={{ flexGrow: 1, px: 2, pt: 2, pb: 1 }}>
                <Typography
                    variant="caption"
                    sx={{
                        color: "primary.main",
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: 0.5,
                        display: 'block',
                        mb: 0.5
                    }}
                >
                    {book.genre || 'New Arrival'}
                </Typography>

                <Typography
                    sx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        lineHeight: 1.3,
                        color: 'text.primary',
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        minHeight: '2.6em' // Keeps cards aligned even with 1-line titles
                    }}
                >
                    {book.title}
                </Typography>

                <Typography
                    sx={{
                        mt: 0.5,
                        fontSize: "0.85rem",
                        color: "text.secondary",
                    }}
                >
                    {book.author}
                </Typography>
            </CardContent>

            <Box sx={{ px: 2, pb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography sx={{ fontSize: "1.1rem", fontWeight: 700 }}>
                        {currencyINR(book.price)}
                    </Typography>
                </Box>

                <Stack direction="row" spacing={1}>
                    <Button
                        disabled={true}
                        variant="contained"
                        fullWidth
                        disableElevation
                        sx={{
                            borderRadius: "8px",
                            textTransform: "none",
                            fontWeight: 600,
                            py: 1
                        }}
                    >
                        Shop Now
                    </Button>
                    <Button
                        component={Link}
                        to={`/books/${book.bookId}`}
                        variant="outlined"
                        sx={{
                            borderRadius: "8px",
                            minWidth: '48px',
                            p: 0,
                            borderColor: 'divider'
                        }}
                    >
                        Details
                    </Button>
                </Stack>
            </Box>
        </Card>
    )
}