import { applyParamsToScript, OutputReference, PlutusScript} from "@meshsdk/core";
import plutusBlueprint from "../../../onchain/plutus.json" with {type: 'json'};

const taskerValidator = plutusBlueprint.validators.find(
    ({title}) => title === "tasker.user.spend"
);
const taskerCborScript = taskerValidator?.compiledCode;

function applyParamtoTasker(utxo: OutputReference){
    const script = applyParamsToScript(
        taskerCborScript!,
        [
            utxo
        ],
        "JSON"
    )

const plutusScript: PlutusScript = {
    code: script,
    version: "V3"
} 

return {script,plutusScript}
};

export {applyParamtoTasker};
