import { Asset, bool, conStr0, integer, MeshTxBuilder, OutputReference, serializePlutusScript } from "@meshsdk/core";
import { applyParamtoTasker } from "./apply-param.js";
import { blockchainProvider } from "../../utils.js";
import { readFile } from "fs/promises";

async function createtask(
    valid_from: number,
    valid_to: number,
    is_workdone: boolean,
    utxo: OutputReference,
    amount: string
){
const taskerScriptRef = JSON.parse(
    await readFile("./scriptref-hash/tasker.json", "utf-8"));
//const taskerScript = await blockchainProvider.fetchUTxOs(taskerUtxo.txhash);

    const task_datum = conStr0([
        integer(valid_from),
        integer(valid_to),
        bool(is_workdone)
    ]);
    
const taskAsset: Asset[] = [{
    unit: "lovelace",
    quantity: amount
}]


const txBuilder = new MeshTxBuilder({
    fetcher: blockchainProvider,
    submitter: blockchainProvider,
    verbose: true
})
const unsignedTx = await txBuilder
.txOut(taskerScriptAddress,taskAsset)
.txOutInlineDatumValue(task_datum, "JSON")
.changeAddress("")
.selectUtxosFrom()
.complete()

const signedTx = 
}