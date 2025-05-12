import { Asset, ByteString, byteString, conStr0, MeshTxBuilder, OutputReference, PubKeyHash, resolvePlutusScriptHash, resolveScriptHash, scriptHash } from "@meshsdk/core";
import { applyParamtoWorker } from "./apply-param.js";
import { blockchainProvider } from "../../utils.js";



async function mintTasker(
    worker_asset_name: ByteString,
    utxo: OutputReference,
    worker_address: PubKeyHash
){

const worker = applyParamtoWorker(
    worker_asset_name,
    utxo,
    worker_address
    )
const workerScript = worker.script;
const workerPolicyId = resolveScriptHash(workerScript, "V3");

const workerAsset: Asset[] = [{
    unit: workerPolicyId + `GigsWorker${+worker_asset_name}`,
    quantity: "1"
}]

const mintWorkerRedemeer = conStr0([]);

const txBuilder = new MeshTxBuilder({
    fetcher: blockchainProvider,
    submitter: blockchainProvider,
    verbose: true,
});

const unsignedTx = await txBuilder
.mintPlutusScriptV3()
.mint("1", workerPolicyId, `GigsWorker${+worker_asset_name}`)
.mintingScript(workerScript)
.mintRedeemerValue(mintWorkerRedemeer,"JSON")

.txOut("", workerAsset)
.txInCollateral(

)
.changeAddress("")
.selectUtxosFrom()
.complete()

const signedTx = 
}
