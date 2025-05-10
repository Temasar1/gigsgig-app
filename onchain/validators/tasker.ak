use cardano/transaction.{OutputReference, Transaction}
use aiken/collection/dict
use aiken/collection/list
use cardano/assets.{PolicyId, from_lovelace}
use aiken/primitive/bytearray.{starts_with}
use cocktail/vodka_validity_range.{valid_before}
use mocktail.{ mint, mocktail_tx, mock_utxo_ref, complete, tx_in,mock_tx_hash,mock_pub_key_address}
use mocktail/virgin_key_hash.{mock_policy_id}

pub type TaskerDatum{
    validity_duration: Int,
    iswork_done: Bool
}

pub type AddUserRedeemer {
    MintUser
    BurnUser
}
//validator parameters
//perform checks for token to be spent

validator user(   
    input_utxo: OutputReference,
        ){
    spend(
        datum: Option<TaskerDatum>,
        _redeemer: Data,
        _utxo: OutputReference,
        self: Transaction,
        ){
        let Transaction { validity_range, ..} = self
        expect Some(datum) = datum
            let TaskerDatum {validity_duration, iswork_done} = datum

            let is_upper_bound_correct = 
                valid_before(validity_range, validity_duration)
            
            let check_if_workdone = iswork_done == True
        
    is_upper_bound_correct? && check_if_workdone?
    }
    
    //checks if token name is prefixed with "Gigstasker"
    //Checks if only one token is minted

 mint(redeemer: AddUserRedeemer, policy_id: PolicyId, self: Transaction){
    let Transaction {inputs, mint, ..}  = self


    //specify that the token name is a GigsTasker
  
    expect [Pair(asset_name , amount)] =
          mint 
            |> assets.tokens(policy_id)
            |> dict.to_pairs()
        
        when redeemer is {
        MintUser -> {
          expect True = 
            list.any(inputs, fn(input) {input.output_reference == input_utxo})

        let valid_token_name = starts_with(asset_name, "GigsTasker")

        amount == 1 && valid_token_name?
            }
        BurnUser -> amount < 0
        }
    }

    else(_) {
    fail
    }
}

fn mock_token_name(){
    "GigsTaskerEmmanuel"
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

test must_mint_correct_tasker_tx(){
    user.mint(mock_utxo_ref(0,0),
    MintUser,
    mock_policy_id(0),
    mock_minting_tx())
}