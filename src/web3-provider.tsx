import React from 'react';
import { Config, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { XellarKitProvider, defaultConfig, darkTheme } from '@xellar/kit';
import { polygonAmoy } from 'viem/chains';

const xellarAppId = import.meta.env.VITE_XELLAR_APP_ID;
const walletConnectProjectId = import.meta.env.VITE_WC_PROJECT_ID;

const config = defaultConfig({
  appName: 'Xellar',
  // Required for WalletConnect
  walletConnectProjectId,

  // Required for Xellar Passport
  xellarAppId: xellarAppId,
  xellarEnv: 'sandbox',
  chains: [polygonAmoy],
  // if you're using Next.js App Router
}) as Config;

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <XellarKitProvider
          theme={darkTheme}
          // Fill this if you want to use Google Auth
          //  googleClientId="YOUR_GOOGLE_CLIENT_ID"
          //  // Fill this if you want to use Telegram Auth
          //  telegramConfig={{
          //    botId: 'YOUR_TELEGRAM_BOT_ID',
          //    botUsername: 'YOUR_TELEGRAM_BOT_USERNAME',
          //  }}
          //  // Fill this if you want to use Apple Auth
          //  appleLoginConfig={{
          //    clientId: 'YOUR_APPLE_CLIENT_ID',
          //    redirectUri: 'YOUR_REDIRECT_URI',
          //  }}
          // Fill this if you want to use Whatsapp Auth
          //  enableWhatsappLogin={true}
        >
          {children}
        </XellarKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
