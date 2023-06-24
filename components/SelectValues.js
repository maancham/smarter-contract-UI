import { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { Flex, Input, FormControl, FormLabel } from "@chakra-ui/react";

const InputRow = ({ handleInputChange }) => {
  return (
    <Flex width="100%" justifyContent="space-between">
      <FormControl id="input-1" maxW="45%">
        <FormLabel>Input 1</FormLabel>
        <Input
          placeholder="Enter value for Input 1"
          onChange={(e) => handleInputChange(e, 1)}
        />
      </FormControl>
      <FormControl id="input-2" maxW="45%">
        <FormLabel>Input 2</FormLabel>
        <Input
          placeholder="Enter value for Input 2"
          onChange={(e) => handleInputChange(e, 2)}
        />
      </FormControl>
    </Flex>
  );
};

let callInProgress = false;
const explorerLinks = [];

const SelectChains = () => {
  const [selectedChain, setSelectedChain] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue1, setInputValue1] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);
  const [serverResponse, setServerResponse] = useState([]);

  const scrollRef = useRef(null);
  useEffect(() => {
    // Scroll to the bottom whenever the serverResponse state updates
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [serverResponse]);

  const handleRadioChange = (value) => {
    setSelectedChain(value);
  };

  const handleInputChange = (e, inputNumber) => {
    const value = e.target.value;
    if (inputNumber === 1) {
      setInputValue1(value);
    } else if (inputNumber === 2) {
      setInputValue2(value);
    }
  };

  const handleCall = () => {
    let operatorValue;
    if (selectedChain === "add") {
      operatorValue = 0;
    } else if (selectedChain === "subtract") {
      operatorValue = 1;
    } else if (selectedChain === "multiply") {
      operatorValue = 2;
    }

    fetch("https://smarter-server.onrender.com/runScript", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        origin: "alfajores",
        operator: operatorValue,
        first: parseInt(inputValue1),
        second: parseInt(inputValue2),
      }),
    })
      .then((response) => response.body)
      .then((body) => {
        const reader = body.getReader();
        let received = "";
        callInProgress = true;

        function processResult(result) {
          if (result.done) {
            callInProgress = false;
            setShowPopup(true);
            return;
          }
          const chunk = new TextDecoder("utf-8").decode(result.value);
          received += chunk;

          // Split the received text by newlines
          const lines = received.split("\n");

          lines.forEach((line) => {
            // Check if the line contains a link
            const linkRegex = /(https?:\/\/[^\s]+)/g;
            const matches = line.match(linkRegex);
            if (matches) {
              // Extract the link and add it to the explorerLinks list
              matches.forEach((match) => {
                explorerLinks.push(match);
              });
            }
          }); // <-- Add closing parenthesis here

          // Append each line to the server response state
          setServerResponse((prevResponse) => [...prevResponse, ...lines]);

          // Process the remaining text
          const lastLine = lines.pop();
          received = lastLine || "";

          return reader.read().then(processResult);
        }

        return reader.read().then(processResult);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const isDeployDisabled = selectedChain === null || callInProgress;

  return (
    <VStack
      align="left"
      width="60%"
      margin="0 auto"
      marginTop="7rem"
      padding="1rem"
      bg="white"
      boxShadow="md"
      spacing={4}
    >
      <Box fontSize="xl" fontWeight="bold" marginBottom="1rem">
        Choose Operator and Values:
      </Box>
      <RadioGroup
        width="80%"
        onChange={handleRadioChange}
        value={selectedChain}
      >
        <HStack spacing={8}>
          <Radio value="add">
            <Image src="/add.png" alt="Add Logo" width={50} height={50} />
            Add
          </Radio>
          <Radio value="multiply">
            <Image
              src="/multiple.png"
              alt="Multiple Logo"
              width={50}
              height={50}
            />
            Multiple
          </Radio>
          <Radio value="subtract">
            <Image
              src="/subtract.png"
              alt="Subtract Logo"
              width={50}
              height={50}
            />
            Subtract
          </Radio>
        </HStack>
      </RadioGroup>
      <InputRow handleInputChange={handleInputChange} />
      <Button
        colorScheme="blue"
        isDisabled={isDeployDisabled}
        onClick={handleCall}
      >
        Call
      </Button>

      <hr></hr>

      <div
        style={{
          height: "200px",
          overflowY: "scroll",
          backgroundColor: "black",
          color: "white",
          padding: "8px",
        }}
      >
        {serverResponse.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        <div ref={scrollRef} />
      </div>

      {showPopup && (
        <div>
          <Box fontSize="xl" fontWeight="bold" marginBottom="1rem">
            Results:
          </Box>

          <Text>Origin Chain to Remote:</Text>
          {!callInProgress && explorerLinks[0] && (
            <a
              href={explorerLinks[0]}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Hyperlane Explorer First Link
            </a>
          )}

          <Text>Remote Chain Back to Origin:</Text>
          {!callInProgress && explorerLinks[1] && (
            <a
              href={explorerLinks[1]}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Hyperlane Explorer Second Link
            </a>
          )}
        </div>
      )}

      {/* {showPopup && (
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
      )} */}
    </VStack>
  );
};

export default SelectChains;
