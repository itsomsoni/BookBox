import { useState, useEffect } from "react";
import { Box, Container, Grid, Typography, Button, Stack, Divider } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { books, type Book } from "../data/books";
import { currencyINR } from "../lib/util";

export default function FeaturedSection() {
  const [featured, setFeatured] = useState<Book | null>(null);

  useEffect(() => {
    // Pick a random book on component mount
    const randomIndex = Math.floor(Math.random() * books.length);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFeatured(books[randomIndex]);
  }, []);

  if (!featured) return null;

  return (
    <Box id='featured-book' sx={{ py: 15, position: 'relative' }}>
      <Container maxWidth="lg">
        <AnimatePresence mode="wait">
          <Grid container spacing={10} alignItems="center" component={motion.div} key={featured.bookId}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

            {/* THE VISUAL: Overlapping Elements */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ position: 'relative' }}>
                {/* Decorative Background Block */}
                <Box sx={{
                  position: 'absolute', top: -40, left: -40, width: '100%', height: '100%',
                  bgcolor: 'primary.main', opacity: 0.05, borderRadius: '12px' //
                }} />

                <Box component={motion.div} whileHover={{ scale: 1.02 }}
                  sx={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}>
                  <img src={featured.images[0]} alt={featured.title}
                    style={{ width: '100%', display: 'block', aspectRatio: '4/5', objectFit: 'cover' }} />
                </Box>
              </Box>
            </Grid>

            {/* THE CONTENT: Editorial Hierarchy */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack spacing={4}>
                <Box>
                  <Typography variant="overline" color="primary" sx={{ letterSpacing: 4, fontWeight: 900 }}>
                    CURATOR'S CHOICE
                  </Typography>
                  <Typography variant="h2" sx={{ fontWeight: 600, mt: 2, mb: 1, letterSpacing: '-0.03em' }}>
                    {featured.title}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" sx={{ fontStyle: 'italic', fontWeight: 300 }}>
                    by {featured.author}
                  </Typography>
                </Box>

                <Divider sx={{ width: '60px', borderBottomWidth: 3, borderColor: 'primary.main' }} />

                <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.9, color: '#4A4A4A', maxWidth: '500px' }}>
                  {"A masterfully selected addition to any collection, focusing on depth and aesthetic value."}
                </Typography>

                <Stack direction="row" spacing={4} alignItems="center">
                  <Button variant="contained" component={Link} to={`/books/${featured.bookId}`}
                    sx={{ borderRadius: '4px', px: 5, py: 2, textTransform: 'uppercase', fontWeight: 700, letterSpacing: 1 }}>
                    Discover More
                  </Button>
                  <Typography variant="h4" fontWeight={300} sx={{ color: 'text.secondary' }}>
                    {currencyINR(featured.price)}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </AnimatePresence>
      </Container>
    </Box>
  );
}