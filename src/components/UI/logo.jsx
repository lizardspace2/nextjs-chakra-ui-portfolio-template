import { Box, Image } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Box >
        <Image src="https://i.ibb.co/NZRp8wr/logo.png" alt="Logo"   borderRadius='full'
  boxSize='30px'/>
      </Box>
    </NextLink>
  );
};

export default Logo;
