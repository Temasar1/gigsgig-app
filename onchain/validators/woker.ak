use cardano/assets.{PolicyId, quantity_of, from_lovelace}
use aiken/primitive/bytearray.{starts_with}
use aiken/collection/list
use aiken/collection/dict
use aiken/crypto.{VerificationKeyHash}
use cardano/address.{Address, Script, VerificationKey}
use cardano/transaction.{
  OutputReference, Transaction
}
use mocktail.{ 
  mint, mocktail_tx, mock_utxo_ref, complete, tx_in,mock_tx_hash,mock_pub_key_address,mock_pub_key_hash
  }
use mocktail/virgin_key_hash.{mock_policy_id}

pub type WorkerSignup {
  MintWorker
  BurnWorker
}
pub type Worker_Datum {
  worker_policy: PolicyId
}

//validators parameters
validator worker(
    worker_token_name: ByteArray,
    input_utxo: OutputReference,
    worker_address: VerificationKeyHash
){
  
   spend(
    datum: Option<Worker_Datum>,
    _redeemer: Data,
    _utxo: OutputReference,
    self: Transaction
   ){
      let Transaction { inputs, ..} = self
      expect Some(datum) = datum
      let Worker_Datum{ worker_policy } = datum

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
          worker_policy,
          worker_token_name,
        ) == 1
      
    must_include_one_worker_token?
      }
  

  mint(redeemer: WorkerSignup , worker_policyid: PolicyId, self: Transaction){
        let Transaction { inputs, mint, ..} = self

    expect [Pair(asset_name , amount)] = 
        mint
          |> assets.tokens(worker_policyid)
          |> dict.to_pairs()
    
    when redeemer is {
    MintWorker ->  {
      expect True = 
        list.any(inputs, fn(input) {input.output_reference == input_utxo})
        
    let valid_token_name = starts_with(asset_name, "GigsWorker")
    amount == 1 && valid_token_name?
    }
   BurnWorker -> amount < 0
    }
  }
  else(_){
    fail
  }
}

fn mock_token_name(){
    "GigsWorkerEmmanuel"
}
fn mock_minting_tx() -> Transaction{
    mocktail_tx()
       |> tx_in(True,
       mock_tx_hash(0), 
       0 ,
       from_lovelace(10_000_000),
       mock_pub_key_address(0, None))
       |> mint(True, 1 ,mock_policy_id(0), mock_token_name())
       |> complete()
 }

test must_mint_correct_worker_tx(){
    worker.mint(mock_token_name(), 
    mock_utxo_ref(0,0),
    mock_pub_key_hash(0),
    MintWorker,
    mock_policy_id(0),
    mock_minting_tx())
}