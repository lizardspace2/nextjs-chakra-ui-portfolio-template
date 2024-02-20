import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Button,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

const UnstakedBalance = ({ logoSrc, name, apr, token, amount, onWithdraw }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const headerTextColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box borderWidth="1px" borderRadius="lg" borderColor={borderColor} p={5} mb={3}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th textAlign="center">Pool</Th>
            <Th textAlign="center">APY</Th>
            <Th textAlign="center">Balance</Th>
            <Th textAlign="center">Share</Th>
            <Th textAlign="center">Pool Balance</Th>
            <Th textAlign="center">Withdraw</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td textAlign="center">
              <Image src={logoSrc} boxSize="50px" />
            </Td>
            <Td textAlign="center" fontWeight="semibold">{name}</Td>
            <Td textAlign="center" fontWeight="semibold">{apr}%</Td>
            <Td textAlign="center">N/A {token}</Td>
            <Td textAlign="center">{amount} SOL</Td>
            <Td textAlign="center">
              <Button colorScheme="red" onClick={onWithdraw}>Withdraw</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default UnstakedBalance;
