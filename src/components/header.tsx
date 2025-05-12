import React, { useEffect, useState } from "react";
import { CardanoWallet, useWallet, useAddress } from "@meshsdk/react";


export default function Header() {

const { wallet,connected} = useWallet();

const walletConnected = async() => {
  if(connected){
    
  }
 //console.log(await wallet.getChangeAddress())
}
// useEffect(() => {
//   const isConnected = localStorage.getItem("walletConnected") === "true";
//   setWallet(wallet,name!)
// }, []);

// const connectWallet = () => {
//   setWallet(wallet,name!);
//   localStorage.setItem("walletConnected", "true");
// }
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <a href="./">
        <div className="text-2xl font-bold text-green-600">
            GigsGig<span className="text-black">App</span>
        </div>
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800">
          <a
            href="./worker-form"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
          >
            I am a worker
          </a>
          <a
            href="./tasker-form"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-medium transition"
          >
           I am a tasker
          </a>
          <CardanoWallet 
          persist
           onConnected={walletConnected}
          />
        </nav>
      </div>
    </header>
  );
}
