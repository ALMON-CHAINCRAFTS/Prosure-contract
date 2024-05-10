import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const LISK_RPC_URL = process.env.LISK_RPC_URL || "";
const API_KEY = process.env.API_KEY || "";

type HttpNetworkAccountsUserConfig = any;
module.exports = {
  solidity: "0.8.24",
  networks: {
    // for testnet
    "lisk-sepolia": {
      url: LISK_RPC_URL,
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
  },
  sourcify: {
    enabled: true,
  },

  etherscan: {
    apiKey: {
      "lisk-sepolia": "123",
    },
    customChains: [
      {
        network: "lisk-sepolia",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com",
        },
      },
    ],
  },
};
