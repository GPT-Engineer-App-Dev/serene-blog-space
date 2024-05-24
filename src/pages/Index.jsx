import { useState } from "react";
import { Box, Container, Flex, Heading, Link, Stack, Text, VStack, Button, Input, Textarea, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Blog Post Title", content: "This is a summary of the blog post. Click to read more...", tags: ["example"] },
    { title: "Another Blog Post", content: "This is another summary of a blog post. Click to read more...", tags: ["example"] }
  ]);
  const [newPost, setNewPost] = useState({ title: "", content: "", tags: [] });
  const [tagInput, setTagInput] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const addTag = () => {
    if (tagInput.trim() !== "") {
      setNewPost({ ...newPost, tags: [...newPost.tags, tagInput.trim()] });
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setNewPost({ ...newPost, tags: newPost.tags.filter(tag => tag !== tagToRemove) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost({ title: "", content: "", tags: [] });
    setShowForm(false);
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <Stack direction="row" spacing={4}>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Blog</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
              <Button colorScheme="teal" onClick={() => setShowForm(!showForm)}>New Post</Button>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" mt={8}>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          {/* Blog Posts Section */}
          <Box flex="3">
            {showForm && (
              <Box p={5} shadow="md" borderWidth="1px" mb={8}>
                <Heading fontSize="xl" mb={4}>Create New Post</Heading>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={4}>
                    <Input
                      placeholder="Title"
                      name="title"
                      value={newPost.title}
                      onChange={handleInputChange}
                      required
                    />
                    <Textarea
                      placeholder="Content"
                      name="content"
                      value={newPost.content}
                      onChange={handleInputChange}
                      required
                    />
                    <Flex>
                      <Input
                        placeholder="Add a tag"
                        value={tagInput}
                        onChange={handleTagInputChange}
                      />
                      <Button ml={2} onClick={addTag}>Add Tag</Button>
                    </Flex>
                    <Flex wrap="wrap">
                      {newPost.tags.map((tag, index) => (
                        <Tag key={index} size="md" borderRadius="full" variant="solid" colorScheme="teal" m={1}>
                          <TagLabel>{tag}</TagLabel>
                          <TagCloseButton onClick={() => removeTag(tag)} />
                        </Tag>
                      ))}
                    </Flex>
                    <Button type="submit" colorScheme="teal">Submit</Button>
                  </Stack>
                </form>
              </Box>
            )}
            <VStack spacing={8} align="stretch">
              {posts.map((post, index) => (
                <Box key={index} p={5} shadow="md" borderWidth="1px">
                  <Heading fontSize="xl">{post.title}</Heading>
                  <Text mt={4}>{post.content}</Text>
                  <Flex wrap="wrap" mt={2}>
                    {post.tags.map((tag, index) => (
                      <Tag key={index} size="md" borderRadius="full" variant="solid" colorScheme="teal" m={1}>
                        <TagLabel>{tag}</TagLabel>
                      </Tag>
                    ))}
                  </Flex>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
            <Box p={5} shadow="md" borderWidth="1px" mb={8}>
              <Heading fontSize="lg" mb={4}>Recent Posts</Heading>
              <VStack align="start">
                {posts.slice(-3).map((post, index) => (
                  <Link key={index} href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>{post.title}</Link>
                ))}
              </VStack>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="lg" mb={4}>Categories</Heading>
              <VStack align="start">
                <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Category 1</Link>
                <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Category 2</Link>
                <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Category 3</Link>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <Stack direction="row" spacing={4}>
              <Link href="#" _hover={{ color: "gray.400" }}><FaTwitter /></Link>
              <Link href="#" _hover={{ color: "gray.400" }}><FaFacebook /></Link>
              <Link href="#" _hover={{ color: "gray.400" }}><FaInstagram /></Link>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;