import React from "react";
import Link from 'next/link';

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  useDisclosure,
  IconButton,
  Tabs,
  TabList,
  Tab,
  useColorMode,
} from "@chakra-ui/react";
import { Portefeuille } from "..";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navigation() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bgColor = useColorModeValue("blue.200", "blue.500");

  return (
    <Box shadow="2xl" borderRadius="3xl">
      <chakra.header
        bg={bg}
        borderColor={useColorModeValue("gray.400", "blue.500")}
        borderBottomWidth={1}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <IconButton
                bg={bgColor}
                borderRadius="2xl"
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="solid"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
            <chakra.h1  display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, blue.600, yellow.300)"
            fontWeight="extrabold" fontSize="2xl">
            Portefeuille
             </chakra.h1>
               </HStack>
              <HStack spacing={3} display="flex" alignItems="center">
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Portefeuille />
            </HStack>
            <chakra.a
              p={3}
              color={useColorModeValue("gray.800", "inherit")}
              rounded="sm"
              _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
            ></chakra.a>
          </HStack>
        </Flex>
      </chakra.header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        borderWidth={0}
        overflowX="auto"
      >
        <Tabs defaultIndex={1} borderBottomColor="transparent">
          <TabList>
           
            <Tab 
              fontWeight="semibold"
              py={4}
              m={0}
              _focus={{ boxShadow: "none" }}
            >
              <Link href="/Transfers">Transfers Token ERC20</Link>

            </Tab>
            <Tab
              fontWeight="semibold"
              py={4}
              m={0}
              _focus={{ boxShadow: "none" }}
            >
              <Link href="/Information">Informations Token ERC20</Link>
            </Tab>
          </TabList>
        </Tabs>
      </Flex>
      
    </Box>
    
  );
  
}
