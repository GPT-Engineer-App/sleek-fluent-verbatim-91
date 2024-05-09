import { Container, Heading, Text, VStack, Image, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={10} p={5} alignItems="center" justifyContent="center">
        <Image src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGZ1dHVyaXN0aWN8ZW58MHx8fHwxNzE1MjI2Njk5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" boxSize="300px" alt="Verbatim Logo" />
        <Heading size="2xl" textAlign="center" fontWeight="bold">
          Experience Verbatim
        </Heading>
        <Text fontSize="2xl" textAlign="center">
          The future of social connectivity.
        </Text>
        <Button colorScheme="blue" variant="solid" size="lg">
          Discover More
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
