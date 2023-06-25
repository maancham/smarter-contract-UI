// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import { AxelarExecutable } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol';
import { IAxelarExecutable } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarExecutable.sol';
import { IAxelarGateway } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol';
import { IAxelarGasService } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol';
import { IERC20 } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IERC20.sol';

contract GlueGateway is AxelarExecutable {
    string public value;
    string public sourceChain;
    string public sourceAddress;
    IAxelarGasService public immutable gasService;
    string public proxy;
    string public proxyChain;

    constructor(address gateway_, address gasReceiver_,
            string memory proxyAdr_, string memory proxyChain_) AxelarExecutable(gateway_) {
        gasService = IAxelarGasService(gasReceiver_);
        proxy = proxyAdr_;
        proxyChain = proxyChain_;
    }

    function callProxy(
        string calldata value_
    ) external payable {
        bytes memory payload = abi.encode(value_);
        if (msg.value > 0) {
            gasService.payNativeGasForContractCall{ value: msg.value }(
                address(this),
                proxyChain,
                proxy,
                payload,
                msg.sender
            );
        }
        gateway.callContract(proxyChain, proxy, payload);
    }
}
