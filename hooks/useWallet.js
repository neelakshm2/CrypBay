import "@ethersproject/shims";
import { ethers } from "ethers";

const dic_net = {
  name: "maticmum",
  chainId: 80001,
  _defaultProvider: (providers) => new providers.JsonRpcProvider("rpc-url"),
};

export const useWallet = async (privateKey) => {
  const provider = ethers.getDefaultProvider(dic_net);
  const wallet = new ethers.Wallet(privateKey, [provider]);
  return "";
};
