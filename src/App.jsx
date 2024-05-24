import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Box, useColorMode, Container, Flex, Heading, Stack, Link, Button } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [showForm, setShowForm] = useState(false);

  return (
    <Router>
      <Box>
        <Box as="nav" bg={colorMode === "light" ? "gray.800" : "gray.200"} color={colorMode === "light" ? "white" : "black"} py={4}>
          <Container maxW="container.lg">
            <Flex justify="space-between" align="center">
              <Heading as="h1" size="lg">My Blog</Heading>
              <Stack direction="row" spacing={4}>
                <Link href="#" _hover={{ textDecoration: "none", color: colorMode === "light" ? "gray.400" : "gray.600" }}>Home</Link>
                <Link href="#" _hover={{ textDecoration: "none", color: colorMode === "light" ? "gray.400" : "gray.600" }}>About</Link>
                <Link href="#" _hover={{ textDecoration: "none", color: colorMode === "light" ? "gray.400" : "gray.600" }}>Blog</Link>
                <Link href="#" _hover={{ textDecoration: "none", color: colorMode === "light" ? "gray.400" : "gray.600" }}>Contact</Link>
                <Button colorScheme="teal" onClick={() => setShowForm(!showForm)}>New Post</Button>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? "Dark Mode" : "Light Mode"}
                </Button>
              </Stack>
            </Flex>
          </Container>
        </Box>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;