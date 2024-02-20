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
  Grid,
Stat,
  StatNumber,
  StatGroup,
  HStack,
  GridItem,
  Icon,
  IconButton,
  Tooltip,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { SearchIcon, InfoIcon } from '@chakra-ui/icons';

// Custom SVG icon component
const CustomMarketIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="20px" height="20px">
    <path d="M5 3L19 3L12 18L5 3Z" fill="currentColor" />
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
      <Grid templateColumns="repeat(7, 1fr)" gap={6} mb={3} alignItems="center">
        <Text fontWeight="bold">Markets</Text>
        <Text fontWeight="bold">Debt</Text>
        <Text fontWeight="bold">Collateral</Text>
        <Text fontWeight="bold">Collateral ratio</Text>
        <Flex align="center">
          <Text fontWeight="bold">Price</Text>
          <Tooltip label="Current Price" aria-label="A tooltip">
            <IconButton
              aria-label="Current price info"
              icon={<InfoIcon />}
              size="xs"
              variant="ghost"
              ml={2}
            />
          </Tooltip>
        </Flex>
        <Flex align="center">
          <Text fontWeight="bold">APY</Text>
          <Tooltip label="Annual Percentage Yield" aria-label="A tooltip">
            <IconButton
              aria-label="APY info"
              icon={<InfoIcon />}
              size="xs"
              variant="ghost"
              ml={2}
            />
          </Tooltip>
        </Flex>
        <Flex align="center">
          <Text fontWeight="bold">Remaining</Text>
          <Tooltip label="Remaining Collateral" aria-label="A tooltip">
            <IconButton
              aria-label="Remaining collateral info"
              icon={<InfoIcon />}
              size="xs"
              variant="ghost"
              ml={2}
            />
          </Tooltip>
        </Flex>
      </Grid>
      {/* Data rows follow here, same as before */}
<Grid templateColumns="repeat(7, 1fr)" gap={6} alignItems="center">
  <GridItem>
    <HStack>
      <Icon as={CustomMarketIcon} />
      <Text>SOL</Text>
    </HStack>
  </GridItem>
  <GridItem>
    <Text>0</Text>
  </GridItem>
  <GridItem>
    <Text>0</Text>
  </GridItem>
  <GridItem>
    <Text>N/A</Text>
  </GridItem>
  <GridItem>
    <StatGroup>
      <Stat>
        <StatNumber>109.58</StatNumber>
        <Text>Current</Text>
      </Stat>
      <Stat>
        <StatNumber>N/A</StatNumber>
        <Text>Liquidation</Text>
      </Stat>
    </StatGroup>
  </GridItem>
  <GridItem>
    <Text>N/A% Borrow</Text>
  </GridItem>
  <GridItem>
    <Progress value={90.36} size="sm" colorScheme="green" />
  </GridItem>
</Grid>
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
