import { Box, Typography } from "@mui/material"
import { ThemeToggle } from "./components/common/ThemeToggle"

function App() {
  return (
    <Box p={4}>
      <ThemeToggle></ThemeToggle>
      <Typography variant="h4">BookBox</Typography>
    </Box>
  )
}

export default App
