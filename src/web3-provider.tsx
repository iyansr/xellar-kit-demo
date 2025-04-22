import React from 'react';
import { Config, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { XellarKitProvider, defaultConfig, darkTheme } from '@xellar/kit';
import { liskSepolia, polygonAmoy, sepolia } from 'viem/chains';

const xellarAppId = import.meta.env.VITE_XELLAR_APP_ID;
const walletConnectProjectId = import.meta.env.VITE_WC_PROJECT_ID;

const config = defaultConfig({
  appName: 'Xellar',
  // Required for WalletConnect
  walletConnectProjectId,
  // Required for Xellar Passport
  xellarAppId: xellarAppId,
  xellarEnv: 'production',
  chains: [polygonAmoy, sepolia, liskSepolia],
}) as Config;

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <XellarKitProvider theme={darkTheme}>{children}</XellarKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
