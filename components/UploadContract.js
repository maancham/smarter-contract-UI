import { VStack, Box, Text, Textarea, Button } from "@chakra-ui/react";

const UploadContract = () => {
  const token_name = 'YourToken'; // substitute with the real token name
  const X = 10; // substitute with the real value
  const Y = 5; // substitute with the real value
  const Z = X - Y; // calculate the difference

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
        Result
      </Box>
      <Text>Your function was supposed to run on</Text>
      <Text>Your function has been run on chain</Text>
      <Text>Without smarter contract: {X} {token_name}</Text>
      <Text>With smarter contract: {Y} {token_name}</Text>
      <Text>You saved {Z} {token_name}</Text>
    </VStack>
  );
};

export default UploadContract;
