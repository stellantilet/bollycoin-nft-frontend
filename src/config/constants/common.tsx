import { NetworkId } from "./types";

export const BlockNativeAPIKey = process.env.REACT_APP_BLOCK_NATIVE_API_KEY;
export const BlockNetworkId = (parseInt(
  process.env.REACT_APP_BLOCK_NETWORK_ID as string,
  10
) + 0) as NetworkId;

export const NetworkRPC = {
  [NetworkId.BscTestnet]: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  [NetworkId.Rinkeby]:
    "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
};

export const OpenSeasCollectionURL = {
  [NetworkId.BscTestnet]: "https://testnets.opensea.io/assets/letscollect",
  [NetworkId.Rinkeby]: "https://testnets.opensea.io/assets/letscollect",
};
