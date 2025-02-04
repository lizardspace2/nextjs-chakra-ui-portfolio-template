import React from 'react';
import {
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import UnstakedBalance from './../components/stabilitypools/UnstakedBalance';
import VestingComponent from './../components/stakeprt/VestingComponent';
import StakePRTComponent from './../components/stakeprt/StakePRTComponent';

const StakingPrtComponent = () => {
  const bg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} bg={bg}>
      <Text fontSize="2xl" fontWeight="bold" mb={5}>Staking Pools</Text>
      <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} mb={5}>
        <StakePRTComponent/>
        <VestingComponent/>
      </Box>
      <UnstakedBalance
        logoSrc="path-to-your-parrot-logo.png"
        name="Parrot Pool"
        apr={7}
        token="prtSOL"
        amount="88,179.27"
        onWithdraw={() => {
          // Handle withdraw logic
        }}
      />
    </Box>
  );
};

export default StakingPrtComponent;
