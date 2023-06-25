pragma solidity ^0.8.0;

contract AbstractionContract {
    address public proxyContractAddress;

    constructor(address _proxyContractAddress) {
        proxyContractAddress = _proxyContractAddress;
    }

    function execute(string memory dAppName, bytes memory data) public {
        (bool success,) = proxyContractAddress.call(abi.encodeWithSignature("execute(string,bytes)", dAppName, data));
        require(success, "External call failed");
    }
}
