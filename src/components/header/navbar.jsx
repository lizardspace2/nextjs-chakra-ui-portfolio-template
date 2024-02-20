import { useState } from "react";
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

import HamburgerMenu from "../UI/hamburgerMenu";
import ColorModeToggle from "../UI/colorModeToggle";
import ConnectWalletButton from "../UI/ConnectWalletButton";
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bg = useColorModeValue("gray.200", "gray.300");
  const color = useColorModeValue("black", "white");

  const closeMenu = () => {
    setIsOpen(false);
  };
const MenuHoverTrigger = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {React.cloneElement(children, {
        isOpen,
      })}
    </Box>
  );
};

const EarnDropdown = () => (
  <MenuHoverTrigger>
    <Menu isOpen={isOpen} onClose={() => setOpen(false)} autoSelect={false}>
      <MenuButton
        as={Button}
        bg="transparent" // Remove default background
        color={color}
        _hover={{ bg: 'gray.300', color: 'black' }}
        _expanded={{ bg: 'gray.300', color: 'black' }}
        _focus={{ boxShadow: 'none' }}
      >
        Earn
      </MenuButton>
      <MenuList>
        <NextLink href="/stake-sol" passHref>
          <MenuItem as="a" onClick={closeMenu}>
            Stake SOL
          </MenuItem>
        </NextLink>
        <NextLink href="/stake-prt" passHref>
          <MenuItem as="a" onClick={closeMenu}>
            Stake PRT
          </MenuItem>
        </NextLink>
        <NextLink href="/stability-pools" passHref>
          <MenuItem as="a" onClick={closeMenu}>
            Stability pools
          </MenuItem>
        </NextLink>
      </MenuList>
    </Menu>
  </MenuHoverTrigger>
);

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




        {/* Add additional list items for Mint, Vaults, Earn, and Rewards */}
        <chakra.li
          listStyleType="none"
          px={{ lg: "8" }}
          py={{ base: "3", lg: "0" }}
        >
          <NextLink href="/">
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
          <EarnDropdown />
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
        <chakra.li
          listStyleType="none"
          px={{ lg: "8" }}
          py={{ base: "3", lg: "0" }}
        >
          <NextLink href="/more">
            <a onClick={closeMenu}>More</a>
          </NextLink>
        </chakra.li>
      </chakra.ul>

      <ColorModeToggle />
      <Box p={4}>
        <ConnectWalletButton />
      </Box>
    </Box>
  );
};

export default Navbar;
