import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  HStack,
  Icon,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon, InfoIcon } from '@chakra-ui/icons';

function VaultsComponent() {
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5}>
      <Flex justify="space-between" align="center" mb={5}>
        <Text fontSize="xl" fontWeight="bold">Vaults</Text>
        <InputGroup maxWidth="300px">
          <InputRightElement pointerEvents="none" children={<SearchIcon color="gray.400" />} />
          <Input placeholder="Search" />
        </InputGroup>
      </Flex>
      <Flex wrap="wrap" justifyContent="space-between" align="center" mb={3}>
        <Text fontWeight="bold">Markets</Text>
        <Text fontWeight="bold">Debt</Text>
        <Text fontWeight="bold">Collateral</Text>
        <Text fontWeight="bold">Collateral ratio</Text>
        <Text fontWeight="bold">Price</Text>
        <Text fontWeight="bold">APY</Text>
        <Text fontWeight="bold">Remaining</Text>
      </Flex>
      <StatGroup>
        <Stat>
          <Flex align="center">
            <Icon viewBox="0 0 200 200" color="green.500" mr={2}>
              {/* Insert custom SVG icon here */}
            </Icon>
            <Text>SOL</Text>
            <Text ml={2}>PAI</Text>
          </Flex>
        </Stat>
        <Stat>
          <StatNumber>0</StatNumber>
        </Stat>
        <Stat>
          <StatNumber>0</StatNumber>
        </Stat>
        <Stat>
          <Flex align="center">
            <Progress value={150} size="sm" colorScheme="green" mr={2} />
            <Text>N/A</Text>
            <IconButton
              aria-label="Minimum collateral ratio info"
              icon={<InfoIcon />}
              size="xs"
              variant="ghost"
            />
          </Flex>
        </Stat>
        <Stat>
          <Flex align="center">
            <StatNumber>109.58</StatNumber>
            <IconButton
              aria-label="Current price info"
              icon={<InfoIcon />}
              size="xs"
              variant="ghost"
            />
          </Flex>
        </Stat>
        <Stat>
          <StatNumber>N/A</StatNumber>
        </Stat>
        <Stat>
          <StatNumber>N/A</StatNumber>
        </Stat>
      </StatGroup>
      <HStack spacing={4} mt={4} justifyContent="flex-end">
        <Progress value={90.36} size="sm" colorScheme="green" width="100px" />
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

