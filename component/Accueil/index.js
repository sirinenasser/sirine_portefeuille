import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
 Text,
 Image,
 Center
} from "@chakra-ui/react";

export default function Home() {
  const bgColor = useColorModeValue("blue.200", "blue.500");

  return (
    <Box px={8} py={32} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, blue.600, yellow.300)"
            fontWeight="extrabold"
          >
           Mon Portefeuille App
          </Text>
        </chakra.h1>
        <Center>
          <Image borderRadius='full' boxSize='180px'  src='images/portefeuille.png'  />
        </Center>

      </Box>
    </Box>
  );
}
