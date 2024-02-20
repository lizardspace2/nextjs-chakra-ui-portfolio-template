import React from 'react';
import {
  Flex,
  Box,
  Text,
  Button,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

const Pool = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Flex justify="space-between" align="center">
      <Box>
        <Text fontSize="lg" fontWeight="semibold">Unstaked SOL balance</Text>
        <Flex align="center" mt={2}>
          <Image src="path-to-your-sol-logo.png" boxSize="24px" mr={2} />
          <Text fontWeight="semibold">N/A</Text>
        </Flex>
      </Box>
      <Button colorScheme="teal">Deposit to pool</Button>
    </Flex>
  );
};

export default Pool;
