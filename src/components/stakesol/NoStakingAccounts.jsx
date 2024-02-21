import React from 'react';
import { Box, Text, Center, Image, useColorModeValue } from '@chakra-ui/react';

const NoStakingAccounts = () => {
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} bg={cardBg}>
      <Box borderBottomWidth="1px" mb={6} pb={2}>
        <Text fontSize="xl" fontWeight="bold">
          Staking Accounts
        </Text>
      </Box>
      <Center flexDirection="column">
        <Image
          boxSize="50px"
          src="/path-to-your-no-staking-image.png"
          alt="No Staking Account"
        />
        <Text mt={4}>No staking account found</Text>
      </Center>
    </Box>
  );
};

export default NoStakingAccounts;
