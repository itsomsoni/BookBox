import { Box, Chip, Typography } from "@mui/material"

type FilterChips<T extends string> = {
    label: string
    options: readonly T[]
    value: T | ''
    onChange: (value: T | '') => void
    color?: 'primary' | 'secondary'
}

export default function FilterChips<T extends string>(
    { label, options, value, onChange, color }: FilterChips<T>
) {
    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                {label}
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    gap: 1.5,
                    overflowX: "auto",
                    pb: 1,
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {options.map((option) => {
                    const selected = value === option

                    return (
                        <Chip
                            key={option}
                            label={option}
                            clickable
                            onClick={() => onChange(selected ? "" : option)}
                            sx={{
                                flexShrink: 0,
                                px: 1.5,
                                borderRadius: "12px",
                                fontWeight: 500,
                                backgroundColor: selected
                                    ? `${color}.main`
                                    : "transparent",
                                color: selected
                                    ? `${color}.contrastText`
                                    : "text.primary",
                                border: selected ? "none" : "1px solid",
                                borderColor: "divider",
                            }}
                        />
                    )
                })}
            </Box>
        </Box>
    )
}