import { ethers } from "ethers";

const privateKey =
  "0bc17dc1bc29603128cbda5331d26ec4a82a67d8a19e4ca7dd450cfba5b3937c";

export default async function CreateWallet() {
  let provider = ethers.getDefaultProvider();
  let wallet = new ethers.Wallet(privateKey);
  let address = await wallet.getAddress();

  console.log(address);
}
