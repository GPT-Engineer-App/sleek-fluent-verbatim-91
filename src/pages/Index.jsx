import { Box, Button, Container, Heading, Text, VStack, Image, useColorModeValue } from "@chakra-ui/react";
import { FaUserFriends, FaRocket } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("whiteAlpha.500", "whiteAlpha.200");
  const color = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Container maxW="container.xl" p={0} height="100vh" display="flex" justifyContent="center" alignItems="center" background="linear-gradient(145deg, rgba(10,10,10,1) 0%, rgba(45,45,45,1) 100%)">
      <VStack spacing={8} p={5} alignItems="center" justifyContent="center">
        <Image src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGZ1dHVyaXN0aWN8ZW58MHx8fHwxNzE1MjI2Njk5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" boxSize="150px" alt="Verbatim Logo" />
        <Box p={5} bg={bg} backdropFilter="blur(10px)" borderRadius="lg" boxShadow="xl">
          <VStack spacing={4}>
            <Heading color={color} textAlign="center">
              Welcome to Verbatim
            </Heading>
            <Text fontSize="xl" color={color} textAlign="center">
              Connect, share, and engage on the next-gen social platform.
            </Text>
            <Button leftIcon={<FaUserFriends />} colorScheme="purple" variant="solid" size="lg">
              Join Now
            </Button>
            <Button leftIcon={<FaRocket />} colorScheme="orange" variant="outline" size="lg">
              Learn More
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
