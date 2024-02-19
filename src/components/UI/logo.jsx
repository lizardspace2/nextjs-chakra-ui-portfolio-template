import { chakra } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <chakra.a display="block">
        <chakra.img src="/logo.png" alt="Logo" width="100px" height="auto" />
      </chakra.a>
    </NextLink>
  );
};

export default Logo;
