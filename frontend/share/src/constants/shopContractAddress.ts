import type { Address } from "viem";

export const SHOP_CONTRACT_ADDRESS = process.env.NODE_ENV !== "production" ? "0x9E64f2E5dE37f1A09259cBd921918cb2245f76fF" : process.env.NEXT_PUBLIC_SHOP_CONTRACT_ADDRESS as Address;