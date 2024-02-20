import React from 'react';
import {
  Flex,
  Text,
  Button,
  Image,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';

const UnstakedBalance = ({ logoSrc, name, apr, token, amount, onWithdraw }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const headerTextColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} mb={3}>
      <Flex borderBottomWidth="1px" borderColor={borderColor} pb={2} mb={4} justify="space-between">
        <Text color={headerTextColor} flex="1" textAlign="center">Pool</Text>
        <Text color={headerTextColor} flex="1" textAlign="center">APY</Text>
        <Text color={headerTextColor} flex="1" textAlign="center">Balance</Text>
        <Text color={headerTextColor} flex="1" textAlign="center">Share</Text>
        <Text color={headerTextColor} flex="1" textAlign="center">Pool Balance</Text>
        <Text color={headerTextColor} flex="0.5" textAlign="center"></Text> {/* Empty for button */}
      </Flex>
      <Flex align="center" justify="space-between">
        <Image src={logoSrc} boxSize="50px" mr={3} flex="1" />
        <Text fontWeight="semibold" flex="1" textAlign="center">{name}</Text>
        <Text fontWeight="semibold" flex="1" textAlign="center">{apr}%</Text>
        <Text flex="1" textAlign="center">N/A {token}</Text>
        <Text flex="1" textAlign="center">N/A</Text>
        <Text flex="1" textAlign="center">{amount} SOL</Text>
        <Button colorScheme="red" flex="0.5" onClick={onWithdraw}>Withdraw</Button>
      </Flex>
    </Box>
  );
};

export default UnstakedBalance;
