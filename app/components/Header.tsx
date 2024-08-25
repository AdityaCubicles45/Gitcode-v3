"use client";
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import { useWallet } from '@aptos-labs/wallet-adapter-react'
type Props = {}
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";


export const Header =  (props: Props) => {
const {account} = useWallet();
  return (
    <header className="right-0 left-100 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      {/* // Code for the header goes here */}
      
      <aside className="">
      <WalletSelector />
      {account?.address &&  <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      Dashboard
          </span>
        </Link>}
       
        {/* {user ? <UserButton afterSignOutUrl="/" /> : null} */}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  )
}
