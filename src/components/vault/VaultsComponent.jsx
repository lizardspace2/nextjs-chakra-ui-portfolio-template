import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  Icon,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function VaultsComponent() {
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5}>
      <Flex justify="space-between" align="center" mb={5}>
        <Text fontSize="xl" fontWeight="bold">Vaults</Text>
        <InputGroup maxWidth="300px">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.400" />
          </InputLeftElement>
          <Input placeholder="Search" />
        </InputGroup>
      </Flex>
      <Box overflowX="auto">
        <StatGroup>
          <Stat>
            <Flex align="center">
              <Icon viewBox="0 0 200 200" color="green.500">
                {/* Custom SVG for the logo */}
              </Icon>
              <Text ml={2}>SOL</Text>
              <Text ml={2}>PAI</Text>
            </Flex>
            <StatLabel>Markets</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>0</StatNumber>
            <StatLabel>Debt</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>0</StatNumber>
            <StatLabel>Collateral</StatLabel>
          </Stat>
          <Stat>
            <StatHelpText>N/A</StatHelpText>
            <StatLabel>Collateral Ratio</StatLabel>
            <Progress value={20} size="xs" colorScheme="green" />
          </Stat>
          <Stat>
            <StatNumber>109.58</StatNumber>
            <StatHelpText>Current</StatHelpText>
            <StatLabel>Price</StatLabel>
          </Stat>
          <Stat>
            <StatHelpText>N/A</StatHelpText>
            <StatLabel>APY</StatLabel>
          </Stat>
          <Stat>
            <StatHelpText>N/A</StatHelpText>
            <StatLabel>Remaining</StatLabel>
          </Stat>
        </StatGroup>
      </Box>
      <HStack spacing={4} mt={4}>
        <Button colorScheme="green" size="md" variant="solid">
          Mint
        </Button>
        <Button size="md" variant="outline">
          Repay
        </Button>
      </HStack>
    </Box>
  );
}

export default VaultsComponent;
