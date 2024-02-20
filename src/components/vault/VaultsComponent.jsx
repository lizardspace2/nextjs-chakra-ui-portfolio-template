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
      <Grid templateColumns="repeat(7, 1fr)" gap={6} mb={3}>
        <Text fontWeight="bold">Markets</Text>
        <Text fontWeight="bold">Debt</Text>
        <Text fontWeight="bold">Collateral</Text>
        <Text fontWeight="bold">Collateral ratio</Text>
        <Text fontWeight="bold">Price</Text>
        <Text fontWeight="bold">APY</Text>
        <Text fontWeight="bold">Remaining</Text>
      </Grid>
      {/* Repeat this GridItem structure for each data row */}
      <Grid templateColumns="repeat(7, 1fr)" gap={6} alignItems="center">
        <GridItem>
          <Flex align="center">
            <Icon as={CustomMarketIcon} color="green.500" mr={2} />
            <Text>SOL</Text>
            <Text ml={2}>PAI</Text>
          </Flex>
        </GridItem>
        <GridItem>0</GridItem>
        <GridItem>0</GridItem>
        <GridItem>
          <Progress value={150} size="sm" colorScheme="green" width="100%" />
        </GridItem>
        <GridItem>
          <Flex align="center">
            <Text>109.58</Text>
            <Tooltip label="Current Price" aria-label="A tooltip">
              <IconButton
                aria-label="Current price info"
                icon={<InfoIcon />}
                size="xs"
                variant="ghost"
              />
            </Tooltip>
          </Flex>
        </GridItem>
        <GridItem>
          <Tooltip label="Annual Percentage Yield" aria-label="A tooltip">
            <IconButton
              aria-label="APY info"
              icon={<InfoIcon />}
              size="xs"
              variant="ghost"
            />
          </Tooltip>
        </GridItem>
        <GridItem>
          <Tooltip label="Remaining Collateral" aria-label="A tooltip">
            <IconButton
              aria-label="Remaining collateral info"
              icon={<InfoIcon />}
              size="xs"
              variant="ghost"
            />
          </Tooltip>
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
