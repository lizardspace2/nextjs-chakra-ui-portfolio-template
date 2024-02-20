import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
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
  select,
} from '@chakra-ui/react';

function MintInterface() {
  const selectStyle = {
    bg: 'white',
    border: '2px',
    borderColor: 'gray.300',
    _hover: { borderColor: 'gray.400' },
    icon: <ChevronDownIcon />,
    iconSize: '1.5em',
    _focus: { boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)' }
  };
  const buttonStyle = { bg: 'gray.200', color: 'gray.800', _hover: { bg: 'gray.300' }, _active: { bg: 'gray.400' } };
  const statStyle = { bg: 'gray.50', p: 3, borderRadius: 'md', textAlign: 'center', color: 'gray.800' };
  const progressBarStyle = { bg: 'gray.200', borderRadius: 'md' };
  const [isMint, setIsMint] = useState(true);
  const [depositAmountPai, setDepositAmountPai] = useState(0);
  const [depositAmountSol, setDepositAmountSol] = useState(0);
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

  const handleDepositChangeSol = (value) => {
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
    setDepositAmountSol(value);
  };

  const handleDepositChangePai = (value) => {
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
    setDepositAmountPai(value);
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

  const buttonText = isMint ? 'I want to deposit' : 'Withdraw Collateral';
  const buttonTextBis = isMint ? 'To mint' : 'And repay';

  return (
    <Box p={4} bg="white" boxShadow="md" borderRadius="lg" maxWidth="sm" mx="auto">
      <Box mb={4}> {/* Add margin bottom to create space between the two sections */}
        <Flex justify="center" pb={4}>
          <ButtonGroup isAttached>
            <Button
              {...buttonStyle}
              variant={isMint ? 'solid' : 'ghost'}
              onClick={handleToggle}
              textDecoration={isMint ? 'underline' : 'none'}
              color={isMint ? 'green' : 'gray.800'}
            >
              Mint
            </Button>
            <Button
              {...buttonStyle}
              variant={!isMint ? 'solid' : 'ghost'}
              onClick={handleToggle}
              textDecoration={!isMint ? 'underline' : 'none'}
              color={!isMint ? 'green' : 'gray.800'}
              ml={5} // Add some left margin for spacing between the buttons
            >
              Repay
            </Button>
          </ButtonGroup>
        </Flex>
        <Flex justify="space-between" alignItems="center"> {/* Add Flex container */}
          <Text fontSize="lg" fontWeight="bold" color="gray.800">{buttonText}</Text>
          <ButtonGroup size="sm" isAttached variant="outline">
            {['25', '50', '75', '100'].map((percent) => (
              <Button key={percent} onClick={() => handlePercentageClick('mint', parseInt(percent, 10))} color="gray.800">
                {percent}%
              </Button>
            ))}
          </ButtonGroup>
        </Flex>

        <HStack spacing={2} mt={2}>
          <NumberInput defaultValue={0} min={0} max={maxDeposit} value={depositAmountSol} onChange={handleDepositChangeSol} color="gray.800">
            <NumberInputField color="gray.800" {...selectStyle} />
          </NumberInput>
          <Select placeholder="SOL" color="gray.800" {...selectStyle}>
            {/* Replace with actual options */}
          </Select>
        </HStack>
      </Box>
      <VStack spacing={4} align="stretch">
        <Box mb={4}>
          <Flex justify="space-between" alignItems="center"> {/* Add Flex container */}
            <Text fontSize="lg" fontWeight="bold" color="gray.800">{buttonTextBis}</Text>
            <ButtonGroup size="sm" isAttached variant="outline">
              {['25', '50', '75', '100'].map((percent) => (
                <Button key={percent} onClick={() => handlePercentageClick('deposit', parseInt(percent, 10))} color="gray.800">
                  {percent}%
                </Button>
              ))}
            </ButtonGroup>
          </Flex>
          <HStack spacing={2} mt={2}>
            <NumberInput defaultValue={0} min={0} max={maxDeposit} value={depositAmountPai} onChange={handleDepositChangePai} color="gray.800">
              <NumberInputField color="gray.800" {...selectStyle} />
            </NumberInput>
            <Select placeholder="PAI" color="gray.800" {...selectStyle}>
              {/* Replace with actual options */}
            </Select>
          </HStack>
        </Box>

        <Box>
          <Text fontSize="lg" fontWeight="bold" color="gray.800">Collateral Ratio</Text>
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
              <StatLabel>Collateral(SOL)</StatLabel>
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
