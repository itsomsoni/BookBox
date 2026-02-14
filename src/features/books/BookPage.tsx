import { useState } from "react";
import { Box, Container, Typography, Grid, Chip, Stack } from "@mui/material";
import { books } from "../../data/books";
import BookCard from "../../components/books/BookCard";

// Extract unique genres for the filter
const categories = ["All", ...new Set(books.map((b) => b.genre))];

export default function CatalogPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredBooks = activeCategory === "All" 
        ? books 
        : books.filter(b => b.genre === activeCategory);

    return (
        <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: { xs: 1, md: 5 } }}>
            <Container>
                {/* Page Header */}
                <Box sx={{ mb: 3, textAlign: "center" }}>
                    <Typography variant="h3" fontWeight={600} gutterBottom>
                        The Collection
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Hand-picked stories, thoughtfully curated for your shelf.
                    </Typography>
                </Box>

                {/* Filter Bar - Bridges the "Vibe" gap */}
                <Stack 
                    direction="row" 
                    spacing={1} 
                    justifyContent="center" 
                    sx={{ mb: 3, flexWrap: "wrap", gap: 1 }}
                >
                    {categories.map((cat) => (
                        <Chip
                            key={cat}
                            label={cat}
                            clickable
                            onClick={() => setActiveCategory(cat)}
                            sx={{
                                px: 1,
                                py: 2,
                                borderRadius: "8px",
                                fontWeight: 500,
                                bgcolor: activeCategory === cat ? "primary.main" : "background.paper",
                                color: activeCategory === cat ? "#fff" : "text.primary",
                                border: `1px solid ${activeCategory === cat ? "primary.main" : "#EAEAEA"}`,
                                "&:hover": {
                                    bgcolor: activeCategory === cat ? "primary.main" : "#f0f0f0",
                                },
                            }}
                        />
                    ))}
                </Stack>

                {/* Books Grid */}
                <Grid container spacing={3}>
                    {filteredBooks.map((book) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={book.bookId}>
                            <BookCard book={book} />
                        </Grid>
                    ))}
                </Grid>

                {/* Empty State */}
                {filteredBooks.length === 0 && (
                    <Typography textAlign="center" sx={{ mt: 10, color: "text.secondary" }}>
                        We're currently curating more books for this category. Stay tuned!
                    </Typography>
                )}
            </Container>
        </Box>
    );
}