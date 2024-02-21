import React from 'react';
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const StakeSOLComponent = () => {
  // Define your state and functions to interact with your backend here

  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} bg={cardBg}>
      <VStack spacing={4} align="stretch">
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Staking Pools
          </Text>
        </Box>

        <Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Text>Unstaked SOL balance</Text>
            <Button colorScheme="teal" variant="outline" size="sm">
              Deposit to pool
            </Button>
          </Flex>
          <Text fontSize="xl" fontWeight="bold" mt={2}>
            N/A
          </Text>
        </Box>

        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <HStack justifyContent="space-between">
            
            <VStack>
              <Stat>
                <StatLabel>APY</StatLabel>
                <StatNumber><Image
              borderRadius="full"
              boxSize="50px"
              src="/path-to-your-parrot-image.png"
              alt="Parrot Pool"
            />
            </StatNumber>                
              </Stat>
            </VStack>
            <VStack>
              <Stat>
                <StatLabel>APY</StatLabel>
                <StatNumber>7%</StatNumber>
              </Stat>
            </VStack>
            <VStack>
              <Stat>
                <StatLabel>Balance</StatLabel>
                <StatNumber>N/A prtSOL</StatNumber>
              </Stat>
            </VStack>
            <VStack>
              <Stat>
                <StatLabel>Share</StatLabel>
                <StatNumber>N/A</StatNumber>
              </Stat>
            </VStack>
            <VStack>
              <Stat>
                <StatLabel>Pool Balance</StatLabel>
                <StatNumber>88,189.27 SOL</StatNumber>
              </Stat>
            </VStack>
            <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal">
              Withdraw
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default StakeSOLComponent;
