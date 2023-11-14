import React from "react";
import {
  Box,
  HStack,
  useDisclosure,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { useConnect, useAccount, useBalance } from "wagmi";

export default function WalletModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });
  const bg = useColorModeValue("white", "gray.800");
  const bgColor = useColorModeValue("blue.200", "blue.500");
  const [{ data: getBalance }] = useBalance({
    addressOrName: accountData?.address,
  });

  if (accountData) {
    return (
      <Box>
        <HStack>
          <Box
            bg={bg}
            my={-5}
            px={2}
            py={1}
            borderWidth={1}
            borderRadius="2xl"
            borderColor="blue.500"
          >
            <Text fontSize="xs" as="address" isTruncated maxWidth={300}>
              {accountData.ens?.name
                ? `${accountData.ens?.name} (${accountData.address})`
                : accountData.address}
            </Text>
            <Text fontSize="xs" as="samp">
               {`${Number(getBalance?.formatted).toFixed(3)} "ETH"`}
            </Text>
          </Box>
          <Button borderRadius="2xl" bg="blue.500" onClick={disconnect}>
          Déconnecter
          </Button>
        </HStack>
      </Box>
    );
  }
  return (
    <>
      <Button bg={bgColor} borderRadius="2xl" onClick={onOpen}>
      Connecter
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="2xl" width="md">
          <ModalHeader>Choisir Portefeuille</ModalHeader>

          <ModalBody>
            {connectData.connectors.map((x) => (
              <HStack py={2} key={x.id}>
                <Button
                  w="full"
                  borderRadius="full"
                  bgColor={bgColor}
                  disabled={!x.ready}
                  onClick={() => connect(x)}
                >
                  {`${x.name}${!x.ready ? " (non pris en charge)" : ""}`}
                </Button>
              </HStack>
            ))}
          </ModalBody>
          <ModalFooter>
            {connectError && (
              <Box flex alignItems="start" pos="absolute" pl={4} left={1}>
                {connectError?.message ?? "Échec de connexion"}
              </Box>
            )}
            <Button
              borderRadius="full"
              color="white"
              bg="red.400"
              mr={3}
              onClick={onClose}
            >
              Annuler
              </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
