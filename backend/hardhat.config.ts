import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    harmonie: {
      url: "https://harmonie-endpoint-02.allfeat.io",
      accounts: ["0xb7aaf66adbac0eb121152747b42901d5aa4d6ccc00ee0fa29f89942dc0f34b90"],
      chainId: 441,
    }
  }
};

export default config;
