# GigsGigApp Onchain Validation

The GigsGigApp platform has two main types of users: 
Taskers
Workers

## Tasker
A Tasker gains access to the platform by minting an NFT as an access token.  
    The NFT name is specified as:  GigsTasker + [username]

## Worker
A Worker gains access to the platform by minting an NFT as an access token.  
    The NFT name is specified as:   GigsWorker + [username]


## Creating a Task
A task is represented as a UTXO with the following datum:
    valid_from: Start time of the task.
    valid_to: End time of the task.
    is_work_done: initially set to false.
The locked UTXO also includes the payment for the job in ADA ready to be spent.

## Paying the Worker
To allow a Worker to spend from the Tasker's validator, the following checks are required:
1. Verify that the Worker has a specific worker minted in their personal address.
2. Validate the following output datum:
     - The time validity of the input datum is consistent when attempting to spend.
     - The is work done must be set to `true`, which is updated by the user from the fronend

## Notes
We acknowledge that there are many additional checks and validations that could be added. However, the time constraints of the hackathon limited the scope as commenced very late.
