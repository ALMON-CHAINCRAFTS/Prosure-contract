import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "dotenv/config";

const RPC_URL = process.env.RPC_URL || "";
const API_KEY = process.env.API_KEY || "";

type HttpNetworkAccountsUserConfig = any;
module.exports = {
  solidity: "0.8.24",
  networks: {
    // for testnet
    rskTestnet: {
      url: RPC_URL,
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
  },
  sourcify: {
    enabled: true,
  },

  etherscan: {
    apiKey: {
      rskTestnet: API_KEY,
    },
    customChains: [
      {
        network: "rskTestnet",
        chainId: 31,
         urls: {
              apiURL: "https://rootstock-testnet.blockscout.com/api/",
              browserURL: "https://rootstock-testnet.blockscout.com/",
            },
      },
    ],
  },
};
