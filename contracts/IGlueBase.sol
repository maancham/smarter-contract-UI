pragma solidity ^0.8.0;

contract BaseContract {
    mapping(string => address) public dApps;

    function registerDApp(string memory name, address contractAddress) public {
        dApps[name] = contractAddress;
    }
}
