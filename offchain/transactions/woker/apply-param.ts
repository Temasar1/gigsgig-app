import { applyParamsToScript, ByteString, OutputReference, PlutusScript, PubKeyAddress, PubKeyHash, VerificationKey} from "@meshsdk/core";
import plutusBlueprint from "../../../onchain/plutus.json" with {type: 'json'};

const taskerValidator = plutusBlueprint.validators.find(
    ({title}) => title === "woker.worker.spend"
);
const workerCborScript = taskerValidator?.compiledCode;

function applyParamtoWorker(
    worker_token_name: ByteString,
    input_utxo: OutputReference,
    worker_address: PubKeyHash,
){
    const script = applyParamsToScript(
        workerCborScript!,
        [
            worker_token_name,
            input_utxo,
            worker_address
        ],
        "JSON"
    )

    const plutusScript: PlutusScript = {
        code: script,
        version: "V3"
    } 
return {script, plutusScript};
};

export {applyParamtoWorker};
