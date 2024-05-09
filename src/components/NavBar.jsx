import React from "react";
import { Box, Flex, Text, Link, useColorModeValue, useColorMode, Switch } from "@chakra-ui/react";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.7)");
  const textColor = useColorModeValue("black", "white");

  return (
    <Flex bg={bgColor} color={textColor} p={4} justifyContent="space-between">
      <Text fontSize="lg" fontWeight="bold" backdropFilter="blur(10px)">
        My Website
      </Text>
      <Box>
        <Link px={2} href="/">
          Home
        </Link>
        <Link px={2} href="/about">
          About
        </Link>
        <Link px={2} href="/contact">
          Contact
        </Link>
        <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      </Box>
    </Flex>
  );
}

export default NavBar;
