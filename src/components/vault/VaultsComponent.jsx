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
  StatNumber,
  StatGroup,
  HStack,
  Icon,
  IconButton,
  Tooltip,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { SearchIcon, InfoIcon } from '@chakra-ui/icons';

// Custom SVG icon component (example)
const CustomMarketIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="20px" height="20px">
    {/* Custom SVG path here */}
    <path d="M5 3L19 3L12 18L5 3Z" fill="currentColor"/>
  </svg>
);

function VaultsComponent() {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const buttonBg = useColorModeValue('green.500', 'green.200');
  const toast = useToast();

  // Function to handle button clicks
  const handleButtonClick = () => {
    toast({
      title: 'Action performed.',
      description: "We've performed the requested action.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} bg={useColorModeValue('white', 'gray.800')}>
      <Flex justify="space-between" align="center" mb={5}>
        <Text fontSize="2xl" fontWeight="bold" color={useColorModeValue('gray.700', 'white')}>Vaults</Text>
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
        {/* Other Stat components */}
        <Stat>
          <Flex align="center">
            <StatNumber>109.58</StatNumber>
            <Tooltip label="Current Price" aria-label="A tooltip">
              <IconButton
                aria-label="Current price info"
                icon={<InfoIcon />}
                size="xs"
                variant="ghost"
              />
            </Tooltip>
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
            <StatNumber>N/A</StatNumber>
            <Tooltip label="Annual Percentage Yield" aria-label="A tooltip">
              <IconButton
                aria-label="APY info"
                icon={<InfoIcon />}
                size="xs"
                variant="ghost"
              />
            </Tooltip>
          </Flex>
        </Stat>
        <Stat>
          <Flex align="center">
            <StatNumber>N/A</StatNumber>
            <Tooltip label="Remaining Collateral" aria-label="A tooltip">
              <IconButton
                aria-label="Remaining collateral info"
                icon={<InfoIcon />}
                size="xs"
                variant="ghost"
              />
            </Tooltip>
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
        <Button colorScheme="green" size="md" variant="solid" onClick={handleButtonClick} _hover={{ bg: buttonBg }}>
          Mint
        </Button>
        <Button size="md" variant="outline" onClick={handleButtonClick}>
          Repay
        </Button>
      </HStack>
    </Box>
  );
}

export default VaultsComponent;
