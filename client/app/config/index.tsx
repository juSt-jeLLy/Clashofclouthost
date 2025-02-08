import { createConfig, cookieStorage, createStorage } from 'wagmi'
import { mainnet, arbitrum, sepolia } from 'wagmi/chains'
import { walletConnect, injected } from 'wagmi/connectors'
import { http, createPublicClient } from 'viem'

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const config = createConfig({
  chains: [mainnet, arbitrum, sepolia],
  connectors: [
    walletConnect({ projectId }),
    injected()
  ],
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  client: ({ chain }) => createPublicClient({
    chain,
    transport: http()
  })
})