
import { useState } from 'react';
import { Box, Button, Radio, RadioGroup, HStack, VStack, Spinner } from "@chakra-ui/react";
import Image from 'next/image';
import { Flex, Input, FormControl, FormLabel } from "@chakra-ui/react";

const InputRow = () => {
  return (
    <Flex width="100%" justifyContent="space-between">
      <FormControl id="input-1" maxW="45%">
        <FormLabel>Input 1</FormLabel>
        <Input placeholder="Enter value for Input 1" />
      </FormControl>
      <FormControl id="input-2" maxW="45%">
        <FormLabel>Input 2</FormLabel>
        <Input placeholder="Enter value for Input 2" />
      </FormControl>
    </Flex>
  );
};

const SelectOprand = () => {
  const [selectedChain, setSelectedChain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleRadioChange = (value) => {
    setSelectedChain(value);
  };

  const handleCall = () => {
    //TODO: send the oprand 
    setIsLoading(true);

    // Simulate loading for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
      setShowPopup(true);
    }, 3000);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const isDeployDisabled = selectedChain === null;

  return (
    <VStack
      align="left"
      width="50%"
      margin="0 auto"
      marginTop="7rem"
      padding="1rem"
      bg="white"
      boxShadow="md"
      spacing={4}
    >
      <Box fontSize="xl" fontWeight="bold">
        Select destination chains
      </Box>
      <RadioGroup onChange={handleRadioChange} value={selectedChain}>
        <HStack spacing={12} marginTop="5rem" padding="1rem">
          <Radio value="fantom">
            <Image src="/fantom.png" alt="Fantom Logo" width={50} height={50} />
            Add
          </Radio>
          <Radio value="avalanche">
            <Image src="/avalanche.png" alt="Avalanche Logo" width={50} height={50} />
            Multiple
          </Radio>
          <Radio value="polygon">
            <Image src="/polygon.png" alt="Polygon Logo" width={50} height={50} />
            Subtract
          </Radio>
        </HStack>
        <InputRow></InputRow>
      </RadioGroup>
      <Button colorScheme="purple" isDisabled={isDeployDisabled} onClick={handleCall}>
        Deploy
      </Button>

      
      {isLoading && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="9999"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box textAlign="center">
            <Spinner size="xl" />
            <Box mt={4} color="white" fontSize="xl">
              Deploying contract on destination chains...
            </Box>
          </Box>
        </Box>
      )}

      {showPopup && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="9999"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box bg="white" p={8} borderRadius="md" textAlign="center">
            <Box fontSize="xl" fontWeight="bold" mb={4}>
              Your contract has been deployed to the following chains:
            </Box>
            <Box>{selectedChains.join(", ")}</Box>
            <Button colorScheme="purple" mt={4} onClick={handleClosePopup}>
              Close
            </Button>
          </Box>
        </Box>
      )}

    </VStack>
  );
};

export default SelectOprand;
