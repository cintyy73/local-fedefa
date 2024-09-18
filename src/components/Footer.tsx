import {
  Box,
  Image,
  Text,
  Stack,
  IconButton,
  ButtonGroup,
  VStack,
  Link,
  Container,
  Button,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from "../../Public/footer-logo.png";

export const Footer = () => {
  return (
    <Container
      as="footer"
      bg="#027bb5"
      justifyContent="space-around"
      minH="40vh"
      maxW="100%"
      centerContent
      py={4}
    >
      <Stack
        maxW={1200}
        color="white"
        justify="space-around"
        w="100%"
        direction={{ md: "row", base: "column" }}
        alignItems="center"
        spacing={8}
      >
        <VStack
          spacing={10}
          alignSelf={{ base: "center", md: "flex-end" }}
          mb={{ base: "3", md: "0" }}
        >
          <Box w="60%" maxW="200px">
            <Image
              src={logo}
              alt="FEDEFA"
              objectFit="contain"
              _hover={{
                transform: "scale(1.1) rotate(3deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          </Box>

          <ButtonGroup>
            <Link href="mailto:fedefa@fedefa.org.ar" isExternal>
              <IconButton
                isRound={true}
                variant="solid"
                color="#027bb5"
                aria-label="Facebook"
                fontSize="22px"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease-in-out",
                }}
                icon={<MdEmail />}
              />
            </Link>
            <Link href="https://www.facebook.com/fedefaargentina/" isExternal>
              <IconButton
                isRound={true}
                variant="solid"
                color="#027bb5"
                aria-label="Facebook"
                fontSize="22px"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease-in-out",
                }}
                icon={<FaFacebook />}
              />
            </Link>
            <Link href="https://twitter.com/fedefa2015?lang=es" isExternal>
              <IconButton
                isRound={true}
                variant="solid"
                color="#027bb5"
                aria-label="Twitter/X"
                fontSize="22px"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease-in-out",
                }}
                icon={<FaXTwitter />}
              />
            </Link>
            <Link href="https://www.instagram.com/fedefaargentina/" isExternal>
              <IconButton
                isRound={true}
                variant="solid"
                color="#027bb5"
                aria-label="Instagram"
                fontSize="22px"
                _hover={{
                  transform: "scale(1.2)",
                  transition: "transform 0.3s ease-in-out",
                }}
                icon={<FaInstagram />}
              />
            </Link>
          </ButtonGroup>
        </VStack>

        <Stack spacing={6}>
          <VStack alignItems="flex-start" spacing={0}>
            <Text as="b">Sede Buenos Aires</Text>
            <Text>Esmeralda 1066 – 5 piso H – CP 1059 CABA</Text>
          </VStack>

          <VStack alignItems="flex-start" spacing={0}>
            <Text as="b">Oficina Rosario</Text>
            <Text>Urquiza 1968, Rosario, CP 2000</Text>
          </VStack>

          <VStack alignItems="flex-start" spacing={0}>
            <Text as="b">Teléfono</Text>
            <Text>(+54) 011 155 6925823</Text>
          </VStack>
        </Stack>
      </Stack>

      <Box as="span" mt={10}>
        <Text color="white">
          FEDEFA © Copyright 2024 | Todos los derechos reservados |{" "}
          <Link href="https://fedefa.org.ar/politica-de-privacidad/">
            Política de privacidad
          </Link>{" "}
          |{" "}
          <Link href="https://fedefa.org.ar/politica-de-cookies/">
            Política de cookies
          </Link>
        </Text>
      </Box>
    </Container>
  );
};
