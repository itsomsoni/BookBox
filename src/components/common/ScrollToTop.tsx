import { Box, Fab, Zoom, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@mui/icons-material";

export default function ScrollTop() {
    // This trigger activates when the user scrolls down
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 400, // Show button after scrolling 400px
    });

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{
                    position: "fixed",
                    bottom: 32,
                    right: 32,
                    zIndex: 10,
                }}
            >
                <Fab
                    size="small"
                    aria-label="scroll back to top"
                    sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        "&:hover": {
                            bgcolor: "primary.dark",
                            transform: "scale(1.1)",
                        },
                        transition: "all 0.2s ease-in-out",
                    }}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Box>
        </Zoom>
    );
}