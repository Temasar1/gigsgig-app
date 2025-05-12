// import { Asset, conStr0, MeshTxBuilder, OutputReference, resolvePlutusScriptHash, resolveScriptHash, scriptHash } from "@meshsdk/core";
// import { applyParamtoTasker } from "./apply-param.js";
// import { blockchainProvider } from "../../utils.js";

// async function mintTasker(
//     utxo: OutputReference,
//     tasker_asset_name: string
// ){

// const tasker = applyParamtoTasker(utxo)
// const taskerScript = tasker.script;
// const taskerPolicyId = resolveScriptHash(taskerScript, "V3");

// const taskerAsset: Asset[] = [{
//     unit: taskerPolicyId + `GigsWorker${+tasker_asset_name}`,
//     quantity: "1"
// }]

// const mintTaskerRedemeer = conStr0([]);

// const txBuilder = new MeshTxBuilder({
//     fetcher: blockchainProvider,
//     submitter: blockchainProvider,
//     verbose: true,
// });

// const unsignedTx = await txBuilder
// .mintPlutusScriptV3()
// .mint("1", taskerPolicyId, `GigsTasker${+tasker_asset_name}`)
// .mintingScript(taskerScript)
// .mintRedeemerValue(mintTaskerRedemeer,"JSON")

// .txOut("", taskerAsset)
// .txInCollateral(

// )
// .changeAddress("")
// .selectUtxosFrom()
// .complete()

// const signedTx = 
// }
