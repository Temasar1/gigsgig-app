import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import PopularTasks from "@/components/populartasks";
import Footer from "@/components/footer";
import { useWallet } from "@meshsdk/react";
import { Asset, byteString, stringToHex, conStr0, hashByteString, integer, MeshTxBuilder, OutputReference, resolveScriptHash, UTxO } from "@meshsdk/core";
import { applyParamtoTasker } from "../../../offchain/transactions/tasker/apply-param";
import { blockchainProvider } from "../../../offchain/utils";
//import { writeFile } from "fs/promises";

const formTasker: React.FC = () => {

  const {wallet,connected} = useWallet();
  const [username, setUsername] = useState("");
  const [school, setSchool] = useState("");
  const [interested, setInterest] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");

//Json server objects
  const tasker = {address,username,school,interested};
  
function setUser(e: React.FormEvent) {
  e.preventDefault(); // Prevent the page from refreshing
  console.log(username);
  mint(username)
}





function mint(username: string){
  if (connected) {
    wallet.getChangeAddress().then((address) => {
     const userAddress = address;

     
  async function mintTasker(
  ){
    const collateral:UTxO = (await wallet.getCollateral())[0]!;
    const utxos = await wallet.getUtxos();
    const mintUtxo = utxos[1];
    
    console.log(mintUtxo.output.amount);
    const utxo: OutputReference = conStr0([
      byteString(mintUtxo.input.txHash),
      integer(0),
    ]);
    
      const usernameHex = stringToHex("GigsTasker"+username)
      
      const tasker = applyParamtoTasker(utxo)
      const taskerScript = tasker.script;
      const taskerPolicyId = resolveScriptHash(taskerScript, "V3");
      
      const taskerAsset: Asset[] = [{
          unit: taskerPolicyId + usernameHex,
          quantity: "1"
      }]
      
      const mintTaskerRedemeer = conStr0([]);
      
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
      .mint("1", taskerPolicyId, usernameHex)
      .mintingScript(taskerScript)
      .mintRedeemerValue(mintTaskerRedemeer,"JSON")
      
      .txOut(userAddress, taskerAsset)
      .txOutReferenceScript(taskerScript)
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
      
      const signedTx = await  wallet.signTx(unsignedTx, true);
      const txhash = await  wallet.submitTx(signedTx);
      console.log(txhash);

      // await writeFile(
      //  // "./scriptref-hash/tasker.json",
      //   JSON.stringify({ taskerHash: txhash })
      // );
      return txhash;
    };
  mintTasker()
  });
 };
};

  return (
    <section className="w-full relative bg-gradient-to-br from-green-100 to-white py-20 px-4">
      <Header />
  <div className="h-screen flex items-center justify-center -my-40">
    <form className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-black">Tasker Sign Up</h2>
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
      required
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
      required
      value={school}
      onChange={(e) => {setSchool(e.target.value)}}
      />
      </div>
      <div className="mb-4">
      <label htmlFor="work" className="block text-sm font-medium text-black">
      Tasks Interested In
      </label>
      <input
      type="text"
      id="work"
      name="work"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
      placeholder="Enter the type of work"
      required
      value={interested}
      onChange={(e) => {setInterest(e.target.value)}}
      />
      </div>
      <div className="mb-4">
      <label htmlFor="amount" className="block text-sm font-medium text-black">
       Minimum available for payment
      </label>
      <input
      type="number"
      id="amount"
      name="amount"
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-black"
      placeholder="e.g 100 ADA"
      required
      value={amount}
      onChange={(e) => {setAmount(e.target.value)}}
      />
      </div>
      <a
      type="submit"
      className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      onClick={() => {
        mint(username);
      }}
      >
      Submit
      </a>
    </form>
  </div>
      <PopularTasks />
      <Footer/>
    </section>
  );
};

export default formTasker;
