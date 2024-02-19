import { Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ConnectWalletButton = () => {
  const connectWallet = () => {
    // Implement your wallet connection logic here
    console.log("Connect wallet clicked!");
  };

  return (
    <Button
      onClick={connectWallet}
      variant="solid"
      colorScheme="teal"
      leftIcon={<ExternalLinkIcon />}
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectWalletButton;
