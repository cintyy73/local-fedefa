import { background, Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import logo from "../../public/logo-header.png";
import { Links } from "../components/utils/utils";
import HamburgerMenu from "./hamburgerMenu/HamburgerMenu";

export const Header = () => {
  return (
    <Box
      width="100%"
      bg="white"
      px={{ base: 2, md: 4 }}
      boxShadow="md"
      height={{base:"50px", md:"67px"}}
      position="sticky"
      top="0"
      left="0"
      zIndex="1000"
    >
      <Flex
        maxWidth="1200px"
        width="100%"
        h={{ base: 15, md: 30 }}
        mx="auto"
        my={{base:"15px", md:"18px"}}
        alignItems="center"
        justifyItems="center"
        justifyContent="space-between"
        fontSize={{ base: "1rem", md: "1.4rem" }}
        color="#027bb5"
      >
        {/* Logo */}
        <Box width={{ base: "30%", md: "22%" }}>
          <Image src={logo} alt="Logo" objectFit="cover" />
        </Box>

        <Box display={{ md: "none" }}>
          {/* Menu Button for smaller screens */}
          <HamburgerMenu links={Links} />
        </Box>

        {/* Links for larger screens */}
        <Flex display={{ base: "none", md: "flex" }} alignItems="center">
          {Links.map((link, index) => (
            <React.Fragment key={link.label}>
              {link.external ? (
                <Box
                  as="a"
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  rounded="md"
                  fontSize="1.2rem"
                  color="#027bb5"
                  _hover={{ textDecoration: "none", color: "#033951" }}
                >
                  {link.label}
                </Box>
              ) : (
                <Box
                  as={RouterLink}
                  to={link.to}
                  rounded="md"
                  color="#027bb5"
                  _hover={{ textDecoration: "none", color: "#033951" }}
                >
                  {link.label}
                </Box>
              )}
              {index < Links.length - 1 && (
                <Box as="span" mx={2} color="gray">
                  |
                </Box>
              )}
            </React.Fragment>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
