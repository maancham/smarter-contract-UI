'use strict';

const {
    utils: { deployContract },
} = require('@axelar-network/axelar-local-dev');

const GlueGateway = rootRequire('./artifacts/examples/evm/GlueGateway/GlueGateway.sol/GlueGateway.json');

async function deploy(chain, wallet) {
    console.log(`Deploying GlueGateway for ${chain.name}.`);
    chain.contract = await deployContract(wallet, GlueGateway, [chain.gateway, chain.gasService]);
    chain.wallet = wallet;
    console.log(`Deployed GlueGateway for ${chain.name} at ${chain.contract.address}.`);
}

async function execute(chains, wallet, options) {
    const args = options.args || [];
    const { source, destination, calculateBridgeFee } = options;

    // destination.name = "Ethereum"
    // destination.contract.address = 0x9d6a2D7a74BBAcBe1fC9c95a4C79363947b6ABCc

    const myDestination = {
        name: "Ethereum",
        contract: {
            address: "0x9d6a2D7a74BBAcBe1fC9c95a4C79363947b6ABCc"
        }
    };

    // const account = args[2] || `0x9d6a2D7a74BBAcBe1fC9c95a4C79363947b6ABCc`;

    const message = `{
        "className": "Battle",
        "funcName": "attack",
        "args": {
            "credit": 13,
            "opponent": "Taghi"
        }
    }`

    async function logValue() {
        console.log(`value at ${myDestination.name} is "${await destination.contract.value()}"`);
    }

    console.log('--- Initially ---');
    await logValue();

    const fee = await calculateBridgeFee(source, myDestination);

    const tx = await source.contract.setRemoteValue(myDestination.name, myDestination.contract.address, message, {
        value: fee,
    });
    await tx.wait();

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // while ((await destination.contract.value()) !== message) {
    //     await sleep(1000);
    // }

    console.log('--- After ---');
    await logValue();
}

module.exports = {
    deploy,
    execute,
};
