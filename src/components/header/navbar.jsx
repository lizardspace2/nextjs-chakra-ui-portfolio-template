import { useState } from "react";
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

import HamburgerMenu from "../UI/hamburgerMenu";
import ColorModeToggle from "../UI/colorModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bg = useColorModeValue("gray.200", "gray.300");
  const color = useColorModeValue("black", "white");

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Box
      as="nav"
      display="flex"
      flexDir={{ base: "row-reverse", lg: "row" }}
      alignItems="center"
      fontWeight="500"
    >
      <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
      <chakra.ul
        bg={{ base: bg, lg: "transparent" }}
        color={{ base: "black", lg: color }}
        display={{
          base: isOpen ? "block" : "none",
          lg: "flex",
        }}
        position={{ base: "absolute", lg: "static" }}
        top="5rem"
        left="5%"
        right="5%"
        rounded={{ base: "lg", lg: "none" }}
        py={{ base: "2", lg: "0" }}
        px={{ base: "4", lg: "0" }}
        alignItems={{ lg: "center" }}
        boxShadow={{ base: "xl", lg: "none" }}
        zIndex="2"
      >
        <chakra.li
          listStyleType="none"
          px={{ lg: "8" }}
          py={{ base: "3", lg: "0" }}
        >
          <NextLink href="/">
            <a onClick={closeMenu}>Home</a>
          </NextLink>
        </chakra.li>

        <chakra.li
          listStyleType="none"
          px={{ lg: "8" }}
          py={{ base: "3", lg: "0" }}
        >
          <NextLink href="/blog">
            <a onClick={closeMenu}>Blog</a>
          </NextLink>
        </chakra.li>

        {/* Add additional list items for Mint, Vaults, Earn, and Rewards */}
        <chakra.li
          listStyleType="none"
          px={{ lg: "8" }}
          py={{ base: "3", lg: "0" }}
        >
          <NextLink href="/mint">
            <a onClick={closeMenu}>Mint</a>
          </NextLink>
        </chakra.li>

        <chakra.li
          listStyleType="none"
          px={{ lg: "8" }}
          py={{ base: "3", lg: "0" }}
        >
          <NextLink href="/vaults">
            <a onClick={closeMenu}>Vaults</a>
          </NextLink>
        </chakra.li>

        <chakra.li
          listStyleType="none"
          px={{ lg: "8" }}
          py={{ base: "3", lg: "0" }}
        >
          <NextLink href="/earn">
            <a onClick={closeMenu}>Earn</a>
          </NextLink>
        </chakra.li>

        <chakra.li
          listStyleType="none"
          px={{ lg: "8" }}
          py={{ base: "3", lg: "0" }}
        >
          <NextLink href="/rewards">
            <a onClick={closeMenu}>Rewards</a>
          </NextLink>
        </chakra.li>
        {/* End of additional list items */}
      </chakra.ul>

      <ColorModeToggle />
    </Box>
  );
};

export default Navbar;
