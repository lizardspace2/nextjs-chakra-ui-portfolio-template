import React from 'react';
import {
  Flex,
  Text,
  Button,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

const UnstakedBalance = ({ logoSrc, name, apr, token, amount, onWithdraw }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Flex borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} align="center" justify="space-between" mb={3}>
      <Image src={logoSrc} boxSize="50px" mr={3} />
      <Text fontWeight="semibold">{name}</Text>
      <Text fontWeight="semibold">{apr}%</Text>
      <Text>N/A {token}</Text>
      <Text>N/A</Text>
      <Text>{amount} SOL</Text>
      <Button colorScheme="red" onClick={onWithdraw}>Withdraw</Button>
    </Flex>
  );
};

export default UnstakedBalance;
