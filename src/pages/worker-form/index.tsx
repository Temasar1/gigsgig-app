import {
   Asset,
   byteString,
   integer,
   stringToHex, 
   conStr0, 
   MeshTxBuilder,
   OutputReference,  
   resolveScriptHash,
   UTxO, 
   pubKeyHash,
   deserializeAddress
  } from "@meshsdk/core";
import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import PopularTasks from "@/components/populartasks";
import Footer from "@/components/footer";
import { useWallet } from "@meshsdk/react";
import { applyParamtoWorker } from "../../../offchain/transactions/woker/apply-param";
import { blockchainProvider } from "../../../offchain/utils";



const workerForm  = () => {


    const {wallet, connected} = useWallet();
    const [username, setUsername] = useState("");
    const [school, setSchool] = useState("");
    const [interest, setInterest] = useState("");
    const [amount, setAmount] = useState("");
    const [address, setAddress] = useState("");

//Json server objects
    const worker = { address, username, school, interest}

    function mint(username: string){
      if (connected) {
        wallet.getChangeAddress().then((address) => {
        const userAddress = address;
        const addressPubkey = deserializeAddress(userAddress).pubKeyHash;
        
      
  async function mintWorker(
  ){
    const collateral:UTxO = (await wallet.getCollateral())[0]!;
    const utxos = await wallet.getUtxos();
    const mintUtxo = utxos[0];

    if(collateral.input.txHash === undefined){
      throw Error("Collateral not found, set in wallet");
    }
    
    const utxo: OutputReference = conStr0([
        byteString(mintUtxo.input.txHash),
        integer(0),
      ]);
    
    const usernameHex = stringToHex("GigsWorker"+ username);
    const worker = applyParamtoWorker(
        byteString(usernameHex),
        utxo,
        pubKeyHash(addressPubkey)
    )
    const workerScript = worker.script;
    const workerPolicyId = resolveScriptHash(workerScript, "V3");
    
    const workerAsset: Asset[] = [{
        unit: workerPolicyId + usernameHex,
        quantity: "1"
    }];
    
    const mintWorkerRedemeer = conStr0([]);
    
    const txBuilder = new MeshTxBuilder({
        fetcher: blockchainProvider,
        submitter: blockchainProvider,
        verbose: true,
    });
    
    const unsignedTx = await txBuilder
    .txIn(
      mintUtxo.input.txHash,
      mintUtxo.input.outputIndex,
      mintUtxo.output.amount,
      mintUtxo.output.address
    )
    .mintPlutusScriptV3()
    .mint("1", workerPolicyId, usernameHex)
    .mintingScript(workerScript)
    .mintRedeemerValue(mintWorkerRedemeer,"JSON")
    
    .txOut(userAddress, workerAsset)
    .txOutReferenceScript(workerScript)
    .txInCollateral(
      collateral.input.txHash,
      collateral.input.outputIndex,
      collateral.output.amount,
      collateral.output.address
    )
    .changeAddress(userAddress)
    .selectUtxosFrom(utxos)
    .setNetwork("preprod")
    .complete();
    
    const signedTx = await wallet.signTx(unsignedTx, true);
    const mintTxhash = await wallet.submitTx(signedTx);

    console.log(mintTxhash);
    return mintTxhash;
    };
    mintWorker()

    });
   };
  };

  return (
    <section className="w-full relative bg-gradient-to-br from-green-100 to-white py-20 px-4">
      <Header />
  <div className="h-screen flex items-center justify-center -my-40">
    <form className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Worker Sign Up</h2>
      <div className="mb-4">
      <label htmlFor="username" className="block text-sm font-medium text-black">
      Username
      </label>
      <input
      type="text"
      id="username"
      name="username"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
      placeholder="Enter your username"
      value={username}
      onChange={(e) => {setUsername(e.target.value)}}
      />
      </div>
      <div className="mb-4">
      <label htmlFor="school" className="block text-sm font-medium text-black">
      Name of School
      </label>
      <input
      type="text"
      id="school"
      name="school"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
      placeholder="Enter your school name"
      value={school}
      onChange={(e) => {setSchool(e.target.value)}}
      />
      </div>
      <div className="mb-4">
      <label htmlFor="work" className="block text-sm font-medium text-black">
       Works Interested In
      </label>
      <input
      type="text"
      id="work"
      name="work"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
      placeholder="Enter the type of work"
      value={interest}
      onChange={(e) => {setInterest(e.target.value)}}
      />
      </div>
      <div className="mb-4">
      <label htmlFor="amount" className="block text-sm font-medium text-black">
       Minimum expected to receive
      </label>
      <input
      type="number"
      id="amount"
      name="amount"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
      placeholder="e.g 100 ADA"
      value={amount}
      onChange={(e) => {setAmount(e.target.value)}}
      />
      </div>
      <button
      type="submit"
      className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      onClick={() => {
        mint(username);
      }}
      >
      Submit
      </button>
    </form>
  </div>
      <PopularTasks />
      <Footer />
    </section>
  );
};

export default workerForm;
