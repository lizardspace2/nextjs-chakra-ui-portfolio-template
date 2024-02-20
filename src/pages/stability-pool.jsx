import React from 'react';
import {
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import UnstakedBalance from './../components/stabilitypools/UnstakedBalance';
import Pool from './../components/stabilitypools/Pool';

const StakingPoolsComponent = () => {
  const bg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} bg={bg}>
      <Text fontSize="2xl" fontWeight="bold" mb={5}>Staking Pools</Text>
      <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} mb={5}>
        <UnstakedBalance/>
      </Box>
      <Pool
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

export default StakingPoolsComponent;
