import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
} from '@chakra-ui/react';

const StakePRTComponent = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} bg={bg} mb={3}>
      <Text fontSize="lg" fontWeight="bold" mb={4}>Stake PRT to yPRT (🔒,🔒)</Text>
      <StatGroup borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5}>
        <Stat>
          <StatLabel>Total PRT staked</StatLabel>
          <StatNumber>10,443,954,951</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Your yPRT balance</StatLabel>
          <StatNumber>N/A</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>yPRT reward per day (ℹ️)</StatLabel>
          <StatNumber>N/A</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>APY (ℹ️)</StatLabel>
          <StatNumber>N/A</StatNumber>
        </Stat>
      </StatGroup>
      <Flex justify="flex-end" mt={4}>
        <Button colorScheme="teal">Stake</Button>
      </Flex>
    </Box>
  );
};

export default StakePRTComponent;
