"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import { Header } from "./Header";
import { MenuIcon } from 'lucide-react'
import { useWallet } from '@aptos-labs/wallet-adapter-react'
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";


export const Navbar = () => {
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];
  const {account} = useWallet();

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between  p-8 mx-auto  xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto ">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>Gitcode-v3</span>
                  </span>
                </Link>
               
              </div>
            </>
          )}
        </Disclosure>

        {/* <Header /> */}
          <div className="flex flex-row gap-4 " >
          <aside className=" ">
                <WalletSelector />
                {account?.address &&  <Link
                    href="/dashboard"
                    className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "
                  >
                    <span className="absolute  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ">
                Dashboard
                    </span>
                  </Link>}
                
                  {/* {user ? <UserButton afterSignOutUrl="/" /> : null} */}
                  <MenuIcon className="md:hidden" />
                </aside>
          <ThemeChanger />
          </div>
      </nav>
    </div>
  );
}

