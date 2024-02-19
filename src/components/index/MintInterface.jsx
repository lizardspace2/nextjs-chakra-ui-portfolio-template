import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  NumberInput,
  NumberInputField,
  Progress,
  Select,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Switch,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';

function MintInterface() {
  // State for toggling between Mint and Repay
  const [isMint, setIsMint] = useState(true);

  // Replace these functions with actual state management logic
  const handleDepositChange = (value) => console.log('Deposit:', value);
  const handleMintChange = (value) => console.log('Mint:', value);
  const handleToggle = () => setIsMint(!isMint);

  // Dummy data for stats, replace with actual data
  const stats = {
    vault: 'SOL-PAI',
    borrowAPY: 'N/A',
    debtPAI: 0,
    collateralSOL: 0,
    liquidationPrice: 'N/A',
    currentPriceSOL: 112.15,
  };

  return (
    <Box p={4} bg="white" boxShadow="md" borderRadius="lg" maxWidth="sm" mx="auto">
      <Flex justify="center" pb={4}>
        <Button variant={isMint ? 'solid' : 'ghost'} onClick={handleToggle}>
          Mint
        </Button>
        <Switch isChecked={!isMint} onChange={handleToggle} />
        <Button variant={!isMint ? 'solid' : 'ghost'} onClick={handleToggle}>
          Repay
        </Button>
      </Flex>

      <VStack spacing={4} align="stretch">
        <Box>
          <Text mb={2}>I want to deposit</Text>
          <HStack>
            <NumberInput defaultValue={0} min={0} onChange={handleDepositChange}>
              <NumberInputField />
            </NumberInput>
            <Select placeholder="SOL">
              {/* Replace with actual options */}
            </Select>
          </HStack>
        </Box>

        <Box>
          <Text mb={2}>To mint</Text>
          <HStack>
            <NumberInput defaultValue={0} min={0} onChange={handleMintChange}>
              <NumberInputField />
            </NumberInput>
            <Select placeholder="PAI">
              {/* Replace with actual options */}
            </Select>
          </HStack>
        </Box>

        <Box>
          <Text mb={2}>Collateral ratio</Text>
          <Progress value={20} size="sm" colorScheme="green" />
        </Box>

        <StatGroup>
          <Stat>
            <StatLabel>Vault</StatLabel>
            <StatNumber>{stats.vault}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Borrow APY</StatLabel>
            <StatNumber>{stats.borrowAPY}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Debt (PAI)</StatLabel>
            <StatNumber>{stats.debtPAI}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Collateral (SOL)</StatLabel>
            <StatNumber>{stats.collateralSOL}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Liquidation price (SOL)</StatLabel>
            <StatNumber>{stats.liquidationPrice}</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Current price (SOL)</StatLabel>
            <StatNumber>{stats.currentPriceSOL}</StatNumber>
          </Stat>
        </StatGroup>

        <Button colorScheme="green" size="lg">
          Connect Wallet
        </Button>
      </VStack>
    </Box>
  );
}

export default MintInterface;
