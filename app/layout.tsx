"use client";
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from 'petra-plugin-wallet-adapter';
import { OKXWallet } from "@okwallet/aptos-wallet-adapter";
import { TrustWallet } from '@trustwallet/aptos-wallet-adapter';

const font = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const wallets = [
    new PetraWallet(),
    new TrustWallet(),
    new OKXWallet(),
  ];
  return (
      <html lang="en">
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
        <body className={font.className}>
           
                {children}
                </body>
      </AptosWalletAdapterProvider>
      </html>
  )
}