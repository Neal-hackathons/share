'use client'

import { createConfig, http } from 'wagmi'
import {harmonie} from '@/lib/chain'
import { createClient } from 'viem'

export const config = createConfig({
    chains: [harmonie],
    multiInjectedProviderDiscovery: true,
    client({chain}) {
        return createClient({chain, transport: http})
    }
})