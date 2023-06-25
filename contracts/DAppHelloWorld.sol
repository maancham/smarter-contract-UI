pragma solidity ^0.8.0;

import "./IGlueBase.sol";

contract HelloWorldContract is BaseContract {
    function sayHello() public pure returns (string memory) {
        return "Hello, World!";
    }
}
