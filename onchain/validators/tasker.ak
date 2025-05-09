use cardano/transaction.{OutputReference, Transaction, find_input}
use aiken/collection/dict
use aiken/collection/list
use aiken/option
use cardano/address.{Address, VerificationKey, Script}
use cardano/assets.{PolicyId, tokens , quantity_of, from_asset}
use aiken/primitive/bytearray.{starts_with}
use aiken/primitive.{ByteArray, Int}
use types.{
    UserRedeemer,SignupRedeemer, UserDatum
}
use mocktail.{
    mint, mock_policy_id, mocktail_tx
}

pub type UserDatum{
    title: ByteArray;
    amount: Int;
    validity_duration: Int;
    // iswork_done: Boolean;
}

pub type UserRedeemer {
 AcceptWork
}

pub type AddUserRedeemer {
    MintUser
    BurnUser
}
//validator parameters
//perform checks for token to be spent

validator user( 
    user_token_name: ByteArray,  
    input_utxo: OutputReference,
        ){
    spend(
        datum: Option<UserDatum>,
        redeemer: UserRedeemer,
        utxo: OutputReference,
        self: Transaction,
        ){
        let Transaction {inputs, outputs, validity_duration} = self
        expect some(datum) = datum
        let user_datum: UserDatum {
            amount,
            validity_duration,
            iswork_done
        } = datum

     when redeemer is {
        AcceptWork -> {
        //take input of job utxo to spend
        let some(job_input) = find_input(inputs, utxo)

        //check for amount t
         //check if user click work is true
        let verify_if_work_done = iswork_done == True
        
        and {
            verify_if_work_done    
        }
       }
      }
    }
}
//checks if token name is prefixed with "Gigstasker"
//Checks if only one token is minted

mint(redeemer: AddUserRedeemer, policy_id: PolicyId, self: Transaction){
        let Transaction {inputs, mint, redeemers}  = self


    //specify that the token name is a GigsTasker
    expect valid_token_name = starts_with(user_token_name, "GigsTasker")
    
    expect [pair(asset_name , amount)] = 
          mint 
            |> tokens(policy_id)
            |> dict.to_pairs()
        
        when redeemer is {
        MintUser -> {
            expect True = 
            list.any(inputs, fn(input) {input.OutputReference == input_utxo})

            amount == 1 && asset_name == valid_token_name
            }
        BurnUser -> amount < 0
        }
    }

    else(_) {
    fail
    }

fn mock_token_name(){
    "GigsTaskerEmmanuel"
}

test must_mint_valid_token() -> Transaction {
 let redeemer = MintUser
 let tx = mocktail_tx()
 user.mint(redeemer, mock_policy_id, tx)
 tx.mint == from_asset(mock_policy_id(0)mock_token_name(),1 )
}