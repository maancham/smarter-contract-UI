// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import { AxelarExecutable } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/executable/AxelarExecutable.sol';
import { IAxelarGateway } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGateway.sol';
import { IAxelarGasService } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IAxelarGasService.sol';
import { IERC20 } from '@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IERC20.sol';

contract GlueProxy is AxelarExecutable {
    string public value;
    string public sourceChain;
    string public sourceAddress;
    IAxelarGasService public immutable gasService;

    mapping(string => string) public mainCodes;
    mapping(string => string) public mainCodeChains;

    constructor(address gateway_, address gasReceiver_) AxelarExecutable(gateway_) {
        gasService = IAxelarGasService(gasReceiver_);
    }

    function registerMainCode(
        string calldata mainCodeID_,
        string calldata mainCodeAdr_,
        string calldata mainCodeChain_
    ) external payable {
        bytes memory temp;

        if (msg.value > 0) {
            gasService.payNativeGasForContractCall{ value: msg.value }(
                address(this),
                mainCodeChains[mainCodeID_],
                mainCodes[mainCodeID_],
                temp,
                msg.sender
            );
        }

        mainCodes[mainCodeID_] = mainCodeAdr_;
        mainCodeChains[mainCodeID_] = mainCodeChain_;
    }

    function _execute(
        string calldata sourceChain_,
        string calldata sourceAddress_,
        bytes calldata payload_
    ) internal override {
        sourceChain = sourceChain_;
        sourceAddress = sourceAddress_;
        string memory mainCodeId = abi.decode(payload_, (string));

        if (msg.value > 0) {
            gasService.payNativeGasForContractCall{ value: msg.value }(
                address(this),
                mainCodeChains[mainCodeId],
                mainCodes[mainCodeId],
                payload_,
                msg.sender
            );
        }

        gateway.callContract(mainCodeChains[mainCodeId], mainCodes[mainCodeId], payload_);
    }
}
