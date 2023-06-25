import { useState } from 'react';
import { Box, Button, Checkbox, HStack, VStack, Spinner } from "@chakra-ui/react";
import Image from 'next/image';

const SelectChains = () => {
  const [selectedChains, setSelectedChains] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckboxChange = (value) => {
    if (selectedChains.includes(value)) {
      setSelectedChains(selectedChains.filter((chain) => chain !== value));
    } else {
      setSelectedChains([...selectedChains, value]);
    }
  };

  const handleDeploy = () => {
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

  const isDeployDisabled = selectedChains.length === 0;

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
      <HStack spacing={12} marginTop="5rem" padding="1rem">
        <Checkbox value="fantom" onChange={() => handleCheckboxChange('Fantom')}>
          <Image src="/fantom.png" alt="Fantom Logo" width={50} height={50} />
          Fantom
        </Checkbox>
        <Checkbox value="avalanche" onChange={() => handleCheckboxChange('Avalanche')}>
          <Image src="/avalanche.png" alt="Avalanche Logo" width={50} height={50} />
          Avalanche
        </Checkbox>
        <Checkbox value="polygon" onChange={() => handleCheckboxChange('Polygon')}>
          <Image src="/polygon.png" alt="Polygon Logo" width={50} height={50} />
          Polygon
        </Checkbox>
      </HStack>
      <Button colorScheme="purple" isDisabled={isDeployDisabled} onClick={handleDeploy}>
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

export default SelectChains;