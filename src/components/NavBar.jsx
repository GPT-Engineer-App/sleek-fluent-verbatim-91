import React from "react";
import { Box, Flex, Text, Link, useColorModeValue, useColorMode, Switch } from "@chakra-ui/react";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.7)");
  const textColor = useColorModeValue("black", "white");

  return (
    <Flex bg="transparent" color="white" p={4} justifyContent="space-between">
      <Text fontSize="lg" fontWeight="bold" backdropFilter="blur(10px)">
        Verbatim
      </Text>
      <Box>
        <Link px={4} href="/" fontSize="lg">
          Home
        </Link>
        <Link px={4} href="/about" fontSize="lg">
          About
        </Link>
        <Link px={4} href="/contact" fontSize="lg">
          Contact
        </Link>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      </Box>
    </Flex>
  );
}

export default NavBar;
