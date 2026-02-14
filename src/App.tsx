import { Box, Container } from "@mui/material"
import Navbar from "./components/layout/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./components/layout/Footer"
import ScrollToTop from "./components/common/ScrollToTop"

function App() {
  return (
    <Box>
      <Navbar></Navbar>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
      <Footer></Footer>
      <ScrollToTop></ScrollToTop>
    </Box>
  )
}

export default App