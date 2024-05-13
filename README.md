# Prosure Smart Contract Readme

Welcome to the Prosure smart contract repository! This document provides an overview of the Prosure, a decentralized insurance platform aimed at providing coverage for users affected by DeFi hacks. The smart contracts are deployed on the Ethereum blockchain.

## Architecture Design

Understanding this design is crucial to understanding the contracts!

![Prosure Architecture Design](./assests/contract-design.jpg)

## Smart Contract Addresses

- **MUSDT**: `0x934932752EDDeb6150e412E04D747bd974164A7d`
- **insure**: `0xFCB01529892bF14daCf90cc4B00184133cB07339`
- **Governance**: `0x054aC154CF6c757697B290fB7A824B6aC2262F82`

## Verify Contracts

NOTE: this contract addresses are deployed and verified on `Lisk` testnet.

- [Verify MUSDT Contract link](https://sepolia-blockscout.lisk.com/address/0x934932752EDDeb6150e412E04D747bd974164A7d?tab=read_contract)
- [Verify insure Contract link](https://sepolia-blockscout.lisk.com/address/0xFCB01529892bF14daCf90cc4B00184133cB07339?tab=write_contract)
- [Verify Governance Contract link](https://sepolia-blockscout.lisk.com/address/0x054aC154CF6c757697B290fB7A824B6aC2262F82?tab=read_contract)

## Frontend

Check out the Prosure frontend [here](https://prosure-frontend.vercel.app/).

![Frontend Page](./assests/landingPage.jpg)

![Dashboard Page](./assests/dashboard.jpg)

![Insure Page](./assests/InsurePage.jpg)

## About Prosure

Today, numerous users have been left without compensation for their losses as a result of the hundreds of DeFi hacks that have occurred over the past two years, costing billions of dollars.

The devastating impact of this DeFi hacks on unsuspecting users, resulting in financial losses, was the reason for creating Prosure. It was heartbreaking to see innocent people lose their hard-earned assets due to no fault of their own. This sparked a determination to develop a decentralized insurance platform that would safeguard users' assets and provide a safety net in the event of unforeseen events.

Prosure's mission is to protect users against losses in the event of an exploit. If the exploit occurs, the funds staked for the project and the covers purchased are given to all those who purchased cover and request claim on their insurance as compensation for their losses.

### What is Prosure?

Prosure is a decentralized insurance platform designed to protect users against losses resulting from DeFi hacks. It provides compensation to users who purchase insurance cover in the event of a hack.

### Who is a Risk Assessor?

A Risk Assessor is someone who creates stake to buy cover for a new protocol. They assess the risk level of a protocol and determine the amount of cover available.

### What is Risk Level?

The Risk Level represents the probability of a protocol being compromised, ranging from very low to very high. It determines the total cover a user can purchase.

### Staking/Cover Creation

Risk Assessors stake cover for a protocol based on its risk level. Users can also purchase cover for protocols staked on Prosure.

### Cover Claiming Process

Users can request cover in the event of a protocol compromise. The claim process involves Request Cover and Claim Cover stages, subject to DAO approval.

### Prosure Governance DAO

The Governance DAO is responsible for reviewing and approving claim requests. Members of the DAO vote on requests based on their deposited tokens, ensuring decentralized decision-making.

### Joining the DAO

To join the DAO, members must deposit a minimum of 10,000 tokens and maximum of 100,000 tokens. The voting power of each member is determined by their deposited amount.

### Voting on Request Cover Claims

DAO members have two days to review and vote on cover claim requests. Each member's vote carries weight based on their deposited tokens.

### Leaving the DAO

Members cannot leave the DAO within 30 days of joining.

## Calculations

Cover calculation formula:

    cover = ((RISK_LEVEL + 25) * (_coverPeriod * _coverAmount)) / ((PERCENTAGE) * YEAR)

Vote power calculation formula:

    VotePower = (joinAmount * 1e6) / DAOMinimumAmount

## Conclusion

Prosure provides a robust decentralized insurance solution for DeFi participants, ensuring protection against potential hacks. Feel free to explore the smart contracts and documentation for more details.

For more detailed documentation, please refer to the github repository.
