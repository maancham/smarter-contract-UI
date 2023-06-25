// components/UploadContract.js
import { Box, Button, Input, VStack } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

const UploadContract = () => {
  return (
    <VStack
      align="left"
      width="50%"
      margin="0 auto"
      marginTop="5rem"
      padding="1rem"
      bg="white"
      boxShadow="md"
      spacing={4}
    >
      <Box fontSize="xl" fontWeight="bold">
        Upload your contract
      </Box>
      <Textarea placeholder="Paste your [Solidity] contract code here" size="md" />
      <Button colorScheme="purple">Upload</Button>
    </VStack>
  );
};

export default UploadContract;