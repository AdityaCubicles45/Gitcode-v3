"use client";
import './globals.css'
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from 'petra-plugin-wallet-adapter';
import { OKXWallet } from "@okwallet/aptos-wallet-adapter";
import { TrustWallet } from '@trustwallet/aptos-wallet-adapter';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { PopupWidget } from "./components/PopupWidget";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const wallets = [
    new PetraWallet(),
    new TrustWallet(),
    new OKXWallet(),
  ];
  return (
    <html lang="en" suppressHydrationWarning>
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
      </AptosWalletAdapterProvider> 
    </html>
  );
}