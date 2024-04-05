'use client'

import {defineChain} from 'viem'

export const harmonie = defineChain({
    id: 441,
    name: 'Harmonie',
    nativeCurrency: {
      decimals: 18,
      name: 'HMY',
      symbol: 'HMY',
    },
    rpcUrls: {
      default: {
        http: ['https://harmonie-endpoint-02.allfeat.io'],
      },
    },
    blockExplorers: {
      default: { name: 'Explorer', url: 'https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fharmonie-endpoint-02.allfeat.io#/explorer' },
    },
    contracts: {
      multicall3: {
        address: '0x9169eb61fbcbcad3bb086b6e0181d0dd250b83fa',
        blockCreated: 505132,
      },
    },
  })