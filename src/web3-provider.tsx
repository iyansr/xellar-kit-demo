import React from 'react';
import { Config, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { XellarKitProvider, defaultConfig, darkTheme } from '@xellar/kit';
import { liskSepolia, polygonAmoy, sepolia } from 'viem/chains';

const xellarAppId = import.meta.env.VITE_XELLAR_APP_ID;
const walletConnectProjectId = import.meta.env.VITE_WC_PROJECT_ID;
const googleClientId = import.meta.env.VITE_XELLAR_GOOGLE_CLIENT_ID;

const telegramBotId = import.meta.env.VITE_TELEGRAM_BOT_ID;
const telegramBotUsername = import.meta.env.VITE_TELEGRAM_BOT_USERNAME;

const config = defaultConfig({
  appName: 'Xellar',
  // Required for WalletConnect
  walletConnectProjectId,

  // Required for Xellar Passport
  xellarAppId: xellarAppId,
  xellarEnv: 'sandbox',
  chains: [polygonAmoy, sepolia, liskSepolia],
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
          googleClientId={googleClientId}
          // Fill this if you want to use Telegram Auth
          telegramConfig={{
            botId: telegramBotId,
            botUsername: telegramBotUsername,
          }}
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
