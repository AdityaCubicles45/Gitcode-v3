// 
//----------------------------------------------------------------------------------------------
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { MenuIcon } from 'lucide-react';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";

export const Navbar = () => {
  const { account } = useWallet();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    setIsWalletConnected(!!account?.address);
  }, [account]);

  const handleDashboardClick = () => {
    setShowLinks(true);
  };

  return (
    <div className="w-full px-4 md:px-12 lg:px-48">
      <div className="flex flex-row justify-between items-center py-4 md:py-8">
        {/* Logo */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <Image
              src="/img/logo.svg"
              alt="N"
              width="32"
              height="32"
              className="w-8"
            />
            <span>Gitcode-v3</span>
          </span>
        </Link>

        {/* Centered Links */}
        <div className="hidden md:flex justify-center items-center flex-grow">
          {showLinks && (
            <div className="flex space-x-6">
              <Link href="/company" className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Company
              </Link>
              <Link href="/dev" className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Dev
              </Link>
            </div>
          )}
        </div>

        {/* Wallet Selector, Dashboard Button, and Theme Changer */}
        <div className="flex flex-row gap-4 items-center">
          <WalletSelector />
          {isWalletConnected && (
            <Link
              href="/dashboard"
              onClick={handleDashboardClick}
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Dashboard
              </span>
            </Link>
          )}
          <MenuIcon className="md:hidden" />
          <ThemeChanger />
        </div>
      </div>

      {/* Mobile view: Show centered links below the Navbar when "Dashboard" is clicked */}
      {showLinks && (
        <div className="md:hidden flex justify-center space-x-6 mt-4">
          <Link href="/company" className="text-lg font-medium text-gray-700 dark:text-gray-200">
            Company
          </Link>
          <Link href="/dev" className="text-lg font-medium text-gray-700 dark:text-gray-200">
            Dev
          </Link>
        </div>
      )}
    </div>
  );
};
