# GigsGigApp Onchain Validation

The app has two main users 
Tasker
Worker


## Tasker
- A tasker has access to the platform by minting a NFT as access token specifying the Nftname as a 
GigsTakser + the username

## Worker
- A worker has access to the platform by minting a NFT as access token specifying the Nftname as a 
GigsWorker + the username


# Create task
A task utxo is created with the datum of time intervals of valid_from, valid_to, and check is is_workdone which is initially false.

with the utxo payment for job in ADA

# pay worker
For worker to spend from tasker vaidator there has to be some checks
which is to check if the worker has some policyId minted in the personal address

With the following output datum checks
Time validity of the input datum is consistent when trying to spend
is work done should be true which would be updated the user

##
We believe there would be a lot of checks to this platform on the validation logic but the time frame of the hackathon was a limitation.
