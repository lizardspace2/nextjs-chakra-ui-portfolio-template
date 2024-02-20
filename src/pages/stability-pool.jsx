import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Stack,
  Input,
  useColorModeValue
} from '@chakra-ui/react';

const StakingPoolsComponent = () => {
  const bg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} bg={bg}>
      <Text fontSize="2xl" fontWeight="bold" mb={5}>Staking Pools</Text>
      <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} mb={5}>
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
      </Box>
      <Box>
        <Flex borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} align="center" justify="space-between">
          <Image src="path-to-your-parrot-logo.png" boxSize="50px" mr={3} />
          <Text fontWeight="semibold">Parrot Pool</Text>
          <Text fontWeight="semibold">7%</Text>
          <Text>N/A prtSOL</Text>
          <Text>N/A</Text>
          <Text>88,179.27 SOL</Text>
          <Button colorScheme="red">Withdraw</Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default StakingPoolsComponent;
