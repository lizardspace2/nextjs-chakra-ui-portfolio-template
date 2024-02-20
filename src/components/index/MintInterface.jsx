import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  NumberInput,
  NumberInputField,
  Progress,
  Select,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  HStack,
  useToast,
} from '@chakra-ui/react';

function MintInterface() {
  const inputStyle = { borderColor: 'gray.300' };
  const buttonStyle = { bg: 'gray.200', color: 'black', _hover: { bg: 'gray.300' }, _active: { bg: 'gray.400' } };
  const statStyle = { bg: 'gray.50', p: 3, borderRadius: 'md', textAlign: 'center' };
  const progressBarStyle = { bg: 'gray.200', borderRadius: 'md' };
  const [isMint, setIsMint] = useState(true);
  const [depositAmount, setDepositAmount] = useState(0);
  const [mintAmount, setMintAmount] = useState(0);
  const [maxDeposit, setMaxDeposit] = useState(100); // dummy value
  const [maxMint, setMaxMint] = useState(50); // dummy value
  const toast = useToast();

  useEffect(() => {
    // Fetch the max deposit and mint values from your backend or blockchain
    // setMaxDeposit(fetchedMaxDeposit);
    // setMaxMint(fetchedMaxMint);
  }, []);

  const handleDepositChange = (value) => {
    if (parseFloat(value) > maxDeposit) {
      toast({
        title: 'Error',
        description: `Maximum deposit amount is ${maxDeposit}`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setDepositAmount(value);
  };

  const handleMintChange = (value) => {
    if (parseFloat(value) > maxMint) {
      toast({
        title: 'Error',
        description: `Maximum mint amount is ${maxMint}`,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setMintAmount(value);
  };

  const handlePercentageClick = (type, percentage) => {
    const value = type === 'deposit' ? maxDeposit * (percentage / 100) : maxMint * (percentage / 100);
    if (type === 'deposit') {
      setDepositAmount(value);
    } else {
      setMintAmount(value);
    }
  };

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
        <ButtonGroup isAttached>
          <Button {...buttonStyle} variant={isMint ? 'solid' : 'ghost'} onClick={handleToggle}>
            Mint
          </Button>
          <Button {...buttonStyle} variant={!isMint ? 'solid' : 'ghost'} onClick={handleToggle}>
            Repay
          </Button>
        </ButtonGroup>
      </Flex>

      <VStack spacing={4} align="stretch">
        <Box>
          <Text fontSize="lg" fontWeight="bold">Deposit</Text>
          <HStack spacing={2}>
            <NumberInput defaultValue={0} min={0} max={maxDeposit} value={depositAmount} onChange={handleDepositChange}>
              <NumberInputField />
            </NumberInput>
            <Select placeholder="SOL">
              {/* Replace with actual options */}
            </Select>
            <ButtonGroup size="sm" isAttached variant="outline">
              {['25', '50', '75', '100'].map((percent) => (
                <Button key={percent} onClick={() => handlePercentageClick('deposit', parseInt(percent, 10))}>
                  {percent}%
                </Button>
              ))}
            </ButtonGroup>
          </HStack>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold">Mint</Text>
          <HStack spacing={2}>
            <NumberInput defaultValue={0} min={0} max={maxMint} value={mintAmount} onChange={handleMintChange}>
              <NumberInputField />
            </NumberInput>
            <Select placeholder="PAI">
              {/* Replace with actual options */}
            </Select>
            <ButtonGroup size="sm" isAttached variant="outline">
              {['25', '50', '75', '100'].map((percent) => (
                <Button key={percent} onClick={() => handlePercentageClick('mint', parseInt(percent, 10))}>
                  {percent}%
                </Button>
              ))}
            </ButtonGroup>
          </HStack>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold">Collateral Ratio</Text>
          <Progress value={20} size="sm" {...progressBarStyle} />
        </Box>

        <StatGroup>
          <HStack spacing={4}>
            <Stat {...statStyle}>
              <StatLabel>Vault</StatLabel>
              <StatNumber>{stats.vault}</StatNumber>
            </Stat>
            <Stat {...statStyle}>
              <StatLabel>Borrow APY</StatLabel>
              <StatNumber>{stats.borrowAPY}</StatNumber>
            </Stat>
            <Stat {...statStyle}>
              <StatLabel>Debt (PAI)</StatLabel>
              <StatNumber>{stats.debtPAI}</StatNumber>
            </Stat>
          </HStack>

          <HStack spacing={4}>
            <Stat {...statStyle}>
              <StatLabel>Collateral (SOL)</StatLabel>
              <StatNumber>{stats.collateralSOL}</StatNumber>
            </Stat>
            <Stat {...statStyle}>
              <StatLabel>Liquidation Price (SOL)</StatLabel>
              <StatNumber>{stats.liquidationPrice}</StatNumber>
            </Stat>
            <Stat {...statStyle}>
              <StatLabel>Current Price (SOL)</StatLabel>
              <StatNumber>{stats.currentPriceSOL}</StatNumber>
            </Stat>
          </HStack>
        </StatGroup>

        <Button colorScheme="green" size="lg">
          Connect Wallet
        </Button>
      </VStack>
    </Box>
  );
}

export default MintInterface;
