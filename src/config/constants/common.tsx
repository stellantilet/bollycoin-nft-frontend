import { NetworkId } from "./types";

export const BlockNativeAPIKey = process.env.REACT_APP_BLOCK_NATIVE_API_KEY;
export const BlockNetworkId =
  parseInt(process.env.REACT_APP_BLOCK_NETWORK_ID as string, 10) + 0;

export const NetworkRPC = {
  [NetworkId.BscTestnet]: "https://data-seed-prebsc-1-s1.binance.org:8545/",
};
