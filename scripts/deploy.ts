import { ethers } from "hardhat";

const topTokenHolders = [
  {
    tokenName : "USDT",
    tokenAddress : "0xdac17f958d2ee523a2206206994597c13d831ec7",
    limit : 1
  },
]

async function main() {
  topTokenHolders.forEach(async e => {
    const url = `https://api.ethplorer.io/getTopTokenHolders/${e.tokenAddress}?apiKey=freekey&limit=${e.limit}`;
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(`The highest holder of ${e.tokenName} is ${data.holders[0].address} with ${data.holders[0].balance} balance`);
  } );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
