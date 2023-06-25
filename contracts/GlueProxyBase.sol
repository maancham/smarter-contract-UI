pragma solidity ^0.8.0;

import "./IGlueBase.sol";

contract ProxyContract is BaseContract {
    function execute(string memory dAppName, bytes memory data) public {
        address dAppAddress = dApps[dAppName];
        (bool success,) = dAppAddress.call(data);
        require(success, "External call failed");
    }
}
