import React from 'react';
import {
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import StakeSOLComponent from './../components/stakesol/StakeSOLComponent';
import NoStakingAccounts from './../components/stakesol/NoStakingAccounts';

const StakingSolComponent = () => {
  const bg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} bg={bg}>
      <Text fontSize="2xl" fontWeight="bold" mb={5}>Staking Pools</Text>
      <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} mb={5}>
        <StakeSOLComponent/>
        <NoStakingAccounts/>
      </Box>
    </Box>
  );
};

export default StakingSolComponent;
