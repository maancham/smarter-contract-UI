import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const { ethereum } = typeof window !== "undefined" ? window : {};

const AppContext = createContext();

const Header = () => {
  const router = useRouter();

  const [account, setAccount] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [error, setError] = useState("");

  const checkEthereumExists = () => {
    if (!ethereum) {
      setError("Please Install MetaMask.");
      return false;
    }
    return true;
  };

  const getConnectedAccounts = async () => {
    setError("");
    try {
      const accounts = await ethereum.request({
        method: "eth_accounts",
      });
      console.log(accounts);
      setAccount(accounts[0]);
    } catch (err) {
      setError(err.message);
    }
  };

  const connectWallet = async () => {
    setError("");
    if (checkEthereumExists()) {
      try {
        if (account) {
          // Disconnect the wallet
          setAccount("");
        } else {
          // Connect the wallet
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log(accounts);
          setAccount(accounts[0]);
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    if (checkEthereumExists()) {
      ethereum.on("accountsChanged", getConnectedAccounts);
      getConnectedAccounts();
    }
    return () => {
      if (checkEthereumExists()) {
        ethereum.removeListener("accountsChanged", getConnectedAccounts);
      }
    };
  }, []);

  useEffect(() => {
    // Update the publicKey when the account changes
    setPublicKey(account || "");
  }, [account]);

  const handleClick = (route) => {
    router.push(route);
  };

  return (
    <AppContext.Provider value={{ account, publicKey, connectWallet, error }}>
      <Flex
        as="header"
        align="center"
        padding="1.5rem"
        color="white"
        bgGradient="linear(to-r, blue.400, blue.700)"
      >
        <Box
          onClick={() => handleClick("/")}
          cursor="pointer"
          display="flex"
          alignItems="center"
        >
          <img
            src="/logo.png"
            alt="Logo"
            width={45}
            height={45}
            style={{ marginRight: "0.5rem" }}
          />
          <span>Smarter Contract</span>
        </Box>
        <Box marginLeft="auto">
          <Link onClick={() => handleClick("/team")} marginRight="1.5rem">
            Meet the Team
          </Link>
          <Button onClick={connectWallet} colorScheme="teal">
            {account
              ? `Disconnect Wallet (${publicKey.slice(0, 5)})`
              : "Connect Wallet"}
          </Button>
        </Box>
      </Flex>
    </AppContext.Provider>
  );
};

export default Header;
export { AppContext };
