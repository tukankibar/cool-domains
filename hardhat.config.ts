import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

function transformPrivateKeyToAccount(key: string | undefined): string {
  if (key === undefined) {
    throw new Error("Account private key is not provided.");
  }

  return `0x${key}`;
}

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "testnet",
  networks: {
    testnet: {
      url: process.env.TESTNET_URL,
      accounts: [transformPrivateKeyToAccount(process.env.PRIVATE_KEY)],
    },
  },
};

export default config;
