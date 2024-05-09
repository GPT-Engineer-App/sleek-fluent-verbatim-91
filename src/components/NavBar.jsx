import React from 'react';
import { Box, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react';

function NavBar() {
  const bgColor = useColorModeValue('gray.800', 'gray.900');
  const textColor = useColorModeValue('white', 'gray.200');

  return (
    <Flex bg={bgColor} color={textColor} p={4} justifyContent="space-between">
      <Text fontSize="lg" fontWeight="bold">My Website</Text>
      <Box>
        <Link px={2} href="/">Home</Link>
        <Link px={2} href="/about">About</Link>
        <Link px={2} href="/contact">Contact</Link>
      </Box>
    </Flex>
  );
}

export default NavBar;