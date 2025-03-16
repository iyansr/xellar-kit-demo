import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Web3Provider } from './web3-provider.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Web3Provider>
      <App />
    </Web3Provider>
  </StrictMode>,
);
