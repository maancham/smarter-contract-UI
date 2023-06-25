# Glue
Cross-chain smart contract deploying system based on Axelar

## Inspiration
Our motivation for this project comes from our desire to simplify the management of dApp smart contracts on various chains. As developers, we understand the importance of reaching a diverse user base across different chains. But, it's quite challenging and tiresome to build dApps on multiple chains, each with unique rules, structures, and languages, especially when changes need to be implemented.

## What It Does
Glue introduces abstraction contracts on target chains. Inheriting from AxelarGateway, these contracts allow developers to extend the reach of their own contracts across multiple blockchains. End users, who own assets on their preferred chains, can call these Glue abstractions directly, only needing to pass the dApp name and the desired function. Glue capitalizes on Axelar's General Message Passing to route the user's payload back to the proxy contract on the primary chain. This proxy contract acts like a master controller, deciphering each user call from the abstraction and directing it to the respective main contracts of the dApp.

## How We Built It
Our prototype was created starting with the cloning of Axelar's open-source repository, leveraging the provided examples. The call-contract example served as a basic blueprint for deploying a contract on all the chains involved. This method was also used to deploy the gateways across all chains.

Subsequently, we set up the Proxy, using a different contract that could be remotely called by the gateways. The Proxy maintains a mapping of main code publishers' IDs and their most recent associated contracts. When the gateway forwards an end-user's command to the Proxy, the Proxy triggers the pertinent function in the main code. If there is an update to the code by the developer, the 'registerMainCode' function in the Proxy needs to be invoked for the mapping to be updated accordingly.

## Challenges We Ran Into
- **Architecture Design**: Designing a scalable, efficient architecture that optimizes gas usage and provides a satisfactory user experience is challenging, particularly when ensuring interoperability between different chains.
- **Learning Axelar Documentation**: Understanding the features and functionalities provided by Axelar required deep diving into their documentation. Concepts such as interchain accounts, message passing, and cross-chain transactions presented a learning curve.
- **Smart Contract Deployment**: Careful handling of contract compilation, deployment, and management is needed to allow users to upload and deploy their own smart contracts across different blockchain platforms, while ensuring security, compatibility, and adherence to each platform's requirements.
- **Cross-Chain Communication**: It is complex to facilitate communication between different chains while maintaining security and trust. This process requires a thorough understanding of the protocols and technologies involved.
- **User Experience**: It is crucial to provide a seamless and intuitive user experience for user adoption.
- **Security and Auditing**: It is vital to ensure the security of cross-chain transactions, manage private keys, and implement proper auditing mechanisms to protect user assets and maintain trust in the platform.
- **Testing and Deployment**: Thorough testing and smooth deployment across various environments and infrastructure can be demanding.

## Accomplishments That We're Proud Of
- Designed the dApp experience (core functionality) in one day.
- Designed our proxy contract on three chains.
- Designed our abstraction contracts on three different chains.
- Planned the implementation of the first cross-chain killer app on top of Glue-core.

## What We Learned
Our journey started with exploring the Axelar example repository. Despite our efforts, we encountered challenges understanding its functionalities. Specifically, the GasEstimator feature from the initial contract presented issues when expanding the process to accommodate more than three contract calls.

## What's Next For Glue
We have a robust roadmap planned for Glue:
**Hackathon**
- dApp developer account management (Auth).
- Main contract deployment (dApp dev experience).
- Abstraction contracts (support for Fantom, Avalanche, and Ethereum).
- 
**Phase 1**
- Release Glue Node.Js SDK.
- Expand supported chains.

**Phase 2**
- Launch social media channels (Twitter).
- Expand Community (Discord).
- Soft Launch the first cross-chain killer app, built on top of Glue-core.

**Phase 3**
- Auditing abstraction and proxy contracts.
- Improvement on Gas fee (smart contracts).
