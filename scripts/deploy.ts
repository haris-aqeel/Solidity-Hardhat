import { ethers } from "hardhat";
import { Bytes, Bytes__factory } from "../typechain-types";

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = ethers.utils.parseEther("1");

  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log("Lock with 1 ETH deployed to:", lock.address);
  const Bytes: Bytes__factory = await ethers.getContractFactory("Bytes");
  const bytes: Bytes = await Bytes.deploy();
  console.log("Bytes Animal ====> ", await bytes.animal());
  console.log("Bytes Alphabets ====> ", await bytes.alphabets());
  console.log("get Second Index", await bytes.getCharacterAnimal(1));
  await bytes.pushAlphabets();
  console.log("Bytes Alphabets ====> ", await bytes.alphabets());
  console.log("get Second Index", await bytes.getAlphabet(3));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
