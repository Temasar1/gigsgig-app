import { 
    Asset,
    bool, 
    conStr0, 
    integer, 
    MeshTxBuilder, 
    PlutusScript, 
    serializePlutusScript, 
} from "@meshsdk/core";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useWallet } from "@meshsdk/react";
//import { readFile } from "fs/promises";
import { useEffect, useState } from "react";
import { blockchainProvider } from "../../../offchain/utils";
import { METHODS } from "http";

const TaskerHomepage = () => {

const {wallet,connected} = useWallet();
const [title, setTitle] = useState();
const [desc, setDesc]  = useState();
const [status, setStatus] = useState();
const [duration, setDuration] = useState();
const [amount, setAmount] = useState();
const [school, setSchool] = useState();

const id = 1;
const taskId = 1;
async function fetchDb(){
    const res = await fetch("http://localhost:8000/tasker/"+`${id}`);
    const data = await res.json();
   return data;
}
const fetchTask = async() => {
const newData = await fetchDb();
const task = newData.tasks[taskId]
 setTitle(task.title);
 setDesc(task.description);
 setDuration(task.duration);
 setAmount(task.amount);
 setSchool(task.school);
 setStatus(task.status);

}
fetchTask();



const postTask = async (taskData: any) => {
    const response = await fetch("http://localhost:8000/tasker/" + `${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
    });
    const data = await response.json();
    return data;
};

// Example usage



function task(
    valid_from: number,
    valid_to: number,
    is_workdone: boolean,
    amount: string
){
if (connected) {
    wallet.getChangeAddress().then((address) => {
    const userAddress = address;
        console.log(address);



async function createtask(
    valid_from: number,
    valid_to: number,
    is_workdone: boolean,
    amount: string
){

//const collateral:UTxO = (await wallet.getCollateral())[0]!;
const utxos = await wallet.getUtxos();
    
    const taskerScriptRef = "//JSON.parse()"
       // await readFile("./scriptref-hash/tasker.json", "utf-8"));
    const taskerScriptUtxo = await blockchainProvider.fetchUTxOs(taskerScriptRef.txhash);
    const taskerScriptCbor = await taskerScriptUtxo[0].output.scriptRef;
    const taskerPlutusScript: PlutusScript = {
        code: taskerScriptCbor!,
        version: "V3"
    };
        const taskerScriptAddress = serializePlutusScript(taskerPlutusScript).address;

    const task_datum = conStr0([
        integer(valid_from),
        integer(valid_to),
        bool(is_workdone)
    ]);

    const taskLovelace = (Number(amount) * 1000000).toString();

    const taskAsset: Asset[] = [{
        unit: "lovelace",
        quantity: taskLovelace
    }]

    const txBuilder = new MeshTxBuilder({
        fetcher: blockchainProvider,
        submitter: blockchainProvider,
        verbose: true
    })
    const unsignedTx = await txBuilder
    .txOut(taskerScriptAddress,taskAsset)
    .txOutInlineDatumValue(task_datum, "JSON")
    .changeAddress(userAddress)
    .selectUtxosFrom(utxos)
    .complete()

    const signedTx = await wallet.signTx(unsignedTx);
    const txhash  = await wallet.submitTx(signedTx);
    return txhash;
  };
  createtask(
    valid_from,
    valid_to,
    is_workdone,
    amount
   )
  })
 };
};

return ( 
   <section className="w-full relative bg-gradient-to-br from-green-100 to-white py-20 px-4">
      <Header />
        <div className="mt-8">
            <form className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-black">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1 block w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500  bg-gray-800"
                        placeholder="Enter task title"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-lg font-medium text-black">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="mt-1 block w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 bg-gray-800"
                        placeholder="Enter task description"
                        rows={4}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="title" className="block text-lg font-medium text-black">
                        Amount
                    </label>
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        className="mt-1 block w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500  bg-gray-800"
                        placeholder="Enter amount in ADA"
                    />
                </div>
                <div>
                    <label htmlFor="duration" className="block text-lg font-medium text-black">
                        Duration
                    </label>
                    <input
                        type="text"
                        id="duration"
                        name="duration"
                        className="mt-1 block w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500  bg-gray-800"
                        placeholder="Enter task duration"
                    />
                </div>
                <a
                className="px-6 py-3 bg-green-800 text-black text-lg rounded hover:bg-green-600 focus:outline-none"
                onClick={() => alert('Post a Task')}
                >
                Post Task
            </a>
            </form>
        </div>
        <div className="mt-12">
        <h2 className="text-3xl font-semibold text-black mb-6">Tasks posted</h2>
        <div className="p-4 border rounded shadow-sm bg-green-100">
            <h3 className="text-lg font-bold text-black mb-2">Task Title: {title}</h3>
            <p className="text-black mb-1">Description: {desc}</p>
            <p className="text-black mb-1">Expires: {duration}</p>
            <p className="text-black mb-1">Amount: {amount}</p>
            <p className="text-black mb-1">interested: 1</p>
            {/* {tasker} */}
            <div className="flex space-x-4">
            <a onClick={() => {
                

            }}
            className="px-4 py-2 bg-green-800 text-white border border-green-700 rounded hover:bg-green-600 cursor-pointer">
                Accept tasker
            </a>
            <a className="px-4 py-2 bg-green-800 text-white border border-green-700 rounded hover:bg-green-600 cursor-pointer">
               pay tasker 
            </a>
            </div>
        </div>
        </div>
    <Footer />
   </section>
  );
}
 
export default TaskerHomepage;