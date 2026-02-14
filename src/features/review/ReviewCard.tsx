import { Paper, Stack, Avatar, Box, Typography, Rating, useTheme } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import type {Review} from '../../data/review'

interface ReviewCardProps {
    review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
    const theme = useTheme();

    return (
        <Paper 
            elevation={0}
            sx={{ 
                p: 3, 
                borderRadius: `${theme.shape.borderRadius}px`,
                border: `1px solid ${theme.palette.divider}`,
                bgcolor: theme.palette.mode === 'light' ? '#FBFBFA' : 'background.paper',
                height: '100%',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': { transform: 'translateY(-4px)' }
            }}
        >
            <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40, fontSize: '0.9rem' }}>
                            {review.userName.charAt(0)}
                        </Avatar>
                        <Box>
                            <Typography variant="subtitle2" fontWeight={700}>
                                {review.userName}
                            </Typography>
                            {review.isVerified && (
                                <Stack direction="row" spacing={0.5} alignItems="center">
                                    <CheckCircle sx={{ fontSize: 12, color: '#25D366' }} />
                                    <Typography variant="caption" color="text.secondary">
                                        Verified Reader
                                    </Typography>
                                </Stack>
                            )}
                        </Box>
                    </Stack>
                    <Typography variant="caption" color="text.secondary">
                        {review.date}
                    </Typography>
                </Stack>

                <Rating 
                    value={review.rating} 
                    readOnly 
                    size="small" 
                    sx={{ color: 'primary.main' }} 
                />

                <Typography variant="body2" sx={{ lineHeight: 1.6, color: 'text.primary' }}>
                    "{review.comment}"
                </Typography>
            </Stack>
        </Paper>
    );
}