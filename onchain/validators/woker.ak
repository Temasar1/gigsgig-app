use cardano/assets.{PolicyId}
use aiken/primitive/bytearray.{starts_with}
use aiken/crypto.{ScriptHash}
use cardano/transaction.{
  OutputReference, Transaction
}

pub type Worker_Redeemer {
  AcceptWork
}
pub type WorkerSignup {
  MintWorker
  BurnWorker
}
pub type Worker_Datum {
  workerPolicy: PolicyId
}

//validators parameters
validator worker(
    worker_token_name: ByteArray,
    input_utxo: OutputReference,
    worker_address: ScriptHash
){
   spend(
    datum: Option<Worker_Datum>
    redeemer: Worker_Redeemer
    utxo: OutputReference,
    self: Transaction
   ){
      let Transaction { inputs, outputs, ...} = self
      expect Some(worker_input) = find_input(inputs, utxo)
      expect Some(datum) = datum
      let WorkerDatum = { worker_policyid: PolicyId } = datum

      when redeemer is {
      AcceptWork -> {
          //expect one worker token input is present in worker address
          expect [worker_input] = 
            list.filter(
              inputs,
                fn(input) {
                  when input.output.address.payment_credential is {
                    VerificationKey(addr_payment) -> 
                    addr_payment == worker_address
                    Script(_) -> False
                  }
                }
            )
          let must_include_one_worker_token = 
            quantity_of(
              worker_input.output.value,
              worker_policyid,
              worker_token_name
            ) == 1
        }
      }
   }
   gigsworkernewman

    mint(redeemer: WorkerSignup , worker_policyid: PolicyId, self: Transaction){
        let Transaction { inputs, mint, redeemers} = self

    expect valid_token_name = starts_with(worker_token_name, "GigsWorker")
    expect [pair(asset_name , amount)] = 
        mint
          |> tokens(policy_id)
          |> dict.to_pairs()
    
    when redeemer is {
    MintWorker ->  {
        expect true = 
        list.any(inputs, fn(input) {
            input.OutputReference == input_utxo
        })
    amount == 1 && asset_name == valid_token_name
    }
   BurnWorker -> amount < 0
    }
  }
  else(_){
    fail
  }
}