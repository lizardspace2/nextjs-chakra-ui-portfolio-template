import React from 'react';
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  HStack,
  Link,
  useToast,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

// Mock data, replace with actual data props or state
const userData = {
  totalVesting: '87,782,596',
  userVesting: 'N/A',
  unlockPerDay: 'N/A',
  unlocked: 'N/A',
  unlockDate: 'N/A',
};

const VestingComponent = () => {
  const toast = useToast();

  const claimTokens = () => {
    // Implement token claim logic here
    toast({
      title: 'Claim successful.',
      description: "You've claimed your PRT tokens.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Text fontSize="xl" fontWeight="bold">
          Vest yPRT
        </Text>
        <Link href="#" color="teal.500" isExternal>
          Vesting yPRT will not receive incentives (see the doc)
        </Link>
      </Flex>
      <VStack spacing={4} align="stretch" my={4}>
        <HStack justifyContent="space-between">
          <Text>Total yPRT vesting</Text>
          <Text fontWeight="bold">{userData.totalVesting}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Your yPRT vesting</Text>
          <Text fontWeight="bold">{userData.userVesting}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>PRT unlock per day</Text>
          <Text fontWeight="bold">{userData.unlockPerDay}</Text>
        </HStack>
      </VStack>
      <HStack justifyContent="space-between" mt={4}>
        <Button colorScheme="purple" variant="outline">
          Vest yPRT
        </Button>
        <Button colorScheme="red" variant="outline">
          Unvest yPRT
        </Button>
      </HStack>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4}>
      <HStack justifyContent="space-between">
          <Text>PRT unlocked:</Text>
          <Text fontWeight="bold">{userData.unlocked}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text>Unlock date:</Text>
          <Text fontWeight="bold">{userData.unlockDate}</Text>
        </HStack>
      </Box>
      <Flex justifyContent="flex-end">
        <Button colorScheme="teal" variant="solid" onClick={claimTokens}>
          Claim PRT
        </Button>
      </Flex>
      {/* ... rest of your component ... */}
    </Box>
  );
};

export default VestingComponent;
